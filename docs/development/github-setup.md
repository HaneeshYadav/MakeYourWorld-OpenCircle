# GitHub Governance & Repository Setup Guide

This document outlines the GitHub governance model, branch architecture, branch protection rules, and manual configuration steps required for **Growing Worlds**.

---

## 1. Branch Strategy & PR Classification

The repository uses branch naming as the **authoritative signal** to classify pull requests:

```
Student Contribution PR
  Branch: contrib/<world>-<object-name>
  Target: dev
  CI: Strict 2-Commit & Boundary Validator + Quality Gates

Maintainer / Infrastructure PR
  Branch: feature/*, fix/*, chore/*, docs/*
  Target: dev / main
  CI: Quality Gates (Lint, Typecheck, Tests, Next.js Build)
```

1. **`main`**: Production branch. Contains stable, reviewed code and is deployed automatically to static hosting. Direct pushes are forbidden.
2. **`dev`**: Active integration branch. **All student contributor PRs and feature integrations target `dev`**.
3. **`contrib/<world>-<object-name>`**: Short-lived feature branches created on student forks from upstream `dev`. Triggers strict 2-commit validation.

---

## 2. PR Validation Architecture

The CI workflow ([`.github/workflows/ci.yml`](file:///d:/Temp/codes/Open%20Circle/OpenCircle-Test/.github/workflows/ci.yml)) provides a single unified status check: **`Contributor Quality Gates & Build`**.

```
                        PR targeting dev
                               |
                +--------------+--------------+
                |                             |
       Branch: contrib/*             Branch: non-contrib
    (Student Contribution)         (feature/*, fix/*, etc.)
                |                             |
     Student 2-Commit Validator               |
   (2 commits, boundary limits,               |
        safe asset check)                     |
                |                             |
                +--------------+--------------+
                               |
                     Standard Quality Gates
                    (Lint, Typecheck, Tests,
                      Next.js Static Build)
```

1. **Student World Contribution PRs (`contrib/*`)**:
   - The validator strictly requires exactly 2 commits (Commit 1: Asset + `objects.ts`, Commit 2: `placements.ts`) and forbids touching files outside contributor zones.
2. **Maintainer / Infrastructure PRs (`feature/*`, `fix/*`, `chore/*`, `docs/*`)**:
   - Safely bypasses the student 2-commit check, proceeding directly to the standard quality gates (`npm ci`, `lint`, `typecheck`, `test`, `build`).

---

## 3. GitHub Manual Settings Checklist

> [!IMPORTANT]
> The following repository settings cannot be set from repository files and **must be manually configured by the repository admin** in the GitHub web interface (**Settings** tab).

### A. Branch Protection: `main`
In **Settings > Branches > Branch protection rules** (or Rulesets), create a rule for `main`:
- [x] **Require a pull request before merging**:
  - Require approvals: `1`
  - Dismiss stale pull request approvals when new commits are pushed
  - Require review from Code Owners
- [x] **Require status checks to pass before merging**:
  - Require branches to be up to date before merging
  - Status checks: `Contributor Quality Gates & Build` (from `.github/workflows/ci.yml`)
- [x] **Require conversation resolution before merging**
- [x] **Do not allow bypassing the above settings**
- [x] **Block force pushes** & **Block branch deletions**

### B. Branch Protection: `dev`
Create a rule for `dev`:
- [x] **Require a pull request before merging**:
  - Require approvals: `1` (maintainer review)
- [x] **Require status checks to pass before merging**:
  - Status checks: `Contributor Quality Gates & Build`
- [x] **Require conversation resolution before merging**
- [x] **Block force pushes** & **Block branch deletions**
- [x] **Block direct contributor pushes**

### C. General Repository Settings
In **Settings > General**:
- [x] **Pull Requests**:
  - Allow merge commits: Yes (preserves student 2-commit history)
  - Allow squash merging: No (or optional, but keep 2-commit PRs intact)
  - Automatically delete head branches: Enabled

---

## 4. Label Policy

The repository uses the standard GitHub label for contributor discovery:

| Label | Color | Purpose | Target Entity |
| :--- | :--- | :--- | :--- |
| `good first issue` | `#7057ff` | Marks reusable student contribution slots for GitHub discovery | **Issue Slots** |

---

## 5. End-to-End Reusable Slot Lifecycle

```
1. MAINTAINER CREATES ISSUE SLOT
   └── Created via .github/ISSUE_TEMPLATE/world-contribution.yml
   └── Labeled with "good first issue"
   └── Formatted as: "[Good First Issue] 🌱 Add <Object> to <World> — <Segment> (CONTRIB-SLOT #XX)"

2. STUDENT CLAIMS SLOT
   └── Contributor comments: "I would like to work on this!"

3. MAINTAINER ASSIGNS CONTRIBUTOR
   └── Maintainer assigns student to the issue
   └── GitHub Actions (auto-rename-issue.yml) automatically posts an onboarding next-steps comment welcoming the student!
   └── (Optional) Notification sent to Discord webhook.

4. 2-COMMIT STUDENT DEVELOPMENT
   └── Branch: contrib/<world>-<object> from dev
   └── Commit 1: Asset SVG + objects.ts registration
   └── Commit 2: placements.ts placement in assigned segment
   └── Local tests: npm test && npm run lint && npm run typecheck && npm run build

5. PULL REQUEST & CI QUALITY GATES
   └── Target: dev
   └── PR description includes: Closes #<ISSUE_NUMBER>
   └── CI (ci.yml) validates 2 commits and contributor file boundaries

6. REVIEW, MERGE, AUTOMATIC CLOSURE & CELEBRATION
   └── Maintainer review & approval
   └── Merged into dev
   └── Linked issue automatically closes via GitHub's Closes #<ISSUE_NUMBER> mechanism
   └── (Optional) Completion celebration notification sent to Discord.
```
