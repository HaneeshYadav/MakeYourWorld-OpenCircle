import { describe, it, expect } from "vitest";
import { validatePRCommits, type CommitDiffInfo } from "../../../scripts/pr-validator-core";

describe("GitHub Contributor PR Validation Suite", () => {
  it("passes for a valid 2-commit contributor contribution", () => {
    const validPR: CommitDiffInfo[] = [
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

    const result = validatePRCommits(validPR);
    expect(result.valid).toBe(true);
    expect(result.errors).toHaveLength(0);
  });

  it("fails if PR has only 1 squashed commit", () => {
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

    const result = validatePRCommits(singleCommitPR);
    expect(result.valid).toBe(false);
    expect(result.errors.some((e) => e.includes("exactly 2 commits"))).toBe(true);
  });

  it("fails if PR has 3 or more commits", () => {
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

    const result = validatePRCommits(threeCommitPR);
    expect(result.valid).toBe(false);
    expect(result.errors.some((e) => e.includes("exactly 2 commits"))).toBe(true);
  });

  it("fails if Commit 1 accidentally contains placement changes", () => {
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

    const result = validatePRCommits(mixedCommitPR);
    expect(result.valid).toBe(false);
    expect(result.errors.some((e) => e.includes("Commit 1 must NOT contain placement changes"))).toBe(true);
  });

  it("fails if contributor touches maintainer protected zones", () => {
    const forbiddenFilesPR: CommitDiffInfo[] = [
      {
        commitMessage: "feat(engine): modify viewport container",
        files: [
          "public/assets/worlds/growing-campus/paper-backpack.svg",
          "src/engine/WorldViewport.tsx",
        ],
      },
      {
        commitMessage: "feat(campus): place object",
        files: ["src/data/worlds/growing-campus/placements.ts"],
      },
    ];

    const result = validatePRCommits(forbiddenFilesPR);
    expect(result.valid).toBe(false);
    expect(result.errors.some((e) => e.includes("Forbidden file modified"))).toBe(true);
  });

  it("fails if an unsafe or executable file extension is added", () => {
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

    const result = validatePRCommits(maliciousPR);
    expect(result.valid).toBe(false);
    expect(result.errors.some((e) => e.includes("Unsafe file type detected"))).toBe(true);
  });
});
