/**
 * Pure parsing and normalization helper module for the Growing Worlds issue lifecycle.
 * Provides deterministic extraction of Issue Form fields, object normalization,
 * branch calculation, and comment generation.
 */

export interface ParsedIssueSlot {
  rawWorld: string | null;
  worldName: string;
  worldId: string;
  rawSlot: string | null;
  slotFormatted: string;
  rawSegment: string | null;
  segmentId: string;
  rawCategory: string | null;
  rawCustomObject: string | null;
  objectName: string;
  normalizedTitle: string;
  branchName: string;
}

/**
 * Extracts a section value from an Issue Form body given one or more keyword identifiers.
 * Matches exact headers such as "### 🌍 Target World", "### Target World", "## Target World", etc.
 */
export function extractIssueFormField(body: string, keywords: string[]): string | null {
  if (!body) return null;

  for (const keyword of keywords) {
    // Matches heading lines containing the keyword, followed by the content until the next heading or separator
    const regex = new RegExp(
      `(?:^|\\n)#{1,4}\\s*[^\\r\\n]*?${escapeRegex(keyword)}[^\\r\\n]*[\\r\\n]+([\\s\\S]*?)(?=(?:\\n#{1,4}\\s+|\\n---|\\n\\*\\*|$))`,
      "i"
    );
    const match = body.match(regex);
    if (match && match[1]) {
      const lines = match[1]
        .split("\n")
        .map((l) => l.trim())
        .filter((l) => l.length > 0 && !l.startsWith(">"));

      if (lines.length > 0) {
        const firstLine = lines[0];
        if (firstLine !== "_No response_" && firstLine !== "No response" && firstLine !== "None") {
          return firstLine;
        }
      }
    }
  }

  // Fallback for list style / key-value style markdown (e.g. "- **Target World**: Growing Forest")
  for (const keyword of keywords) {
    const listRegex = new RegExp(
      `(?:^|\\n)[-*]\\s*\\*\\*[^\\r\\n]*?${escapeRegex(keyword)}[^\\r\\n]*?\\*\\*:\\s*` +
        `(?:\\[e\\.g\\.,?\\s*)?([^\\]\\r\\n]+?)(?:\\])?(?=[\\r\\n]|$)`,
      "i"
    );
    const match = body.match(listRegex);
    if (match && match[1]) {
      const val = match[1].trim();
      if (val && val !== "_No response_" && val !== "No response") {
        return val;
      }
    }
  }

  return null;
}

function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Parses and normalizes raw issue body text into structured metadata.
 */
export function parseIssueSlotBody(body: string): ParsedIssueSlot {
  const rawWorld = extractIssueFormField(body, ["Target World", "world"]);
  const rawSlot = extractIssueFormField(body, ["Contribution Slot Identifier", "Contribution Slot", "slot_id", "slot"]);
  const rawSegment = extractIssueFormField(body, ["Assigned World Segment ID", "Assigned World Segment", "target_segment", "segment"]);
  const rawCategory = extractIssueFormField(body, ["Suggested Object Category & Concept", "Suggested Object Category", "suggested_category", "category"]);
  const rawCustomObject = extractIssueFormField(body, ["Custom Object Name", "custom_object_name"]);

  // 1. World Parsing
  let worldName = "Growing Forest";
  let worldId = "growing-forest";
  if (rawWorld) {
    // Example: "Growing Forest (growing-forest)" -> name: "Growing Forest", id: "growing-forest"
    const idMatch = rawWorld.match(/\(([a-z0-9-]+)\)/i);
    if (idMatch) {
      worldId = idMatch[1].toLowerCase();
    }
    worldName = rawWorld.replace(/\s*\([^)]*\)/, "").trim() || "Growing Forest";
  }

  // 2. Slot Parsing
  let slotFormatted = "CONTRIB-SLOT #01";
  if (rawSlot) {
    const numMatch = rawSlot.match(/(\d+)/);
    if (numMatch) {
      slotFormatted = `CONTRIB-SLOT #${numMatch[1].padStart(2, "0")}`;
    }
  }

  // 3. Segment Parsing
  let segmentId = "forest-01";
  if (rawSegment) {
    // Example: "forest-01 (Ancient Canopy)" -> "forest-01"
    const segmentMatch = rawSegment.match(/([a-z0-9]+-[0-9]+)/i) || rawSegment.match(/([a-z0-9-]+)/i);
    if (segmentMatch) {
      segmentId = segmentMatch[1].toLowerCase();
    }
  }

  // 4. Object Name Parsing
  // Priority: Custom Object Name -> Suggested Category / Concept
  let objectName = "Object";
  if (rawCustomObject && rawCustomObject.trim() !== "") {
    // Example: "Golden Dragonfly (woodland fauna)" -> "Golden Dragonfly"
    objectName = rawCustomObject.replace(/\s*\([^)]*\)/, "").trim();
  } else if (rawCategory && rawCategory.trim() !== "") {
    // Example: "🌲 Forest: Butterfly (Woodland Wildlife / Fauna)" -> "Butterfly"
    // Remove emoji
    let cleaned = rawCategory.replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{26FF}]/gu, "").trim();
    if (cleaned.includes(":")) {
      cleaned = cleaned.split(":")[1].trim();
    }
    cleaned = cleaned.replace(/\s*\([^)]*\)/, "").trim();
    if (cleaned) {
      objectName = cleaned;
    }
  }

  // 5. Final Normalized Title
  const normalizedTitle = `[Good First Issue] 🌱 Add ${objectName} to ${worldName} — ${segmentId} (${slotFormatted})`;

  // 6. Branch Name
  // contrib/<world-id>-<kebab-object-name>
  const objectSlug = objectName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  const branchName = `contrib/${worldId}-${objectSlug || "object"}`;

  return {
    rawWorld,
    worldName,
    worldId,
    rawSlot,
    slotFormatted,
    rawSegment,
    segmentId,
    rawCategory,
    rawCustomObject,
    objectName,
    normalizedTitle,
    branchName,
  };
}

/**
 * Builds the unique onboarding comment with an idempotency marker to prevent duplicate comments.
 */
export function buildOnboardingComment(issueNumber: number, assignee: string, slot: ParsedIssueSlot): string {
  const marker = `<!-- growing-worlds:onboarding:${issueNumber}:${assignee} -->`;

  return `${marker}
## 👋 Welcome @${assignee}! You have been assigned to this slot! 🎉

We are excited for your contribution to **${slot.worldName}**! Here is a quick reference for your next steps:

### 📋 Your Contribution Details
- **Assigned World**: \`${slot.worldName}\` (\`${slot.worldId}\`)
- **Assigned Segment**: \`${slot.segmentId}\`
- **Object**: \`${slot.objectName}\`
- **Feature Branch**: \`${slot.branchName}\` (must start with \`contrib/\` from \`dev\`)

### 🔐 Strict Two-Commit Workflow Reminder
1. **Commit 1**: Add SVG asset to \`public/assets/worlds/${slot.worldId}/\` and register in \`src/data/worlds/${slot.worldId}/objects.ts\`.
2. **Commit 2**: Add placement in \`src/data/worlds/${slot.worldId}/placements.ts\` with \`segmentId: "${slot.segmentId}"\`.
3. **Open PR against \`dev\`** and include \`Closes #${issueNumber}\` in the description.

> 💡 *Note: Assigned slots are reserved for **48 hours**. If you run into any questions or need help, feel free to ask here!* Happy coding! 🌱`;
}

/**
 * Builds the completion/celebration comment with an idempotency marker.
 */
export function buildCompletionComment(issueNumber: number, slot: ParsedIssueSlot): string {
  const marker = `<!-- growing-worlds:completion:${issueNumber} -->`;

  return `${marker}
## 🎉 Contribution Complete & Merged!

This contribution slot has been successfully completed and merged into **${slot.worldName}**! 🌿

Thank you to the contributor for expanding our growing worlds! Your paper cutout is now a permanent part of the shared diorama.`;
}
