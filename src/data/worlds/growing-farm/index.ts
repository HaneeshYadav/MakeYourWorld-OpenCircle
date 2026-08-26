import type { World } from "@/schemas";
import { farmSegments } from "./segments";
import { farmObjects } from "./objects";
import { farmPlacements } from "./placements";

export const growingFarmWorld: World = {
  id: "growing-farm",
  name: "Growing Farm",
  description:
    "A warm golden harvest paper landscape of wheat sheaves, wooden fences, barnyard animals, and windmills.",
  theme: {
    primaryColor: "#CA8A04",
    secondaryColor: "#991B1B",
    accentColor: "#16A34A",
  },
  segments: farmSegments,
  objects: farmObjects,
  placements: farmPlacements,
};

export { farmSegments, farmObjects, farmPlacements };
