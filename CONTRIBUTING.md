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
│  - Check visually at http://localhost:3000/worlds/<id> │
└────────────────────────────────────────────────────────┘
```

---

## 🏷️ Discovery Label Note

- **`good first issue`**: Used on **Issues** to identify available contribution slots for beginner discovery.

---

## 🚀 Quick Step-by-Step Contributor Guide

### 1. Claim a Reusable Issue Slot
- Browse our [Good First Issues](https://github.com/ShenSandaru/OpenCircle-Test/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22).
- Find an open **Contribution Slot** that is unassigned.
- Check the issue details for:
  - **Contribution Slot ID**: e.g., `CONTRIB-SLOT #01`
  - **Issue Number**: Note the GitHub issue number (e.g., `#12`) for your PR description.
  - **Target World**: e.g., `Growing Forest` (`growing-forest`)
  - **Target Segment**: e.g., `forest-01`
  - **Allowed Category / Object**: e.g., `Butterfly`
- Comment on the issue: `I would like to work on this!`
- **Wait for Assignment**: A maintainer will formally assign the issue to you and the automated bot will post your personalized onboarding next-steps comment!
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
Always base your feature branch on the upstream **`dev`** branch (NOT `main`):
```bash
git checkout dev
git fetch upstream
git pull upstream dev
git checkout -b contrib/<world-name>-<object-name>
```
*Example: `git checkout -b contrib/growing-forest-butterfly`*

---

### 4. Commit 1: Asset & Object Registration (~1–5 lines)

1. Save your paper-cutout SVG file (transparent background, <50 KB) to:
   `public/assets/worlds/<world-name>/<object-name>.svg`
   *(Example: `public/assets/worlds/growing-forest/butterfly.svg`)*
2. Open `src/data/worlds/<world-name>/objects.ts` and append your object to the array:
   ```typescript
   {
     id: "butterfly",
     asset: "/assets/worlds/growing-forest/butterfly.svg",
     contributor: {
       displayName: "Your Name",
       githubUsername: "your-github-username",
     },
   },
   ```
3. Check status and create **Commit 1**:
   ```bash
   git status
   git diff
   git add public/assets/worlds/<world-name>/<object-name>.svg
   git add src/data/worlds/<world-name>/objects.ts
   git commit -m "feat: add butterfly asset and object"
   ```

---

### 5. Commit 2: World Placement (~1–5 lines)

1. Open `src/data/worlds/<world-name>/placements.ts`.
2. Append your placement entry specifying your assigned `segmentId` and coordinates `x` (0–100%) and `y` (0–100%):
   ```typescript
   {
     objectId: "butterfly",
     segmentId: "forest-01",
     x: 62.0,
     y: 42.0,
     scale: 1.0,
     rotation: -4,
   },
   ```
3. Check status and create **Commit 2**:
   ```bash
   git status
   git diff
   git add src/data/worlds/<world-name>/placements.ts
   git commit -m "feat: place butterfly in forest-01"
   ```

4. Verify your two commits:
   ```bash
   git log --oneline -2
   ```

5. Run local validation:
   ```bash
   npm run lint
   npm run typecheck
   npm test
   npm run build
   ```

6. View it locally in your browser:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000/worlds/<world-name>` to visually check your placed object and contributor badge.

---

### 6. Submit Your Pull Request

1. Push your feature branch to your fork:
   ```bash
   git push -u origin contrib/<world-name>-<object-name>
   ```
2. Go to GitHub and open a Pull Request against the **`dev`** branch (NOT `main`).
3. In the PR description, replace `#<ISSUE_NUMBER>` with `Closes #<ASSIGNED_ISSUE_NUMBER>` (e.g. `Closes #12`).
4. Keep the **two commits separate** (do not squash them).
5. Once reviewed and merged by maintainers into `dev`, your contribution permanently appears in the growing world! 🎉

---

## 🛑 Contributor File Boundaries

To ensure clean validation, contributors must **only** edit:
- ✅ `public/assets/worlds/<world-name>/*`
- ✅ `src/data/worlds/<world-name>/objects.ts`
- ✅ `src/data/worlds/<world-name>/placements.ts`

Do **NOT** modify engine code (`src/engine/*`), domain schemas (`src/schemas/*`), UI components (`src/components/*`), pages (`src/app/*`), tests (`tests/*`), workflows (`.github/*`), documentation (`docs/*`), scripts (`scripts/*`), or dependency files (`package.json`, `package-lock.json`).
