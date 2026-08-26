import type { WorldSegment } from "@/schemas";

/**
 * [MAINTAINER ZONE]
 * Growing Universe Segments configuration.
 * Prepared cosmic discovery progression across near-space, planetary horizon, and asteroid belt.
 */
export const universeSegments: WorldSegment[] = [
  {
    id: "universe-01",
    order: 0,
    name: "Starlit Orbit",
    background: {
      asset: "/assets/worlds/growing-universe/background-segment-01.svg",
      cssGradient: "linear-gradient(to bottom, #090A16, #1E1B4B, #0F172A)",
      altText: "Deep space cardstock background with home planet horizon and distant starlight",
    },
  },
  {
    id: "universe-02",
    order: 1,
    name: "Planetary Horizon",
    background: {
      asset: "/assets/worlds/growing-universe/background-segment-02.svg",
      cssGradient: "linear-gradient(to bottom, #090A16, #2E1065, #0B0D1B)",
      altText: "Cosmic indigo background with ringed paper planet cutout and violet nebula clouds",
    },
  },
  {
    id: "universe-03",
    order: 2,
    name: "Asteroid Belt",
    background: {
      asset: "/assets/worlds/growing-universe/background-segment-03.svg",
      cssGradient: "linear-gradient(to bottom, #080714, #18182E, #090A16)",
      altText: "Deep cosmos background with asteroid swarm silhouettes and gas giant horizon",
    },
  },
];
