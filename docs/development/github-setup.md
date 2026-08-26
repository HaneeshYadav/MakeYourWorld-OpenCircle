# GitHub Governance & Repository Setup Guide

This document outlines the GitHub governance model, branch architecture, branch protection rules, and manual configuration steps required for **Growing Worlds**.

---

## 1. Branch Strategy

```
feature branch (student fork)
      ↓ PR
     dev (Integration Branch)
      ↓ PR / Release Merge
     main (Production SSG Deployment)
```

1. **`main`**: Production branch. Contains stable, reviewed code and is deployed automatically to static hosting. Direct pushes are forbidden.
2. **`dev`**: Active integration branch. **All student contributor PRs must target `dev`**.
3. **`contrib/<world>-<object-name>`**: Short-lived feature branches created on student forks from `upstream/dev`.

---

## 2. GitHub Manual Settings Checklist

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
  - Require review from Code Owners (ensures maintainers review PRs)
- [x] **Require status checks to pass before merging**:
  - Status checks: `Contributor Quality Gates & Build`
- [x] **Require conversation resolution before merging**
- [x] **Block force pushes** & **Block branch deletions**

### C. General Repository Settings
In **Settings > General**:
- [x] **Pull Requests**:
  - Allow merge commits: Yes (preserves student 2-commit history)
  - Allow squash merging: No (or optional, but keep 2-commit PRs intact)
  - Automatically delete head branches: Enabled

---

## 3. Label Taxonomy

Use the following standardized label taxonomy for issue slots and PR tracking:

| Label | Color | Purpose |
| :--- | :--- | :--- |
| `good first issue` | `#7057ff` | Marks reusable student contribution slots for GitHub discovery |
| `contribution-slot` | `#0e8a16` | Identifies active revolving slots (Slots #01–#20) |
| `status:available` | `#0075ca` | Slot is open for a student to claim |
| `status:claimed` | `#d93f0b` | Slot is currently assigned (48h reservation window) |
| `status:in-review` | `#fbca04` | PR has been opened and is awaiting maintainer check |
| `world:forest` | `#1E3A2F` | Categorizes slot by world |
| `world:universe` | `#4C1D95` | Categorizes slot by world |
| `world:ocean` | `#0F3846` | Categorizes slot by world |
| `world:city` | `#1E293B` | Categorizes slot by world |
| `world:village` | `#78350F` | Categorizes slot by world |
| `world:island` | `#0284C7` | Categorizes slot by world |
| `world:farm` | `#CA8A04` | Categorizes slot by world |
| `world:campus` | `#881337` | Categorizes slot by world |
| `world:fantasy` | `#3B0764` | Categorizes slot by world |
| `world:alien` | `#180828` | Categorizes slot by world |

---

## 4. Maintainer Reusable Slot Lifecycle

1. **Student Claims Slot**: Student comments on open slot issue `#XX`.
2. **Maintainer Assigns**: Maintainer assigns student and updates label to `status:claimed`.
3. **Student Submits PR**: Student opens PR targeting `dev` with two commits.
4. **Automated CI**: GitHub Actions executes `scripts/validate-pr.ts`, ESLint, TypeScript typecheck, Vitest, and static Next.js build.
5. **Maintainer Review & Merge**:
   - Verify 2 distinct commits.
   - Verify placement visually.
   - Merge PR into `dev`.
6. **Issue Reopened (Manual)**:
   - Remove student assignee from issue `#XX`.
   - Set label back to `status:available`.
   - **Reopen issue `#XX`** so the next student can claim the slot.
   - (Optional) Award contributor role in community Discord using submitted username
