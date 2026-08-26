import type { ObjectPlacement } from "@/schemas";

/**
 * [CONTRIBUTOR ZONE - Commit 2]
 * Demonstrates depth-ordered magical placements across the 3 fantasy segments:
 * - Segment 01 (Enchanted Glade): Magic Mushroom (y: 78), Floating Crystal (y: 38), Rune Stone (y: 68)
 * - Segment 02 (Rune Arch): Ancient Spellbook (y: 82), Floating Crystal (y: 34), Wizard Lantern (y: 72)
 * - Segment 03 (High Spire): Wizard Lantern (y: 74), Floating Crystal (y: 30), Spellbook (y: 86)
 */
export const fantasyPlacements: ObjectPlacement[] = [
  // Segment 01 Placements (Enchanted Glade)
  {
    objectId: "demo-rune-stone",
    segmentId: "fantasy-01",
    x: 22.0,
    y: 68.0,
    scale: 1.1,
    rotation: -1,
  },
  {
    objectId: "demo-floating-crystal",
    segmentId: "fantasy-01",
    x: 75.0,
    y: 38.0,
    scale: 0.95,
    rotation: 5,
  },
  {
    objectId: "demo-magic-mushroom",
    segmentId: "fantasy-01",
    x: 48.0,
    y: 78.0,
    scale: 1.0,
    rotation: 2,
  },

  // Segment 02 Placements (Rune Arch)
  {
    objectId: "demo-floating-crystal",
    segmentId: "fantasy-02",
    x: 32.0,
    y: 34.0,
    scale: 1.0,
    rotation: -4,
  },
  {
    objectId: "demo-wizard-lantern",
    segmentId: "fantasy-02",
    x: 78.0,
    y: 72.0,
    scale: 1.05,
    rotation: 1,
  },
  {
    objectId: "demo-ancient-spellbook",
    segmentId: "fantasy-02",
    x: 44.0,
    y: 82.0,
    scale: 0.95,
    rotation: -3,
  },

  // Segment 03 Placements (High Spire)
  {
    objectId: "demo-floating-crystal",
    segmentId: "fantasy-03",
    x: 78.0,
    y: 30.0,
    scale: 1.1,
    rotation: 6,
  },
  {
    objectId: "demo-wizard-lantern",
    segmentId: "fantasy-03",
    x: 26.0,
    y: 74.0,
    scale: 0.95,
    rotation: -2,
  },
  {
    objectId: "demo-ancient-spellbook",
    segmentId: "fantasy-03",
    x: 62.0,
    y: 86.0,
    scale: 1.05,
    rotation: 2,
  },
];
