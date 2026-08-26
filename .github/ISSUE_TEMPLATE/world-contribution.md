---
name: "🌿 Reusable World Contribution Slot (Good First Issue)"
about: "Reusable contribution slot for adding a paper-collage object into a Growing World segment"
title: "[CONTRIB-SLOT #<01-20>] Add an object to <World Name> (<Segment Name>)"
labels: ["good first issue", "world-contribution"]
assignees: ""
---

### 📍 Target World & Segment
- **World**: `[e.g., Growing Forest / Growing Universe / Growing Ocean]`
- **Target Segment**: `[e.g., forest-01 / forest-02]`
- **Slot Status**: `[OPEN / REUSABLE]`

---

### 🎨 Contribution Task
Add a paper-collage style object to populate this segment.

- **Suggested Object Ideas**: `[e.g., woodland flora, fauna, forest rocks, mushrooms, birds]`
- **Available Negative Space**: `[e.g., upper canopy (x: 60-90, y: 20-40) or lower forest floor (x: 10-40, y: 70-90)]`
- **Visual Palette Notes**: `[e.g., warm earthy tones, flat paper vector style, transparent background]`

---

### 🚀 Contributor Instructions

1. **Claim the Issue**: Comment below saying `I would like to work on this!`.
2. **Wait for Assignment**: Please wait until a maintainer assigns you to this issue before starting.
3. **Fork & Branch**:
   - Fork the repository to your GitHub account.
   - Create your branch from `dev`:
     ```bash
     git checkout dev
     git pull upstream dev
     git checkout -b contrib/<world>-<object-name>
     ```
4. **Commit 1 — Asset & Object Registration (~1–5 LOC)**:
   - Place your SVG/PNG file in `public/assets/worlds/<world-name>/<object-id>.svg`.
   - Add your object definition to `src/data/worlds/<world-name>/objects.ts`.
   - Run `npm test` and commit:
     ```bash
     git add public/assets/worlds/ src/data/worlds/
     git commit -m "feat(<world>): add <object-name> object"
     ```
5. **Commit 2 — Placement in Segment (~1–5 LOC)**:
   - Add your placement in `src/data/worlds/<world-name>/placements.ts` specifying this issue's `segmentId` and coordinates `x, y` (0–100%).
   - Visually verify at `http://localhost:3000/dev/world-engine`.
   - Run `npm test && npm run lint` and commit:
     ```bash
     git add src/data/worlds/
     git commit -m "feat(<world>): place <object-name> in <segment>"
     ```
6. **Submit PR**:
   - Push your branch and open a PR against the `dev` branch.
   - Fill out the PR template with your contributor name and Discord handle.
   - Keep the two commits separate (do not squash).

---

### 🛑 Contributor File Boundaries
- ✅ **Modify Only**: `public/assets/worlds/<world>/*`, `src/data/worlds/<world>/objects.ts`, `src/data/worlds/<world>/placements.ts`
- ❌ **Do NOT Modify**: `src/engine/*`, `src/schemas/*`, `src/components/*`, `tests/*`, `package.json`, or config files.

---

### 🛡️ Maintainer Review Notes (For Maintainers)
- *Upon merging, remove the assignee, clear labels, and REOPEN this issue for the next student.*
