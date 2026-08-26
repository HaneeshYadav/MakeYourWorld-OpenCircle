import { describe, it, expect } from "vitest";
import {
  calculatePositionStyle,
  calculateZIndex,
} from "@/engine/positioning/math";
import {
  getActiveSegment,
  getAdjacentSegmentIds,
} from "@/engine/positioning/segments";
import type { WorldSegment } from "@/schemas";

describe("Engine Positioning & Depth Math Suite", () => {
  describe("1 & 2. Normalized Coordinate Conversion", () => {
    it("converts normalized x and y to percentage positioning strings", () => {
      const style = calculatePositionStyle(45.5, 72.3);
      expect(style.left).toBe("45.5%");
      expect(style.top).toBe("72.3%");
      expect(style.transform).toContain("translate(-50%, -100%)");
    });

    it("clamps out-of-range coordinates cleanly", () => {
      const minStyle = calculatePositionStyle(-20, -50);
      expect(minStyle.left).toBe("0%");
      expect(minStyle.top).toBe("0%");

      const maxStyle = calculatePositionStyle(150, 200);
      expect(maxStyle.left).toBe("100%");
      expect(maxStyle.top).toBe("100%");
    });
  });

  describe("3. Depth (z-index) Calculation", () => {
    it("derives z-index from vertical y position (lower on screen = higher z-index)", () => {
      const backgroundZIndex = calculateZIndex(10); // near top
      const midgroundZIndex = calculateZIndex(50); // middle
      const foregroundZIndex = calculateZIndex(90); // near bottom

      expect(backgroundZIndex).toBe(110);
      expect(midgroundZIndex).toBe(510);
      expect(foregroundZIndex).toBe(910);

      expect(foregroundZIndex).toBeGreaterThan(midgroundZIndex);
      expect(midgroundZIndex).toBeGreaterThan(backgroundZIndex);
    });
  });

  describe("4 & 5. Scale and Rotation Handling", () => {
    it("applies scale and rotation to CSS transform string", () => {
      const style = calculatePositionStyle(50, 50, 1.5, 12);
      expect(style.transform).toContain("scale(1.5)");
      expect(style.transform).toContain("rotate(12deg)");
    });

    it("omits scale and rotation when default", () => {
      const style = calculatePositionStyle(50, 50, 1.0, 0);
      expect(style.transform).toBe("translate(-50%, -100%)");
    });
  });

  describe("6 & 7. Segment Navigation & Boundaries", () => {
    const mockSegments: WorldSegment[] = [
      {
        id: "seg-02",
        order: 2,
        name: "Second Area",
        background: {},
      },
      {
        id: "seg-01",
        order: 1,
        name: "First Area",
        background: {},
      },
      {
        id: "seg-03",
        order: 3,
        name: "Third Area",
        background: {},
      },
    ];

    it("sorts segments by order and picks the first by default", () => {
      const active = getActiveSegment(mockSegments);
      expect(active.id).toBe("seg-01");
    });

    it("calculates adjacent segment IDs accurately", () => {
      const firstAdj = getAdjacentSegmentIds(mockSegments, "seg-01");
      expect(firstAdj.prevSegmentId).toBeNull();
      expect(firstAdj.nextSegmentId).toBe("seg-02");
      expect(firstAdj.currentIndex).toBe(0);

      const midAdj = getAdjacentSegmentIds(mockSegments, "seg-02");
      expect(midAdj.prevSegmentId).toBe("seg-01");
      expect(midAdj.nextSegmentId).toBe("seg-03");
      expect(midAdj.currentIndex).toBe(1);

      const lastAdj = getAdjacentSegmentIds(mockSegments, "seg-03");
      expect(lastAdj.prevSegmentId).toBe("seg-02");
      expect(lastAdj.nextSegmentId).toBeNull();
      expect(lastAdj.currentIndex).toBe(2);
    });
  });
});
