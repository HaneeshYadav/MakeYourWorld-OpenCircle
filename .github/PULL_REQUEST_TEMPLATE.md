## 🌿 Pull Request Description

<!-- Provide a brief description of what this PR introduces -->

- **World**: `[e.g., Growing Forest / Growing Universe / etc.]`
- **Target Segment**: `[e.g., forest-01 / forest-02 / etc.]`
- **Object Name**: `[e.g., Pine Tree / Butterfly / Glowing Mushroom]`
- **Contribution Slot Reference**: Closes #<!-- Issue Number Here -->

---

## 👤 Contributor Identity

- **Contributor Display Name**: <!-- e.g., Alice Dev (rendered under your object) -->
- **GitHub Username**: <!-- @your-github-username -->
- **Discord Username**: <!-- your-discord-handle (for notification tracking only) -->

---

## ✅ Contribution Checklist

Please verify that you have completed the standard two-commit workflow:

- [ ] **Commit 1**: Added image asset (`public/assets/worlds/<world>/...`) and registered in `src/data/worlds/<world>/objects.ts`.
- [ ] **Commit 2**: Added placement with assigned `segmentId` and coordinates `x, y` (0–100%) in `src/data/worlds/<world>/placements.ts`.
- [ ] Kept the two commits separate (did **not** squash into one commit).
- [ ] Ran `npm test` locally and all unit tests passed.
- [ ] Ran `npm run lint` and resolved all linter warnings.
- [ ] Visually verified the object and contributor label in the local browser at `http://localhost:3000/dev/world-engine`.
- [ ] Base branch is targeted to `dev` (not `main`).
- [ ] Only modified contributor-owned files (did **not** edit `src/engine/*`, `src/schemas/*`, etc.).

---

## 📸 Visual Verification Screenshot

<!-- Attach a screenshot of your added object rendered in the world from http://localhost:3000/dev/world-engine -->
