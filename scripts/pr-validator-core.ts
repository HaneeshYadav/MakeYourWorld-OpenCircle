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

const ALLOWED_ASSET_REGEX = /^public\/assets\/worlds\/[a-z0-9-]+\/[a-z0-9-_.]+\.(svg|png)$/i;
const ALLOWED_OBJECTS_REGEX = /^src\/data\/worlds\/[a-z0-9-]+\/objects\.ts$/i;
const ALLOWED_PLACEMENTS_REGEX = /^src\/data\/worlds\/[a-z0-9-]+\/placements\.ts$/i;
const FORBIDDEN_EXTENSIONS = [".exe", ".sh", ".bat", ".cmd", ".js", ".mjs", ".cjs", ".html", ".wasm", ".py", ".php"];

/**
 * Authoritative Check:
 * A PR is strictly classified as a Student World Contribution IF AND ONLY IF
 * the branch name starts with the `contrib/` prefix (or `contrib-`).
 *
 * Example valid student branches:
 * - contrib/forest-butterfly
 * - contrib/campus-backpack
 * - contrib-slot-01
 */
export function isContribBranch(branchName?: string): boolean {
  if (!branchName) return false;
  return /^contrib\/.+/i.test(branchName) || /^contrib-.+/i.test(branchName);
}

/**
 * Validates PR commits and file boundaries based on branch prefix.
 *
 * Classification Rule:
 * 1. Non-contrib branches (`feature/*`, `fix/*`, `chore/*`, `docs/*`, `dev`, `main`, etc.)
 *    are classified as Maintainer / Infrastructure PRs. They safely bypass the student
 *    2-commit validation regardless of which files they modify.
 * 2. `contrib/*` branches are classified as Student World Contributions and must strictly satisfy:
 *    - Exactly 2 commits.
 *    - Commit 1 must contain asset (SVG/PNG) + objects.ts registration (no placements).
 *    - Commit 2 must contain placements.ts.
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
      skippedReason: `Maintainer branch detected ('${headRef || "unspecified"}'). Student 2-commit validator skipped.`,
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

  const allFiles = commits.flatMap((c) => c.files);

  // --- Strict Student Contribution Rules for contrib/* branches ---
  // 1. Commit count check (must be exactly 2 commits)
  if (commits.length !== 2) {
    errors.push(
      `Student World Contribution on '${headRef}' must contain exactly 2 commits following the contributor workflow (Found: ${commits.length} commits).`
    );
  }

  // 2. File boundary validation across all files
  for (const file of allFiles) {
    const ext = path.extname(file).toLowerCase();
    if (FORBIDDEN_EXTENSIONS.includes(ext)) {
      errors.push(`Unsafe file type detected: '${file}'`);
    }

    const isAllowed =
      ALLOWED_ASSET_REGEX.test(file) ||
      ALLOWED_OBJECTS_REGEX.test(file) ||
      ALLOWED_PLACEMENTS_REGEX.test(file);

    if (!isAllowed) {
      errors.push(
        `Forbidden file modified in student contribution: '${file}'. Students may only touch public/assets/worlds/<world>/*, objects.ts, and placements.ts.`
      );
    }
  }

  // 3. Commit 1 vs Commit 2 separation validation (if 2 commits exist)
  if (commits.length === 2) {
    const commit1 = commits[0];
    const commit2 = commits[1];

    // Commit 1 should contain Asset + objects.ts (must NOT contain placements.ts)
    const commit1HasPlacement = commit1.files.some((f) => ALLOWED_PLACEMENTS_REGEX.test(f));
    if (commit1HasPlacement) {
      errors.push("Commit 1 must NOT contain placement changes (placements.ts). Move placement changes to Commit 2.");
    }

    const commit1HasAssetOrObject = commit1.files.some(
      (f) => ALLOWED_ASSET_REGEX.test(f) || ALLOWED_OBJECTS_REGEX.test(f)
    );
    if (!commit1HasAssetOrObject) {
      errors.push("Commit 1 must contain the asset SVG/PNG and/or object registration in objects.ts.");
    }

    // Commit 2 should contain placements.ts
    const commit2HasPlacement = commit2.files.some((f) => ALLOWED_PLACEMENTS_REGEX.test(f));
    if (!commit2HasPlacement) {
      errors.push("Commit 2 must contain the object placement in placements.ts.");
    }
  }

  return {
    isStudentContribution: true,
    valid: errors.length === 0,
    errors,
    warnings,
  };
}
