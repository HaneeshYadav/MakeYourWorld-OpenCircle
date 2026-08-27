"use client";

import React from "react";
import type { World as WorldDef } from "@/schemas";
import { WorldSegment } from "@/engine/WorldSegment";

export interface WorldPreviewProps {
  world: WorldDef;
  className?: string;
}

/**
 * WorldPreview renders a lightweight miniature snapshot of the world's primary segment (segment 0).
 * Displays real SVG backdrops and placed paper cutout objects without full navigation overhead.
 */
export function WorldPreview({ world, className = "" }: WorldPreviewProps) {
  const primarySegment = world.segments[0];

  if (!primarySegment) {
    return (
      <div
        className={`relative w-full aspect-video rounded-xl bg-stone-200/80 flex items-center justify-center text-xs text-stone-500 font-medium ${className}`}
      >
        <span>No segments available</span>
      </div>
    );
  }

  return (
    <div
      className={`relative w-full aspect-video overflow-hidden rounded-xl border border-stone-200/80 shadow-inner bg-card select-none ${className}`}
      data-testid={`world-preview-${world.id}`}
    >
      <WorldSegment
        segment={primarySegment}
        objects={world.objects}
        placements={world.placements}
      />
    </div>
  );
}
