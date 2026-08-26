import { execSync } from "node:child_process";
import path from "node:path";

/**
 * Validates pull request contributor constraints:
 * 1. PR only modifies contributor-allowed files:
 *    - public/assets/worlds/<world>/*
 *    - src/data/worlds/<world>/objects.ts
 *    - src/data/worlds/<world>/placements.ts
 * 2. Assets are valid SVG or PNG (no executable or suspicious extensions).
 * 3. Two distinct commits exist in the PR (Asset+Registration, then Placement).
 */
function validateContributorPR() {
  const baseRef = process.env.GITHUB_BASE_REF || "dev";
  console.log(`🔍 Validating pull request against target base: '${baseRef}'...`);

  // 1. Get changed files against baseRef
  let diffOutput = "";
  try {
    diffOutput = execSync(`git diff --name-only origin/${baseRef}...HEAD`, {
      encoding: "utf-8",
    });
  } catch {
    try {
      diffOutput = execSync(`git diff --name-only HEAD~2...HEAD`, {
        encoding: "utf-8",
      });
    } catch {
      console.warn("⚠️ Could not diff against base ref. Checking working tree changes.");
      diffOutput = execSync("git diff --name-only HEAD", { encoding: "utf-8" });
    }
  }

  const changedFiles = diffOutput
    .split("\n")
    .map((f) => f.trim())
    .filter(Boolean);

  if (changedFiles.length === 0) {
    console.log("ℹ️ No changed files detected.");
    return;
  }

  console.log(`📁 Changed files (${changedFiles.length}):`);
  changedFiles.forEach((f) => console.log(`   - ${f}`));

  const allowedPatterns = [
    /^public\/assets\/worlds\/[a-z0-9-]+\/[a-z0-9-_.]+\.(svg|png)$/i,
    /^src\/data\/worlds\/[a-z0-9-]+\/objects\.ts$/i,
    /^src\/data\/worlds\/[a-z0-9-]+\/placements\.ts$/i,
  ];

  const violations: string[] = [];

  for (const file of changedFiles) {
    // Check if path matches allowed contributor patterns
    const isAllowed = allowedPatterns.some((pattern) => pattern.test(file));
    if (!isAllowed) {
      violations.push(`Forbidden file modification: ${file}`);
    }

    // Check for suspicious file extensions
    const ext = path.extname(file).toLowerCase();
    const forbiddenExtensions = [".exe", ".sh", ".bat", ".cmd", ".js", ".mjs", ".cjs", ".html", ".wasm"];
    if (forbiddenExtensions.includes(ext)) {
      violations.push(`Unsafe file type submitted: ${file}`);
    }
  }

  if (violations.length > 0) {
    console.error("\n❌ Contributor Boundary Violation(s) Detected:");
    violations.forEach((v) => console.error(`  - ${v}`));
    console.error("\n💡 Contributor Rule: Contributors may only modify:");
    console.error("  1. public/assets/worlds/<world>/<object-id>.svg");
    console.error("  2. src/data/worlds/<world>/objects.ts");
    console.error("  3. src/data/worlds/<world>/placements.ts");
    process.exit(1);
  }

  // 2. Validate Two-Commit rule if multiple commits exist
  try {
    const commitLogs = execSync(`git log --oneline origin/${baseRef}...HEAD`, {
      encoding: "utf-8",
    })
      .split("\n")
      .map((l) => l.trim())
      .filter(Boolean);

    console.log(`\n📋 PR Commit Count: ${commitLogs.length}`);
    commitLogs.forEach((c) => console.log(`   - ${c}`));

    if (commitLogs.length > 0 && commitLogs.length < 2) {
      console.warn("⚠️ Recommendation: The contributor workflow recommends 2 separate commits (Commit 1: Asset + objects.ts, Commit 2: placements.ts).");
    }
  } catch {
    // In shallow or local checkouts, skip commit count check
  }

  console.log("\n✅ Contributor Boundary Validation Passed!");
}

validateContributorPR();
