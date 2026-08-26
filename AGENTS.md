# AGENTS.md — Growing Worlds Project Instructions

This file defines the core boundaries, architecture rules, technology choices, coding standards, and modification constraints for AI coding agents and human maintainers working on **Growing Worlds**.

---

## 1. Project Purpose & Philosophy

**Growing Worlds** is an open-source educational platform where students and new developers learn and practice authentic open-source contribution workflows.

The application presents approximately 10 interactive **2D Paper-Collage Worlds** (e.g., *Growing Forest, Growing Universe, Growing Ocean, Growing City, Growing Island, Growing Farm, Growing Campus, Fantasy World, Growing Village, Alien Planet*).

### Non-Negotiable Product Rules:
1. **GitHub is the only contribution gateway**: No in-browser object editors, no direct file upload UI, no admin consoles.
2. **No User Accounts / Auth / Database**: The web application is a static/read-only client representing merged GitHub contributions.
3. **Micro-Contributions**: Every contribution is scoped to a "Good First Issue" (~1–10 meaningful lines of code per step across asset addition, object registration, and world placement).
4. **Attribution**: Contributor GitHub usernames and profile avatars appear beneath their placed objects in the world.
5. **Shared World Engine**: All ~10 worlds run on a single, shared, reusable rendering engine. **Never duplicate the engine per world.**
6. **No Monorepo / Nx / Turborepo**: Keep the project in a single standard Next.js repository unless explicitly requested by maintainers.
7. **Maintainer Boundary vs Contributor Boundary**: Contributor zones (`src/data/worlds/*`, `public/assets/worlds/*`) are intentionally simple and isolated from core engine code (`src/engine/*`).

---

## 2. Technology Stack & Boundaries

| Category | Technology | Usage & Boundary |
| :--- | :--- | :--- |
| **Framework** | Next.js (App Router) | Static/hybrid presentation, dynamic routing for worlds (`/worlds/[worldId]`). |
| **Language** | TypeScript (Strict Mode) | Full type safety across engine, schemas, and contributor data definitions. |
| **Styling** | Tailwind CSS + CSS Variables | Paper collage aesthetic, textured shadows, clean UI frames. |
| **Components** | shadcn/ui + Radix UI + Lucide | Navbars, world explorer drawer/dialog, inspect cards, tooltips. |
| **Validation** | Zod | Runtime validation for world definitions, item metadata, placement coordinates, and schema tests. |
| **Unit/Integration Testing** | Vitest | Schema validation tests, placement boundary checks, registry integrity. |
| **E2E Testing** | Playwright | World rendering, interactive canvas inspection, responsive navigation. |
| **Formatting & Linting** | ESLint + Prettier | Enforce strict zero-warning policy. |
| **Package Manager** | `npm` | Use `npm` for installs, scripts, and dependency management. |

### Prohibited Dependencies & Patterns:
- ❌ **No Heavy State Managers**: Do not install Redux, Zustand, MobX, or Jotai. React context / local state / URL params are sufficient.
- ❌ **No Heavy Canvas/3D Frameworks**: Do not install Three.js, Babylon.js, or Pixi.js unless maintainers explicitly instruct. The visual style is 2D paper-collage using standard DOM/SVG/lightweight Canvas.
- ❌ **No Backend DBs / ORMs**: Do not install Prisma, Drizzle, Supabase, Firebase, or MongoDB.
- ❌ **No Direct In-App Editing Tools**: No drag-and-drop live coordinate editors in public production builds.

---

## 3. Architecture & Folder Structure Boundaries

```
├── .agents/                      # AI Agent skills and workspace rules
│   └── skills/                   # Specialized task runbooks
├── .github/                      # GitHub templates, workflows, CODEOWNERS
├── docs/                         # Comprehensive architectural & design docs
│   ├── architecture/             # Engine, data schema, contribution flow
│   ├── design/                   # Paper-collage visual guidelines, UI tokens
│   └── development/              # Setup and testing instructions
├── public/
│   └── assets/
│       └── worlds/               # [CONTRIBUTOR ZONE] SVGs and PNG assets
│           ├── forest/
│           ├── universe/
│           └── ...
├── src/
│   ├── app/                      # Next.js App Router pages and layouts
│   │   ├── (marketing)/          # Landing page, world directory
│   │   ├── worlds/[worldId]/     # World view page
│   │   └── layout.tsx
│   ├── components/               # shadcn/ui & global application components
│   │   ├── ui/                   # Primitive UI components (buttons, dialogs)
│   │   ├── world/                # World wrapper, inspect overlay, header
│   │   └── navigation/           # Main navbar, footer
│   ├── config/                   # Static site and world metadata registry
│   ├── data/
│   │   └── worlds/               # [CONTRIBUTOR ZONE] Object & Placement data
│   │       ├── forest/
│   │       │   ├── objects.ts    # Step 1: Object definitions
│   │       │   └── placements.ts # Step 2: World coordinates & contributor info
│   │       └── ...
│   ├── engine/                   # [MAINTAINER ZONE] Core 2D World Engine
│   │   ├── Canvas.tsx            # Viewport, zoom/pan container
│   │   ├── Layer.tsx             # Background, Midground, Foreground layers
│   │   ├── WorldObject.tsx       # Paper cutout renderer + contributor label
│   │   ├── types.ts              # Core engine type definitions
│   │   └── math.ts               # Coordinate transformation & clamp logic
│   ├── schemas/                  # Zod validation schemas
│   │   ├── world.schema.ts
│   │   ├── object.schema.ts
│   │   └── placement.schema.ts
│   └── lib/                      # Shared utilities (cn, formatting)
└── tests/
    ├── unit/                     # Vitest schema and registry tests
    └── e2e/                      # Playwright world interaction tests
```

---

## 4. World Engine Rules

1. **Shared Engine**:
   - The engine lives in `src/engine/`.
   - Worlds are strictly data-driven configurations (`src/data/worlds/<worldId>/`).
   - A world consists of:
     - **Background & Layers**: Backdrop styles, parallax depth configurations, boundary limits (`world.config.ts`).
     - **Objects Catalogue**: Contributed items with asset paths, natural dimensions, sound/animation hints (`objects.ts`).
     - **Placements List**: Active placed instances with `(x, y)` percentages or coordinates, scale, z-index, layer assignment, and contributor metadata (`placements.ts`).
2. **Layering Model**:
   - `background`: Sky, stars, mountains, deep textures (ambient, non-interactive).
   - `midground`: Main terrain, primary trees, buildings, floating islands.
   - `foreground`: Detail props, weather cutouts, ambient paper overlays.
3. **Paper-Collage Aesthetics**:
   - Objects must render with subtle drop-shadows, paper edge cutouts, or slight random angle tilts (-2° to +2°) to evoke physical paper collages.
   - Contributor attribution (GitHub username + avatar) renders elegantly beneath or upon hovering over the object with a paper-tag design.

---

## 5. Contributor Workflow & Rules

A standard contributor PR is intentionally bite-sized and divided into clear steps:

1. **Step 1: Asset & Object Registration**
   - Add asset: `public/assets/worlds/<world-name>/<object-id>.svg` (or `.png`).
   - Add definition in `src/data/worlds/<world-name>/objects.ts` (1–5 lines):
     ```typescript
     export const pineTree: WorldObjectDef = {
       id: "pine-tree",
       name: "Pine Tree",
       assetPath: "/assets/worlds/forest/pine-tree.svg",
       category: "flora",
     };
     ```
   - Commit & run test: `npm run test:objects`
2. **Step 2: Placement & Attribution**
   - Add placement in `src/data/worlds/<world-name>/placements.ts` (3–8 lines):
     ```typescript
     {
       id: "placement-pine-tree-01",
       objectId: "pine-tree",
       x: 35.5, // percentage of world width (0-100)
       y: 62.0, // percentage of world height (0-100)
       layer: "midground",
       contributor: {
         username: "student-dev",
         avatarUrl: "https://github.com/student-dev.png",
       },
     }
     ```
   - Commit & run validation: `npm test`

---

## 6. What AI Agents Must NEVER Change Casually

> [!CAUTION]
> **Strict Agent Constraints:**
> - **DO NOT rewrite the Engine Core (`src/engine/`)** when asked to add a new world or fix a contribution data error.
> - **DO NOT add database connections or API routes** for user registration or object uploads.
> - **DO NOT introduce complex third-party visual canvas engines** (e.g. Three.js, Pixi.js).
> - **DO NOT break or complicate the ~10 line contribution format** in `objects.ts` and `placements.ts`. Keep TypeScript typings easy to understand for beginners.
> - **DO NOT alter Zod schemas** in ways that invalidate existing contributor submissions without a major version upgrade plan.
> - **DO NOT install packages with yarn or pnpm** — use `npm`.

---

## 7. Testing & Quality Expectations

- **Schema Integrity**: Every world object and placement must pass Zod schema validation via Vitest (`tests/unit/schemas.test.ts`).
- **Asset Existence**: Tests must verify that every `assetPath` specified in `objects.ts` actually exists on disk in `public/assets/worlds/`.
- **Coordinate Boundaries**: All placements must have `0 <= x <= 100` and `0 <= y <= 100` (or defined world bounds).
- **Zero Lint/Type Errors**: `npm run lint` and `npm run typecheck` must pass with zero warnings.
