# Incorporate123 — Homepage Wireframe Specification (Structure & Content)

**Prepared by:** BIT Studios
**Prepared for:** David, Incorporate123
**Date:** March 2026
**Phase:** 2 — UX & Interactive Prototyping
**Template Type:** Homepage (1 of 9 template types)
**URL:** `/`
**Version:** 1.1 — Updated with Content Guide alignment improvements

### Changelog (v1.1)

| #   | Change                                                                                  | Section   | Rationale                                                                                                                         |
| --- | --------------------------------------------------------------------------------------- | --------- | --------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Added consultation safety net below hero CTAs                                           | 3.2       | Brand rule: every self-service CTA must have a "Talk to us" alternative nearby (User Journey Mapping doc)                         |
| 2   | Trust strip now shows "$1,275 All-Inclusive" instead of generic "All-Inclusive Pricing" | 3.2       | Sets price expectations early; signals premium positioning so budget shoppers self-select out                                     |
| 3   | Card 3 title changed from "Company Formation" to "Business Incorporation"               | 4.2       | David's preferred terminology (more American-sounding)                                                                            |
| 4   | Added "Already have a company?" returning-client link below pillar cards                | 4.3 (new) | Catches existing-entity visitors who don't fit the three commercial pillar cards                                                  |
| 5   | Added Gold card visual elevation spec (taller, blue border, badge)                      | 5.2       | Brand Guide: "Always show Gold first or highlighted" — badge alone is insufficient                                                |
| 6   | Added consultation safety net below package cards                                       | 5.2       | Same brand rule as #1 — self-service CTAs need a human alternative nearby                                                         |
| 7   | Removed Bronze mention from "How It Works" Step 2                                       | 9.2       | Brand Guide: "Never position Bronze as the default" and "minimal messaging" for Bronze                                            |
| 8   | Crypto trust badge updated to "Crypto Payments for Privacy"                             | 8         | Ties payment method to brand positioning — accepting crypto is unremarkable; accepting it for privacy reasons is a differentiator |
| 9   | Amber contrast accessibility note added                                                 | 16        | `#d97706` on white is 3.1:1 — passes AA for large text only; flagged for design awareness                                         |

---

## 1. Page Purpose & Strategic Role

The homepage is the single most-trafficked entry point and serves three simultaneous functions: intent router for new visitors, direct-to-package shortcut for informed buyers, and returning-client portal access. It must immediately communicate the repositioned brand identity — Privacy, Asset Protection & Business Formation Specialists — while providing clear paths into all four content pillars and the package/checkout flow.

The homepage replaces the current geography-first structure (pick a state → find services) with an intent-first architecture (identify your need → explore solutions → compare → purchase).

### Primary Objectives

- Establish Incorporate123 as a premium privacy and asset protection specialist, not a budget formation company
- Route visitors into one of three intent paths: Privacy, Asset Protection, or Formation
- Provide a direct shortcut to packages for visitors who already know what they want
- Surface trust signals that compensate for zero public reviews at launch
- Support both self-service and consultation conversion funnels

### Target Audiences on Homepage

| Audience             | What They Need                                      | Where the Homepage Sends Them                     |
| -------------------- | --------------------------------------------------- | ------------------------------------------------- |
| Privacy Researcher   | Understand anonymous LLC, nominee services          | Privacy pillar → clusters → Gold package          |
| Asset Protector      | LLC protection, charging orders, holding structures | Asset Protection pillar → clusters → Gold package |
| Formation Researcher | LLC/Corp in Wyoming or Nevada                       | Formation pillar → clusters → Silver/Gold package |
| Informed Buyer       | Already knows what they want, ready to buy          | Direct to packages or checkout                    |
| Returning Client     | Needs compliance services, renewal                  | Compliance pillar                                 |
| CA/FL Business Owner | Privacy from state disclosure requirements          | Privacy pillar → state-specific clusters          |

---

## 2. Global Header

The header is persistent across all pages. It appears on every viewport and does not change between page types (except active nav state).

### 2.1 Top Utility Bar (Optional — Desktop Only)

| Element      | Content                                                      | Behavior                                        |
| ------------ | ------------------------------------------------------------ | ----------------------------------------------- |
| Phone Number | (775) xxx-xxxx                                               | Tap-to-call on mobile; visible on all viewports |
| Tagline      | "Privacy, Asset Protection & Business Formation Specialists" | Desktop only; hidden on mobile                  |

### 2.2 Primary Header Bar

| Element            | Position            | Behavior                                                           |
| ------------------ | ------------------- | ------------------------------------------------------------------ |
| Logo               | Left-aligned        | Links to homepage `/`; includes "Incorporate123" wordmark          |
| Primary Navigation | Center              | 5 items: Privacy · Asset Protection · Formation · Packages · About |
| Get Started CTA    | Right               | Primary button; routes to `/compare-packages/`                     |
| Phone Icon         | Right (mobile only) | Tap-to-call; visible on mobile header                              |

### 2.3 Mega Menu Behavior

Each of the first three nav items (Privacy, Asset Protection, Formation) triggers a mega dropdown on hover (desktop) or accordion expand on tap (mobile).

**Desktop Mega Menu — Privacy:**

| Column      | Links                                                                                                                                                                                       |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Clusters    | Anonymous LLC Formation · Nominee Services · Wyoming Private Incorporation · Nevada Private Incorporation · California Private LLC · Florida Private LLC · Offshore Privacy · BOI Reporting |
| Compare     | Wyoming vs Nevada Privacy · Best State for Privacy                                                                                                                                          |
| Quick Links | Gold Packages (Privacy) · Schedule Consultation                                                                                                                                             |

**Desktop Mega Menu — Asset Protection:**

| Column      | Links                                                                                                                                                        |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Clusters    | Nevada Asset Protection · Wyoming Asset Protection · Charging Order Protection · Investment Holding LLC · Real Estate Asset Protection · LLC vs Living Trust |
| Compare     | Best State for AP · WY vs NV for AP                                                                                                                          |
| Quick Links | Gold Packages (AP) · Schedule Consultation                                                                                                                   |

**Desktop Mega Menu — Formation:**

| Column      | Links                                                                                                      |
| ----------- | ---------------------------------------------------------------------------------------------------------- |
| Clusters    | Wyoming LLC · Nevada LLC · Wyoming Corporation · Nevada Corporation · LLC vs Corporation · Shelf Companies |
| Compare     | Wyoming vs Nevada LLC · Best State for LLC · LLC vs Corporation                                            |
| Quick Links | All Packages · Schedule Consultation                                                                       |

**Desktop Mega Menu — Packages:**

| Column     | Links                                        |
| ---------- | -------------------------------------------- |
| Wyoming    | Gold (Privacy) · Silver (Formation) · Bronze |
| Nevada     | Gold (Privacy) · Silver (Formation) · Bronze |
| Shelf      | Shelf Companies                              |
| Quick Link | Compare All Packages → `/compare-packages/`  |

**About Dropdown:** About Us · Contact · Testimonials (simple dropdown, no multi-column)

**Mobile Navigation:**

- Hamburger menu icon replaces nav items
- Accordion expand for each pillar (tap pillar name → reveals cluster list)
- Packages appear above fold in mobile menu
- Persistent phone number with tap-to-call
- Sticky bottom CTA bar on mobile: primary action button + phone icon

---

## 3. Hero Section

The hero is the first content block below the header. It must accomplish two things simultaneously: communicate the brand repositioning and route visitors toward their intent.

### 3.1 Layout

**Desktop:** Full-width section with a split layout — left side contains headline, subheadline, and dual CTA; right side contains a supporting visual (professional photography of Reno office or abstract privacy/shield imagery).

**Mobile:** Stacked layout — headline and CTAs first, image below or hidden.

### 3.2 Content

| Element                 | Content                                                                                                                                                             | Notes                                                                                                                                                                                                 |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Eyebrow                 | "Trusted Since 2000 · Privacy Specialists"                                                                                                                          | Establishes credibility immediately                                                                                                                                                                   |
| H1 Headline             | "Privacy, Asset Protection & Business Formation — All-Inclusive, Nothing Hidden"                                                                                    | Primary SEO target; establishes new positioning                                                                                                                                                       |
| Subheadline             | "Year-round nominee services, offshore records, and expert formation in Wyoming and Nevada. 25 years of specialized experience protecting your privacy and assets." | Communicates unique value; differentiates from budget providers                                                                                                                                       |
| Primary CTA             | "Protect Your Privacy →"                                                                                                                                            | Routes to `/privacy/` pillar; amber button (`--accent` #d97706)                                                                                                                                       |
| Secondary CTA           | "View Packages & Pricing →"                                                                                                                                         | Routes to `/compare-packages/`; outline/ghost button (`--secondary` #2563eb)                                                                                                                          |
| Consultation Safety Net | "Have questions? Call (775) xxx-xxxx"                                                                                                                               | Subtle text link below CTAs — not a button. Satisfies brand rule: every self-service CTA must have a "Talk to us" alternative nearby.                                                                 |
| Trust Strip             | "25 Years · Real Reno Office · $1,275 All-Inclusive · Money-Back Guarantee"                                                                                         | Horizontal badge row below CTAs. "$1,275 All-Inclusive" (instead of generic "All-Inclusive Pricing") sets price expectations early and signals premium positioning — budget shoppers self-select out. |

### 3.3 Above-Fold Requirements

The following must be visible without scrolling on standard desktop viewports (1440×900):

- Full headline and subheadline
- Both CTA buttons and consultation safety net text
- Trust strip badges
- At minimum, the top edge of the pillar navigation cards (signals more content below)

---

## 4. Pillar Navigation Section

Immediately below the hero. This is the primary intent-routing mechanism — three cards that map to the first three content pillars.

### 4.1 Section Header

| Element          | Content                                                                                                     |
| ---------------- | ----------------------------------------------------------------------------------------------------------- |
| Section Eyebrow  | "How Can We Help?"                                                                                          |
| Section Headline | "Choose Your Starting Point"                                                                                |
| Section Subtext  | "Whether you need privacy protection, asset shielding, or business formation — we specialize in all three." |

### 4.2 Three Pillar Cards

Layout: Three equal-width cards in a horizontal row (desktop); stacked vertically (mobile). Each card has a visual accent identifying its pillar.

#### Card 1: Privacy (Lead Position)

| Element          | Content                                                                                                            |
| ---------------- | ------------------------------------------------------------------------------------------------------------------ |
| Pillar           | Privacy (lead position — first card)                                                                               |
| Icon             | Shield or Lock                                                                                                     |
| Card Title       | "Business Privacy"                                                                                                 |
| Card Description | "Anonymous LLCs, year-round nominee services, offshore records custodian. Real privacy — not 'nominee for a day.'" |
| Key Services     | Anonymous LLC Formation · Nominee Services · Wyoming/Nevada Private Incorporation · Offshore Privacy               |
| Card CTA         | "Explore Privacy Solutions →"                                                                                      |
| Routes To        | `/privacy/`                                                                                                        |

#### Card 2: Asset Protection

| Element          | Content                                                                                                             |
| ---------------- | ------------------------------------------------------------------------------------------------------------------- |
| Pillar           | Asset Protection                                                                                                    |
| Icon             | Vault or ShieldCheck                                                                                                |
| Card Title       | "Asset Protection"                                                                                                  |
| Card Description | "Charging order protection, holding structures, and multi-entity strategies for individuals with $500K+ in assets." |
| Key Services     | Charging Order Protection · Wyoming/Nevada AP · Investment Holding LLC · Real Estate AP                             |
| Card CTA         | "Protect Your Assets →"                                                                                             |
| Routes To        | `/asset-protection/`                                                                                                |

#### Card 3: Company Formation

| Element          | Content                                                                                                                                     |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Pillar           | Formation                                                                                                                                   |
| Icon             | Building or FileCheck                                                                                                                       |
| Card Title       | "Business Incorporation"                                                                                                                    |
| Card Description | "Expert LLC and Corporation formation in Wyoming and Nevada. Everything included — registered agent, EIN, operating agreement, state fees." |
| Key Services     | Wyoming LLC · Nevada LLC · Wyoming Corporation · Nevada Corporation                                                                         |
| Card CTA         | "Start Your Company →"                                                                                                                      |
| Routes To        | `/formation/`                                                                                                                               |

### 4.3 Below Cards — Returning Client Link

Below the three pillar cards, include a subtle text link for returning clients: **"Already have a company? Explore compliance services →"** routing to `/compliance/` or scrolling to Section 10. This costs zero visual weight but catches visitors with existing entities who need registered agent or compliance services and don't see themselves in the three pillar cards above.

---

## 5. Package Quick Links Section

For visitors who already know what they want (Informed Buyer journey). Provides a direct shortcut to packages without requiring pillar education.

### 5.1 Section Header

| Element          | Content                                                                             |
| ---------------- | ----------------------------------------------------------------------------------- |
| Section Eyebrow  | "Ready to Get Started?"                                                             |
| Section Headline | "All-Inclusive Packages — See Exactly What's Included"                              |
| Section Subtext  | "Transparent pricing with everything bundled. No hidden fees, no surprise add-ons." |

### 5.2 Package Cards

Layout: Horizontal row or 2×2 grid (desktop); horizontal scroll or stacked (mobile). Show the 4 primary packages with pricing visible. **Gold cards must be visually elevated:** slightly taller card height, privacy-blue top border or glow effect, and "Most Popular" badge. Silver cards should feel solid but clearly secondary — same structure, no elevation or accent border.

#### Card Structure (repeated per package)

| Element      | Description                                                                          |
| ------------ | ------------------------------------------------------------------------------------ |
| State Badge  | "Wyoming" or "Nevada"                                                                |
| Tier Badge   | "Gold · Privacy" — highlighted as "Most Popular" where applicable                    |
| Package Name | e.g., "Wyoming Gold Package"                                                         |
| Price        | e.g., "$1,275" with "all-inclusive" label                                            |
| Renewal      | e.g., "$525/year with nominees"                                                      |
| Key Includes | 3–4 items: Year-Round Nominees · Registered Agent · EIN Filing · Operating Agreement |
| CTA          | "View Full Details →"                                                                |
| Routes To    | `/packages/wyoming-gold/` (etc.)                                                     |

#### Packages to Display

| Package                    | Price  | Renewal                 | Badge          |
| -------------------------- | ------ | ----------------------- | -------------- |
| Wyoming Gold (Privacy)     | $1,275 | $525/year with nominees | "Most Popular" |
| Nevada Gold (Privacy)      | $1,800 | $525/year with nominees | —              |
| Wyoming Silver (Formation) | $875   | $325/year               | —              |
| Nevada Silver (Formation)  | $1,275 | $325/year               | —              |

Below cards: "Compare All Packages →" link routing to `/compare-packages/`. Followed by consultation safety net: **"Not sure which package? Call (775) xxx-xxxx for a free consultation."** (Subtle text, not a button — satisfies the brand rule that every self-service CTA must have a "Talk to us" alternative nearby.)

---

## 6. Differentiator / Value Proposition Section

Communicates why Incorporate123 is different from both budget filers ($0–$399) and consultation-gated premium firms ($2,750+). Positions the company in the white space between these segments.

This section should visually contrast with surrounding sections (dark background) to break page rhythm.

### 6.1 Section Header

| Element          | Content                                                                                                             |
| ---------------- | ------------------------------------------------------------------------------------------------------------------- |
| Section Headline | "Why Clients Choose Incorporate123"                                                                                 |
| Section Subtext  | "25 years of specialized privacy and formation expertise — not a budget filing service, not a $5,000 consultation." |

### 6.2 Differentiator Grid

Layout: 2×3 grid (desktop); single column (mobile). Six items, each with icon, title, and description.

| #   | Icon       | Title                          | Description                                                                                                                  |
| --- | ---------- | ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------- |
| 1   | Clock      | "Year-Round Nominees Included" | "Not 'nominee for a day' — your nominees serve all year, every year. Included in Gold packages at no extra cost."            |
| 2   | Globe      | "Offshore Records Since 2012"  | "Corporate records stored offshore for genuine privacy. Free with every Gold package — competitors charge $400–$5,000/year." |
| 3   | DollarSign | "All-Inclusive Pricing"        | "Formation, registered agent, EIN, operating agreement, and state fees — all bundled. No surprise add-ons at checkout."      |
| 4   | MapPin     | "Real Reno Office"             | "Not a P.O. box operation. Professional offices in Reno, Nevada with real staff and a physical address you can visit."       |
| 5   | Award      | "25 Years of Specialization"   | "Focused exclusively on Wyoming and Nevada privacy formation since 2000. Depth over breadth."                                |
| 6   | Phone      | "Talk to a Real Person"        | "Have questions? Call us directly. No chatbots, no offshore call centers, no sales pressure."                                |

---

## 7. Social Proof / Testimonials Section

With zero public reviews at launch, this section relies on alternative trust signals. Post-launch, it transitions to a Trustpilot-powered review carousel.

### 7.1 Launch Version (Pre-Reviews)

Layout: Horizontal carousel or 3-card row.

| Element           | Content                                                                                                                               |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Section Headline  | "Trusted by Business Owners Nationwide"                                                                                               |
| Testimonial Cards | 2–3 anonymized client testimonials (David to supply)                                                                                  |
| Card Structure    | Quote text + attribution (first name, state, year) + 5-star rating                                                                    |
| Fallback          | If no testimonials available: replace with "By the Numbers" stats bar — "25 Years · X Entities Formed · Wyoming & Nevada Specialists" |

### 7.2 Post-Launch Version

| Element              | Content                                  |
| -------------------- | ---------------------------------------- |
| Trustpilot Widget    | Embedded review carousel from Trustpilot |
| "Leave a Review" CTA | Link to Trustpilot profile               |
| Target               | 100+ reviews within 6 months of launch   |

---

## 8. Trust Signals Bar

A compact, scannable strip of trust indicators.

Layout: Horizontal row of icon + label pairs, evenly spaced (desktop); 2×3 grid (mobile).

| Icon           | Label                           |
| -------------- | ------------------------------- |
| Calendar       | "Trusted Since 2000"            |
| Building       | "Real Reno Office"              |
| Shield/Check   | "30-Day Money-Back Guarantee"   |
| Phone          | "(775) xxx-xxxx · Call Anytime" |
| Bitcoin/Crypto | "Crypto Payments for Privacy"   |
| Lock           | "Secure Checkout"               |

---

## 9. How It Works Section

A 3- or 4-step process visualization showing the path from research to formation. Reduces perceived complexity.

### 9.1 Section Header

| Element          | Content                                                                |
| ---------------- | ---------------------------------------------------------------------- |
| Section Headline | "How It Works"                                                         |
| Section Subtext  | "From research to fully formed and protected — we handle the details." |

### 9.2 Steps

Layout: Horizontal step indicators connected by lines (desktop); vertical timeline (mobile).

| Step | Icon        | Title                          | Description                                                                                                                                                                    |
| ---- | ----------- | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1    | Search      | "Choose Your Protection Level" | "Explore our Privacy, Asset Protection, or Formation guides — or jump straight to packages if you already know what you need."                                                 |
| 2    | Package     | "Select Your Package"          | "Pick the package that fits your needs. Gold for full privacy with year-round nominees, Silver for expert formation with everything included. All packages are all-inclusive." |
| 3    | FileText    | "We Handle the Filing"         | "Complete a short form with your entity details. We file with the state, obtain your EIN, prepare your operating agreement, and set up registered agent service."              |
| 4    | CheckCircle | "You're Protected"             | "Receive your formation documents, nominee confirmations, and ongoing compliance support. Your privacy and assets are secured."                                                |

---

## 10. Compliance / Returning Client Callout

A section acknowledging existing clients and the Compliance pillar. Ensures returning visitors don't feel the site has forgotten them.

This section should have a visual identity tied to the Compliance pillar (purple accent).

### 10.1 Content

Layout: Full-width card with split content — left side text, right side icon or illustration.

| Element     | Content                                                                                                                                                    |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Headline    | "Already Have an Entity? We Keep You Compliant."                                                                                                           |
| Description | "Registered agent renewals, annual reports, corporate minutes, virtual office upgrades, and domestication services. Ongoing support — not just a mailbox." |
| Primary CTA | "Explore Compliance Services →" → `/compliance/`                                                                                                           |

---

## 11. Final Conversion CTA Section

The bottom-of-page conversion section. Repeats the primary CTAs for visitors who have scrolled through the full homepage.

This section should be visually dark/high-contrast to create urgency, matching the differentiator section's weight.

### 11.1 Content

| Element       | Content                                                                                 |
| ------------- | --------------------------------------------------------------------------------------- |
| Headline      | "Ready to Protect Your Privacy and Assets?"                                             |
| Subtext       | "Start with a package, or schedule a free consultation to discuss your specific needs." |
| Primary CTA   | "View Packages & Pricing →" → `/compare-packages/`                                      |
| Secondary CTA | "Schedule a Consultation →" → `/contact/` or calendar link                              |
| Phone         | "(775) xxx-xxxx" with tap-to-call                                                       |

---

## 12. Global Footer

The footer is persistent across all pages. It serves as a complete sitemap and includes legal, contact, and SEO-relevant links.

### 12.1 Footer Structure

Layout: 4-column grid (desktop); stacked accordion (mobile).

#### Column 1: Privacy Pillar

| Label                         | URL                               |
| ----------------------------- | --------------------------------- |
| **Business Privacy** (header) | `/privacy/`                       |
| Anonymous LLC Formation       | `/anonymous-llc/`                 |
| Nominee Services              | `/nominee-services/`              |
| Wyoming Private Incorporation | `/wyoming-private-incorporation/` |
| Nevada Private Incorporation  | `/nevada-private-incorporation/`  |
| California Private LLC        | `/california-private-llc/`        |
| Florida Private LLC           | `/florida-private-llc/`           |
| Best State for Privacy        | `/best-state-privacy/`            |
| Wyoming vs Nevada Privacy     | `/wyoming-vs-nevada-privacy/`     |

#### Column 2: Asset Protection + Formation

| Label                          | URL                           |
| ------------------------------ | ----------------------------- |
| **Asset Protection** (header)  | `/asset-protection/`          |
| Charging Order Protection      | `/charging-order-protection/` |
| Wyoming Asset Protection       | `/wyoming-asset-protection/`  |
| Nevada Asset Protection        | `/nevada-asset-protection/`   |
| Investment Holding LLC         | `/investment-holding-llc/`    |
| **Company Formation** (header) | `/formation/`                 |
| Wyoming LLC                    | `/wyoming-llc/`               |
| Nevada LLC                     | `/nevada-llc/`                |
| Wyoming Corporation            | `/wyoming-corporation/`       |
| Nevada Corporation             | `/nevada-corporation/`        |

#### Column 3: Packages + States

| Label                      | URL                         |
| -------------------------- | --------------------------- |
| **Packages** (header)      | `/compare-packages/`        |
| Wyoming Gold (Privacy)     | `/packages/wyoming-gold/`   |
| Wyoming Silver (Formation) | `/packages/wyoming-silver/` |
| Nevada Gold (Privacy)      | `/packages/nevada-gold/`    |
| Nevada Silver (Formation)  | `/packages/nevada-silver/`  |
| **By State** (header)      |                             |
| Wyoming                    | `/wyoming/`                 |
| Nevada                     | `/nevada/`                  |
| California                 | `/california/`              |
| Florida                    | `/florida/`                 |

#### Column 4: Company + Support

| Label                    | URL                  |
| ------------------------ | -------------------- |
| **Company** (header)     |                      |
| About Us                 | `/about/`            |
| Contact                  | `/contact/`          |
| Testimonials             | `/testimonials/`     |
| Blog                     | `/blog/`             |
| FAQ                      | `/faq/`              |
| **Compliance** (header)  | `/compliance/`       |
| Registered Agent         | `/registered-agent/` |
| Annual Reports           | `/annual-reports/`   |
| Offshore (de-emphasized) | `/offshore/`         |

### 12.2 Footer Bottom Bar

| Element         | Content                                                                 |
| --------------- | ----------------------------------------------------------------------- |
| Copyright       | "© 2026 Incorporate123. All rights reserved."                           |
| Legal Links     | Privacy Policy · Terms of Service                                       |
| Phone           | "(775) xxx-xxxx"                                                        |
| Address         | Reno, Nevada office address                                             |
| Payment Methods | Visa · Mastercard · AMEX · Bitcoin · Ethereum · XRP · Litecoin · Monero |
| Crypto Note     | "We accept cryptocurrency for your privacy"                             |

---

## 13. Mobile-Specific Requirements

### 13.1 Sticky Bottom CTA Bar

A persistent bottom bar that appears on scroll (mobile only).

| Element                  | Behavior                                                                    |
| ------------------------ | --------------------------------------------------------------------------- |
| Primary CTA (~70% width) | "Get Started →" routes to `/compare-packages/`                              |
| Phone Icon (~30% width)  | Tap-to-call `tel:` link                                                     |
| Trigger                  | Appears after scrolling past hero section; hides when hero CTAs are visible |

### 13.2 Mobile Section Order

The stacking order on mobile follows the same sequence as desktop:

1. Header (compact, hamburger nav)
2. Hero (stacked: headline → CTAs → trust strip; image hidden or below)
3. Pillar Navigation Cards (stacked vertically, full-width)
4. Package Quick Links (horizontal scroll)
5. Differentiator Grid (single column, 6 items stacked)
6. Testimonials (horizontal swipe carousel)
7. Trust Signals (2×3 grid)
8. How It Works (vertical timeline)
9. Compliance Callout (full-width card)
10. Final CTA (centered, stacked buttons)
11. Footer (accordion expand per column)

---

## 14. Interaction Behavior

### Navigation

| Interaction     | Desktop                                     | Mobile                  |
| --------------- | ------------------------------------------- | ----------------------- |
| Mega menu       | Hover-triggered with delay before close     | Tap-triggered accordion |
| Active state    | Visual indicator on current pillar          | Bold text with accent   |
| Scroll behavior | Header shrinks to compact version on scroll | Header fixed, no shrink |

### CTAs

| Interaction | Behavior                             |
| ----------- | ------------------------------------ |
| Hover       | Subtle lift and darkening            |
| Focus       | Visible focus ring for accessibility |
| Active      | Press feedback (slight depression)   |

### Cards

| Interaction          | Behavior                                               |
| -------------------- | ------------------------------------------------------ |
| Pillar card hover    | Shadow increase and slight lift                        |
| Package card hover   | Shadow increase and border accent                      |
| Testimonial carousel | Auto-advance every 6s; pause on hover; swipe on mobile |

---

## 15. SEO Requirements

| Element          | Value                                                                                                                                                                                      |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Title Tag        | "Incorporate123 — Privacy, Asset Protection & Business Formation Specialists"                                                                                                              |
| Meta Description | "25 years forming anonymous LLCs and corporations in Wyoming and Nevada. Year-round nominee services, offshore records, and all-inclusive pricing. Protect your privacy and assets today." |
| H1               | Hero headline (one H1 per page)                                                                                                                                                            |
| H2s              | Section headlines: "Choose Your Starting Point", "All-Inclusive Packages", "Why Clients Choose Incorporate123", "How It Works", etc.                                                       |
| Schema Markup    | Organization schema (name, address, phone, founding date), LocalBusiness schema (Reno office), FAQ schema if any FAQ content present                                                       |
| Canonical URL    | `https://incorporate123.com/` (pending domain decision)                                                                                                                                    |
| Open Graph       | Title, description, hero image for social sharing                                                                                                                                          |

---

## 16. Accessibility Requirements

| Requirement         | Implementation                                                                                                                                                                                                                           |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Color contrast      | WCAG 2.1 AA minimum (4.5:1 for text, 3:1 for large text). **Note:** Amber `#d97706` on white is 3.1:1 — passes for large text (CTA buttons) only. For small amber text, use dark amber `#b45309` (4.4:1) or ensure sufficient font size. |
| Keyboard navigation | All interactive elements focusable and operable via keyboard                                                                                                                                                                             |
| Skip navigation     | "Skip to main content" link as first focusable element                                                                                                                                                                                   |
| Alt text            | All images have descriptive alt text                                                                                                                                                                                                     |
| ARIA labels         | Mega menu, carousel, and accordion have proper ARIA roles and states                                                                                                                                                                     |
| Focus indicators    | Visible focus ring on all focusable elements                                                                                                                                                                                             |
| Semantic HTML       | `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<article>`                                                                                                                                                                      |
| Reduced motion      | Respect `prefers-reduced-motion` for all animations                                                                                                                                                                                      |

---

## 17. Content Dependencies & Open Items

| Item                                    | Status               | Owner             | Impact                                            |
| --------------------------------------- | -------------------- | ----------------- | ------------------------------------------------- |
| Domain decision (`.co` vs `.com`)       | Pending              | David             | Affects canonical URL, all internal links         |
| Package tier names (Gold/Silver/Bronze) | Pending confirmation | David             | Affects package card labels and CTAs              |
| Testimonials                            | David to collect     | David             | Determines testimonial section vs. stats fallback |
| Professional office photography         | Needed               | David/BIT Studios | Hero visual, trust signals                        |
| David's professional bio photo          | Needed               | David             | About page + potential homepage use               |
| Phone number confirmation               | Needed               | David             | Header, CTAs, footer                              |
| Crypto payment gateway details          | Needed               | David             | Payment badge accuracy                            |
| Trustpilot account setup                | Pre-launch           | David/BIT Studios | Post-launch review collection                     |

---

## 18. Component Reuse Map

Components built for the homepage that are reused across other page types:

| Component                           | Homepage Use               | Reused On                   |
| ----------------------------------- | -------------------------- | --------------------------- |
| SiteHeader (+ MegaMenu + MobileNav) | Global                     | Every page                  |
| SiteFooter                          | Global                     | Every page                  |
| Button (all variants)               | CTAs throughout            | Every page                  |
| TrustSignalsBar                     | Section 8                  | Package pages, checkout     |
| TestimonialCarousel                 | Section 7                  | Package pages, about page   |
| CTABlock                            | Sections 5, 9, 11          | Pillar pages, cluster pages |
| PillarCard                          | Section 4                  | State hub pages             |
| PackagePreviewCard                  | Section 5                  | Comparison page, state hubs |
| StepIndicator                       | Section 9                  | Checkout flow               |
| Badge                               | Trust strip, package tiers | Everywhere                  |
| StickyMobileCTA                     | Mobile bottom bar          | Every page (mobile)         |

---

_Confidential — BIT Studios × Incorporate123 — March 2026_
