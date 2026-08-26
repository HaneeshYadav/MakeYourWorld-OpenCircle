# World Data Schema & Specifications

## 1. Overview

World data in **Growing Worlds** is completely decentralized, declarative, and type-safe. Each world has its own folder inside `src/data/worlds/<worldId>/` with three distinct files.

---

## 2. Directory Structure per World

```
src/data/worlds/growing-forest/
├── index.ts          # Aggregates and exports the complete WorldConfig
├── config.ts         # Base world configuration, dimensions, palette, ambient audio
├── objects.ts        # [CONTRIBUTOR ZONE - Commit 1] Object definitions
└── placements.ts     # [CONTRIBUTOR ZONE - Commit 2] Placements & Attribution
```

---

## 3. Schemas & TypeScript Definitions

### 3.1 World Configuration (`config.ts`)
```typescript
import { z } from "zod";

export const WorldConfigSchema = z.object({
  id: z.string().regex(/^[a-z0-9-]+$/),
  name: z.string().min(2).max(50),
  description: z.string().max(200),
  themeColor: z.string(),
  aspectRatio: z.enum(["16:9", "21:9", "4:3"]).default("16:9"),
  viewport: z.object({
    minZoom: z.number().default(0.8),
    maxZoom: z.number().default(2.5),
    defaultZoom: z.number().default(1.0),
  }),
  layers: z.object({
    background: z.object({
      cssGradient: z.string().optional(),
      baseAsset: z.string().optional(),
    }),
    midground: z.object({
      baseTerrainAsset: z.string().optional(),
    }),
    foreground: z.object({
      overlayAsset: z.string().optional(),
    }),
  }),
});

export type WorldConfig = z.infer<typeof WorldConfigSchema>;
```

---

### 3.2 Object Definition Schema (`objects.ts`)
Each object represents a reusable paper cutout asset in the world's catalog.

```typescript
import { z } from "zod";

export const WorldObjectSchema = z.object({
  id: z.string().regex(/^[a-z0-9-]+$/),
  name: z.string().min(2).max(40),
  category: z.enum([
    "flora",
    "fauna",
    "structure",
    "vehicle",
    "celestial",
    "item",
    "terrain",
    "character",
  ]),
  assetPath: z.string().startsWith("/assets/worlds/"),
  defaultWidthPercent: z.number().min(0.5).max(30).default(5),
  aspectRatio: z.number().positive().default(1.0), // width / height
  description: z.string().max(120).optional(),
});

export type WorldObjectDef = z.infer<typeof WorldObjectSchema>;
```

#### Example `objects.ts` entry:
```typescript
export const forestObjects: Record<string, WorldObjectDef> = {
  "glowing-mushroom": {
    id: "glowing-mushroom",
    name: "Glowing Blue Mushroom",
    category: "flora",
    assetPath: "/assets/worlds/growing-forest/glowing-mushroom.svg",
    defaultWidthPercent: 3.5,
    aspectRatio: 0.9,
    description: "A soft luminescent mushroom found under old oak roots.",
  },
};
```

---

### 3.3 Placement Schema (`placements.ts`)
Each placement instantiates an object from `objects.ts` into the world canvas with contributor attribution.

```typescript
import { z } from "zod";

export const ContributorSchema = z.object({
  username: z.string().min(1).max(39), // GitHub username max length
  avatarUrl: z.string().url().optional(),
  prNumber: z.number().int().positive().optional(),
  message: z.string().max(80).optional(),
});

export const PlacementSchema = z.object({
  id: z.string().regex(/^[a-z0-9-]+$/),
  objectId: z.string(),
  x: z.number().min(0).max(100), // percentage X coordinate
  y: z.number().min(0).max(100), // percentage Y coordinate
  scale: z.number().min(0.2).max(3.0).default(1.0),
  rotation: z.number().min(-45).max(45).default(0), // tilt angle in degrees
  layer: z.enum(["background", "midground", "foreground"]).default("midground"),
  zIndex: z.number().int().min(0).max(1000).default(10),
  contributor: ContributorSchema,
});

export type Placement = z.infer<typeof PlacementSchema>;
```

#### Example `placements.ts` entry:
```typescript
export const forestPlacements: Placement[] = [
  {
    id: "placement-glowing-mushroom-01",
    objectId: "glowing-mushroom",
    x: 42.5,
    y: 78.2,
    scale: 1.1,
    rotation: 2,
    layer: "midground",
    contributor: {
      username: "alice-coder",
      avatarUrl: "https://github.com/alice-coder.png",
      prNumber: 42,
      message: "First contribution to Growing Forest!",
    },
  },
];
```

---

## 4. Automated Data Validation Rules

1. **Foreign Key Integrity**: Every `objectId` in `placements.ts` must match a valid key in `objects.ts` of the same world.
2. **Physical Asset Verification**: Every `assetPath` in `objects.ts` must resolve to an existing `.svg` or `.png` file in `public/assets/worlds/<worldId>/`.
3. **Bounding Range**: `x` and `y` must strictly stay within `[0.0, 100.0]`.
4. **ID Collision Prevention**: Placement IDs and Object IDs must be unique within the world.
