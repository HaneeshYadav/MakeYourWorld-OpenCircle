import type { WorldObject } from "@/schemas";

/**
 * [CONTRIBUTOR ZONE - Commit 1]
 * Demonstrates 5 realistic contributor xenobiology items for Alien Planet.
 * Contributors register their paper object definition here (~1-5 LOC).
 */
export const alienObjects: WorldObject[] = [
  {
    id: "demo-alien-mushroom",
    asset: "/assets/worlds/alien-planet/demo-alien-mushroom.svg",
    contributor: {
      displayName: "Zylar",
      githubUsername: "zylar-xenon",
    },
  },
  {
    id: "demo-neon-crystal",
    asset: "/assets/worlds/alien-planet/demo-neon-crystal.svg",
    contributor: {
      displayName: "Vex",
      githubUsername: "vex-prisms",
    },
  },
  {
    id: "demo-survey-probe",
    asset: "/assets/worlds/alien-planet/demo-survey-probe.svg",
    contributor: {
      displayName: "Orion",
      githubUsername: "orion-recon",
    },
  },
  {
    id: "demo-alien-flower",
    asset: "/assets/worlds/alien-planet/demo-alien-flower.svg",
    contributor: {
      displayName: "Kira",
      githubUsername: "kira-flora",
    },
  },
  {
    id: "demo-alien-creature",
    asset: "/assets/worlds/alien-planet/demo-alien-creature.svg",
    contributor: {
      displayName: "Bloop",
      githubUsername: "bloop-xeno",
    },
  },
];
