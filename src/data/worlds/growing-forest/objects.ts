import type { WorldObject } from "@/schemas";

/**
 * [CONTRIBUTOR ZONE - Commit 1]
 * Demonstrates 5 realistic contributor items for Growing Forest.
 * Contributors register their paper object definition here (~1-5 LOC).
 */
export const forestObjects: WorldObject[] = [
  {
    id: "demo-pine-tree",
    asset: "/assets/worlds/growing-forest/demo-pine-tree.svg",
    contributor: {
      displayName: "Shen",
      githubUsername: "ShenSandaru",
    },
  },
  {
    id: "demo-song-bird",
    asset: "/assets/worlds/growing-forest/demo-song-bird.svg",
    contributor: {
      displayName: "Alex",
      githubUsername: "alex-student",
    },
  },
  {
    id: "demo-woodland-flower",
    asset: "/assets/worlds/growing-forest/demo-woodland-flower.svg",
    contributor: {
      displayName: "Maya",
      githubUsername: "maya-dev",
    },
  },
  {
    id: "demo-mossy-rock",
    asset: "/assets/worlds/growing-forest/demo-mossy-rock.svg",
    contributor: {
      displayName: "Liam",
      githubUsername: "liam-code",
    },
  },
  {
    id: "demo-forest-deer",
    asset: "/assets/worlds/growing-forest/demo-forest-deer.svg",
    contributor: {
      displayName: "Elena",
      githubUsername: "elena-wildlife",
    },
  },
  {
    id: "student-butterfly",
    asset: "/assets/worlds/growing-forest/student-butterfly.svg",
    contributor: {
      displayName: "Student Example",
      githubUsername: "student-example",
    },
  },
];
