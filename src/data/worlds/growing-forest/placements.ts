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
    objectId: "demo-song-bird",
    segmentId: "forest-01",
    x: 78.0,
    y: 28.0,
    scale: 0.85,
    rotation: 6,
  },

  {
    objectId: "demo-forest-deer",
    segmentId: "forest-01",
    x: 48.0,
    y: 74.0,
    scale: 0.95,
    rotation: 1,
  },
  {
    objectId: "demo-mossy-rock",
    segmentId: "forest-01",
    x: 18.0,
    y: 84.0,
    scale: 1.0,
    rotation: -2,
  },
  {
    objectId: "student-butterfly",
    segmentId: "forest-01",
    x: 62.0,
    y: 42.0,
    scale: 1.0,
    rotation: -4,
  },

  {
    objectId: "demo-pine-tree",
    segmentId: "forest-01",
    x: 22.0,
    y: 65.0,
    scale: 1.1,
    rotation: -1,
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
