import type { ObjectPlacement } from "@/schemas";

/**
 * [CONTRIBUTOR ZONE - Commit 2]
 * Demonstrates depth-ordered collegiate placements across the 3 campus segments:
 * - Segment 01 (University Gate): Campus Planter (y: 68), Student Bike (y: 84), Backpack (y: 76)
 * - Segment 02 (Academic Quad): Campus Bench (y: 72), Stack of Books (y: 82), Planter (y: 66)
 * - Segment 03 (Library Plaza): Stack of Books (y: 78), Bench (y: 86), Bike (y: 74)
 */
export const campusPlacements: ObjectPlacement[] = [
  // Segment 01 Placements (University Gate)
  {
    objectId: "demo-campus-planter",
    segmentId: "campus-01",
    x: 24.0,
    y: 68.0,
    scale: 1.05,
    rotation: 1,
  },
  {
    objectId: "demo-student-backpack",
    segmentId: "campus-01",
    x: 48.0,
    y: 76.0,
    scale: 0.9,
    rotation: -3,
  },
  {
    objectId: "demo-student-bicycle",
    segmentId: "campus-01",
    x: 78.0,
    y: 84.0,
    scale: 1.0,
    rotation: 2,
  },

  // Segment 02 Placements (Academic Quad)
  {
    objectId: "demo-campus-planter",
    segmentId: "campus-02",
    x: 18.0,
    y: 66.0,
    scale: 1.0,
    rotation: -1,
  },
  {
    objectId: "demo-campus-bench",
    segmentId: "campus-02",
    x: 68.0,
    y: 72.0,
    scale: 1.1,
    rotation: 2,
  },
  {
    objectId: "demo-stack-of-books",
    segmentId: "campus-02",
    x: 42.0,
    y: 82.0,
    scale: 0.95,
    rotation: -2,
  },

  // Segment 03 Placements (Library Plaza)
  {
    objectId: "demo-student-bicycle",
    segmentId: "campus-03",
    x: 22.0,
    y: 74.0,
    scale: 0.95,
    rotation: -2,
  },
  {
    objectId: "demo-stack-of-books",
    segmentId: "campus-03",
    x: 62.0,
    y: 78.0,
    scale: 1.05,
    rotation: 3,
  },
  {
    objectId: "demo-campus-bench",
    segmentId: "campus-03",
    x: 82.0,
    y: 86.0,
    scale: 1.1,
    rotation: -1,
  },
];
