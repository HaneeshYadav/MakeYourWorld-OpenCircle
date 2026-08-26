import Link from "next/link";
import { Button } from "@/components/ui/button";
import { worldCatalog } from "@/data/worlds";
import { Compass, Sparkles, Lock, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "World Gallery — Growing Worlds",
  description: "Browse the interactive 2D paper-collage worlds of Growing Worlds.",
};

export default function WorldGalleryPage() {
  const implementedList = worldCatalog.filter((w) => w.status === "implemented");
  const plannedList = worldCatalog.filter((w) => w.status === "planned");

  return (
    <div className="container mx-auto max-w-6xl px-4 py-12 sm:px-6 space-y-10">
      {/* Header */}
      <div className="space-y-3 max-w-2xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white/90 px-3 py-1 text-xs font-medium text-stone-700">
          <Compass className="h-3.5 w-3.5 text-emerald-800" />
          <span>Paper Collage Collection</span>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl font-serif">
          World Gallery
        </h1>
        <p className="text-sm text-stone-600 sm:text-base">
          Each world is an illustrated diorama populated collectively by open-source
          contributors. Select an active world to explore its paper segments.
        </p>
      </div>

      {/* Active Implemented Worlds Grid */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold font-serif text-stone-900 flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-emerald-800" />
          <span>Active Worlds ({implementedList.length})</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {implementedList.map((world) => {
            const worldData = world.data!;
            return (
              <div
                key={world.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border-2 border-emerald-900/20 bg-white p-6 shadow-sm transition-all hover:border-emerald-800 hover:shadow-md"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span
                      className="h-3.5 w-3.5 rounded-full"
                      style={{ backgroundColor: world.theme.primaryColor }}
                    />
                    <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-[11px] font-bold text-emerald-900">
                      Active World
                    </span>
                  </div>
                  <h3 className="text-xl font-bold font-serif text-stone-900 group-hover:text-emerald-900 transition-colors">
                    {world.name}
                  </h3>
                  <p className="text-xs text-stone-600 line-clamp-3">
                    {world.description}
                  </p>
                  <div className="flex items-center gap-3 pt-2 text-xs font-medium text-stone-500">
                    <span>{worldData.segments.length} Segments</span>
                    <span>•</span>
                    <span>{worldData.objects.length} Objects</span>
                    <span>•</span>
                    <span>{worldData.placements.length} Placed</span>
                  </div>
                </div>

                <div className="pt-6">
                  <Link href={`/worlds/${world.id}`}>
                    <Button className="w-full gap-2 bg-emerald-900 text-white hover:bg-emerald-800">
                      <span>Explore World</span>
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Planned Future Worlds Grid */}
      <div className="space-y-4 pt-6 border-t border-stone-200">
        <h2 className="text-lg font-bold font-serif text-stone-900 flex items-center gap-2">
          <Lock className="h-4 w-4 text-stone-500" />
          <span>Planned Worlds ({plannedList.length})</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plannedList.map((world) => (
            <div
              key={world.id}
              className="flex flex-col justify-between rounded-2xl border border-stone-200/80 bg-stone-100/50 p-6 opacity-75 select-none"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span
                    className="h-3 w-3 rounded-full opacity-60"
                    style={{ backgroundColor: world.theme.primaryColor }}
                  />
                  <span className="rounded-full bg-stone-200 px-2 py-0.5 text-[10px] font-mono font-medium text-stone-600">
                    Coming Soon
                  </span>
                </div>
                <h3 className="text-lg font-bold font-serif text-stone-700">
                  {world.name}
                </h3>
                <p className="text-xs text-stone-500 line-clamp-3">
                  {world.description}
                </p>
                <div className="text-[11px] font-medium text-stone-400">
                  {world.growthConcept}
                </div>
              </div>

              <div className="pt-6">
                <Button variant="outline" disabled className="w-full text-xs">
                  Awaiting Scaffolding
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
