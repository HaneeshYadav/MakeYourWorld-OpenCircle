import { describe, it, expect } from "vitest";
import { getRecommendedSegmentForWorld, MAX_OBJECTS_PER_SEGMENT } from "@/engine/positioning/allocation";
import { generateDensityFixture } from "@/data/fixtures/density";
import { growingForestWorld } from "@/data/worlds/growing-forest";

describe("Automatic Frame Allocation Suite", () => {
  it("routes to the first frame (forest-01) when it has fewer than 20 objects", () => {
    const recommendation = getRecommendedSegmentForWorld(growingForestWorld);
    expect(recommendation.recommendedSegmentId).toBe("forest-01");
    expect(recommendation.currentSegmentCount).toBeLessThan(MAX_OBJECTS_PER_SEGMENT);
    expect(recommendation.isAvailable).toBe(true);
  });

  it("automatically overflows and routes to next frame (forest-02) when forest-01 reaches capacity (20 objects)", () => {
    // Generate a fixture where forest-01 has 20 objects
    const fullFixture = generateDensityFixture("growing-forest", "forest-01", 20);
    const recommendation = getRecommendedSegmentForWorld(fullFixture);

    expect(recommendation.recommendedSegmentId).toBe("forest-02");
    expect(recommendation.recommendedSegmentName).toBe("Sunlit Meadow");
    expect(recommendation.isAvailable).toBe(true);
  });

  it("automatically advances to forest-03 when both forest-01 and forest-02 are full", () => {
    // Generate fixture with 20 objects in forest-01 and 20 in forest-02
    const baseFixture = generateDensityFixture("growing-forest", "forest-01", 20);
    const extraPlacements = generateDensityFixture("growing-forest", "forest-02", 20).placements;

    const twoFullFrames = {
      ...baseFixture,
      placements: [...baseFixture.placements, ...extraPlacements],
    };

    const recommendation = getRecommendedSegmentForWorld(twoFullFrames);
    expect(recommendation.recommendedSegmentId).toBe("forest-03");
    expect(recommendation.recommendedSegmentName).toBe("Deep Grove");
  });
});
