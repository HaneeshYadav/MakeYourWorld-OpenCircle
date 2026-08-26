# Local Development Setup Guide

## 1. Prerequisites

Before setting up **Growing Worlds**, ensure you have installed:
- **Node.js**: `v20.x` or higher (LTS recommended)
- **npm**: `v10.x` or higher (bundled with Node.js)
- **Git**: `v2.40+`

---

## 2. Installation & Initialization

1. Clone your fork or the main repository:
   ```bash
   git clone https://github.com/<your-username>/growing-worlds.git
   cd growing-worlds
   ```

2. Install project dependencies using **npm**:
   ```bash
   npm install
   ```

3. Run the local development server:
   ```bash
   npm run dev
   ```

4. Open your browser to [http://localhost:3000](http://localhost:3000).

---

## 3. Useful Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts Next.js development server with hot-reloading |
| `npm run build` | Compiles production build and validates static generation |
| `npm start` | Runs the built production server |
| `npm run lint` | Runs ESLint across all TypeScript and React files |
| `npm run format` | Formats code with Prettier |
| `npm run typecheck` | Runs `tsc --noEmit` to verify type safety |
| `npm test` | Runs the complete Vitest test suite |
| `npm run test:objects` | Fast unit test validating only world objects and asset paths |
| `npm run test:e2e` | Runs Playwright end-to-end browser tests |

---

## 4. Recommended IDE Setup (VS Code / Antigravity)

- **Extensions**:
  - Tailwind CSS IntelliSense
  - ESLint
  - Prettier - Code formatter
  - Even Better TOML / Zod type helpers
- **Editor Settings**:
  - Format on Save enabled
  - Tab Size: 2 spaces
