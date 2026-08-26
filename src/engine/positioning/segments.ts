import type { WorldSegment } from "@/schemas";

/**
 * Returns the segment by ID or clamps to the first/valid segment.
 */
export function getActiveSegment(
  segments: WorldSegment[],
  activeSegmentId?: string
): WorldSegment {
  if (!segments || segments.length === 0) {
    throw new Error("Cannot get active segment: World has no segments defined.");
  }

  if (activeSegmentId) {
    const found = segments.find((s) => s.id === activeSegmentId);
    if (found) return found;
  }

  // Sort by order ascending
  const sorted = [...segments].sort((a, b) => a.order - b.order);
  return sorted[0];
}

/**
 * Calculates next and previous segment IDs based on ordering.
 */
export function getAdjacentSegmentIds(
  segments: WorldSegment[],
  currentSegmentId: string
): {
  prevSegmentId: string | null;
  nextSegmentId: string | null;
  currentIndex: number;
  totalSegments: number;
} {
  const sorted = [...segments].sort((a, b) => a.order - b.order);
  const currentIndex = sorted.findIndex((s) => s.id === currentSegmentId);

  if (currentIndex === -1) {
    return {
      prevSegmentId: null,
      nextSegmentId: null,
      currentIndex: 0,
      totalSegments: sorted.length,
    };
  }

  const prevSegmentId = currentIndex > 0 ? sorted[currentIndex - 1].id : null;
  const nextSegmentId =
    currentIndex < sorted.length - 1 ? sorted[currentIndex + 1].id : null;

  return {
    prevSegmentId,
    nextSegmentId,
    currentIndex,
    totalSegments: sorted.length,
  };
}
