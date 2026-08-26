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

## 4. Label Taxonomy

Use the following standardized label taxonomy for issue slots:

| Label | Color | Purpose | Target Entity |
| :--- | :--- | :--- | :--- |
| `good first issue` | `#7057ff` | Marks reusable student contribution slots for GitHub discovery | **Issue Slots** |
| `contribution-slot` | `#0e8a16` | Identifies active revolving slots (Slots #01–#20) | **Issue Slots** |
| `status:available` | `#0075ca` | Slot is open for a student to claim | **Issue Slots** |
| `status:claimed` | `#d93f0b` | Slot is currently assigned (48h reservation window) | **Issue Slots** |
| `status:in-review` | `#fbca04` | PR has been opened and is awaiting maintainer check | **Pull Requests** |
| `world:forest` ... `world:alien` | Dynamic | Categorizes slot by world | **Issues & PRs** |

---

## 5. Maintainer Reusable Slot Lifecycle

1. **Student Claims Slot**: Student comments on open slot issue `#XX` (labeled `good first issue`).
2. **Maintainer Assigns**: Maintainer assigns student and updates label to `status:claimed`.
3. **Student Submits PR**: Student opens PR targeting `dev` from `contrib/<world>-<object>` with two commits and includes `Closes #XX`.
4. **Automated CI Execution**: GitHub Actions executes `validate-pr.ts`, ESLint, TypeScript typecheck, Vitest, and static Next.js build under the unified `Contributor Quality Gates & Build` check.
5. **Maintainer Review & Merge**:
   - Verify 2 distinct commits.
   - Verify placement visually.
   - Merge PR into `dev`.
6. **Issue Reopened (Manual)**:
   - Remove student assignee from issue `#XX`.
   - Set label back to `status:available`.
   - **Reopen issue `#XX`** so the next student can claim the slot.
   - (Optional) Award contributor role in community Discord using submitted username.
