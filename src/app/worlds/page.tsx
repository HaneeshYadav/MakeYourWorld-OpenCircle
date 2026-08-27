import { worldCatalog } from "@/data/worlds";
import { WorldsOverview } from "@/components/world/WorldsOverview";
import { Compass } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Explore All Worlds — Growing Worlds",
  description: "Browse the interactive 2D paper-collage dioramas of Growing Worlds.",
};

export default function WorldGalleryPage() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-12 sm:px-6 space-y-10">
      {/* Header */}
      <div className="space-y-3 max-w-2xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white/90 px-3 py-1 text-xs font-medium text-stone-700 shadow-sm">
          <Compass className="h-3.5 w-3.5 text-emerald-800" />
          <span>Paper Collage Collection</span>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl font-serif">
          World Gallery
        </h1>
        <p className="text-sm text-stone-600 sm:text-base leading-relaxed">
          Each world is an illustrated diorama populated collectively by open-source
          contributors. Click the maximize icon (⛶) on any world preview for a live
          expanded view, or select a world to explore its paper segments.
        </p>
      </div>

      {/* Dynamic Worlds Overview Grid with Previews & Modal */}
      <WorldsOverview catalog={worldCatalog} />
    </div>
  );
}
