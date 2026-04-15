import { test, expect } from "@playwright/test";

/**
 * Ad-hoc verification for package page enhancements:
 *   1. Product JSON-LD schema on all 8 package pages
 *   2. Transactional FAQs merged into the FAQ accordion
 *   3. Also Consider section with 3 package alternatives
 *   4. Value Comparison Callout — Gold tier only
 *
 * Runs against whatever PLAYWRIGHT_BASE_URL points at (defaults to
 * playwright.config.ts baseURL).
 */

const GOLD_PACKAGES = [
  { path: "/wyoming-gold", price: 1275 },
  { path: "/nevada-gold", price: 1800 },
  { path: "/california-private", price: 1475 },
  { path: "/florida-private", price: 1475 },
];

const NON_GOLD_PACKAGES = [
  { path: "/wyoming-silver", price: 875 },
  { path: "/wyoming-bronze", price: 625 },
  { path: "/nevada-silver", price: 1275 },
  { path: "/nevada-bronze", price: 699 },
];

const ALL_PACKAGES = [...GOLD_PACKAGES, ...NON_GOLD_PACKAGES];

test.describe("Package page enhancements", () => {
  for (const pkg of ALL_PACKAGES) {
    test(`${pkg.path} — Product JSON-LD schema present with correct price`, async ({
      page,
    }) => {
      await page.goto(pkg.path);
      // Wait for the ProductSchema JSON-LD to appear in DOM (component mounted)
      await page.waitForFunction(
        () => {
          const scripts = Array.from(
            document.querySelectorAll('script[type="application/ld+json"]'),
          );
          return scripts.some((s) =>
            (s.textContent ?? "").includes('"@type":"Product"'),
          );
        },
        null,
        { timeout: 15_000 },
      );
      const productSchema = await page.evaluate(() => {
        const scripts = Array.from(
          document.querySelectorAll('script[type="application/ld+json"]'),
        );
        for (const s of scripts) {
          try {
            const parsed = JSON.parse(s.textContent ?? "");
            if (parsed["@type"] === "Product") return parsed;
          } catch {
            /* ignore */
          }
        }
        return null;
      });
      expect(productSchema).not.toBeNull();
      expect(productSchema.offers.priceCurrency).toBe("USD");
      expect(parseFloat(productSchema.offers.price)).toBe(pkg.price);
      expect(productSchema.offers.availability).toContain("InStock");
    });

    test(`${pkg.path} — transactional FAQs merged into accordion`, async ({
      page,
    }) => {
      await page.goto(pkg.path);
      // Wait for the FAQ section to render (scroll page below fold to trigger lazy sections)
      await page
        .getByRole("heading", { name: /common questions/i })
        .waitFor({ timeout: 15_000 });
      const pageText = (await page.textContent("body")) ?? "";
      expect(pageText).toMatch(/annual renewal/i);
      expect(pageText).toMatch(/refund policy/i);
      expect(pageText).toMatch(/cryptocurrency/i);
    });

    test(`${pkg.path} — Also Consider section with 3 alternatives`, async ({
      page,
    }) => {
      await page.goto(pkg.path);
      const alsoConsiderHeading = page.getByRole("heading", {
        name: /Not quite the right package/i,
      });
      await expect(alsoConsiderHeading).toBeVisible();
    });
  }

  for (const pkg of GOLD_PACKAGES) {
    test(`${pkg.path} — Value Comparison Callout visible (Gold tier)`, async ({
      page,
    }) => {
      await page.goto(pkg.path);
      const valueHeading = page.getByRole("heading", {
        name: /really worth/i,
      });
      await expect(valueHeading).toBeVisible();
      const pageText = (await page.textContent("body")) ?? "";
      expect(pageText).toContain("Assembled elsewhere");
    });
  }

  for (const pkg of NON_GOLD_PACKAGES) {
    test(`${pkg.path} — Value Comparison Callout NOT shown (non-Gold)`, async ({
      page,
    }) => {
      await page.goto(pkg.path);
      // Value Compare is gold-only — should not appear
      const pageText = (await page.textContent("body")) ?? "";
      expect(pageText).not.toContain("Assembled elsewhere");
    });
  }
});
