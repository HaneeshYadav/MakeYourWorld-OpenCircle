import type { WorldObject as WorldObjectDef, ObjectPlacement } from "@/schemas";
import { calculatePositionStyle } from "./positioning/math";
import { ContributorLabel } from "./ContributorLabel";

export interface WorldObjectProps {
  objectDef: WorldObjectDef;
  placement: ObjectPlacement;
}

/**
 * WorldObject renders a single contributor object in the world.
 * Calculates responsive normalized CSS coordinates and positions the ContributorLabel automatically beneath it.
 */
export function WorldObject({ objectDef, placement }: WorldObjectProps) {
  const style = calculatePositionStyle(
    placement.x,
    placement.y,
    placement.scale,
    placement.rotation
  );

  return (
    <div
      className="absolute flex flex-col items-center pointer-events-auto transition-transform duration-200"
      style={{
        left: style.left,
        top: style.top,
        transform: style.transform,
        zIndex: style.zIndex,
      }}
      data-testid={`world-object-${objectDef.id}`}
      data-object-id={objectDef.id}
    >
      <div className="relative flex items-center justify-center">
        {/* Render SVG / PNG / WebP asset or placeholder if missing */}
        <img
          src={objectDef.asset}
          alt={objectDef.id}
          className="h-16 w-16 object-contain drop-shadow-md transition-transform hover:scale-105"
          onError={(e) => {
            // Development fallback placeholder
            const target = e.currentTarget;
            target.style.display = "none";
            const fallback = target.parentElement?.querySelector(".fallback-placeholder");
            if (fallback) {
              (fallback as HTMLElement).style.display = "flex";
            }
          }}
        />
        {/* Development visual fallback */}
        <div
          className="fallback-placeholder hidden h-16 w-16 items-center justify-center rounded-lg border border-dashed border-foreground/30 bg-card/80 p-2 text-center text-xs font-mono font-medium text-foreground shadow-sm"
          title={objectDef.id}
        >
          {objectDef.id.includes("tree") ? "🌲" : objectDef.id.includes("bird") ? "🐦" : "📦"}
        </div>
      </div>
      <ContributorLabel contributor={objectDef.contributor} />
    </div>
  );
}
