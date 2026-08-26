import type { ObjectPlacement } from "@/schemas";

/**
 * [CONTRIBUTOR ZONE - Commit 2]
 * Demonstrates depth-ordered civic placements across the 3 city segments:
 * - Segment 01 (Brownstone Street): Street Tree (y: 68), Mailbox (y: 72), Bike (y: 84)
 * - Segment 02 (Town Square): Park Bench (y: 75), Street Lamp (y: 65), Bike (y: 82)
 * - Segment 03 (Transit District): Street Lamp (y: 72), Bench (y: 86)
 */
export const cityPlacements: ObjectPlacement[] = [
  // Segment 01 Placements (Brownstone Street)
  {
    objectId: "demo-street-tree",
    segmentId: "city-01",
    x: 24.0,
    y: 68.0,
    scale: 1.15,
    rotation: 1,
  },
  {
    objectId: "demo-city-mailbox",
    segmentId: "city-01",
    x: 48.0,
    y: 72.0,
    scale: 0.9,
    rotation: -1,
  },
  {
    objectId: "demo-paper-bicycle",
    segmentId: "city-01",
    x: 76.0,
    y: 84.0,
    scale: 1.0,
    rotation: 2,
  },

  // Segment 02 Placements (Town Square)
  {
    objectId: "demo-street-lamp",
    segmentId: "city-02",
    x: 28.0,
    y: 65.0,
    scale: 1.05,
    rotation: -1,
  },
  {
    objectId: "demo-park-bench",
    segmentId: "city-02",
    x: 68.0,
    y: 75.0,
    scale: 1.1,
    rotation: 2,
  },

  // Segment 03 Placements (Transit District)
  {
    objectId: "demo-street-lamp",
    segmentId: "city-03",
    x: 78.0,
    y: 72.0,
    scale: 1.0,
    rotation: 1,
  },
  {
    objectId: "demo-park-bench",
    segmentId: "city-03",
    x: 32.0,
    y: 86.0,
    scale: 1.05,
    rotation: -2,
  },
];
