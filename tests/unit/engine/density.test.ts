import { describe, it, expect } from "vitest";
import { generateDensityFixture } from "@/data/fixtures/density";
import { WorldSchema } from "@/schemas";

describe("Density & Capacity Fixture Unit Tests", () => {
  it("generates a valid 10-object Forest fixture conforming to WorldSchema", () => {
    const forest10 = generateDensityFixture("growing-forest", "forest-01", 10);
    expect(forest10.objects).toHaveLength(10);
    expect(forest10.placements).toHaveLength(10);
    const result = WorldSchema.safeParse(forest10);
    expect(result.success).toBe(true);
  });

  it("generates a valid 40-object Universe fixture conforming to WorldSchema", () => {
    const universe40 = generateDensityFixture("growing-universe", "universe-01", 40);
    expect(universe40.objects).toHaveLength(40);
    expect(universe40.placements).toHaveLength(40);
    const result = WorldSchema.safeParse(universe40);
    expect(result.success).toBe(true);
  });

  it("ensures all generated coordinates fall within normalized 0-100% bounds", () => {
    const fixture = generateDensityFixture("growing-forest", "forest-01", 30);
    fixture.placements.forEach((placement) => {
      expect(placement.x).toBeGreaterThanOrEqual(0);
      expect(placement.x).toBeLessThanOrEqual(100);
      expect(placement.y).toBeGreaterThanOrEqual(0);
      expect(placement.y).toBeLessThanOrEqual(100);
      expect(placement.scale).toBeGreaterThanOrEqual(0.1);
      expect(placement.scale).toBeLessThanOrEqual(5.0);
    });
  });
});
