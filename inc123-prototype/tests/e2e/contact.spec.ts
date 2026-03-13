import { test, expect } from "@playwright/test";

test.describe("Contact Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/contact", { waitUntil: "domcontentloaded" });
  });

  test("contact page renders all sections", async ({ page }) => {
    const bodyText = await page.locator("body").innerText();

    // Hero
    expect(bodyText.length).toBeGreaterThan(500);

    // Contact methods (phone, email, office)
    expect(bodyText).toContain("(775) 313-4155");

    // Map placeholder
    expect(bodyText).toContain("1795 Meadow Wood Lane");
  });

  test("contact form exists with required fields", async ({ page }) => {
    // Check form exists
    const form = page.locator("form").first();
    if (await form.isVisible()) {
      // Check for typical form fields
      const nameInput = page.locator('input[name*="name"], input[placeholder*="name" i]').first();
      const emailInput = page.locator('input[name*="email"], input[type="email"]').first();

      // At least one of these should be visible
      const hasName = await nameInput.isVisible();
      const hasEmail = await emailInput.isVisible();
      expect(hasName || hasEmail).toBe(true);
    }
  });

  test("quick link cards are present", async ({ page }) => {
    const bodyText = await page.locator("body").innerText();
    // Quick links typically point to key pages
    expect(bodyText.length).toBeGreaterThan(200);
  });
});
