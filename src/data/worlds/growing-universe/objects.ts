import type { WorldObject } from "@/schemas";

/**
 * [CONTRIBUTOR ZONE - Commit 1]
 * Demonstrates 5 realistic contributor items for Growing Universe.
 * Contributors register their paper object definition here (~1-5 LOC).
 */
export const universeObjects: WorldObject[] = [
  {
    id: "demo-paper-planet",
    asset: "/assets/worlds/growing-universe/demo-paper-planet.svg",
    contributor: {
      displayName: "Luna",
      githubUsername: "luna-stargazer",
    },
  },
  {
    id: "demo-paper-satellite",
    asset: "/assets/worlds/growing-universe/demo-paper-satellite.svg",
    contributor: {
      displayName: "Orion",
      githubUsername: "orion-orbit",
    },
  },
  {
    id: "demo-crescent-moon",
    asset: "/assets/worlds/growing-universe/demo-crescent-moon.svg",
    contributor: {
      displayName: "Stella",
      githubUsername: "stella-sky",
    },
  },
  {
    id: "demo-paper-comet",
    asset: "/assets/worlds/growing-universe/demo-paper-comet.svg",
    contributor: {
      displayName: "Cosmo",
      githubUsername: "cosmo-dev",
    },
  },
  {
    id: "demo-paper-asteroid",
    asset: "/assets/worlds/growing-universe/demo-paper-asteroid.svg",
    contributor: {
      displayName: "Nova",
      githubUsername: "nova-astro",
    },
  },
];
