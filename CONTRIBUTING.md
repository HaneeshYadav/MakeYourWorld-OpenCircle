# Contributing to Growing Worlds 🌿

Welcome! We are thrilled you want to contribute to **Growing Worlds**.

Growing Worlds is specifically built for students and beginners to practice real-world open-source contributions. Every contribution is tiny, structured, and celebrated. Your GitHub profile and avatar will be permanently displayed underneath the object you add to the world!

---

## 🌟 The 2-Commit Contribution Process

Each contribution is split into two small, distinct commits:

```
┌────────────────────────────────────────────────────────┐
│  Commit 1: Add Image Asset & Object Registration       │
│  - Add your SVG file in public/assets/worlds/<world>/   │
│  - Add 1-5 lines in src/data/worlds/<world>/objects.ts  │
│  - Test with: npm run test:objects                     │
└────────────────────────────────────────────────────────┘
                           │
                           ▼
┌────────────────────────────────────────────────────────┐
│  Commit 2: Place Object in World & Add Attribution     │
│  - Add 3-8 lines in src/data/worlds/<world>/placements.ts│
│  - Test with: npm test                                 │
│  - Check visually at http://localhost:3000             │
└────────────────────────────────────────────────────────┘
```

---

## 🚀 Quick Step-by-Step Guide

### 1. Claim an Issue
- Browse our [Good First Issues](https://github.com/ShenSandaru/OpenCircle-Test/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22).
- Comment on the issue: `I would like to work on this!` to claim it.

### 2. Fork and Clone
- Click **Fork** at the top-right of the repository.
- Clone your fork to your computer:
  ```bash
  git clone https://github.com/<your-username>/OpenCircle-Test.git
  cd OpenCircle-Test
  ```
- Install dependencies using standard **npm**:
  ```bash
  npm install
  ```

### 3. Create a Branch from `dev`
Always branch off `dev`:
```bash
git checkout dev
git pull origin dev
git checkout -b contrib/<world>-<object-name>
```
*Example: `git checkout -b contrib/forest-pine-tree`*

---

### 4. Commit 1: Asset & Object Data (~1–5 lines)

1. Save your paper-collage style SVG (or transparent PNG) to:
   `public/assets/worlds/<world-name>/<object-id>.svg`
2. Open `src/data/worlds/<world-name>/objects.ts` and add your item:
   ```typescript
   "pine-tree": {
     id: "pine-tree",
     name: "Pine Tree",
     category: "flora",
     assetPath: "/assets/worlds/growing-forest/pine-tree.svg",
     defaultWidthPercent: 6,
   },
   ```
3. Run the fast object validation test:
   ```bash
   npm run test:objects
   ```
4. Commit your first step:
   ```bash
   git add public/assets/worlds/ src/data/worlds/
   git commit -m "feat(forest): add pine tree object"
   ```

---

### 5. Commit 2: World Placement & Attribution (~3–8 lines)

1. Open `src/data/worlds/<world-name>/placements.ts`.
2. Choose coordinates `x` (0–100%) and `y` (0–100%) that do not heavily overlap existing items:
   ```typescript
   {
     id: "placement-pine-tree-01",
     objectId: "pine-tree",
     x: 35.0,
     y: 65.0,
     layer: "midground",
     contributor: {
       username: "your-github-username",
       avatarUrl: "https://github.com/your-github-username.png",
     },
   },
   ```
3. View it locally:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000/worlds/growing-forest` and admire your object!
4. Run the full test suite and linter:
   ```bash
   npm test
   npm run lint
   ```
5. Commit your second step:
   ```bash
   git add src/data/worlds/
   git commit -m "feat(forest): place pine tree with contributor attribution"
   ```

---

### 6. Submit Your Pull Request

1. Push your branch to your fork:
   ```bash
   git push origin contrib/<world>-<object-name>
   ```
2. Go to GitHub and click **Compare & pull request**.
3. Target the `dev` branch as the base branch.
4. Fill out the Pull Request template and link your issue (`Closes #123`).
5. Maintainers will review and merge your PR. Congratulations on your open-source contribution! 🎉

---

## 🎨 Asset Guidelines

- **Style**: 2D Paper cutout / craft diorama aesthetic. Clean silhouettes with warm, harmonious colors.
- **Format**: SVG preferred (transparent background, optimized), or transparent WebP/PNG.
- **Size**: Keep files small (< 50KB for SVGs, < 150KB for PNGs).
- **Original / Open Source**: Please only use assets you created or those with permissive open-source licenses (CC0 / MIT).

---

## ❓ Need Help?

- If you get stuck on Git commands or test errors, comment directly on your issue or ask in our community discussions. We are here to help you learn!
