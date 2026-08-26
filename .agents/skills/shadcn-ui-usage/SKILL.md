---
name: shadcn-ui-usage
description: >-
  Guidelines for using shadcn/ui components and Tailwind CSS in Growing Worlds.
  Use when building navigation, inspector drawers, dialogs, tooltips, and buttons.
---

# shadcn/ui Usage Skill — Growing Worlds

## 1. Design & Primitive Integration
- **Components Location**: `src/components/ui/`
- **Primitives**: Use Radix UI primitives wrapped in Tailwind CSS.
- **Key Components**:
  - `Button`: Navigation, pan/zoom controls, world explorer triggers.
  - `Dialog` & `Drawer`: Object detail inspector overlay with contributor info.
  - `Tooltip`: Hover hints on canvas objects with contributor name.
  - `Badge`: Categorical tags (flora, fauna, celestial).

## 2. Styling Rules
- Use semantic CSS variables (`bg-background`, `text-foreground`, `bg-card/80`, `border-border`).
- Ensure glassmorphism cards use `backdrop-blur-md` to maintain legibility over vibrant paper collage backgrounds.
- Always support dark and light color modes cleanly.
