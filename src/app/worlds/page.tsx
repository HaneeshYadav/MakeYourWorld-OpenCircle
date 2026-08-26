import Link from "next/link";
import { Button } from "@/components/ui/button";
import { allWorlds } from "@/data/worlds";
import { Compass, Sparkles, Lock, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "World Gallery — Growing Worlds",
  description: "Browse the interactive 2D paper-collage worlds of Growing Worlds.",
};

const PLANNED_WORLDS = [
  {
    id: "growing-universe",
    name: "Growing Universe",
    description: "A cosmic indigo paper diorama of nebulae, spiral galaxies, and stardust satellites.",
    themeColor: "#4C1D95",
  },
  {
    id: "growing-ocean",
    name: "Growing Ocean",
    description: "Deep turquoise ocean waters, sea turtles, coral cutouts, and paper submarines.",
    themeColor: "#0F3846",
  },
  {
    id: "growing-city",
    name: "Growing City",
    description: "Slate skyscrapers, paper trams, architectural brownstones, and cozy city parks.",
    themeColor: "#1E293B",
  },
  {
    id: "growing-island",
    name: "Growing Island",
    description: "Lagoon azure shores, tropical palm trees, volcanic ridges, and paper lighthouses.",
    themeColor: "#0284C7",
  },
  {
    id: "growing-farm",
    name: "Growing Farm",
    description: "Golden wheat terraces, paper barns, tractors, and pastoral meadow pastures.",
    themeColor: "#CA8A04",
  },
  {
    id: "growing-campus",
    name: "Growing Campus",
    description: "Collegiate brick halls, academic libraries, grassy quads, and paper bicycles.",
    themeColor: "#881337",
  },
  {
    id: "fantasy-world",
    name: "Fantasy World",
    description: "Floating paper crystal islands, wizard spires, dragon perches, and arcane ruins.",
    themeColor: "#3B0764",
  },
  {
    id: "growing-village",
    name: "Growing Village",
    description: "Thatched cottages, cobblestone stone bridges, watermills, and lantern-lit stalls.",
    themeColor: "#78350F",
  },
  {
    id: "alien-planet",
    name: "Alien Planet",
    description: "Bioluminescent xenon spires, acid cyan biomes, hover probes, and crystalline flora.",
    themeColor: "#0D9488",
  },
];

export default function WorldGalleryPage() {
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

      {/* Active Worlds Grid */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold font-serif text-stone-900 flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-emerald-800" />
          <span>Active Worlds</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allWorlds.map((world) => (
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
                  <span>{world.segments.length} Segments</span>
                  <span>•</span>
                  <span>{world.objects.length} Objects</span>
                  <span>•</span>
                  <span>{world.placements.length} Placed</span>
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
          ))}
        </div>
      </div>

      {/* Planned Future Worlds Grid */}
      <div className="space-y-4 pt-6 border-t border-stone-200">
        <h2 className="text-lg font-bold font-serif text-stone-900 flex items-center gap-2">
          <Lock className="h-4 w-4 text-stone-500" />
          <span>Planned Future Worlds</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PLANNED_WORLDS.map((world) => (
            <div
              key={world.id}
              className="flex flex-col justify-between rounded-2xl border border-stone-200/80 bg-stone-100/50 p-6 opacity-75 select-none"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span
                    className="h-3 w-3 rounded-full opacity-60"
                    style={{ backgroundColor: world.themeColor }}
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
