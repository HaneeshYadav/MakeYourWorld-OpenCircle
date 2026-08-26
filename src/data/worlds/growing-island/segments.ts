import type { WorldSegment } from "@/schemas";

/**
 * [MAINTAINER ZONE]
 * Growing Island Segments configuration.
 * Coastal exploration journey: Arrival Beach -> Palm Lagoon -> Volcanic Ridge.
 */
export const islandSegments: WorldSegment[] = [
  {
    id: "island-01",
    order: 0,
    name: "Arrival Beach",
    background: {
      asset: "/assets/worlds/growing-island/background-segment-01.svg",
      cssGradient: "linear-gradient(to bottom, #38BDF8, #0284C7, #FDE68A)",
      altText: "Tropical island arrival beach with golden sand, shallow turquoise water, and distant volcanic peaks",
    },
  },
  {
    id: "island-02",
    order: 1,
    name: "Palm Lagoon",
    background: {
      asset: "/assets/worlds/growing-island/background-segment-02.svg",
      cssGradient: "linear-gradient(to bottom, #0284C7, #15803D, #0D9488)",
      altText: "Lush tropical palm lagoon with inland turquoise water basin and jungle terraces",
    },
  },
  {
    id: "island-03",
    order: 2,
    name: "Volcanic Ridge",
    background: {
      asset: "/assets/worlds/growing-island/background-segment-03.svg",
      cssGradient: "linear-gradient(to bottom, #0369A1, #18181B, #27272A)",
      altText: "Elevated volcanic mountain summit with dark rocky crags and panoramic ocean horizon",
    },
  },
];
