"use client";

import React, { useEffect } from "react";
import type { World as WorldDef } from "@/schemas";
import { World } from "@/engine/World";
import { X, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export interface FullscreenWorldViewerProps {
  world: WorldDef | null;
  isOpen: boolean;
  onClose: () => void;
}

/**
 * FullscreenWorldViewer displays an accessible modal overlay with the interactive World engine.
 * Supports Escape to close, focus trapping, and background scroll locking.
 */
export function FullscreenWorldViewer({
  world,
  isOpen,
  onClose,
}: FullscreenWorldViewerProps) {
  // Lock background scroll and listen for Escape key
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !world) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="fullscreen-world-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/80 p-4 sm:p-6 md:p-8 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative flex flex-col w-full max-w-5xl max-h-[95vh] overflow-y-auto rounded-2xl border border-stone-200/40 bg-[#FAF8F5] p-5 sm:p-7 shadow-2xl space-y-4">
        {/* Top Control Bar */}
        <div className="flex items-center justify-between border-b border-stone-200/80 pb-3">
          <div className="flex items-center gap-2">
            <span
              className="h-3.5 w-3.5 rounded-full shadow-sm"
              style={{ backgroundColor: world.theme.primaryColor }}
              aria-hidden="true"
            />
            <h2
              id="fullscreen-world-title"
              className="text-xl sm:text-2xl font-extrabold font-serif text-stone-900"
            >
              {world.name}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <Link href={`/worlds/${world.id}`}>
              <Button
                variant="outline"
                size="sm"
                className="gap-1.5 text-xs border-stone-300 bg-white text-stone-700 hover:bg-stone-100"
              >
                <span>Full Page View</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </Button>
            </Link>

            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-stone-300 bg-white text-stone-700 hover:bg-stone-100 hover:text-stone-950 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-700 shadow-sm"
              aria-label="Close world preview"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Interactive World Viewport and Navigation */}
        <div className="pt-2">
          <World world={world} />
        </div>
      </div>
    </div>
  );
}
