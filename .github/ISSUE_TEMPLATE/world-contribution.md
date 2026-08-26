---
name: "🌿 World Contribution (Good First Issue)"
about: "Contribute a paper-collage object and place it into one of the Growing Worlds"
title: "[CONTRIB] Add <Object Name> to <World Name>"
labels: ["good first issue", "world-contribution"]
assignees: ""
---

### Target World

- [ ] Growing Forest
- [ ] Growing Universe
- [ ] Growing Ocean
- [ ] Growing City
- [ ] Growing Island
- [ ] Growing Farm
- [ ] Growing Campus
- [ ] Fantasy World
- [ ] Growing Village
- [ ] Alien Planet

### Object Idea & Category

- **Object Name**: <!-- e.g., Pine Tree, Spire Skyscraper, Bioluminescent Coral -->
- **Category**: `[flora | fauna | structure | vehicle | celestial | item | terrain | character]`
- **Brief Description**: <!-- 1-2 sentence description of the item -->

### Suggested Coordinates (Approximate)

- **X (0-100%)**:
- **Y (0-100%)**:
- **Layer**: `[background | midground | foreground]`

### Contributor Tasks

1. [ ] Claim this issue by commenting below.
2. [ ] Fork the repo & create a branch from `dev`.
3. [ ] **Commit 1**: Add SVG/PNG asset to `public/assets/worlds/<world>/` and register in `src/data/worlds/<world>/objects.ts`.
4. [ ] **Commit 2**: Place item in `src/data/worlds/<world>/placements.ts` with your GitHub username attribution.
5. [ ] Verify with `npm test` and submit a Pull Request against `dev`.
