import type { WorldSegment } from "@/schemas";

/**
 * [MAINTAINER ZONE]
 * Growing Campus Segments configuration.
 * Collegiate educational journey: University Gate -> Academic Quad -> Library Plaza.
 */
export const campusSegments: WorldSegment[] = [
  {
    id: "campus-01",
    order: 0,
    name: "University Gate",
    background: {
      asset: "/assets/worlds/growing-campus/background-segment-01.svg",
      cssGradient: "linear-gradient(to bottom, #BAE6FD, #E0E7FF, #15803D)",
      altText: "Grand university wrought-iron arch gate with brick pillars and paved entryway path",
    },
  },
  {
    id: "campus-02",
    order: 1,
    name: "Academic Quad",
    background: {
      asset: "/assets/worlds/growing-campus/background-segment-02.svg",
      cssGradient: "linear-gradient(to bottom, #93C5FD, #881337, #15803D)",
      altText: "Central collegiate quad with brick academic halls and criss-cross stone walkways",
    },
  },
  {
    id: "campus-03",
    order: 2,
    name: "Library Plaza",
    background: {
      asset: "/assets/worlds/growing-campus/background-segment-03.svg",
      cssGradient: "linear-gradient(to bottom, #7DD3FC, #1E3A8A, #CBD5E1)",
      altText: "Classical domed university library facade with terraced steps and paved reading plaza",
    },
  },
];
