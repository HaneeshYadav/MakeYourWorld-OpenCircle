import { describe, it, expect } from "vitest";
import { worldCatalog, implementedWorlds, worldsMap } from "@/data/worlds";
import { WorldSchema } from "@/schemas";

describe("World Catalog Registry Unit Tests", () => {
  it("contains exactly 10 world specifications in the catalog", () => {
    expect(worldCatalog).toHaveLength(10);
  });

  it("identifies all 5 implemented worlds with valid schema data", () => {
    const activeIds = [
      "growing-forest",
      "growing-universe",
      "growing-ocean",
      "growing-city",
      "growing-village",
    ];

    activeIds.forEach((worldId) => {
      const world = worldCatalog.find((w) => w.id === worldId);
      expect(world).toBeDefined();
      expect(world?.status).toBe("implemented");
      expect(world?.data).toBeDefined();
      expect(WorldSchema.safeParse(world?.data).success).toBe(true);
    });
  });

  it("verifies Growing City has 3 segments and valid placement references", () => {
    const city = worldsMap["growing-city"];
    expect(city).toBeDefined();
    expect(city.segments).toHaveLength(3);
    expect(city.objects.length).toBeGreaterThanOrEqual(5);
    expect(city.placements.length).toBeGreaterThanOrEqual(5);

    const segmentIds = new Set(city.placements.map((p) => p.segmentId));
    expect(segmentIds.has("city-01")).toBe(true);
    expect(segmentIds.has("city-02")).toBe(true);
    expect(segmentIds.has("city-03")).toBe(true);
  });

  it("verifies Growing Village has 3 segments and valid placement references", () => {
    const village = worldsMap["growing-village"];
    expect(village).toBeDefined();
    expect(village.segments).toHaveLength(3);
    expect(village.objects.length).toBeGreaterThanOrEqual(5);
    expect(village.placements.length).toBeGreaterThanOrEqual(5);

    const segmentIds = new Set(village.placements.map((p) => p.segmentId));
    expect(segmentIds.has("village-01")).toBe(true);
    expect(segmentIds.has("village-02")).toBe(true);
    expect(segmentIds.has("village-03")).toBe(true);
  });

  it("distinguishes planned worlds and ensures they do not have dummy data attached", () => {
    const planned = worldCatalog.filter((w) => w.status === "planned");
    expect(planned.length).toBe(5);
    planned.forEach((world) => {
      expect(world.data).toBeUndefined();
      expect(world.segmentPlan.length).toBeGreaterThanOrEqual(3);
      expect(world.suggestedCategories.length).toBeGreaterThanOrEqual(3);
    });
  });

  it("provides implementedWorlds containing exactly the 5 active worlds", () => {
    expect(implementedWorlds).toHaveLength(5);
    expect(implementedWorlds.map((w) => w.id)).toEqual([
      "growing-forest",
      "growing-universe",
      "growing-ocean",
      "growing-city",
      "growing-village",
    ]);
  });

  it("ensures worldsMap dictionary only indexes implemented worlds", () => {
    expect(worldsMap["growing-forest"]).toBeDefined();
    expect(worldsMap["growing-universe"]).toBeDefined();
    expect(worldsMap["growing-ocean"]).toBeDefined();
    expect(worldsMap["growing-city"]).toBeDefined();
    expect(worldsMap["growing-village"]).toBeDefined();
    expect(worldsMap["growing-island"]).toBeUndefined();
  });
});
