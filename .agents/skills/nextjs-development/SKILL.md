---
name: nextjs-development
description: >-
  Next.js App Router and TypeScript best practices for Growing Worlds.
  Use when implementing pages, layouts, static generation, metadata, and routing.
---

# Next.js Development Skill — Growing Worlds

## 1. App Router Best Practices
- **Route Structure**:
  - `src/app/(marketing)/page.tsx` — Landing page with world gallery
  - `src/app/worlds/[worldId]/page.tsx` — Dynamic world view page
  - `src/app/layout.tsx` — Global root layout with theme provider, fonts, and meta
- **Static Site Generation (`generateStaticParams`)**:
  - Pre-render all 10 world routes at build time for instant page loads.
- **Server Components by Default**:
  - Keep page shells as Server Components.
  - Mark only interactive canvas containers with `'use client'`.

## 2. Coding Standards
- Strict TypeScript: No `any`, full typing of props and schemas.
- Clean imports using `@/` path alias pointing to `src/`.
- Zero ESLint / Prettier warnings.
