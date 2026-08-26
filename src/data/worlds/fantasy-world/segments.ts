import type { WorldSegment } from "@/schemas";

/**
 * [MAINTAINER ZONE]
 * Fantasy World Segments configuration.
 * Magical discovery journey: Enchanted Glade -> Rune Arch -> High Spire.
 */
export const fantasySegments: WorldSegment[] = [
  {
    id: "fantasy-01",
    order: 0,
    name: "Enchanted Glade",
    background: {
      asset: "/assets/worlds/fantasy-world/background-segment-01.svg",
      cssGradient: "linear-gradient(to bottom, #3B0764, #7E22CE, #064E3B)",
      altText: "Enchanted forest glade with giant bioluminescent mushroom canopy and glowing river path",
    },
  },
  {
    id: "fantasy-02",
    order: 1,
    name: "Rune Arch",
    background: {
      asset: "/assets/worlds/fantasy-world/background-segment-02.svg",
      cssGradient: "linear-gradient(to bottom, #2E1065, #6B21A8, #042F2E)",
      altText: "Ancient stone portal arch inscribed with glowing runes before floating crystal islands",
    },
  },
  {
    id: "fantasy-03",
    order: 2,
    name: "High Spire",
    background: {
      asset: "/assets/worlds/fantasy-world/background-segment-03.svg",
      cssGradient: "linear-gradient(to bottom, #1E1B4B, #4C1D95, #0F172A)",
      altText: "Towering wizard high spire with stepping floating islets and starlit mystic nebula sky",
    },
  },
];
