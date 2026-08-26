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

  test("World Gallery loads all 7 active worlds and planned worlds", async ({
    page,
  }) => {
    await page.goto("/worlds");

    await expect(page.locator("h1")).toContainText("World Gallery");

    // Active World Cards (7)
    await expect(page.getByRole("heading", { name: "Growing Forest" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Growing Universe" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Growing Ocean" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Growing City" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Growing Village" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Growing Island" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Growing Farm" })).toBeVisible();

    // Planned worlds (3)
    await expect(page.locator("text=Growing Campus")).toBeVisible();
    await expect(page.locator("text=Alien Planet")).toBeVisible();
  });

  test("Growing Island world view renders shared engine, coastal shoreline, and navigation", async ({
    page,
  }) => {
    await page.goto("/worlds/growing-island");

    // 1. Header & Engine container
    await expect(page.locator("h2")).toContainText("Growing Island");
    const worldContainer = page.locator('[data-testid="world-engine-growing-island"]');
    await expect(worldContainer).toBeVisible();

    // 2. Segment 01 (Arrival Beach) objects and contributors
    await expect(page.locator("text=Arrival Beach")).toBeVisible();
    await expect(page.locator("text=1 / 3")).toBeVisible();
    await expect(page.locator("text=Moana")).toBeVisible(); // Coconut Palm
    await expect(page.locator("text=Koa")).toBeVisible(); // Wooden Canoe

    const nextBtn = page.locator('[data-testid="next-segment-button"]');

    // 3. Navigate to Segment 02 (Palm Lagoon)
    await nextBtn.click();
    await expect(page.locator("text=Palm Lagoon")).toBeVisible();
    await expect(page.locator("text=2 / 3")).toBeVisible();
    await expect(page.locator("text=Tane")).toBeVisible(); // Parrot
    await expect(page.locator("text=Lani")).toBeVisible(); // Flower
  });

  test("Growing Farm world view renders shared engine, golden fields, and navigation", async ({
    page,
  }) => {
    await page.goto("/worlds/growing-farm");

    // 1. Header & Engine container
    await expect(page.locator("h2")).toContainText("Growing Farm");
    const worldContainer = page.locator('[data-testid="world-engine-growing-farm"]');
    await expect(worldContainer).toBeVisible();

    // 2. Segment 01 (Homestead Yard) objects and contributors
    await expect(page.locator("text=Homestead Yard")).toBeVisible();
    await expect(page.locator("text=1 / 3")).toBeVisible();
    await expect(page.locator("text=Oliver")).toBeVisible(); // Pumpkin
    await expect(page.locator("text=Mia")).toBeVisible(); // Watering Can

    const nextBtn = page.locator('[data-testid="next-segment-button"]');

    // 3. Navigate to Segment 02 (Wheat Fields)
    await nextBtn.click();
    await expect(page.locator("text=Wheat Fields")).toBeVisible();
    await expect(page.locator("text=2 / 3")).toBeVisible();
    await expect(page.locator("text=Silas")).toBeVisible(); // Scarecrow
    await expect(page.locator("text=Emma")).toBeVisible(); // Wheat Bundle
  });

  test("Visiting planned or non-existent world returns 404 not found page", async ({
    page,
  }) => {
    const response = await page.goto("/worlds/growing-campus");
    expect(response?.status()).toBe(404);
    await expect(page.locator("text=404")).toBeVisible();
  });
});
