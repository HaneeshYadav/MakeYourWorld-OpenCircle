import { describe, it, expect } from "vitest";
import { worldCatalog, implementedWorlds, worldsMap } from "@/data/worlds";

describe("World Catalog Registry Unit Tests", () => {
  it("contains exactly 10 world specifications in the catalog", () => {
    expect(worldCatalog).toHaveLength(10);
  });

  it("identifies Growing Forest as an implemented world with complete data", () => {
    const forest = worldCatalog.find((w) => w.id === "growing-forest");
    expect(forest).toBeDefined();
    expect(forest?.status).toBe("implemented");
    expect(forest?.data).toBeDefined();
    expect(forest?.data?.segments.length).toBeGreaterThanOrEqual(1);
    expect(forest?.data?.objects.length).toBeGreaterThanOrEqual(1);
  });

  it("distinguishes planned worlds and ensures they do not have dummy data attached", () => {
    const planned = worldCatalog.filter((w) => w.status === "planned");
    expect(planned.length).toBe(9);
    planned.forEach((world) => {
      expect(world.data).toBeUndefined();
      expect(world.segmentPlan.length).toBeGreaterThanOrEqual(3);
      expect(world.suggestedCategories.length).toBeGreaterThanOrEqual(3);
    });
  });

  it("provides implementedWorlds containing only active worlds", () => {
    expect(implementedWorlds).toHaveLength(1);
    expect(implementedWorlds[0].id).toBe("growing-forest");
  });

  it("ensures worldsMap dictionary only indexes implemented worlds", () => {
    expect(worldsMap["growing-forest"]).toBeDefined();
    expect(worldsMap["growing-universe"]).toBeUndefined();
    expect(worldsMap["growing-ocean"]).toBeUndefined();
  });
});
