import { execSync } from "node:child_process";
import { validatePRCommits, type CommitDiffInfo } from "./pr-validator-core";

function runPRValidation() {
  const baseRef = process.env.GITHUB_BASE_REF || "dev";
  console.log(`🔍 Validating pull request against target base: 'origin/${baseRef}'...`);

  let commitHashes: string[] = [];
  try {
    const rawLogs = execSync(`git log --reverse --format="%H|%s" origin/${baseRef}...HEAD`, {
      encoding: "utf-8",
    });
    commitHashes = rawLogs
      .split("\n")
      .map((l) => l.trim())
      .filter(Boolean);
  } catch {
    console.warn("⚠️ Could not diff commit logs against base ref. Attempting recent local commits.");
    try {
      const rawLogs = execSync(`git log -2 --reverse --format="%H|%s" HEAD`, {
        encoding: "utf-8",
      });
      commitHashes = rawLogs
        .split("\n")
        .map((l) => l.trim())
        .filter(Boolean);
    } catch {
      console.log("ℹ️ Running in non-git or shallow environment. Skipping commit list.");
    }
  }

  const commits: CommitDiffInfo[] = [];

  for (const line of commitHashes) {
    const [hash, ...msgParts] = line.split("|");
    const commitMessage = msgParts.join("|");
    try {
      const filesOutput = execSync(`git diff-tree --no-commit-id --name-only -r ${hash}`, {
        encoding: "utf-8",
      });
      const files = filesOutput
        .split("\n")
        .map((f) => f.trim())
        .filter(Boolean);

      commits.push({
        commitMessage,
        files,
      });
    } catch (e) {
      console.warn(`Could not inspect files for commit ${hash}:`, e);
    }
  }

  console.log(`\n📋 Inspected ${commits.length} PR commits:`);
  commits.forEach((c, idx) => {
    console.log(`   [Commit ${idx + 1}] "${c.commitMessage}" (${c.files.length} files)`);
    c.files.forEach((f) => console.log(`      - ${f}`));
  });

  const result = validatePRCommits(commits);

  if (!result.valid) {
    console.error("\n❌ PR Validation Failed with the following errors:");
    result.errors.forEach((err) => console.error(`  • ${err}`));
    console.error("\n📖 Contributor Reference: Please check CONTRIBUTING.md for the 2-commit workflow.");
    process.exit(1);
  }

  console.log("\n✅ Contributor Two-Commit & File Boundary Validation Passed cleanly!");
}

runPRValidation();
