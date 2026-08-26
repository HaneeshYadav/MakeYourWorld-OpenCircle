import type { World } from "@/schemas";
import { oceanSegments } from "./segments";
import { oceanObjects } from "./objects";
import { oceanPlacements } from "./placements";

export const growingOceanWorld: World = {
  id: "growing-ocean",
  name: "Growing Ocean",
  description:
    "A sun-dappled turquoise marine diorama of coral reefs, sea turtles, swimming fish, and paper submarines.",
  theme: {
    primaryColor: "#0F3846",
    secondaryColor: "#14B8A6",
    accentColor: "#F43F5E",
  },
  segments: oceanSegments,
  objects: oceanObjects,
  placements: oceanPlacements,
};

export { oceanSegments, oceanObjects, oceanPlacements };
