import * as React from "react";

export interface WorldViewportProps {
  children: React.ReactNode;
  aspectRatio?: string;
}

/**
 * WorldViewport establishes the bounded, responsive 2D canvas area where normalized coordinates render.
 * Default 16:9 responsive presentation.
 */
export function WorldViewport({
  children,
  aspectRatio = "aspect-video",
}: WorldViewportProps) {
  return (
    <div className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-xl border border-border bg-card shadow-lg">
      <div className={`relative w-full ${aspectRatio} min-h-[400px]`}>
        {children}
      </div>
    </div>
  );
}
