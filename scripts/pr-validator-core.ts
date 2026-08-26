import path from "node:path";

export interface CommitDiffInfo {
  commitMessage: string;
  files: string[];
}

export interface PRValidationResult {
  valid: boolean;
  errors: string[];
  warnings: string[];
}

const ALLOWED_ASSET_REGEX = /^public\/assets\/worlds\/[a-z0-9-]+\/[a-z0-9-_.]+\.(svg|png)$/i;
const ALLOWED_OBJECTS_REGEX = /^src\/data\/worlds\/[a-z0-9-]+\/objects\.ts$/i;
const ALLOWED_PLACEMENTS_REGEX = /^src\/data\/worlds\/[a-z0-9-]+\/placements\.ts$/i;
const FORBIDDEN_EXTENSIONS = [".exe", ".sh", ".bat", ".cmd", ".js", ".mjs", ".cjs", ".html", ".wasm", ".py", ".php"];

/**
 * Pure validation logic for PR commits and file changes.
 * Tests can run directly against this function with simulated commit diffs.
 */
export function validatePRCommits(commits: CommitDiffInfo[]): PRValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  // 1. Commit count check
  if (commits.length === 0) {
    return {
      valid: true,
      errors: [],
      warnings: ["No commits found to validate."],
    };
  }

  if (commits.length !== 2) {
    errors.push(
      `PR must contain exactly 2 commits following the contributor workflow (Found: ${commits.length} commits).`
    );
  }

  // 2. File boundary validation across all commits
  const allFiles = commits.flatMap((c) => c.files);

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
        `Forbidden file modified: '${file}'. Contributors may only touch public/assets/worlds/<world>/*, objects.ts, and placements.ts.`
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
    valid: errors.length === 0,
    errors,
    warnings,
  };
}
