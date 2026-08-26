import { test, expect } from "@playwright/test";

test.describe("Growing Forest Paper-Collage Prototype E2E", () => {
  test("loads /dev/world-engine, displays layered objects and navigates all 3 segments", async ({
    page,
  }) => {
    await page.goto("/dev/world-engine");

    // 1. Check title & world name
    await expect(page.locator("h2")).toContainText("Growing Forest");

    // 2. Verify world engine container renders
    const worldContainer = page.locator('[data-testid="world-engine-growing-forest"]');
    await expect(worldContainer).toBeVisible();

    // 3. Verify contributor labels are rendered with accurate human display names
    await expect(page.locator("text=Shen")).toBeVisible();
    await expect(page.locator("text=Alex")).toBeVisible();
    await expect(page.locator("text=Maya")).toBeVisible();
    await expect(page.locator("text=Liam")).toBeVisible();
    await expect(page.locator("text=Elena")).toBeVisible();

    // 4. Verify segment navigation controls & 3 segments
    const navHeader = page.locator("nav");
    await expect(navHeader).toBeVisible();
    await expect(page.locator("text=Ancient Canopy")).toBeVisible();
    await expect(page.locator("text=1 / 3")).toBeVisible();

    const prevBtn = page.locator('[data-testid="prev-segment-button"]');
    const nextBtn = page.locator('[data-testid="next-segment-button"]');

    // First segment boundary
    await expect(prevBtn).toBeDisabled();
    await expect(nextBtn).toBeEnabled();

    // Navigate to Segment 02: Sunlit Meadow
    await nextBtn.click();
    await expect(page.locator("text=Sunlit Meadow")).toBeVisible();
    await expect(page.locator("text=2 / 3")).toBeVisible();
    await expect(prevBtn).toBeEnabled();
    await expect(nextBtn).toBeEnabled();

    // Navigate to Segment 03: Deep Grove
    await nextBtn.click();
    await expect(page.locator("text=Deep Grove")).toBeVisible();
    await expect(page.locator("text=3 / 3")).toBeVisible();
    await expect(prevBtn).toBeEnabled();
    await expect(nextBtn).toBeDisabled();

    // Navigate back to Segment 01
    await prevBtn.click();
    await expect(page.locator("text=Sunlit Meadow")).toBeVisible();
    await prevBtn.click();
    await expect(page.locator("text=Ancient Canopy")).toBeVisible();
  });

  test("renders gracefully on mobile viewport (375x667)", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto("/dev/world-engine");

    await expect(page.locator("h2")).toContainText("Growing Forest");
    const worldContainer = page.locator('[data-testid="world-engine-growing-forest"]');
    await expect(worldContainer).toBeVisible();

    // Verify contributor badges scale cleanly
    await expect(page.locator("text=Shen")).toBeVisible();
    await expect(page.locator('[data-testid="next-segment-button"]')).toBeVisible();
  });
});
