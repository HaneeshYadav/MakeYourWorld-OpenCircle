import type { WorldObject } from "@/schemas";

/**
 * [CONTRIBUTOR ZONE - Commit 1]
 * Demonstrates 5 realistic contributor community items for Growing Village.
 * Contributors register their paper object definition here (~1-5 LOC).
 */
export const villageObjects: WorldObject[] = [
  {
    id: "demo-flower-pot",
    asset: "/assets/worlds/growing-village/demo-flower-pot.svg",
    contributor: {
      displayName: "Clara",
      githubUsername: "clara-garden",
    },
  },
  {
    id: "demo-wooden-cart",
    asset: "/assets/worlds/growing-village/demo-wooden-cart.svg",
    contributor: {
      displayName: "Tobias",
      githubUsername: "tobias-craft",
    },
  },
  {
    id: "demo-market-basket",
    asset: "/assets/worlds/growing-village/demo-market-basket.svg",
    contributor: {
      displayName: "Hannah",
      githubUsername: "hannah-market",
    },
  },
  {
    id: "demo-village-lantern",
    asset: "/assets/worlds/growing-village/demo-village-lantern.svg",
    contributor: {
      displayName: "Lukas",
      githubUsername: "lukas-light",
    },
  },
  {
    id: "demo-village-fence",
    asset: "/assets/worlds/growing-village/demo-village-fence.svg",
    contributor: {
      displayName: "Greta",
      githubUsername: "greta-homestead",
    },
  },
];
