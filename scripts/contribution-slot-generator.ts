/**
 * Deterministic Contribution Slot Generator for Growing Worlds.
 * Manages the replenishment of the 20-slot contribution issue pool.
 */

export interface ExistingSlotAssignment {
  slotFormatted: string; // e.g. "CONTRIB-SLOT #03"
  worldId: string;       // e.g. "growing-forest"
  segmentId: string;     // e.g. "forest-01"
  objectName: string;    // e.g. "Butterfly"
  isOpen: boolean;
}

export interface CuratedConcept {
  worldId: string;
  worldName: string;
  categoryLabel: string;
  objectName: string;
  assetFile: string;
  defaultSegmentId: string;
  segmentName: string;
}

/**
 * Master catalog of valid contribution concepts mapped to existing verified SVG assets.
 */
export const CURATED_CONCEPTS: CuratedConcept[] = [
  // Growing Forest
  {
    worldId: "growing-forest",
    worldName: "Growing Forest",
    categoryLabel: "🌲 Forest: Butterfly (Woodland Wildlife / Fauna)",
    objectName: "Butterfly",
    assetFile: "student-butterfly.svg",
    defaultSegmentId: "forest-01",
    segmentName: "Ancient Canopy",
  },
  {
    worldId: "growing-forest",
    worldName: "Growing Forest",
    categoryLabel: "🌲 Forest: Song Bird (Canopy Bird / Fauna)",
    objectName: "Song Bird",
    assetFile: "song-bird.svg",
    defaultSegmentId: "forest-01",
    segmentName: "Ancient Canopy",
  },
  {
    worldId: "growing-forest",
    worldName: "Growing Forest",
    categoryLabel: "🌲 Forest: Woodland Flower (Forest Floor Flora)",
    objectName: "Woodland Flower",
    assetFile: "woodland-flower.svg",
    defaultSegmentId: "forest-02",
    segmentName: "Sunlit Meadow",
  },
  {
    worldId: "growing-forest",
    worldName: "Growing Forest",
    categoryLabel: "🌲 Forest: Mossy Rock (Terrain Prop)",
    objectName: "Mossy Rock",
    assetFile: "mossy-rock.svg",
    defaultSegmentId: "forest-02",
    segmentName: "Sunlit Meadow",
  },
  {
    worldId: "growing-forest",
    worldName: "Growing Forest",
    categoryLabel: "🌲 Forest: Red Mushroom (Fungi & Undergrowth)",
    objectName: "Red Mushroom",
    assetFile: "red-mushroom.svg",
    defaultSegmentId: "forest-03",
    segmentName: "Deep Grove",
  },
  {
    worldId: "growing-forest",
    worldName: "Growing Forest",
    categoryLabel: "🌲 Forest: Forest Deer (Large Fauna)",
    objectName: "Forest Deer",
    assetFile: "forest-deer.svg",
    defaultSegmentId: "forest-03",
    segmentName: "Deep Grove",
  },

  // Growing Universe
  {
    worldId: "growing-universe",
    worldName: "Growing Universe",
    categoryLabel: "🌌 Universe: Spiral Galaxy (Deep Space Nebula)",
    objectName: "Spiral Galaxy",
    assetFile: "spiral-galaxy.svg",
    defaultSegmentId: "universe-01",
    segmentName: "Starlit Orbit",
  },
  {
    worldId: "growing-universe",
    worldName: "Growing Universe",
    categoryLabel: "🌌 Universe: Crescent Moon (Lunar Body)",
    objectName: "Crescent Moon",
    assetFile: "crescent-moon.svg",
    defaultSegmentId: "universe-02",
    segmentName: "Planetary Horizon",
  },
  {
    worldId: "growing-universe",
    worldName: "Growing Universe",
    categoryLabel: "🌌 Universe: Paper Satellite (Orbital Tech)",
    objectName: "Paper Satellite",
    assetFile: "paper-satellite.svg",
    defaultSegmentId: "universe-01",
    segmentName: "Starlit Orbit",
  },
  {
    worldId: "growing-universe",
    worldName: "Growing Universe",
    categoryLabel: "🌌 Universe: Paper Comet (Cosmic Wanderer)",
    objectName: "Paper Comet",
    assetFile: "paper-comet.svg",
    defaultSegmentId: "universe-03",
    segmentName: "Asteroid Belt",
  },
  {
    worldId: "growing-universe",
    worldName: "Growing Universe",
    categoryLabel: "🌌 Universe: Paper Asteroid (Asteroid Belt)",
    objectName: "Paper Asteroid",
    assetFile: "paper-asteroid.svg",
    defaultSegmentId: "universe-03",
    segmentName: "Asteroid Belt",
  },

  // Growing Ocean
  {
    worldId: "growing-ocean",
    worldName: "Growing Ocean",
    categoryLabel: "🌊 Ocean: Swimming Clownfish (Reef Fish)",
    objectName: "Swimming Clownfish",
    assetFile: "clownfish.svg",
    defaultSegmentId: "ocean-01",
    segmentName: "Shallow Coral Reef",
  },
  {
    worldId: "growing-ocean",
    worldName: "Growing Ocean",
    categoryLabel: "🌊 Ocean: Sea Turtle (Marine Fauna)",
    objectName: "Sea Turtle",
    assetFile: "sea-turtle.svg",
    defaultSegmentId: "ocean-02",
    segmentName: "Sunlit Kelp Forest",
  },
  {
    worldId: "growing-ocean",
    worldName: "Growing Ocean",
    categoryLabel: "🌊 Ocean: Paper Coral (Reef Structure)",
    objectName: "Paper Coral",
    assetFile: "paper-coral.svg",
    defaultSegmentId: "ocean-01",
    segmentName: "Shallow Coral Reef",
  },
  {
    worldId: "growing-ocean",
    worldName: "Growing Ocean",
    categoryLabel: "🌊 Ocean: Kelp Stalk (Marine Flora)",
    objectName: "Kelp Stalk",
    assetFile: "kelp-stalk.svg",
    defaultSegmentId: "ocean-02",
    segmentName: "Sunlit Kelp Forest",
  },
  {
    worldId: "growing-ocean",
    worldName: "Growing Ocean",
    categoryLabel: "🌊 Ocean: Research Submarine (Marine Exploration)",
    objectName: "Research Submarine",
    assetFile: "research-submarine.svg",
    defaultSegmentId: "ocean-03",
    segmentName: "Twilight Reef Shelf",
  },

  // Growing City
  {
    worldId: "growing-city",
    worldName: "Growing City",
    categoryLabel: "🏙️ City: Park Bench (Street Furniture)",
    objectName: "Park Bench",
    assetFile: "park-bench.svg",
    defaultSegmentId: "city-01",
    segmentName: "Brownstone Street",
  },
  {
    worldId: "growing-city",
    worldName: "Growing City",
    categoryLabel: "🏙️ City: Street Lamp (Urban Lighting)",
    objectName: "Street Lamp",
    assetFile: "street-lamp.svg",
    defaultSegmentId: "city-01",
    segmentName: "Brownstone Street",
  },
  {
    worldId: "growing-city",
    worldName: "Growing City",
    categoryLabel: "🏙️ City: Paper Bicycle (Urban Transit)",
    objectName: "Paper Bicycle",
    assetFile: "paper-bicycle.svg",
    defaultSegmentId: "city-02",
    segmentName: "Town Square",
  },
  {
    worldId: "growing-city",
    worldName: "Growing City",
    categoryLabel: "🏙️ City: Paper Tram (Transit Rail)",
    objectName: "Paper Tram",
    assetFile: "paper-tram.svg",
    defaultSegmentId: "city-03",
    segmentName: "Transit District",
  },

  // Growing Village
  {
    worldId: "growing-village",
    worldName: "Growing Village",
    categoryLabel: "🏡 Village: Flower Pot (Rustic Garden)",
    objectName: "Flower Pot",
    assetFile: "flower-pot.svg",
    defaultSegmentId: "village-01",
    segmentName: "River Watermill",
  },
  {
    worldId: "growing-village",
    worldName: "Growing Village",
    categoryLabel: "🏡 Village: Wooden Cart (Market Prop)",
    objectName: "Wooden Cart",
    assetFile: "wooden-cart.svg",
    defaultSegmentId: "village-01",
    segmentName: "River Watermill",
  },
  {
    worldId: "growing-village",
    worldName: "Growing Village",
    categoryLabel: "🏡 Village: Stone Well (Village Landmark)",
    objectName: "Stone Well",
    assetFile: "stone-well.svg",
    defaultSegmentId: "village-02",
    segmentName: "Cobblestone Street",
  },
  {
    worldId: "growing-village",
    worldName: "Growing Village",
    categoryLabel: "🏡 Village: Market Basket (Artisan Goods)",
    objectName: "Market Basket",
    assetFile: "market-basket.svg",
    defaultSegmentId: "village-03",
    segmentName: "Market Square",
  },

  // Growing Island
  {
    worldId: "growing-island",
    worldName: "Growing Island",
    categoryLabel: "🏝️ Island: Coconut Palm (Coastal Flora)",
    objectName: "Coconut Palm",
    assetFile: "coconut-palm.svg",
    defaultSegmentId: "island-01",
    segmentName: "Arrival Beach",
  },
  {
    worldId: "growing-island",
    worldName: "Growing Island",
    categoryLabel: "🏝️ Island: Wooden Canoe (Shoreline Vessel)",
    objectName: "Wooden Canoe",
    assetFile: "wooden-canoe.svg",
    defaultSegmentId: "island-01",
    segmentName: "Arrival Beach",
  },
  {
    worldId: "growing-island",
    worldName: "Growing Island",
    categoryLabel: "🏝️ Island: Island Lighthouse (Coastal Landmark)",
    objectName: "Island Lighthouse",
    assetFile: "island-lighthouse.svg",
    defaultSegmentId: "island-03",
    segmentName: "Volcanic Ridge",
  },

  // Growing Farm
  {
    worldId: "growing-farm",
    worldName: "Growing Farm",
    categoryLabel: "🚜 Farm: Harvest Pumpkin (Crop Harvest)",
    objectName: "Harvest Pumpkin",
    assetFile: "harvest-pumpkin.svg",
    defaultSegmentId: "farm-01",
    segmentName: "Homestead Yard",
  },
  {
    worldId: "growing-farm",
    worldName: "Growing Farm",
    categoryLabel: "🚜 Farm: Wheat Bundle (Field Sheaf)",
    objectName: "Wheat Bundle",
    assetFile: "wheat-bundle.svg",
    defaultSegmentId: "farm-02",
    segmentName: "Wheat Fields",
  },
  {
    worldId: "growing-farm",
    worldName: "Growing Farm",
    categoryLabel: "🚜 Farm: Pasture Windmill (Farm Landmark)",
    objectName: "Pasture Windmill",
    assetFile: "pasture-windmill.svg",
    defaultSegmentId: "farm-03",
    segmentName: "Pasture Windmill",
  },

  // Growing Campus
  {
    worldId: "growing-campus",
    worldName: "Growing Campus",
    categoryLabel: "🏛️ Campus: Student Backpack (Campus Life)",
    objectName: "Student Backpack",
    assetFile: "student-backpack.svg",
    defaultSegmentId: "campus-01",
    segmentName: "University Gate",
  },
  {
    worldId: "growing-campus",
    worldName: "Growing Campus",
    categoryLabel: "🏛️ Campus: Stack of Books (Library Detail)",
    objectName: "Stack of Books",
    assetFile: "stack-of-books.svg",
    defaultSegmentId: "campus-02",
    segmentName: "Academic Quad",
  },
  {
    worldId: "growing-campus",
    worldName: "Growing Campus",
    categoryLabel: "🏛️ Campus: Campus Telescope (Observatory Instrument)",
    objectName: "Campus Telescope",
    assetFile: "campus-telescope.svg",
    defaultSegmentId: "campus-03",
    segmentName: "Library Plaza",
  },

  // Fantasy World
  {
    worldId: "fantasy-world",
    worldName: "Fantasy World",
    categoryLabel: "🔮 Fantasy: Floating Crystal (Arcane Landmark)",
    objectName: "Floating Crystal",
    assetFile: "floating-crystal.svg",
    defaultSegmentId: "fantasy-01",
    segmentName: "Enchanted Glade",
  },
  {
    worldId: "fantasy-world",
    worldName: "Fantasy World",
    categoryLabel: "🔮 Fantasy: Rune Stone (Ancient Magic)",
    objectName: "Rune Stone",
    assetFile: "rune-stone.svg",
    defaultSegmentId: "fantasy-02",
    segmentName: "Rune Arch",
  },
  {
    worldId: "fantasy-world",
    worldName: "Fantasy World",
    categoryLabel: "🔮 Fantasy: Dragon Egg (Mythical Artifact)",
    objectName: "Dragon Egg",
    assetFile: "dragon-egg.svg",
    defaultSegmentId: "fantasy-03",
    segmentName: "High Spire",
  },

  // Alien Planet
  {
    worldId: "alien-planet",
    worldName: "Alien Planet",
    categoryLabel: "🪐 Alien: Alien Mushroom (Bioluminescent Flora)",
    objectName: "Alien Mushroom",
    assetFile: "alien-mushroom.svg",
    defaultSegmentId: "alien-01",
    segmentName: "Touchdown Basin",
  },
  {
    worldId: "alien-planet",
    worldName: "Alien Planet",
    categoryLabel: "🪐 Alien: Neon Crystal (Xenolith Mineral)",
    objectName: "Neon Crystal",
    assetFile: "neon-crystal.svg",
    defaultSegmentId: "alien-02",
    segmentName: "Spore Forest",
  },
  {
    worldId: "alien-planet",
    worldName: "Alien Planet",
    categoryLabel: "🪐 Alien: Surface Rover (Exploration Vehicle)",
    objectName: "Surface Rover",
    assetFile: "surface-rover.svg",
    defaultSegmentId: "alien-03",
    segmentName: "Crystal Geysers",
  },
];

export const TOTAL_POOL_SIZE = 20;

/**
 * Calculates missing slot IDs from the 1..20 pool given existing open slots.
 */
export function calculateMissingSlotIds(existingSlots: string[]): string[] {
  const activeSlotNumbers = new Set(
    existingSlots
      .map((s) => {
        const m = s.match(/(\d+)/);
        return m ? parseInt(m[1], 10) : null;
      })
      .filter((n): n is number => n !== null && n >= 1 && n <= TOTAL_POOL_SIZE)
  );

  const missing: string[] = [];
  for (let i = 1; i <= TOTAL_POOL_SIZE; i++) {
    if (!activeSlotNumbers.has(i)) {
      missing.push(`CONTRIB-SLOT #${String(i).padStart(2, "0")}`);
    }
  }

  return missing;
}

/**
 * Selects a fresh concept from the curated catalog that is not currently actively assigned.
 */
export function selectFreshConcept(
  activeAssignments: { worldId: string; objectName: string }[],
  preferredWorldId?: string
): CuratedConcept {
  const activeKeys = new Set(
    activeAssignments.map((a) => `${a.worldId.toLowerCase()}:${a.objectName.toLowerCase()}`)
  );

  // 1. Try preferred world if specified
  if (preferredWorldId) {
    const worldCandidates = CURATED_CONCEPTS.filter(
      (c) =>
        c.worldId.toLowerCase() === preferredWorldId.toLowerCase() &&
        !activeKeys.has(`${c.worldId.toLowerCase()}:${c.objectName.toLowerCase()}`)
    );
    if (worldCandidates.length > 0) {
      return worldCandidates[0];
    }
  }

  // 2. Try any unassigned concept from the catalog
  const available = CURATED_CONCEPTS.filter(
    (c) => !activeKeys.has(`${c.worldId.toLowerCase()}:${c.objectName.toLowerCase()}`)
  );

  if (available.length > 0) {
    return available[0];
  }

  // 3. Fallback to round-robin if pool is completely saturated
  return CURATED_CONCEPTS[0];
}

export interface GeneratedSlotIssue {
  slotFormatted: string;
  worldId: string;
  worldName: string;
  segmentId: string;
  segmentName: string;
  objectName: string;
  categoryLabel: string;
  title: string;
  body: string;
  labels: string[];
}

/**
 * Generates the full title and Markdown body for a replacement contribution slot issue.
 */
export function generateContributionSlotIssue(
  slotFormatted: string,
  concept: CuratedConcept,
  overrideSegmentId?: string
): GeneratedSlotIssue {
  const segmentId = overrideSegmentId || concept.defaultSegmentId;
  const title = `[Good First Issue] 🌱 Add ${concept.objectName} to ${concept.worldName} — ${segmentId} (${slotFormatted})`;

  const body = `### 🌍 Target World

${concept.worldName} (${concept.worldId})

### 🏷️ Contribution Slot Identifier

${slotFormatted}

### 📍 Assigned World Segment ID

${segmentId} (${concept.segmentName})

### 🎨 Suggested Object Category & Concept

${concept.categoryLabel}

### ✏️ Custom Object Name (Optional)

_No response_

### 📊 Difficulty Level

Beginner (No prior open-source experience needed)

### ⏱️ Estimated Time

15–30 minutes

---

# 🌱 Good First Issue — Add ${concept.objectName} to ${concept.worldName}

> 👋 **Welcome!** This is a beginner-friendly contribution to Growing Worlds.
>
> You do not need previous open-source experience. We will guide you through every step from claiming this issue to opening your Pull Request!
>
> **Important**: You are **NOT** expected to create or upload a new SVG file. This repository already provides a rich collection of reusable paper-cutout assets! Your job is to select an existing asset, register **ONE** new object using that asset, and place the object in your assigned world segment.

- 🟢 **Difficulty**: Beginner
- ⏱️ **Estimated Time**: 15–30 minutes

---

## 🎯 Contribution Slot Summary

| Detail | Your Assignment |
| :--- | :--- |
| **Target World** | \`${concept.worldName}\` (\`${concept.worldId}\`) |
| **Contribution Slot** | \`${slotFormatted}\` |
| **Assigned Segment** | \`${segmentId}\` (${concept.segmentName}) |
| **Object Name** | \`${concept.objectName}\` |
| **Suggested Asset** | \`public/assets/worlds/${concept.worldId}/${concept.assetFile}\` |
| **Feature Branch** | \`contrib/${concept.worldId}-${concept.objectName.toLowerCase().replace(/[^a-z0-9]+/g, "-")}\` |
| **PR Target Branch** | \`dev\` |
| **Required Commits** | Minimum 2 (more allowed) |

---

## 📝 Quick Instructions

1. ⭐ **Star our repo** on GitHub!
2. 🍴 **Fork our repo** and clone it locally.
3. 🙋 **Claim this issue**: Comment \`Hi! I'd like to work on this issue. Thank you! 🙌\` below.
4. 🌿 **Create your branch**: \`git checkout -b contrib/${concept.worldId}-${concept.objectName.toLowerCase().replace(/[^a-z0-9]+/g, "-")}\` from \`dev\`.
5. 🎨 **Commit 1**: Open \`src/data/worlds/${concept.worldId}/objects.ts\`, reference an existing reusable asset from \`public/assets/worlds/${concept.worldId}/\`, and register your object.
6. 📍 **Commit 2**: Open \`src/data/worlds/${concept.worldId}/placements.ts\` and add placement with \`segmentId: "${segmentId}"\`.
7. 🧪 **Run checks**: \`npm test && npm run lint && npm run typecheck && npm run build && npx tsx scripts/audit-integrity.ts\`.
8. 🚀 **Submit PR**: Open a Pull Request targeting \`dev\` with \`Closes #<THIS_ISSUE_NUMBER>\` in the description.
9. 👀 **Wait for review & merge!**

---

## 🎨 Important Distinction: Object vs. Asset

- **Asset (SVG)**: A reusable visual picture file stored in \`public/assets/worlds/${concept.worldId}/\`. Think of it as the physical paper stamp.
- **Object**: A data record in \`objects.ts\` that defines *who* made the contribution and *which* visual asset it uses.
- **Placement**: A record in \`placements.ts\` that defines *where* (coordinates and segment) the object sits in the world.

> 💡 *You do NOT need to create a new SVG file. You reuse an existing asset from the repository.*

---

## 🎯 What You Are Building

Your contribution adds **ONE** new visual paper-cutout object to the selected Growing World!
- Once merged into \`dev\`, your paper craft becomes a permanent visual part of the shared interactive diorama.
- Your GitHub username and contributor display name will be displayed in an elegant paper pin badge right beneath your object.

---

## 📝 Your Task

1. **Inspect existing reusable assets** in \`public/assets/worlds/${concept.worldId}/\`.
2. **Register ONE new object** in \`src/data/worlds/${concept.worldId}/objects.ts\` referencing that asset.
3. **Place that object** in the assigned segment using \`src/data/worlds/${concept.worldId}/placements.ts\`.
4. **Follow the flexible two-stage commit workflow** (minimum 2 commits, more allowed).
5. **Open a Pull Request** targeting the \`dev\` branch.

> ⚠️ **Important Scope Boundary**: You are modifying data files for **ONE** world only (\`objects.ts\` and \`placements.ts\`). Do NOT modify existing SVG assets, unrelated worlds, governance files, CI workflows, or project configuration.

---

## ✅ Before You Start

- [ ] Read this entire issue once from top to bottom.
- [ ] Make sure the issue is formally assigned to you before writing code.
- [ ] Verify your assigned World and Segment ID.
- [ ] Check the existing assets under \`public/assets/worlds/${concept.worldId}/\`.
- [ ] Remember: PRs require a **minimum of 2 commits** (more commits are completely fine!).
- [ ] Remember: PRs always target the **\`dev\`** branch (never \`main\`).

---

## 🙋 Step 1 — Claim the Issue

To claim this slot, comment below:
\`\`\`text
Hi! I'd like to work on this issue. Thank you! 🙌
\`\`\`
A maintainer will formally assign you to the issue. Once assigned, GitHub Actions will automatically post a personalized onboarding comment with your exact branch name and assignment details. You have a **48-hour reservation window** to submit your PR.

---

## 🍴 Step 2 — Fork and Clone

1. Click **Fork** in the top right corner of this repository on GitHub.
2. Clone your newly created fork to your computer:
   \`\`\`bash
   git clone https://github.com/<your-github-username>/MakeYourWorld-OpenCircle.git
   cd MakeYourWorld-OpenCircle
   \`\`\`
3. Connect to the upstream repository:
   \`\`\`bash
   git remote add upstream https://github.com/ShenSandaru/MakeYourWorld-OpenCircle.git
   \`\`\`

---

## 🌿 Step 3 — Create Your Student Feature Branch

Always start fresh from the latest upstream **\`dev\`** branch:
\`\`\`bash
git checkout dev
git fetch upstream
git pull upstream dev
\`\`\`

Create and switch to your feature branch using the required \`contrib/\` prefix:
\`\`\`bash
git checkout -b contrib/${concept.worldId}-${concept.objectName.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
\`\`\`

---

## 📦 Step 4 — Install Dependencies

\`\`\`bash
npm install
\`\`\`

---

## 📁 Files You Will Change

Your contribution will normally modify **only these two files**:
\`\`\`text
Commit 1 (Object Registration):
└── src/data/worlds/${concept.worldId}/objects.ts              (Object metadata & contributor attribution)

Commit 2 (World Placement):
└── src/data/worlds/${concept.worldId}/placements.ts           (Coordinates & segment placement)
\`\`\`
*(Existing SVG assets in \`public/assets/worlds/${concept.worldId}/\` are read-only and should NOT be modified).*

---

# 🔐 Two-Stage Contribution Governance

- **Minimum 2 commits required** (Commit 1: Object registration in \`objects.ts\`, Commit 2: Placement in \`placements.ts\`).
- **Flexible commit count**: If you make 3, 4, or 5 commits (for fixes or adjustments), that is **100% fine and allowed**! You do not need to squash them.
- **Strict file scope**: Only modify \`objects.ts\` and \`placements.ts\` for your assigned world.

---

## 🎨 Step 5 — Commit 1: Register Object with Existing Asset

1. **Select an Existing Asset**:
   - Open \`public/assets/worlds/${concept.worldId}/\` in your file explorer or GitHub.
   - Choose an existing paper cutout SVG (e.g. \`/assets/worlds/${concept.worldId}/${concept.assetFile}\`).

2. **Register in \`objects.ts\`**:
   - Open \`src/data/worlds/${concept.worldId}/objects.ts\` and append your object definition:
     \`\`\`typescript
     {
       id: "${concept.objectName.toLowerCase().replace(/[^a-z0-9]+/g, "-")}",
       asset: "/assets/worlds/${concept.worldId}/${concept.assetFile}",
       contributor: {
         displayName: "<Your Display Name>",
         githubUsername: "<your-github-username>",
       },
     },
     \`\`\`

3. **Check Changes & Create Commit 1**:
   \`\`\`bash
   git status
   git diff
   git add src/data/worlds/${concept.worldId}/objects.ts
   git commit -m "feat: register ${concept.objectName.toLowerCase()} object"
   \`\`\`

---

## 📍 Step 6 — Commit 2: Place Your Object in the Segment

1. Open \`src/data/worlds/${concept.worldId}/placements.ts\`.
2. Append your placement entry referencing your registered \`id\` and assigned \`segmentId\`:
   \`\`\`typescript
   {
     objectId: "${concept.objectName.toLowerCase().replace(/[^a-z0-9]+/g, "-")}",
     segmentId: "${segmentId}",
     x: 45.0,
     y: 55.0,
     scale: 1.0,
     rotation: 0,
   },
   \`\`\`
   *(Coordinates \`x\` and \`y\` are normalized percentages \`0.0\` to \`100.0\`)*

3. **Check Changes & Create Commit 2**:
   \`\`\`bash
   git status
   git diff
   git add src/data/worlds/${concept.worldId}/placements.ts
   git commit -m "feat: place ${concept.objectName.toLowerCase()} in ${segmentId}"
   \`\`\`

---

## 🔍 Step 7 — Verify Your Commits & Modified Files

Check your Git commit history:
\`\`\`bash
git log --oneline -5
\`\`\`
Check your modified files (should only be \`objects.ts\` and \`placements.ts\`):
\`\`\`bash
git diff --name-only origin/dev
\`\`\`

---

## 🧪 Step 8 — Run Local Quality Gates

Run all validation checks locally to ensure zero errors:
\`\`\`bash
npm test
npm run lint
npm run typecheck
npm run build
npx tsx scripts/audit-integrity.ts
\`\`\`

---

## 🖥️ Step 9 — Visual Verification in Your Browser

Start the local Next.js development server:
\`\`\`bash
npm run dev
\`\`\`
Open \`http://localhost:3000/worlds/${concept.worldId}\` in your browser:
- Verify that your object renders in its assigned segment.
- Verify that your contributor badge displays your display name.
- Verify that existing objects remain intact.

---

## 🚀 Step 10 — Push and Open Pull Request

1. Push your branch to your fork:
   \`\`\`bash
   git push -u origin contrib/${concept.worldId}-${concept.objectName.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
   \`\`\`
2. Open a Pull Request on GitHub:
   - **Base branch**: \`dev\` *(⚠️ Do NOT target \`main\`)*
   - **Compare branch**: \`contrib/${concept.worldId}-${concept.objectName.toLowerCase().replace(/[^a-z0-9]+/g, "-")}\`
3. In the PR description, connect this issue so it automatically closes upon merge:
   \`\`\`markdown
   ## 🔗 Linked Issue
   Closes #<THIS_ISSUE_NUMBER>
   \`\`\`

---

## 🎉 Step 11 — What Happens After Submitting

1. **Automated CI Validation**: GitHub Actions will automatically test your commits, verify strict file boundaries, run ESLint/typecheck/build, and confirm relational schema integrity.
2. **Maintainer Review**: A maintainer will review your placement and approve the PR.
3. **Merge & Automatic Closure**: Once merged into \`dev\`, GitHub automatically closes this issue slot and awards your permanent spot in the diorama!
4. **Need Help?**: If you get stuck or have questions at any step, feel free to comment right here on this issue!`;

  return {
    slotFormatted,
    worldId: concept.worldId,
    worldName: concept.worldName,
    segmentId,
    segmentName: concept.segmentName,
    objectName: concept.objectName,
    categoryLabel: concept.categoryLabel,
    title,
    body,
    labels: ["good first issue"],
  };
}
