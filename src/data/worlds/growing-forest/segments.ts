import type { WorldSegment } from "@/schemas";

/**
 * [MAINTAINER ZONE]
 * Growing Forest Segments configuration.
 * Includes two segments to demonstrate segment navigation in the engine.
 */
export const forestSegments: WorldSegment[] = [
  {
    id: "forest-01",
    order: 0,
    name: "Ancient Canopy",
    background: {
      asset: "/assets/worlds/growing-forest/background-segment-01.svg",
      cssGradient: "linear-gradient(to bottom, #1E3A2F, #0F201B)",
      altText: "Deep forest paper backdrop with tall pine silhouettes",
    },
  },
  {
    id: "forest-02",
    order: 1,
    name: "Sunlit Meadow",
    background: {
      asset: "/assets/worlds/growing-forest/background-segment-02.svg",
      cssGradient: "linear-gradient(to bottom, #2D5A46, #1A3629)",
      altText: "Sunlit forest clearing with golden paper moss",
    },
  },
];
