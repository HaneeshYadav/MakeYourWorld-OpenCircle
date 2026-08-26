import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight, BookOpen } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center px-4 py-16 text-center">
      <div className="mx-auto max-w-2xl space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm">
          <Sparkles className="h-3.5 w-3.5 text-accent" />
          <span>Foundation Ready</span>
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          Welcome to <span className="text-primary">Growing Worlds</span>
        </h1>
        <p className="text-lg text-muted-foreground">
          A collective 2D paper-collage diorama built progressively through authentic
          micro-contributions on GitHub.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link href="/docs">
            <Button variant="outline" className="gap-2">
              <BookOpen className="h-4 w-4" />
              <span>Read Architecture Docs</span>
            </Button>
          </Link>
          <a
            href="https://github.com/ShenSandaru/OpenCircle-Test"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="gap-2">
              <span>View GitHub Repo</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
