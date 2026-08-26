import type { WorldSegment } from "@/schemas";

/**
 * [MAINTAINER ZONE]
 * Growing City Segments configuration.
 * Urban growth progression: Brownstone Street -> Town Square -> Transit District.
 */
export const citySegments: WorldSegment[] = [
  {
    id: "city-01",
    order: 0,
    name: "Brownstone Street",
    background: {
      asset: "/assets/worlds/growing-city/background-segment-01.svg",
      cssGradient: "linear-gradient(to bottom, #CBD5E1, #94A3B8, #1E293B)",
      altText: "Neighborhood street with terracotta brownstones, sidewalk, and roadway",
    },
  },
  {
    id: "city-02",
    order: 1,
    name: "Town Square",
    background: {
      asset: "/assets/worlds/growing-city/background-segment-02.svg",
      cssGradient: "linear-gradient(to bottom, #BAE6FD, #E2E8F0, #CBD5E1)",
      altText: "Civic town square with classical clock tower hall and stone plaza floor",
    },
  },
  {
    id: "city-03",
    order: 2,
    name: "Transit District",
    background: {
      asset: "/assets/worlds/growing-city/background-segment-03.svg",
      cssGradient: "linear-gradient(to bottom, #94A3B8, #475569, #1E293B)",
      altText: "Urban transit hub with elevated railway canopy and ground station platform",
    },
  },
];
