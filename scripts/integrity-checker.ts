import fs from "node:fs";
import path from "node:path";
import type { World } from "../src/schemas";

export interface IntegrityCheckOptions {
  rootDir?: string;
  expectedSegmentsCount?: number;
}

export interface IntegrityAuditResult {
  valid: boolean;
  errors: string[];
  totalWorldsChecked: number;
  totalObjectsChecked: number;
  totalPlacementsChecked: number;
}

/**
 * Validates relational integrity across all worlds:
 * 1. Checks that each world has exactly the expected number of segments.
 * 2. Checks that every declared object has an existing SVG/PNG asset file on disk.
 * 3. Checks that every placement references a declared object ID.
 * 4. Checks that every placement references a declared segment ID.
 */
export function checkRepositoryIntegrity(
  worlds: World[],
  options: IntegrityCheckOptions = {}
): IntegrityAuditResult {
  const rootDir = options.rootDir || process.cwd();
  const expectedSegmentsCount = options.expectedSegmentsCount ?? 3;
  const errors: string[] = [];

  let totalObjects = 0;
  let totalPlacements = 0;

  for (const world of worlds) {
    // 1. Check segments count
    if (world.segments.length !== expectedSegmentsCount) {
      errors.push(
        `World '${world.name}' (${world.id}) has ${world.segments.length} segment(s), but exactly ${expectedSegmentsCount} are expected.`
      );
    }

    // 2. Check objects asset existence
    const objectIds = new Set<string>();
    for (const obj of world.objects) {
      totalObjects++;
      if (objectIds.has(obj.id)) {
        errors.push(
          `Duplicate object ID '${obj.id}' found in world '${world.name}' (${world.id}/objects.ts). Object IDs must be unique within a world.`
        );
      }
      objectIds.add(obj.id);

      const assetRelative = obj.asset.startsWith("/") ? obj.asset.slice(1) : obj.asset;
      const diskPath = path.join(rootDir, "public", assetRelative);
      if (!fs.existsSync(diskPath)) {
        errors.push(
          `Asset not found on disk: '${obj.asset}' for object '${obj.id}' in '${world.id}/objects.ts'. Please ensure the asset file exists under public/assets/worlds/${world.id}/.`
        );
      }
    }

    // 3. Check placements
    const segmentIds = new Set(world.segments.map((s) => s.id));
    for (const placement of world.placements) {
      totalPlacements++;
      if (!objectIds.has(placement.objectId)) {
        errors.push(
          `Placement references undeclared objectId '${placement.objectId}' in '${world.id}/placements.ts'. You must first register this object in objects.ts before placing it.`
        );
      }
      if (!segmentIds.has(placement.segmentId)) {
        errors.push(
          `Placement references undeclared segmentId '${placement.segmentId}' in '${world.id}/placements.ts'. Available segments for this world are: ${Array.from(segmentIds).join(", ")}.`
        );
      }
    }
  }

  return {
    valid: errors.length === 0,
    errors,
    totalWorldsChecked: worlds.length,
    totalObjectsChecked: totalObjects,
    totalPlacementsChecked: totalPlacements,
  };
}
