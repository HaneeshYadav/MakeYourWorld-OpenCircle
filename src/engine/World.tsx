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
      {/* 1. Header with World Information */}
      <div className="flex flex-col gap-1 text-center sm:text-left">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          {world.name}
        </h2>
        <p className="text-sm text-muted-foreground">{world.description}</p>
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
