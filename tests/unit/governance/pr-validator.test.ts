import { describe, it, expect } from "vitest";
import { validatePRCommits, type CommitDiffInfo } from "../../../scripts/pr-validator-core";

describe("GitHub Contributor PR Validation Suite", () => {
  // --- Student Contribution Cases (contrib/* branches) ---
  it("TEST 1: passes for a valid 2-commit student contribution reusing existing assets", () => {
    const validStudentPR: CommitDiffInfo[] = [
      {
        commitMessage: "feat(campus): register student backpack",
        files: [
          "src/data/worlds/growing-campus/objects.ts",
        ],
      },
      {
        commitMessage: "feat(campus): place student backpack in quad",
        files: ["src/data/worlds/growing-campus/placements.ts"],
      },
    ];

    const result = validatePRCommits(validStudentPR, "contrib/growing-campus-student-backpack");
    expect(result.isStudentContribution).toBe(true);
    expect(result.valid).toBe(true);
    expect(result.errors).toHaveLength(0);
  });

  it("TEST 2: passes for a valid 3-commit student contribution (flexible commit count)", () => {
    const threeCommitPR: CommitDiffInfo[] = [
      {
        commitMessage: "feat(forest): register woodland flower",
        files: ["src/data/worlds/growing-forest/objects.ts"],
      },
      {
        commitMessage: "feat(forest): place woodland flower",
        files: ["src/data/worlds/growing-forest/placements.ts"],
      },
      {
        commitMessage: "fix(forest): adjust placement coordinate",
        files: ["src/data/worlds/growing-forest/placements.ts"],
      },
    ];

    const result = validatePRCommits(threeCommitPR, "contrib/growing-forest-woodland-flower");
    expect(result.isStudentContribution).toBe(true);
    expect(result.valid).toBe(true);
    expect(result.errors).toHaveLength(0);
  });

  it("TEST 3: passes for a valid 4-commit or 5-commit student contribution", () => {
    const multiCommitPR: CommitDiffInfo[] = [
      {
        commitMessage: "feat(ocean): register submarine",
        files: ["src/data/worlds/growing-ocean/objects.ts"],
      },
      {
        commitMessage: "feat(ocean): place submarine",
        files: ["src/data/worlds/growing-ocean/placements.ts"],
      },
      {
        commitMessage: "fix(ocean): update rotation",
        files: ["src/data/worlds/growing-ocean/placements.ts"],
      },
      {
        commitMessage: "fix(ocean): tweak scale",
        files: ["src/data/worlds/growing-ocean/placements.ts"],
      },
      {
        commitMessage: "chore(ocean): clean formatting",
        files: ["src/data/worlds/growing-ocean/objects.ts"],
      },
    ];

    const result = validatePRCommits(multiCommitPR, "contrib/growing-ocean-submarine");
    expect(result.isStudentContribution).toBe(true);
    expect(result.valid).toBe(true);
    expect(result.errors).toHaveLength(0);
  });

  it("TEST 4: fails if student PR on contrib/* branch has only 1 commit", () => {
    const singleCommitPR: CommitDiffInfo[] = [
      {
        commitMessage: "feat(campus): add and place backpack",
        files: [
          "src/data/worlds/growing-campus/objects.ts",
          "src/data/worlds/growing-campus/placements.ts",
        ],
      },
    ];

    const result = validatePRCommits(singleCommitPR, "contrib/campus-backpack");
    expect(result.isStudentContribution).toBe(true);
    expect(result.valid).toBe(false);
    expect(result.errors.some((e) => e.includes("At least 2 commits are required"))).toBe(true);
  });

  it("TEST 5: fails if student PR modifies existing SVG asset (reuse-first rule)", () => {
    const modifiedAssetPR: CommitDiffInfo[] = [
      {
        commitMessage: "feat(forest): modify pine tree svg",
        files: [
          "public/assets/worlds/growing-forest/pine-tree.svg",
          "src/data/worlds/growing-forest/objects.ts",
        ],
      },
      {
        commitMessage: "feat(forest): place pine tree",
        files: ["src/data/worlds/growing-forest/placements.ts"],
      },
    ];

    const result = validatePRCommits(modifiedAssetPR, "contrib/growing-forest-pine-tree");
    expect(result.isStudentContribution).toBe(true);
    expect(result.valid).toBe(false);
    expect(result.errors.some((e) => e.includes("Unexpected asset modification"))).toBe(true);
  });

  it("TEST 6: fails if student PR touches forbidden docs file (README.md)", () => {
    const forbiddenDocsPR: CommitDiffInfo[] = [
      {
        commitMessage: "feat(campus): add backpack and edit README",
        files: [
          "src/data/worlds/growing-campus/objects.ts",
          "README.md",
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

  it("TEST 7: fails if student PR modifies another world's objects.ts", () => {
    const multiWorldPR: CommitDiffInfo[] = [
      {
        commitMessage: "feat(forest): register object in forest and ocean",
        files: [
          "src/data/worlds/growing-forest/objects.ts",
          "src/data/worlds/growing-ocean/objects.ts",
        ],
      },
      {
        commitMessage: "feat(forest): place object",
        files: ["src/data/worlds/growing-forest/placements.ts"],
      },
    ];

    const result = validatePRCommits(multiWorldPR, "contrib/growing-forest-flower");
    expect(result.isStudentContribution).toBe(true);
    expect(result.valid).toBe(false);
    expect(result.errors.some((e) => e.includes("Multi-world modification detected"))).toBe(true);
  });

  it("TEST 8: fails if student PR modifies package.json", () => {
    const packagePR: CommitDiffInfo[] = [
      {
        commitMessage: "feat(campus): register object and bump deps",
        files: [
          "src/data/worlds/growing-campus/objects.ts",
          "package.json",
        ],
      },
      {
        commitMessage: "feat(campus): place backpack",
        files: ["src/data/worlds/growing-campus/placements.ts"],
      },
    ];

    const result = validatePRCommits(packagePR, "contrib/campus-backpack");
    expect(result.isStudentContribution).toBe(true);
    expect(result.valid).toBe(false);
    expect(result.errors.some((e) => e.includes("Forbidden file modified in student contribution"))).toBe(true);
  });

  it("TEST 9: fails if student PR modifies .github workflow", () => {
    const workflowPR: CommitDiffInfo[] = [
      {
        commitMessage: "feat(campus): register object and edit workflow",
        files: [
          "src/data/worlds/growing-campus/objects.ts",
          ".github/workflows/ci.yml",
        ],
      },
      {
        commitMessage: "feat(campus): place backpack",
        files: ["src/data/worlds/growing-campus/placements.ts"],
      },
    ];

    const result = validatePRCommits(workflowPR, "contrib/campus-backpack");
    expect(result.isStudentContribution).toBe(true);
    expect(result.valid).toBe(false);
    expect(result.errors.some((e) => e.includes("Forbidden file modified in student contribution"))).toBe(true);
  });

  it("TEST 10: fails if student PR adds unsafe executable file", () => {
    const maliciousPR: CommitDiffInfo[] = [
      {
        commitMessage: "feat(campus): add script",
        files: [
          "src/data/worlds/growing-campus/objects.ts",
          "src/data/worlds/growing-campus/script.exe",
        ],
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
  it("TEST 11: safely passes feature/* branch modifying world data with normal CI classification", () => {
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

  it("TEST 12: safely passes fix/* branch modifying world data with normal CI classification", () => {
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

  it("TEST 13: safely passes chore/* branch modifying .github workflows with normal CI classification", () => {
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

  it("TEST 14: safely passes docs/* branch modifying documentation with normal CI classification", () => {
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
