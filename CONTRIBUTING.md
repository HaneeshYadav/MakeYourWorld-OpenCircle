# Contributing to Growing Worlds 🌿

Welcome! We are thrilled you want to contribute to **Growing Worlds**.

Growing Worlds is an open-source educational project specifically designed for students and new developers to learn authentic open-source contribution workflows. Every contribution is scoped to a bite-sized Good First Issue (~1–10 meaningful lines of code), and your chosen display name will be permanently rendered in a paper pin badge beneath your object in the shared world!

---

## 🌟 The 2-Commit Contribution Process

Each contribution follows a strict, beginner-friendly **two-commit workflow**:

```
┌────────────────────────────────────────────────────────┐
│  Commit 1: Add Image Asset & Object Registration       │
│  - Add paper SVG file: public/assets/worlds/<world>/   │
│  - Add ~1-5 lines: src/data/worlds/<world>/objects.ts  │
│  - Test with: npm test                                 │
└────────────────────────────────────────────────────────┘
                           │
                           ▼
┌────────────────────────────────────────────────────────┐
│  Commit 2: Place Object in World Segment               │
│  - Add ~1-5 lines: src/data/worlds/<world>/placements.ts│
│  - Set assigned segmentId (e.g. "forest-01") & x, y (%)│
│  - Test with: npm test && npm run lint                 │
│  - Check visually at http://localhost:3000/dev/world-engine│
└────────────────────────────────────────────────────────┘
```

---

## 🚀 Quick Step-by-Step Contributor Guide

### 1. Claim a Reusable Issue Slot
- Browse our [Good First Issues](https://github.com/ShenSandaru/OpenCircle-Test/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22).
- Find an open **Contribution Slot** that is unassigned.
- Check the issue details for:
  - **Target World**: e.g., `Growing Forest`
  - **Target Segment**: e.g., `forest-01`
  - **Allowed Category**: e.g., `woodland flora, birds, insects, small critters`
- Comment on the issue: `I would like to work on this!`
- **Wait for Assignment**: A maintainer will formally assign the issue to you. Commenting alone does not reserve the slot.
- *Note on Inactivity*: Assigned slots are held for **48 hours**. If no PR is submitted within 48 hours, the slot may be unassigned to give other students an opportunity.

### 2. Fork and Clone
- Click **Fork** at the top-right of the repository on GitHub.
- Clone your fork to your computer:
  ```bash
  git clone https://github.com/<your-username>/OpenCircle-Test.git
  cd OpenCircle-Test
  ```
- Add the upstream repository remote:
  ```bash
  git remote add upstream https://github.com/ShenSandaru/OpenCircle-Test.git
  ```
- Install dependencies:
  ```bash
  npm install
  ```

### 3. Create a Feature Branch from `dev`
Always base your feature branch on the upstream **`dev`** branch:
```bash
git checkout dev
git fetch upstream dev
git merge upstream/dev
git checkout -b contrib/<world>-<object-name>
```
*Example: `git checkout -b contrib/forest-butterfly`*

---

### 4. Commit 1: Asset & Object Registration (~1–5 lines)

1. Save your paper-cutout SVG file (transparent background) to:
   `public/assets/worlds/<world-name>/<object-id>.svg`
   *(Example: `public/assets/worlds/growing-forest/student-butterfly.svg`)*
2. Open `src/data/worlds/<world-name>/objects.ts` and append your object to the array:
   ```typescript
   {
     id: "student-butterfly",
     asset: "/assets/worlds/growing-forest/student-butterfly.svg",
     contributor: {
       displayName: "Your Name",
       githubUsername: "your-github-username",
     },
   },
   ```
3. Run the test suite:
   ```bash
   npm test
   ```
4. Create **Commit 1**:
   ```bash
   git add public/assets/worlds/ src/data/worlds/
   git commit -m "feat(forest): add student butterfly object"
   ```

---

### 5. Commit 2: World Placement (~1–5 lines)

1. Open `src/data/worlds/<world-name>/placements.ts`.
2. Append your placement entry specifying your assigned `segmentId` and coordinates `x` (0–100%) and `y` (0–100%):
   ```typescript
   {
     objectId: "student-butterfly",
     segmentId: "forest-01",
     x: 62.0,
     y: 42.0,
     scale: 1.0,
     rotation: -4,
   },
   ```
3. View it locally in your browser:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000/dev/world-engine` to visually check your placed object and contributor label.
4. Run the full test suite and linter:
   ```bash
   npm test
   npm run lint
   ```
5. Create **Commit 2**:
   ```bash
   git add src/data/worlds/
   git commit -m "feat(forest): place student butterfly in forest"
   ```

---

### 6. Submit Your Pull Request

1. Push your feature branch to your fork:
   ```bash
   git push origin contrib/<world>-<object-name>
   ```
2. Go to GitHub and open a Pull Request against the **`dev`** branch (NOT `main`).
3. Keep the **two commits separate** (do not squash them).
4. Fill out the PR template with:
   - Target issue reference (`Closes #XX`)
   - Your Contributor Display Name (rendered under your object)
   - Your Discord username (for community recognition and role updates)
5. Once reviewed and merged by maintainers, your contribution becomes part of the permanent growing world! 🎉

---

## 🛑 Contributor File Boundaries

To ensure clean reviews, contributors must **only** edit:
- ✅ `public/assets/worlds/<world-name>/*`
- ✅ `src/data/worlds/<world-name>/objects.ts`
- ✅ `src/data/worlds/<world-name>/placements.ts`

Do **NOT** modify engine code (`src/engine/*`), domain schemas (`src/schemas/*`), UI components (`src/components/*`), pages (`src/app/*`), tests, or configuration files.

---

## 🎨 Asset Guidelines

- **Style**: 2D Paper-cutout aesthetic. Clean geometric or organic silhouettes, warm paper tones, and transparent background.
- **Format**: SVG strongly preferred.
- **Size**: Optimized, lightweight files (<50 KB).
- **Attribution**: Display name renders beneath the object; Discord handle is used by maintainers for community roles and is never stored in public world files.
- **Originality**: Only use original assets or permissive open-source assets (CC0 / MIT).
