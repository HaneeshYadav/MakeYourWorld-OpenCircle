# Shared World Engine Architecture

## 1. Engine Mission

The **Growing Worlds Shared Engine** (`src/engine/`) is a lightweight, responsive, and accessible 2D paper-collage rendering system designed to render all present and future worlds without code duplication.

---

## 2. Core Rendering Principles

### 2.1 CSS & SVG Paper-Collage Rendering
Rather than using heavy WebGL or Canvas rendering loops that obscure DOM accessibility and styling, the engine uses **declarative SVG & CSS DOM transforms**:
- Responsive container scaling using CSS coordinate systems (`0% to 100%`).
- Paper-like physical layering (shadow depths, deckled edge filters, natural paper grain).
- Smooth CSS pan/zoom camera controls with touch, trackpad, and keyboard accessibility.

### 2.2 Layering & Depth Model

The engine organizes each world into stacked layers:

```mermaid
graph TD
    subgraph World Viewport
        Backdrop[Backdrop Gradient / Pattern] --> L1[Layer 0: Deep Background (Sky/Space/Sea)]
        L1 --> L2[Layer 1: Midground (Main Terrain / Platforms)]
        L2 --> L3[Layer 2: Foreground (Props / Flora / Weather Cutouts)]
        L3 --> Overlay[Overlay: UI Labels & Contributor Paper Tags]
    end
```

| Layer | Parallax Factor | Interactive Objects | Usage |
| :--- | :--- | :--- | :--- |
| `background` | 0.2x – 0.5x | Rare | Distant mountains, moons, nebulae, cloud banks |
| `midground` | 1.0x | Primary | Main world structures, trees, buildings, creatures |
| `foreground` | 1.2x – 1.5x | Yes | Foreground foliage, lampposts, floating particles |

---

## 3. Engine Component Hierarchy

```
src/engine/
├── WorldCanvas.tsx        # Viewport container, handles pan/zoom/drag gesture state
├── WorldLayer.tsx         # Renders single depth layer with parallax factor
├── WorldCutout.tsx        # Renders a single paper object instance with hover/click
├── ContributorBadge.tsx   # Paper label with contributor avatar & username
├── PaperFilter.tsx        # SVG filters for paper-texture, grain, and deckle edges
├── math.ts                # Coordinate normalizer, zoom clamping, bounding boxes
└── types.ts               # WorldEngineProps, LayerType, ObjectInstance
```

---

## 4. Coordinate System & Placement Normalization

To ensure responsiveness across mobile screens, tablets, and 4K desktops:
- **World Coordinate Space**: Normalized percentages (`x: 0–100%`, `y: 0–100%`).
- **Aspect Ratio**: Each world defines a base aspect ratio (e.g. `16:9` or `21:9` ultra-wide panorama).
- **Scale Factor**: Object sizes are specified relative to world units or pixel heights with responsive scaling.

```typescript
export interface PlacementInstance {
  id: string;
  objectId: string;
  x: number; // 0 to 100
  y: number; // 0 to 100
  scale?: number; // default 1.0
  rotation?: number; // subtle angle in degrees (-5 to 5)
  layer: 'background' | 'midground' | 'foreground';
  zIndex?: number;
  contributor: {
    username: string;
    avatarUrl?: string;
    prNumber?: number;
  };
}
```

---

## 5. Interaction & Accessibility (a11y)

1. **Object Inspection**:
   - Clicking or keyboard-focusing (`Tab` + `Enter`) an object highlights the paper cutout with a crisp cutline glow and reveals the contributor attribution card.
2. **Keyboard Navigation**:
   - Arrow keys for panning the camera.
   - `+` / `-` keys for zoom.
   - `Escape` to dismiss object inspector.
3. **Screen Readers**:
   - Each placed object has an `aria-label` describing the object and its contributor (e.g., `aria-label="Pine Tree placed by student-dev"`).
