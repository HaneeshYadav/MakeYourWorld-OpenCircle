"use client";

import { ChevronLeft, ChevronRight, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface WorldNavigationProps {
  currentSegmentName: string;
  currentIndex: number;
  totalSegments: number;
  hasPrev: boolean;
  hasNext: boolean;
  onPrev: () => void;
  onNext: () => void;
}

/**
 * WorldNavigation provides accessible controls to navigate between growing world segments.
 * Styled with refined paper borders and subtle backdrop warmth.
 */
export function WorldNavigation({
  currentSegmentName,
  currentIndex,
  totalSegments,
  hasPrev,
  hasNext,
  onPrev,
  onNext,
}: WorldNavigationProps) {
  return (
    <nav
      className="flex items-center justify-between gap-4 py-2.5 px-4 bg-[#FFFDF7]/90 border border-stone-200/80 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.06)] backdrop-blur-md transition-all"
      aria-label="World segment navigation"
    >
      <Button
        variant="outline"
        size="sm"
        onClick={onPrev}
        disabled={!hasPrev}
        className="gap-1.5 border-stone-300 text-stone-700 hover:bg-stone-100/80 disabled:opacity-40"
        aria-label="Previous segment"
        data-testid="prev-segment-button"
      >
        <ChevronLeft className="h-4 w-4 text-stone-600" />
        <span className="hidden sm:inline font-medium">Previous</span>
      </Button>

      <div className="flex items-center gap-2 text-center select-none">
        <Layers className="h-4 w-4 text-emerald-800/80 hidden xs:inline" />
        <span className="text-sm font-semibold tracking-tight text-stone-900">
          {currentSegmentName}
        </span>
        <span className="rounded-full bg-stone-100 px-2 py-0.5 font-mono text-[11px] font-medium text-stone-600 border border-stone-200/60">
          {currentIndex + 1} / {totalSegments}
        </span>
      </div>

      <Button
        variant="outline"
        size="sm"
        onClick={onNext}
        disabled={!hasNext}
        className="gap-1.5 border-stone-300 text-stone-700 hover:bg-stone-100/80 disabled:opacity-40"
        aria-label="Next segment"
        data-testid="next-segment-button"
      >
        <span className="hidden sm:inline font-medium">Next</span>
        <ChevronRight className="h-4 w-4 text-stone-600" />
      </Button>
    </nav>
  );
}
