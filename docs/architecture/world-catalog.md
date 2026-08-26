# Growing Worlds — Complete 10-World Catalog Specification

This specification formalizes the **10 distinct paper-collage worlds** comprising the Growing Worlds universe. All worlds run on the identical, shared 2D rendering engine (`src/engine/`) while offering unique environments, palettes, object categories, and growth progressions.

---

## 1. Architectural Rules for World Expansions

1. **Shared Engine**: Never build a separate engine per world. All worlds consume `World.tsx`, `WorldViewport.tsx`, `WorldSegment.tsx`, and `WorldObject.tsx`.
2. **Distinct Visual Identity**: Worlds are **not** color-tinted clones of the forest. Each world features unique backdrop silhouettes, distinct environmental features, thematic palettes, and curated object categories.
3. **Discrete Segment Progression**: Each world is divided into a narrative progression of prepared horizontal segments (`01` through `05`).
4. **Beginner Contribution Scope**: Contributor objects remain small, bite-sized paper-cutout vector assets (~1–10 LOC across 2 commits).

---

## 2. Complete 10-World Design Specifications

### 1. Growing Forest
- **ID**: `growing-forest` | **Status**: `implemented`
- **Growth Concept**: Ecosystem evolution from ancient canopy clearing to sunlit meadows and deep mossy groves.
- **Visual Mood**: Serene, organic, lush, sun-dappled paper craft.
- **Color Palette**: Deep Forest Green (`#1E3A2F`), Moss & Amber (`#4A6B48`, `#D99B26`), Glowing Sky (`#38BDF8`).
- **Segment Progression**:
  - `forest-01`: Ancient Canopy (Misty mountain ridge, brook, clearing floor)
  - `forest-02`: Sunlit Meadow (Warm sun disc, grassy terraces, clearing path)
  - `forest-03`: Deep Grove (Ancient pine silhouettes, mossy boulders, dark canopy)
  - `forest-04`: River Crossing (Stepping stones, waterfall ribbon, water lilies)
  - `forest-05`: Misty Ridge (High paper cliff, overlook pine, wind eddies)
- **Object Categories**: `flora`, `fauna`, `rocks`, `mushrooms`, `insects`.
- **Sample Beginner Items**: Pine tree, woodland flower, songbird, deer, mossy rock, butterfly, chanterelle mushroom.

---

### 2. Growing Universe
- **ID**: `growing-universe` | **Status**: `planned`
- **Growth Concept**: Cosmic exploration from home planet orbit across the asteroid belt into distant radiant nebulae.
- **Visual Mood**: Vast, contemplative, luminous cardstock, glowing accents.
- **Color Palette**: Cosmic Indigo (`#0B0D1B`), Nebula Violet (`#4C1D95`, `#7C3AED`), Stardust Gold (`#FBBF24`).
- **Segment Progression**:
  - `universe-01`: Starlit Orbit (Curved paper horizon of home planet, starlight backdrop)
  - `universe-02`: Planetary Horizon (Ringed paper planet, crescent moons)
  - `universe-03`: Asteroid Belt (Floating paper rock clusters, comet tail)
  - `universe-04`: Radiant Nebula (Violet & magenta torn paper nebula clouds)
  - `universe-05`: Deep Galaxy Vista (Spiral galaxy paper cutout, twin star cluster)
- **Object Categories**: `celestial`, `spacecraft`, `satellites`, `minerals`, `phenomena`.
- **Sample Beginner Items**: Solar probe, communication satellite, crescent moon, ringed planet, gold star cluster, spinning asteroid, space telescope.

---

### 3. Growing Ocean
- **ID**: `growing-ocean` | **Status**: `planned`
- **Growth Concept**: Marine descent through light zones from sunlit coral reef to twilight kelp and bioluminescent abyss.
- **Visual Mood**: Refreshing, aquatic, wavy layered cardstock, luminous coral tones.
- **Color Palette**: Deep Turquoise (`#0F3846`), Aquamarine & Sand (`#14B8A6`, `#FDE68A`), Coral Pink (`#F43F5E`).
- **Segment Progression**:
  - `ocean-01`: Shallow Coral Reef (Sunlight caustics, sandy seabed, brain coral)
  - `ocean-02`: Sunlit Kelp Forest (Towering wavy kelp ribbons, sea anemone bed)
  - `ocean-03`: Open Blue Current (Gentle marine currents, drifting paper plankton)
  - `ocean-04`: Twilight Reef Shelf (Darkening blue-green water, sunken sea arch)
  - `ocean-05`: Abyssal Glow Trench (Deep black-cyan water, hydrothermal vent ribbon)
- **Object Categories**: `corals`, `swimming fauna`, `submersibles`, `marine flora`, `artifacts`.
- **Sample Beginner Items**: Sea turtle, clownfish, paper submarine, brain coral, kelp stalk, sea urchin, starfish, treasure chest.

---

### 4. Growing City
- **ID**: `growing-city` | **Status**: `planned`
- **Growth Concept**: Urban civic evolution from quiet residential brownstone streets to town center and towering skyline.
- **Visual Mood**: Structured, geometric paper craft, warm architectural silhouettes.
- **Color Palette**: Blueprint Slate (`#1E293B`), Urban Concrete (`#64748B`, `#94A3B8`), Beacon Amber (`#F59E0B`).
- **Segment Progression**:
  - `city-01`: Quiet Brownstone Street (Brick facades, sidewalk trees, street lamps)
  - `city-02`: Town Square & Market (Civic clock tower, open market plaza, water fountain)
  - `city-03`: Central Green Park (Park pond, paper footbridges, flower beds)
  - `city-04`: Transit & Railway Hub (Paper train tracks, overhead tram cables, station canopy)
  - `city-05`: Towering Skyline (Geometric cardstock skyscrapers, aerial broadcast antenna)
- **Object Categories**: `architecture`, `street furniture`, `transit`, `urban flora`, `civic props`.
- **Sample Beginner Items**: Street lamppost, bicycle rack, yellow paper taxi, coffee kiosk, fire hydrant, park bench, brick brownstone.

---

### 5. Growing Island
- **ID**: `growing-island` | **Status**: `planned`
- **Growth Concept**: Coastal exploration from sandy beach arrival through volcanic jungle ridges to panoramic lookout.
- **Visual Mood**: Breezy, vibrant, tropical cardstock cutouts, sunny highlights.
- **Color Palette**: Lagoon Azure (`#0284C7`), Tropical Palm (`#15803D`, `#FBBF24`), Hibiscus Magenta (`#EC4899`).
- **Segment Progression**:
  - `island-01`: Sandy Arrival Beach (Turquoise waves, white sand shore, driftwood)
  - `island-02`: Palm Grove Lagoon (Torn paper palm silhouettes, calm lagoon pool)
  - `island-03`: Volcanic Ridge Trail (Charcoal volcanic rock terraces, tropical ferns)
  - `island-04`: Coastal Lookout Bluff (Windy paper cliff, ocean horizon line)
  - `island-05`: Historic Beacon Point (Striped paper lighthouse, rocky reef outcrop)
- **Object Categories**: `tropical flora`, `coastal fauna`, `vessels`, `landmarks`, `geology`.
- **Sample Beginner Items**: Coconut palm, wooden canoe, sea shell, tropical parrot, lighthouse cutout, surfboard, hibiscus blossom.

---

### 6. Growing Farm
- **ID**: `growing-farm` | **Status**: `planned`
- **Growth Concept**: Agricultural cultivation across seasonal fields from homestead yard to golden crop acreage.
- **Visual Mood**: Warm, rustic, grounded, pastoral paper textures.
- **Color Palette**: Golden Grain (`#CA8A04`), Barn Crimson (`#991B1B`, `#D97706`), Meadow Clover (`#16A34A`).
- **Segment Progression**:
  - `farm-01`: Homestead Yard (Rustic timber farmhouse, picket fence, sunflower patch)
  - `farm-02`: Golden Wheat Fields (Layered golden wheat terraces, scarecrow)
  - `farm-03`: Pasture & Windmill (Grassy animal paddock, tall paper windmill)
  - `farm-04`: Apple Orchard Valley (Row of paper fruit trees, stone well)
  - `farm-05`: Harvest Barn Plateau (Classic red barn cutout, haystack mounds)
- **Object Categories**: `crops`, `farm animals`, `equipment`, `rustic structures`, `produce`.
- **Sample Beginner Items**: Wheat sheaf, pumpkin patch, paper scarecrow, Holstein cow, wooden fence section, red tractor, apple basket.

---

### 7. Growing Campus
- **ID**: `growing-campus` | **Status**: `planned`
- **Growth Concept**: Collegiate expansion from main university gate across the academic quad to the hilltop observatory.
- **Visual Mood**: Intellectual, classic, organized, vibrant collegiate energy.
- **Color Palette**: Ivy Brick Red (`#881337`), Collegiate Navy (`#1E3A8A`, `#E2E8F0`), Campus Gold (`#EAB308`).
- **Segment Progression**:
  - `campus-01`: University Gate & Lawn (Wrought iron paper archway, brick pillars, campus lawn)
  - `campus-02`: Academic Brick Quad (Ivy-covered lecture halls, stone pathways)
  - `campus-03`: Grand Library Plaza (Colonnade paper facade, outdoor study benches)
  - `campus-04`: Student Union Garden (Café patio, bulletin board, sculpture court)
  - `campus-05`: Hilltop Observatory (Domed telescope building, evening sky backdrop)
- **Object Categories**: `buildings`, `academic props`, `campus transit`, `landscape`, `student life`.
- **Sample Beginner Items**: Campus bench, stack of textbooks, university bicycle, campus lamppost, graduation cap, chalkboard sign, potted ivy.

---

### 8. Fantasy World
- **ID**: `fantasy-world` | **Status**: `planned`
- **Growth Concept**: Arcane journey from enchanted forest border to celestial floating spires and ancient dragon roost.
- **Visual Mood**: Magical, whimsical, mysterious, layered fairy-tale cardstock.
- **Color Palette**: Arcane Purple (`#3B0764`), Enchanted Moss (`#065F46`, `#A855F7`), Dragon Gold (`#F59E0B`).
- **Segment Progression**:
  - `fantasy-01`: Enchanted Glade (Twisted ancient roots, glowing blue mushrooms)
  - `fantasy-02`: Floating Crystal Isle (Airborne paper island, levitating amethyst shards)
  - `fantasy-03`: Rune Arch Terrace (Ancient carved stone archway, floating spell glyphs)
  - `fantasy-04`: Wizard High Spire (Slender fantasy tower, telescope balcony)
  - `fantasy-05`: Starlit Dragon Peak (Jagged mountain aerie, twilight sky)
- **Object Categories**: `magical flora`, `arcane props`, `creatures`, `crystal formations`, `ruins`.
- **Sample Beginner Items**: Floating crystal, glowing rune stone, wizard hat, potion vial, baby griffin, spellbook on pedestal, fairy mushroom ring.

---

### 9. Growing Village
- **ID**: `growing-village` | **Status**: `planned`
- **Growth Concept**: Community growth from river watermill through bustling market street to festive village green.
- **Visual Mood**: Warm, cozy, handcrafted, medieval artisan charm.
- **Color Palette**: Cobblestone Grey (`#374151`), Timber Oak (`#78350F`, `#D97706`), Lantern Light (`#FDE047`).
- **Segment Progression**:
  - `village-01`: River & Old Watermill (Paper stream, turning waterwheel, stone bridge)
  - `village-02`: Cobblestone Main Street (Timber-framed houses, flower window boxes)
  - `village-03`: Market Square & Well (Stone wishing well, colorful canvas stalls)
  - `village-04`: Artisan Workshop Quarter (Blacksmith anvil, baker sign, woodpile)
  - `village-05`: Festive Village Green (Maypole ribbon tree, wooden festival benches)
- **Object Categories**: `cottages`, `artisan tools`, `market wares`, `props`, `street flora`.
- **Sample Beginner Items**: Thatched cottage, stone well, blacksmith anvil, bread basket, wooden barrel, wrought iron sign, hanging flower basket.

---

### 10. Alien Planet
- **ID**: `alien-planet` | **Status**: `planned`
- **Growth Concept**: Xenobiological survey from scout rover touchdown zone across crystal geysers to colossal bioluminescent mega-fungi.
- **Visual Mood**: Otherworldly, bold contrast, strange paper silhouettes, sci-fi exploration.
- **Color Palette**: Xenon Obsidian (`#180828`), Bioluminescent Teal (`#0D9488`, `#C026D3`), Acid Lime (`#84CC16`).
- **Segment Progression**:
  - `alien-01`: Lander Touchdown Basin (Space exploration module, extraterrestrial red soil)
  - `alien-02`: Bioluminescent Forest (Tentacle-like spore trees, floating paper orbs)
  - `alien-03`: Crystal Geyser Flats (Prismatic glass towers, steam vent cutouts)
  - `alien-04`: Spire Chasm (Hovering magnetic boulders, deep purple canyon)
  - `alien-05`: Xenolith Ridge (Ancient geometric alien monolith, binary star sunset)
- **Object Categories**: `xenoflora`, `alien minerals`, `survey drones`, `spires`, `creatures`.
- **Sample Beginner Items**: Bioluminescent mushroom, hover survey drone, three-eyed alien critter, neon crystal cluster, planetary antenna, xenon spore pod.

---

## 3. World Registry Architecture in Code

The repository registry in `src/data/worlds/index.ts` enforces type safety:

```typescript
export interface WorldCatalogEntry {
  id: string;
  name: string;
  description: string;
  status: "implemented" | "planned";
  theme: {
    primaryColor: string;
    secondaryColor?: string;
    accentColor?: string;
  };
  growthConcept: string;
  segmentPlan: string[];
  suggestedCategories: string[];
  data?: World; // Only populated for 'implemented' worlds
}
```

- When visiting `/worlds`, all 10 worlds are presented with their respective statuses.
- When visiting `/worlds/[worldId]`, Next.js checks `worldsMap[worldId]`. If the world is only planned (or invalid), it triggers standard Next.js `notFound()`.
