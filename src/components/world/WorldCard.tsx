"use client";

import React from "react";
import Link from "next/link";
import { Maximize2, ArrowRight } from "lucide-react";
import type { World as WorldDef } from "@/schemas";
import { WorldPreview } from "./WorldPreview";
import { Button } from "@/components/ui/button";

export interface WorldCardProps {
  world: WorldDef;
  onMaximize?: (world: WorldDef) => void;
}

/**
 * WorldCard displays a diorama preview, title, description, and action controls.
 * Features a discoverable Maximize button in the top-right of the preview.
 */
export function WorldCard({ world, onMaximize }: WorldCardProps) {
  return (
    <div
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border-2 border-emerald-900/15 bg-white p-5 shadow-sm transition-all hover:border-emerald-800/60 hover:shadow-md"
      data-testid={`world-card-${world.id}`}
    >
      <div className="space-y-4">
        {/* Visual World Preview with Maximize Button Overlay */}
        <div className="relative overflow-hidden rounded-xl">
          <WorldPreview world={world} />

          {/* Maximize Button Overlay */}
          {onMaximize && (
            <button
              type="button"
              onClick={() => onMaximize(world)}
              aria-label={`Maximize ${world.name} preview`}
              className="absolute top-2.5 right-2.5 z-20 inline-flex h-7 w-7 items-center justify-center rounded-md border border-stone-300/80 bg-white/90 text-stone-700 backdrop-blur-sm shadow-sm transition-all hover:bg-white hover:text-emerald-900 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-700"
            >
              <Maximize2 className="h-3.5 w-3.5" />
            </button>
          )}
        </div>

        {/* Title, Badge & Theme Accent */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span
                className="h-3 w-3 rounded-full shadow-sm"
                style={{ backgroundColor: world.theme.primaryColor }}
                aria-hidden="true"
              />
              <h3 className="text-lg font-bold font-serif text-stone-900 group-hover:text-emerald-900 transition-colors">
                {world.name}
              </h3>
            </div>
            <span className="rounded-full bg-emerald-100/90 px-2 py-0.5 text-[10px] font-bold text-emerald-900">
              Active World
            </span>
          </div>

          <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
            {world.description}
          </p>

          {/* Stats Bar */}
          <div className="flex items-center gap-2 pt-1 text-[11px] font-medium text-stone-500">
            <span>{world.segments.length} Segments</span>
            <span>•</span>
            <span>{world.objects.length} Objects</span>
            <span>•</span>
            <span>{world.placements.length} Placements</span>
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-5">
        <Link href={`/worlds/${world.id}`}>
          <Button className="w-full gap-2 bg-emerald-900 text-white hover:bg-emerald-800 shadow-sm">
            <span>Explore World</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
