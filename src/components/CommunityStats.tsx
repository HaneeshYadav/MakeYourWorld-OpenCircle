"use client";

import React, { useEffect, useState } from "react";
import { Star, GitFork } from "lucide-react";
import type { GitHubStatsResponse } from "@/app/api/github/stats/route";

export function CommunityStats() {
  const [stats, setStats] = useState<GitHubStatsResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function fetchStats() {
      try {
        const res = await fetch("/api/github/stats");
        if (res.ok) {
          const data: GitHubStatsResponse = await res.json();
          if (isMounted) {
            setStats(data);
            setLoading(false);
          }
        } else {
          if (isMounted) setLoading(false);
        }
      } catch {
        if (isMounted) setLoading(false);
      }
    }

    fetchStats();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="hidden sm:flex items-center gap-1.5 text-xs text-stone-600">
      {/* GitHub Stars Indicator */}
      <div
        className="inline-flex items-center gap-1 px-2 py-1 rounded-md border border-stone-200/80 bg-white/70 shadow-xs font-mono select-none"
        title={stats && stats.stars > 0 ? `${stats.stars} GitHub Stars` : "GitHub Stars"}
        aria-label={stats && stats.stars > 0 ? `${stats.stars} GitHub Stars` : "GitHub Stars"}
      >
        <Star className="h-3.5 w-3.5 text-amber-500 fill-amber-500/20" />
        <span>{loading ? "…" : stats && stats.stars > 0 ? stats.stars : "—"}</span>
      </div>

      {/* GitHub Forks Indicator */}
      <div
        className="inline-flex items-center gap-1 px-2 py-1 rounded-md border border-stone-200/80 bg-white/70 shadow-xs font-mono select-none"
        title={stats && stats.forks > 0 ? `${stats.forks} GitHub Forks` : "GitHub Forks"}
        aria-label={stats && stats.forks > 0 ? `${stats.forks} GitHub Forks` : "GitHub Forks"}
      >
        <GitFork className="h-3.5 w-3.5 text-emerald-700" />
        <span>{loading ? "…" : stats && stats.forks > 0 ? stats.forks : "—"}</span>
      </div>
    </div>
  );
}
