# Visual Language & Paper-Collage System

## 1. Aesthetic Vision: 2D Paper-Collage

**Growing Worlds** presents a handcrafted, tactile **paper-collage aesthetic**. Every world feels like an intricate paper craft diorama assembled from textured construction paper, torn parchment, cardstock, and painted paper cutouts.

```
       ┌──────────────────────────────┐
       │   ✦ Paper Collage World ✦    │
       │                              │
       │   [ Layer 0: Torn Paper Sky] │
       │   [ Layer 1: Mountain Cuts ] │
       │   [ Layer 2: Contrib Items ] │
       │      ┌────────────┐          │
       │      │  🌲 Cutout │          │
       │      │  🏷️ alice  │          │
       │      └────────────┘          │
       └──────────────────────────────┘
```

---

## 2. Core Visual Rules

### 2.1 The Tactile Paper Effect
- **Subtle Layer Drop Shadows**: Instead of blurry software dropshadows, use distinct, layered, warm-tinted paper shadows:
  ```css
  /* Paper cutout shadow token */
  --shadow-paper-cutout: 0 4px 6px -1px rgba(15, 23, 42, 0.12),
                         0 2px 4px -2px rgba(15, 23, 42, 0.08);
  --shadow-paper-elevated: 0 10px 15px -3px rgba(15, 23, 42, 0.16),
                           0 4px 6px -4px rgba(15, 23, 42, 0.1);
  ```
- **Slight Angles / Deckled Edges**: Paper objects should have an optional subtle rotation (e.g. `-2°` to `+2°`) to mimic hand-placed paper cutouts.
- **Paper Grain & Texture**: A subtle CSS/SVG noise filter applied over the world canvas gives a physical paper cardstock feel without impacting frame rates.

### 2.2 Asset Guidelines for Contributors
When contributors provide `.svg` or `.png` assets:
1. **Flat / Layered Vector Style**: Bold shapes, clean silhouettes, warm harmonious fills. Avoid hyper-realistic 3D renders or glossy gradients.
2. **Transparent Backgrounds**: SVGs must have viewBox trimmed to content bounds with `xmlns="http://www.w3.org/2000/svg"`.
3. **Contour Cut Border**: Optional thin 1.5px warm off-white or cream stroke (`#FFFDF7`) around complex silhouettes to resemble cut paper edges.
4. **Lightweight**: SVGs should be under 50KB; PNGs (if vector is impossible) must be optimized transparent WebP/PNG under 150KB.

---

## 3. World Color Palettes (Curated Tokens)

| World | Primary (60%) | Secondary (30%) | Accent (10%) |
| :--- | :--- | :--- | :--- |
| **Growing Forest** | Deep Forest Green (`#1E3A2F`) | Moss & Amber (`#4A6B48`, `#D99B26`) | Glowing Blue (`#38BDF8`) |
| **Growing Universe** | Cosmic Indigo (`#0B0D1B`) | Nebula Violet (`#4C1D95`, `#7C3AED`) | Stardust Gold (`#FBBF24`) |
| **Growing Ocean** | Deep Coral Turquoise (`#0F3846`) | Aquamarine & Sand (`#14B8A6`, `#FDE68A`) | Coral Pink (`#F43F5E`) |
| **Growing City** | Blueprint Slate (`#1E293B`) | Urban Concrete (`#64748B`, `#94A3B8`) | Beacon Amber (`#F59E0B`) |
| **Growing Island** | Lagoon Azure (`#0284C7`) | Tropical Palm (`#15803D`, `#FBBF24`) | Hibiscus Magenta (`#EC4899`) |
| **Growing Farm** | Golden Grain (`#CA8A04`) | Barn Crimson (`#991B1B`, `#D97706`) | Meadow Clover (`#16A34A`) |
| **Growing Campus** | Ivy Brick Red (`#881337`) | Collegiate Navy (`#1E3A8A`, `#E2E8F0`) | Campus Gold (`#EAB308`) |
| **Fantasy World** | Arcane Purple (`#3B0764`) | Enchanted Moss (`#065F46`, `#A855F7`) | Dragon Gold (`#F59E0B`) |
| **Growing Village** | Cobblestone Grey (`#374151`) | Timber Oak (`#78350F`, `#D97706`) | Lantern Light (`#FDE047`) |
| **Alien Planet** | Xenon Obsidian (`#180828`) | Bioluminescent Teal (`#0D9488`, `#C026D3`) | Acid Lime (`#84CC16`) |

---

## 4. Contributor Name Tag Design

Each placed object features a physical **Paper Pin Tag**:
- Designed as a mini luggage tag or pinned cardstock label with a subtle drop shadow.
- Displays contributor's GitHub avatar (20x20px circle) + GitHub `@username`.
- Links directly to the contributor's GitHub profile.
- Accessible: visible on hover, keyboard focus, and when inspecting the object in the detail panel.
