import type { World } from "@/schemas";
import { fantasySegments } from "./segments";
import { fantasyObjects } from "./objects";
import { fantasyPlacements } from "./placements";

export const fantasyWorld: World = {
  id: "fantasy-world",
  name: "Fantasy World",
  description:
    "A mystical paper realm of floating crystal islands, arcane towers, ancient rune arches, and magical beasts.",
  theme: {
    primaryColor: "#3B0764",
    secondaryColor: "#065F46",
    accentColor: "#F59E0B",
  },
  segments: fantasySegments,
  objects: fantasyObjects,
  placements: fantasyPlacements,
};

export { fantasySegments, fantasyObjects, fantasyPlacements };
