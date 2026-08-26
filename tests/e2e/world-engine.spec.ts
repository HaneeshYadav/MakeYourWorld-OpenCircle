import { test, expect } from "@playwright/test";

test.describe("Growing Worlds Public Portal E2E", () => {
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

  test("World Gallery loads active Growing Forest card and planned worlds", async ({
    page,
  }) => {
    await page.goto("/worlds");

    await expect(page.locator("h1")).toContainText("World Gallery");

    // Active Growing Forest Card
    const forestHeading = page.getByRole("heading", { name: "Growing Forest" });
    await expect(forestHeading).toBeVisible();

    // Click Explore World
    const exploreBtn = page.getByRole("link", { name: "Explore World" });
    await exploreBtn.click();
    await expect(page).toHaveURL("/worlds/growing-forest");
  });

  test("Growing Forest public world view renders engine, labels, and segment navigation", async ({
    page,
  }) => {
    await page.goto("/worlds/growing-forest");

    // 1. Verify World Header
    await expect(page.locator("h2")).toContainText("Growing Forest");

    // 2. Verify World Engine container
    const worldContainer = page.locator('[data-testid="world-engine-growing-forest"]');
    await expect(worldContainer).toBeVisible();

    // 3. Verify Contributor Labels in Segment 01
    await expect(page.locator("text=Shen")).toBeVisible();
    await expect(page.locator("text=Alex")).toBeVisible();

    // 4. Verify Contribution CTA Button
    const addBtn = page.getByRole("button", {
      name: "Add to this World (Good First Issue)",
    });
    await expect(addBtn).toBeVisible();

    // 5. Test Segment Navigation
    const nextBtn = page.locator('[data-testid="next-segment-button"]');
    await nextBtn.click();
    await expect(page.locator("text=Sunlit Meadow")).toBeVisible();
    await expect(page.locator("text=Maya")).toBeVisible();
  });

  test("How-to-contribute page renders two-commit walkthrough and file boundaries", async ({
    page,
  }) => {
    await page.goto("/how-to-contribute");

    await expect(page.locator("h1")).toContainText("How to Contribute to Growing Worlds");
    await expect(page.locator("text=Commit 1: Asset & Object Data")).toBeVisible();
    await expect(page.locator("text=Commit 2: World Placement")).toBeVisible();
    await expect(page.locator("text=Files Contributors Modify")).toBeVisible();
  });
});
