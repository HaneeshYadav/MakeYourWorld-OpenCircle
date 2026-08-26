import type { WorldSegment } from "@/schemas";

/**
 * [MAINTAINER ZONE]
 * Growing Forest Segments configuration.
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
];
