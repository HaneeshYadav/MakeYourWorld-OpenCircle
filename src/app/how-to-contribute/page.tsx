import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/config/site";
import {
  BookOpen,
  GitPullRequest,
  AlertCircle,
  Layers,
  ExternalLink,
  CheckCircle2,
  HelpCircle,
  FolderOpen,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Contribute — Growing Worlds",
  description:
    "Step-by-step guide for students and beginners to make their first open-source contribution to Growing Worlds using existing paper assets.",
};

export default function HowToContributePage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 sm:px-6 space-y-12">
      {/* 1. Header */}
      <div className="space-y-4 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white/90 px-3.5 py-1 text-xs font-medium text-stone-700 shadow-sm">
          <BookOpen className="h-3.5 w-3.5 text-emerald-800" />
          <span>Beginner Contributor Guide</span>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl font-serif">
          How to Contribute to Growing Worlds 🌿
        </h1>
        <p className="text-base text-stone-600 leading-relaxed max-w-3xl">
          Growing Worlds is designed as your very first open-source contribution! You do{" "}
          <strong>NOT</strong> need to create new artwork. You simply select an existing
          reusable paper-cutout asset from the repository, register it in your assigned
          world, and place it in the diorama.
        </p>
      </div>

      {/* 2. Core Concept Distinction: Asset vs. Object vs. Placement */}
      <div className="rounded-2xl border border-stone-300 bg-white p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex items-center gap-2 text-stone-900">
          <Layers className="h-5 w-5 text-emerald-800" />
          <h2 className="text-xl font-bold font-serif">The 3 Core Concepts</h2>
        </div>
        <p className="text-xs text-stone-600">
          Before you write code, understanding these 3 terms makes your contribution effortless:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-xl border border-stone-200 bg-[#FAF8F5] p-4 space-y-2">
            <span className="font-mono text-[11px] font-bold uppercase text-emerald-800">
              1. Visual Asset (SVG)
            </span>
            <h3 className="font-bold text-stone-900 text-sm">Reusable Paper Stamp</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Existing artwork in <code>public/assets/worlds/&lt;world&gt;/</code>. You{" "}
              <strong>reuse</strong> this file. You do <em>not</em> need to draw or upload an SVG!
            </p>
          </div>

          <div className="rounded-xl border border-stone-200 bg-[#FAF8F5] p-4 space-y-2">
            <span className="font-mono text-[11px] font-bold uppercase text-emerald-800">
              2. Object Entry
            </span>
            <h3 className="font-bold text-stone-900 text-sm">Metadata & Attribution</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Declared in <code>src/data/worlds/&lt;world&gt;/objects.ts</code>. Connects your
              display name & GitHub username to the selected asset.
            </p>
          </div>

          <div className="rounded-xl border border-stone-200 bg-[#FAF8F5] p-4 space-y-2">
            <span className="font-mono text-[11px] font-bold uppercase text-emerald-800">
              3. World Placement
            </span>
            <h3 className="font-bold text-stone-900 text-sm">Position in Segment</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Declared in <code>src/data/worlds/&lt;world&gt;/placements.ts</code>. Specifies
              your assigned <code>segmentId</code> and coordinates <code>x, y (%)</code>.
            </p>
          </div>
        </div>
      </div>

      {/* 3. Minimum 2-Commit Workflow */}
      <div className="rounded-2xl border border-stone-300 bg-white p-6 sm:p-8 shadow-sm space-y-6">
        <h2 className="text-xl font-bold font-serif text-stone-900 flex items-center gap-2">
          <CheckCircle2 className="h-5 w-5 text-emerald-800" />
          <span>Your Minimum 2-Commit Workflow</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-emerald-900/20 bg-emerald-50/40 p-5 space-y-2">
            <span className="font-mono text-xs font-bold uppercase text-emerald-900">
              Commit 1: Register Object
            </span>
            <h3 className="font-bold text-stone-900 text-sm">
              Reference Existing Asset in objects.ts
            </h3>
            <p className="text-xs text-stone-700 leading-relaxed">
              Open <code>src/data/worlds/&lt;world&gt;/objects.ts</code>, reference an existing
              SVG file from <code>public/assets/worlds/&lt;world&gt;/</code>, and add your attribution (~1–5 lines).
            </p>
          </div>

          <div className="rounded-xl border border-emerald-900/20 bg-emerald-50/40 p-5 space-y-2">
            <span className="font-mono text-xs font-bold uppercase text-emerald-900">
              Commit 2: Place Object
            </span>
            <h3 className="font-bold text-stone-900 text-sm">
              Set Coordinates in placements.ts
            </h3>
            <p className="text-xs text-stone-700 leading-relaxed">
              Open <code>src/data/worlds/&lt;world&gt;/placements.ts</code>, assign your assigned{" "}
              <code>segmentId</code> and percentage coordinates <code>x, y (%)</code> (~1–5 lines).
            </p>
          </div>
        </div>

        {/* Flexible Commits Callout */}
        <div className="rounded-xl border border-stone-200 bg-[#FAF8F5] p-4 text-xs text-stone-700 space-y-1">
          <p className="font-bold text-stone-900">💡 What if I need another commit for a fix?</p>
          <p>
            You need a <strong>minimum of 2 commits</strong>. If you make 3, 4, or 5 commits to fix
            formatting, coordinates, or typos, that is <strong>100% fine and allowed</strong>! You do not
            need to squash your commits. CI validates your file boundaries and structure.
          </p>
        </div>
      </div>

      {/* 4. Visual 10-Step Walkthrough */}
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
              Claim an Open Good First Issue Slot
            </h3>
            <p className="text-xs text-stone-600">
              Browse our GitHub issues and find an unassigned <code>CONTRIB-SLOT #XX</code>.
              Comment: <code>Hi! I would like to work on this issue. Thank you! 🙌</code> and wait for maintainer assignment.
            </p>
          </div>

          <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2">
            <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-900 text-white text-xs">
                2
              </span>
              Fork, Clone & Branch off <code>dev</code>
            </h3>
            <p className="text-xs text-stone-600">
              Fork the repository on GitHub, clone locally, and create your branch starting with <code>contrib/</code> from <code>dev</code>:
            </p>
            <pre className="rounded-lg bg-stone-900 p-3 font-mono text-xs text-stone-100 overflow-x-auto">
              git checkout dev{"\n"}git pull upstream dev{"\n"}git checkout -b contrib/&lt;world-id&gt;-&lt;object-name&gt;
            </pre>
          </div>

          <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2">
            <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-900 text-white text-xs">
                3
              </span>
              Choose an Existing Asset & Make Commit 1
            </h3>
            <p className="text-xs text-stone-600">
              Browse <code>public/assets/worlds/&lt;world-id&gt;/</code> and choose an existing paper SVG.
              Register it in <code>src/data/worlds/&lt;world-id&gt;/objects.ts</code> and commit:
            </p>
            <pre className="rounded-lg bg-stone-900 p-3 font-mono text-xs text-stone-100 overflow-x-auto">
              {`git add src/data/worlds/<world-id>/objects.ts\ngit commit -m "feat: register <object-name> object"`}
            </pre>
          </div>

          <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2">
            <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-900 text-white text-xs">
                4
              </span>
              Place in Segment & Make Commit 2
            </h3>
            <p className="text-xs text-stone-600">
              Add your placement in <code>src/data/worlds/&lt;world-id&gt;/placements.ts</code> using your assigned <code>segmentId</code> and coordinates:
            </p>
            <pre className="rounded-lg bg-stone-900 p-3 font-mono text-xs text-stone-100 overflow-x-auto">
              {`git add src/data/worlds/<world-id>/placements.ts\ngit commit -m "feat: place <object-name> in <segment-id>"`}
            </pre>
          </div>

          <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2">
            <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-900 text-white text-xs">
                5
              </span>
              Run Checks & Visually Verify Locally
            </h3>
            <p className="text-xs text-stone-600">
              Run quality gates and view your paper cutout in your browser at <code>http://localhost:3000/worlds/&lt;world-id&gt;</code>:
            </p>
            <pre className="rounded-lg bg-stone-900 p-3 font-mono text-xs text-stone-100 overflow-x-auto">
              npm test && npm run lint && npm run typecheck && npm run build{"\n"}npm run dev
            </pre>
          </div>

          <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-2">
            <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-900 text-white text-xs">
                6
              </span>
              Push & Submit PR to <code>dev</code>
            </h3>
            <p className="text-xs text-stone-600">
              Push your branch to your fork and open a Pull Request targeting <strong><code>dev</code></strong> (never <code>main</code>). Include <code>Closes #&lt;ISSUE_NUMBER&gt;</code> in the description!
            </p>
            <pre className="rounded-lg bg-stone-900 p-3 font-mono text-xs text-stone-100 overflow-x-auto">
              git push -u origin contrib/&lt;world-id&gt;-&lt;object-name&gt;
            </pre>
          </div>
        </div>
      </div>

      {/* 5. What You Actually Change vs What NOT to Change */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-xl border border-emerald-900/30 bg-white p-5 space-y-2 shadow-sm">
          <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm">
            <FolderOpen className="h-4 w-4" />
            <span>Files You Actually Modify</span>
          </div>
          <ul className="text-xs text-stone-700 space-y-1 list-disc list-inside">
            <li><code>src/data/worlds/&lt;world-id&gt;/objects.ts</code> (Commit 1)</li>
            <li><code>src/data/worlds/&lt;world-id&gt;/placements.ts</code> (Commit 2)</li>
          </ul>
        </div>

        <div className="rounded-xl border border-amber-900/20 bg-amber-50/80 p-5 space-y-2">
          <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
            <AlertCircle className="h-4 w-4" />
            <span>Please Do NOT Modify These</span>
          </div>
          <p className="text-xs text-amber-950 leading-relaxed">
            Do not modify other worlds, engine code (<code>src/engine/*</code>), schemas, workflows (<code>.github/*</code>), package dependencies, or existing SVG files in <code>public/assets/</code>.
          </p>
        </div>
      </div>

      {/* 6. If CI Fails Troubleshooting */}
      <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm space-y-4">
        <div className="flex items-center gap-2 text-stone-900">
          <HelpCircle className="h-5 w-5 text-emerald-800" />
          <h2 className="text-lg font-bold font-serif">If CI Fails (Troubleshooting)</h2>
        </div>

        <div className="space-y-3 text-xs text-stone-700">
          <div className="p-3 rounded-lg bg-stone-50 border border-stone-200">
            <span className="font-bold text-stone-900">❌ Fewer than 2 commits:</span>{" "}
            Make sure your changes are split across at least 2 commits (Commit 1 for <code>objects.ts</code>, Commit 2 for <code>placements.ts</code>). If you made only 1 commit, make a small adjustment and commit again.
          </div>
          <div className="p-3 rounded-lg bg-stone-50 border border-stone-200">
            <span className="font-bold text-stone-900">❌ Unexpected asset modification:</span>{" "}
            You modified an SVG file in <code>public/assets/</code>. Restore the file with <code>git checkout -- public/assets/</code> and simply reference it from <code>objects.ts</code>.
          </div>
          <div className="p-3 rounded-lg bg-stone-50 border border-stone-200">
            <span className="font-bold text-stone-900">❌ Forbidden file modified:</span>{" "}
            Your PR modified files outside your assigned world. Revert changes to unrelated files so that only your assigned <code>objects.ts</code> and <code>placements.ts</code> are touched.
          </div>
        </div>
      </div>

      {/* 7. CTA Button */}
      <div className="text-center pt-2">
        <a
          href={SITE_CONFIG.issuesUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button size="lg" className="gap-2 bg-emerald-900 text-white hover:bg-emerald-800 shadow-md">
            <GitPullRequest className="h-4 w-4" />
            <span>Find Open Good First Issues</span>
            <ExternalLink className="h-3.5 w-3.5 opacity-70" />
          </Button>
        </a>
      </div>
    </div>
  );
}
