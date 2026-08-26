import type { World } from "@/schemas";
import { alienSegments } from "./segments";
import { alienObjects } from "./objects";
import { alienPlacements } from "./placements";

export const alienPlanetWorld: World = {
  id: "alien-planet",
  name: "Alien Planet",
  description:
    "An enigmatic paper xenobiology world of bioluminescent fungi, acid cyan biomes, and exploration probes.",
  theme: {
    primaryColor: "#180828",
    secondaryColor: "#0D9488",
    accentColor: "#84CC16",
  },
  segments: alienSegments,
  objects: alienObjects,
  placements: alienPlacements,
};

export { alienSegments, alienObjects, alienPlacements };
