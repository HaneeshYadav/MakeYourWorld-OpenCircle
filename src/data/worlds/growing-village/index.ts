import type { World } from "@/schemas";
import { villageSegments } from "./segments";
import { villageObjects } from "./objects";
import { villagePlacements } from "./placements";

export const growingVillageWorld: World = {
  id: "growing-village",
  name: "Growing Village",
  description:
    "A cozy cobblestone settlement of thatched cottages, stone bridges, watermills, and lantern-lit market stalls.",
  theme: {
    primaryColor: "#78350F",
    secondaryColor: "#374151",
    accentColor: "#FDE047",
  },
  segments: villageSegments,
  objects: villageObjects,
  placements: villagePlacements,
};

export { villageSegments, villageObjects, villagePlacements };
