import type { WorldSegment } from "@/schemas";

/**
 * [MAINTAINER ZONE]
 * Growing Forest Segments configuration.
 * Continuous, 3-segment growing paper diorama environment.
 */
export const forestSegments: WorldSegment[] = [
  {
    id: "forest-01",
    order: 0,
    name: "Ancient Canopy",
    background: {
      asset: "/assets/worlds/growing-forest/background-segment-01.svg",
      cssGradient: "linear-gradient(to bottom, #D1E0D7, #E8EDE4, #2E4F3E, #1C3527)",
      altText: "Deep forest paper backdrop with distant peaks and meandering brook",
    },
  },
  {
    id: "forest-02",
    order: 1,
    name: "Sunlit Meadow",
    background: {
      asset: "/assets/worlds/growing-forest/background-segment-02.svg",
      cssGradient: "linear-gradient(to bottom, #D9E6DE, #EBF0E6, #365C47, #1C3527)",
      altText: "Sunlit forest clearing with golden paper sun and grassy terraces",
    },
  },
  {
    id: "forest-03",
    order: 2,
    name: "Deep Grove",
    background: {
      asset: "/assets/worlds/growing-forest/background-segment-03.svg",
      cssGradient: "linear-gradient(to bottom, #CDE0D9, #E2EBE5, #2F523E, #172C20)",
      altText: "Deep mossy woodland terrace framed by ancient pine silhouettes",
    },
  },
];
