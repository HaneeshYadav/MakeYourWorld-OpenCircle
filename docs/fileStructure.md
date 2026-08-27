# Project File Structure & Development Guidelines

This document outlines the directory structure and architectural patterns used in **Growing Worlds**. All future features, world additions, and code changes should strictly adhere to these guidelines to ensure codebase consistency, maintainability, and clear separation between maintainer and contributor zones.

---

## 📁 Directory Structure Overview

```
├── .agents/                      # AI Agent workspace rules, skills, and runbooks
├── .github/                      # Issue templates, PR templates, and GitHub Actions CI/CD workflows
│   ├── ISSUE_TEMPLATE/           # Structured issue templates for world contribution slots
│   └── workflows/                # Automation workflows (CI, auto-rename-issue, replenish-slots)
├── docs/                         # Architecture, design tokens, and developer documentation
│   ├── architecture/             # Engine specifications, data schemas, contribution flows, and world catalogs
│   ├── design/                   # Paper-collage design language and UI principles
│   └── development/              # Setup instructions, testing guidelines, and GitHub settings
├── public/                       # Static public assets
│   └── assets/
│       └── worlds/               # [CONTRIBUTOR REUSE ZONE] Pre-curated paper-cutout SVGs & backdrops
├── src/                          # Next.js App Router source code
│   ├── app/                      # Next.js App Router (pages, layouts, and route-specific UI)
│   │   ├── api/                  # Server-side API endpoints (e.g. /api/github/stats)
│   │   ├── dev/                  # Internal development test harnesses (/dev/density, /dev/world-engine)
│   │   ├── how-to-contribute/    # Route: /how-to-contribute (contributor onboarding guide)
│   │   ├── worlds/               # Route: /worlds (all worlds gallery)
│   │   │   └── [worldId]/        # Dynamic route: /worlds/[worldId] (individual 2D diorama explorer)
│   │   ├── globals.css           # Global Tailwind CSS and CSS variables
│   │   ├── layout.tsx            # Root application layout (Navbar, Footer, Providers)
│   │   ├── not-found.tsx         # Custom 404 page
│   │   └── page.tsx              # Root homepage route (Hero diorama & feature paths)
│   ├── components/               # Shared global components & UI primitives
│   │   ├── ui/                   # Reusable UI component primitives (shadcn/ui buttons, dialogs)
│   │   ├── world/                # World explorer UI (cards, preview dioramas, fullscreen viewer)
│   │   ├── CommunityStats.tsx    # Live GitHub community stats indicator badge
│   │   ├── footer.tsx            # Global application footer
│   │   └── navigation.tsx        # Sticky global navigation bar
│   ├── config/                   # Static site configuration and metadata registry (site.ts)
│   ├── data/                     # [CONTRIBUTOR ZONE] Declarative world definitions, objects, and placements
│   │   └── worlds/               # 10 active paper worlds (forest, universe, ocean, city, etc.)
│   │       └── <world-id>/
│   │           ├── world.config.ts # World metadata, theme, and segment definitions
│   │           ├── objects.ts    # [Step 1] Contributed object registrations referencing existing SVGs
│   │           └── placements.ts # [Step 2] World placements (segmentId, coordinates, rotation, scale)
│   ├── engine/                   # [MAINTAINER ZONE] Shared 2D World Rendering Engine
│   │   ├── World.tsx             # Master container coordinating segment navigation and parallax layers
│   │   ├── WorldSegment.tsx      # Segment viewport rendering background, midground, and foreground
│   │   ├── WorldLayer.tsx        # Layer container managing z-index and parallax depth
│   │   ├── WorldCutout.tsx       # Paper cutout renderer with drop shadows and attribution tags
│   │   ├── math.ts               # Percentage coordinate scaling, position clamping, and transform logic
│   │   └── types.ts              # Core engine type definitions
│   ├── lib/                      # Shared helper utilities (cn, styling formatters)
│   └── schemas/                  # Runtime Zod validation schemas (world.schema.ts, object.schema.ts, placement.schema.ts)
├── scripts/                      # Maintainer scripts (integrity auditor, issue parser, slot generator)
└── tests/                        # Vitest unit/integration tests and Playwright E2E suites
    ├── unit/                     # Unit test suites (schemas, engine math, governance validators, API routes)
    └── e2e/                      # Playwright browser integration tests
```

---

## 📐 Core Architectural Rules & Guidelines

### 1. Maintainer Boundary vs. Contributor Boundary
- **Rule**: Contributors only modify their assigned world's `src/data/worlds/<world-id>/objects.ts` (Commit 1) and `src/data/worlds/<world-id>/placements.ts` (Commit 2). They must **never** modify engine components, schemas, site configuration, or dependencies.
- **Why**: Keeps student contributions bite-sized (~1–10 LOC), prevents merge conflicts, and ensures strict security and stability across all 10 worlds.

### 2. Asset Reuse-First Model (`public/assets/worlds/`)
- **Rule**: Contributors select and reuse existing curated paper-cutout SVGs stored in `public/assets/worlds/<world-id>/`. Contributors do **not** upload or create new SVG files for standard Good First Issues.
- **Why**: Eliminates artistic friction, ensures uniform paper-collage styling and drop-shadow consistency, and prevents large binary or unvetted SVG bloat.

### 3. Shared World Engine (`src/engine/`)
- **Rule**: All 10 worlds are strictly data-driven and render through the single, shared, reusable rendering engine in `src/engine/`. **Never duplicate or fork the engine per world.**
- **Why**: Guarantees consistent parallax behavior, responsive scaling, coordinate clamping, and unified performance optimizations.

### 4. Shared & Primitive Components (`src/components/`)
- **Rule**: Place global layout components (`navigation.tsx`, `footer.tsx`, `CommunityStats.tsx`) in `src/components/`. Place generic, reusable UI primitives (buttons, dialogs, badges) in `src/components/ui/`. Place world-specific explorer components in `src/components/world/`.
- **Why**: Keeps reusable design system tokens and primitive UI separate from feature-specific layout code.

### 5. Runtime Schema Validation (`src/schemas/`)
- **Rule**: Every world configuration, contributed object definition, and placement coordinate entry must validate against strict Zod runtime schemas before being loaded or merged.
- **Why**: Catches malformed data, coordinate overflows (`x, y` outside 0–100%), and missing asset references during automated CI tests.

### 6. Clean Import Paths (`@/...`)
- **Rule**: Always use the defined path alias `@/` mapped to the `src/` directory (e.g., `import { World } from "@/engine"`, `import { cn } from "@/lib/utils"`).
- **Why**: Avoids brittle relative imports (`../../../`) and keeps import statements clean, readable, and refactor-safe across the repository.
