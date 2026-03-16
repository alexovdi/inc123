import { test, expect } from "@playwright/test";

/**
 * All routes in the prototype using flat URL architecture.
 * Each route is tested for:
 * 1. HTTP 200 response
 * 2. Non-trivial body content (>100 chars)
 * 3. No console JS errors
 */
const ALL_ROUTES = [
  // Homepage
  "/",

  // Pillar hub pages
  "/privacy",
  "/asset-protection",
  "/formation",
  "/compliance",

  // Privacy clusters (flat)
  "/anonymous-llc",
  "/nominee-services",
  "/private-incorporation",
  "/offshore-privacy",
  "/wyoming-privacy",
  "/nevada-privacy",

  // Asset Protection clusters (flat)
  "/charging-order-protection",
  "/wyoming-asset-protection",
  "/nevada-asset-protection",
  "/investment-holding-llc",
  "/real-estate",

  // Formation clusters (flat)
  "/wyoming-llc",
  "/nevada-llc",
  "/wyoming-corporation",
  "/nevada-corporation",
  "/shelf-companies",
  "/entity-tax-guide",

  // Compliance clusters (flat)
  "/registered-agent",
  "/annual-reports",
  "/corporate-minutes",
  "/virtual-office",
  "/foreign-registration",
  "/second-tier-state-filings",
  "/shares-corporate-records",
  "/tax-obligations",
  "/wyoming-registered-agent",
  "/nevada-registered-agent",
  "/domestication",

  // Package pages (flat slugs)
  "/wyoming-private-incorporation",
  "/wyoming-incorporation",
  "/nevada-private-incorporation",
  "/nevada-incorporation",
  "/nevada-basic-incorporation",
  "/california-private-incorporation",
  "/florida-private-incorporation",
  "/shelf-company-packages",

  // Comparison pages (flat)
  "/wyoming-vs-nevada-llc",
  "/gold-vs-silver-wyoming",
  "/gold-vs-silver-nevada",
  "/llc-vs-corporation",
  "/wyoming-vs-delaware",
  "/incorporate123-vs-competitors",
  "/best-state-for-privacy",
  "/best-state-for-asset-protection",
  "/wyoming-vs-nevada-privacy",
  "/wyoming-vs-nevada-asset-protection",
  "/shelf-company-vs-new-formation",
  "/llc-vs-scorp-vs-ccorp-tax",

  // State hubs (flat)
  "/wyoming",
  "/nevada",
  "/california",
  "/florida",

  // Packages index & compare
  "/packages",
  "/compare-packages",

  // Utility pages
  "/faq",
  "/about",
  "/contact",
  "/blog",
  "/testimonials",
  "/login",
  "/privacy-policy",
  "/terms",

  // Offshore hub & jurisdiction pages
  "/offshore",
  "/offshore/nevis",
  "/offshore/belize",
  "/offshore/cook-islands",
  "/offshore/panama",
  "/offshore/british-virgin-islands",

  // Additional clusters
  "/anonymous-corporation",
  "/series-llc",
];

// These are client-rendered in Suspense — test HTTP 200 only, content tested elsewhere
const CLIENT_ONLY_ROUTES = [
  "/checkout/configure",
  "/checkout/details",
  "/checkout/payment",
  "/checkout/confirmation",
];

test.describe("All routes return 200 with content", () => {
  for (const route of ALL_ROUTES) {
    test(`${route} loads successfully`, async ({ page }) => {
      const consoleErrors: string[] = [];
      page.on("console", (msg) => {
        if (msg.type() === "error") {
          consoleErrors.push(msg.text());
        }
      });

      const response = await page.goto(route, { waitUntil: "networkidle" });

      // 1. Status code is 200
      expect(response?.status()).toBe(200);

      // 2. Body has substantial content
      const bodyText = await page.locator("body").innerText();
      expect(bodyText.length).toBeGreaterThan(100);

      // 3. No JS console errors (filter out known noise)
      const realErrors = consoleErrors.filter(
        (e) =>
          !e.includes("Fast Refresh") &&
          !e.includes("[HMR]") &&
          !e.includes("favicon") &&
          !e.includes("404") &&
          !e.includes("hydration") &&
          !e.includes("Hydration"),
      );
      expect(realErrors).toEqual([]);
    });
  }

  for (const route of CLIENT_ONLY_ROUTES) {
    test(`${route} returns 200`, async ({ page }) => {
      const response = await page.goto(route, {
        waitUntil: "domcontentloaded",
      });
      expect(response?.status()).toBe(200);
    });
  }
});
