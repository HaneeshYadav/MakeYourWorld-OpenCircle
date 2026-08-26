import type { ObjectPlacement } from "@/schemas";

/**
 * [CONTRIBUTOR ZONE - Commit 2]
 * Demonstrates distributed contributor placements across segments:
 * - Segment 01 (Ancient Canopy): Pine Tree, Song Bird, Deer, Mossy Rock
 * - Segment 02 (Sunlit Meadow): Woodland Flower, Song Bird
 */
export const forestPlacements: ObjectPlacement[] = [
  // Segment 01 Placements
  {
    objectId: "pine-tree",
    segmentId: "forest-01",
    x: 25.0,
    y: 60.0,
    scale: 1.2,
    rotation: 5,
  },

  // Segment 02 Placements (Demonstrating multi-segment growing world)
  {
    objectId: "demo-woodland-flower",
    segmentId: "forest-02",
    x: 45.0,
    y: 78.0,
    scale: 1.2,
    rotation: 2,
  },
  {
    objectId: "demo-pine-tree",
    segmentId: "forest-02",
    x: 82.0,
    y: 68.0,
    scale: 1.05,
    rotation: 0,
  },
];
