import type { WorldSegment } from "@/schemas";

/**
 * [MAINTAINER ZONE]
 * Alien Planet Segments configuration.
 * Xenobiological discovery journey: Touchdown Basin -> Spore Forest -> Crystal Geysers.
 */
export const alienSegments: WorldSegment[] = [
  {
    id: "alien-01",
    order: 0,
    name: "Touchdown Basin",
    background: {
      asset: "/assets/worlds/alien-planet/background-segment-01.svg",
      cssGradient: "linear-gradient(to bottom, #180828, #0F766E, #84CC16)",
      altText: "Alien touchdown basin with green moon, distant xenolith ridges, and acid cyan crater floor",
    },
  },
  {
    id: "alien-02",
    order: 1,
    name: "Spore Forest",
    background: {
      asset: "/assets/worlds/alien-planet/background-segment-02.svg",
      cssGradient: "linear-gradient(to bottom, #311042, #047857, #A3E635)",
      altText: "Bioluminescent spore forest with towering alien mushrooms and floating spore clouds",
    },
  },
  {
    id: "alien-03",
    order: 2,
    name: "Crystal Geysers",
    background: {
      asset: "/assets/worlds/alien-planet/background-segment-03.svg",
      cssGradient: "linear-gradient(to bottom, #0F172A, #134E4A, #4D7C0F)",
      altText: "Alien mineral landscape with erupting acid geysers and glowing green crystalline spires",
    },
  },
];
