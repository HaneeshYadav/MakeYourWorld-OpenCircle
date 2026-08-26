import { describe, it, expect } from "vitest";
import { checkRepositoryIntegrity } from "../../../scripts/integrity-checker";
import { implementedWorlds } from "@/data/worlds";
import type { World } from "@/schemas";

describe("Repository Data & Asset Integrity Audit Suite", () => {
  it("passes integrity audit for all 10 active repository worlds", () => {
    const result = checkRepositoryIntegrity(implementedWorlds);
    expect(result.valid).toBe(true);
    expect(result.errors).toHaveLength(0);
    expect(result.totalWorldsChecked).toBe(10);
    expect(result.totalObjectsChecked).toBeGreaterThanOrEqual(10);
    expect(result.totalPlacementsChecked).toBeGreaterThanOrEqual(10);
  });

  it("fails if an object references a missing asset file", () => {
    const invalidWorld: World = {
      ...implementedWorlds[0],
      objects: [
        {
          id: "missing-asset-item",
          asset: "/assets/worlds/growing-forest/non-existent-asset.svg",
          contributor: { displayName: "Tester" },
        },
      ],
      placements: [
        {
          objectId: "missing-asset-item",
          segmentId: "forest-01",
          x: 50,
          y: 50,
        },
      ],
    };

    const result = checkRepositoryIntegrity([invalidWorld]);
    expect(result.valid).toBe(false);
    expect(result.errors.some((e) => e.includes("Asset not found on disk"))).toBe(true);
  });

  it("fails if a placement references an undeclared objectId", () => {
    const invalidWorld: World = {
      ...implementedWorlds[0],
      placements: [
        {
          objectId: "undeclared-object-123",
          segmentId: "forest-01",
          x: 50,
          y: 50,
        },
      ],
    };

    const result = checkRepositoryIntegrity([invalidWorld]);
    expect(result.valid).toBe(false);
    expect(result.errors.some((e) => e.includes("Placement references undeclared objectId"))).toBe(true);
  });

  it("fails if a placement references an undeclared segmentId", () => {
    const invalidWorld: World = {
      ...implementedWorlds[0],
      placements: [
        {
          objectId: implementedWorlds[0].objects[0].id,
          segmentId: "invalid-segment-999",
          x: 50,
          y: 50,
        },
      ],
    };

    const result = checkRepositoryIntegrity([invalidWorld]);
    expect(result.valid).toBe(false);
    expect(result.errors.some((e) => e.includes("Placement references undeclared segmentId"))).toBe(true);
  });

  it("fails if a world has an unexpected segment count", () => {
    const invalidWorld: World = {
      ...implementedWorlds[0],
      segments: [implementedWorlds[0].segments[0]], // only 1 segment instead of 3
    };

    const result = checkRepositoryIntegrity([invalidWorld], { expectedSegmentsCount: 3 });
    expect(result.valid).toBe(false);
    expect(result.errors.some((e) => e.includes("has 1 segment(s), but exactly 3 are expected"))).toBe(true);
  });
});
