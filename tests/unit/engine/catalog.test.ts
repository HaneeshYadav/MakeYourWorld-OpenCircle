import { describe, it, expect } from "vitest";
import { worldCatalog, implementedWorlds, worldsMap } from "@/data/worlds";
import { WorldSchema } from "@/schemas";

describe("World Catalog Registry Unit Tests", () => {
  it("contains exactly 10 world specifications in the catalog", () => {
    expect(worldCatalog).toHaveLength(10);
  });

  it("identifies Growing Forest and Growing Universe as implemented worlds with complete data", () => {
    const forest = worldCatalog.find((w) => w.id === "growing-forest");
    expect(forest).toBeDefined();
    expect(forest?.status).toBe("implemented");
    expect(forest?.data).toBeDefined();
    expect(WorldSchema.safeParse(forest?.data).success).toBe(true);

    const universe = worldCatalog.find((w) => w.id === "growing-universe");
    expect(universe).toBeDefined();
    expect(universe?.status).toBe("implemented");
    expect(universe?.data).toBeDefined();
    expect(WorldSchema.safeParse(universe?.data).success).toBe(true);
  });

  it("verifies Growing Universe has 3 segments and distributed placements", () => {
    const universe = worldsMap["growing-universe"];
    expect(universe).toBeDefined();
    expect(universe.segments).toHaveLength(3);
    expect(universe.objects.length).toBeGreaterThanOrEqual(5);
    expect(universe.placements.length).toBeGreaterThanOrEqual(5);

    // Verify placements span across segments
    const segmentIds = new Set(universe.placements.map((p) => p.segmentId));
    expect(segmentIds.has("universe-01")).toBe(true);
    expect(segmentIds.has("universe-02")).toBe(true);
    expect(segmentIds.has("universe-03")).toBe(true);
  });

  it("distinguishes planned worlds and ensures they do not have dummy data attached", () => {
    const planned = worldCatalog.filter((w) => w.status === "planned");
    expect(planned.length).toBe(8);
    planned.forEach((world) => {
      expect(world.data).toBeUndefined();
      expect(world.segmentPlan.length).toBeGreaterThanOrEqual(3);
      expect(world.suggestedCategories.length).toBeGreaterThanOrEqual(3);
    });
  });

  it("provides implementedWorlds containing exactly the 2 active worlds", () => {
    expect(implementedWorlds).toHaveLength(2);
    expect(implementedWorlds.map((w) => w.id)).toEqual([
      "growing-forest",
      "growing-universe",
    ]);
  });

  it("ensures worldsMap dictionary only indexes implemented worlds", () => {
    expect(worldsMap["growing-forest"]).toBeDefined();
    expect(worldsMap["growing-universe"]).toBeDefined();
    expect(worldsMap["growing-ocean"]).toBeUndefined();
  });
});
