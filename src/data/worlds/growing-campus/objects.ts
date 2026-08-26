import type { WorldObject } from "@/schemas";

/**
 * [CONTRIBUTOR ZONE - Commit 1]
 * Demonstrates 5 realistic contributor collegiate items for Growing Campus.
 * Contributors register their paper object definition here (~1-5 LOC).
 */
export const campusObjects: WorldObject[] = [
  {
    id: "demo-stack-of-books",
    asset: "/assets/worlds/growing-campus/demo-stack-of-books.svg",
    contributor: {
      displayName: "Elena",
      githubUsername: "elena-scholar",
    },
  },
  {
    id: "demo-campus-bench",
    asset: "/assets/worlds/growing-campus/demo-campus-bench.svg",
    contributor: {
      displayName: "Julian",
      githubUsername: "julian-quad",
    },
  },
  {
    id: "demo-student-bicycle",
    asset: "/assets/worlds/growing-campus/demo-student-bicycle.svg",
    contributor: {
      displayName: "Rohan",
      githubUsername: "rohan-rider",
    },
  },
  {
    id: "demo-campus-planter",
    asset: "/assets/worlds/growing-campus/demo-campus-planter.svg",
    contributor: {
      displayName: "Zoe",
      githubUsername: "zoe-botany",
    },
  },
  {
    id: "demo-student-backpack",
    asset: "/assets/worlds/growing-campus/demo-student-backpack.svg",
    contributor: {
      displayName: "Maya",
      githubUsername: "maya-campus",
    },
  },
];
