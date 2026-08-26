import type { WorldObject } from "@/schemas";

/**
 * [CONTRIBUTOR ZONE - Commit 1]
 * Demonstrates 5 realistic contributor arcane items for Fantasy World.
 * Contributors register their paper object definition here (~1-5 LOC).
 */
export const fantasyObjects: WorldObject[] = [
  {
    id: "demo-rune-stone",
    asset: "/assets/worlds/fantasy-world/demo-rune-stone.svg",
    contributor: {
      displayName: "Arthur",
      githubUsername: "arthur-arcane",
    },
  },
  {
    id: "demo-floating-crystal",
    asset: "/assets/worlds/fantasy-world/demo-floating-crystal.svg",
    contributor: {
      displayName: "Lyra",
      githubUsername: "lyra-crystals",
    },
  },
  {
    id: "demo-magic-mushroom",
    asset: "/assets/worlds/fantasy-world/demo-magic-mushroom.svg",
    contributor: {
      displayName: "Rowan",
      githubUsername: "rowan-glade",
    },
  },
  {
    id: "demo-ancient-spellbook",
    asset: "/assets/worlds/fantasy-world/demo-ancient-spellbook.svg",
    contributor: {
      displayName: "Morgana",
      githubUsername: "morgana-grimoire",
    },
  },
  {
    id: "demo-wizard-lantern",
    asset: "/assets/worlds/fantasy-world/demo-wizard-lantern.svg",
    contributor: {
      displayName: "Ignis",
      githubUsername: "ignis-flame",
    },
  },
];
