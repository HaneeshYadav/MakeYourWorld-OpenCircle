---
name: "🌿 Reusable World Contribution Slot (Good First Issue)"
about: "Reusable contribution slot for adding a paper-collage object into a Growing World segment"
title: "[CONTRIB-SLOT #<01-20>] Add a <Object Name> to <World Name> (<Segment Name>)"
labels: ["good first issue", "world-contribution"]
assignees: ""
---

# 🌿 <World Name> Contribution Slot

## 🎯 Task

Add **ONE <Object Name>** object to the **<World Name>** world.

- **Contribution Slot**: `[e.g., CONTRIB-SLOT #02]`
- **Target World**: `[e.g., Growing Forest]`
- **Target Segment**: `[e.g., forest-02]`
- **Object**: `[e.g., Butterfly]`
- **Suggested Asset Filename**: `[e.g., <object-name>.svg]`

The contributor must create the asset, register the object, place it in the assigned segment, test it locally, and submit it using the required two-commit workflow.

> ⚠️ **Important**: This is a reusable student contribution slot. Your contribution will become a permanent part of the project.

---

## 🏗️ Relevant Project Files

All of your work will take place inside these specific paths:

- **Asset directory**:
  `public/assets/worlds/<world-name>/`
  *(Place your original or CC0/MIT SVG/PNG image cutout here).*

- **Object registration**:
  `src/data/worlds/<world-name>/objects.ts`
  *(Declare your object ID, asset path, and your contributor display name here).*

- **Object placement**:
  `src/data/worlds/<world-name>/placements.ts`
  *(Position your registered object inside your assigned segment with `x` and `y` coordinates).*

- **World data directory**:
  `src/data/worlds/<world-name>/`
  *(Contains the segments, objects, and placements for this world).*

> 💡 **Tip**: Before making changes, inspect existing items in `objects.ts` and `placements.ts` as practical reference examples!

---

# 🛠️ Step-by-Step Instructions

Follow these sequential steps carefully:

### STEP 1 — Update local `dev`
Ensure your local environment has the latest code from upstream:
```bash
git checkout dev
git pull origin dev
```
*(Your contribution branch must start from the latest `dev` branch. Do **NOT** branch from `main`).*

---

### STEP 2 — Create the student branch
Create and switch to your feature branch using the required `contrib/*` naming convention:
```bash
git checkout -b contrib/<world>-<object-name>
```
*Example: `git checkout -b contrib/growing-forest-butterfly`*

> ℹ️ `contrib/*` is the official student contribution branch convention. The repository's automated PR validator uses this prefix to identify student contribution PRs.

---

### STEP 3 — Create the asset
Create ONE suitable object matching your assigned task:
- **Format**: Vector SVG strongly preferred (or PNG).
- **Style**: 2D Flat paper cutout aesthetic, warm textured tones, transparent background.
- **Location**: Save the file to `public/assets/worlds/<world-name>/<object-name>.svg`.
- **Integrity**: Do not replace or modify existing assets.

---

### STEP 4 — Register the object
Open `src/data/worlds/<world-name>/objects.ts` and append your object definition to the array:

```typescript
{
  id: "<object-id>",
  asset: "/assets/worlds/<world-name>/<asset-name>.svg",
  contributor: {
    displayName: "<Your Display Name>",
    githubUsername: "<Your GitHub Username>",
  },
},
```

*(Follow the actual schema in `src/schemas/object.schema.ts` — ensure `id` is kebab-case and unique).*

---

### STEP 5 — Review Commit 1
Check your staged/unstaged changes:
```bash
git status
git diff
```
Commit 1 must contain **ONLY**:
- `public/assets/worlds/<world-name>/<asset-name>.svg`
- `src/data/worlds/<world-name>/objects.ts`

*(Commit 1 must **NOT** contain `placements.ts`, documentation, tests, CI files, or unrelated changes).*

---

### STEP 6 — Create Commit 1
Stage and commit your asset and object registration:
```bash
git add public/assets/worlds/<world-name>/<asset-name>.svg
git add src/data/worlds/<world-name>/objects.ts
git commit -m "feat: add <object> asset and object"
```
*(Commit 1 = Asset + Object Registration).*

---

### STEP 7 — Push Commit 1
Push your first commit to your fork:
```bash
git push -u origin contrib/<world>-<object-name>
```
*(Commit 1 must remain a separate commit. Do **NOT** squash it).*

---

### STEP 8 — Add the placement
Open `src/data/worlds/<world-name>/placements.ts` and append your placement referencing your registered `id` and assigned `segmentId`:

```typescript
{
  objectId: "<object-id>",
  segmentId: "<assigned-segment-id>",
  x: 45.0,
  y: 55.0,
  scale: 1.0,
  rotation: 0,
},
```
*(Coordinates `x` and `y` are normalized percentages from `0.0` to `100.0`. Choose natural coordinates within your assigned segment).*

---

### STEP 9 — Create Commit 2
Check your status and commit the placement:
```bash
git status
git diff
git add src/data/worlds/<world-name>/placements.ts
git commit -m "feat: place <object> in <segment>"
```
*(Commit 2 = Placement only. Commit 2 must **NOT** add another asset or modify `objects.ts`).*

---

### STEP 10 — Verify the two commits
Verify your Git log history:
```bash
git log --oneline -2
```
Expected output structure:
```text
<commit-2-hash> feat: place <object> in <segment>
<commit-1-hash> feat: add <object> asset and object
```
*(The two commits **MUST** remain separate. Do **NOT** squash them).*

---

### STEP 11 — Push Commit 2
Push your second commit:
```bash
git push
```

---

### STEP 12 — Run local validation
Execute all quality gates locally to ensure zero errors:
```bash
npm ci
npm run lint
npm run typecheck
npm test
npm run build
```
*(Every command must pass cleanly before opening the Pull Request).*

---

### STEP 13 — Run and visually verify the application
Launch the local dev server:
```bash
npm run dev
```
Open `http://localhost:3000/worlds/<world-name>` in your browser and verify:
- The world page loads smoothly.
- Your assigned segment renders cleanly.
- Your new object appears in the segment with its paper cutout styling.
- Your contributor name badge renders under the object upon inspection.
- Existing world objects remain intact.
- Zero console errors or runtime warnings.

---

### STEP 14 — Review Git status
Ensure your working directory is completely clean:
```bash
git status
git log --oneline -2
```

---

### STEP 15 — Open the Pull Request
On GitHub, open a Pull Request with:
- **Base Branch**: `dev` *(Do **NOT** target `main`)*
- **Compare Branch**: `contrib/<world>-<object-name>`

---

### STEP 16 — Link the Issue
In the PR description, fill out the Linked Issue section:
```markdown
## 🔗 Linked Issue

Issue: #<ISSUE_NUMBER>
Closes #<ISSUE_NUMBER>
```
*(Replace `<ISSUE_NUMBER>` with the actual number of this issue, e.g. `Closes #12`. This will automatically link and close the slot upon merge).*

---

### STEP 17 — PR checklist
Verify before hitting submit:
- [ ] Started from latest `dev`
- [ ] Created `contrib/*` branch
- [ ] Commit 1 contains asset
- [ ] Commit 1 contains `objects.ts` registration
- [ ] Commit 2 contains `placements.ts`
- [ ] Two commits remain separate (not squashed)
- [ ] Correct assigned segment used
- [ ] No unrelated files modified
- [ ] `npm ci` passed
- [ ] `npm run lint` passed
- [ ] `npm run typecheck` passed
- [ ] `npm test` passed
- [ ] `npm run build` passed
- [ ] Local visual verification completed
- [ ] PR targets `dev`
- [ ] Issue linked with `Closes #<ISSUE_NUMBER>`

---

# 🚫 Files You Should NOT Modify

For a student contribution, you must **NOT** modify maintainer or infrastructure files:
- `.github/`
- `docs/`
- `scripts/`
- `tests/`
- `src/app/`
- `src/components/`
- `src/engine/`
- `src/schemas/`
- `package.json` & `package-lock.json`

*(Do not modify other worlds, other contributors' work, or unrelated placements. Modifying forbidden files will cause automated CI checks to reject the PR).*

---

# 🤖 Automated Validation

The repository's GitHub Actions workflow automatically validates pull requests targeting `dev`. Because your branch name starts with `contrib/`, the system identifies it as a student contribution and verifies:
- **Branch Convention**: Starts with `contrib/*`.
- **Two-Commit Structure**: Exactly two separate commits.
- **Commit 1**: Asset + `objects.ts` registration.
- **Commit 2**: `placements.ts` in assigned segment.
- **File Boundaries**: Zero forbidden/maintainer files touched.
- **Standard Quality Gates**: ESLint, TypeScript Typecheck, Vitest Unit Tests, and Next.js SSG Production Build.

If validation fails, read the GitHub Actions check output, fix the issue on your branch, commit the fix, and push again.

---

# 🏗️ Expected Final Structure

```text
Repository Structure:
├── public/assets/worlds/<world-name>/
│   └── <object-asset>.svg
│
└── src/data/worlds/<world-name>/
    ├── objects.ts
    └── placements.ts

Git History (2 separate commits):
Commit 2: feat: place <object> in <segment>
└── src/data/worlds/<world-name>/placements.ts

Commit 1: feat: add <object> asset and object
├── public/assets/worlds/<world-name>/<object-asset>.svg
└── src/data/worlds/<world-name>/objects.ts
```

---

# 🏷️ Issue Label

This issue uses the standard GitHub label:
- **`good first issue`**: Used by students to discover available contribution slots.

---

# 📋 Final Submission Checklist

- [ ] Correct world
- [ ] Correct segment
- [ ] Correct object
- [ ] Asset created
- [ ] Asset stored in correct directory
- [ ] Object registered in `objects.ts`
- [ ] Commit 1 created
- [ ] Commit 1 pushed
- [ ] Placement created in `placements.ts`
- [ ] Commit 2 created
- [ ] Commit 2 pushed
- [ ] Two commits remain separate
- [ ] Local application verified at `http://localhost:3000/worlds/<world-name>`
- [ ] `npm ci` passed
- [ ] `npm run lint` passed
- [ ] `npm run typecheck` passed
- [ ] `npm test` passed
- [ ] `npm run build` passed
- [ ] Working tree clean
- [ ] PR targets `dev`
- [ ] Issue linked with `Closes #<ISSUE_NUMBER>`
- [ ] GitHub Actions passed
- [ ] Ready for maintainer review

Thank you for contributing to Growing Worlds! 🌱
