---
name: github-contribution-workflow
description: >-
  Rules for issue creation, PR templates, and Git branching for Growing Worlds.
  Use when generating Good First Issues, reviewing contributor PRs, or configuring GitHub Actions.
---

# GitHub Contribution Workflow Skill — Growing Worlds

## 1. Issue & Branch Lifecycle
- **Issue Labels**: `good first issue`, `world-contribution`.
- **Base Branch**: Always branch from and target `dev` (not `main`).
- **PR Structure**:
  - Two distinct commits (Commit 1: Asset + Object, Commit 2: Placement + Attribution).
  - Uses `.github/PULL_REQUEST_TEMPLATE.md`.
  - Links to issue (`Closes #<id>`).

## 2. Review Guidelines
- Ensure the student did not edit files outside `public/assets/worlds/<world>/` or `src/data/worlds/<world>/`.
- Validate that the contribution remains within the 1–10 meaningful lines of code threshold.
- Check that the contributor attribution accurately credits their GitHub account.
