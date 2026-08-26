"use client";

import { useState } from "react";
import type { World as WorldDef } from "@/schemas";
import { WorldViewport } from "./WorldViewport";
import { WorldSegment } from "./WorldSegment";
import { WorldNavigation } from "./WorldNavigation";
import { getActiveSegment, getAdjacentSegmentIds } from "./positioning/segments";

export interface WorldProps {
  world: WorldDef;
  initialSegmentId?: string;
}

/**
 * Shared 2D World Engine composition container.
 * Manages active segment state, renders the viewport, segments, and navigation.
 */
export function World({ world, initialSegmentId }: WorldProps) {
  const [activeSegmentId, setActiveSegmentId] = useState<string>(
    initialSegmentId || world.segments[0]?.id || ""
  );

  const activeSegment = getActiveSegment(world.segments, activeSegmentId);
  const { prevSegmentId, nextSegmentId, currentIndex, totalSegments } =
    getAdjacentSegmentIds(world.segments, activeSegment.id);

  return (
    <div className="flex flex-col gap-4 w-full" data-testid={`world-engine-${world.id}`}>
      {/* 1. Header with World Information & Theme Accent */}
      <div className="flex flex-col gap-1 text-center sm:text-left">
        <div className="flex items-center justify-center sm:justify-start gap-2">
          <span
            className="h-3 w-3 rounded-full shadow-sm"
            style={{ backgroundColor: world.theme.primaryColor }}
            aria-hidden="true"
          />
          <h2 className="text-2xl font-extrabold tracking-tight text-stone-900 dark:text-stone-100">
            {world.name}
          </h2>
        </div>
        <p className="text-sm text-stone-600 dark:text-stone-400 max-w-2xl">
          {world.description}
        </p>
      </div>

      {/* 2. Responsive 2D Viewport */}
      <WorldViewport>
        <WorldSegment
          segment={activeSegment}
          objects={world.objects}
          placements={world.placements}
        />
      </WorldViewport>

      {/* 3. Segment Navigation Bar */}
      <WorldNavigation
        currentSegmentName={activeSegment.name}
        currentIndex={currentIndex}
        totalSegments={totalSegments}
        hasPrev={prevSegmentId !== null}
        hasNext={nextSegmentId !== null}
        onPrev={() => {
          if (prevSegmentId) setActiveSegmentId(prevSegmentId);
        }}
        onNext={() => {
          if (nextSegmentId) setActiveSegmentId(nextSegmentId);
        }}
      />
    </div>
  );
}
