import type { World } from "@/schemas";
import { forestSegments } from "./segments";
import { forestObjects } from "./objects";
import { forestPlacements } from "./placements";

/**
 * Growing Forest world instance.
 */
export const growingForestWorld: World = {
  id: "growing-forest",
  name: "Growing Forest",
  description:
    "A tranquil, layered paper diorama of ancient pines, woodland creatures, and glowing canopies.",
  theme: {
    primaryColor: "#1E3A2F",
    secondaryColor: "#4A6B48",
    accentColor: "#38BDF8",
  },
  segments: forestSegments,
  objects: forestObjects,
  placements: forestPlacements,
};
