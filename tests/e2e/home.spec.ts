import { test, expect } from "@playwright/test";

test("homepage loads successfully with title", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Growing Worlds/);
});
