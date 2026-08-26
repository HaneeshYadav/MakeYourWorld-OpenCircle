---
name: project-architecture
description: >-
  Architectural guidelines and boundaries for Growing Worlds.
  Use when designing features, adding system components, or verifying boundaries
  between the shared world engine, static presentation, and contributor data zones.
---

# Project Architecture Skill — Growing Worlds

## 1. System Overview
Growing Worlds is an educational open-source Next.js application presenting 10 interactive 2D paper-collage worlds populated solely via GitHub contributions.

## 2. Key Architecture Rules
- **Shared Engine (`src/engine/`)**: Single reusable engine for all 10 worlds. Never create a separate engine per world.
- **Read-Only App**: No database, no user accounts, no login system, no in-browser coordinate/asset editor.
- **Micro-Contributions**: Every contribution is 1–10 lines of code across two commits.
- **No Monorepo / Heavy State Managers**: Use standard Next.js App Router, React state/context, and standard Tailwind CSS + shadcn/ui.

## 3. Structural Boundaries
- Contributor areas: `src/data/worlds/*`, `public/assets/worlds/*`
- Maintainer areas: `src/engine/*`, `src/schemas/*`, `src/components/*`, `tests/*`
