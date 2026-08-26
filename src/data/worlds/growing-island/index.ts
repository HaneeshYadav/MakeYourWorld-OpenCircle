import type { World } from "@/schemas";
import { islandSegments } from "./segments";
import { islandObjects } from "./objects";
import { islandPlacements } from "./placements";

export const growingIslandWorld: World = {
  id: "growing-island",
  name: "Growing Island",
  description:
    "A tropical azure shoreline diorama of paper palms, volcanic crags, wooden canoes, and coastal lighthouses.",
  theme: {
    primaryColor: "#0284C7",
    secondaryColor: "#15803D",
    accentColor: "#EC4899",
  },
  segments: islandSegments,
  objects: islandObjects,
  placements: islandPlacements,
};

export { islandSegments, islandObjects, islandPlacements };
