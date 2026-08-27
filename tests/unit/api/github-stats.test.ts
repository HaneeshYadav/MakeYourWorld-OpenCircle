import { describe, it, expect } from "vitest";
import { GET } from "../../../src/app/api/github/stats/route";

describe("GitHub Live Community Stats API Route Tests", () => {
  it("TEST 1: API route returns valid JSON structure with stars, forks, and openContributions", async () => {
    const res = await GET();
    expect(res.status).toBe(200);

    const json = await res.json();
    expect(typeof json.stars).toBe("number");
    expect(typeof json.forks).toBe("number");
    expect(typeof json.openContributions).toBe("number");
    expect(json.stars).toBeGreaterThanOrEqual(0);
    expect(json.forks).toBeGreaterThanOrEqual(0);
    expect(json.openContributions).toBeGreaterThanOrEqual(0);
  });
});
