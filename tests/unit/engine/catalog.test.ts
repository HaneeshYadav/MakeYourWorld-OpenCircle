import { describe, it, expect } from "vitest";
import { worldCatalog, implementedWorlds, worldsMap } from "@/data/worlds";
import { WorldSchema } from "@/schemas";

describe("World Catalog Registry Unit Tests", () => {
  it("contains exactly 10 world specifications in the catalog", () => {
    expect(worldCatalog).toHaveLength(10);
  });

  it("identifies Growing Forest, Growing Universe, and Growing Ocean as implemented worlds", () => {
    ["growing-forest", "growing-universe", "growing-ocean"].forEach((worldId) => {
      const world = worldCatalog.find((w) => w.id === worldId);
      expect(world).toBeDefined();
      expect(world?.status).toBe("implemented");
      expect(world?.data).toBeDefined();
      expect(WorldSchema.safeParse(world?.data).success).toBe(true);
    });
  });

  it("verifies Growing Ocean has 3 segments and distributed vertical placements", () => {
    const ocean = worldsMap["growing-ocean"];
    expect(ocean).toBeDefined();
    expect(ocean.segments).toHaveLength(3);
    expect(ocean.objects.length).toBeGreaterThanOrEqual(5);
    expect(ocean.placements.length).toBeGreaterThanOrEqual(5);

    // Verify placements span across segments
    const segmentIds = new Set(ocean.placements.map((p) => p.segmentId));
    expect(segmentIds.has("ocean-01")).toBe(true);
    expect(segmentIds.has("ocean-02")).toBe(true);
    expect(segmentIds.has("ocean-03")).toBe(true);

    // Verify vertical depth distribution (shallow to deep)
    const yValues = ocean.placements.map((p) => p.y);
    const minDepth = Math.min(...yValues);
    const maxDepth = Math.max(...yValues);
    expect(minDepth).toBeLessThanOrEqual(35);
    expect(maxDepth).toBeGreaterThanOrEqual(75);
  });

  it("distinguishes planned worlds and ensures they do not have dummy data attached", () => {
    const planned = worldCatalog.filter((w) => w.status === "planned");
    expect(planned.length).toBe(7);
    planned.forEach((world) => {
      expect(world.data).toBeUndefined();
      expect(world.segmentPlan.length).toBeGreaterThanOrEqual(3);
      expect(world.suggestedCategories.length).toBeGreaterThanOrEqual(3);
    });
  });

  it("provides implementedWorlds containing exactly the 3 active worlds", () => {
    expect(implementedWorlds).toHaveLength(3);
    expect(implementedWorlds.map((w) => w.id)).toEqual([
      "growing-forest",
      "growing-universe",
      "growing-ocean",
    ]);
  });

  it("ensures worldsMap dictionary only indexes implemented worlds", () => {
    expect(worldsMap["growing-forest"]).toBeDefined();
    expect(worldsMap["growing-universe"]).toBeDefined();
    expect(worldsMap["growing-ocean"]).toBeDefined();
    expect(worldsMap["growing-city"]).toBeUndefined();
  });
});
