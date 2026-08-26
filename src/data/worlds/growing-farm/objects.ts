import type { WorldObject } from "@/schemas";

/**
 * [CONTRIBUTOR ZONE - Commit 1]
 * Demonstrates 5 realistic contributor rural cultivation items for Growing Farm.
 * Contributors register their paper object definition here (~1-5 LOC).
 */
export const farmObjects: WorldObject[] = [
  {
    id: "demo-scarecrow",
    asset: "/assets/worlds/growing-farm/demo-scarecrow.svg",
    contributor: {
      displayName: "Silas",
      githubUsername: "silas-fields",
    },
  },
  {
    id: "demo-wheat-bundle",
    asset: "/assets/worlds/growing-farm/demo-wheat-bundle.svg",
    contributor: {
      displayName: "Emma",
      githubUsername: "emma-harvest",
    },
  },
  {
    id: "demo-harvest-pumpkin",
    asset: "/assets/worlds/growing-farm/demo-harvest-pumpkin.svg",
    contributor: {
      displayName: "Oliver",
      githubUsername: "oliver-patch",
    },
  },
  {
    id: "demo-watering-can",
    asset: "/assets/worlds/growing-farm/demo-watering-can.svg",
    contributor: {
      displayName: "Mia",
      githubUsername: "mia-sprouts",
    },
  },
  {
    id: "demo-pasture-sheep",
    asset: "/assets/worlds/growing-farm/demo-pasture-sheep.svg",
    contributor: {
      displayName: "Leo",
      githubUsername: "leo-pasture",
    },
  },
];
