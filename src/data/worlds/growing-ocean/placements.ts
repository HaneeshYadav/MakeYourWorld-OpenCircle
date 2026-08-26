import type { ObjectPlacement } from "@/schemas";

/**
 * [CONTRIBUTOR ZONE - Commit 2]
 * Demonstrates depth-ordered marine placements across the 3 ocean segments:
 * - Segment 01 (Shallow Reef): Surface Fish (y: 28), Turtle (y: 52), Coral (y: 78), Seashell (y: 88)
 * - Segment 02 (Kelp Forest): Kelp Stalk (y: 72), Jellyfish (y: 44), Clownfish (y: 35)
 * - Segment 03 (Twilight Shelf): Deep Coral (y: 80), Sea Turtle (y: 48)
 */
export const oceanPlacements: ObjectPlacement[] = [
  // Segment 01 Placements (Shallow Reef)
  {
    objectId: "demo-clownfish",
    segmentId: "ocean-01",
    x: 32.0,
    y: 28.0,
    scale: 0.9,
    rotation: 4,
  },
  {
    objectId: "demo-sea-turtle",
    segmentId: "ocean-01",
    x: 68.0,
    y: 52.0,
    scale: 1.05,
    rotation: -6,
  },
  {
    objectId: "demo-paper-coral",
    segmentId: "ocean-01",
    x: 22.0,
    y: 78.0,
    scale: 1.1,
    rotation: 2,
  },
  {
    objectId: "demo-seashell",
    segmentId: "ocean-01",
    x: 78.0,
    y: 88.0,
    scale: 0.95,
    rotation: -3,
  },

  // Segment 02 Placements (Kelp Forest)
  {
    objectId: "demo-clownfish",
    segmentId: "ocean-02",
    x: 72.0,
    y: 35.0,
    scale: 0.85,
    rotation: -4,
  },
  {
    objectId: "student-paper-jellyfish",
    segmentId: "ocean-02",
    x: 38.0,
    y: 44.0,
    scale: 1.0,
    rotation: 5,
  },
  {
    objectId: "demo-kelp-stalk",
    segmentId: "ocean-02",
    x: 18.0,
    y: 72.0,
    scale: 1.2,
    rotation: -1,
  },

  // Segment 03 Placements (Twilight Shelf)
  {
    objectId: "demo-sea-turtle",
    segmentId: "ocean-03",
    x: 42.0,
    y: 48.0,
    scale: 0.95,
    rotation: 8,
  },
  {
    objectId: "demo-paper-coral",
    segmentId: "ocean-03",
    x: 75.0,
    y: 80.0,
    scale: 1.15,
    rotation: -4,
  },
];
