import type { World } from "@/schemas";
import { growingForestWorld } from "./growing-forest";
import { growingUniverseWorld } from "./growing-universe";
import { growingOceanWorld } from "./growing-ocean";
import { growingCityWorld } from "./growing-city";
import { growingVillageWorld } from "./growing-village";

export type WorldStatus = "implemented" | "planned";

export interface WorldCatalogEntry {
  id: string;
  name: string;
  description: string;
  status: WorldStatus;
  theme: {
    primaryColor: string;
    secondaryColor?: string;
    accentColor?: string;
  };
  growthConcept: string;
  segmentPlan: string[];
  suggestedCategories: string[];
  data?: World;
}

/**
 * Formal Registry of the 10 Growing Worlds.
 * 'implemented' worlds contain populated `data`.
 */
export const worldCatalog: WorldCatalogEntry[] = [
  {
    id: "growing-forest",
    name: "Growing Forest",
    description:
      "A peaceful woodland paper diorama built collectively with paper trees, flowers, wildlife, and forest floor details.",
    status: "implemented",
    theme: {
      primaryColor: "#1E3A2F",
      secondaryColor: "#4A6B48",
      accentColor: "#38BDF8",
    },
    growthConcept: "Ecosystem expansion from ancient canopy clearing to sunlit meadows and deep mossy groves.",
    segmentPlan: [
      "Ancient Canopy (forest-01)",
      "Sunlit Meadow (forest-02)",
      "Deep Grove (forest-03)",
      "River Crossing (forest-04)",
      "Misty Ridge (forest-05)",
    ],
    suggestedCategories: ["flora", "fauna", "rocks", "insects", "small animals"],
    data: growingForestWorld,
  },
  {
    id: "growing-universe",
    name: "Growing Universe",
    description:
      "A deep cosmic indigo paper diorama of nebulae, spiral galaxies, orbiting satellites, and stardust constellations.",
    status: "implemented",
    theme: {
      primaryColor: "#4C1D95",
      secondaryColor: "#0B0D1B",
      accentColor: "#FBBF24",
    },
    growthConcept: "Cosmic discovery expanding from initial orbit across asteroid belts into deep space nebulae.",
    segmentPlan: [
      "Starlit Orbit (universe-01)",
      "Planetary Horizon (universe-02)",
      "Asteroid Belt (universe-03)",
      "Radiant Nebula (universe-04)",
      "Deep Galaxy Vista (universe-05)",
    ],
    suggestedCategories: ["planets", "moons", "satellites", "asteroids", "constellations"],
    data: growingUniverseWorld,
  },
  {
    id: "growing-ocean",
    name: "Growing Ocean",
    description:
      "A sun-dappled turquoise marine diorama of coral reefs, sea turtles, swimming fish, and paper submarines.",
    status: "implemented",
    theme: {
      primaryColor: "#0F3846",
      secondaryColor: "#14B8A6",
      accentColor: "#F43F5E",
    },
    growthConcept: "Descent through marine depth zones from shallow sunlit reef to twilight kelp and abyssal trenches.",
    segmentPlan: [
      "Shallow Coral Reef (ocean-01)",
      "Sunlit Kelp Forest (ocean-02)",
      "Twilight Reef Shelf (ocean-03)",
      "Open Blue Current (ocean-04)",
      "Abyssal Glow Trench (ocean-05)",
    ],
    suggestedCategories: ["corals", "swimming fish", "sea turtles", "submersibles", "marine plants"],
    data: growingOceanWorld,
  },
  {
    id: "growing-city",
    name: "Growing City",
    description:
      "A structured paper architectural grid of brownstones, slate skyscrapers, paper trams, and bustling parks.",
    status: "implemented",
    theme: {
      primaryColor: "#1E293B",
      secondaryColor: "#64748B",
      accentColor: "#F59E0B",
    },
    growthConcept: "Urban civic evolution from quiet residential brownstones to civic town center and towering skyline.",
    segmentPlan: [
      "Brownstone Street (city-01)",
      "Town Square (city-02)",
      "Transit District (city-03)",
      "Central Green Park (city-04)",
      "Towering Skyline (city-05)",
    ],
    suggestedCategories: ["street lamps", "bicycles", "park benches", "mailboxes", "street trees"],
    data: growingCityWorld,
  },
  {
    id: "growing-village",
    name: "Growing Village",
    description:
      "A cozy cobblestone settlement of thatched cottages, stone bridges, watermills, and lantern-lit market stalls.",
    status: "implemented",
    theme: {
      primaryColor: "#78350F",
      secondaryColor: "#374151",
      accentColor: "#FDE047",
    },
    growthConcept: "Community growth from river watermill through bustling market street to festive village green.",
    segmentPlan: [
      "River Watermill (village-01)",
      "Cobblestone Street (village-02)",
      "Market Square (village-03)",
      "Artisan Workshop Quarter (village-04)",
      "Festive Village Green (village-05)",
    ],
    suggestedCategories: ["flower pots", "wooden carts", "market baskets", "village lanterns", "fences"],
    data: growingVillageWorld,
  },
  {
    id: "growing-island",
    name: "Growing Island",
    description:
      "A tropical azure shoreline diorama of paper palms, volcanic crags, wooden canoes, and coastal lighthouses.",
    status: "planned",
    theme: {
      primaryColor: "#0284C7",
      secondaryColor: "#15803D",
      accentColor: "#EC4899",
    },
    growthConcept: "Coastal exploration from sandy beach arrival through volcanic jungle ridges to panoramic lookout.",
    segmentPlan: [
      "Sandy Arrival Beach (island-01)",
      "Palm Grove Lagoon (island-02)",
      "Volcanic Ridge Trail (island-03)",
      "Coastal Lookout Bluff (island-04)",
      "Historic Beacon Point (island-05)",
    ],
    suggestedCategories: ["palm trees", "shells", "canoes", "lighthouses", "parrots"],
  },
  {
    id: "growing-farm",
    name: "Growing Farm",
    description:
      "A warm golden harvest paper landscape of wheat sheaves, wooden fences, barnyard animals, and windmills.",
    status: "planned",
    theme: {
      primaryColor: "#CA8A04",
      secondaryColor: "#991B1B",
      accentColor: "#16A34A",
    },
    growthConcept: "Agricultural cultivation across seasonal fields from homestead yard to golden crop acreage.",
    segmentPlan: [
      "Homestead Yard (farm-01)",
      "Golden Wheat Fields (farm-02)",
      "Pasture & Windmill (farm-03)",
      "Apple Orchard Valley (farm-04)",
      "Harvest Barn Plateau (farm-05)",
    ],
    suggestedCategories: ["wheat sheaves", "pumpkins", "farm animals", "fences", "tractors"],
  },
  {
    id: "growing-campus",
    name: "Growing Campus",
    description:
      "An ivy brick collegiate diorama celebrating learning, libraries, lecture halls, and student creativity.",
    status: "planned",
    theme: {
      primaryColor: "#881337",
      secondaryColor: "#1E3A8A",
      accentColor: "#EAB308",
    },
    growthConcept: "Collegiate expansion from main university gate across the academic quad to the hilltop observatory.",
    segmentPlan: [
      "University Gate & Lawn (campus-01)",
      "Academic Brick Quad (campus-02)",
      "Grand Library Plaza (campus-03)",
      "Student Union Garden (campus-04)",
      "Hilltop Observatory (campus-05)",
    ],
    suggestedCategories: ["brick halls", "library books", "bicycles", "campus benches", "trees"],
  },
  {
    id: "fantasy-world",
    name: "Fantasy World",
    description:
      "A mystical paper realm of floating crystal islands, arcane towers, ancient rune arches, and magical beasts.",
    status: "planned",
    theme: {
      primaryColor: "#3B0764",
      secondaryColor: "#065F46",
      accentColor: "#F59E0B",
    },
    growthConcept: "Arcane journey from enchanted forest border to celestial floating spires and ancient dragon roost.",
    segmentPlan: [
      "Enchanted Glade (fantasy-01)",
      "Floating Crystal Isle (fantasy-02)",
      "Rune Arch Terrace (fantasy-03)",
      "Wizard High Spire (fantasy-04)",
      "Starlit Dragon Peak (fantasy-05)",
    ],
    suggestedCategories: ["crystal clusters", "arcane runes", "spellbooks", "wizard towers", "mythical creatures"],
  },
  {
    id: "alien-planet",
    name: "Alien Planet",
    description:
      "An enigmatic paper xenobiology world of bioluminescent fungi, acid cyan biomes, and exploration probes.",
    status: "planned",
    theme: {
      primaryColor: "#180828",
      secondaryColor: "#0D9488",
      accentColor: "#84CC16",
    },
    growthConcept: "Planetary survey from scout rover landing zone across crystal geysers to bioluminescent mega-fungi.",
    segmentPlan: [
      "Lander Touchdown Basin (alien-01)",
      "Bioluminescent Forest (alien-02)",
      "Crystal Geyser Flats (alien-03)",
      "Spire Chasm (alien-04)",
      "Xenolith Ridge (alien-05)",
    ],
    suggestedCategories: ["bioluminescent fungi", "alien crystals", "survey probes", "spire rocks", "xenoflora"],
  },
];

// Implemented world dictionary & list
export const implementedWorlds: World[] = worldCatalog
  .filter((entry): entry is WorldCatalogEntry & { data: World } => entry.status === "implemented" && !!entry.data)
  .map((entry) => entry.data);

export const worldsMap: Record<string, World> = Object.fromEntries(
  implementedWorlds.map((world) => [world.id, world])
);

export const allWorlds = implementedWorlds;
export {
  growingForestWorld,
  growingUniverseWorld,
  growingOceanWorld,
  growingCityWorld,
  growingVillageWorld,
};
