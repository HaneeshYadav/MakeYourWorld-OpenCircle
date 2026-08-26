import { test, expect } from "@playwright/test";

test.describe("Growing Worlds Public Portal & Multi-World E2E", () => {
  test("Homepage loads and primary CTAs navigate correctly", async ({ page }) => {
    await page.goto("/");

    // 1. Verify Brand Heading & Hero Title
    await expect(page.locator("h1")).toContainText("A Living Paper World Built By");

    // 2. Verify Featured Live World Preview (Growing Forest)
    const featuredWorld = page.locator('[data-testid="world-engine-growing-forest"]');
    await expect(featuredWorld).toBeVisible();

    // 3. Test Navigation to How to Contribute
    const contributeBtn = page.getByRole("link", { name: "How to Contribute" }).first();
    await contributeBtn.click();
    await expect(page).toHaveURL("/how-to-contribute");
    await expect(page.locator("h1")).toContainText("How to Contribute to Growing Worlds");
  });

  test("World Gallery loads all 3 active worlds (Forest, Universe, Ocean) and planned worlds", async ({
    page,
  }) => {
    await page.goto("/worlds");

    await expect(page.locator("h1")).toContainText("World Gallery");

    // Active World Cards
    await expect(page.getByRole("heading", { name: "Growing Forest" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Growing Universe" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Growing Ocean" })).toBeVisible();

    // Planned worlds
    await expect(page.locator("text=Growing City")).toBeVisible();
    await expect(page.locator("text=Alien Planet")).toBeVisible();
  });

  test("Growing Forest world view renders engine and segment navigation", async ({
    page,
  }) => {
    await page.goto("/worlds/growing-forest");

    await expect(page.locator("h2")).toContainText("Growing Forest");
    const worldContainer = page.locator('[data-testid="world-engine-growing-forest"]');
    await expect(worldContainer).toBeVisible();

    // Contributor labels
    await expect(page.locator("text=Shen")).toBeVisible();
    await expect(page.locator("text=Alex")).toBeVisible();

    // Segment Navigation
    const nextBtn = page.locator('[data-testid="next-segment-button"]');
    await nextBtn.click();
    await expect(page.locator("text=Sunlit Meadow")).toBeVisible();
    await expect(page.locator("text=Maya")).toBeVisible();
  });

  test("Growing Universe world view renders shared engine, cosmic cutouts, and segments", async ({
    page,
  }) => {
    await page.goto("/worlds/growing-universe");

    await expect(page.locator("h2")).toContainText("Growing Universe");
    const worldContainer = page.locator('[data-testid="world-engine-growing-universe"]');
    await expect(worldContainer).toBeVisible();

    // Segment 01 (Starlit Orbit)
    await expect(page.locator("text=Starlit Orbit")).toBeVisible();
    await expect(page.locator("text=Luna")).toBeVisible();

    // Segment 02 Navigation
    const nextBtn = page.locator('[data-testid="next-segment-button"]');
    await nextBtn.click();
    await expect(page.locator("text=Planetary Horizon")).toBeVisible();
    await expect(page.locator("text=Stella")).toBeVisible();
  });

  test("Growing Ocean world view renders shared engine, marine vertical depth, and segments", async ({
    page,
  }) => {
    await page.goto("/worlds/growing-ocean");

    // 1. World Header
    await expect(page.locator("h2")).toContainText("Growing Ocean");
    const worldContainer = page.locator('[data-testid="world-engine-growing-ocean"]');
    await expect(worldContainer).toBeVisible();

    // 2. Segment 01 (Shallow Reef) vertical depth items & labels
    await expect(page.locator("text=Shallow Reef")).toBeVisible();
    await expect(page.locator("text=1 / 3")).toBeVisible();
    await expect(page.locator("text=Coral")).toBeVisible(); // Clownfish by Coral
    await expect(page.locator("text=Kai")).toBeVisible(); // Turtle by Kai
    await expect(page.locator("text=Marina")).toBeVisible(); // Coral by Marina
    await expect(page.locator("text=Sandy")).toBeVisible(); // Shell by Sandy

    const prevBtn = page.locator('[data-testid="prev-segment-button"]');
    const nextBtn = page.locator('[data-testid="next-segment-button"]');

    // 3. Navigate to Segment 02 (Kelp Forest)
    await nextBtn.click();
    await expect(page.locator("text=Kelp Forest")).toBeVisible();
    await expect(page.locator("text=2 / 3")).toBeVisible();
    await expect(page.locator("text=Finn")).toBeVisible(); // Kelp by Finn
    await expect(page.locator("text=Student Ocean")).toBeVisible(); // Simulated Jellyfish

    // Segment 01 items should not be visible
    await expect(page.locator("text=Marina")).not.toBeVisible();

    // 4. Navigate to Segment 03 (Twilight Shelf)
    await nextBtn.click();
    await expect(page.locator("text=Twilight Shelf")).toBeVisible();
    await expect(page.locator("text=3 / 3")).toBeVisible();
    await expect(page.locator("text=Student Ocean")).not.toBeVisible();

    // 5. Navigate back to Segment 01
    await prevBtn.click();
    await prevBtn.click();
    await expect(page.locator("text=Shallow Reef")).toBeVisible();
    await expect(page.locator("text=Marina")).toBeVisible();
  });

  test("Visiting planned or non-existent world returns 404 not found page", async ({
    page,
  }) => {
    const response = await page.goto("/worlds/growing-city");
    expect(response?.status()).toBe(404);
    await expect(page.locator("text=404")).toBeVisible();
  });
});
