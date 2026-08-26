import type { WorldSegment } from "@/schemas";

/**
 * [MAINTAINER ZONE]
 * Growing Ocean Segments configuration.
 * Vertical marine depth journey: Shallow Reef -> Kelp Forest -> Twilight Shelf.
 */
export const oceanSegments: WorldSegment[] = [
  {
    id: "ocean-01",
    order: 0,
    name: "Shallow Reef",
    background: {
      asset: "/assets/worlds/growing-ocean/background-segment-01.svg",
      cssGradient: "linear-gradient(to bottom, #7DD3FC, #0284C7, #FDE68A)",
      altText: "Sunlit shallow ocean reef with filtered light rays and warm sandy seabed",
    },
  },
  {
    id: "ocean-02",
    order: 1,
    name: "Kelp Forest",
    background: {
      asset: "/assets/worlds/growing-ocean/background-segment-02.svg",
      cssGradient: "linear-gradient(to bottom, #0284C7, #0369A1, #042F2E)",
      altText: "Deep cyan water column with towering kelp fronds and rocky sea shelf",
    },
  },
  {
    id: "ocean-03",
    order: 2,
    name: "Twilight Shelf",
    background: {
      asset: "/assets/worlds/growing-ocean/background-segment-03.svg",
      cssGradient: "linear-gradient(to bottom, #075985, #0C4A6E, #02141C)",
      altText: "Twilight deep ocean shelf with faint bioluminescent spore accents",
    },
  },
];
