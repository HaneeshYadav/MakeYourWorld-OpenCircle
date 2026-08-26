"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
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
      className="flex items-center justify-between gap-4 py-3 px-4 bg-card/80 border border-border rounded-lg shadow-sm backdrop-blur-md"
      aria-label="World segment navigation"
    >
      <Button
        variant="outline"
        size="sm"
        onClick={onPrev}
        disabled={!hasPrev}
        className="gap-1"
        aria-label="Previous segment"
        data-testid="prev-segment-button"
      >
        <ChevronLeft className="h-4 w-4" />
        <span>Previous</span>
      </Button>

      <div className="text-center select-none">
        <span className="text-sm font-semibold text-foreground">
          {currentSegmentName}
        </span>
        <span className="ml-2 text-xs text-muted-foreground">
          ({currentIndex + 1} of {totalSegments})
        </span>
      </div>

      <Button
        variant="outline"
        size="sm"
        onClick={onNext}
        disabled={!hasNext}
        className="gap-1"
        aria-label="Next segment"
        data-testid="next-segment-button"
      >
        <span>Next</span>
        <ChevronRight className="h-4 w-4" />
      </Button>
    </nav>
  );
}
