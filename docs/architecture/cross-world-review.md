# Cross-World Architecture & User Experience Review

## 1. Executive Summary

A comprehensive architectural and user experience review was conducted across all three implemented worlds:
1. **Growing Forest** (Ecosystem, flora/fauna, ground terraces)
2. **Growing Universe** (Cosmic discovery, celestial bodies, floating orbit)
3. **Growing Ocean** (Marine depth, vertical water column, sea floor)

### Primary Finding:
> **Yes.** Growing Forest, Growing Universe, and Growing Ocean run seamlessly on a **single, 100% generic 2D World Engine** (`src/engine/`). No world-specific rendering forks, custom coordinate systems, or hardcoded conditionals exist in the engine codebase.

---

## 2. Core Architectural System Evaluations

### 2.1 Coordinate Space (`x: 0–100%`, `y: 0–100%`)
- **Evaluation**: The normalized percentage coordinate system works with high fidelity across all three environments:
  - **Forest**: Aligns cutouts along terraced slopes and meadow floors ($y: 35\% - 88\%$).
  - **Universe**: Allows satellites, comets, and star clusters to populate the full coordinate space ($y: 15\% - 85\%$).
  - **Ocean**: Supports vertical marine depth from shallow water surface ($y \approx 25\%$) down to the sandy seabed ($y \approx 88\%$).
- **Strengths**: 100% responsive, decoupled from pixel resolutions, easily understood by beginner contributors.

### 2.2 Visual Depth Model ($z = 10 + y \times 10$)
- **Evaluation**: Deriving layer depth ordering from the vertical coordinate ($y$) naturally places lower objects in front of higher ones.
- **Physical vs. Visual Depth**: This is an established visual diorama convention. In cosmic and marine scenes, higher objects represent background skies/surface waters, while lower objects anchor closer to the viewer. No custom z-index hacks are needed.

### 2.3 Object Anchoring (Bottom-Center)
- **Evaluation**: Anchoring objects at bottom-center (`translate(-50%, -100%)`) with the contributor label automatically rendered beneath the asset container performs reliably across all object types:
  - Grounded objects (trees, rocks, coral, shells) anchor firmly to their terrain lines.
  - Floating objects (birds, satellites, planets, fish, jellyfish) float cleanly at their declared coordinates.
  - **Decision**: No custom anchor property is needed. Bottom-center remains the universal anchor standard.

### 2.4 Contributor Label Refinement
- **Enhancement**: Added `max-w-[160px] sm:max-w-[200px]`, `truncate`, and a native `title={displayName}` tooltip to `ContributorLabel.tsx`.
- **Benefit**: Protects dense scenes from overly long contributor names (e.g. 40+ characters) without breaking mobile layouts or causing label clipping.
- **Theme Contrast**: The off-white cardstock pill (`bg-[#FFFDF7]/95`, border, drop shadow) provides crisp legibility against dark space backdrops, turquoise waters, and lush green meadows alike.

---

## 3. Public Portal & Multi-World Navigation

| Route | Multi-World Behavior | Verification |
| :--- | :--- | :--- |
| **`/`** (Home) | Displays hero introduction, live featured world diorama, and 4-step contribution walkthrough | Verified |
| **`/worlds`** (Gallery) | Statically indexes all 3 implemented worlds (`Forest`, `Universe`, `Ocean`) and 7 planned worlds | Verified |
| **`/worlds/[worldId]`** | Dynamic App Router route prerenders all 3 implemented worlds via `generateStaticParams` | Verified |
| **`/worlds/<planned>`** | Correctly triggers standard Next.js `notFound()` (404) | Verified |

---

## 4. Segment Density & Capacity Rules

| World | 🌿 Comfortable | ⚠️ Dense (Guided Intake) | 🛑 Full (Advance Slot) |
| :--- | :--- | :--- | :--- |
| **Growing Forest** | $1 - 18$ objects | $19 - 24$ objects | **$> 24$ objects** |
| **Growing Universe** | $1 - 24$ objects | $25 - 30$ objects | **$> 30$ objects** |
| **Growing Ocean** | $1 - 20$ objects | $21 - 26$ objects | **$> 26$ objects** |

---

## 5. Architectural Decisions Intentionally Unchanged

1. **No Drag-and-Drop Editor**: GitHub PRs remain the sole contribution gateway.
2. **No Collision Engines / Physics**: Maintainers direct placements via issue coordinates to preserve contributor authorship.
3. **No Per-World Engine Forks**: All worlds strictly consume the same `src/engine/` modules.
