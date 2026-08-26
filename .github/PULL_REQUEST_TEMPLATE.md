## 🌿 Pull Request Type

Please specify the type of PR you are opening:

- [ ] **Student World Contribution** (Requires the `student-contribution` label applied by maintainers for strict 2-commit validation)
- [ ] **Maintainer / Infrastructure / Documentation PR** (Follows standard quality gates: Lint, Typecheck, Test, Build)

---

## 🌿 Student Contribution Summary (If applicable)

- **Target World**: `[e.g., Growing Forest / Growing Universe / Growing Ocean / Growing City / Growing Village / Growing Island / Growing Farm / Growing Campus / Fantasy World / Alien Planet]`
- **Target Segment**: `[e.g., forest-01 / universe-02 / ocean-01 / campus-02 / fantasy-01 / alien-03]`
- **Object Name**: `[e.g., Pine Tree / Butterfly / Coconut Palm / Scarecrow / Student Backpack / Floating Crystal]`
- **Linked Good First Issue Slot**: Closes #<!-- Issue Number Here -->

---

## 👤 Contributor Identity

- **Contributor Display Name**: <!-- e.g., Alice Dev (rendered under your placed object in the world) -->
- **GitHub Username**: <!-- @your-github-username (optional GitHub profile link) -->
- **Discord Username**: <!-- your-discord-handle (used for community recognition & role updates; NOT stored in public world data) -->

---

## ✅ Student Two-Commit Checklist

Please verify that you have completed the standard two-commit workflow:

- [ ] **Commit 1**: Added paper SVG asset (`public/assets/worlds/<world>/...`) and registered object definition in `src/data/worlds/<world>/objects.ts` (~1–5 LOC).
- [ ] **Commit 2**: Added placement with assigned `segmentId` and coordinates `x, y` (0–100%) in `src/data/worlds/<world>/placements.ts` (~1–5 LOC).
- [ ] Kept the two commits separate (did **not** squash into one commit).
- [ ] Ran `npm test` locally and all unit tests passed.
- [ ] Ran `npm run lint` and resolved all linter warnings.
- [ ] Visually verified the object and contributor label in the local browser at `http://localhost:3000/worlds/<world-id>`.
- [ ] Base branch is targeted to **`dev`** (not `main`).
- [ ] Only modified contributor-owned files (did **not** edit `src/engine/*`, `src/schemas/*`, `src/components/*`, `src/app/*`, `tests/*`, etc.).

---

## 📸 Visual Verification Screenshot (For Student PRs)

<!-- Attach a screenshot of your added object rendered in the world from http://localhost:3000/worlds/<world-id> -->

---

## 🛡️ Maintainer Checklist (For Maintainers)

- [ ] Applied `student-contribution` label if this is a student PR (triggers strict 2-commit validator).
- [ ] Assigned student submitted this PR.
- [ ] PR targets `dev`.
- [ ] Asset license/originality acceptable.
- [ ] CI validation (`Contributor Quality Gates & Build`) passes cleanly.
- [ ] Visual placement is harmonious.
- [ ] Merge PR into `dev`.
- [ ] Remove assignee and **reopen the linked issue slot**.
