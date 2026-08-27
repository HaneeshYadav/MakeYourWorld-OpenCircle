import type { WorldObject } from "@/schemas";

/**
 * [CONTRIBUTOR ZONE - Commit 1]
 * Single starting item for Growing Village.
 */
export const villageObjects: WorldObject[] = [
  {
    id: "flower-pot",
    asset: "/assets/worlds/growing-village/flower-pot.svg",
    contributor: {
      displayName: "Clara",
      githubUsername: "clara-garden",
    },
  },
  {
    id: "wooden-cart",
    asset: "/assets/worlds/growing-village/wooden-cart.svg",
    contributor: {
      displayName: "Shen",
      githubUsername: "ShenSandaru",
    },
  },

];
