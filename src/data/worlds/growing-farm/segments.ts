import type { WorldSegment } from "@/schemas";

/**
 * [MAINTAINER ZONE]
 * Growing Farm Segments configuration.
 * Agricultural cultivation journey: Homestead Yard -> Wheat Fields -> Pasture Windmill.
 */
export const farmSegments: WorldSegment[] = [
  {
    id: "farm-01",
    order: 0,
    name: "Homestead Yard",
    background: {
      asset: "/assets/worlds/growing-farm/background-segment-01.svg",
      cssGradient: "linear-gradient(to bottom, #BAE6FD, #65A30D, #3F6212)",
      altText: "Homestead yard with red barn, garden orchard ridge, and golden dirt path",
    },
  },
  {
    id: "farm-02",
    order: 1,
    name: "Wheat Fields",
    background: {
      asset: "/assets/worlds/growing-farm/background-segment-02.svg",
      cssGradient: "linear-gradient(to bottom, #93C5FD, #CA8A04, #FACC15)",
      altText: "Golden wheat field terraces beneath rolling hills and warm sunshine",
    },
  },
  {
    id: "farm-03",
    order: 2,
    name: "Pasture Windmill",
    background: {
      asset: "/assets/worlds/growing-farm/background-segment-03.svg",
      cssGradient: "linear-gradient(to bottom, #7DD3FC, #4D7C0F, #3F6212)",
      altText: "Pasture grazing field with tall lattice windmill and rustic wooden paddock fence",
    },
  },
];
