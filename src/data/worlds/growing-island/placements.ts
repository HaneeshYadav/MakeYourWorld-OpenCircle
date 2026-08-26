import type { ObjectPlacement } from "@/schemas";

/**
 * [CONTRIBUTOR ZONE - Commit 2]
 * Demonstrates depth-ordered tropical placements across the 3 island segments:
 * - Segment 01 (Arrival Beach): Palm (y: 68), Seashell (y: 86), Canoe (y: 78)
 * - Segment 02 (Palm Lagoon): Flower (y: 82), Parrot (y: 38), Palm (y: 70)
 * - Segment 03 (Volcanic Ridge): Parrot (y: 32), Flower (y: 80)
 */
export const islandPlacements: ObjectPlacement[] = [
  // Segment 01 Placements (Arrival Beach)
  {
    objectId: "demo-coconut-palm",
    segmentId: "island-01",
    x: 22.0,
    y: 68.0,
    scale: 1.15,
    rotation: -2,
  },
  {
    objectId: "demo-wooden-canoe",
    segmentId: "island-01",
    x: 65.0,
    y: 78.0,
    scale: 1.05,
    rotation: 3,
  },
  {
    objectId: "demo-island-seashell",
    segmentId: "island-01",
    x: 82.0,
    y: 86.0,
    scale: 0.9,
    rotation: -4,
  },

  // Segment 02 Placements (Palm Lagoon)
  {
    objectId: "demo-tropical-parrot",
    segmentId: "island-02",
    x: 74.0,
    y: 38.0,
    scale: 0.95,
    rotation: 4,
  },
  {
    objectId: "demo-coconut-palm",
    segmentId: "island-02",
    x: 18.0,
    y: 70.0,
    scale: 1.2,
    rotation: 1,
  },
  {
    objectId: "demo-tropical-flower",
    segmentId: "island-02",
    x: 48.0,
    y: 82.0,
    scale: 1.0,
    rotation: -1,
  },

  // Segment 03 Placements (Volcanic Ridge)
  {
    objectId: "demo-tropical-parrot",
    segmentId: "island-03",
    x: 35.0,
    y: 32.0,
    scale: 0.9,
    rotation: -6,
  },
  {
    objectId: "demo-tropical-flower",
    segmentId: "island-03",
    x: 78.0,
    y: 80.0,
    scale: 1.05,
    rotation: 2,
  },
];
