# Growing Worlds — Repository File Structure & Architecture Map

This document outlines the complete architectural organization and directory hierarchy for the **Growing Worlds** codebase.

---

## 🏛️ High-Level Directory Overview

```
.
├── .agents/                      # AI Agent workspace guidelines, custom skills & workflows
├── .github/                      # GitHub issue templates, PR template, and GitHub Actions CI/CD workflows
├── docs/                         # Comprehensive engineering, design, and architecture documentation
│   ├── architecture/             # Engine specifications, data schemas, contribution flows, and world catalogs
│   ├── design/                   # Paper-collage design language and UI principles
│   └── development/              # Setup instructions, testing guidelines, and GitHub settings
├── public/                       # Static public assets
│   └── assets/
│       └── worlds/               # [CONTRIBUTOR REUSE ZONE] Curated paper-cutout SVGs & segment backdrops
├── src/                          # Next.js App Router source code
│   ├── app/                      # Pages, layouts, error routes, and API endpoints
│   ├── components/               # Global UI, navigation, world dioramas, and modals
│   ├── config/                   # Static site configuration and metadata registry
│   ├── data/                     # [CONTRIBUTOR ZONE] Declarative world definitions, objects, and placements
│   ├── engine/                   # [MAINTAINER ZONE] Shared 2D World Rendering Engine & coordinate math
│   ├── lib/                      # Shared utility functions (styling, tailwind merge)
│   └── schemas/                  # Zod runtime validation schemas for world, object, and placement data
├── scripts/                      # Maintainer scripts (integrity auditor, issue parser, slot generator)
└── tests/                        # Vitest unit/integration tests and Playwright E2E suites
```

---

## 📁 Detailed Directory Breakdown

### 1. Documentation (`docs/`)
- [`docs/architecture/overview.md`](file:///d:/Temp/codes/Open%20Circle/OpenCircle-Test/docs/architecture/overview.md): System architecture, technology boundaries, and micro-contribution model.
- [`docs/architecture/world-engine.md`](file:///d:/Temp/codes/Open%20Circle/OpenCircle-Test/docs/architecture/world-engine.md): 2D diorama rendering pipeline, layering system, and coordinate math.
- [`docs/architecture/world-data.md`](file:///d:/Temp/codes/Open%20Circle/OpenCircle-Test/docs/architecture/world-data.md): Data schema definitions for objects, placements, and segments.
- [`docs/architecture/contribution-flow.md`](file:///d:/Temp/codes/Open%20Circle/OpenCircle-Test/docs/architecture/contribution-flow.md): Two-commit contribution lifecycle and PR validation rules.
- [`docs/architecture/world-catalog.md`](file:///d:/Temp/codes/Open%20Circle/OpenCircle-Test/docs/architecture/world-catalog.md): Registry of all 10 active paper worlds.
- [`docs/architecture/world-density.md`](file:///d:/Temp/codes/Open%20Circle/OpenCircle-Test/docs/architecture/world-density.md): Density budgeting, collision boundaries, and visual scaling.
- [`docs/architecture/cross-world-review.md`](file:///d:/Temp/codes/Open%20Circle/OpenCircle-Test/docs/architecture/cross-world-review.md): Audit checklists for world consistency and thematic balance.
- [`docs/design/visual-language.md`](file:///d:/Temp/codes/Open%20Circle/OpenCircle-Test/docs/design/visual-language.md): Paper-collage aesthetic, drop-shadow filters, and color tokens.
- [`docs/design/ui-principles.md`](file:///d:/Temp/codes/Open%20Circle/OpenCircle-Test/docs/design/ui-principles.md): Minimalist, warm, accessible UI principles.
- [`docs/development/setup.md`](file:///d:/Temp/codes/Open%20Circle/OpenCircle-Test/docs/development/setup.md): Local development environment quickstart.
- [`docs/development/testing.md`](file:///d:/Temp/codes/Open%20Circle/OpenCircle-Test/docs/development/testing.md): Vitest unit tests, Playwright E2E setup, and schema validation.
- [`docs/development/github-setup.md`](file:///d:/Temp/codes/Open%20Circle/OpenCircle-Test/docs/development/github-setup.md): Branch protection rules, CI status checks, and workflow setup.

---

### 2. Next.js Application Routes (`src/app/`)
- [`src/app/page.tsx`](file:///d:/Temp/codes/Open%20Circle/OpenCircle-Test/src/app/page.tsx): Homepage featuring the interactive Forest hero diorama, feature highlights, and contribution overview.
- [`src/app/worlds/page.tsx`](file:///d:/Temp/codes/Open%20Circle/OpenCircle-Test/src/app/worlds/page.tsx): All Worlds directory gallery with snapshot previews and modal inspection.
- [`src/app/worlds/[worldId]/page.tsx`](file:///d:/Temp/codes/Open%20Circle/OpenCircle-Test/src/app/worlds/%5BworldId%5D/page.tsx): Dynamic SSG route rendering individual worlds (10 statically generated paths).
- [`src/app/how-to-contribute/page.tsx`](file:///d:/Temp/codes/Open%20Circle/OpenCircle-Test/src/app/how-to-contribute/page.tsx): Step-by-step beginner contributor walkthrough.
- [`src/app/api/github/stats/route.ts`](file:///d:/Temp/codes/Open%20Circle/OpenCircle-Test/src/app/api/github/stats/route.ts): Server-side cached API endpoint fetching live GitHub Stars and Forks.
- [`src/app/not-found.tsx`](file:///d:/Temp/codes/Open%20Circle/OpenCircle-Test/src/app/not-found.tsx): Custom 404 page.
- [`src/app/dev/`](file:///d:/Temp/codes/Open%20Circle/OpenCircle-Test/src/app/dev/): Internal development test harness routes (`/dev/density`, `/dev/world-engine`).

---

### 3. Components (`src/components/`)
- [`src/components/navigation.tsx`](file:///d:/Temp/codes/Open%20Circle/OpenCircle-Test/src/components/navigation.tsx): Sticky top navbar with brand logo, world links, and live community stats.
- [`src/components/CommunityStats.tsx`](file:///d:/Temp/codes/Open%20Circle/OpenCircle-Test/src/components/CommunityStats.tsx): Client-side badges for GitHub Stars and Forks.
- [`src/components/footer.tsx`](file:///d:/Temp/codes/Open%20Circle/OpenCircle-Test/src/components/footer.tsx): Footer with copyright, repository links, and MIT licensing notice.
- [`src/components/world/`](file:///d:/Temp/codes/Open%20Circle/OpenCircle-Test/src/components/world/):
  - `WorldCard.tsx`: Diorama preview card with metadata and exploration actions.
  - `WorldPreview.tsx`: Miniature paper diorama snapshot renderer.
  - `FullscreenWorldViewer.tsx`: Accessible modal dialog for fullscreen diorama inspection.
  - `WorldsOverview.tsx`: Client-side dynamic world directory grid and modal state coordinator.
- [`src/components/ui/`](file:///d:/Temp/codes/Open%20Circle/OpenCircle-Test/src/components/ui/): Primitive UI buttons, badges, and dialogs.

---

### 4. Shared 2D World Engine (`src/engine/`)
- [`src/engine/World.tsx`](file:///d:/Temp/codes/Open%20Circle/OpenCircle-Test/src/engine/World.tsx): Master container coordinating segment navigation and parallax layers.
- [`src/engine/WorldSegment.tsx`](file:///d:/Temp/codes/Open%20Circle/OpenCircle-Test/src/engine/WorldSegment.tsx): Individual segment viewport rendering background, midground, and foreground.
- [`src/engine/WorldLayer.tsx`](file:///d:/Temp/codes/Open%20Circle/OpenCircle-Test/src/engine/WorldLayer.tsx): Layer container managing z-index and parallax depth.
- [`src/engine/WorldCutout.tsx`](file:///d:/Temp/codes/Open%20Circle/OpenCircle-Test/src/engine/WorldCutout.tsx): Interactive paper cutout renderer with drop shadows and contributor attribution badges.
- [`src/engine/math.ts`](file:///d:/Temp/codes/Open%20Circle/OpenCircle-Test/src/engine/math.ts): Percentage coordinate scaling, position clamping, and transform logic.

---

### 5. World Data & Contributor Zones (`src/data/worlds/`)
Each of the 10 worlds contains:
- `world.config.ts`: World theme, colors, dimensions, and segment metadata.
- `objects.ts`: **[Step 1]** Contributor object registration referencing an existing SVG asset.
- `placements.ts`: **[Step 2]** Contributor world coordinates (`x`, `y`), rotation, scale, and segment ID.

---

### 6. Validation Schemas (`src/schemas/`)
- [`src/schemas/world.schema.ts`](file:///d:/Temp/codes/Open%20Circle/OpenCircle-Test/src/schemas/world.schema.ts): Zod schema for full world configurations and segments.
- [`src/schemas/object.schema.ts`](file:///d:/Temp/codes/Open%20Circle/OpenCircle-Test/src/schemas/object.schema.ts): Zod schema for contributed object definitions and contributor metadata.
- [`src/schemas/placement.schema.ts`](file:///d:/Temp/codes/Open%20Circle/OpenCircle-Test/src/schemas/placement.schema.ts): Zod schema for object placements and coordinate bounds.

---

### 7. Automation & Governance Scripts (`scripts/`)
- [`scripts/pr-validator-core.ts`](file:///d:/Temp/codes/Open%20Circle/OpenCircle-Test/scripts/pr-validator-core.ts): PR governance validator enforcing minimum 2 commits, single-world scope, and read-only asset boundaries on `contrib/*` branches.
- [`scripts/issue-lifecycle-parser.ts`](file:///d:/Temp/codes/Open%20Circle/OpenCircle-Test/scripts/issue-lifecycle-parser.ts): Issue title normalization and personalized bot onboarding welcome message generator.
- [`scripts/contribution-slot-generator.ts`](file:///d:/Temp/codes/Open%20Circle/OpenCircle-Test/scripts/contribution-slot-generator.ts): Self-replenishing 20-slot contribution issue pool generator (`CONTRIB-SLOT #01..#20`).
- [`scripts/audit-integrity.ts`](file:///d:/Temp/codes/Open%20Circle/OpenCircle-Test/scripts/audit-integrity.ts): Relational integrity auditor verifying all world assets, objects, segments, and placements on disk.

---

### 8. GitHub Workflows (`.github/workflows/`)
- [`ci.yml`](file:///d:/Temp/codes/Open%20Circle/OpenCircle-Test/.github/workflows/ci.yml): Runs PR validation, linting, TypeScript typecheck, Vitest unit tests, Next.js production build, and integrity audit.
- [`auto-rename-issue.yml`](file:///d:/Temp/codes/Open%20Circle/OpenCircle-Test/.github/workflows/auto-rename-issue.yml): Normalizes issue titles and posts automated onboarding comments upon assignment.
- [`replenish-contribution-slots.yml`](file:///d:/Temp/codes/Open%20Circle/OpenCircle-Test/.github/workflows/replenish-contribution-slots.yml): Maintains a standing pool of 20 unassigned beginner contribution issue slots.
