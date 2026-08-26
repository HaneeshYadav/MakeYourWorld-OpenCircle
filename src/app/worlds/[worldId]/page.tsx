import { notFound } from "next/navigation";
import { World } from "@/engine";
import { worldsMap } from "@/data/worlds";
import { SITE_CONFIG } from "@/config/site";
import { Button } from "@/components/ui/button";
import { GitPullRequest, ArrowLeft, Info } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export interface WorldPageProps {
  params: Promise<{
    worldId: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(worldsMap).map((worldId) => ({
    worldId,
  }));
}

export async function generateMetadata({ params }: WorldPageProps): Promise<Metadata> {
  const { worldId } = await params;
  const world = worldsMap[worldId];

  if (!world) {
    return {
      title: "World Not Found — Growing Worlds",
    };
  }

  return {
    title: `${world.name} — Growing Worlds`,
    description: world.description,
  };
}

export default async function WorldPage({ params }: WorldPageProps) {
  const { worldId } = await params;
  const world = worldsMap[worldId];

  if (!world) {
    notFound();
  }

  return (
    <div className="container mx-auto max-w-5xl px-4 py-8 sm:py-12 space-y-6">
      {/* Top Breadcrumb & Action Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <Link
          href="/worlds"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-stone-600 hover:text-stone-900 transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Back to Worlds</span>
        </Link>

        <a
          href={SITE_CONFIG.issuesUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            size="sm"
            className="gap-2 bg-emerald-900 text-white hover:bg-emerald-800 shadow-sm"
          >
            <GitPullRequest className="h-3.5 w-3.5" />
            <span>Add to this World (Good First Issue)</span>
          </Button>
        </a>
      </div>

      {/* Main Shared 2D World Engine Render */}
      <World world={world} />

      {/* Subtle Information Note */}
      <div className="flex items-start gap-3 rounded-xl border border-stone-200/80 bg-white/70 p-4 text-xs text-stone-600 backdrop-blur-sm">
        <Info className="h-4 w-4 text-emerald-800 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <p className="font-semibold text-stone-900">
            About this living paper diorama
          </p>
          <p>
            Every object and creature above was contributed by an open-source student.
            To place your own paper craft in an active segment, claim a Good First Issue
            slot on GitHub!
          </p>
        </div>
      </div>
    </div>
  );
}
