import type { ObjectPlacement } from "@/schemas";

/**
 * [CONTRIBUTOR ZONE - Commit 2]
 * Demonstrates depth-ordered xenobiological placements across the 3 alien segments:
 * - Segment 01 (Touchdown Basin): Survey Probe (y: 72), Neon Crystal (y: 84), Flower (y: 65)
 * - Segment 02 (Spore Forest): Alien Mushroom (y: 78), Alien Creature (y: 86), Probe (y: 68)
 * - Segment 03 (Crystal Geysers): Neon Crystal (y: 76), Alien Flower (y: 82), Creature (y: 88)
 */
export const alienPlacements: ObjectPlacement[] = [
  // Segment 01 Placements (Touchdown Basin)
  {
    objectId: "demo-alien-flower",
    segmentId: "alien-01",
    x: 24.0,
    y: 65.0,
    scale: 0.95,
    rotation: -2,
  },
  {
    objectId: "demo-survey-probe",
    segmentId: "alien-01",
    x: 62.0,
    y: 72.0,
    scale: 1.05,
    rotation: 1,
  },
  {
    objectId: "demo-neon-crystal",
    segmentId: "alien-01",
    x: 82.0,
    y: 84.0,
    scale: 1.0,
    rotation: 3,
  },

  // Segment 02 Placements (Spore Forest)
  {
    objectId: "demo-survey-probe",
    segmentId: "alien-02",
    x: 22.0,
    y: 68.0,
    scale: 0.95,
    rotation: -1,
  },
  {
    objectId: "demo-alien-mushroom",
    segmentId: "alien-02",
    x: 52.0,
    y: 78.0,
    scale: 1.15,
    rotation: 2,
  },
  {
    objectId: "demo-alien-creature",
    segmentId: "alien-02",
    x: 78.0,
    y: 86.0,
    scale: 1.0,
    rotation: -4,
  },

  // Segment 03 Placements (Crystal Geysers)
  {
    objectId: "demo-neon-crystal",
    segmentId: "alien-03",
    x: 28.0,
    y: 76.0,
    scale: 1.1,
    rotation: -2,
  },
  {
    objectId: "demo-alien-flower",
    segmentId: "alien-03",
    x: 56.0,
    y: 82.0,
    scale: 1.0,
    rotation: 2,
  },
  {
    objectId: "demo-alien-creature",
    segmentId: "alien-03",
    x: 84.0,
    y: 88.0,
    scale: 0.95,
    rotation: 3,
  },
];
