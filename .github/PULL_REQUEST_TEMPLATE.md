## 🔗 Linked Issue

- **Issue**: #<!-- REPLACE WITH ASSIGNED ISSUE NUMBER, e.g. #12 -->
- **Closes**: #<!-- REPLACE WITH ASSIGNED ISSUE NUMBER, e.g. #12 -->

> ⚠️ **Important**: GitHub cannot automatically detect which issue slot you were assigned to. **You must replace `#<ISSUE_NUMBER>` above with your actual assigned issue number** (e.g. `Closes #12`).

---

## 📌 Before Submitting (Student Checklist)

Before submitting your PR, ensure you have:
1. **Found your assigned Issue**: Located the active `good first issue` slot you claimed and were assigned.
2. **Replaced the placeholder**: Replaced the `#<ISSUE_NUMBER>` in the section above with your issue number.
3. **Targeted `dev`**: Set your base branch to **`dev`** (do **NOT** target `main`).
4. **Kept 2 commits**: Made exactly 2 separate commits (do **NOT** squash).
5. **Respected file boundaries**: Modified only contributor-owned files (`public/assets/worlds/<world>/...`, `objects.ts`, `placements.ts`).

---

## 🏷️ Issue Discovery Note

- **`good first issue`**: Used on **Issues** to identify available contribution slots for beginner discovery.

---

## 🌿 Contribution Summary

- **Contribution Slot**: `[e.g., CONTRIB-SLOT #01]`
- **Target World**: `[e.g., Growing Forest / Growing Universe / Growing Ocean / Growing City / Growing Village / Growing Island / Growing Farm / Growing Campus / Fantasy World / Alien Planet]`
- **Target Segment**: `[e.g., forest-01 / universe-02 / ocean-01 / campus-02 / fantasy-01 / alien-03]`
- **Object Name**: `[e.g., Pine Tree / Butterfly / Coconut Palm / Scarecrow / Student Backpack / Floating Crystal]`

---

## 👤 Contributor Identity

- **Contributor Display Name**: <!-- e.g., Alice Dev (rendered under your placed object in the world) -->
- **GitHub Username**: <!-- @your-github-username (optional GitHub profile link) -->
- **Discord Username**: <!-- your-discord-handle (used for community recognition & role updates; NOT stored in public world data) -->

---

## 📁 Expected Files & Two-Commit Structure

Your PR must strictly contain the following structure across **two separate commits**:

### Commit 1: Asset & Object Registration (~1–5 LOC)
- `public/assets/worlds/<world>/<asset-name>.svg` (or `.png`)
- `src/data/worlds/<world>/objects.ts`

### Commit 2: World Placement (~1–5 LOC)
- `src/data/worlds/<world>/placements.ts`

---

## 🛑 Do Not Modify (Maintainer / Infrastructure Files)

Student contributors must **NOT** modify any files outside the contributor paths, including:
- `src/engine/*`
- `src/schemas/*`
- `src/components/*`
- `src/app/*`
- `tests/*`
- `.github/*`
- `package.json` & `package-lock.json`
- `docs/*`
- `scripts/*`

*(Modifying any of these files will cause automated CI boundary checks to reject the PR).*

---

## ✅ Two-Commit Contribution Verification

Please check all items:

- [ ] **Commit 1**: Added paper SVG asset and registered definition in `src/data/worlds/<world>/objects.ts`.
- [ ] **Commit 2**: Added placement with assigned `segmentId` and coordinates `x, y` (0–100%) in `src/data/worlds/<world>/placements.ts`.
- [ ] Kept the two commits separate (did **not** squash into one commit).
- [ ] Ran `npm test` locally and all unit tests passed.
- [ ] Ran `npm run lint` and resolved all linter warnings.
- [ ] Ran `npm run typecheck` and verified zero TypeScript errors.
- [ ] Ran `npm run build` and verified static page generation.
- [ ] Visually verified the object and contributor label locally at `http://localhost:3000/worlds/<world-id>`.
- [ ] Base branch is targeted to **`dev`** (not `main`).

---

## 📸 Visual Verification Screenshot

<!-- Attach a screenshot of your added object rendered in the world from http://localhost:3000/worlds/<world-id> -->

---

## 🛡️ Maintainer Checklist (For Maintainers)

- [ ] Linked issue slot verified and assigned to contributor.
- [ ] PR targets `dev`.
- [ ] Asset license/originality acceptable (CC0/MIT/original).
- [ ] CI validation (`Contributor Quality Gates & Build`) passes cleanly.
- [ ] Visual placement is harmonious.
- [ ] Merge PR into `dev`.
- [ ] Remove assignee and **reopen the linked issue slot**.
