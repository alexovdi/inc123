import { test, expect } from "@playwright/test";

test.describe("FAQ Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/faq", { waitUntil: "networkidle" });
    // Wait for client hydration — accordion triggers should appear
    await page.waitForSelector('[data-accordion-trigger]', { timeout: 10000 });
  });

  test("search filters items", async ({ page }) => {
    // Get initial count of accordion trigger buttons
    const initialCount = await page.locator('[data-accordion-trigger]').count();
    expect(initialCount).toBeGreaterThan(0);

    // Type search term
    const searchInput = page.locator('input').first();
    await searchInput.fill("nominee");
    await page.waitForTimeout(500);

    // Count should decrease
    const filteredCount = await page.locator('[data-accordion-trigger]').count();
    expect(filteredCount).toBeLessThan(initialCount);
    expect(filteredCount).toBeGreaterThan(0);
  });

  test("clear search restores all items", async ({ page }) => {
    const initialCount = await page.locator('[data-accordion-trigger]').count();

    const searchInput = page.locator('input').first();
    await searchInput.fill("nominee");
    await page.waitForTimeout(500);
    await searchInput.fill("");
    await page.waitForTimeout(500);

    const restoredCount = await page.locator('[data-accordion-trigger]').count();
    expect(restoredCount).toBe(initialCount);
  });

  test("category filter works", async ({ page }) => {
    const privacyPill = page.getByRole("button", { name: /Business Privacy/i }).first();
    if (await privacyPill.isVisible()) {
      await privacyPill.click();
      await page.waitForTimeout(300);

      const mainText = await page.locator("main").first().innerText();
      expect(mainText).toContain("Business Privacy");
    }
  });

  test("no results state", async ({ page }) => {
    const searchInput = page.locator('input').first();
    await searchInput.fill("xyznonexistent12345");
    await page.waitForTimeout(500);

    const mainText = await page.locator("main").first().innerText();
    expect(mainText).toMatch(/no questions match/i);
  });

  test("accordion expand/collapse", async ({ page }) => {
    // Use data attribute to get a STABLE reference (not re-resolving like [aria-expanded="false"])
    const firstTriggerAttr = await page.locator('[data-accordion-trigger]').first().getAttribute("data-accordion-trigger");
    expect(firstTriggerAttr).toBeTruthy();

    const trigger = page.locator(`[data-accordion-trigger="${firstTriggerAttr}"]`);

    // Should start closed
    await expect(trigger).toHaveAttribute("aria-expanded", "false");

    // Click to expand
    await trigger.click();
    await page.waitForTimeout(300);
    await expect(trigger).toHaveAttribute("aria-expanded", "true");

    // Click to collapse
    await trigger.click();
    await page.waitForTimeout(300);
    await expect(trigger).toHaveAttribute("aria-expanded", "false");
  });
});
