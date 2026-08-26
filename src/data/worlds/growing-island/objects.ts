import type { WorldObject } from "@/schemas";

/**
 * [CONTRIBUTOR ZONE - Commit 1]
 * Demonstrates 5 realistic contributor tropical items for Growing Island.
 * Contributors register their paper object definition here (~1-5 LOC).
 */
export const islandObjects: WorldObject[] = [
  {
    id: "demo-coconut-palm",
    asset: "/assets/worlds/growing-island/demo-coconut-palm.svg",
    contributor: {
      displayName: "Moana",
      githubUsername: "moana-reef",
    },
  },
  {
    id: "demo-tropical-flower",
    asset: "/assets/worlds/growing-island/demo-tropical-flower.svg",
    contributor: {
      displayName: "Lani",
      githubUsername: "lani-blooms",
    },
  },
  {
    id: "demo-wooden-canoe",
    asset: "/assets/worlds/growing-island/demo-wooden-canoe.svg",
    contributor: {
      displayName: "Koa",
      githubUsername: "koa-voyager",
    },
  },
  {
    id: "demo-tropical-parrot",
    asset: "/assets/worlds/growing-island/demo-tropical-parrot.svg",
    contributor: {
      displayName: "Tane",
      githubUsername: "tane-wings",
    },
  },
  {
    id: "demo-island-seashell",
    asset: "/assets/worlds/growing-island/demo-island-seashell.svg",
    contributor: {
      displayName: "Nalu",
      githubUsername: "nalu-shores",
    },
  },
];
