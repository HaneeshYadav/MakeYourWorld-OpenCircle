import type { WorldObject } from "@/schemas";

/**
 * [CONTRIBUTOR ZONE - Commit 1]
 * Demonstrates 6 realistic contributor marine items for Growing Ocean.
 * Contributors register their paper object definition here (~1-5 LOC).
 */
export const oceanObjects: WorldObject[] = [
  {
    id: "demo-clownfish",
    asset: "/assets/worlds/growing-ocean/demo-clownfish.svg",
    contributor: {
      displayName: "Coral",
      githubUsername: "coral-diver",
    },
  },
  {
    id: "demo-paper-coral",
    asset: "/assets/worlds/growing-ocean/demo-paper-coral.svg",
    contributor: {
      displayName: "Marina",
      githubUsername: "marina-reef",
    },
  },
  {
    id: "demo-sea-turtle",
    asset: "/assets/worlds/growing-ocean/demo-sea-turtle.svg",
    contributor: {
      displayName: "Kai",
      githubUsername: "kai-waves",
    },
  },
  {
    id: "demo-seashell",
    asset: "/assets/worlds/growing-ocean/demo-seashell.svg",
    contributor: {
      displayName: "Sandy",
      githubUsername: "sandy-beach",
    },
  },
  {
    id: "demo-kelp-stalk",
    asset: "/assets/worlds/growing-ocean/demo-kelp-stalk.svg",
    contributor: {
      displayName: "Finn",
      githubUsername: "finn-tide",
    },
  },
  // Simulated Contributor Item
  {
    id: "student-paper-jellyfish",
    asset: "/assets/worlds/growing-ocean/student-paper-jellyfish.svg",
    contributor: {
      displayName: "Student Ocean",
      githubUsername: "student-ocean",
    },
  },
];
