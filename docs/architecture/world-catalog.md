# 10-World Catalog & Visual Specifications

Growing Worlds presents approximately 10 interactive **2D Paper-Collage Worlds**. Every world runs on a single, shared, reusable rendering engine (`src/engine/`).

---

## Complete Catalog of 10 Worlds (100% Implemented)

| World ID | World Name | Category / Concept | Palette (Primary / Secondary / Accent) | Status |
| :--- | :--- | :--- | :--- | :--- |
| **`growing-forest`** | **Growing Forest** | Ecosystem expansion from ancient canopy clearing to sunlit meadows. | Woodland Pine / Forest Moss / Sky Blue (`#1E3A2F` / `#4A6B48` / `#38BDF8`) | **Implemented** |
| **`growing-universe`** | **Growing Universe** | Cosmic discovery expanding from initial orbit across asteroid belts into deep space nebulae. | Cosmic Indigo / Space Obsidian / Star Gold (`#4C1D95` / `#0B0D1B` / `#FBBF24`) | **Implemented** |
| **`growing-ocean`** | **Growing Ocean** | Descent through marine depth zones from shallow sunlit reef to twilight kelp and rocky shelf. | Ocean Deep / Teal / Coral Pink (`#0F3846` / `#14B8A6` / `#F43F5E`) | **Implemented** |
| **`growing-city`** | **Growing City** | Urban civic evolution from brownstone neighborhoods to town square and transit platform. | Slate Charcoal / Muted Steel / Amber Gold (`#1E293B` / `#64748B` / `#F59E0B`) | **Implemented** |
| **`growing-village`** | **Growing Village** | Community growth from river watermill through cobblestone street to market square. | Terracotta / Stone Slate / Warm Yellow (`#78350F` / `#374151` / `#FDE047`) | **Implemented** |
| **`growing-island`** | **Growing Island** | Coastal exploration from sandy beach arrival through palm lagoon to volcanic summit. | Azure Wave / Palm Green / Hibiscus (`#0284C7` / `#15803D` / `#EC4899`) | **Implemented** |
| **`growing-farm`** | **Growing Farm** | Agricultural cultivation from homestead yard across golden wheat fields to pasture windmill. | Harvest Gold / Barn Red / Field Green (`#CA8A04` / `#991B1B` / `#16A34A`) | **Implemented** |
| **`growing-campus`** | **Growing Campus** | Collegiate educational journey from university gate across the academic quad to library plaza. | Collegiate Burgundy / Navy Blue / Academic Gold (`#881337` / `#1E3A8A` / `#EAB308`) | **Implemented** |
| **`fantasy-world`** | **Fantasy World** | Arcane journey from enchanted glade across ancient rune arch to starlit high spire. | Mystic Violet / Emerald Moss / Arcane Gold (`#3B0764` / `#065F46` / `#F59E0B`) | **Implemented** |
| **`alien-planet`** | **Alien Planet** | Xenobiological planetary survey from touchdown crater across spore forest to crystal geysers. | Deep Xenolith / Acid Cyan / Neon Lime (`#180828` / `#0D9488` / `#84CC16`) | **Implemented** |

---

## Architectural Verification

- **Shared 2D Engine**: All 10 worlds render dynamically through `<World world={worldData} />`. Zero world-specific engine forks or renderers exist.
- **30 Handcrafted Paper Backdrops**: Exactly 3 maintainer-owned SVG segment backgrounds per world.
- **Static SSG Generation**: 100% statically prerendered routes (`/worlds/[worldId]`) via Next.js App Router `generateStaticParams`.
