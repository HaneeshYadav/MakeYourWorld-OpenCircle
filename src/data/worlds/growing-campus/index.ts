import type { World } from "@/schemas";
import { campusSegments } from "./segments";
import { campusObjects } from "./objects";
import { campusPlacements } from "./placements";

export const growingCampusWorld: World = {
  id: "growing-campus",
  name: "Growing Campus",
  description:
    "An ivy brick collegiate diorama celebrating learning, libraries, lecture halls, and student creativity.",
  theme: {
    primaryColor: "#881337",
    secondaryColor: "#1E3A8A",
    accentColor: "#EAB308",
  },
  segments: campusSegments,
  objects: campusObjects,
  placements: campusPlacements,
};

export { campusSegments, campusObjects, campusPlacements };
