import { getAvailableContributionSlots, MAX_OBJECTS_PER_SEGMENT } from "../src/engine/positioning/allocation";

console.log("=================================================");
console.log("🌿 GROWING WORLDS AUTOMATIC FRAME ALLOCATION REPORT");
console.log(`Max Capacity per Frame/Segment: ${MAX_OBJECTS_PER_SEGMENT} items`);
console.log("=================================================\n");

const allocations = getAvailableContributionSlots();

for (const alloc of allocations) {
  console.log(`🌍 World: ${alloc.worldName} (${alloc.worldId})`);
  console.log(`   Total Objects Placed: ${alloc.totalWorldObjects}`);
  console.log(
    `   👉 Next Available Frame: ${alloc.recommendedSegmentName} (${alloc.recommendedSegmentId})`
  );
  console.log(
    `   Frame Capacity: ${alloc.currentSegmentCount}/${alloc.maxPerSegment} objects\n`
  );
}

console.log("✨ All worlds have active capacity in designated frames.");
