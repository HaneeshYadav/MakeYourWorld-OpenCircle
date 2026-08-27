# Growing Worlds — Technology Stack & Boundaries

This document details the technologies, libraries, architectural principles, and explicit boundaries used in **Growing Worlds**.

---

## 🛠️ Core Technology Stack

| Category | Technology | Version / Specification | Usage & Purpose |
| :--- | :--- | :--- | :--- |
| **Framework** | [Next.js](https://nextjs.org/) (App Router) | `15.x` | Hybrid static & server presentation, dynamic routing for worlds (`/worlds/[worldId]`), API route for live community stats (`/api/github/stats`). |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | `5.x` (Strict Mode) | End-to-end type safety across the shared 2D engine, domain data schemas, governance scripts, and UI components. |
| **UI Library** | [React](https://react.dev/) | `19.x` | Component architecture, state management, interactive paper collage canvas, and accessible modal dialogs. |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) | `3.4.x` | Paper-collage styling tokens, textured drop shadows, warm color palettes, responsive layouts, and utility classes. |
| **Components & Icons** | [shadcn/ui](https://ui.shadcn.com/) / [Lucide](https://lucide.dev/) | `1.16.x` | Accessible primitives (buttons, dialogs), navigation icons, diorama status badges, and interactive tooltips. |
| **Data Validation** | [Zod](https://zod.dev/) | `3.24.x` | Runtime schema validation for world configurations, contributor object registrations, coordinate placements, and boundary integrity. |
| **Unit & Schema Testing** | [Vitest](https://vitest.dev/) | `3.x` | High-speed unit tests covering PR validator rules, issue lifecycle parsing, coordinate math, and schema integrity. |
| **E2E Testing** | [Playwright](https://playwright.dev/) | `1.50.x` | Browser-based end-to-end testing of world rendering, responsive navigation, and interactive diorama viewers. |
| **Code Quality** | ESLint & Prettier | Strict 0-warning | Zero-warning linting (`next/core-web-vitals`, `@typescript-eslint`) and consistent code formatting. |
| **Package Manager** | `npm` | `10.x+` | Standard package manager for scripts, dependency installation, and CI workflows. |

---

## 🎨 2D Paper-Collage Visual Engine

- **Shared Rendering Engine**: All 10 worlds share a single, unified rendering engine located in [`src/engine/`](file:///d:/Temp/codes/Open%20Circle/OpenCircle-Test/src/engine/). The engine is strictly data-driven and reusable.
- **Layering Hierarchy**:
  - `background`: Segment backdrops, distant terrain, skies, nebulae, ocean shelves.
  - `midground`: Main terrain, primary trees, buildings, floating platforms, vehicles.
  - `foreground`: Ambient details, weather cutouts, flora props, interactive contributor pins.
- **Paper Aesthetics**: SVG drop shadows (`feDropShadow`), white cutout edge strokes, subtle tilt rotations (-2° to +2°), and paper-tag contributor attribution badges.

---

## 🚫 Prohibited Dependencies & Architectural Boundaries

To preserve beginner accessibility and lightning-fast static builds, the following patterns and dependencies are strictly prohibited:

1. ❌ **No Heavy State Managers**: Do not install Redux, Zustand, MobX, or Jotai. React local state and URL parameters are sufficient.
2. ❌ **No Heavy 3D / Canvas Frameworks**: Do not install Three.js, Babylon.js, or Pixi.js. The aesthetic is 2D paper-collage using standard DOM and SVGs.
3. ❌ **No Backend Databases / ORMs**: Do not install Prisma, Drizzle, Supabase, Firebase, or MongoDB. The application is a static/read-only presentation of merged GitHub contributions.
4. ❌ **No Direct In-App Object Editors**: GitHub issues and PRs are the only contribution gateway. No drag-and-drop live web editors.
5. ❌ **No Monorepo Complexities**: Keep the codebase in a single standard Next.js repository.

---

## 📂 Contributor Zone vs. Maintainer Zone Boundaries

| Zone | Directory Path | Modification Permissions |
| :--- | :--- | :--- |
| **Contributor Zone** | `src/data/worlds/<world>/objects.ts`<br>`src/data/worlds/<world>/placements.ts` | **Student Contributors**: Scoped to ~1–10 lines per contribution (Step 1: Register object reusing an existing SVG stamp; Step 2: Add placement in assigned segment). |
| **Public Assets** | `public/assets/worlds/<world>/` | **Read-Only / Reusable**: Pre-curated paper cutout SVGs referenced by contributors. |
| **Maintainer Zone** | `src/engine/*`<br>`src/schemas/*`<br>`src/components/*`<br>`src/app/*`<br>`scripts/*`<br>`.github/*` | **Maintainers Only**: Core rendering engine, validation schemas, site navigation, and GitHub Actions lifecycle automation. |
