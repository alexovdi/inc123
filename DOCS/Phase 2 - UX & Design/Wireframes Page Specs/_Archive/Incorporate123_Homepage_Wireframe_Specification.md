# Incorporate123 — Homepage Wireframe Specification

**Prepared by:** BIT Studios
**Prepared for:** David, Incorporate123
**Date:** March 2026
**Phase:** 2 — UX & Interactive Prototyping
**Template Type:** Homepage (1 of 9 template types)
**URL:** `/`

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
| Get Started CTA    | Right               | Primary button style; routes to `/compare-packages/`               |
| Phone Icon         | Right (mobile only) | Tap-to-call; visible on mobile header                              |

### 2.3 Mega Menu Behavior

Each of the first three nav items (Privacy, Asset Protection, Formation) triggers a mega dropdown on hover (desktop) or accordion expand on tap (mobile).

**Desktop Mega Menu Structure:**

```
┌─────────────────────────────────────────────────────────────┐
│ Privacy                                                      │
│                                                              │
│ CLUSTERS                        COMPARE                     │
│ ├ Anonymous LLC Formation       ├ Wyoming vs Nevada Privacy  │
│ ├ Nominee Services              └ Best State for Privacy     │
│ ├ Wyoming Private Incorporation                              │
│ ├ Nevada Private Incorporation  QUICK LINKS                  │
│ ├ California Private LLC        ├ Gold Packages (Privacy)    │
│ ├ Florida Private LLC           └ Schedule Consultation      │
│ ├ Offshore Privacy                                           │
│ └ BOI Reporting                                              │
└─────────────────────────────────────────────────────────────┘
```

**Packages Mega Menu:**

```
┌─────────────────────────────────────────────────────────────┐
│ Packages                                                     │
│                                                              │
│ WYOMING                 NEVADA                  SHELF        │
│ ├ Gold (Privacy)        ├ Gold (Privacy)        └ Shelf      │
│ ├ Silver (Formation)    ├ Silver (Formation)      Companies  │
│ └ Bronze                └ Bronze                             │
│                                                              │
│ [Compare All Packages →]                                     │
└─────────────────────────────────────────────────────────────┘
```

**About Mega Menu:** About Us, Contact, Testimonials (simple dropdown, no multi-column)

**Mobile Navigation:**

- Hamburger menu icon replaces nav items
- Accordion expand for each pillar (tap pillar name → reveals cluster list)
- Packages appear above fold in mobile menu
- Persistent phone number with tap-to-call
- Sticky bottom CTA bar on mobile: primary action button + phone icon

### 2.4 Header Design Tokens

| Token            | Value                  | Usage                             |
| ---------------- | ---------------------- | --------------------------------- |
| Background       | `#ffffff` (surface)    | Header background                 |
| Text             | `#0f172a` (foreground) | Nav item labels                   |
| Active/Hover     | `#2563eb` (secondary)  | Active nav state, hover underline |
| CTA Button       | `#d97706` (accent)     | "Get Started" button background   |
| Height (desktop) | ~72px                  | Including utility bar             |
| Height (mobile)  | ~56px                  | Compact header                    |

---

## 3. Hero Section

The hero is the first content block below the header. It must accomplish two things simultaneously: communicate the brand repositioning and route visitors toward their intent.

### 3.1 Layout

**Desktop:** Full-width section with a split layout — left side contains headline, subheadline, and dual CTA; right side contains a supporting visual (professional photography of Reno office or abstract privacy/shield imagery).

**Mobile:** Stacked layout — headline and CTAs first, image below or hidden.

### 3.2 Content Specification

| Element       | Content                                                                                                                                                             | Notes                                                           |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| Eyebrow       | "Trusted Since 2000 · Privacy Specialists"                                                                                                                          | Establishes credibility immediately                             |
| H1 Headline   | "Privacy, Asset Protection & Business Formation — All-Inclusive, Nothing Hidden"                                                                                    | Primary SEO target; establishes new positioning                 |
| Subheadline   | "Year-round nominee services, offshore records, and expert formation in Wyoming and Nevada. 25 years of specialized experience protecting your privacy and assets." | Communicates unique value; differentiates from budget providers |
| Primary CTA   | "Protect Your Privacy →"                                                                                                                                            | Routes to `/privacy/` pillar; amber/accent button style         |
| Secondary CTA | "View Packages & Pricing →"                                                                                                                                         | Routes to `/compare-packages/`; secondary/outline button style  |
| Trust Strip   | "25 Years · Real Reno Office · All-Inclusive Pricing · Money-Back Guarantee"                                                                                        | Horizontal badge row below CTAs                                 |

### 3.3 Hero Design Specifications

| Property          | Desktop                                                    | Mobile                     |
| ----------------- | ---------------------------------------------------------- | -------------------------- |
| Min-height        | 560px                                                      | 480px                      |
| Background        | `#f8fafc` (background) or subtle gradient toward `#1e3a5f` | Solid background           |
| Headline size     | display-xl (48–56px)                                       | display-lg (36–40px)       |
| Subheadline size  | text-lg (18px)                                             | text-base (16px)           |
| CTA button size   | lg (h-14, px-8, text-lg)                                   | md (h-11, px-6, text-base) |
| Max content width | 600px (text column)                                        | Full width with padding    |
| Padding           | 80px vertical                                              | 48px vertical              |

### 3.4 Above-Fold Requirements

The following must be visible without scrolling on standard desktop viewports (1440×900):

- Full headline and subheadline
- Both CTA buttons
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

**Layout:** Three equal-width cards in a horizontal row (desktop); stacked vertically (mobile).

#### Card 1: Privacy (Lead Position)

| Element                  | Content                                                                                                            |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| Pillar Color             | `#2563eb` (blue) — accent border-top or icon tint                                                                  |
| Icon                     | Shield/Lock icon (Lucide: `Shield` or `Lock`)                                                                      |
| Card Title               | "Business Privacy"                                                                                                 |
| Card Description         | "Anonymous LLCs, year-round nominee services, offshore records custodian. Real privacy — not 'nominee for a day.'" |
| Key Services (3–4 items) | Anonymous LLC Formation · Nominee Services · Wyoming/Nevada Private Incorporation · Offshore Privacy               |
| Card CTA                 | "Explore Privacy Solutions →"                                                                                      |
| Routes To                | `/privacy/`                                                                                                        |

#### Card 2: Asset Protection

| Element          | Content                                                                                                             |
| ---------------- | ------------------------------------------------------------------------------------------------------------------- |
| Pillar Color     | `#16a34a` (green)                                                                                                   |
| Icon             | Briefcase/Vault icon (Lucide: `Vault` or `ShieldCheck`)                                                             |
| Card Title       | "Asset Protection"                                                                                                  |
| Card Description | "Charging order protection, holding structures, and multi-entity strategies for individuals with $500K+ in assets." |
| Key Services     | Charging Order Protection · Wyoming/Nevada AP · Investment Holding LLC · Real Estate AP                             |
| Card CTA         | "Protect Your Assets →"                                                                                             |
| Routes To        | `/asset-protection/`                                                                                                |

#### Card 3: Company Formation

| Element          | Content                                                                                                                                     |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Pillar Color     | `#d97706` (amber)                                                                                                                           |
| Icon             | Building/FileText icon (Lucide: `Building2` or `FileCheck`)                                                                                 |
| Card Title       | "Company Formation"                                                                                                                         |
| Card Description | "Expert LLC and Corporation formation in Wyoming and Nevada. Everything included — registered agent, EIN, operating agreement, state fees." |
| Key Services     | Wyoming LLC · Nevada LLC · Wyoming Corporation · Nevada Corporation                                                                         |
| Card CTA         | "Start Your Company →"                                                                                                                      |
| Routes To        | `/formation/`                                                                                                                               |

### 4.3 Pillar Card Design Specifications

| Property            | Value                                                                    |
| ------------------- | ------------------------------------------------------------------------ |
| Card background     | `#ffffff` (surface)                                                      |
| Card border         | `1px solid #e2e8f0` (border) with 4px colored top border matching pillar |
| Card shadow         | Card shadow token (subtle elevation)                                     |
| Card hover          | Card-hover shadow + slight translateY(-2px)                              |
| Card padding        | 32px                                                                     |
| Card min-height     | 320px (desktop)                                                          |
| Card gap            | 24px between cards                                                       |
| Section background  | `#f8fafc` (background)                                                   |
| Section padding     | 80px vertical (desktop), 48px vertical (mobile)                          |
| Max container width | 1200px, centered                                                         |

---

## 5. Package Quick Links Section

For visitors who already know what they want (Journey D: Informed Buyer). This section provides a direct shortcut to packages without requiring pillar education.

### 5.1 Section Header

| Element          | Content                                                                             |
| ---------------- | ----------------------------------------------------------------------------------- |
| Section Eyebrow  | "Ready to Get Started?"                                                             |
| Section Headline | "All-Inclusive Packages — See Exactly What's Included"                              |
| Section Subtext  | "Transparent pricing with everything bundled. No hidden fees, no surprise add-ons." |

### 5.2 Package Preview Cards

**Layout:** Horizontal scroll or 2×2 grid (desktop); horizontal scroll or stacked (mobile). Show the 4 primary packages with pricing visible.

#### Package Card Structure (repeated for each)

| Element                  | Content Example                                                           |
| ------------------------ | ------------------------------------------------------------------------- |
| State Badge              | "Wyoming" or "Nevada"                                                     |
| Tier Badge               | "Gold · Privacy" — highlighted as "Most Popular" where applicable         |
| Package Name             | "Wyoming Gold Package"                                                    |
| Price                    | "$1,275" with "all-inclusive" label                                       |
| Renewal                  | "$525/year with nominees"                                                 |
| Key Includes (3–4 items) | Year-Round Nominees · Registered Agent · EIN Filing · Operating Agreement |
| CTA                      | "View Full Details →"                                                     |
| Routes To                | `/packages/wyoming-gold/` (etc.)                                          |

**Packages to Display:**

1. Wyoming Gold (Privacy) — "Most Popular" badge
2. Nevada Gold (Privacy)
3. Wyoming Silver (Formation)
4. Nevada Silver (Formation)

Optional: "Compare All Packages →" link below the cards routing to `/compare-packages/`.

### 5.3 Design Specifications

| Property                | Value                                       |
| ----------------------- | ------------------------------------------- |
| Section background      | `#ffffff` (surface)                         |
| Section padding         | 80px vertical                               |
| Card background         | `#f8fafc` (background)                      |
| Highlighted card (Gold) | Subtle blue border or "Most Popular" ribbon |
| Price typography        | display-lg, `#0f172a` (foreground), bold    |
| Renewal typography      | text-sm, `#64748b` (muted)                  |

---

## 6. Differentiator / Value Proposition Section

Communicates why Incorporate123 is different from both budget filers ($0–$399) and consultation-gated premium firms ($2,750+). Positions the company in the "white space" between these segments.

### 6.1 Section Header

| Element          | Content                                                                                                             |
| ---------------- | ------------------------------------------------------------------------------------------------------------------- |
| Section Headline | "Why Clients Choose Incorporate123"                                                                                 |
| Section Subtext  | "25 years of specialized privacy and formation expertise — not a budget filing service, not a $5,000 consultation." |

### 6.2 Content: Differentiator Grid

**Layout:** 2×3 grid of icon + text blocks (desktop); single column (mobile).

| #   | Icon         | Title                          | Description                                                                                                                  |
| --- | ------------ | ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------- |
| 1   | `Clock`      | "Year-Round Nominees Included" | "Not 'nominee for a day' — your nominees serve all year, every year. Included in Gold packages at no extra cost."            |
| 2   | `Globe`      | "Offshore Records Since 2012"  | "Corporate records stored offshore for genuine privacy. Free with every Gold package — competitors charge $400–$5,000/year." |
| 3   | `DollarSign` | "All-Inclusive Pricing"        | "Formation, registered agent, EIN, operating agreement, and state fees — all bundled. No surprise add-ons at checkout."      |
| 4   | `MapPin`     | "Real Reno Office"             | "Not a P.O. box operation. Professional offices in Reno, Nevada with real staff and a physical address you can visit."       |
| 5   | `Award`      | "25 Years of Specialization"   | "Focused exclusively on Wyoming and Nevada privacy formation since 2000. Depth over breadth."                                |
| 6   | `Phone`      | "Talk to a Real Person"        | "Have questions? Call us directly. No chatbots, no offshore call centers, no sales pressure."                                |

### 6.3 Design Specifications

| Property           | Value                                                       |
| ------------------ | ----------------------------------------------------------- |
| Section background | `#1e3a5f` (primary navy) — dark section for visual contrast |
| Text color         | `#ffffff` on dark background                                |
| Icon color         | `#d97706` (accent amber) or `#2563eb` (secondary blue)      |
| Grid gap           | 40px horizontal, 32px vertical                              |
| Section padding    | 80px vertical                                               |
| Icon size          | 40×40px                                                     |

---

## 7. Social Proof / Testimonials Section

With zero public reviews at launch, this section relies on alternative trust signals. Post-launch, it transitions to a Trustpilot-powered review carousel.

### 7.1 Launch Version (Pre-Reviews)

**Layout:** Horizontal carousel or 3-card row.

| Element                     | Content                                                                                                  |
| --------------------------- | -------------------------------------------------------------------------------------------------------- |
| Section Headline            | "Trusted by Business Owners Nationwide"                                                                  |
| Testimonial Cards           | 2–3 anonymized client testimonials (David to supply)                                                     |
| Card Structure              | Quote text + attribution (first name, state, year) + star rating                                         |
| Fallback if no testimonials | Replace with a "By the Numbers" stats bar: "25 Years · X Entities Formed · Wyoming & Nevada Specialists" |

### 7.2 Post-Launch Version

| Element              | Content                                          |
| -------------------- | ------------------------------------------------ |
| Trustpilot Widget    | Embedded review carousel pulling from Trustpilot |
| "Leave a Review" CTA | Link to Trustpilot profile                       |
| Target               | 100+ reviews within 6 months of launch           |

### 7.3 Design Specifications

| Property           | Value                      |
| ------------------ | -------------------------- |
| Section background | `#f8fafc` (background)     |
| Card background    | `#ffffff` (surface)        |
| Quote typography   | text-lg, italic            |
| Attribution        | text-sm, `#64748b` (muted) |
| Star color         | `#d97706` (accent amber)   |
| Section padding    | 64px vertical              |

---

## 8. Trust Signals Bar

A compact, scannable strip of trust indicators. Appears between the testimonial section and the "How It Works" section.

### 8.1 Trust Signal Items

**Layout:** Horizontal row of icon + label pairs, evenly spaced. Single row on desktop; 2×3 grid on mobile.

| Icon                                   | Label                           |
| -------------------------------------- | ------------------------------- |
| Calendar badge                         | "Trusted Since 2000"            |
| Building icon                          | "Real Reno Office"              |
| Shield/check icon                      | "30-Day Money-Back Guarantee"   |
| Phone icon                             | "(775) xxx-xxxx · Call Anytime" |
| Crypto icons (BTC, ETH, XRP, LTC, XMR) | "Crypto Payments Accepted"      |
| Lock icon                              | "Secure Checkout"               |

### 8.2 Design Specifications

| Property         | Value                                       |
| ---------------- | ------------------------------------------- |
| Background       | `#ffffff` (surface) with top/bottom border  |
| Layout           | Flexbox, evenly distributed, center-aligned |
| Icon size        | 24×24px                                     |
| Label typography | text-sm, font-medium                        |
| Section height   | ~80px (desktop), auto (mobile)              |

---

## 9. How It Works Section

A simple 3- or 4-step process visualization showing the path from research to formation. Reduces perceived complexity.

### 9.1 Section Header

| Element          | Content                                                                |
| ---------------- | ---------------------------------------------------------------------- |
| Section Headline | "How It Works"                                                         |
| Section Subtext  | "From research to fully formed and protected — we handle the details." |

### 9.2 Steps

**Layout:** Horizontal step indicators connected by lines (desktop); vertical timeline (mobile).

| Step | Icon          | Title                          | Description                                                                                                                                                       |
| ---- | ------------- | ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | `Search`      | "Choose Your Protection Level" | "Explore our Privacy, Asset Protection, or Formation guides — or jump straight to packages if you already know what you need."                                    |
| 2    | `Package`     | "Select Your Package"          | "Pick the package that fits. Gold for full privacy, Silver for expert formation, Bronze for budget Nevada filing. Everything is all-inclusive."                   |
| 3    | `FileText`    | "We Handle the Filing"         | "Complete a short form with your entity details. We file with the state, obtain your EIN, prepare your operating agreement, and set up registered agent service." |
| 4    | `CheckCircle` | "You're Protected"             | "Receive your formation documents, nominee confirmations, and ongoing compliance support. Your privacy and assets are secured."                                   |

### 9.3 Design Specifications

| Property           | Value                                            |
| ------------------ | ------------------------------------------------ |
| Section background | `#ffffff` (surface)                              |
| Step number        | Circular badge, `#2563eb` background, white text |
| Connector line     | `#e2e8f0` (border) dashed or solid               |
| Section padding    | 80px vertical                                    |

---

## 10. Compliance / Returning Client Callout

A smaller section acknowledging existing clients and the Compliance pillar. Ensures returning visitors (Journey F) don't feel the site has forgotten them.

### 10.1 Content

**Layout:** Full-width card with split content — left side text, right side icon or illustration.

| Element       | Content                                                                                                                                                    |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Headline      | "Already Have an Entity? We Keep You Compliant."                                                                                                           |
| Description   | "Registered agent renewals, annual reports, corporate minutes, virtual office upgrades, and domestication services. Ongoing support — not just a mailbox." |
| Primary CTA   | "Explore Compliance Services →" → `/compliance/`                                                                                                           |
| Secondary CTA | "Contact Us →" → `/contact/`                                                                                                                               |

### 10.2 Design Specifications

| Property           | Value                                                    |
| ------------------ | -------------------------------------------------------- |
| Section background | `#f3e8ff` (light purple tint matching Compliance pillar) |
| Border accent      | `#9333ea` (compliance purple) left border or top accent  |
| Padding            | 48px                                                     |

---

## 11. Final Conversion CTA Section

The bottom-of-page conversion section. Repeats the primary CTAs for visitors who have scrolled through the full homepage.

### 11.1 Content

| Element       | Content                                                                                 |
| ------------- | --------------------------------------------------------------------------------------- |
| Headline      | "Ready to Protect Your Privacy and Assets?"                                             |
| Subtext       | "Start with a package, or schedule a free consultation to discuss your specific needs." |
| Primary CTA   | "View Packages & Pricing →" → `/compare-packages/`                                      |
| Secondary CTA | "Schedule a Consultation →" → `/contact/` or calendar link                              |
| Phone         | "(775) xxx-xxxx" with tap-to-call                                                       |

### 11.2 Design Specifications

| Property           | Value                                                   |
| ------------------ | ------------------------------------------------------- |
| Section background | `#1e3a5f` (primary navy)                                |
| Text color         | `#ffffff`                                               |
| CTA button         | `#d97706` (accent) primary; `#ffffff` outline secondary |
| Padding            | 80px vertical                                           |
| Text alignment     | Centered                                                |

---

## 12. Global Footer

The footer is persistent across all pages. It serves as a complete sitemap and includes legal, contact, and SEO-relevant links.

### 12.1 Footer Structure

**Layout:** 4-column grid (desktop); stacked accordion (mobile).

#### Column 1: Privacy Pillar

| Label                              | URL                               |
| ---------------------------------- | --------------------------------- |
| **Business Privacy** (bold header) | `/privacy/`                       |
| Anonymous LLC Formation            | `/anonymous-llc/`                 |
| Nominee Services                   | `/nominee-services/`              |
| Wyoming Private Incorporation      | `/wyoming-private-incorporation/` |
| Nevada Private Incorporation       | `/nevada-private-incorporation/`  |
| California Private LLC             | `/california-private-llc/`        |
| Florida Private LLC                | `/florida-private-llc/`           |
| Best State for Privacy             | `/best-state-privacy/`            |
| Wyoming vs Nevada Privacy          | `/wyoming-vs-nevada-privacy/`     |

#### Column 2: Asset Protection + Formation

| Label                               | URL                           |
| ----------------------------------- | ----------------------------- |
| **Asset Protection** (bold header)  | `/asset-protection/`          |
| Charging Order Protection           | `/charging-order-protection/` |
| Wyoming Asset Protection            | `/wyoming-asset-protection/`  |
| Nevada Asset Protection             | `/nevada-asset-protection/`   |
| Investment Holding LLC              | `/investment-holding-llc/`    |
| **Company Formation** (bold header) | `/formation/`                 |
| Wyoming LLC                         | `/wyoming-llc/`               |
| Nevada LLC                          | `/nevada-llc/`                |
| Wyoming Corporation                 | `/wyoming-corporation/`       |
| Nevada Corporation                  | `/nevada-corporation/`        |

#### Column 3: Packages + States

| Label                      | URL                         |
| -------------------------- | --------------------------- |
| **Packages** (bold header) | `/compare-packages/`        |
| Wyoming Gold (Privacy)     | `/packages/wyoming-gold/`   |
| Wyoming Silver (Formation) | `/packages/wyoming-silver/` |
| Nevada Gold (Privacy)      | `/packages/nevada-gold/`    |
| Nevada Silver (Formation)  | `/packages/nevada-silver/`  |
| **By State** (bold header) |                             |
| Wyoming                    | `/wyoming/`                 |
| Nevada                     | `/nevada/`                  |
| California                 | `/california/`              |
| Florida                    | `/florida/`                 |

#### Column 4: Company + Support

| Label                        | URL                  |
| ---------------------------- | -------------------- |
| **Company** (bold header)    |                      |
| About Us                     | `/about/`            |
| Contact                      | `/contact/`          |
| Testimonials                 | `/testimonials/`     |
| Blog                         | `/blog/`             |
| FAQ                          | `/faq/`              |
| **Compliance** (bold header) | `/compliance/`       |
| Registered Agent             | `/registered-agent/` |
| Annual Reports               | `/annual-reports/`   |
| Offshore (de-emphasized)     | `/offshore/`         |

### 12.2 Footer Bottom Bar

| Element       | Content                                                          |
| ------------- | ---------------------------------------------------------------- |
| Copyright     | "© 2026 Incorporate123. All rights reserved."                    |
| Legal Links   | Privacy Policy · Terms of Service                                |
| Phone         | "(775) xxx-xxxx"                                                 |
| Address       | Reno, Nevada office address                                      |
| Payment Icons | Visa, Mastercard, AMEX, Bitcoin, Ethereum, XRP, Litecoin, Monero |
| Crypto Note   | "We accept cryptocurrency for your privacy"                      |

### 12.3 Footer Design Specifications

| Property   | Value                                                 |
| ---------- | ----------------------------------------------------- |
| Background | `#0f172a` (slate-900, darker than primary)            |
| Text color | `#94a3b8` (slate-400) for body; `#ffffff` for headers |
| Link hover | `#2563eb` (secondary blue)                            |
| Padding    | 64px top, 32px bottom                                 |
| Bottom bar | Separated by `1px solid #1e293b` border               |
| Column gap | 40px                                                  |

---

## 13. Mobile-Specific Requirements

### 13.1 Sticky Bottom CTA Bar

A persistent bottom bar that appears on scroll (mobile only).

| Element     | Position                                  | Behavior                                       |
| ----------- | ----------------------------------------- | ---------------------------------------------- |
| Primary CTA | Left (70% width)                          | "Get Started →" routes to `/compare-packages/` |
| Phone Icon  | Right (30% width)                         | Tap-to-call `tel:` link                        |
| Trigger     | Appears after scrolling past hero section | Hides when hero CTAs are visible               |

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

### 13.3 Responsive Breakpoints

| Breakpoint | Width       | Layout Changes                                                      |
| ---------- | ----------- | ------------------------------------------------------------------- |
| Mobile     | < 640px     | Single column, stacked everything, hamburger nav, sticky bottom CTA |
| Tablet     | 640–1024px  | 2-column grids, condensed mega menu                                 |
| Desktop    | 1024–1440px | Full layout, mega menu on hover                                     |
| Wide       | > 1440px    | Max-width container (1200px) centered                               |

---

## 14. Interaction Specifications

### 14.1 Navigation

| Interaction     | Desktop                                     | Mobile                  |
| --------------- | ------------------------------------------- | ----------------------- |
| Mega menu       | Hover-triggered, 200ms delay before close   | Tap-triggered accordion |
| Active state    | Underline + blue color on current pillar    | Bold text + blue accent |
| Scroll behavior | Header shrinks to compact version on scroll | Header fixed, no shrink |

### 14.2 CTAs

| Interaction   | Behavior                                            |
| ------------- | --------------------------------------------------- |
| Button hover  | Background darken 10%, subtle translateY(-1px)      |
| Button focus  | 2px ring in `#2563eb` (secondary) for accessibility |
| Button active | Background darken 15%, translateY(0)                |

### 14.3 Cards

| Interaction          | Behavior                                               |
| -------------------- | ------------------------------------------------------ |
| Pillar card hover    | Shadow increase + 2px translateY lift                  |
| Package card hover   | Shadow increase + border color accent                  |
| Testimonial carousel | Auto-advance every 6s; pause on hover; swipe on mobile |

### 14.4 Animations

| Element         | Animation                              | Timing                    |
| --------------- | -------------------------------------- | ------------------------- |
| Hero content    | Fade-in on load                        | 300ms ease-out            |
| Pillar cards    | Stagger fade-in as they enter viewport | 150ms stagger, 400ms each |
| Trust signals   | Fade-in on scroll                      | 300ms ease-out            |
| Step indicators | Sequential reveal on scroll            | 200ms stagger             |

---

## 15. SEO Specifications

| Element          | Value                                                                                                                                                                                      |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Title Tag        | "Incorporate123 — Privacy, Asset Protection & Business Formation Specialists"                                                                                                              |
| Meta Description | "25 years forming anonymous LLCs and corporations in Wyoming and Nevada. Year-round nominee services, offshore records, and all-inclusive pricing. Protect your privacy and assets today." |
| H1               | Hero headline (one H1 per page)                                                                                                                                                            |
| H2s              | Section headlines: "Choose Your Starting Point", "All-Inclusive Packages", "Why Clients Choose Incorporate123", "How It Works", etc.                                                       |
| Schema Markup    | Organization schema (name, address, phone, founding date), LocalBusiness schema (Reno office), FAQ schema if any FAQ content is present                                                    |
| Canonical URL    | `https://incorporate123.co/` (pending domain decision — `.co` vs `.com`)                                                                                                                   |
| Open Graph       | Title, description, hero image for social sharing                                                                                                                                          |

---

## 16. Accessibility Requirements

| Requirement         | Implementation                                                       |
| ------------------- | -------------------------------------------------------------------- |
| Color contrast      | WCAG 2.1 AA minimum (4.5:1 for text, 3:1 for large text)             |
| Keyboard navigation | All interactive elements focusable and operable via keyboard         |
| Skip navigation     | "Skip to main content" link as first focusable element               |
| Alt text            | All images have descriptive alt text                                 |
| ARIA labels         | Mega menu, carousel, and accordion have proper ARIA roles and states |
| Focus indicators    | Visible 2px ring on all focusable elements                           |
| Semantic HTML       | `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<article>`  |
| Reduced motion      | Respect `prefers-reduced-motion` for all animations                  |

---

## 17. Section Summary & Scroll Depth Map

| #   | Section             | Approx Height (Desktop) | Purpose                                        |
| --- | ------------------- | ----------------------- | ---------------------------------------------- |
| —   | Header              | 72px                    | Navigation, phone                              |
| 1   | Hero                | 560px                   | Brand positioning, intent routing, trust strip |
| 2   | Pillar Navigation   | 480px                   | Intent routing to 3 pillars                    |
| 3   | Package Quick Links | 400px                   | Direct-to-package shortcut for informed buyers |
| 4   | Differentiator Grid | 420px                   | Competitive positioning, unique value props    |
| 5   | Testimonials        | 320px                   | Social proof (or stats fallback)               |
| 6   | Trust Signals Bar   | 80px                    | Quick credibility scan                         |
| 7   | How It Works        | 360px                   | Process clarity, reduce anxiety                |
| 8   | Compliance Callout  | 200px                   | Returning client acknowledgment                |
| 9   | Final CTA           | 280px                   | Bottom-of-page conversion                      |
| —   | Footer              | 400px                   | Complete sitemap, legal, contact               |
|     | **Total**           | **~3,572px**            |                                                |

---

## 18. Content Dependencies & Open Items

| Item                                    | Status                           | Owner             | Impact                                            |
| --------------------------------------- | -------------------------------- | ----------------- | ------------------------------------------------- |
| Domain decision (`.co` vs `.com`)       | Pending David's decision         | David             | Affects canonical URL, all internal links         |
| Package tier names (Gold/Silver/Bronze) | Pending confirmation             | David             | Affects package card labels and CTAs              |
| Testimonials                            | David to collect                 | David             | Determines testimonial section vs. stats fallback |
| Professional office photography         | Needed for hero and About        | David/BIT Studios | Hero visual, trust signals                        |
| David's professional bio photo          | Needed for founder trust signal  | David             | About page + potential homepage use               |
| Phone number confirmation               | Need final number                | David             | Header, CTAs, footer                              |
| Crypto payment gateway details          | Stripe/PayPal + crypto processor | David             | Payment badge accuracy                            |
| Trustpilot account setup                | Pre-launch action item           | David/BIT Studios | Post-launch review collection                     |

---

## 19. Component Reuse Map

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
