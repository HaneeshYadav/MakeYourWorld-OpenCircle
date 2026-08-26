import { test, expect } from "@playwright/test";

test.describe("World Engine Prototype E2E", () => {
  test("loads /dev/world-engine, displays demo objects and navigates segments", async ({
    page,
  }) => {
    await page.goto("/dev/world-engine");

    // 1. Check title & world name
    await expect(page.locator("h2")).toContainText("Growing Forest");

    // 2. Verify world engine container renders
    const worldContainer = page.locator('[data-testid="world-engine-growing-forest"]');
    await expect(worldContainer).toBeVisible();

    // 3. Verify contributor labels are rendered with correct human display names
    await expect(page.locator("text=Shen")).toBeVisible();
    await expect(page.locator("text=Alex")).toBeVisible();

    // 4. Verify segment navigation
    const navText = page.locator("nav >> text=Ancient Canopy");
    await expect(navText).toBeVisible();

    const prevBtn = page.locator('[data-testid="prev-segment-button"]');
    const nextBtn = page.locator('[data-testid="next-segment-button"]');

    // Previous should be disabled on first segment
    await expect(prevBtn).toBeDisabled();
    await expect(nextBtn).toBeEnabled();

    // Click Next segment
    await nextBtn.click();
    await expect(page.locator("nav >> text=Sunlit Meadow")).toBeVisible();
    await expect(prevBtn).toBeEnabled();
    await expect(nextBtn).toBeDisabled();

    // Click Previous segment back
    await prevBtn.click();
    await expect(page.locator("nav >> text=Ancient Canopy")).toBeVisible();
  });
});
