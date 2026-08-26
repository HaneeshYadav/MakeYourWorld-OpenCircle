import { describe, it, expect } from "vitest";
import { worldCatalog, implementedWorlds, worldsMap } from "@/data/worlds";
import { WorldSchema } from "@/schemas";

describe("World Catalog Registry Unit Tests", () => {
  it("contains exactly 10 world specifications in the catalog", () => {
    expect(worldCatalog).toHaveLength(10);
  });

  it("identifies all 7 implemented worlds with valid schema data", () => {
    const activeIds = [
      "growing-forest",
      "growing-universe",
      "growing-ocean",
      "growing-city",
      "growing-village",
      "growing-island",
      "growing-farm",
    ];

    activeIds.forEach((worldId) => {
      const world = worldCatalog.find((w) => w.id === worldId);
      expect(world).toBeDefined();
      expect(world?.status).toBe("implemented");
      expect(world?.data).toBeDefined();
      expect(WorldSchema.safeParse(world?.data).success).toBe(true);
    });
  });

  it("verifies Growing Island has 3 segments and valid placement references", () => {
    const island = worldsMap["growing-island"];
    expect(island).toBeDefined();
    expect(island.segments).toHaveLength(3);
    expect(island.objects.length).toBeGreaterThanOrEqual(5);
    expect(island.placements.length).toBeGreaterThanOrEqual(5);

    const segmentIds = new Set(island.placements.map((p) => p.segmentId));
    expect(segmentIds.has("island-01")).toBe(true);
    expect(segmentIds.has("island-02")).toBe(true);
    expect(segmentIds.has("island-03")).toBe(true);
  });

  it("verifies Growing Farm has 3 segments and valid placement references", () => {
    const farm = worldsMap["growing-farm"];
    expect(farm).toBeDefined();
    expect(farm.segments).toHaveLength(3);
    expect(farm.objects.length).toBeGreaterThanOrEqual(5);
    expect(farm.placements.length).toBeGreaterThanOrEqual(5);

    const segmentIds = new Set(farm.placements.map((p) => p.segmentId));
    expect(segmentIds.has("farm-01")).toBe(true);
    expect(segmentIds.has("farm-02")).toBe(true);
    expect(segmentIds.has("farm-03")).toBe(true);
  });

  it("distinguishes planned worlds and ensures they do not have dummy data attached", () => {
    const planned = worldCatalog.filter((w) => w.status === "planned");
    expect(planned.length).toBe(3);
    planned.forEach((world) => {
      expect(world.data).toBeUndefined();
      expect(world.segmentPlan.length).toBeGreaterThanOrEqual(3);
      expect(world.suggestedCategories.length).toBeGreaterThanOrEqual(3);
    });
  });

  it("provides implementedWorlds containing exactly the 7 active worlds", () => {
    expect(implementedWorlds).toHaveLength(7);
    expect(implementedWorlds.map((w) => w.id)).toEqual([
      "growing-forest",
      "growing-universe",
      "growing-ocean",
      "growing-city",
      "growing-village",
      "growing-island",
      "growing-farm",
    ]);
  });

  it("ensures worldsMap dictionary only indexes implemented worlds", () => {
    expect(worldsMap["growing-forest"]).toBeDefined();
    expect(worldsMap["growing-universe"]).toBeDefined();
    expect(worldsMap["growing-ocean"]).toBeDefined();
    expect(worldsMap["growing-city"]).toBeDefined();
    expect(worldsMap["growing-village"]).toBeDefined();
    expect(worldsMap["growing-island"]).toBeDefined();
    expect(worldsMap["growing-farm"]).toBeDefined();
    expect(worldsMap["growing-campus"]).toBeUndefined();
  });
});
