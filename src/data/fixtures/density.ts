import type { WorldObject, ObjectPlacement, World } from "@/schemas";
import { forestSegments } from "@/data/worlds/growing-forest/segments";
import { universeSegments } from "@/data/worlds/growing-universe/segments";

/**
 * Helper to generate synthetic test objects and placements for density & capacity testing.
 */
export function generateDensityFixture(
  worldId: "growing-forest" | "growing-universe",
  segmentId: string,
  count: number
): World {
  const isForest = worldId === "growing-forest";

  const sampleForestAssets = [
    "/assets/worlds/growing-forest/demo-pine-tree.svg",
    "/assets/worlds/growing-forest/demo-song-bird.svg",
    "/assets/worlds/growing-forest/demo-woodland-flower.svg",
    "/assets/worlds/growing-forest/demo-mossy-rock.svg",
    "/assets/worlds/growing-forest/demo-forest-deer.svg",
    "/assets/worlds/growing-forest/student-butterfly.svg",
  ];

  const sampleUniverseAssets = [
    "/assets/worlds/growing-universe/demo-paper-planet.svg",
    "/assets/worlds/growing-universe/demo-paper-satellite.svg",
    "/assets/worlds/growing-universe/demo-crescent-moon.svg",
    "/assets/worlds/growing-universe/demo-paper-comet.svg",
    "/assets/worlds/growing-universe/demo-paper-asteroid.svg",
  ];

  const assetPool = isForest ? sampleForestAssets : sampleUniverseAssets;

  const objects: WorldObject[] = [];
  const placements: ObjectPlacement[] = [];

  for (let i = 0; i < count; i++) {
    const objectId = `density-${worldId}-${i + 1}`;
    const asset = assetPool[i % assetPool.length];

    objects.push({
      id: objectId,
      asset,
      contributor: {
        displayName: `Dev Student ${i + 1}`,
        githubUsername: `dev-student-${i + 1}`,
      },
    });

    // Distribute across natural ground/sky coordinates with pseudo-random seed
    const col = i % 8;
    const row = Math.floor(i / 8);

    // Forest coordinates focus on ground terraces (y: 35% - 88%), Universe spans full canvas (y: 15% - 85%)
    const xBase = 12 + col * 11 + ((i * 7) % 6);
    const yBase = isForest
      ? 35 + row * 12 + ((i * 13) % 10)
      : 18 + row * 15 + ((i * 11) % 12);

    const x = Math.min(Math.max(xBase, 5), 95);
    const y = Math.min(Math.max(yBase, 15), 90);

    // Varied scales: small (0.7), normal (1.0), large (1.3)
    const scale = 0.7 + ((i * 3) % 7) * 0.1;
    const rotation = ((i * 5) % 11) - 5; // -5 to +5 degrees

    placements.push({
      objectId,
      segmentId,
      x: Number(x.toFixed(1)),
      y: Number(y.toFixed(1)),
      scale: Number(scale.toFixed(2)),
      rotation,
    });
  }

  return {
    id: `density-${worldId}`,
    name: `${isForest ? "Forest" : "Universe"} Density Test (${count} Objects)`,
    description: `Development fixture testing visual crowding with ${count} contributor objects.`,
    theme: {
      primaryColor: isForest ? "#1E3A2F" : "#4C1D95",
    },
    segments: isForest ? forestSegments : universeSegments,
    objects,
    placements,
  };
}
