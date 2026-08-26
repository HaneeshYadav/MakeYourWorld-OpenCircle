import { test, expect } from "@playwright/test";

test.describe("Growing Worlds Public Portal & 10-World E2E Suite", () => {
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

  test("World Gallery loads all 10 active worlds", async ({ page }) => {
    await page.goto("/worlds");

    await expect(page.locator("h1")).toContainText("World Gallery");

    // All 10 Active World Cards
    await expect(page.getByRole("heading", { name: "Growing Forest" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Growing Universe" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Growing Ocean" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Growing City" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Growing Village" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Growing Island" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Growing Farm" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Growing Campus" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Fantasy World" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Alien Planet" })).toBeVisible();
  });

  test("Growing Campus world view renders shared engine and segments", async ({ page }) => {
    await page.goto("/worlds/growing-campus");

    await expect(page.locator("h2")).toContainText("Growing Campus");
    const worldContainer = page.locator('[data-testid="world-engine-growing-campus"]');
    await expect(worldContainer).toBeVisible();

    // Segment 01 (University Gate)
    await expect(page.locator("text=University Gate")).toBeVisible();
    await expect(page.locator("text=1 / 3")).toBeVisible();
    await expect(page.locator("text=Zoe")).toBeVisible(); // Planter
    await expect(page.locator("text=Rohan")).toBeVisible(); // Bicycle

    // Segment 02 (Academic Quad)
    const nextBtn = page.locator('[data-testid="next-segment-button"]');
    await nextBtn.click();
    await expect(page.locator("text=Academic Quad")).toBeVisible();
    await expect(page.locator("text=2 / 3")).toBeVisible();
    await expect(page.locator("text=Julian")).toBeVisible(); // Bench
    await expect(page.locator("text=Elena")).toBeVisible(); // Books
  });

  test("Fantasy World view renders shared engine, floating elements, and segments", async ({ page }) => {
    await page.goto("/worlds/fantasy-world");

    await expect(page.locator("h2")).toContainText("Fantasy World");
    const worldContainer = page.locator('[data-testid="world-engine-fantasy-world"]');
    await expect(worldContainer).toBeVisible();

    // Segment 01 (Enchanted Glade)
    await expect(page.locator("text=Enchanted Glade")).toBeVisible();
    await expect(page.locator("text=1 / 3")).toBeVisible();
    await expect(page.locator("text=Arthur")).toBeVisible(); // Rune Stone
    await expect(page.locator("text=Lyra")).toBeVisible(); // Floating Crystal
    await expect(page.locator("text=Rowan")).toBeVisible(); // Magic Mushroom

    // Segment 02 (Rune Arch)
    const nextBtn = page.locator('[data-testid="next-segment-button"]');
    await nextBtn.click();
    await expect(page.locator("text=Rune Arch")).toBeVisible();
    await expect(page.locator("text=2 / 3")).toBeVisible();
    await expect(page.locator("text=Ignis")).toBeVisible(); // Wizard Lantern
    await expect(page.locator("text=Morgana")).toBeVisible(); // Grimoire
  });

  test("Alien Planet view renders shared engine, xenobiology, and segments", async ({ page }) => {
    await page.goto("/worlds/alien-planet");

    await expect(page.locator("h2")).toContainText("Alien Planet");
    const worldContainer = page.locator('[data-testid="world-engine-alien-planet"]');
    await expect(worldContainer).toBeVisible();

    // Segment 01 (Touchdown Basin)
    await expect(page.locator("text=Touchdown Basin")).toBeVisible();
    await expect(page.locator("text=1 / 3")).toBeVisible();
    await expect(page.locator("text=Orion")).toBeVisible(); // Survey Probe
    await expect(page.locator("text=Vex")).toBeVisible(); // Neon Crystal

    // Segment 02 (Spore Forest)
    const nextBtn = page.locator('[data-testid="next-segment-button"]');
    await nextBtn.click();
    await expect(page.locator("text=Spore Forest")).toBeVisible();
    await expect(page.locator("text=2 / 3")).toBeVisible();
    await expect(page.locator("text=Zylar")).toBeVisible(); // Alien Mushroom
    await expect(page.locator("text=Bloop")).toBeVisible(); // Creature
  });

  test("Visiting non-existent world returns 404 not found page", async ({ page }) => {
    const response = await page.goto("/worlds/unknown-realm");
    expect(response?.status()).toBe(404);
    await expect(page.locator("text=404")).toBeVisible();
  });
});
