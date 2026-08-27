## 🔗 Linked Issue

- **Issue**: #<!-- REPLACE WITH ASSIGNED ISSUE NUMBER, e.g. #12 -->
- **Closes**: #<!-- REPLACE WITH ASSIGNED ISSUE NUMBER, e.g. #12 -->

> ⚠️ **Important**: GitHub cannot automatically detect which issue slot you were assigned to. **You must replace `#<ISSUE_NUMBER>` above with your actual assigned issue number** (e.g. `Closes #12`). This will automatically link and close your assigned slot once merged!

---

## 🌿 Contribution Summary

- **Contribution Slot**: `[e.g., CONTRIB-SLOT #01]`
- **Target World**: `[e.g., Growing Forest]` (`growing-forest`)
- **Target Segment**: `[e.g., forest-01]` (Ancient Canopy)
- **Object Name**: `[e.g., Butterfly]`
- **Reused Asset**: `[e.g., /assets/worlds/growing-forest/student-butterfly.svg]`

---

## 👤 Contributor Attribution

- **Display Name**: <!-- e.g. Alice Dev (rendered under your placed object in the world) -->
- **GitHub Username**: <!-- e.g. alice-dev -->

---

## 📁 Two-Stage Contribution Structure

Your PR should contain changes split across a **minimum of 2 commits** (more commits for adjustments are welcome):

### Commit 1: Register Object with Existing Asset
- `src/data/worlds/<world>/objects.ts` (references existing SVG from `public/assets/worlds/<world>/`)

### Commit 2: World Placement
- `src/data/worlds/<world>/placements.ts` (places object in assigned segment)

---

## 🛑 Files You Must NOT Modify
Student contributors must **NOT** modify maintainer or infrastructure files:
`public/assets/worlds/*` (assets are read-only and reused), `src/engine/*`, `src/schemas/*`, `src/components/*`, `src/app/*`, `tests/*`, `.github/*`, `package.json`, `package-lock.json`, `docs/*`, or `scripts/*`.

---

## ✅ Student Contribution Checklist

- [ ] I started from the latest `dev`.
- [ ] My branch starts with `contrib/` (e.g., `contrib/growing-forest-butterfly`).
- [ ] Commit 1 registers the object in `objects.ts` referencing an existing repository SVG.
- [ ] Commit 2 adds the placement in `placements.ts` only.
- [ ] I have at least 2 commits on my branch (more commits are allowed if needed).
- [ ] I reused an existing SVG asset (I did NOT create or upload a new SVG file).
- [ ] I used the assigned world and segment.
- [ ] My `objectId` matches `objects.ts`.
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
