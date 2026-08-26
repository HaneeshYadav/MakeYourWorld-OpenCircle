## 🌿 Pull Request Description

<!-- Provide a summary of your contribution -->

- **Target World**: `[e.g., Growing Forest / Growing Universe / Growing Ocean / Growing City / Growing Village / Growing Island / Growing Farm]`
- **Target Segment**: `[e.g., forest-01 / universe-02 / ocean-01 / city-02 / village-01 / island-01 / farm-02]`
- **Object Name**: `[e.g., Pine Tree / Butterfly / Coconut Palm / Scarecrow]`
- **Contribution Slot Reference**: Closes #<!-- Issue Number Here -->

---

## 👤 Contributor Identity

- **Contributor Display Name**: <!-- e.g., Alice Dev (rendered under your placed object in the world) -->
- **GitHub Username**: <!-- @your-github-username (optional GitHub profile link) -->
- **Discord Username**: <!-- your-discord-handle (used for community recognition & role updates; NOT stored in public world data) -->

---

## ✅ Two-Commit Contribution Checklist

Please verify that you have completed the standard two-commit workflow:

- [ ] **Commit 1**: Added paper SVG asset (`public/assets/worlds/<world>/...`) and registered object definition in `src/data/worlds/<world>/objects.ts` (~1–5 LOC).
- [ ] **Commit 2**: Added placement with assigned `segmentId` and coordinates `x, y` (0–100%) in `src/data/worlds/<world>/placements.ts` (~1–5 LOC).
- [ ] Kept the two commits separate (did **not** squash into one commit).
- [ ] Ran `npm test` locally and all unit tests passed.
- [ ] Ran `npm run lint` and resolved all linter warnings.
- [ ] Visually verified the object and contributor label in the local browser at `http://localhost:3000/dev/world-engine`.
- [ ] Base branch is targeted to **`dev`** (not `main`).
- [ ] Only modified contributor-owned files (did **not** edit `src/engine/*`, `src/schemas/*`, `src/components/*`, `tests/*`, etc.).

---

## 📸 Visual Verification Screenshot

<!-- Attach a screenshot of your added object rendered in the world from http://localhost:3000/dev/world-engine -->

---

## 🛡️ Maintainer Merging Checklist (For Maintainers)

- [ ] Assigned student submitted this PR.
- [ ] PR targets `dev`.
- [ ] Asset license/originality acceptable.
- [ ] Two distinct commits verified.
- [ ] CI validation passes cleanly.
- [ ] Visual placement is harmonious.
- [ ] Merge PR into `dev`.
- [ ] Remove assignee and **reopen the linked issue slot**.
