---
name: "🌿 Reusable World Contribution Slot (Good First Issue)"
about: "Reusable contribution slot for adding a paper-collage object into a Growing World segment"
title: "[Good First Issue] 🌱 Add a <Object Name> to <World Name> — <Segment Name> (CONTRIB-SLOT #<01-20>)"
labels: ["good first issue"]
assignees: ""
---

# 🟢 Good First Issue: Add <Object Name> to <World Name>

> 🌱 **Welcome!** This is a beginner-friendly contribution. No previous open-source experience is required! Follow the steps below and you can complete your contribution step-by-step from start to finish.

---

## 🎯 Contribution Slot Summary

| Field | Value |
| :--- | :--- |
| **Difficulty** | Beginner (No prior open-source experience needed) |
| **Estimated Time** | 15–30 minutes |
| **Contribution Slot** | `[e.g., CONTRIB-SLOT #02]` |
| **Target World** | `[e.g., Growing Forest]` (`growing-forest`) |
| **Target Segment** | `[e.g., forest-02]` (Sunlit Meadow) |
| **Object Name** | `[e.g., Butterfly]` |
| **Suggested Asset File** | `public/assets/worlds/<world-name>/<object-name>.svg` |
| **PR Target Branch** | `dev` |
| **Student Feature Branch** | `contrib/<world-name>-<object-name>` |

---

## 🎯 Your Task

Your task is to add **ONE** paper-cutout object to **<World Name>** inside the assigned **<Segment Name>** (`<segment-id>`).

- **Permanent Contribution**: Once merged into `dev`, your object permanently joins the living diorama, credited with your name in a paper pin badge beneath your art.
- **Scope & Isolation**: You must strictly stay within your assigned world and segment — do not modify other worlds or existing items.

---

## 📁 Files You Will Change

All of your work is strictly contained in these specific files:

```text
Commit 1 (Asset & Object Registration):
├── public/assets/worlds/<world-name>/<object-name>.svg  (Your paper artwork)
└── src/data/worlds/<world-name>/objects.ts              (Object metadata & contributor attribution)

Commit 2 (World Placement):
└── src/data/worlds/<world-name>/placements.ts           (Coordinates & segment placement)
```

---

# 🔐 IMPORTANT — EXACTLY 2 COMMITS REQUIRED

The automated contributor validator checks this two-commit structure:

### Commit 1: Asset + Object Registration
- **MUST contain**:
  - `public/assets/worlds/<world-name>/<object-name>.svg`
  - `src/data/worlds/<world-name>/objects.ts`
- **MUST NOT contain**:
  - `src/data/worlds/<world-name>/placements.ts`
- **Suggested Commit Message**: `feat: add <object-name> asset and object`

### Commit 2: World Placement Only
- **MUST contain**:
  - `src/data/worlds/<world-name>/placements.ts`
- **MUST NOT contain**:
  - Unrelated files, extra assets, or engine files.
- **Suggested Commit Message**: `feat: place <object-name> in <segment-id>`

> ⚠️ **Do NOT squash** your commits! Keep them separate so automated CI checks can verify both steps.

---

# 🛠️ Step-by-Step Beginner Walkthrough

### Step 1: Claiming the Slot
Comment on this issue: `I would like to work on this!`
A maintainer will assign you to the issue. Once assigned, you have a 48-hour window to submit your PR.

---

### Step 2: Fork and Clone the Repository
1. Click **Fork** at the top right of this repository on GitHub.
2. Clone your fork to your computer:
   ```bash
   git clone https://github.com/<your-username>/OpenCircle-Test.git
   cd OpenCircle-Test
   ```
3. Add the upstream repository:
   ```bash
   git remote add upstream https://github.com/ShenSandaru/OpenCircle-Test.git
   ```

---

### Step 3: Branch from Upstream `dev`
Always base your work on the latest `dev` branch:
```bash
git checkout dev
git fetch upstream
git pull upstream dev
```

Create your student feature branch using the required `contrib/` prefix:
```bash
git checkout -b contrib/<world-name>-<object-name>
```
*Example:* `git checkout -b contrib/growing-forest-butterfly`

---

### Step 4: Install Dependencies
```bash
npm install
```

---

### Step 5: Create & Register Your Object (Commit 1)
1. **Create the SVG Artwork**:
   - Create a clean 2D paper cutout style SVG (or transparent PNG) with a transparent background (<50 KB).
   - Save it to: `public/assets/worlds/<world-name>/<object-name>.svg`.

2. **Register the Object**:
   - Open `src/data/worlds/<world-name>/objects.ts` and append your object definition:
     ```typescript
     {
       id: "<object-name>",
       asset: "/assets/worlds/<world-name>/<object-name>.svg",
       contributor: {
         displayName: "<Your Name>",
         githubUsername: "<your-github-username>",
       },
     },
     ```

3. **Check Changes & Commit 1**:
   ```bash
   git status
   git diff
   git add public/assets/worlds/<world-name>/<object-name>.svg
   git add src/data/worlds/<world-name>/objects.ts
   git commit -m "feat: add <object-name> asset and object"
   ```

---

### Step 6: Place Your Object in the World (Commit 2)
1. Open `src/data/worlds/<world-name>/placements.ts` and append your placement referencing your registered `id` and assigned `segmentId`:
   ```typescript
   {
     objectId: "<object-name>",
     segmentId: "<assigned-segment-id>",
     x: 45.0,
     y: 55.0,
     scale: 1.0,
     rotation: 0,
   },
   ```
   *(Coordinates `x` and `y` are normalized percentages from `0.0` to `100.0`)*

2. **Check Changes & Commit 2**:
   ```bash
   git status
   git diff
   git add src/data/worlds/<world-name>/placements.ts
   git commit -m "feat: place <object-name> in <assigned-segment-id>"
   ```

---

### Step 7: Verify Exactly 2 Commits
```bash
git log --oneline -2
```
Expected output:
```text
<hash-2> feat: place <object-name> in <assigned-segment-id>
<hash-1> feat: add <object-name> asset and object
```

---

### Step 8: Run Local Quality Gates
Make sure all checks pass locally:
```bash
npm run lint
npm run typecheck
npm test
npm run build
```

---

### Step 9: Visual Verification in Browser
Start the local Next.js development server:
```bash
npm run dev
```
Open `http://localhost:3000/worlds/<world-name>` in your browser to verify:
- Your object appears in its assigned segment.
- The paper-cutout shadow and styling render properly.
- Your contributor name badge appears beneath the object.

---

### Step 10: Push and Open Pull Request
1. Push your branch to your fork:
   ```bash
   git push -u origin contrib/<world-name>-<object-name>
   ```

2. On GitHub, navigate to your fork and click **Compare & pull request**:
   - **Base branch**: `dev` *(Do NOT target `main`)*
   - **Compare branch**: `contrib/<world-name>-<object-name>`

3. In the PR description, link this issue so it automatically closes upon merge:
   ```markdown
   ## 🔗 Linked Issue
   Closes #<THIS_ISSUE_NUMBER>
   ```
   *(Example: `Closes #12`)*

---

# 🚫 Files You Should NOT Modify

Student contributors must **NOT** touch maintainer or infrastructure files:
- `.github/`
- `docs/`
- `scripts/`
- `tests/`
- `src/app/`
- `src/components/`
- `src/engine/`
- `src/schemas/`
- `package.json` & `package-lock.json`

---

# 📋 Final Submission Checklist

- [ ] Started from latest `dev`
- [ ] Created `contrib/<world>-<object>` branch
- [ ] Commit 1 contains SVG asset + `objects.ts` registration
- [ ] Commit 2 contains `placements.ts` placement only
- [ ] Two commits remain separate (not squashed)
- [ ] Placed in assigned segment
- [ ] `npm test`, `npm run lint`, `npm run typecheck`, and `npm run build` passed cleanly
- [ ] Visually verified at `http://localhost:3000/worlds/<world-name>`
- [ ] PR targets `dev`
- [ ] PR description contains `Closes #<ISSUE_NUMBER>`
