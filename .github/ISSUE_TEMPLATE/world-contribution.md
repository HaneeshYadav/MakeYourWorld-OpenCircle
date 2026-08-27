---
name: "🌿 Reusable World Contribution Slot (Good First Issue)"
about: "Reusable contribution slot for adding a paper-collage object into a Growing World segment"
title: "[Good First Issue] 🌱 Add a <Object Name> to <World Name> — <Segment Name> (CONTRIB-SLOT #<01-20>)"
labels: ["good first issue"]
assignees: ""
---

# 🌱 Good First Issue — Add <Object Name> to <World Name>

> 👋 **Welcome!** This is a beginner-friendly contribution to Growing Worlds.
>
> You do not need previous open-source experience. We will guide you through every step from claiming this issue to opening your Pull Request!
>
> Your job is to add **ONE** paper-cutout object to the assigned world.

- 🟢 **Difficulty**: Beginner
- ⏱️ **Estimated Time**: 15–30 minutes

---

## 🎯 Contribution Slot Summary

| Detail | Your Assignment |
| :--- | :--- |
| **Target World** | `[e.g., Growing Forest]` (`growing-forest`) |
| **Contribution Slot** | `[e.g., CONTRIB-SLOT #02]` |
| **Assigned Segment** | `[e.g., forest-01]` (Ancient Canopy) |
| **Object Name** | `[e.g., Butterfly]` |
| **Feature Branch** | `contrib/<world-id>-<object-slug>` |
| **PR Target Branch** | `dev` |
| **Required Commits** | Exactly 2 |

---

## 📝 Quick Instructions

1. ⭐ **Star our repo** on GitHub!
2. 🍴 **Fork our repo** to your GitHub account.
3. 🙋 **Claim this issue**: Comment `Hi! I'd like to work on this issue. Thank you! 🙌` below.
4. 🌿 **Create your branch**: `git checkout -b contrib/<world-id>-<object-name>` from `dev`.
5. 🎨 **Commit 1**: Add SVG asset to `public/assets/worlds/<world-id>/<object-name>.svg` and register in `src/data/worlds/<world-id>/objects.ts`.
6. 📍 **Commit 2**: Add placement in `src/data/worlds/<world-id>/placements.ts` for your assigned segment.
7. 🧪 **Run checks**: `npm test && npm run lint && npm run typecheck && npm run build`.
8. 🚀 **Submit PR**: Open a Pull Request targeting `dev` with `Closes #<THIS_ISSUE_NUMBER>` in the description.
9. 👀 **Wait for review & merge!**

---

## 🎯 What You Are Building

Your contribution adds **ONE** new visual paper-cutout object to the selected Growing World!
- Once merged into `dev`, your paper craft becomes a permanent visual part of the shared interactive diorama.
- Your GitHub username and contributor display name will be displayed in an elegant paper pin badge right beneath your object.

---

## 📝 Your Task

1. **Create or add ONE themed SVG paper-cutout object**.
2. **Register that object** in the world's `objects.ts`.
3. **Place that object** in the assigned segment using `placements.ts`.
4. **Keep your work separated into the required two commits**.
5. **Open a Pull Request** targeting the `dev` branch.

> ⚠️ **Important Scope Boundary**: You are adding **ONE** object only. Do not modify unrelated worlds, governance files, CI workflows, or project configuration.

---

## ✅ Before You Start

- [ ] Read this entire issue once from top to bottom.
- [ ] Make sure the issue is formally assigned to you before writing code.
- [ ] Verify your assigned World and Segment ID.
- [ ] Check the suggested object concept (or custom name).
- [ ] Understand that student contributions require exactly **two separate commits**.
- [ ] Remember: PRs always target the **`dev`** branch (never `main`).

> 💡 *If you have not contributed to GitHub before, that's completely okay! Follow the steps below one by one.*

---

## 🙋 Step 1 — Claim the Issue

To claim this slot, comment below:
```text
Hi! I'd like to work on this issue. Thank you! 🙌
```
A maintainer will formally assign you to the issue. Once assigned, GitHub Actions will automatically post a personalized onboarding comment with your exact branch name and assignment details. You have a **48-hour reservation window** to submit your PR.

---

## 🍴 Step 2 — Fork and Clone

1. Click **Fork** in the top right corner of this repository on GitHub.
2. Clone your newly created fork to your computer:
   ```bash
   git clone https://github.com/<your-github-username>/MakeYourWorld-OpenCircle.git
   cd MakeYourWorld-OpenCircle
   ```
3. Connect to the upstream repository:
   ```bash
   git remote add upstream https://github.com/ShenSandaru/MakeYourWorld-OpenCircle.git
   ```

---

## 🌿 Step 3 — Create Your Student Feature Branch

Always start fresh from the latest upstream **`dev`** branch:
```bash
git checkout dev
git fetch upstream
git pull upstream dev
```

Create and switch to your feature branch using the required `contrib/` prefix:
```bash
git checkout -b contrib/<world-id>-<object-slug>
```
*Example for Growing Forest Butterfly:*
```bash
git checkout -b contrib/growing-forest-butterfly
```

> ℹ️ *The `contrib/*` branch prefix tells automated CI checks that this is a student contribution.*

---

## 📦 Step 4 — Install Dependencies

```bash
npm install
```

---

## 📁 Files You Will Change

```text
Commit 1 (Asset & Object Registration):
├── public/assets/worlds/<world-id>/<object-name>.svg  (Your paper cutout artwork)
└── src/data/worlds/<world-id>/objects.ts              (Object metadata & contributor attribution)

Commit 2 (World Placement):
└── src/data/worlds/<world-id>/placements.ts           (Coordinates & segment placement)
```

---

# 🔐 IMPORTANT — EXACTLY 2 COMMITS REQUIRED

The automated PR validator requires **exactly two separate commits**:
- **Commit 1**: MUST contain your SVG asset and registration in `objects.ts`. MUST NOT contain `placements.ts`.
- **Commit 2**: MUST contain ONLY your placement in `placements.ts`.
- ⚠️ **Do NOT squash** your commits! Keep them separate so automated CI checks can verify both steps.

---

## 🎨 Step 5 — Commit 1: Create Asset & Register Object

1. **Create the SVG Artwork**:
   - Create a clean 2D paper cutout style SVG (or transparent PNG) with a transparent background (<50 KB).
   - Save the file to: `public/assets/worlds/<world-id>/<object-name>.svg`.

2. **Register in `objects.ts`**:
   - Open `src/data/worlds/<world-id>/objects.ts` and append your object:
     ```typescript
     {
       id: "<object-name>",
       asset: "/assets/worlds/<world-id>/<object-name>.svg",
       contributor: {
         displayName: "<Your Display Name>",
         githubUsername: "<your-github-username>",
       },
     },
     ```

3. **Check Changes & Create Commit 1**:
   ```bash
   git status
   git diff
   git add public/assets/worlds/<world-id>/<object-name>.svg
   git add src/data/worlds/<world-id>/objects.ts
   git commit -m "feat: add <object-name> asset and object"
   ```

---

## 📍 Step 6 — Commit 2: Place Your Object in the Segment

1. Open `src/data/worlds/<world-id>/placements.ts`.
2. Append your placement entry referencing your registered `id` and assigned `segmentId`:
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
   *(Coordinates `x` and `y` are normalized percentages `0.0` to `100.0`)*

3. **Check Changes & Create Commit 2**:
   ```bash
   git status
   git diff
   git add src/data/worlds/<world-id>/placements.ts
   git commit -m "feat: place <object-name> in <assigned-segment-id>"
   ```

---

## 🔍 Step 7 — Verify Your Two Commits

Check your Git commit history:
```bash
git log --oneline -2
```
Expected output:
```text
<hash-2> feat: place <object-name> in <assigned-segment-id>
<hash-1> feat: add <object-name> asset and object
```

---

## 🧪 Step 8 — Run Local Quality Gates

Run all validation checks locally to ensure zero errors:
```bash
npm test
npm run lint
npm run typecheck
npm run build
```

---

## 🖥️ Step 9 — Visual Verification in Your Browser

Start the local Next.js development server:
```bash
npm run dev
```
Open `http://localhost:3000/worlds/<world-id>` in your browser:
- Verify that your object renders in its assigned segment.
- Verify that your contributor badge displays your display name.
- Verify that existing objects remain intact.

---

## 🚀 Step 10 — Push and Open Pull Request

1. Push your branch to your fork:
   ```bash
   git push -u origin contrib/<world-id>-<object-name>
   ```
2. Open a Pull Request on GitHub:
   - **Base branch**: `dev` *(⚠️ Do NOT target `main`)*
   - **Compare branch**: `contrib/<world-id>-<object-name>`
3. In the PR description, connect this issue so it automatically closes upon merge:
   ```markdown
   ## 🔗 Linked Issue
   Closes #<THIS_ISSUE_NUMBER>
   ```
   *(Example:* `Closes #21`*)*

---

## 🎉 Step 11 — What Happens After Submitting

1. **Automated CI Validation**: GitHub Actions will automatically test your two commits, verify file boundaries, run ESLint/typecheck/build, and confirm schema integrity.
2. **Maintainer Review**: A maintainer will review your placement and approve the PR.
3. **Merge & Automatic Closure**: Once merged into `dev`, GitHub automatically closes this issue slot and awards your permanent spot in the diorama!
4. **Need Help?**: If you get stuck or have questions at any step, feel free to comment right here on this issue!
