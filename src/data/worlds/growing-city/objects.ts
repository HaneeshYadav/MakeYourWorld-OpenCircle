import type { WorldObject } from "@/schemas";

/**
 * [CONTRIBUTOR ZONE - Commit 1]
 * Demonstrates 5 realistic contributor civic items for Growing City.
 * Contributors register their paper object definition here (~1-5 LOC).
 */
export const cityObjects: WorldObject[] = [
  {
    id: "demo-street-lamp",
    asset: "/assets/worlds/growing-city/demo-street-lamp.svg",
    contributor: {
      displayName: "Marcus",
      githubUsername: "marcus-urban",
    },
  },
  {
    id: "demo-park-bench",
    asset: "/assets/worlds/growing-city/demo-park-bench.svg",
    contributor: {
      displayName: "Chloe",
      githubUsername: "chloe-city",
    },
  },
  {
    id: "demo-paper-bicycle",
    asset: "/assets/worlds/growing-city/demo-paper-bicycle.svg",
    contributor: {
      displayName: "Devon",
      githubUsername: "devon-wheels",
    },
  },
  {
    id: "demo-city-mailbox",
    asset: "/assets/worlds/growing-city/demo-city-mailbox.svg",
    contributor: {
      displayName: "Avery",
      githubUsername: "avery-post",
    },
  },
  {
    id: "demo-street-tree",
    asset: "/assets/worlds/growing-city/demo-street-tree.svg",
    contributor: {
      displayName: "Jordan",
      githubUsername: "jordan-parks",
    },
  },
];
