import type { ObjectPlacement } from "@/schemas";

/**
 * [CONTRIBUTOR ZONE - Commit 2]
 * Demonstrates depth-ordered harvest placements across the 3 farm segments:
 * - Segment 01 (Homestead Yard): Watering Can (y: 84), Pumpkin (y: 72)
 * - Segment 02 (Wheat Fields): Scarecrow (y: 65), Wheat Bundle (y: 82), Pumpkin (y: 75)
 * - Segment 03 (Pasture Windmill): Pasture Sheep (y: 80), Wheat Bundle (y: 72), Sheep (y: 86)
 */
export const farmPlacements: ObjectPlacement[] = [
  // Segment 01 Placements (Homestead Yard)
  {
    objectId: "demo-harvest-pumpkin",
    segmentId: "farm-01",
    x: 28.0,
    y: 72.0,
    scale: 1.0,
    rotation: -2,
  },
  {
    objectId: "demo-watering-can",
    segmentId: "farm-01",
    x: 72.0,
    y: 84.0,
    scale: 0.95,
    rotation: 3,
  },

  // Segment 02 Placements (Wheat Fields)
  {
    objectId: "demo-scarecrow",
    segmentId: "farm-02",
    x: 32.0,
    y: 65.0,
    scale: 1.1,
    rotation: 1,
  },
  {
    objectId: "demo-harvest-pumpkin",
    segmentId: "farm-02",
    x: 75.0,
    y: 75.0,
    scale: 1.05,
    rotation: -3,
  },
  {
    objectId: "demo-wheat-bundle",
    segmentId: "farm-02",
    x: 52.0,
    y: 82.0,
    scale: 1.0,
    rotation: 2,
  },

  // Segment 03 Placements (Pasture Windmill)
  {
    objectId: "demo-wheat-bundle",
    segmentId: "farm-03",
    x: 22.0,
    y: 72.0,
    scale: 0.95,
    rotation: -2,
  },
  {
    objectId: "demo-pasture-sheep",
    segmentId: "farm-03",
    x: 64.0,
    y: 80.0,
    scale: 1.15,
    rotation: 1,
  },
  {
    objectId: "demo-pasture-sheep",
    segmentId: "farm-03",
    x: 84.0,
    y: 86.0,
    scale: 0.9,
    rotation: -4,
  },
];
