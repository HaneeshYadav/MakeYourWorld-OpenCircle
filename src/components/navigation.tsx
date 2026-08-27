import Link from "next/link";
import { Trees, Compass, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/config/site";
import { CommunityStats } from "./CommunityStats";

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-stone-200/80 bg-[#FAF8F5]/90 backdrop-blur-md">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Brand Logo & Name */}
        <Link
          href="/"
          className="flex items-center gap-2.5 font-bold tracking-tight text-stone-900 transition-colors hover:text-emerald-900"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-emerald-800/30 bg-emerald-900 text-white shadow-sm">
            <Trees className="h-4 w-4" />
          </div>
          <span className="font-serif text-lg tracking-tight">Growing Worlds</span>
        </Link>

        {/* Navigation Links & Community Indicators */}
        <nav className="flex items-center gap-1 sm:gap-3 text-sm font-medium text-stone-600">
          <Link
            href="/worlds"
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg transition-colors hover:text-stone-900 hover:bg-stone-200/50"
          >
            <Compass className="h-4 w-4 text-emerald-800" />
            <span>Worlds</span>
          </Link>
          <Link
            href="/how-to-contribute"
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg transition-colors hover:text-stone-900 hover:bg-stone-200/50"
          >
            <BookOpen className="h-4 w-4 text-emerald-800" />
            <span className="hidden xs:inline">How to</span> Contribute
          </Link>

          {/* Live GitHub Stars & Forks Indicators */}
          <CommunityStats />

          {/* GitHub Repository Link Button */}
          <a
            href={SITE_CONFIG.repositoryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1"
            aria-label="View source repository on GitHub"
            title="View on GitHub"
          >
            <Button
              variant="outline"
              size="sm"
              className="h-8 w-8 p-0 border-stone-300 bg-white/80 text-stone-800 hover:bg-stone-100 hover:text-stone-950 shadow-xs"
            >
              <svg
                className="h-4 w-4 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
            </Button>
          </a>
        </nav>
      </div>
    </header>
  );
}
