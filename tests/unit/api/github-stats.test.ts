import { describe, it, expect, vi } from "vitest";
import { GET } from "../../../src/app/api/github/stats/route";

describe("GitHub Live Community Stats API Route Tests", () => {
  it("TEST 1: API route returns valid JSON structure with stars, forks, and openContributions", async () => {
    // Mock global fetch to return deterministic repository stats quickly in tests
    const mockRepoResponse = { stargazers_count: 42, forks_count: 15 };
    const mockIssuesResponse = { total_count: 20 };

    const fetchSpy = vi.spyOn(global, "fetch").mockImplementation((url) => {
      const urlStr = String(url);
      if (urlStr.includes("search/issues")) {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockIssuesResponse),
        } as unknown as Response);
      }
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockRepoResponse),
      } as unknown as Response);
    });

    const res = await GET();
    expect(res.status).toBe(200);

    const json = await res.json();
    expect(json.stars).toBe(42);
    expect(json.forks).toBe(15);
    expect(json.openContributions).toBe(20);

    fetchSpy.mockRestore();
  });

  it("TEST 2: API route returns graceful fallbacks when GitHub API fails", async () => {
    const fetchSpy = vi.spyOn(global, "fetch").mockImplementation(() => {
      return Promise.resolve({
        ok: false,
        status: 403,
      } as unknown as Response);
    });

    const res = await GET();
    expect(res.status).toBe(200);

    const json = await res.json();
    expect(json.stars).toBe(0);
    expect(json.forks).toBe(0);
    expect(json.openContributions).toBe(20);

    fetchSpy.mockRestore();
  });
});
