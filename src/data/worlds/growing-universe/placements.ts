import type { ObjectPlacement } from "@/schemas";

/**
 * [CONTRIBUTOR ZONE - Commit 2]
 * Demonstrates balanced, depth-ordered placements across universe segments:
 * - Segment 01 (Starlit Orbit): Planet, Satellite
 * - Segment 02 (Planetary Horizon): Crescent Moon, Comet
 * - Segment 03 (Asteroid Belt): Asteroid, Satellite
 */
export const universePlacements: ObjectPlacement[] = [
  // Segment 01 Placements (Starlit Orbit)
  {
    objectId: "demo-paper-satellite",
    segmentId: "universe-01",
    x: 32.0,
    y: 35.0,
    scale: 0.95,
    rotation: -8,
  },
  {
    objectId: "demo-paper-planet",
    segmentId: "universe-01",
    x: 68.0,
    y: 65.0,
    scale: 1.1,
    rotation: 4,
  },

  // Segment 02 Placements (Planetary Horizon)
  {
    objectId: "demo-crescent-moon",
    segmentId: "universe-02",
    x: 75.0,
    y: 25.0,
    scale: 0.9,
    rotation: -12,
  },
  {
    objectId: "demo-paper-comet",
    segmentId: "universe-02",
    x: 40.0,
    y: 55.0,
    scale: 1.05,
    rotation: 15,
  },

  // Segment 03 Placements (Asteroid Belt)
  {
    objectId: "demo-paper-asteroid",
    segmentId: "universe-03",
    x: 52.0,
    y: 60.0,
    scale: 1.15,
    rotation: 18,
  },
  {
    objectId: "demo-paper-satellite",
    segmentId: "universe-03",
    x: 82.0,
    y: 38.0,
    scale: 0.85,
    rotation: 10,
  },
];
