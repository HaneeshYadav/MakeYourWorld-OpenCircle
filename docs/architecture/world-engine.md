# Shared World Engine Architecture

## 1. Engine Mission

The **Growing Worlds Shared Engine** (`src/engine/`) is a single, reusable, responsive, and accessible 2D rendering system designed to render all present and future worlds (*Growing Forest, Growing Universe, Growing Ocean, Growing City, etc.*) without code duplication.

The engine does not have hardcoded object logic; it receives declarative data and automatically handles viewport bounding, positioning, scale, rotation, depth, background rendering, contributor attribution labels, and segment navigation.

---

## 2. Component Hierarchy & Responsibilities

```
src/engine/
├── World.tsx              # Root engine container; manages active segment state
├── WorldViewport.tsx      # Establishes responsive 16:9 bounded 2D coordinate space
├── WorldSegment.tsx       # Renders backdrop and maps placements to object definitions
├── WorldBackground.tsx    # Renders maintainer-owned static image backdrops or CSS gradients
├── WorldObject.tsx        # Positions single object with scale/rotation and anchors ContributorLabel
├── ContributorLabel.tsx   # Renders the human contributor display name automatically
├── WorldNavigation.tsx    # Accessible navigation controls between growing world segments
├── positioning/
│   ├── math.ts            # Normalized (0-100%) to CSS percentages & depth (z-index) math
│   └── segments.ts        # Segment sorting and adjacent boundary calculations
└── index.ts               # Barrel export
```

---

## 3. Data Flow

$$\text{World Data} \longrightarrow \text{World} \longrightarrow \text{WorldSegment} \longrightarrow \text{WorldObject} \longrightarrow \text{ContributorLabel}$$

1. **`World`**: Receives complete world data from `src/data/worlds/<worldId>/`. Identifies the active segment.
2. **`WorldViewport`**: Enforces responsive container boundaries and resolution-independent scaling.
3. **`WorldSegment`**: Renders the maintainer backdrop and iterates over `placements`.
4. **`WorldObject`**: Converts normalized coordinates `x, y` into CSS positioning styles and applies scale/rotation.
5. **`ContributorLabel`**: Renders the contributor's display name (`🌳 Shen`) beneath the asset.

---

## 4. Normalized Coordinate System & Depth Ordering

- **Horizontal `x` (`0.0–100.0%`)**: Percentage from the left edge of the active segment.
- **Vertical `y` (`0.0–100.0%`)**: Percentage from the top edge of the active segment.
- **Bottom-Center Anchor (`translate(-50%, -100%)`)**: Objects are anchored at their bottom-center so they naturally rest on the ground plane.
- **Depth Derivation**: Objects lower on the screen (higher `y`) receive a higher z-index (`z = 10 + y * 10`). Contributors do not need to calculate or supply z-indices or layer names.

---

## 5. Growing World Segments Model

A world expands horizontally across multiple prepared background windows:
$$\text{Segment 01} \longleftrightarrow \text{Segment 02} \longleftrightarrow \text{Segment 03}$$

Maintainers provide segment definitions and backdrops. Contributors simply place objects by `(x, y)` percentages. The engine handles segment switching, accessible previous/next buttons, and visual continuity.

---

## 6. Server vs. Client Boundaries

- **Static Data / Server Components**: Page shells and world data are serializable and pre-renderable at build time.
- **Client Components (`'use client'`)**: Only `World.tsx` and `WorldNavigation.tsx` use client state for segment switching and interactive clicks.
- **Zero Global State / DB**: No Redux, Zustand, or database layers are required.

---

## 7. What Contributors Do NOT Need to Understand

Contributors only write ~1–10 LOC in `objects.ts` and `placements.ts`. They do NOT need to understand:
- React component lifecycles or hooks
- CSS positioning math, transforms, or media queries
- Z-index calculations or layer sorting
- Camera math or segment routing
- Contributor label styling and positioning
