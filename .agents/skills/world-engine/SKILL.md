---
name: world-engine
description: >-
  Rules, coordinate math, and layer rendering guidelines for the Growing Worlds 2D Engine.
  Use when maintaining or debugging src/engine components (WorldCanvas, WorldLayer, WorldCutout).
---

# World Engine Skill — Growing Worlds

## 1. Engine Core Responsibilities
The engine in `src/engine/` is responsible for rendering all 10 paper-collage worlds using CSS transforms and SVG filters.

## 2. Core Concepts
- **Coordinate Space**: Normalized percentages (`0.0 <= x <= 100.0`, `0.0 <= y <= 100.0`).
- **Layers**:
  - `background`: Distant backdrop, parallax `0.3x`
  - `midground`: Main interactive world objects, parallax `1.0x`
  - `foreground`: Ambient overlays and floating elements, parallax `1.3x`
- **Transforms & Camera**:
  - Zoom range: `0.8x` to `2.5x` (clamped).
  - Pan gestures: Trackpad wheel, mouse drag, touch gestures, and keyboard arrow keys.
- **Micro-Interactions**:
  - Cutout hover tilt (-2° to +2°) and warm drop shadows.
  - Keyboard accessible focus (`Tab` navigation across placed items).

## 3. Maintainer Rule
Never duplicate the engine per world. All world differences must be purely driven by data in `src/data/worlds/<worldId>/`.
