import type {
  WorldSegment as WorldSegmentDef,
  WorldObject as WorldObjectDef,
  ObjectPlacement,
} from "@/schemas";
import { WorldBackground } from "./WorldBackground";
import { WorldObject } from "./WorldObject";

export interface WorldSegmentProps {
  segment: WorldSegmentDef;
  objects: WorldObjectDef[];
  placements: ObjectPlacement[];
}

/**
 * WorldSegment renders a single background window and the world objects placed inside it.
 */
export function WorldSegment({ segment, objects, placements }: WorldSegmentProps) {
  const objectsMap = new Map(objects.map((obj) => [obj.id, obj]));

  return (
    <div
      className="relative h-full w-full overflow-hidden"
      data-testid={`world-segment-${segment.id}`}
      data-segment-id={segment.id}
    >
      {/* 1. Backdrop Layer */}
      <WorldBackground background={segment.background} />

      {/* 2. Placed Objects Layer */}
      <div className="relative h-full w-full z-10 pointer-events-none">
        {placements.map((placement, idx) => {
          const objectDef = objectsMap.get(placement.objectId);
          if (!objectDef) return null;

          return (
            <WorldObject
              key={`${placement.objectId}-${idx}`}
              objectDef={objectDef}
              placement={placement}
            />
          );
        })}
      </div>
    </div>
  );
}
