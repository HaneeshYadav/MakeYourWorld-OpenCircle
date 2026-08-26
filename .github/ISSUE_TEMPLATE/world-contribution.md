---
name: "🌿 Reusable World Contribution Slot (Good First Issue)"
about: "Reusable contribution slot for adding a paper-collage object into a Growing World segment"
title: "[CONTRIB-SLOT #<01-20>] Add an object to <World Name> (<Segment Name>)"
labels: ["good first issue", "world-contribution"]
assignees: ""
---

### 📍 Target World & Segment
- **Target World**: `[e.g., Growing Forest / Growing Universe / Growing Ocean / Growing City / Growing Village / Growing Island / Growing Farm]`
- **Target Segment**: `[e.g., forest-01 / universe-02 / ocean-01 / city-02 / village-01 / island-01 / farm-02]`
- **Slot Type**: `[REUSABLE CONTRIBUTION SLOT]`

---

### 🎨 Creative Contribution Task
Add **ONE suitable paper-collage object** of your choice matching the allowed categories below. 

> **Important**: This is a *reusable contribution slot*. Your contribution will be permanently added to the world alongside all previous contributions. You have creative freedom to design and name your object within the allowed category!

- **Allowed Categories**: `[e.g., woodland flora, fauna, forest rocks, mushrooms, birds, marine animals, street furniture, farm tools, tropical plants]`
- **Suggested Negative Space**: `[e.g., upper canopy (x: 60-90, y: 20-40) or ground floor (x: 10-40, y: 70-90)]`
- **Visual Style**: 2D Flat paper cutout vector style, warm textured tones, physical drop shadow, transparent background.

---

### 🚀 Step-by-Step Contributor Instructions

1. **Claim the Slot**: Comment below saying `I would like to work on this!`.
2. **Wait for Assignment**: Please wait until a maintainer formally assigns you to this issue before starting.
   *(Note: Assigned slots are reserved for 48 hours. If no PR is opened, the slot will be unassigned for another student).*
3. **Fork & Branch from `dev`**:
   - Fork this repository to your GitHub account.
   - Create your feature branch from the `dev` branch:
     ```bash
     git checkout dev
     git pull upstream dev
     git checkout -b contrib/<world>-<object-name>
     ```
4. **Commit 1 — Add Asset & Register Object Definition (~1–5 LOC)**:
   - Place your paper SVG file in `public/assets/worlds/<world-name>/<object-id>.svg`.
   - Open `src/data/worlds/<world-name>/objects.ts` and append your object definition:
     ```typescript
     {
       id: "<your-object-id>",
       asset: "/assets/worlds/<world-name>/<your-object-id>.svg",
       contributor: {
         displayName: "Your Name",
         githubUsername: "your-github-username",
       },
     },
     ```
   - Run `npm test` and commit:
     ```bash
     git add public/assets/worlds/ src/data/worlds/
     git commit -m "feat(<world>): add <object-name> object"
     ```
5. **Commit 2 — Place in Assigned Segment (~1–5 LOC)**:
   - Open `src/data/worlds/<world-name>/placements.ts` and append your placement with the assigned `segmentId` and coordinates `x, y` (0–100%):
     ```typescript
     {
       objectId: "<your-object-id>",
       segmentId: "<target-segment-id>",
       x: 45.0,
       y: 75.0,
       scale: 1.0,
       rotation: 0,
     },
     ```
   - Run `npm test && npm run lint`.
   - Visually check your object locally at `http://localhost:3000/dev/world-engine`.
   - Commit:
     ```bash
     git add src/data/worlds/
     git commit -m "feat(<world>): place <object-name> in <segment>"
     ```
6. **Open Pull Request against `dev`**:
   - Push your branch to your fork and open a PR targeting the **`dev`** branch.
   - Fill out the PR template with your contributor details and Discord username.
   - Keep the two commits separate (do not squash).

---

### 🛑 Strict Contributor Boundaries
- ✅ **Modify Only**: `public/assets/worlds/<world>/*`, `src/data/worlds/<world>/objects.ts`, `src/data/worlds/<world>/placements.ts`
- ❌ **Do NOT Modify**: `src/engine/*`, `src/schemas/*`, `src/components/*`, `src/app/*`, `tests/*`, `package.json`, or configuration files.

---

### 🛡️ Maintainer Review Checklist (For Maintainers)
- [ ] Student was assigned to this slot.
- [ ] PR targets the `dev` branch.
- [ ] Correct target world and segment.
- [ ] Two distinct commits present (~1–10 LOC each).
- [ ] No maintainer zones or engine code modified.
- [ ] `npm test`, `npm run lint`, and `npm run typecheck` pass.
- [ ] Visual appearance verified.
- [ ] **Post-Merge**: Remove assignee, clear review tags, and **REOPEN this issue slot** for the next student.
