import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

/**
 * Comprehensive axe-core accessibility audit across all page types.
 * Tests WCAG 2.1 AA compliance: color contrast, landmarks, aria, labels, etc.
 *
 * Grouped by page type for clear reporting.
 */

const BASE = "http://localhost:2121";

/** Shared axe config — WCAG 2.1 AA tags */
async function runAxeAudit(page: import("@playwright/test").Page) {
  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "best-practice"])
    .analyze();
  return results;
}

/** Format violations for assertion message */
function formatViolations(violations: import("axe-core").Result[]): string {
  return violations
    .map((v) => {
      const nodes = v.nodes
        .slice(0, 3)
        .map((n) => `    - ${n.html.substring(0, 120)}`)
        .join("\n");
      return `[${v.impact}] ${v.id}: ${v.help} (${v.nodes.length} instances)\n${nodes}`;
    })
    .join("\n\n");
}

// ──────────────────────────────────────────────────────────────────
// Page groups to audit
// ──────────────────────────────────────────────────────────────────

const PAGES = {
  Homepage: ["/"],
  "State Hubs": ["/wyoming", "/nevada", "/california", "/florida"],
  "Pillar Pages": [
    "/privacy",
    "/asset-protection",
    "/formation",
    "/compliance",
  ],
  "Package Pages": [
    "/gold",
    "/silver",
    "/bronze",
    "/packages",
    "/compare-packages",
  ],
  "Offshore Pages": [
    "/offshore",
    "/offshore/nevis",
    "/offshore/irs-compliance",
  ],
  "Comparison Pages": [
    "/wyoming-vs-nevada-llc",
    "/llc-vs-corporation",
    "/best-state-for-privacy",
    "/llc-vs-scorp-vs-ccorp-tax",
  ],
  "Cluster Pages": [
    "/anonymous-llc",
    "/charging-order-protection",
    "/wyoming-llc",
    "/registered-agent",
  ],
  "Utility Pages": [
    "/about",
    "/contact",
    "/faq",
    "/blog",
    "/testimonials",
    "/privacy-policy",
    "/terms",
  ],
};

// ──────────────────────────────────────────────────────────────────
// Tests
// ──────────────────────────────────────────────────────────────────

for (const [group, routes] of Object.entries(PAGES)) {
  test.describe(`Accessibility: ${group}`, () => {
    for (const route of routes) {
      test(`${route} has no critical/serious a11y violations`, async ({
        page,
      }) => {
        await page.goto(`${BASE}${route}`, { waitUntil: "networkidle" });

        const results = await runAxeAudit(page);

        // Filter to critical and serious only for hard failure
        const criticalSerious = results.violations.filter(
          (v) => v.impact === "critical" || v.impact === "serious",
        );

        if (criticalSerious.length > 0) {
          console.log(
            `\n⚠️  ${route} — ${criticalSerious.length} critical/serious violations:\n${formatViolations(criticalSerious)}`,
          );
        }

        // Also log moderate/minor for reference
        const moderate = results.violations.filter(
          (v) => v.impact === "moderate" || v.impact === "minor",
        );
        if (moderate.length > 0) {
          console.log(
            `\nℹ️  ${route} — ${moderate.length} moderate/minor violations:\n${formatViolations(moderate)}`,
          );
        }

        // Fail on critical and serious
        expect(
          criticalSerious,
          `${route} has ${criticalSerious.length} critical/serious a11y violations:\n${formatViolations(criticalSerious)}`,
        ).toHaveLength(0);
      });
    }
  });
}
