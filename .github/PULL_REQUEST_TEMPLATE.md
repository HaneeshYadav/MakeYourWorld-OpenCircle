## 🔗 Linked Issue

- **Issue**: #<!-- REPLACE WITH ASSIGNED ISSUE NUMBER, e.g. #12 -->
- **Closes**: #<!-- REPLACE WITH ASSIGNED ISSUE NUMBER, e.g. #12 -->

> ⚠️ **Important**: GitHub cannot automatically detect which issue slot you were assigned to. **You must replace `#<ISSUE_NUMBER>` above with your actual assigned issue number** (e.g. `Closes #12`). This will automatically link and close your assigned slot once merged!

---

## 🌿 Contribution Summary

- **Contribution Slot**: `[e.g., CONTRIB-SLOT #01]`
- **Target World**: `[e.g., Growing Forest]` (`growing-forest`)
- **Target Segment**: `[e.g., forest-01]` (Ancient Canopy)
- **Object Name**: `[e.g., Pine Tree]`

---

## 👤 Contributor Attribution

- **Display Name**: <!-- e.g. Alice Dev (rendered under your placed object in the world) -->
- **GitHub Username**: <!-- e.g. alice-dev -->

---

## 📁 Two-Commit Structure Checklist

Your PR must strictly contain the following structure across **two separate commits**:

### Commit 1: Asset & Object Registration
- `public/assets/worlds/<world>/<object-name>.svg` (or `.png`)
- `src/data/worlds/<world>/objects.ts`

### Commit 2: World Placement Only
- `src/data/worlds/<world>/placements.ts`

---

## 🛑 Files You Must NOT Modify
Student contributors must **NOT** modify maintainer or infrastructure files:
`src/engine/*`, `src/schemas/*`, `src/components/*`, `src/app/*`, `tests/*`, `.github/*`, `package.json`, `package-lock.json`, `docs/*`, or `scripts/*`.

---

## ✅ Student Contribution Checklist

- [ ] I started from the latest `dev`.
- [ ] My branch starts with `contrib/` (e.g., `contrib/growing-forest-butterfly`).
- [ ] Commit 1 contains the asset + `objects.ts` registration.
- [ ] Commit 2 contains `placements.ts` only.
- [ ] I did not squash the two commits (exactly 2 separate commits).
- [ ] I used the assigned world and segment.
- [ ] My `objectId` matches `objects.ts`.
- [ ] My asset path is correct and file exists on disk.
- [ ] I checked the visual placement locally at `http://localhost:3000/worlds/<world-id>`.
- [ ] I did not modify unrelated or maintainer files.
- [ ] `npm run lint` passes.
- [ ] `npm run typecheck` passes.
- [ ] `npm test` passes.
- [ ] `npm run build` passes.
- [ ] My PR targets `dev` base branch.
- [ ] My PR contains `Closes #<ISSUE_NUMBER>`.

---

## 📸 Visual Verification Screenshot (Optional)

<!-- Attach a screenshot of your added object rendered in the world from http://localhost:3000/worlds/<world-id> -->
