import path from "node:path";

export interface CommitDiffInfo {
  commitMessage: string;
  files: string[];
}

export interface PRValidationResult {
  isStudentContribution: boolean;
  valid: boolean;
  errors: string[];
  warnings: string[];
  skippedReason?: string;
}

const ALLOWED_OBJECTS_REGEX = /^src\/data\/worlds\/([a-z0-9-]+)\/objects\.ts$/i;
const ALLOWED_PLACEMENTS_REGEX = /^src\/data\/worlds\/([a-z0-9-]+)\/placements\.ts$/i;
const FORBIDDEN_EXTENSIONS = [".exe", ".sh", ".bat", ".cmd", ".js", ".mjs", ".cjs", ".html", ".wasm", ".py", ".php"];

/**
 * Authoritative Check:
 * A PR is strictly classified as a Student World Contribution IF AND ONLY IF
 * the branch name starts with the `contrib/` prefix (or `contrib-`).
 *
 * Example valid student branches:
 * - contrib/growing-forest-butterfly
 * - contrib/growing-campus-student-backpack
 * - contrib-slot-01
 */
export function isContribBranch(branchName?: string): boolean {
  if (!branchName) return false;
  return /^contrib\/.+/i.test(branchName) || /^contrib-.+/i.test(branchName);
}

/**
 * Extracts assigned world slug from contrib branch name if available.
 * e.g., 'contrib/growing-forest-butterfly' -> 'growing-forest'
 */
export function extractWorldFromBranch(branchName?: string): string | null {
  if (!branchName) return null;
  const match = branchName.match(/^contrib\/([a-z0-9-]+)-[a-z0-9-]+$/i);
  if (match) {
    return match[1].toLowerCase();
  }
  return null;
}

/**
 * Validates PR commits and file boundaries based on branch prefix.
 *
 * Classification Rule:
 * 1. Non-contrib branches (`feature/*`, `fix/*`, `chore/*`, `docs/*`, `dev`, `main`, etc.)
 *    are classified as Maintainer / Infrastructure PRs. They safely bypass the student
 *    validator regardless of which files they modify.
 * 2. `contrib/*` branches are classified as Student World Contributions and must satisfy:
 *    - Minimum 2 commits (flexible commit count: 2, 3, 4, 5+ commits allowed).
 *    - Strict file scope: Student contributions normally modify ONLY the assigned world's
 *      `src/data/worlds/<world>/objects.ts` and `src/data/worlds/<world>/placements.ts`.
 *    - Reuses existing repository SVG assets without modifying existing asset files.
 *    - Must NOT modify maintainer files (docs, engine, schemas, components, app, tests, workflows, package.json).
 *    - Must NOT contain unsafe or executable file types.
 */
export function validatePRCommits(commits: CommitDiffInfo[], headRef?: string): PRValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  const isStudentBranch = isContribBranch(headRef);

  // If the branch is NOT a student contrib branch, safely skip the student validator.
  if (!isStudentBranch) {
    return {
      isStudentContribution: false,
      valid: true,
      errors: [],
      warnings: [],
      skippedReason: `Maintainer branch detected ('${headRef || "unspecified"}'). Student validator skipped.`,
    };
  }

  if (commits.length === 0) {
    return {
      isStudentContribution: true,
      valid: false,
      errors: ["Student contribution branch has no commits to validate."],
      warnings: [],
    };
  }

  const allFiles = Array.from(new Set(commits.flatMap((c) => c.files)));

  // --- Strict Student Contribution Rules for contrib/* branches ---
  // 1. Commit count check (Minimum 2 commits required, more allowed)
  if (commits.length < 2) {
    errors.push(
      `❌ Contribution validation failed: Your branch contains only 1 commit. At least 2 commits are required for student contributions (Commit 1: Register object using existing asset, Commit 2: Add placement). Found: ${commits.length} commit.`
    );
  }

  // 2. File boundary & scope validation across all files
  let detectedWorld: string | null = null;

  for (const file of allFiles) {
    const ext = path.extname(file).toLowerCase();
    if (FORBIDDEN_EXTENSIONS.includes(ext)) {
      errors.push(`Unsafe file type detected: '${file}'`);
    }

    const isObjects = ALLOWED_OBJECTS_REGEX.test(file);
    const isPlacements = ALLOWED_PLACEMENTS_REGEX.test(file);

    if (file.startsWith("public/assets/worlds/")) {
      errors.push(
        `❌ Unexpected asset modification: '${file}'. This contribution normally reuses an existing repository asset. You do not need to create or modify an SVG for this task. Please restore the existing asset and reference it from objects.ts instead.`
      );
      continue;
    }

    if (!isObjects && !isPlacements) {
      errors.push(
        `❌ Forbidden file modified in student contribution: '${file}'. Student contributions may only modify the assigned world's objects.ts and placements.ts.`
      );
      continue;
    }

    // Check single assigned world scope
    const match = file.match(/^src\/data\/worlds\/([a-z0-9-]+)\/(objects|placements)\.ts$/i);
    if (match) {
      const fileWorld = match[1].toLowerCase();
      if (!detectedWorld) {
        detectedWorld = fileWorld;
      } else if (detectedWorld !== fileWorld) {
        errors.push(
          `❌ Multi-world modification detected: '${file}'. You are assigned to '${detectedWorld}'. Cannot modify multiple worlds in a single contribution.`
        );
      }
    }
  }

  // 3. Structural Commit Content Validation across the PR
  const hasObjectsModified = allFiles.some((f) => ALLOWED_OBJECTS_REGEX.test(f));
  const hasPlacementsModified = allFiles.some((f) => ALLOWED_PLACEMENTS_REGEX.test(f));

  if (!hasObjectsModified) {
    errors.push("Missing object registration: You must register your new object in the assigned world's objects.ts.");
  }
  if (!hasPlacementsModified) {
    errors.push("Missing placement: You must add your object placement in the assigned world's placements.ts.");
  }

  // 4. Commit 1 separation check (First commit should not mix in placement if 2 commits are used)
  if (commits.length >= 2) {
    const commit1 = commits[0];
    const commit1HasPlacement = commit1.files.some((f) => ALLOWED_PLACEMENTS_REGEX.test(f));
    const commit1HasObjects = commit1.files.some((f) => ALLOWED_OBJECTS_REGEX.test(f));

    if (commit1HasPlacement && !commit1HasObjects) {
      errors.push("Commit 1 should register the object in objects.ts before placing it in placements.ts.");
    }
  }

  return {
    isStudentContribution: true,
    valid: errors.length === 0,
    errors,
    warnings,
  };
}
