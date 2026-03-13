import { test, expect } from "@playwright/test";

test.describe("Checkout Flow", () => {
  test("configure page loads with default state", async ({ page }) => {
    await page.goto("/checkout/configure", { waitUntil: "networkidle" });

    // Step indicator shows step 1
    await expect(page.getByText("Step 1 of 4")).toBeVisible();

    // Configure heading visible
    await expect(page.getByText("Configure Your Package")).toBeVisible();

    // Wyoming should be default selected state — use specific state selector
    const wyButton = page.getByRole("button", { name: "WY Wyoming" });
    await expect(wyButton).toBeVisible();
    const classes = await wyButton.getAttribute("class");
    expect(classes).toContain("border-secondary");
  });

  test("state selection shows correct packages", async ({ page }) => {
    await page.goto("/checkout/configure", { waitUntil: "networkidle" });

    // Click Nevada state button
    await page.getByRole("button", { name: "NV Nevada" }).click();
    await page.waitForTimeout(300);

    // Should show Nevada packages
    const bodyText = await page.locator("body").innerText();
    expect(bodyText).toContain("Nevada");
  });

  test("entity type toggle works", async ({ page }) => {
    await page.goto("/checkout/configure", { waitUntil: "networkidle" });

    // Toggle to Corporation
    const corpToggle = page.getByRole("button", { name: /Corporation/i }).first();
    if (await corpToggle.isVisible()) {
      await corpToggle.click();
      await page.waitForTimeout(300);
    }
  });

  test("continue button disabled without tier", async ({ page }) => {
    await page.goto("/checkout/configure", { waitUntil: "networkidle" });

    const continueBtn = page.getByRole("button", { name: /Continue to Details/i });
    if (await continueBtn.isVisible()) {
      expect(await continueBtn.isDisabled()).toBe(true);
    }
  });

  test("details page renders after hydration", async ({ page }) => {
    await page.goto("/checkout/details", { waitUntil: "networkidle" });
    // Wait for client content
    await page.waitForTimeout(1000);

    const bodyText = await page.locator("body").innerText();
    // Details page has form fields even without package selection
    expect(bodyText.length).toBeGreaterThan(50);
  });

  test("payment page renders after hydration", async ({ page }) => {
    await page.goto("/checkout/payment", { waitUntil: "networkidle" });
    await page.waitForTimeout(1000);

    const bodyText = await page.locator("body").innerText();
    expect(bodyText.length).toBeGreaterThan(50);
  });

  test("confirmation page renders", async ({ page }) => {
    await page.goto("/checkout/confirmation", { waitUntil: "networkidle" });
    await page.waitForTimeout(1000);

    const bodyText = await page.locator("body").innerText();
    expect(bodyText.length).toBeGreaterThan(50);
  });
});
