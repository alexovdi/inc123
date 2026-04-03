# Incorporate123 — Homepage Specification (Content, Structure & Routing)

**Prepared by:** BIT Studios  
**Prepared for:** David, Incorporate123  
**Date:** March 2026  
**Phase:** 2 — UX & Interactive Prototyping  
**URL:** `/`  

This specification defines what appears on the homepage, what it says, where it links, and how it behaves. It intentionally excludes all visual design decisions (colors, fonts, spacing, visual treatments). Those are governed by the Brand Guide and the separate Wireframe Specification.

---

## 1. Page Role

The homepage serves three functions simultaneously:

1. **Intent router** for new visitors — identify your need, enter the right pillar
2. **Package shortcut** for informed buyers — skip education, go directly to pricing

It replaces the current geography-first model (pick a state → find services) with an intent-first model (identify your need → explore solutions → compare → purchase).

### Who Visits This Page

| Visitor | What they need | Where the page sends them |
|---------|---------------|---------------------------|
| Privacy Researcher | Understand anonymous LLCs, nominee services | `/privacy/` → clusters → Gold package |
| Asset Protector | LLC protection, charging orders, holding structures | `/asset-protection/` → clusters → Gold package |
| Formation Researcher | LLC or Corp in Wyoming or Nevada | `/formation/` → clusters → Silver or Gold |
| Informed Buyer | Already knows what they want | `/compare-packages/` or individual package page |
| CA/FL Business Owner | Privacy from state disclosure laws | `/privacy/` → state-specific clusters |

---

## 2. Global Header

Persistent on every page. Does not change between page types except for active navigation state.

### Utility Bar (Desktop Only)

| Element | Content | Behavior |
|---------|---------|----------|
| Phone | (775) xxx-xxxx | Tap-to-call on all devices |
| Tagline | "Privacy, Asset Protection & Business Formation Specialists" | Hidden on mobile |

### Primary Header

| Element | Content | Routes To |
|---------|---------|-----------|
| Logo | Incorporate123 wordmark | `/` |
| Navigation | Privacy · Asset Protection · Formation · Packages · About | Mega menus (see below) |
| Get Started button | "Get Started →" | `/compare-packages/` |
| Phone icon (mobile only) | Tap-to-call | `tel:` link |

### Mega Menus

**Privacy:**

| Section | Links |
|---------|-------|
| Clusters | Anonymous LLC Formation · Nominee Services · Wyoming Private Incorporation · Nevada Private Incorporation · California Private LLC · Florida Private LLC · Offshore Privacy · BOI Reporting |
| Compare | Wyoming vs Nevada Privacy · Best State for Privacy |
| Quick Links | Gold Packages (Privacy) · Schedule Consultation |

**Asset Protection:**

| Section | Links |
|---------|-------|
| Clusters | Nevada AP · Wyoming AP · Charging Order Protection · Investment Holding LLC · Real Estate AP · LLC vs Living Trust |
| Compare | Best State for AP · WY vs NV for AP |
| Quick Links | Gold Packages (AP) · Schedule Consultation |

**Formation:**

| Section | Links |
|---------|-------|
| Clusters | Wyoming LLC · Nevada LLC · Wyoming Corporation · Nevada Corporation · LLC vs Corporation · Shelf Companies |
| Compare | Wyoming vs Nevada LLC · Best State for LLC · LLC vs Corporation |
| Quick Links | All Packages · Schedule Consultation |

**Packages:**

| Section | Links |
|---------|-------|
| Wyoming | Gold (Privacy) · Silver (Formation) · Bronze |
| Nevada | Gold (Privacy) · Silver (Formation) · Bronze |
| Shelf | Shelf Companies |
| Quick Link | Compare All Packages → `/compare-packages/` |

**About:** About Us · Contact · Testimonials (simple dropdown)

### Mobile Navigation

- Hamburger menu replaces nav items
- Each pillar name expands an accordion revealing its cluster links
- Phone number always visible with tap-to-call
- Sticky bottom CTA bar: "Get Started →" (70% width) + phone icon (30% width)

---

## 3. Hero

### Content

| Element | Content | Routes To |
|---------|---------|-----------|
| Eyebrow | "Trusted Since 2000 · Privacy Specialists" | — |
| H1 | "Privacy, Asset Protection & Business Formation — All-Inclusive, Nothing Hidden" | — |
| Subheadline | "Year-round nominee services, offshore records, and expert formation in Wyoming and Nevada. 25 years of specialized experience protecting your privacy and assets." | — |
| Primary CTA | "Protect Your Privacy →" | `/privacy/` |
| Secondary CTA | "View Packages & Pricing →" | `/compare-packages/` |
| Consultation safety net | "Have questions? Call (775) xxx-xxxx" | `tel:` link |
| Trust strip | "25 Years · Real Reno Office · $1,275 All-Inclusive · Money-Back Guarantee" | — |

### Layout Rules

- Desktop: split — content left, supporting visual right
- Mobile: stacked — headline and CTAs first, image below or hidden
- Above-fold requirement (1440×900 desktop): H1, subheadline, both CTAs, safety net, trust strip, and the top edge of the pillar cards must all be visible without scrolling

---

## 4. Pillar Navigation Cards

| Element | Content |
|---------|---------|
| Eyebrow | "How Can We Help?" |
| H2 | "Choose Your Starting Point" |
| Subtext | "Whether you need privacy protection, asset shielding, or business formation — we specialize in all three." |

### Card 1: Business Privacy (Lead Position — Always First)

| Element | Content |
|---------|---------|
| Title | "Business Privacy" |
| Description | "Anonymous LLCs, year-round nominee services, offshore records custodian. Real privacy — not 'nominee for a day.'" |
| Key services | Anonymous LLC Formation · Nominee Services · Wyoming/Nevada Private Incorporation · Offshore Privacy |
| CTA | "Explore Privacy Solutions →" → `/privacy/` |

### Card 2: Asset Protection

| Element | Content |
|---------|---------|
| Title | "Asset Protection" |
| Description | "Charging order protection, holding structures, and multi-entity strategies for individuals with $500K+ in assets." |
| Key services | Charging Order Protection · Wyoming/Nevada AP · Investment Holding LLC · Real Estate AP |
| CTA | "Protect Your Assets →" → `/asset-protection/` |

### Card 3: Business Incorporation

| Element | Content |
|---------|---------|
| Title | "Business Incorporation" |
| Description | "Expert LLC and Corporation formation in Wyoming and Nevada. Everything included — registered agent, EIN, operating agreement, state fees." |
| Key services | Wyoming LLC · Nevada LLC · Wyoming Corporation · Nevada Corporation |
| CTA | "Start Your Company →" → `/formation/` |

### Below Cards

"Already have a company? Explore compliance services →" — routes to `/compliance/` or scrolls to Section 9 (Compliance Callout)

---

## 5. Package Quick Links

| Element | Content |
|---------|---------|
| Eyebrow | "Ready to Get Started?" |
| H2 | "All-Inclusive Packages — See Exactly What's Included" |
| Subtext | "Transparent pricing with everything bundled. No hidden fees, no surprise add-ons." |

### Packages Displayed

Gold cards must be visually distinguished from Silver (elevated treatment, "Most Popular" badge). Bronze is excluded from the homepage.

| Package | Price | Renewal | Badge | Includes | Routes To |
|---------|-------|---------|-------|----------|-----------|
| Wyoming Gold (Privacy) | $1,275 | $525/yr with nominees | "Most Popular" | Year-Round Nominees · Offshore Records · Registered Agent · EIN + Operating Agreement | `/packages/wyoming-gold/` |
| Nevada Gold (Privacy) | $1,800 | $525/yr with nominees | — | Same as above | `/packages/nevada-gold/` |
| Wyoming Silver (Formation) | $875 | $325/yr | — | Registered Agent · EIN Filing · Operating Agreement · State Fees Included | `/packages/wyoming-silver/` |
| Nevada Silver (Formation) | $1,275 | $325/yr | — | Same as above | `/packages/nevada-silver/` |

### Below Cards

- "Compare All Packages →" → `/compare-packages/`
- "Not sure which package? Call (775) xxx-xxxx for a free consultation."

---

## 6. Differentiators

| Element | Content |
|---------|---------|
| H2 | "Why Clients Choose Incorporate123" |
| Subtext | "25 years of specialized privacy and formation expertise — not a budget filing service, not a $5,000 consultation." |

### Six Differentiators

| # | Title | Description |
|---|-------|-------------|
| 1 | "Year-Round Nominees Included" | "Not 'nominee for a day' — your nominees serve all year, every year. Included in Gold packages at no extra cost." |
| 2 | "Offshore Records Since 2012" | "Corporate records stored offshore for genuine privacy. Free with every Gold package — competitors charge $400–$5,000/year." |
| 3 | "All-Inclusive Pricing" | "Formation, registered agent, EIN, operating agreement, and state fees — all bundled. No surprise add-ons at checkout." |
| 4 | "Real Reno Office" | "Not a P.O. box operation. Professional offices in Reno, Nevada with real staff and a physical address you can visit." |
| 5 | "25 Years of Specialization" | "Focused exclusively on Wyoming and Nevada privacy formation since 2000. Depth over breadth." |
| 6 | "Talk to a Real Person" | "Have questions? Call us directly. No chatbots, no offshore call centers, no sales pressure." |

---

## 7. Social Proof / Testimonials

### At Launch (No Public Reviews)

| Element | Content |
|---------|---------|
| H2 | "Trusted by Business Owners Nationwide" |
| Cards | 2–3 anonymized client testimonials (David to supply) |
| Card content | Quote text + first name + state + year + 5-star rating |
| Fallback | If no testimonials: "By the Numbers" stats — "25 Years · X Entities Formed · Wyoming & Nevada Specialists" |

### Post-Launch

- Trustpilot embedded review carousel
- "Leave a Review" CTA linking to Trustpilot profile
- Target: 100+ reviews within 6 months

---

## 8. Trust Signals Bar

Six icon-and-label pairs:

| Label |
|-------|
| "Trusted Since 2000" |
| "Real Reno Office" |
| "30-Day Money-Back Guarantee" |
| "(775) xxx-xxxx · Call Anytime" |
| "Crypto Payments for Privacy" |
| "Secure Checkout" |

---

## 9. How It Works

| Element | Content |
|---------|---------|
| H2 | "How It Works" |
| Subtext | "From research to fully formed and protected — we handle the details." |

### Steps

| Step | Title | Description |
|------|-------|-------------|
| 1 | "Choose Your Protection Level" | "Explore our Privacy, Asset Protection, or Formation guides — or jump straight to packages if you already know what you need." |
| 2 | "Select Your Package" | "Pick the package that fits your needs. Gold for full privacy with year-round nominees, Silver for expert formation with everything included. All packages are all-inclusive." |
| 3 | "We Handle the Filing" | "Complete a short form with your entity details. We file with the state, obtain your EIN, prepare your operating agreement, and set up registered agent service." |
| 4 | "You're Protected" | "Receive your formation documents, nominee confirmations, and ongoing compliance support. Your privacy and assets are secured." |

---

## 10. Compliance / Returning Client Callout

| Element | Content | Routes To |
|---------|---------|-----------|
| H2 | "Already Have an Entity? We Keep You Compliant." | — |
| Description | "Registered agent renewals, annual reports, corporate minutes, virtual office upgrades, and domestication services. Ongoing support — not just a mailbox." | — |
| Primary CTA | "Explore Compliance Services →" | `/compliance/` |

---

## 11. Final Conversion CTA

| Element | Content | Routes To |
|---------|---------|-----------|
| H2 | "Ready to Protect Your Privacy and Assets?" | — |
| Subtext | "Start with a package, or schedule a free consultation to discuss your specific needs." | — |
| Primary CTA | "View Packages & Pricing →" | `/compare-packages/` |
| Secondary CTA | "Schedule a Consultation →" | `/contact/` |
| Phone | "(775) xxx-xxxx" | `tel:` link |

---

## 12. Global Footer

Persistent on every page. Functions as a complete sitemap.

### Column 1: Business Privacy

| Label | URL |
|-------|-----|
| **Business Privacy** | `/privacy/` |
| Anonymous LLC Formation | `/anonymous-llc/` |
| Nominee Services | `/nominee-services/` |
| Wyoming Private Incorporation | `/wyoming-private-incorporation/` |
| Nevada Private Incorporation | `/nevada-private-incorporation/` |
| California Private LLC | `/california-private-llc/` |
| Florida Private LLC | `/florida-private-llc/` |
| Best State for Privacy | `/best-state-privacy/` |
| Wyoming vs Nevada Privacy | `/wyoming-vs-nevada-privacy/` |

### Column 2: Asset Protection + Formation

| Label | URL |
|-------|-----|
| **Asset Protection** | `/asset-protection/` |
| Charging Order Protection | `/charging-order-protection/` |
| Wyoming Asset Protection | `/wyoming-asset-protection/` |
| Nevada Asset Protection | `/nevada-asset-protection/` |
| Investment Holding LLC | `/investment-holding-llc/` |
| **Company Formation** | `/formation/` |
| Wyoming LLC | `/wyoming-llc/` |
| Nevada LLC | `/nevada-llc/` |
| Wyoming Corporation | `/wyoming-corporation/` |
| Nevada Corporation | `/nevada-corporation/` |

### Column 3: Packages + States

| Label | URL |
|-------|-----|
| **Packages** | `/compare-packages/` |
| Wyoming Gold (Privacy) | `/packages/wyoming-gold/` |
| Wyoming Silver (Formation) | `/packages/wyoming-silver/` |
| Nevada Gold (Privacy) | `/packages/nevada-gold/` |
| Nevada Silver (Formation) | `/packages/nevada-silver/` |
| **By State** | |
| Wyoming | `/wyoming/` |
| Nevada | `/nevada/` |
| California | `/california/` |
| Florida | `/florida/` |

### Column 4: Company + Support

| Label | URL |
|-------|-----|
| **Company** | |
| About Us | `/about/` |
| Contact | `/contact/` |
| Testimonials | `/testimonials/` |
| Blog | `/blog/` |
| FAQ | `/faq/` |
| **Compliance** | `/compliance/` |
| Registered Agent | `/registered-agent/` |
| Annual Reports | `/annual-reports/` |
| Offshore | `/offshore/` |

### Footer Bottom Bar

| Element | Content |
|---------|---------|
| Copyright | "© 2026 Incorporate123. All rights reserved." |
| Legal links | Privacy Policy · Terms of Service |
| Phone | "(775) xxx-xxxx" |
| Address | Reno, Nevada office address |
| Payment icons | Visa · Mastercard · AMEX · Bitcoin · Ethereum · XRP · Litecoin · Monero |
| Crypto note | "We accept cryptocurrency for your privacy" |

---

## 13. Section Order

Desktop and mobile follow the same sequence:

1. Header
2. Hero
3. Pillar Navigation Cards (3 cards + returning-client link)
4. Package Quick Links (4 cards)
5. Differentiators (6 items)
6. Testimonials / Social Proof
7. Trust Signals Bar
8. How It Works (4 steps)
9. Compliance / Returning Client Callout
10. Final Conversion CTA
11. Footer

### Mobile-Specific Behavior

- Header: compact, hamburger navigation
- Hero: stacked (headline → CTAs → trust strip; image hidden or below)
- Pillar cards: stacked vertically, full width
- Package cards: horizontal scroll
- Differentiators: single column
- Testimonials: horizontal swipe carousel
- Trust signals: 2-column grid
- How It Works: vertical timeline
- Compliance: full-width card
- Final CTA: centered, stacked buttons
- Footer: accordion expand per column

### Sticky Bottom CTA Bar (Mobile Only)

| Element | Behavior |
|---------|----------|
| "Get Started →" (~70% width) | Routes to `/compare-packages/` |
| Phone icon (~30% width) | Tap-to-call |
| Appears | After scrolling past hero section |
| Hides | When hero CTAs are visible in viewport |

---

## 14. Interaction Behavior

### Navigation

| Interaction | Desktop | Mobile |
|-------------|---------|--------|
| Mega menu trigger | Hover with delay before close | Tap to expand accordion |
| Active state | Indicator on current pillar | Bold text |
| Header on scroll | Shrinks to compact version | Fixed, no shrink |

### CTAs

| State | Behavior |
|-------|----------|
| Hover | Lift and darken |
| Focus | Visible focus ring (accessibility) |
| Active | Press feedback |

### Cards

| Element | Behavior |
|---------|----------|
| Pillar cards | Hover: shadow increase and lift |
| Package cards | Hover: shadow increase and border accent |
| Testimonial carousel | Auto-advance every 6 seconds; pause on hover; swipe on mobile |

---

## 15. SEO

| Element | Value |
|---------|-------|
| Title tag | "Incorporate123 — Privacy, Asset Protection & Business Formation Specialists" |
| Meta description | "25 years forming anonymous LLCs and corporations in Wyoming and Nevada. Year-round nominee services, offshore records, and all-inclusive pricing. Protect your privacy and assets today." |
| H1 | Hero headline (one per page) |
| H2s | Each section headline: "Choose Your Starting Point," "All-Inclusive Packages," "Why Clients Choose Incorporate123," "How It Works," etc. |
| Schema | Organization (name, address, phone, founding date), LocalBusiness (Reno office), FAQ (if FAQ content present) |
| Canonical | `https://incorporate123.com/` (pending domain decision) |
| Open Graph | Title, description, hero image |

---

## 16. Accessibility

| Requirement | Implementation |
|-------------|----------------|
| Keyboard navigation | All interactive elements focusable and operable via keyboard |
| Skip navigation | "Skip to main content" link as first focusable element |
| Alt text | All images get descriptive alt text |
| ARIA labels | Mega menu, carousel, accordion: proper ARIA roles and states |
| Focus indicators | Visible focus ring on all focusable elements |
| Semantic HTML | `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<article>` |
| Reduced motion | Respect `prefers-reduced-motion` for all animations and auto-advance |
| Contrast | WCAG 2.1 AA minimum for all text |

---

## 17. Content Rules

These rules apply to all homepage copy:

1. **Cite specific numbers.** $1,275, 25 years, $525/yr renewal, since 2012. Never vague claims.
2. **Never say "affordable," "competitive pricing," "cheap," or "discount."** The brand occupies the premium self-service quadrant.
3. **Never use fear-based language.** No "before it's too late," "don't risk your assets," "protect yourself before it's too late."
4. **Every self-service CTA gets a consultation safety net.** A phone number or "Talk to us" link must appear near every "Order Now" or "View Packages" button.
5. **Gold is always first or highlighted.** Bronze never appears on the homepage. Silver appears but is clearly secondary to Gold.
6. **Always show renewal rates alongside formation prices.** $1,275 formation is always accompanied by $525/yr renewal.
7. **Differentiate without naming competitors.** "Not 'nominee for a day'" (not "unlike ShieldCorp"). "Not a $5,000 consultation" (not "cheaper than Anderson Advisors").
8. **One primary CTA + one secondary CTA per section.** Never three competing actions in the same visual space.

---

## 18. Open Items

| Item | Status | Owner | Impact |
|------|--------|-------|--------|
| Domain (`.co` vs `.com`) | Pending | David | Canonical URL, all internal links |
| Package tier names confirmed | Pending | David | Card labels, CTAs, nav |
| Testimonials (2–3 anonymized) | David to collect | David | Testimonial section vs. stats fallback |
| Office photography | Needed | David / BIT Studios | Hero visual, trust signals |
| Phone number confirmed | Needed | David | Header, CTAs, trust bar, footer, sticky bar |
| Crypto gateway details | Needed | David | Payment badge accuracy |
| Trustpilot account | Pre-launch | David / BIT Studios | Post-launch review collection |

---

## 19. Routing Map

Every link on the homepage and where it goes:

| Source | Destination |
|--------|-------------|
| Logo | `/` |
| Nav: Privacy | Mega menu → cluster/comparison/package links |
| Nav: Asset Protection | Mega menu → cluster/comparison/package links |
| Nav: Formation | Mega menu → cluster/comparison/package links |
| Nav: Packages | Dropdown → state/tier package links |
| Nav: About | Dropdown → About, Contact, Testimonials |
| Get Started button | `/compare-packages/` |
| Hero: "Protect Your Privacy →" | `/privacy/` |
| Hero: "View Packages & Pricing →" | `/compare-packages/` |
| Hero: phone safety net | `tel:` link |
| Pillar card: Privacy | `/privacy/` |
| Pillar card: Asset Protection | `/asset-protection/` |
| Pillar card: Formation | `/formation/` |
| "Already have a company?" | `/compliance/` |
| Package card: WY Gold | `/packages/wyoming-gold/` |
| Package card: NV Gold | `/packages/nevada-gold/` |
| Package card: WY Silver | `/packages/wyoming-silver/` |
| Package card: NV Silver | `/packages/nevada-silver/` |
| "Compare All Packages →" | `/compare-packages/` |
| Package phone safety net | `tel:` link |
| Compliance: "Explore Compliance →" | `/compliance/` |
| Final CTA: "View Packages →" | `/compare-packages/` |
| Final CTA: "Schedule Consultation →" | `/contact/` |
| Final CTA: phone | `tel:` link |
| Mobile sticky: "Get Started →" | `/compare-packages/` |
| Mobile sticky: phone icon | `tel:` link |
| Footer | Full sitemap (see Section 12) |

---

*Confidential — BIT Studios × Incorporate123 — March 2026*
