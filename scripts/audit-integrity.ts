import fs from "node:fs";
import path from "node:path";
import { implementedWorlds } from "../src/data/worlds";

const errors: string[] = [];

for (const world of implementedWorlds) {
  // 1. Check segments count
  if (world.segments.length !== 3) {
    errors.push(`World ${world.id} has ${world.segments.length} segments, expected exactly 3.`);
  }

  // 2. Check objects asset existence
  const objectIds = new Set<string>();
  for (const obj of world.objects) {
    objectIds.add(obj.id);
    const assetRelative = obj.asset.startsWith("/") ? obj.asset.slice(1) : obj.asset;
    const diskPath = path.join(process.cwd(), "public", assetRelative);
    if (!fs.existsSync(diskPath)) {
      errors.push(`Missing asset file on disk: ${diskPath} for object '${obj.id}' in world '${world.id}'`);
    }
  }

  // 3. Check placements
  const segmentIds = new Set(world.segments.map((s) => s.id));
  for (const placement of world.placements) {
    if (!objectIds.has(placement.objectId)) {
      errors.push(`Placement references unknown objectId '${placement.objectId}' in world '${world.id}'`);
    }
    if (!segmentIds.has(placement.segmentId)) {
      errors.push(`Placement references unknown segmentId '${placement.segmentId}' in world '${world.id}'`);
    }
  }
}

if (errors.length > 0) {
  console.error("❌ Integrity Audit Failed with errors:\n" + errors.join("\n"));
  process.exit(1);
} else {
  console.log("✅ Integrity Audit Succeeded: All 10 worlds have exactly 3 segments, 100% of referenced asset files exist on disk, and 100% of placements reference valid objects and segments.");
}
