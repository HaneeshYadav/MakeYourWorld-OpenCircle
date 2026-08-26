"use client";

import { useState } from "react";
import { World } from "@/engine";
import { generateDensityFixture } from "@/data/fixtures/density";
import { Button } from "@/components/ui/button";
import { Sliders } from "lucide-react";

export default function DevDensityPage() {
  const [worldType, setWorldType] = useState<"growing-forest" | "growing-universe">("growing-forest");
  const [count, setCount] = useState<number>(20);

  const segmentId = worldType === "growing-forest" ? "forest-01" : "universe-01";
  const fixtureWorld = generateDensityFixture(worldType, segmentId, count);

  return (
    <div className="container mx-auto max-w-5xl px-4 py-8 space-y-6">
      {/* Test Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-stone-300 bg-white p-4 shadow-sm">
        <div className="flex items-center gap-2 text-sm font-bold text-stone-800">
          <Sliders className="h-4 w-4 text-emerald-800" />
          <span>Density & Visual Capacity Harness</span>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {/* World Selector */}
          <div className="flex items-center gap-1 bg-stone-100 p-1 rounded-lg border border-stone-200">
            <button
              onClick={() => setWorldType("growing-forest")}
              className={`px-3 py-1 text-xs font-semibold rounded-md transition-all ${
                worldType === "growing-forest"
                  ? "bg-white text-emerald-900 shadow-sm"
                  : "text-stone-600 hover:text-stone-900"
              }`}
            >
              Forest (forest-01)
            </button>
            <button
              onClick={() => setWorldType("growing-universe")}
              className={`px-3 py-1 text-xs font-semibold rounded-md transition-all ${
                worldType === "growing-universe"
                  ? "bg-white text-purple-900 shadow-sm"
                  : "text-stone-600 hover:text-stone-900"
              }`}
            >
              Universe (universe-01)
            </button>
          </div>

          {/* Density Count Buttons */}
          <div className="flex items-center gap-1.5">
            {[10, 20, 30, 40].map((num) => (
              <Button
                key={num}
                variant={count === num ? "default" : "outline"}
                size="sm"
                onClick={() => setCount(num)}
                className={`h-8 px-3 text-xs ${
                  count === num ? "bg-stone-900 text-white" : "border-stone-300"
                }`}
              >
                {num} Objects
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* World Engine Render */}
      <World world={fixtureWorld} />
    </div>
  );
}
