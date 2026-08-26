import { describe, it, expect } from "vitest";
import { worldCatalog, implementedWorlds, worldsMap } from "@/data/worlds";
import { WorldSchema } from "@/schemas";

describe("World Catalog Registry Unit Tests", () => {
  it("contains exactly 10 world specifications in the catalog", () => {
    expect(worldCatalog).toHaveLength(10);
  });

  it("identifies all 10 worlds as fully implemented with valid schema data", () => {
    const allExpectedIds = [
      "growing-forest",
      "growing-universe",
      "growing-ocean",
      "growing-city",
      "growing-village",
      "growing-island",
      "growing-farm",
      "growing-campus",
      "fantasy-world",
      "alien-planet",
    ];

    expect(implementedWorlds).toHaveLength(10);
    expect(worldCatalog.filter((w) => w.status === "implemented")).toHaveLength(10);

    allExpectedIds.forEach((worldId) => {
      const worldEntry = worldCatalog.find((w) => w.id === worldId);
      expect(worldEntry).toBeDefined();
      expect(worldEntry?.status).toBe("implemented");
      expect(worldEntry?.data).toBeDefined();

      const validation = WorldSchema.safeParse(worldEntry?.data);
      expect(validation.success).toBe(true);

      const world = worldsMap[worldId];
      expect(world).toBeDefined();
      expect(world.segments).toHaveLength(3);
      expect(world.objects.length).toBeGreaterThanOrEqual(1);
      expect(world.placements.length).toBeGreaterThanOrEqual(1);

      // Verify all placements reference valid objects and declared segments
      const segmentIds = new Set(world.segments.map((s) => s.id));
      const objectIds = new Set(world.objects.map((o) => o.id));

      world.placements.forEach((placement) => {
        expect(segmentIds.has(placement.segmentId)).toBe(true);
        expect(objectIds.has(placement.objectId)).toBe(true);
        expect(placement.x).toBeGreaterThanOrEqual(0);
        expect(placement.x).toBeLessThanOrEqual(100);
        expect(placement.y).toBeGreaterThanOrEqual(0);
        expect(placement.y).toBeLessThanOrEqual(100);
      });
    });
  });

  it("ensures total segment count across all 10 worlds is exactly 30 segments", () => {
    const totalSegments = implementedWorlds.reduce(
      (count, world) => count + world.segments.length,
      0
    );
    expect(totalSegments).toBe(30);
  });

  it("ensures worldsMap dictionary indexes all 10 implemented worlds", () => {
    expect(Object.keys(worldsMap)).toHaveLength(10);
    expect(worldsMap["growing-campus"]).toBeDefined();
    expect(worldsMap["fantasy-world"]).toBeDefined();
    expect(worldsMap["alien-planet"]).toBeDefined();
  });
});
