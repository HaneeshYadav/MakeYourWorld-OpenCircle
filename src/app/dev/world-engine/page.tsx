import { World } from "@/engine";
import { growingForestWorld } from "@/data/worlds";
import { Trees, Sparkles } from "lucide-react";

export default function DevWorldEnginePage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-8 space-y-6">
      {/* Development Prototype Banner */}
      <div className="flex items-center justify-between gap-4 rounded-xl border border-emerald-900/20 bg-emerald-950/5 p-4 text-xs text-emerald-900 dark:border-emerald-500/20 dark:bg-emerald-950/30 dark:text-emerald-300 shadow-sm backdrop-blur-sm">
        <div className="flex items-center gap-2.5">
          <Trees className="h-4 w-4 text-emerald-800 dark:text-emerald-400 shrink-0" />
          <span>
            <strong>Growing Forest Paper-Collage Prototype:</strong> Live 2D diorama
            powered by the shared engine. Populated via declarative contributor data.
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-1.5 font-mono text-[11px] bg-emerald-900/10 dark:bg-emerald-400/10 px-2.5 py-1 rounded-full shrink-0">
          <Sparkles className="h-3 w-3 text-amber-600 dark:text-amber-400" />
          <span>Phase 5 Prototype</span>
        </div>
      </div>

      {/* Shared World Engine Component with Growing Forest Data */}
      <World world={growingForestWorld} />
    </div>
  );
}
