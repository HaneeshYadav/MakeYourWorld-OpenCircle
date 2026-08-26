import type { WorldSegment } from "@/schemas";

/**
 * [MAINTAINER ZONE]
 * Growing Village Segments configuration.
 * Rural community growth: River Watermill -> Cobblestone Street -> Market Square.
 */
export const villageSegments: WorldSegment[] = [
  {
    id: "village-01",
    order: 0,
    name: "River Watermill",
    background: {
      asset: "/assets/worlds/growing-village/background-segment-01.svg",
      cssGradient: "linear-gradient(to bottom, #FEF3C7, #65A30D, #3F6212)",
      altText: "Riverside village backdrop with timber waterwheel, stone bridge, and green banks",
    },
  },
  {
    id: "village-02",
    order: 1,
    name: "Cobblestone Street",
    background: {
      asset: "/assets/worlds/growing-village/background-segment-02.svg",
      cssGradient: "linear-gradient(to bottom, #FEF08A, #FFFBEB, #D6D3D1)",
      altText: "Warm thatched cottages alongside a stone-paved village street",
    },
  },
  {
    id: "village-03",
    order: 2,
    name: "Market Square",
    background: {
      asset: "/assets/worlds/growing-village/background-segment-03.svg",
      cssGradient: "linear-gradient(to bottom, #FEF08A, #FFEDD5, #E7E5E4)",
      altText: "Lively village market square with colorful stalls and central stone well",
    },
  },
];
