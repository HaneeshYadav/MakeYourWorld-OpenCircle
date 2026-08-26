import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/config/site";
import {
  BookOpen,
  GitPullRequest,
  AlertCircle,
  Layers,
  ExternalLink,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Contribute — Growing Worlds",
  description:
    "Step-by-step guide for students and beginners to make their first two-commit open-source contribution to Growing Worlds.",
};

export default function HowToContributePage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 sm:px-6 space-y-12">
      {/* Header */}
      <div className="space-y-4 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white/90 px-3 py-1 text-xs font-medium text-stone-700">
          <BookOpen className="h-3.5 w-3.5 text-emerald-800" />
          <span>Beginner Contributor Guide</span>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl font-serif">
          How to Contribute to Growing Worlds 🌿
        </h1>
        <p className="text-base text-stone-600">
          Growing Worlds is designed as your very first open-source contribution. Every
          contribution is intentionally bite-sized (~1–10 lines of code) and split into two
          distinct commits.
        </p>
      </div>

      {/* 2-Commit Core Lifecycle */}
      <div className="rounded-2xl border border-stone-300 bg-white p-6 sm:p-8 shadow-sm space-y-6">
        <h2 className="text-xl font-bold font-serif text-stone-900 flex items-center gap-2">
          <Layers className="h-5 w-5 text-emerald-800" />
          <span>The Two-Commit Process</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-stone-200 bg-[#FAF8F5] p-5 space-y-2">
            <span className="font-mono text-xs font-bold uppercase text-emerald-800">
              Commit 1: Asset & Object Data
            </span>
            <h3 className="font-bold text-stone-900 text-sm">
              Add Asset & Register Object
            </h3>
            <p className="text-xs text-stone-600">
              Add your SVG file in <code>public/assets/worlds/&lt;world&gt;/</code> and
              declare ~1–5 lines in <code>src/data/worlds/&lt;world&gt;/objects.ts</code>.
            </p>
          </div>

          <div className="rounded-xl border border-stone-200 bg-[#FAF8F5] p-5 space-y-2">
            <span className="font-mono text-xs font-bold uppercase text-emerald-800">
              Commit 2: World Placement
            </span>
            <h3 className="font-bold text-stone-900 text-sm">
              Place in Segment & Attribution
            </h3>
            <p className="text-xs text-stone-600">
              Assign your <code>segmentId</code> and coordinates <code>x, y (%)</code> in{" "}
              <code>src/data/worlds/&lt;world&gt;/placements.ts</code>.
            </p>
          </div>
        </div>
      </div>

      {/* Step-by-Step Instructions */}
      <div className="space-y-6">
        <h2 className="text-xl font-bold font-serif text-stone-900">
          Step-by-Step Walkthrough
        </h2>

        <div className="space-y-4">
          <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2">
            <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-900 text-white text-xs">
                1
              </span>
              Claim a Good First Issue Slot
            </h3>
            <p className="text-xs text-stone-600">
              Visit the GitHub issue tracker and find an open contribution slot. Comment{" "}
              <code>I would like to work on this!</code> and wait for maintainer
              assignment.
            </p>
          </div>

          <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2">
            <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-900 text-white text-xs">
                2
              </span>
              Fork, Clone & Branch off <code>dev</code>
            </h3>
            <pre className="rounded-lg bg-stone-900 p-3 font-mono text-xs text-stone-100 overflow-x-auto">
              git checkout dev{"\n"}git pull upstream dev{"\n"}git checkout -b
              contrib/forest-my-object
            </pre>
          </div>

          <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2">
            <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-900 text-white text-xs">
                3
              </span>
              Make Commit 1 & Test
            </h3>
            <p className="text-xs text-stone-600">
              Save your paper-cutout SVG asset and register your object in{" "}
              <code>objects.ts</code>. Run <code>npm test</code> to verify.
            </p>
          </div>

          <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2">
            <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-900 text-white text-xs">
                4
              </span>
              Make Commit 2 & Visually Verify
            </h3>
            <p className="text-xs text-stone-600">
              Set your assigned <code>segmentId</code> and coordinates in{" "}
              <code>placements.ts</code>. Run <code>npm run dev</code> and verify your
              object at <code>http://localhost:3000/worlds/growing-forest</code>!
            </p>
          </div>

          <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2">
            <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-900 text-white text-xs">
                5
              </span>
              Submit Your Pull Request
            </h3>
            <p className="text-xs text-stone-600">
              Push your branch and open a PR against the <code>dev</code> branch. Keep
              the two commits separate (do not squash them).
            </p>
          </div>
        </div>
      </div>

      {/* Contributor Boundaries Notice */}
      <div className="rounded-xl border border-amber-900/20 bg-amber-50/80 p-5 space-y-2">
        <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
          <AlertCircle className="h-4 w-4" />
          <span>Files Contributors Modify</span>
        </div>
        <p className="text-xs text-amber-950">
          Contributors only edit <code>public/assets/worlds/&lt;world&gt;/*</code>,{" "}
          <code>objects.ts</code>, and <code>placements.ts</code>. Never modify engine
          components, schemas, or application configuration.
        </p>
      </div>

      {/* CTA Button */}
      <div className="text-center pt-4">
        <a
          href={SITE_CONFIG.issuesUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button size="lg" className="gap-2 bg-emerald-900 text-white hover:bg-emerald-800">
            <GitPullRequest className="h-4 w-4" />
            <span>Find Open Good First Issues</span>
            <ExternalLink className="h-3.5 w-3.5 opacity-70" />
          </Button>
        </a>
      </div>
    </div>
  );
}
