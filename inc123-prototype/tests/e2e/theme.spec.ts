import { test, expect } from "@playwright/test";

test.describe("Theme Toggle", () => {
  test("page loads with default theme", async ({ page }) => {
    await page.goto("/", { waitUntil: "networkidle" });

    const theme = await page.locator("html").getAttribute("data-theme");
    expect(theme === "wireframe" || theme === "brand").toBe(true);
  });

  test("theme toggle switches data-theme", async ({ page }) => {
    await page.goto("/", { waitUntil: "networkidle" });

    // The toggle button contains "Switch to Brand" or "Switch to Wireframe"
    const toggle = page.locator('button:has-text("Switch to")').first();
    await expect(toggle).toBeVisible({ timeout: 5000 });

    const initialTheme = await page.locator("html").getAttribute("data-theme");
    await toggle.click({ force: true });
    await page.waitForTimeout(300);

    const newTheme = await page.locator("html").getAttribute("data-theme");
    expect(newTheme).not.toBe(initialTheme);
  });
});
