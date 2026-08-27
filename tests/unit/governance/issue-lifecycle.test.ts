import { describe, it, expect } from "vitest";
import {
  extractIssueFormField,
  parseIssueSlotBody,
  buildOnboardingComment,
  buildCompletionComment,
} from "../../../scripts/issue-lifecycle-parser";

describe("GitHub Issue Lifecycle Parser & Normalizer Unit Tests", () => {
  // Test sample representative of real YAML Issue Form output
  const sampleIssueFormBody = `
### 🌍 Target World

Growing Forest (growing-forest)

### 🏷️ Contribution Slot Identifier

CONTRIB-SLOT #02

### 📍 Assigned World Segment ID

forest-01 (Ancient Canopy)

### 🎨 Suggested Object Category & Concept

🌲 Forest: Butterfly (Woodland Wildlife / Fauna)

### ✏️ Custom Object Name (Optional)

_No response_

### 📊 Difficulty Level

Beginner (No prior open-source experience needed)

### ⏱️ Estimated Time

15–30 minutes

---

## 🎯 Your Task
Add ONE paper-cutout object to Growing Forest inside forest-01.
`;

  it("TEST 1: correctly parses Target World name and ID", () => {
    const parsed = parseIssueSlotBody(sampleIssueFormBody);
    expect(parsed.worldName).toBe("Growing Forest");
    expect(parsed.worldId).toBe("growing-forest");
  });

  it("TEST 2: correctly parses Contribution Slot Identifier", () => {
    const parsed = parseIssueSlotBody(sampleIssueFormBody);
    expect(parsed.slotFormatted).toBe("CONTRIB-SLOT #02");
  });

  it("TEST 3: correctly parses Assigned World Segment ID", () => {
    const parsed = parseIssueSlotBody(sampleIssueFormBody);
    expect(parsed.segmentId).toBe("forest-01");
  });

  it("TEST 4: correctly parses suggested category when no custom object is given", () => {
    const parsed = parseIssueSlotBody(sampleIssueFormBody);
    expect(parsed.objectName).toBe("Butterfly");
  });

  it("TEST 5: correctly allows Custom Object Name to override suggested category", () => {
    const bodyWithCustomObject = sampleIssueFormBody.replace(
      "_No response_",
      "Golden Dragonfly (woodland fauna)"
    );
    const parsed = parseIssueSlotBody(bodyWithCustomObject);
    expect(parsed.objectName).toBe("Golden Dragonfly");
  });

  it("TEST 6: correctly handles fallback when custom object is empty or No response", () => {
    const parsed = parseIssueSlotBody(sampleIssueFormBody);
    expect(parsed.objectName).toBe("Butterfly");
  });

  it("TEST 7: produces the standardized, normalized title", () => {
    const parsed = parseIssueSlotBody(sampleIssueFormBody);
    expect(parsed.normalizedTitle).toBe(
      "[Good First Issue] 🌱 Add Butterfly to Growing Forest — forest-01 (CONTRIB-SLOT #02)"
    );
  });

  it("TEST 8: calculates the exact student branch name", () => {
    const parsed = parseIssueSlotBody(sampleIssueFormBody);
    expect(parsed.branchName).toBe("contrib/growing-forest-butterfly");
  });

  it("TEST 9: handles '_No response_' cleanly without treating it as an object name", () => {
    const extracted = extractIssueFormField(sampleIssueFormBody, ["Custom Object Name"]);
    expect(extracted).toBeNull();
  });

  it("TEST 10: correctly parses Markdown issue template format (world-contribution.md)", () => {
    const manualMarkdownBody = `
# 🟢 Good First Issue: Add Butterfly to Growing Forest

- **Target World**: Growing Forest
- **Contribution Slot**: CONTRIB-SLOT #05
- **Assigned World Segment**: forest-03 (Deep Grove)
- **Suggested Object Category**: 🌲 Forest: Song Bird (Canopy Bird / Fauna)
`;
    const parsed = parseIssueSlotBody(manualMarkdownBody);
    expect(parsed.worldName).toBe("Growing Forest");
    expect(parsed.slotFormatted).toBe("CONTRIB-SLOT #05");
    expect(parsed.segmentId).toBe("forest-03");
    expect(parsed.objectName).toBe("Song Bird");
    expect(parsed.normalizedTitle).toBe(
      "[Good First Issue] 🌱 Add Song Bird to Growing Forest — forest-03 (CONTRIB-SLOT #05)"
    );
    expect(parsed.branchName).toBe("contrib/growing-forest-song-bird");
  });

  it("TEST 11: onboarding comment contains unique idempotency marker", () => {
    const parsed = parseIssueSlotBody(sampleIssueFormBody);
    const comment = buildOnboardingComment(19, "student-dev", parsed);
    expect(comment).toContain("<!-- growing-worlds:onboarding:19:student-dev -->");
    expect(comment).toContain("@student-dev");
    expect(comment).toContain("contrib/growing-forest-butterfly");
    expect(comment).toContain("Closes #19");
  });

  it("TEST 12: completion comment contains unique idempotency marker", () => {
    const parsed = parseIssueSlotBody(sampleIssueFormBody);
    const comment = buildCompletionComment(19, parsed);
    expect(comment).toContain("<!-- growing-worlds:completion:19 -->");
    expect(comment).toContain("Growing Forest");
  });
});
