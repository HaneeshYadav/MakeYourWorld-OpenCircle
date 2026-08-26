# Contributing to Growing Worlds 🌿

Welcome! We are thrilled you want to contribute to **Growing Worlds**.

Growing Worlds is specifically built for students and beginners to practice real-world open-source contributions. Every contribution is tiny (~1–10 meaningful lines of code), structured, and celebrated. Your chosen display name will be permanently rendered beneath the object you place in the world!

---

## 🌟 The 2-Commit Contribution Process

Each contribution is split into two small, distinct commits:

```
┌────────────────────────────────────────────────────────┐
│  Commit 1: Add Image Asset & Object Registration       │
│  - Add your SVG/PNG file: public/assets/worlds/<world>/│
│  - Add 1-5 lines: src/data/worlds/<world>/objects.ts   │
│  - Test with: npm test                                 │
└────────────────────────────────────────────────────────┘
                           │
                           ▼
┌────────────────────────────────────────────────────────┐
│  Commit 2: Place Object in World Segment               │
│  - Add 1-5 lines: src/data/worlds/<world>/placements.ts│
│  - Set target segmentId (e.g. "forest-01") & x, y (%)  │
│  - Test with: npm test                                 │
│  - Check visually at http://localhost:3000/dev/world-engine│
└────────────────────────────────────────────────────────┘
```

---

## 🚀 Quick Step-by-Step Guide

### 1. Claim an Issue
- Browse our [Good First Issues](https://github.com/ShenSandaru/OpenCircle-Test/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22).
- Check the issue details for:
  - **Target World**: e.g., `Growing Forest`
  - **Target Segment**: e.g., `forest-01`
  - **Object Idea**: e.g., `Butterfly`
- Comment on the issue: `I would like to work on this!`
- Wait for a maintainer to assign the issue to you before starting work.

### 2. Fork and Clone
- Click **Fork** at the top-right of the repository.
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

### 3. Create a Branch from `dev`
Always create your branch from `dev`:
```bash
git checkout dev
git pull upstream dev
git checkout -b contrib/<world>-<object-name>
```
*Example: `git checkout -b contrib/forest-butterfly`*

---

### 4. Commit 1: Asset & Object Registration (~1–5 lines)

1. Save your paper-collage style SVG (or transparent PNG/WebP) to:
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
2. Go to GitHub and open a Pull Request against the `dev` branch.
3. Keep the **two commits separate** (do not squash them).
4. Fill out the PR template with your details and Discord username for notification tracking.
5. Once merged by maintainers, your contribution is live! 🎉

---

## 🛑 Files Contributors Should NEVER Modify

To ensure a smooth review, contributors must **only** edit:
- `public/assets/worlds/<world-name>/*`
- `src/data/worlds/<world-name>/objects.ts`
- `src/data/worlds/<world-name>/placements.ts`

Do **NOT** modify engine code (`src/engine/*`), schemas (`src/schemas/*`), components, or CI configurations.

---

## 🎨 Asset Guidelines

- **Style**: 2D Paper cutout aesthetic. Clean silhouettes with warm, harmonious colors.
- **Format**: SVG preferred (transparent background), or transparent WebP/PNG.
- **Size**: Optimized, lightweight files.
- **Original / Open Source**: Please only use assets you created or those with permissive open-source licenses (CC0 / MIT).
