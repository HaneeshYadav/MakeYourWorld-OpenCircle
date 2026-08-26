import { describe, it, expect } from "vitest";
import { validatePRCommits, type CommitDiffInfo } from "../../../scripts/pr-validator-core";

describe("GitHub Contributor PR Validation Suite", () => {
  // --- Student Contribution Cases (contrib/* branches) ---
  it("passes for a valid 2-commit student contribution on contrib/* branch", () => {
    const validStudentPR: CommitDiffInfo[] = [
      {
        commitMessage: "feat(campus): add student backpack",
        files: [
          "public/assets/worlds/growing-campus/paper-backpack.svg",
          "src/data/worlds/growing-campus/objects.ts",
        ],
      },
      {
        commitMessage: "feat(campus): place student backpack in quad",
        files: ["src/data/worlds/growing-campus/placements.ts"],
      },
    ];

    const result = validatePRCommits(validStudentPR, "contrib/campus-backpack");
    expect(result.isStudentContribution).toBe(true);
    expect(result.valid).toBe(true);
    expect(result.errors).toHaveLength(0);
  });

  it("fails if student PR on contrib/* branch touches forbidden docs file", () => {
    const forbiddenDocsPR: CommitDiffInfo[] = [
      {
        commitMessage: "feat(campus): add backpack and edit docs",
        files: [
          "public/assets/worlds/growing-campus/paper-backpack.svg",
          "src/data/worlds/growing-campus/objects.ts",
          "docs/development/github-setup.md",
        ],
      },
      {
        commitMessage: "feat(campus): place backpack",
        files: ["src/data/worlds/growing-campus/placements.ts"],
      },
    ];

    const result = validatePRCommits(forbiddenDocsPR, "contrib/campus-backpack");
    expect(result.isStudentContribution).toBe(true);
    expect(result.valid).toBe(false);
    expect(result.errors.some((e) => e.includes("Forbidden file modified in student contribution"))).toBe(true);
  });

  it("fails if student PR on contrib/* branch has only 1 commit", () => {
    const singleCommitPR: CommitDiffInfo[] = [
      {
        commitMessage: "feat(campus): add and place backpack",
        files: [
          "public/assets/worlds/growing-campus/paper-backpack.svg",
          "src/data/worlds/growing-campus/objects.ts",
          "src/data/worlds/growing-campus/placements.ts",
        ],
      },
    ];

    const result = validatePRCommits(singleCommitPR, "contrib/campus-backpack");
    expect(result.isStudentContribution).toBe(true);
    expect(result.valid).toBe(false);
    expect(result.errors.some((e) => e.includes("exactly 2 commits"))).toBe(true);
  });

  it("fails if student PR on contrib/* branch has 3 or more commits", () => {
    const threeCommitPR: CommitDiffInfo[] = [
      {
        commitMessage: "feat(campus): add asset",
        files: ["public/assets/worlds/growing-campus/paper-backpack.svg"],
      },
      {
        commitMessage: "feat(campus): register object",
        files: ["src/data/worlds/growing-campus/objects.ts"],
      },
      {
        commitMessage: "feat(campus): place object",
        files: ["src/data/worlds/growing-campus/placements.ts"],
      },
    ];

    const result = validatePRCommits(threeCommitPR, "contrib/campus-backpack");
    expect(result.isStudentContribution).toBe(true);
    expect(result.valid).toBe(false);
    expect(result.errors.some((e) => e.includes("exactly 2 commits"))).toBe(true);
  });

  it("fails if student PR on contrib/* branch is missing asset/object in Commit 1", () => {
    const missingAssetPR: CommitDiffInfo[] = [
      {
        commitMessage: "feat(campus): placeholder commit",
        files: ["public/assets/worlds/growing-campus/notes.txt"],
      },
      {
        commitMessage: "feat(campus): place object",
        files: ["src/data/worlds/growing-campus/placements.ts"],
      },
    ];

    const result = validatePRCommits(missingAssetPR, "contrib/campus-backpack");
    expect(result.isStudentContribution).toBe(true);
    expect(result.valid).toBe(false);
    expect(result.errors.some((e) => e.includes("Commit 1 must contain the asset SVG/PNG"))).toBe(true);
  });

  it("fails if student PR on contrib/* branch is missing placement in Commit 2", () => {
    const missingPlacementPR: CommitDiffInfo[] = [
      {
        commitMessage: "feat(campus): add backpack",
        files: [
          "public/assets/worlds/growing-campus/paper-backpack.svg",
          "src/data/worlds/growing-campus/objects.ts",
        ],
      },
      {
        commitMessage: "feat(campus): empty second commit",
        files: ["public/assets/worlds/growing-campus/another.svg"],
      },
    ];

    const result = validatePRCommits(missingPlacementPR, "contrib/campus-backpack");
    expect(result.isStudentContribution).toBe(true);
    expect(result.valid).toBe(false);
    expect(result.errors.some((e) => e.includes("Commit 2 must contain the object placement"))).toBe(true);
  });

  it("fails if Commit 1 accidentally contains placement changes on contrib/* branch", () => {
    const mixedCommitPR: CommitDiffInfo[] = [
      {
        commitMessage: "feat(campus): add asset and placement",
        files: [
          "public/assets/worlds/growing-campus/paper-backpack.svg",
          "src/data/worlds/growing-campus/placements.ts",
        ],
      },
      {
        commitMessage: "feat(campus): register object",
        files: ["src/data/worlds/growing-campus/objects.ts"],
      },
    ];

    const result = validatePRCommits(mixedCommitPR, "contrib/campus-backpack");
    expect(result.isStudentContribution).toBe(true);
    expect(result.valid).toBe(false);
    expect(result.errors.some((e) => e.includes("Commit 1 must NOT contain placement changes"))).toBe(true);
  });

  it("fails if student PR on contrib/* branch adds unsafe or executable file", () => {
    const maliciousPR: CommitDiffInfo[] = [
      {
        commitMessage: "feat(campus): add script",
        files: ["public/assets/worlds/growing-campus/script.exe"],
      },
      {
        commitMessage: "feat(campus): place object",
        files: ["src/data/worlds/growing-campus/placements.ts"],
      },
    ];

    const result = validatePRCommits(maliciousPR, "contrib/campus-backpack");
    expect(result.isStudentContribution).toBe(true);
    expect(result.valid).toBe(false);
    expect(result.errors.some((e) => e.includes("Unsafe file type detected"))).toBe(true);
  });

  // --- Maintainer PR Cases (non-contrib branches) ---
  it("safely passes feature/* branch modifying world data with normal CI classification", () => {
    const featurePR: CommitDiffInfo[] = [
      {
        commitMessage: "feat(forest): redesign canopy density and add 10 new trees in single commit",
        files: [
          "public/assets/worlds/growing-forest/pine-tree.svg",
          "src/data/worlds/growing-forest/objects.ts",
          "src/data/worlds/growing-forest/placements.ts",
        ],
      },
    ];

    const result = validatePRCommits(featurePR, "feature/forest-overhaul");
    expect(result.isStudentContribution).toBe(false);
    expect(result.valid).toBe(true);
    expect(result.errors).toHaveLength(0);
    expect(result.skippedReason).toContain("Maintainer branch detected ('feature/forest-overhaul')");
  });

  it("safely passes fix/* branch modifying world data with normal CI classification", () => {
    const fixPR: CommitDiffInfo[] = [
      {
        commitMessage: "fix(city): adjust bench placement coordinate",
        files: ["src/data/worlds/growing-city/placements.ts"],
      },
    ];

    const result = validatePRCommits(fixPR, "fix/city-bench-coords");
    expect(result.isStudentContribution).toBe(false);
    expect(result.valid).toBe(true);
    expect(result.errors).toHaveLength(0);
    expect(result.skippedReason).toContain("Maintainer branch detected ('fix/city-bench-coords')");
  });

  it("safely passes chore/* branch modifying .github workflows with normal CI classification", () => {
    const chorePR: CommitDiffInfo[] = [
      {
        commitMessage: "chore: update ci workflow triggers and scripts",
        files: [
          ".github/workflows/ci.yml",
          "scripts/validate-pr.ts",
        ],
      },
    ];

    const result = validatePRCommits(chorePR, "chore/ci-hardening");
    expect(result.isStudentContribution).toBe(false);
    expect(result.valid).toBe(true);
    expect(result.errors).toHaveLength(0);
    expect(result.skippedReason).toContain("Maintainer branch detected ('chore/ci-hardening')");
  });

  it("safely passes docs/* branch modifying documentation with normal CI classification", () => {
    const docsPR: CommitDiffInfo[] = [
      {
        commitMessage: "docs: update setup and architecture guides",
        files: [
          "docs/development/github-setup.md",
          "docs/architecture/contribution-flow.md",
          "CONTRIBUTING.md",
        ],
      },
    ];

    const result = validatePRCommits(docsPR, "docs/governance-guide");
    expect(result.isStudentContribution).toBe(false);
    expect(result.valid).toBe(true);
    expect(result.errors).toHaveLength(0);
    expect(result.skippedReason).toContain("Maintainer branch detected ('docs/governance-guide')");
  });
});
