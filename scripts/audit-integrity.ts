import { implementedWorlds } from "../src/data/worlds";
import { checkRepositoryIntegrity } from "./integrity-checker";

console.log("=================================================");
console.log("🛡️ RUNNING REPOSITORY DATA & ASSET INTEGRITY AUDIT");
console.log("=================================================\n");

const result = checkRepositoryIntegrity(implementedWorlds);

console.log(`Checked ${result.totalWorldsChecked} worlds, ${result.totalObjectsChecked} objects, and ${result.totalPlacementsChecked} placements.\n`);

if (!result.valid) {
  console.error("❌ Integrity Audit Failed with the following issues:\n");
  result.errors.forEach((err, idx) => {
    console.error(`  ${idx + 1}. ${err}`);
  });
  console.error("\nPlease correct the items above before proceeding with your PR.");
  process.exit(1);
} else {
  console.log("✅ Integrity Audit Succeeded: All world assets, objects, segments, and placements are relationally sound.");
  process.exit(0);
}
