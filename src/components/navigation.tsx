import Link from "next/link";
import { Globe, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-bold tracking-tight">
          <Globe className="h-5 w-5 text-primary" />
          <span>Growing Worlds</span>
        </Link>
        <nav className="flex items-center gap-4 text-sm font-medium">
          <Link
            href="/worlds"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Explore Worlds
          </Link>
          <a
            href="https://github.com/ShenSandaru/OpenCircle-Test"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <Button variant="ghost" size="sm" className="gap-1.5">
              <Code2 className="h-4 w-4" />
              <span>GitHub</span>
            </Button>
          </a>
        </nav>
      </div>
    </header>
  );
}
