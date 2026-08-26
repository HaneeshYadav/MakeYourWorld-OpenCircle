import type { ObjectPlacement } from "@/schemas";

/**
 * [CONTRIBUTOR ZONE - Commit 2]
 * Demonstrates depth-ordered rural placements across the 3 village segments:
 * - Segment 01 (River Watermill): Wooden Cart (y: 84), Flower Pot (y: 72)
 * - Segment 02 (Cobblestone Street): Lantern (y: 68), Fence (y: 76), Flower Pot (y: 86)
 * - Segment 03 (Market Square): Market Basket (y: 78), Lantern (y: 65), Cart (y: 85)
 */
export const villagePlacements: ObjectPlacement[] = [
  // Segment 01 Placements (River Watermill)
  {
    objectId: "demo-flower-pot",
    segmentId: "village-01",
    x: 32.0,
    y: 72.0,
    scale: 0.95,
    rotation: -2,
  },
  {
    objectId: "demo-wooden-cart",
    segmentId: "village-01",
    x: 68.0,
    y: 84.0,
    scale: 1.1,
    rotation: 3,
  },

  // Segment 02 Placements (Cobblestone Street)
  {
    objectId: "demo-village-lantern",
    segmentId: "village-02",
    x: 24.0,
    y: 68.0,
    scale: 1.0,
    rotation: 0,
  },
  {
    objectId: "demo-village-fence",
    segmentId: "village-02",
    x: 48.0,
    y: 76.0,
    scale: 1.15,
    rotation: -1,
  },
  {
    objectId: "demo-flower-pot",
    segmentId: "village-02",
    x: 82.0,
    y: 86.0,
    scale: 0.9,
    rotation: 2,
  },

  // Segment 03 Placements (Market Square)
  {
    objectId: "demo-village-lantern",
    segmentId: "village-03",
    x: 22.0,
    y: 65.0,
    scale: 1.0,
    rotation: -2,
  },
  {
    objectId: "demo-market-basket",
    segmentId: "village-03",
    x: 52.0,
    y: 78.0,
    scale: 1.05,
    rotation: 1,
  },
  {
    objectId: "demo-wooden-cart",
    segmentId: "village-03",
    x: 85.0,
    y: 85.0,
    scale: 1.1,
    rotation: -2,
  },
];
