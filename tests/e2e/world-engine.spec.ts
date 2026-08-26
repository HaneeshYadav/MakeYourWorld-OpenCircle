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

  test("World Gallery loads both active worlds (Forest & Universe) and planned worlds", async ({
    page,
  }) => {
    await page.goto("/worlds");

    await expect(page.locator("h1")).toContainText("World Gallery");

    // Active Growing Forest Card
    const forestHeading = page.getByRole("heading", { name: "Growing Forest" });
    await expect(forestHeading).toBeVisible();

    // Active Growing Universe Card
    const universeHeading = page.getByRole("heading", { name: "Growing Universe" });
    await expect(universeHeading).toBeVisible();

    // Planned worlds
    await expect(page.locator("text=Growing Ocean")).toBeVisible();
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

    // 1. World Header
    await expect(page.locator("h2")).toContainText("Growing Universe");
    const worldContainer = page.locator('[data-testid="world-engine-growing-universe"]');
    await expect(worldContainer).toBeVisible();

    // 2. Verify Segment 01 (Starlit Orbit) objects and contributors
    await expect(page.locator("text=Starlit Orbit")).toBeVisible();
    await expect(page.locator("text=1 / 3")).toBeVisible();
    await expect(page.locator("text=Luna")).toBeVisible(); // Planet by Luna
    await expect(page.locator("text=Orion")).toBeVisible(); // Satellite by Orion

    const prevBtn = page.locator('[data-testid="prev-segment-button"]');
    const nextBtn = page.locator('[data-testid="next-segment-button"]');

    // 3. Navigate to Segment 02 (Planetary Horizon)
    await nextBtn.click();
    await expect(page.locator("text=Planetary Horizon")).toBeVisible();
    await expect(page.locator("text=2 / 3")).toBeVisible();
    await expect(page.locator("text=Stella")).toBeVisible(); // Moon by Stella
    await expect(page.locator("text=Cosmo")).toBeVisible(); // Comet by Cosmo

    // Segment 01 objects should not appear in Segment 02
    await expect(page.locator("text=Luna")).not.toBeVisible();

    // 4. Navigate to Segment 03 (Asteroid Belt)
    await nextBtn.click();
    await expect(page.locator("text=Asteroid Belt")).toBeVisible();
    await expect(page.locator("text=3 / 3")).toBeVisible();
    await expect(page.locator("text=Nova")).toBeVisible(); // Asteroid by Nova

    // 5. Navigate back to Segment 01
    await prevBtn.click();
    await prevBtn.click();
    await expect(page.locator("text=Starlit Orbit")).toBeVisible();
    await expect(page.locator("text=Luna")).toBeVisible();
  });

  test("Visiting planned or non-existent world returns 404 not found page", async ({
    page,
  }) => {
    const response = await page.goto("/worlds/growing-ocean");
    expect(response?.status()).toBe(404);
    await expect(page.locator("text=404")).toBeVisible();
  });
});
