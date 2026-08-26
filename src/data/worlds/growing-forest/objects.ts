import type { WorldObject } from "@/schemas";

/**
 * [CONTRIBUTOR ZONE - Commit 1]
 * Demo data for Growing Forest.
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
];
