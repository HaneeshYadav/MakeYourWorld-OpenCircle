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

  test("World Gallery loads all 5 active worlds and planned worlds", async ({
    page,
  }) => {
    await page.goto("/worlds");

    await expect(page.locator("h1")).toContainText("World Gallery");

    // Active World Cards (5)
    await expect(page.getByRole("heading", { name: "Growing Forest" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Growing Universe" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Growing Ocean" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Growing City" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Growing Village" })).toBeVisible();

    // Planned worlds (5)
    await expect(page.locator("text=Growing Island")).toBeVisible();
    await expect(page.locator("text=Alien Planet")).toBeVisible();
  });

  test("Growing City world view renders shared engine, streetscapes, and navigation", async ({
    page,
  }) => {
    await page.goto("/worlds/growing-city");

    // 1. Header & Engine container
    await expect(page.locator("h2")).toContainText("Growing City");
    const worldContainer = page.locator('[data-testid="world-engine-growing-city"]');
    await expect(worldContainer).toBeVisible();

    // 2. Segment 01 (Brownstone Street) objects and contributors
    await expect(page.locator("text=Brownstone Street")).toBeVisible();
    await expect(page.locator("text=1 / 3")).toBeVisible();
    await expect(page.locator("text=Jordan")).toBeVisible(); // Street Tree
    await expect(page.locator("text=Avery")).toBeVisible(); // Mailbox
    await expect(page.locator("text=Devon")).toBeVisible(); // Bike

    const nextBtn = page.locator('[data-testid="next-segment-button"]');

    // 3. Navigate to Segment 02 (Town Square)
    await nextBtn.click();
    await expect(page.locator("text=Town Square")).toBeVisible();
    await expect(page.locator("text=2 / 3")).toBeVisible();
    await expect(page.locator("text=Marcus")).toBeVisible(); // Street Lamp
    await expect(page.locator("text=Chloe")).toBeVisible(); // Park Bench

    // Segment 01 objects should not appear in Segment 02
    await expect(page.locator("text=Avery")).not.toBeVisible();
  });

  test("Growing Village world view renders shared engine, rural cottages, and navigation", async ({
    page,
  }) => {
    await page.goto("/worlds/growing-village");

    // 1. Header & Engine container
    await expect(page.locator("h2")).toContainText("Growing Village");
    const worldContainer = page.locator('[data-testid="world-engine-growing-village"]');
    await expect(worldContainer).toBeVisible();

    // 2. Segment 01 (River Watermill) objects and contributors
    await expect(page.locator("text=River Watermill")).toBeVisible();
    await expect(page.locator("text=1 / 3")).toBeVisible();
    await expect(page.locator("text=Clara")).toBeVisible(); // Flower Pot
    await expect(page.locator("text=Tobias")).toBeVisible(); // Wooden Cart

    const nextBtn = page.locator('[data-testid="next-segment-button"]');

    // 3. Navigate to Segment 02 (Cobblestone Street)
    await nextBtn.click();
    await expect(page.locator("text=Cobblestone Street")).toBeVisible();
    await expect(page.locator("text=2 / 3")).toBeVisible();
    await expect(page.locator("text=Lukas")).toBeVisible(); // Lantern
    await expect(page.locator("text=Greta")).toBeVisible(); // Fence
  });

  test("Visiting planned or non-existent world returns 404 not found page", async ({
    page,
  }) => {
    const response = await page.goto("/worlds/growing-island");
    expect(response?.status()).toBe(404);
    await expect(page.locator("text=404")).toBeVisible();
  });
});
