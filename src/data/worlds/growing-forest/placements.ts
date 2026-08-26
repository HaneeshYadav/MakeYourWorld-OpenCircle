import type { ObjectPlacement } from "@/schemas";

/**
 * [CONTRIBUTOR ZONE - Commit 2]
 * Demonstrates balanced, depth-ordered placements across the forest segments.
 * Placements leave plenty of room for community growth.
 */
export const forestPlacements: ObjectPlacement[] = [
  // Distant / Middle Tier (Lower z-index)
  {
    objectId: "demo-song-bird",
    x: 78.0,
    y: 28.0,
    scale: 0.85,
    rotation: 6,
  },
  {
    objectId: "demo-pine-tree",
    x: 22.0,
    y: 65.0,
    scale: 1.1,
    rotation: -1,
  },
  // Middle Ground Tier
  {
    objectId: "demo-forest-deer",
    x: 48.0,
    y: 74.0,
    scale: 0.95,
    rotation: 1,
  },
  // Foreground Tier (Higher z-index)
  {
    objectId: "demo-mossy-rock",
    x: 18.0,
    y: 84.0,
    scale: 1.0,
    rotation: -2,
  },
  {
    objectId: "demo-woodland-flower",
    x: 82.0,
    y: 88.0,
    scale: 1.15,
    rotation: 3,
  },
];
