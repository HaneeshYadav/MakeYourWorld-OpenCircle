---
name: testing-workflow
description: >-
  Testing protocols with Vitest, Zod schemas, and Playwright for Growing Worlds.
  Use when writing unit tests, schema validators, CI workflows, or end-to-end browser tests.
---

# Testing Workflow Skill — Growing Worlds

## 1. Test Layers
1. **Unit & Schema Tests (Vitest)**:
   - Validate that all `objects.ts` and `placements.ts` conform to Zod schemas.
   - Assert all referenced `assetPath` files exist on the filesystem in `public/assets/worlds/`.
   - Assert all placement coordinate values are between `0.0` and `100.0`.
   - Command: `npm test` or `npm run test:objects`
2. **End-to-End Tests (Playwright)**:
   - Validate world rendering, world switcher navigation, object clicks, and contributor card inspect modals.
   - Command: `npm run test:e2e`

## 2. CI Verification Rules
All PRs must pass:
- `npm run lint` (zero warnings)
- `npm run typecheck` (`tsc --noEmit`)
- `npm test` (all schema & unit assertions pass)
