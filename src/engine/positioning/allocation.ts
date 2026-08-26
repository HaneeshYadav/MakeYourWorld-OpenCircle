import type { World } from "@/schemas";
import { implementedWorlds } from "@/data/worlds";

export interface SlotAllocationRecommendation {
  worldId: string;
  worldName: string;
  recommendedSegmentId: string;
  recommendedSegmentName: string;
  currentSegmentCount: number;
  totalWorldObjects: number;
  maxPerSegment: number;
  isAvailable: boolean;
}

export const MAX_OBJECTS_PER_SEGMENT = 20;

/**
 * Automatically inspects a world's current placements across all its frames/segments,
 * counts the objects in each frame, and determines the next available frame (segment)
 * that has capacity (< 20 objects).
 */
export function getRecommendedSegmentForWorld(
  world: World,
  maxPerSegment = MAX_OBJECTS_PER_SEGMENT
): SlotAllocationRecommendation {
  const sortedSegments = [...world.segments].sort((a, b) => a.order - b.order);

  // Count placements per segment
  const segmentCounts: Record<string, number> = {};
  for (const seg of sortedSegments) {
    segmentCounts[seg.id] = 0;
  }

  for (const placement of world.placements) {
    if (segmentCounts[placement.segmentId] !== undefined) {
      segmentCounts[placement.segmentId]++;
    }
  }

  // Find the first segment with capacity
  for (const seg of sortedSegments) {
    const count = segmentCounts[seg.id] || 0;
    if (count < maxPerSegment) {
      return {
        worldId: world.id,
        worldName: world.name,
        recommendedSegmentId: seg.id,
        recommendedSegmentName: seg.name,
        currentSegmentCount: count,
        totalWorldObjects: world.placements.length,
        maxPerSegment,
        isAvailable: true,
      };
    }
  }

  // If all segments full, default to the last segment
  const lastSegment = sortedSegments[sortedSegments.length - 1];
  return {
    worldId: world.id,
    worldName: world.name,
    recommendedSegmentId: lastSegment.id,
    recommendedSegmentName: lastSegment.name,
    currentSegmentCount: segmentCounts[lastSegment.id] || 0,
    totalWorldObjects: world.placements.length,
    maxPerSegment,
    isAvailable: false,
  };
}

/**
 * Returns a complete allocation report across all 10 growing worlds.
 */
export function getAvailableContributionSlots(): SlotAllocationRecommendation[] {
  return implementedWorlds.map((world) => getRecommendedSegmentForWorld(world));
}
