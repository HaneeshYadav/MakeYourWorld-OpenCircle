import type { World } from "@/schemas";
import { universeSegments } from "./segments";
import { universeObjects } from "./objects";
import { universePlacements } from "./placements";

export const growingUniverseWorld: World = {
  id: "growing-universe",
  name: "Growing Universe",
  description:
    "A deep cosmic indigo paper diorama of nebulae, spiral galaxies, orbiting satellites, and stardust constellations.",
  theme: {
    primaryColor: "#4C1D95",
    secondaryColor: "#0B0D1B",
    accentColor: "#FBBF24",
  },
  segments: universeSegments,
  objects: universeObjects,
  placements: universePlacements,
};

export { universeSegments, universeObjects, universePlacements };
