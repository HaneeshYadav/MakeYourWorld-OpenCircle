# Growing Worlds 🌿

A collaborative, open-source 2D paper-collage world platform built by student developers and open-source beginners.

---

## 📖 What is Growing Worlds?

**Growing Worlds** is an educational open-source platform presenting **10 interactive paper-collage worlds** (*Forest, Universe, Ocean, City, Village, Island, Farm, Campus, Fantasy, and Alien Planet*).

Instead of artificial exercises, students make real contributions through a simple **two-commit workflow**:
1. **Commit 1**: Add a handcrafted paper SVG asset and declare its metadata definition.
2. **Commit 2**: Position the item in an assigned world segment.

Every merged contribution permanently lives in the interactive world with the contributor's chosen display name rendered beneath it!

---

## 🚀 Quick Start for Contributors

### 1. Prerequisites
- **Node.js**: `v20.x` or higher (LTS recommended)
- **npm**: `v10.x` or higher
- **Git**

### 2. Setup Your Environment
```bash
# 1. Fork this repository on GitHub, then clone your fork:
git clone https://github.com/<your-username>/OpenCircle-Test.git
cd OpenCircle-Test

# 2. Add the upstream repository:
git remote add upstream https://github.com/ShenSandaru/OpenCircle-Test.git

# 3. Install dependencies:
npm install

# 4. Start the local development server:
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌟 The Two-Commit Workflow

1. **Claim an Issue Slot**: Browse our [Good First Issues](https://github.com/ShenSandaru/OpenCircle-Test/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22) and comment to claim an available contribution slot.
2. **Create Your Branch**: Always branch from upstream `dev`:
   ```bash
   git checkout dev
   git pull upstream dev
   git checkout -b contrib/<world>-<object-name>
   ```
3. **Commit 1: Asset & Object Registration (~1–5 LOC)**:
   - Add your paper SVG to `public/assets/worlds/<world>/<object-id>.svg`.
   - Register the item in `src/data/worlds/<world>/objects.ts`.
   - Run `npm test` and commit.
4. **Commit 2: World Placement (~1–5 LOC)**:
   - Place the item in `src/data/worlds/<world>/placements.ts` specifying the issue's `segmentId` and coordinates `x, y` (0–100%).
   - Visually check the diorama locally at `http://localhost:3000/worlds/<world-id>`.
   - Run `npm test && npm run lint` and commit.
5. **Open Pull Request**: Submit your PR targeting the **`dev`** branch.

For full guidelines, please read our [CONTRIBUTING.md](CONTRIBUTING.md).

---

## 🗺️ The 10 Implemented Worlds

| World | Category / Theme | Segments |
| :--- | :--- | :--- |
| **Growing Forest** | Woodland flora, fauna, and canopy ecosystem | `forest-01`, `forest-02`, `forest-03` |
| **Growing Universe** | Cosmic stars, planets, satellites, and nebulae | `universe-01`, `universe-02`, `universe-03` |
| **Growing Ocean** | Shallow coral reef, kelp forest, and twilight shelf | `ocean-01`, `ocean-02`, `ocean-03` |
| **Growing City** | Brownstone street, town square, and transit platform | `city-01`, `city-02`, `city-03` |
| **Growing Village** | River watermill, cobblestone street, and market square | `village-01`, `village-02`, `village-03` |
| **Growing Island** | Arrival beach, palm lagoon, and volcanic ridge | `island-01`, `island-02`, `island-03` |
| **Growing Farm** | Homestead yard, golden wheat fields, and pasture windmill | `farm-01`, `farm-02`, `farm-03` |
| **Growing Campus** | University gate, academic quad, and library plaza | `campus-01`, `campus-02`, `campus-03` |
| **Fantasy World** | Enchanted glade, ancient rune arch, and high spire | `fantasy-01`, `fantasy-02`, `fantasy-03` |
| **Alien Planet** | Touchdown basin, spore forest, and crystal geysers | `alien-01`, `alien-02`, `alien-03` |

---

## 🛠️ Commands Reference

| Script | Action |
| :--- | :--- |
| `npm run dev` | Starts local Next.js development server at `localhost:3000` |
| `npm test` | Runs all Vitest schema, positioning, and catalog tests |
| `npm run lint` | Checks TypeScript and React code for ESLint errors |
| `npm run typecheck` | Verifies full TypeScript type-safety (`tsc --noEmit`) |
| `npm run build` | Compiles 100% static production bundle for all 10 worlds |
| `npm run test:e2e` | Runs Playwright end-to-end browser test suite |

---

## 📄 License & Asset Ownership

- **Code**: Permissive open-source license.
- **Assets**: Contributed assets must be original or under permissive open-source licenses (CC0 / MIT). Please do not submit copyrighted, trademarked, or proprietary characters.
