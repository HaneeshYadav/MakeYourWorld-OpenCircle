import { NextResponse } from "next/server";

export interface GitHubStatsResponse {
  stars: number;
  forks: number;
  openContributions: number;
}

export const revalidate = 600; // Cache on Next.js server for 10 minutes (600s)

const REPO_OWNER = "ShenSandaru";
const REPO_NAME = "MakeYourWorld-OpenCircle";

export async function GET() {
  try {
    const headers: Record<string, string> = {
      Accept: "application/vnd.github.v3+json",
      "User-Agent": "Growing-Worlds-Community-Stats",
    };

    // Optional server-side token if configured in environment
    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    // 1. Fetch Repository Stars and Forks
    const repoRes = await fetch(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}`, {
      headers,
      next: { revalidate: 600 },
    });

    let stars = 0;
    let forks = 0;

    if (repoRes.ok) {
      const repoData = await repoRes.json();
      stars = typeof repoData.stargazers_count === "number" ? repoData.stargazers_count : 0;
      forks = typeof repoData.forks_count === "number" ? repoData.forks_count : 0;
    } else {
      console.warn(`GitHub API repo fetch failed: status ${repoRes.status}`);
    }

    // 2. Fetch Open Good First Issue Contribution Slots
    let openContributions = 20; // Default target pool fallback if API throttled

    const issuesRes = await fetch(
      `https://api.github.com/search/issues?q=repo:${REPO_OWNER}/${REPO_NAME}+is:issue+is:open+label:"good+first+issue"`,
      {
        headers,
        next: { revalidate: 600 },
      }
    );

    if (issuesRes.ok) {
      const issuesData = await issuesRes.json();
      if (typeof issuesData.total_count === "number") {
        openContributions = issuesData.total_count;
      }
    } else {
      console.warn(`GitHub API issues search failed: status ${issuesRes.status}`);
    }

    const payload: GitHubStatsResponse = {
      stars,
      forks,
      openContributions,
    };

    return NextResponse.json(payload, {
      status: 200,
      headers: {
        "Cache-Control": "public, s-maxage=600, stale-while-revalidate=1200",
      },
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("Error fetching live GitHub statistics:", message);

    // Graceful fallback response
    return NextResponse.json(
      {
        stars: 0,
        forks: 0,
        openContributions: 20,
      },
      { status: 200 }
    );
  }
}
