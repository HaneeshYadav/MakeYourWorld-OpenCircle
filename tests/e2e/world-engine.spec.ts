import { test, expect } from "@playwright/test";

test.describe("Growing Forest Paper-Collage Prototype E2E", () => {
  test("loads /dev/world-engine, displays segment-filtered objects and navigates all 3 segments", async ({
    page,
  }) => {
    await page.goto("/dev/world-engine");

    // 1. Check title & world name
    await expect(page.locator("h2")).toContainText("Growing Forest");

    // 2. Verify world engine container renders
    const worldContainer = page.locator('[data-testid="world-engine-growing-forest"]');
    await expect(worldContainer).toBeVisible();

    // 3. Verify Segment 01 objects and contributor labels are visible
    await expect(page.locator("text=Ancient Canopy")).toBeVisible();
    await expect(page.locator("text=1 / 3")).toBeVisible();
    await expect(page.locator("text=Shen")).toBeVisible(); // Pine Tree in Segment 01
    await expect(page.locator("text=Alex")).toBeVisible(); // Bird in Segment 01
    await expect(page.locator("text=Elena")).toBeVisible(); // Deer in Segment 01
    await expect(page.locator("text=Liam")).toBeVisible(); // Rock in Segment 01
    await expect(page.locator("text=Student Example")).toBeVisible(); // Simulated contributor butterfly in Segment 01

    const prevBtn = page.locator('[data-testid="prev-segment-button"]');
    const nextBtn = page.locator('[data-testid="next-segment-button"]');

    // First segment boundary
    await expect(prevBtn).toBeDisabled();
    await expect(nextBtn).toBeEnabled();

    // 4. Navigate to Segment 02: Sunlit Meadow
    await nextBtn.click();
    await expect(page.locator("text=Sunlit Meadow")).toBeVisible();
    await expect(page.locator("text=2 / 3")).toBeVisible();
    await expect(prevBtn).toBeEnabled();
    await expect(nextBtn).toBeEnabled();

    // Verify Segment 02 specific objects render (Woodland Flower by Maya)
    await expect(page.locator("text=Maya")).toBeVisible();
    // Verify Segment 01 objects are NOT visible in Segment 02
    await expect(page.locator("text=Student Example")).not.toBeVisible();

    // 5. Navigate to Segment 03: Deep Grove (unpopulated, ready for future growth)
    await nextBtn.click();
    await expect(page.locator("text=Deep Grove")).toBeVisible();
    await expect(page.locator("text=3 / 3")).toBeVisible();
    await expect(prevBtn).toBeEnabled();
    await expect(nextBtn).toBeDisabled();
    await expect(page.locator("text=Student Example")).not.toBeVisible();

    // 6. Navigate back to Segment 01
    await prevBtn.click();
    await expect(page.locator("text=Sunlit Meadow")).toBeVisible();
    await prevBtn.click();
    await expect(page.locator("text=Ancient Canopy")).toBeVisible();
    await expect(page.locator("text=Student Example")).toBeVisible();
  });

  test("renders gracefully on mobile viewport (375x667)", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto("/dev/world-engine");

    await expect(page.locator("h2")).toContainText("Growing Forest");
    const worldContainer = page.locator('[data-testid="world-engine-growing-forest"]');
    await expect(worldContainer).toBeVisible();

    // Verify contributor badges and navigation buttons scale cleanly
    await expect(page.locator("text=Student Example")).toBeVisible();
    await expect(page.locator('[data-testid="next-segment-button"]')).toBeVisible();
  });
});
