"use client";

import React, { useState } from "react";
import type { WorldCatalogEntry } from "@/data/worlds";
import type { World as WorldDef } from "@/schemas";
import { WorldCard } from "./WorldCard";
import { FullscreenWorldViewer } from "./FullscreenWorldViewer";
import { Sparkles, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface WorldsOverviewProps {
  catalog: WorldCatalogEntry[];
}

/**
 * WorldsOverview client container.
 * Displays interactive world cards grid with live preview snapshots and fullscreen inspection modal.
 */
export function WorldsOverview({ catalog }: WorldsOverviewProps) {
  const [selectedWorld, setSelectedWorld] = useState<WorldDef | null>(null);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const implementedList = catalog.filter(
    (w): w is WorldCatalogEntry & { data: WorldDef } =>
      w.status === "implemented" && !!w.data
  );
  const plannedList = catalog.filter((w) => w.status === "planned");

  const handleMaximize = (world: WorldDef) => {
    setSelectedWorld(world);
    setIsViewerOpen(true);
  };

  const handleClose = () => {
    setIsViewerOpen(false);
    setSelectedWorld(null);
  };

  return (
    <div className="space-y-10">
      {/* Active Implemented Worlds Grid */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold font-serif text-stone-900 flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-emerald-800" />
          <span>Active Worlds ({implementedList.length})</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {implementedList.map((entry) => (
            <WorldCard
              key={entry.id}
              world={entry.data}
              onMaximize={handleMaximize}
            />
          ))}
        </div>
      </div>

      {/* Planned Worlds Section (if any) */}
      {plannedList.length > 0 && (
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
      )}

      {/* Fullscreen Viewer Modal */}
      <FullscreenWorldViewer
        world={selectedWorld}
        isOpen={isViewerOpen}
        onClose={handleClose}
      />
    </div>
  );
}
