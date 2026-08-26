import { World } from "@/engine";
import { growingForestWorld } from "@/data/worlds";

export default function DevWorldEnginePage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-8">
      <div className="mb-6 rounded-lg border border-amber-500/30 bg-amber-500/10 p-3 text-xs text-amber-700 dark:text-amber-300">
        <strong>DEVELOPMENT PROTOTYPE:</strong> Shared 2D World Engine test harness.
        Renders declarative data without hardcoded object logic.
      </div>
      <World world={growingForestWorld} />
    </div>
  );
}
