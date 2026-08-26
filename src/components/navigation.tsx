import Link from "next/link";
import { Trees, Compass, BookOpen, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/config/site";

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

        {/* Navigation Links */}
        <nav className="flex items-center gap-1 sm:gap-4 text-sm font-medium text-stone-600">
          <Link
            href="/worlds"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors hover:text-stone-900 hover:bg-stone-200/50"
          >
            <Compass className="h-4 w-4 text-emerald-800" />
            <span>Worlds</span>
          </Link>
          <Link
            href="/how-to-contribute"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors hover:text-stone-900 hover:bg-stone-200/50"
          >
            <BookOpen className="h-4 w-4 text-emerald-800" />
            <span className="hidden xs:inline">How to</span> Contribute
          </Link>
          <a
            href={SITE_CONFIG.repositoryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1"
          >
            <Button
              variant="outline"
              size="sm"
              className="gap-1.5 border-stone-300 bg-white/80 text-stone-800 hover:bg-stone-100"
            >
              <Code2 className="h-4 w-4 text-stone-600" />
              <span>GitHub</span>
            </Button>
          </a>
        </nav>
      </div>
    </header>
  );
}
