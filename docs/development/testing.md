# Testing Strategy & Guidelines

## 1. Testing Philosophy

Testing in **Growing Worlds** focuses on:
1. **Preventing Contributor Breakages**: Ensuring that adding an object or placement cannot break other objects or crash the world viewport.
2. **Schema & Asset Integrity**: Automated verification of physical asset files on disk, foreign key matches, coordinate boundaries, and Zod schemas.
3. **Smooth Interaction & Rendering**: E2E browser verification that worlds load and objects are interactive.

---

## 2. Test Architecture

```
tests/
├── unit/
│   ├── schemas/
│   │   ├── world-config.test.ts   # Validates all world.config.ts files
│   │   ├── objects.test.ts        # Validates objects.ts & asset file presence
│   │   └── placements.test.ts     # Validates placement coordinates & foreign keys
│   └── engine/
│       ├── math.test.ts           # Zoom/pan boundary calculations
│       └── coordinate.test.ts     # Percentage-to-pixel calculations
└── e2e/
    ├── home.spec.ts               # Landing page and world switcher
    ├── world-view.spec.ts         # Canvas pan/zoom and layer rendering
    └── object-inspect.spec.ts     # Object click, contributor tag, and modal
```

---

## 3. Unit & Integration Testing with Vitest

### 3.1 Running Unit Tests
```bash
# Run all unit tests
npm test

# Run tests in watch mode during development
npm run test:watch

# Fast check specifically for contributor objects & assets
npm run test:objects
```

### 3.2 What the Unit Tests Verify
1. **Asset Exists on Disk**:
   ```typescript
   // Example test logic in tests/unit/schemas/objects.test.ts
   import fs from "node:fs";
   import path from "node:path";
   import { allWorlds } from "@/data/worlds";

   test("all defined objects have existing physical asset files", () => {
     for (const world of allWorlds) {
       for (const obj of Object.values(world.objects)) {
         const fullPath = path.join(process.cwd(), "public", obj.assetPath);
         expect(fs.existsSync(fullPath)).toBe(true);
       }
     }
   });
   ```
2. **Placements Reference Valid Object IDs**:
   ```typescript
   test("every placement references a declared object in the same world", () => {
     for (const world of allWorlds) {
       const objectKeys = new Set(Object.keys(world.objects));
       for (const placement of world.placements) {
         expect(objectKeys.has(placement.objectId)).toBe(true);
       }
     }
   });
   ```
3. **Normalized Coordinate Bounds**:
   ```typescript
   test("coordinates are within 0% to 100%", () => {
     for (const world of allWorlds) {
       for (const p of world.placements) {
         expect(p.x).toBeGreaterThanOrEqual(0);
         expect(p.x).toBeLessThanOrEqual(100);
         expect(p.y).toBeGreaterThanOrEqual(0);
         expect(p.y).toBeLessThanOrEqual(100);
       }
     }
   });
   ```

---

## 4. End-to-End Testing with Playwright

Playwright tests ensure the Next.js frontend behaves properly across desktop and mobile viewports.

### 4.1 Running Playwright Tests
```bash
# Install Playwright browsers (first-time only)
npx playwright install --with-deps

# Run all E2E tests
npm run test:e2e

# Run with interactive UI mode
npm run test:e2e -- --ui
```

### 4.2 Key E2E Scenarios
- **World Switching**: Navigating from `/worlds/growing-forest` to `/worlds/growing-ocean`.
- **Canvas Interaction**: Zooming in/out using keyboard and HUD buttons.
- **Inspector Dialog**: Clicking a placed cutout displays the contributor's GitHub username, avatar, and PR number.
