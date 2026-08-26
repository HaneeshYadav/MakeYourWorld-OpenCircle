# UI Principles & Component Guidelines

## 1. Core Principles

The user interface of **Growing Worlds** frames the artistic paper worlds with clean, modern, high-craft web components.

### 1.1 Gallery Frame Concept
The UI behaves like a contemporary digital museum or gallery frame:
- **Minimal Chrome**: Controls (zoom, reset view, layer toggle, search, world selector) float unobtrusively over the canvas.
- **Glassmorphism & Crisp Paper Borders**: HUD cards use subtle backdrop-blur (`backdrop-blur-md bg-card/80 border-border/50`) to let world artwork shine beneath.
- **Micro-Interactions**: Smooth scale transitions on hover (`hover:scale-105 transition-transform duration-200 ease-out`).

---

## 2. Component Design System (shadcn/ui + Tailwind CSS)

### 2.1 shadcn/ui Component Usage
We utilize `shadcn/ui` primitives for standard UI interactions:
- `Button`: World navigation, zoom in/out, view reset, filter triggers.
- `Dialog` & `Drawer`: Object detail inspector, world lore modal, contribution help drawer.
- `Tooltip`: Fast hover hints for contributor tags, coordinates, and object metadata.
- `Badge`: World categories, contributor role badges, issue tags.
- `DropdownMenu` / `Select`: Switching between the 10 worlds.

### 2.2 Typography
- **Headings**: Modern geometric / editorial display sans-serif (e.g. *Outfit*, *Space Grotesk*, or *Plus Jakarta Sans*).
- **Body & Labels**: Clear, highly legible sans-serif (*Inter*).
- **Paper Tags & Coordinates**: Monospace (*JetBrains Mono* / *Geist Mono*) for coordinate percentages (`X: 45.2% Y: 80.1%`) and Git commit hashes.

---

## 3. Responsive Camera & Viewport Guidelines

- **Desktop (>=1024px)**: Full pan/zoom canvas with floating HUD controls on the top right and bottom left.
- **Tablet / Mobile (<1024px)**: Pinch-to-zoom and touch drag. Collapsible bottom sheet for object details.
- **Reduced Motion**: Respect `prefers-reduced-motion: reduce` by disabling smooth animated camera transitions and floating particle physics.
