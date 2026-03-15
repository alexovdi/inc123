import { test, expect } from "@playwright/test";

/**
 * All 50+ routes in the prototype.
 * Each route is tested for:
 * 1. HTTP 200 response
 * 2. Non-trivial body content (>100 chars)
 * 3. No console JS errors
 *
 * Note: Checkout details/payment/confirmation are client-rendered inside
 * Suspense and may have minimal SSR content. They're tested separately
 * in checkout.spec.ts.
 */
const ALL_ROUTES = [
  // Homepage
  "/",

  // Pillar pages
  "/privacy",
  "/asset-protection",
  "/formation",
  "/compliance",

  // Privacy clusters
  "/privacy/anonymous-llc",
  "/privacy/nominee-services",
  "/privacy/private-incorporation",
  "/privacy/offshore-privacy",

  // Asset Protection clusters
  "/asset-protection/charging-order-protection",
  "/asset-protection/wyoming",
  "/asset-protection/nevada",
  "/asset-protection/investment-holding-llc",
  "/asset-protection/real-estate",

  // Formation clusters
  "/formation/wyoming-llc",
  "/formation/nevada-llc",
  "/formation/wyoming-corporation",
  "/formation/nevada-corporation",
  "/formation/shelf-companies",
  "/formation/entity-tax-guide",

  // Compliance clusters
  "/compliance/registered-agent",
  "/compliance/annual-reports",
  "/compliance/corporate-minutes",
  "/compliance/virtual-office",
  "/compliance/foreign-registration",
  "/compliance/second-tier-state-filings",
  "/compliance/shares-corporate-records",
  "/compliance/tax-obligations",

  // Package pages
  "/packages/wyoming-gold",
  "/packages/wyoming-silver",
  "/packages/nevada-gold",
  "/packages/nevada-silver",
  "/packages/nevada-bronze",
  "/packages/california-private",
  "/packages/florida-private",
  "/packages/shelf-companies",

  // Comparison pages
  "/compare/wyoming-vs-nevada-llc",
  "/compare/gold-vs-silver-wyoming",
  "/compare/gold-vs-silver-nevada",
  "/compare/llc-vs-corporation",
  "/compare/wyoming-vs-delaware",
  "/compare/incorporate123-vs-competitors",

  // State hubs
  "/states/wyoming",
  "/states/nevada",
  "/states/california",
  "/states/florida",

  // Additional comparison pages
  "/compare/best-state-for-privacy",
  "/compare/best-state-for-asset-protection",
  "/compare/wyoming-vs-nevada-privacy",
  "/compare/wyoming-vs-nevada-asset-protection",
  "/compare/shelf-company-vs-new-formation",
  "/compare/llc-vs-scorp-vs-ccorp-tax",

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
          !e.includes("Hydration")
      );
      expect(realErrors).toEqual([]);
    });
  }

  for (const route of CLIENT_ONLY_ROUTES) {
    test(`${route} returns 200`, async ({ page }) => {
      const response = await page.goto(route, { waitUntil: "domcontentloaded" });
      expect(response?.status()).toBe(200);
    });
  }
});
