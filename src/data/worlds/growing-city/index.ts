import type { World } from "@/schemas";
import { citySegments } from "./segments";
import { cityObjects } from "./objects";
import { cityPlacements } from "./placements";

export const growingCityWorld: World = {
  id: "growing-city",
  name: "Growing City",
  description:
    "A structured paper architectural grid of brownstones, slate skyscrapers, paper trams, and bustling parks.",
  theme: {
    primaryColor: "#1E293B",
    secondaryColor: "#64748B",
    accentColor: "#F59E0B",
  },
  segments: citySegments,
  objects: cityObjects,
  placements: cityPlacements,
};

export { citySegments, cityObjects, cityPlacements };
