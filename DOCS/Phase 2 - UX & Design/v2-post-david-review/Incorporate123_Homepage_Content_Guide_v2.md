# Incorporate123 — Homepage Content Guide (Complete)

**Prepared by:** BIT Studios
**Prepared for:** David, Incorporate123
**Date:** March 2026
**Phase:** 2 — UX & Interactive Prototyping
**Based on:** Homepage Wireframe Spec (Structure Only), Brand Guide v2, Positioning Framework, User Journey Mapping, Discovery Report, Phase 2 UX Scope
**Version:** v2 — Updated with David's feedback

---

## How to Use This Document

This guide provides **production-ready content direction** for every section of the homepage. It combines the structural wireframe spec with full copywriting guidance, voice/tone notes, content rationale, responsive behavior, and implementation notes. David writes final copy from these specs; the design and development teams implement the patterns.

Each section includes: exact content (or content direction for David's voice), strategic rationale, brand voice compliance notes, responsive behavior, and links to the component reuse map.

---

## Wireframe Improvement Notes

Before the section-by-section guide, here are areas where the wireframe spec should be strengthened. These are flagged for team discussion — none are blockers, but several would improve conversion performance.

### 1. Missing "Consultation Safety Net" on Multiple CTAs

The User Journey Mapping document establishes a firm rule: *"Every self-service CTA must have a 'Talk to us' alternative nearby."* The wireframe's Hero section (Section 3), Package Quick Links (Section 5), and Final CTA (Section 11) all include self-service CTAs but the hero and package sections are missing the consultation safety net. The Final CTA section does include a consultation CTA, which is correct — this pattern should be pulled up to the hero and package sections as well.

**Recommendation:** Add a subtle "Have questions? Call (775) xxx-xxxx" line or "Talk to us instead" text link directly below the CTA pair in Sections 3 and 5.

### 2. No Audience-Qualifying Signal in the Hero

The hero subheadline describes services but doesn't signal who this is for. The target audience is business owners with $500K+ in assets who value privacy over lowest price. Budget shoppers who land here and spend time before realizing they're in the wrong place waste their time and inflate bounce rates.

**Recommendation:** Add a qualifying phrase to the subheadline or trust strip — something that naturally signals premium positioning. The trust strip's "All-Inclusive Pricing" badge could become "$1,275 All-Inclusive" to set price expectations early, or the subheadline could include "for business owners who take privacy seriously."

### 3. Fourth Pillar (Compliance) Has No Pillar Card

Section 4 presents three pillar cards (Privacy, Asset Protection, Formation) but Compliance — the fourth pillar — only appears later in Section 10 as a returning-client callout. This is mostly correct strategically (Compliance targets returning clients, not new visitors), but some first-time visitors with existing entities who need registered agent services will miss it entirely in the pillar navigation.

**Recommendation:** No structural change needed — the current approach correctly prioritizes new-visitor intent routing. However, consider adding a subtle "Already have a company?" text link below the three pillar cards that routes to Section 10 or directly to `/compliance/`. This costs zero visual weight but catches the edge case.

### 4. "How It Works" Step 2 Mentions Bronze Against Brand Guide

Step 2 of the How It Works section says: "Gold for full privacy, Silver for expert formation, Bronze for budget Nevada filing." The Brand Guide explicitly states: "Never position Bronze as the default" and directs "minimal messaging" for Bronze. Mentioning Bronze here gives it equal footing with Gold and Silver in the homepage's process visualization.

**Recommendation:** Revise Step 2 to focus on Gold and Silver only: "Gold for full privacy and nominee services, Silver for expert formation with everything included." Bronze can remain in the packages section and comparison page — it doesn't need homepage air time.

### 5. No Blog/Resource Teaser Section

The site architecture includes a blog, and the Positioning Framework emphasizes content authority as an E-E-A-T signal. The homepage currently has no section surfacing educational content. Post-launch, a 2–3 card "Latest Insights" or "Privacy & Protection Resources" section between the Trust Signals (Section 8) and How It Works (Section 9) would support SEO, provide returning-visitor value, and reinforce the educational brand voice.

**Recommendation:** Not required at launch, but flag for post-launch Phase 2 iteration. Design the section now as an optional component; populate when blog content exists.

### 6. Crypto Note Placement Could Be Stronger

The wireframe places crypto payment info only in the footer bottom bar. Given that cryptocurrency acceptance is a medium-priority differentiator specifically tied to privacy-conscious audiences, it deserves more than footer treatment. It's already in the Trust Signals Bar (Section 8) as a badge, which is good — but the footer's "We accept cryptocurrency for your privacy" copy is the kind of message that could resonate higher on the page.

**Recommendation:** Keep the footer placement. Ensure the Trust Signals Bar badge communicates the privacy angle (not just "we accept crypto" but "Crypto payments for your privacy").

### 7. Package Cards Missing Gold-First Visual Hierarchy

The wireframe lists Wyoming Gold as the first card with a "Most Popular" badge, which is correct. However, it doesn't specify that Gold cards should be visually distinguished beyond the badge — larger, different border treatment, or lifted positioning. The Brand Guide states "Always show Gold first or highlighted."

**Recommendation:** Spec the Gold cards as visually elevated: a slightly larger card height, a privacy-blue top border or glow, and the "Most Popular" badge. Silver cards should feel solid but clearly secondary.

### 8. Mobile Sticky CTA Routes Only to Packages

The sticky bottom bar on mobile (Section 13.1) routes to `/compare-packages/` with a phone icon as the secondary action. This serves Informed Buyers well but not Privacy Researchers or Asset Protectors who are mid-education. They may not be ready for packages yet.

**Recommendation:** Consider making the sticky CTA contextual in later development phases — showing "View Packages" on conversion-oriented pages but "Continue Reading" or the pillar CTA on educational pages. For launch, the current approach is acceptable since the phone icon provides the consultation safety net.

---

## Section-by-Section Content Guide

---

## Section 1: Global Header

**Component:** `SiteHeader` + `MegaMenu` + `MobileNav`
**Reused on:** Every page
**Background:** White/transparent
**Behavior:** Shrinks to compact version on scroll (desktop); fixed without shrink (mobile)

### 1A. Top Utility Bar (Desktop Only)

| Element | Content | Voice Notes |
|---------|---------|-------------|
| Phone | `(775) xxx-xxxx` | Use actual phone number once confirmed. Format with area code in parentheses. Tap-to-call on all viewports. |
| Tagline | "Privacy, Asset Protection & Business Formation Specialists" | This IS the repositioning statement. It appears on every page via the header. Do not abbreviate or rephrase. |
| Client Login | "Client Login →" | Arrow indicates navigation. Routes to `/login/`. Must be visible on every page — returning clients look for this first. |

**Implementation note:** The utility bar is a secondary information strip. It should feel informational, not promotional. Small type (12–14px Inter), muted color (use `--muted` text color on white or light background). It should visually separate from the primary nav below it.

### 1B. Primary Header Bar

| Element | Position | Content | Notes |
|---------|----------|---------|-------|
| Logo | Left | Incorporate123 wordmark | Links to `/`. Logo should work at small sizes for mobile. If logomark + wordmark are separate assets, use logomark only on mobile. |
| Primary Nav | Center | Privacy · Asset Protection · Formation · Packages · About | Five items. First three trigger mega menus. "Packages" triggers a dropdown. "About" triggers a simple dropdown. |
| Get Started CTA | Right | "Get Started →" | **Amber button** (`--accent` #d97706). Routes to `/compare-packages/`. This is the persistent conversion shortcut across the entire site. |
| Client Login | Right | Text link or ghost button | Secondary to "Get Started." Always visible. Do not visually compete with the amber CTA. |
| Phone Icon | Right (mobile) | Tap-to-call icon | Mobile only. Replaces visible phone number on small viewports. |

**Brand voice on nav labels:** Use "Privacy" not "Business Privacy" in nav (space constraint). "Asset Protection" stays full. David prefers "Business Incorporation" over "Company Formation" — however, in the nav the label should remain "Formation" for brevity; full pillar pages use David's preferred terminology.

### 1C. Mega Menu Content

The mega menus serve two roles: navigation and education. Each menu shows cluster pages, comparison pages, and a quick-link shortcut to packages. The structure communicates the pillar/cluster hierarchy before visitors even click.

**Privacy Mega Menu:**

| Column | Links | Notes |
|--------|-------|-------|
| **Clusters** | Anonymous LLC Formation · Nominee Services · Wyoming Private Incorporation · Nevada Private Incorporation · California Private LLC · Florida Private LLC · Offshore Privacy | 7 links. Lead with Anonymous LLC (highest search volume: 720–1,100/mo). |
| **Compare** | Wyoming vs Nevada Privacy · Best State for Privacy | 2 comparison links. These are high-value SEO pages filling a competitive vacuum — no competitor has systematic comparison content. |
| **Quick Links** | Gold Packages (Privacy) · Schedule Consultation | Direct conversion shortcut + consultation safety net. |

**Asset Protection Mega Menu:**

| Column | Links | Notes |
|--------|-------|-------|
| **Clusters** | Nevada Asset Protection · Wyoming Asset Protection · Charging Order Protection · Investment Holding LLC · Real Estate Asset Protection · LLC vs Living Trust | 6 links. Lead with state-specific AP pages (highest commercial intent). |
| **Compare** | Best State for AP · WY vs NV for AP | 2 comparison links. |
| **Quick Links** | Gold Packages (AP) · Schedule Consultation | Same pattern as Privacy. |

**Formation Mega Menu:**

| Column | Links | Notes |
|--------|-------|-------|
| **Clusters** | Wyoming LLC · Nevada LLC · Wyoming Corporation · Nevada Corporation · LLC vs Corporation · Shelf Companies | 6 links. LLC pages first (higher volume). Shelf Companies last (niche). |
| **Compare** | Wyoming vs Nevada LLC · Best State for LLC · LLC vs Corporation | 3 comparison links. Formation has the most comparison content. |
| **Quick Links** | All Packages · Schedule Consultation | Routes to `/compare-packages/` — formation visitors need comparison more than pillar-specific packages. |

**Packages Dropdown:**

| Column | Links |
|--------|-------|
| **Wyoming** | Gold (Privacy) · Silver (Formation) · Bronze |
| **Nevada** | Gold (Privacy) · Silver (Formation) · Bronze |
| **Shelf** | Shelf Companies |
| **Quick Link** | Compare All Packages → `/compare-packages/` |

**About Dropdown:** About Us · Contact · Testimonials (simple list, no multi-column layout).

### 1D. Mobile Navigation

- Hamburger icon replaces nav items
- **Packages and Client Login appear first** in the mobile menu (above pillar accordions) — mobile visitors who know what they want shouldn't have to scroll through educational nav
- Each pillar name is tappable to expand an accordion revealing cluster links
- Persistent phone number with tap-to-call
- Sticky bottom CTA bar (see Section 13)

---

## Section 2: Hero

**First content block below header. This is the single most important 5 seconds on the entire site.**

### Strategic Role

The hero must accomplish three things simultaneously:
1. Communicate the brand repositioning (from geography-first to intent-first)
2. Route visitors toward their intent path (privacy, AP, formation, or packages)
3. Signal premium positioning so budget shoppers self-select out early

### Layout

- **Desktop:** Full-width split — left: headline + subheadline + CTAs + trust strip; right: abstract shield/privacy imagery or professional brand visual
- **Mobile:** Stacked — headline → CTAs → trust strip first; image below or hidden

### Content

| Element | Content | Rationale |
|---------|---------|-----------|
| **Eyebrow** | "Trusted Since 2000 · Privacy Specialists" | Two trust signals in one line. "Since 2000" establishes longevity. "Privacy Specialists" sets the topic before the headline. Short, scannable. Uses Inter font at small size. |
| **H1 Headline** | "Privacy, Asset Protection & Business Formation — All-Inclusive, Nothing Hidden" | Primary SEO target. Covers all three commercial pillars in one headline. "All-Inclusive, Nothing Hidden" immediately differentiates from budget providers who add fees at checkout and premium firms that gate behind consultations. Display XL (48px Outfit, weight 800). |
| **Subheadline** | "Year-round nominee services, offshore records, and expert formation in Wyoming and Nevada. 25 years of specialized experience protecting your privacy and assets." | Packs five differentiators into two sentences: (1) year-round nominees, (2) offshore records, (3) Wyoming & Nevada focus, (4) 25 years experience, (5) privacy + asset protection scope. Inter body font, 18–20px. |
| **Primary CTA** | "Protect Your Privacy →" | **Amber button** (`--accent` #d97706). Routes to `/privacy/` pillar. Leads with the #1 pillar. Action verb + outcome. Arrow indicates forward movement. |
| **Secondary CTA** | "View Packages & Pricing →" | **Outline/ghost button** (secondary style, `--secondary` #2563eb border). Routes to `/compare-packages/`. Serves Informed Buyers who want to skip education. |
| **Consultation Safety Net** | "Have questions? Call (775) xxx-xxxx" | Subtle text link below CTAs. Not a button — a quiet reassurance that a human is available. Satisfies the brand rule: every self-service CTA needs a "Talk to us" nearby. |
| **Trust Strip** | "25 Years · Specialist Team · $1,275 All-Inclusive · Money-Back Guarantee" | Horizontal badge row. Four items maximum (scanner-friendly). Each gets a small icon. Uses `--muted` text with subtle icon tinting. |

### Content Direction for David

The H1 is set and should not change (it's the SEO target). The subheadline can be refined in David's voice, but it must contain these proof points: year-round nominees, offshore records, Wyoming/Nevada, 25 years, privacy + assets. Avoid the words "affordable," "competitive pricing," "cheap," or "discount." Avoid fear-based language ("Before it's too late," "Don't risk," "Protect yourself before..."). The tone is authoritative and reassuring — a knowledgeable advisor, not a salesperson.

**Sample alternative subheadline (David to refine):**
"Year-round nominee services and offshore records custodian since 2012. Wyoming and Nevada LLC formation with everything included — registered agent, EIN, operating agreement, state fees. No hidden add-ons."

### Above-Fold Requirements (1440×900 Desktop)

All of the following must be visible without scrolling:
- Full H1 headline and subheadline
- Both CTA buttons + consultation safety net
- Trust strip badges
- Top edge of Section 3 (pillar navigation cards) — signals more content below the fold and encourages scroll

---

## Section 3: Pillar Navigation Cards

**Section Eyebrow:** "How Can We Help?"
**Section Headline (H2):** "Choose Your Starting Point"
**Section Subtext:** "Whether you need privacy protection, asset shielding, or business formation — we specialize in all three."

### Strategic Role

This is the primary intent-routing mechanism. Three cards map to the three commercial pillars. The visitor identifies their need and enters the appropriate education funnel. Card order is intentional: Privacy leads because it's the highest-value conversion path (Gold packages, $1,275–$2,100 AOV).

### Card 1: Business Privacy (Lead Position)

| Element | Content | Notes |
|---------|---------|-------|
| **Pillar Color** | Privacy Blue (`#2563eb`) | Top border or accent stripe |
| **Icon** | Shield or Lock | Abstract, not literal |
| **Card Title** | "Business Privacy" | H3 level |
| **Card Description** | "Anonymous LLCs, year-round nominee services, offshore records custodian. Real privacy — not 'nominee for a day.'" | The "nominee for a day" callout is a direct competitive jab at ShieldCorp's model. It differentiates without naming competitors. Critical messaging. |
| **Key Services** | Anonymous LLC Formation · Nominee Services · Wyoming/Nevada Private Incorporation · Offshore Privacy | 4 items. Scannable list under the description. |
| **Card CTA** | "Explore Privacy Solutions →" | Blue text link or blue-outlined button. Routes to `/privacy/`. |

**Content direction:** The description must hit three points: (1) anonymous LLCs as the hook, (2) year-round nominees as the differentiator, (3) offshore records as the depth signal. "Not 'nominee for a day'" is the most important phrase on this card — it's the single line that separates Incorporate123 from every competitor.

### Card 2: Asset Protection

| Element | Content | Notes |
|---------|---------|-------|
| **Pillar Color** | Asset Protection Green (`#16a34a`) | Top border or accent stripe |
| **Icon** | Vault or ShieldCheck | Conveys protection of assets, not data |
| **Card Title** | "Asset Protection" | H3 level |
| **Card Description** | "Charging order protection, holding structures, and multi-entity strategies for individuals with $500K+ in assets." | The "$500K+" qualifier is intentional. It signals who this is for and pre-qualifies the audience. Budget shoppers won't see themselves here. |
| **Key Services** | Charging Order Protection · Wyoming/Nevada AP · Investment Holding LLC · Real Estate AP | 4 items. |
| **Card CTA** | "Protect Your Assets →" | Green-themed link or button. Routes to `/asset-protection/`. |

**Content direction:** Asset protectors often arrive understanding LLC structures but needing education on charging order protection specifically. The description should use "charging order protection" as the lead term — it's the concept that resonates most with this audience and has strong search volume.

### Card 3: Company Formation

| Element | Content | Notes |
|---------|---------|-------|
| **Pillar Color** | Formation Amber (`#d97706`) | Top border or accent stripe |
| **Icon** | Building or FileCheck | Conveys building/creating something new |
| **Card Title** | "Business Incorporation" | H3 level. David prefers "Business Incorporation" over "Company Formation." Use his preferred terminology on the homepage card. |
| **Card Description** | "Expert LLC and Corporation formation in Wyoming and Nevada. Everything included — registered agent, EIN, operating agreement, state fees." | "Everything included" is the competitive differentiator here. Budget filers add fees at checkout; Incorporate123 bundles everything. |
| **Key Services** | Wyoming LLC · Nevada LLC · Wyoming Corporation · Nevada Corporation | 4 items. |
| **Card CTA** | "Start Your Company →" | Amber-themed link or button. Routes to `/formation/`. |

### Below the Cards (Recommended Addition)

**"Already have a company?"** — A subtle text link below the three cards: "Already have an entity? Explore compliance services →" routing to `/compliance/` or scrolling to Section 10. Costs no visual weight, catches the returning-client edge case.

---

## Section 4: Package Quick Links

**Section Eyebrow:** "Ready to Get Started?"
**Section Headline (H2):** "All-Inclusive Packages — See Exactly What's Included"
**Section Subtext:** "Transparent pricing with everything bundled. No hidden fees, no surprise add-ons."

### Strategic Role

This section serves Informed Buyers (Journey D persona) — visitors who already know what they want and need a direct shortcut to packages. It also gives Privacy Researchers and Asset Protectors who scrolled past the pillar cards a second chance to engage with specific pricing. Showing real prices on the homepage is a deliberate transparency signal that differentiates from Anderson Advisors (consultation-gated, no public pricing) and budget providers (who show $0 then add fees).

### Package Card Layout

- **Desktop:** Horizontal row of 4 cards, or 2×2 grid. Gold cards are visually elevated (larger, blue top border, "Most Popular" badge).
- **Mobile:** Horizontal scroll carousel or vertically stacked.

### Card Structure (Per Package)

| Element | Description | Voice Notes |
|---------|-------------|-------------|
| **State Badge** | "Wyoming" or "Nevada" | Small label above the package name |
| **Tier Badge** | "Gold · Privacy" or "Silver · Formation" | Color-coded to pillar. Gold cards use Privacy Blue. Silver cards use Formation Amber. |
| **"Most Popular" Badge** | Wyoming Gold only | This is the hero product. The badge creates social proof through implied popularity. |
| **Package Name** | e.g., "Wyoming Gold Package" | H3 level. Use the full name — "Wyoming Gold" without "Package" is acceptable if space constrained. |
| **Price** | e.g., "$1,275" | **JetBrains Mono font** for pricing. Large, prominent. Accompanied by "all-inclusive" label. Never say "starting at" — that implies hidden costs. |
| **Renewal Rate** | e.g., "$525/year with nominees" | Always show renewal alongside formation price. The Brand Guide requires this. JetBrains Mono, smaller than formation price. |
| **Key Includes** | 3–4 bullet items | Formation-specific, scannable. E.g., "Year-Round Nominees · Registered Agent · EIN Filing · Operating Agreement" for Gold; "Registered Agent · EIN Filing · Operating Agreement · State Fees" for Silver. |
| **Card CTA** | "View Full Details →" | Secondary-style button or text link. Routes to individual package page. |

### Four Packages to Display

| Package | Price | Renewal | Badge | Key Includes |
|---------|-------|---------|-------|-------------|
| **Wyoming Gold (Privacy)** | $1,275 | $525/yr with nominees | "Most Popular" | Year-Round Nominees · Offshore Records · Registered Agent · EIN + Operating Agreement |
| **Nevada Gold (Privacy)** | $1,800 | $525/yr with nominees | — | Year-Round Nominees · Offshore Records · Registered Agent · EIN + Operating Agreement |
| **Wyoming Silver (Formation)** | $875 | $325/yr | — | Registered Agent · EIN Filing · Operating Agreement · State Fees Included |
| **Nevada Silver (Formation)** | $1,275 | $325/yr | — | Registered Agent · EIN Filing · Operating Agreement · State Fees Included |

**Note:** Bronze is intentionally excluded from the homepage. Per the Brand Guide: "Never position Bronze as the default" and "minimal messaging" for Bronze. It exists on the comparison page for visitors who specifically seek it.

### Below the Cards

- **Compare link:** "Compare All Packages →" routing to `/compare-packages/`
- **Consultation safety net:** "Not sure which package? Call (775) xxx-xxxx for a free consultation."

---

## Section 5: Differentiator / Value Proposition Grid

**Section Headline (H2):** "Why Clients Choose Incorporate123"
**Section Subtext:** "25 years of specialized privacy and formation expertise — not a budget filing service, not a $5,000 consultation."

### Strategic Role

This is the competitive positioning section. It visually and verbally places Incorporate123 in the white space between budget filers ($0–$399) and consultation-gated premium firms ($2,750+). The subtext explicitly names both boundaries without naming competitors.

### Visual Treatment

- **Background:** Dark — use Deep Navy (`#1e3a5f`) or near-black. Breaks page rhythm and creates visual weight. White text.
- **Layout:** 2×3 grid (desktop), single column stacked (mobile)
- **Each item:** Icon (outlined, white or amber) + Title (Outfit, bold, white) + Description (Inter, light/muted white)

### Six Differentiators

| # | Icon | Title | Description | Competitive Context (Internal — Not Displayed) |
|---|------|-------|-------------|------------------------------------------------|
| 1 | Clock | "Year-Round Nominees Included" | "Your nominees serve all year, every year — not just at formation. Included in every Gold package at no extra cost." | ShieldCorp offers "nominee for a day." Wyoming Corporate Services charges $400/yr add-on. This is the #1 differentiator — highest messaging priority. |
| 2 | Globe | "Offshore Records Since 2012" | "Corporate records stored offshore for genuine privacy. Included with every Gold package — competitors charge $400–$5,000 per year for this." | Unique to Incorporate123. No competitor includes offshore records custodian at no additional cost. The price comparison creates urgency without fear. |
| 3 | DollarSign | "All-Inclusive Pricing" | "Formation, registered agent, EIN, operating agreement, and state fees — all bundled. The price you see is the price you pay." | Budget providers show $0 then add $200+ in fees at checkout. NCH adds registered agent as a separate line item. "Price you see is the price you pay" addresses the #1 objection. |
| 4 | Users | "Specialist Team" | "Dedicated privacy specialists with 25 years of focused expertise. Not a generic filing service." | Differentiates from both generic budget filers and large firms that lack specialization depth. Emphasizes team expertise and focused knowledge. |
| 5 | Award | "25 Years of Specialization" | "Focused exclusively on Wyoming and Nevada privacy formation since 2000. Depth of experience, not breadth." | NCH has 30+ years but is generic NV formation. Wyoming Corporate Services has 20+ years. Incorporate123's angle is specialization depth, not just longevity. |
| 6 | Phone | "Talk to a Real Person" | "Have questions? Call us directly. No chatbots, no offshore call centers, no sales pressure." | Anderson Advisors gates everything behind paid consultations. Budget providers have no phone support. Incorporate123 offers free, accessible human support — a rare middle ground. |

### Content Direction for David

Each description should be 1–2 sentences maximum. The descriptions above are ready to use as-is but David may want to adjust voice. Key rules: never say "affordable," never use fear language, always cite specific numbers where possible (years, prices, competitor price ranges). The competitive context column is internal reference only — never display competitor names on the site.

---

## Section 6: Social Proof / Testimonials

**Section Headline (H2):** "Trusted by Business Owners Nationwide"

### Launch Version (Pre-Reviews)

With zero public reviews at launch, this section uses one of two approaches:

**Option A: Anonymized Client Testimonials (Preferred)**

If David can supply 2–3 real testimonials, display them as a horizontal carousel or 3-card row.

| Element | Specification |
|---------|---------------|
| **Quote text** | 2–3 sentences from actual clients. Focus on privacy, trust, and included services. |
| **Attribution** | First name, state, year. E.g., "Michael R., California, 2024." Never full names (privacy positioning — showing full client names contradicts the brand). |
| **Star rating** | 5 stars per card (visual only at launch; Trustpilot-verified post-launch). |
| **Carousel behavior** | Auto-advance every 6 seconds. Pause on hover. Swipe on mobile. |

**Sample testimonial direction (David to write in client voice):**

> "I looked at a dozen formation companies before finding Incorporate123. The year-round nominee service was what sold me — everyone else charges extra or only provides nominees during formation. My Wyoming LLC has been running for three years now with zero compliance headaches."
> — *Michael R., California, 2024*

> "After talking to two attorneys who wanted $3,000+ retainers just to discuss options, I found Incorporate123 and had my anonymous LLC formed in a week. All-inclusive pricing, real people on the phone, and my records stored offshore. Exactly what I needed."
> — *Sarah T., Texas, 2023*

**Option B: Stats Fallback (If No Testimonials Available)**

Replace the testimonial carousel with a "By the Numbers" stats bar:

| Stat | Display | Notes |
|------|---------|-------|
| "25+" | "Years of Experience" | Founding year ~2000 |
| "2" | "Specialized States: WY & NV" | Depth over breadth messaging |
| "Since 2012" | "Offshore Records Custodian" | Specific date adds credibility |
| "All-Inclusive" | "No Hidden Fees, Ever" | Addresses top objection |

### Post-Launch Version

- Trustpilot widget embedded with live review carousel
- "Leave a Review" CTA linking to Trustpilot profile
- Target: 100+ reviews within 6 months post-launch
- Automated review request emails post-service completion

---

## Section 7: Trust Signals Bar

**Component:** `TrustSignalsBar`
**Reused on:** Package pages, checkout pages
**Layout:** Horizontal row of icon + label pairs (desktop); 2×3 grid (mobile)

### Content

| Icon | Label | Notes |
|------|-------|-------|
| Calendar | "Trusted Since 2000" | Longevity signal |
| Users | "Specialist Team" | Team expertise trust signal |
| ShieldCheck | "30-Day Money-Back Guarantee" | Risk reversal — critical for online purchases of $1,000+ |
| Phone | "(775) xxx-xxxx · Call Anytime" | Human accessibility. Use actual confirmed phone number. |
| Bitcoin | "Crypto Payments for Privacy" | Not just "Crypto Accepted" — tie it to the privacy brand. |
| Lock | "Secure Checkout" | Standard e-commerce trust signal |

### Voice Notes

These are badges, not sentences. Keep labels to 3–5 words. Icons do the heavy lifting. The crypto badge should say "for Privacy" to tie the payment method to the brand positioning — accepting crypto is unremarkable; accepting crypto because you're a privacy company is a differentiator.

---

## Section 8: How It Works

**Section Headline (H2):** "How It Works"
**Section Subtext:** "From research to fully formed and protected — we handle the details."

### Strategic Role

Reduces perceived complexity. Visitors considering a $1,275 purchase need to understand what happens after they click "buy." Four steps show the journey from research to protection without overwhelming detail.

### Layout

- **Desktop:** Horizontal step indicators connected by lines/arrows
- **Mobile:** Vertical timeline with connecting line

### Steps

| Step | Icon | Title | Description | Notes |
|------|------|-------|-------------|-------|
| 1 | Search | "Choose Your Protection Level" | "Explore our Privacy, Asset Protection, or Formation guides — or jump straight to packages if you already know what you need." | Acknowledges both researchers and informed buyers. Does not force a linear path. |
| 2 | Package | "Select Your Package" | "Pick the package that fits your needs. Gold for full privacy with year-round nominees, Silver for expert formation with everything included." | **Revised from wireframe:** Removes Bronze mention per Brand Guide direction. Focuses on Gold and Silver — the two packages the homepage is designed to sell. |
| 3 | FileText | "We Handle the Filing" | "Complete a short form with your entity details. We file with the state, obtain your EIN, prepare your operating agreement, and set up registered agent service." | This is the "we do the work" reassurance. Lists specific actions to make the service tangible. |
| 4 | CheckCircle | "You're Protected" | "Receive your formation documents, nominee confirmations, and ongoing compliance support. Your privacy and assets are secured." | Ends on the outcome, not the process. "You're Protected" is the emotional payoff. |

### Content Direction for David

Step descriptions should feel like a conversation, not a legal process. Each is 1–2 sentences. Avoid jargon. The reader should come away thinking "that's straightforward" — not "that sounds complicated." The word "we" should appear in steps 3–4 (Incorporate123 does the work); the word "you" should lead steps 1–2 (the visitor is in control).

---

## Section 9: Compliance / Returning Client Callout

**Pillar Color:** Compliance Purple (`#9333ea`)
**Layout:** Full-width card with split content — left: text; right: icon or illustration
**Visual identity:** Purple accent (top border, icon tinting, or background tint using `--pillar-compliance-soft`)

### Content

| Element | Content | Notes |
|---------|---------|-------|
| **Headline (H2)** | "Already Have an Entity? We Keep You Compliant." | Speaks directly to returning clients. "We Keep You Compliant" frames Incorporate123 as an ongoing partner, not a one-time service. |
| **Description** | "Registered agent renewals, annual reports, corporate minutes, virtual office upgrades, and domestication services. Ongoing support — not just a mailbox." | The "not just a mailbox" line differentiates from budget registered agent services that provide an address and nothing else. |
| **Primary CTA** | "Explore Compliance Services →" | Purple-themed button. Routes to `/compliance/`. |
| **Secondary CTA** | "Client Login →" | Ghost/outline button. Routes to `/login/`. For returning clients who know exactly where they're going. |

### Content Direction for David

This section should feel welcoming to existing clients who arrive on a homepage that's been completely redesigned. The tone is: "We haven't forgotten you — in fact, we've made things better." David may want to add a specific compliance detail ("We file your Wyoming annual report every year — you never have to think about it") if space permits.

---

## Section 10: Final Conversion CTA

**Background:** Dark/high-contrast — Deep Navy (`#1e3a5f`) or matching the differentiator section
**Layout:** Centered text with stacked CTAs
**Strategic Role:** Bottom-of-page conversion for visitors who scrolled the entire homepage. By this point, they've seen the brand positioning, pillar options, packages, differentiators, testimonials, process, and compliance. This is the "now what?" section.

### Content

| Element | Content | Notes |
|---------|---------|-------|
| **Headline (H2)** | "Ready to Protect Your Privacy and Assets?" | Direct question. Uses "your" to make it personal. Covers both pillar 1 (privacy) and pillar 2 (assets). |
| **Subtext** | "Start with a package, or schedule a free consultation to discuss your specific needs." | Two clear options: self-service or human guidance. "Free consultation" removes the cost barrier that Anderson Advisors creates. |
| **Primary CTA** | "View Packages & Pricing →" | **Amber button.** Routes to `/compare-packages/`. |
| **Secondary CTA** | "Schedule a Consultation →" | Outline/ghost button. Routes to `/contact/` or calendar link. |
| **Phone** | "(775) xxx-xxxx" | Tap-to-call. Centered below CTAs. Visible, not hidden. |

### Voice Notes

This section should feel like an invitation, not a hard sell. "Ready to..." is a question, not a command. The subtext gives equal weight to both paths (packages and consultation) because by this point in the page, the visitor has self-selected — if they're still here, they're interested. Don't add urgency language ("Limited time," "Act now," "Don't wait"). The brand voice is reassuring, not pressuring.

---

## Section 11: Global Footer

**Component:** `SiteFooter`
**Reused on:** Every page
**Background:** Footer Dark (`#0f172a`)
**Layout:** 4-column grid (desktop); stacked accordion (mobile)

### Footer Structure

The footer serves as a complete sitemap. Every cluster page, comparison page, package page, and utility page should be accessible from the footer. This supports SEO (crawlability and internal link equity) and user navigation (visitors who scroll to the bottom are often looking for specific pages).

#### Column 1: Business Privacy

| Label | URL |
|-------|-----|
| **Business Privacy** (header) | `/privacy/` |
| Anonymous LLC Formation | `/anonymous-llc/` |
| Nominee Services | `/nominee-services/` |
| Wyoming Private Incorporation | `/wyoming-private-incorporation/` |
| Nevada Private Incorporation | `/nevada-private-incorporation/` |
| California Private LLC | `/california-private-llc/` |
| Florida Private LLC | `/florida-private-llc/` |
| Best State for Privacy | `/best-state-privacy/` |
| Wyoming vs Nevada Privacy | `/wyoming-vs-nevada-privacy/` |

#### Column 2: Asset Protection + Formation

| Label | URL |
|-------|-----|
| **Asset Protection** (header) | `/asset-protection/` |
| Charging Order Protection | `/charging-order-protection/` |
| Wyoming Asset Protection | `/wyoming-asset-protection/` |
| Nevada Asset Protection | `/nevada-asset-protection/` |
| Investment Holding LLC | `/investment-holding-llc/` |
| **Company Formation** (header) | `/formation/` |
| Wyoming LLC | `/wyoming-llc/` |
| Nevada LLC | `/nevada-llc/` |
| Wyoming Corporation | `/wyoming-corporation/` |
| Nevada Corporation | `/nevada-corporation/` |

#### Column 3: Packages + States

| Label | URL |
|-------|-----|
| **Packages** (header) | `/compare-packages/` |
| Wyoming Gold (Privacy) | `/packages/wyoming-gold/` |
| Wyoming Silver (Formation) | `/packages/wyoming-silver/` |
| Nevada Gold (Privacy) | `/packages/nevada-gold/` |
| Nevada Silver (Formation) | `/packages/nevada-silver/` |
| **By State** (header) | |
| Wyoming | `/wyoming/` |
| Nevada | `/nevada/` |
| California | `/california/` |
| Florida | `/florida/` |

#### Column 4: Company + Support

| Label | URL |
|-------|-----|
| **Company** (header) | |
| About Us | `/about/` |
| Contact | `/contact/` |
| Testimonials | `/testimonials/` |
| Blog | `/blog/` |
| FAQ | `/faq/` |
| Client Login | `/login/` |
| **Compliance** (header) | `/compliance/` |
| Registered Agent | `/registered-agent/` |
| Annual Reports | `/annual-reports/` |
| 2nd-Tier State Filings | `/2nd-tier-state-filings/` |
| Shares & Corporate Records | `/shares-corporate-records/` |
| Offshore (de-emphasized) | `/offshore/` |

### Footer Bottom Bar

| Element | Content | Notes |
|---------|---------|-------|
| Copyright | "© 2026 Incorporate123. All rights reserved." | Update year dynamically |
| Legal Links | Privacy Policy · Terms of Service | Standard legal requirement |
| Phone | "(775) xxx-xxxx" | Tap-to-call. Consistent with header. |
| Address | Reno, Nevada mailing address (registered agent address) | Supports LocalBusiness schema |
| Payment Icons | Visa · Mastercard · AMEX · Bitcoin · Ethereum · XRP · Litecoin · Monero | Visual badges, not text |
| Crypto Note | "We accept cryptocurrency for your privacy" | Ties crypto to brand positioning |

---

## Section 12: Mobile-Specific Requirements

### Sticky Bottom CTA Bar

**Component:** `StickyMobileCTA`
**Reused on:** Every page (mobile only)

| Element | Behavior |
|---------|----------|
| Primary CTA (~70% width) | "Get Started →" routes to `/compare-packages/` |
| Phone Icon (~30% width) | Tap-to-call `tel:` link |
| Trigger | Appears after scrolling past hero section; hides when hero CTAs are visible |

### Mobile Section Stacking Order

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

## Section 13: SEO Requirements

| Element | Value |
|---------|-------|
| **Title Tag** | "Incorporate123 — Privacy, Asset Protection & Business Formation Specialists" |
| **Meta Description** | "25 years forming anonymous LLCs and corporations in Wyoming and Nevada. Year-round nominee services, offshore records, and all-inclusive pricing. Protect your privacy and assets today." |
| **H1** | Hero headline (one H1 per page — critical fix from current site's zero H1 tags) |
| **H2s** | Section headlines: "Choose Your Starting Point," "All-Inclusive Packages," "Why Clients Choose Incorporate123," "How It Works," etc. |
| **Schema Markup** | Organization schema (name, address, phone, founding date ~2000), LocalBusiness schema (Reno office), FAQ schema if any FAQ content present |
| **Canonical URL** | `https://incorporate123.co/` |
| **Open Graph** | Title, description, hero image for social sharing |

---

## Section 14: Accessibility Requirements

| Requirement | Implementation |
|-------------|----------------|
| Color contrast | WCAG 2.1 AA minimum (4.5:1 text, 3:1 large text). Test amber on white — `#d97706` on white is 3.1:1, which passes for large text only. For small amber text, darken to `--accent-hover` `#b45309`. |
| Keyboard navigation | All interactive elements focusable via keyboard |
| Skip navigation | "Skip to main content" as first focusable element |
| Alt text | All images have descriptive alt text. Hero image: describe the visual concept, not "hero image." |
| ARIA labels | Mega menu, carousel, accordion — proper ARIA roles and states |
| Focus indicators | Visible focus ring on all focusable elements (use `--secondary` blue) |
| Semantic HTML | `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<article>` |
| Reduced motion | Respect `prefers-reduced-motion` for carousel auto-advance, hover animations, and timeline transitions |

---

## Content Dependencies & Open Items

| Item | Status | Owner | Impact |
|------|--------|-------|--------|
| Domain confirmed: incorporate123.co | Confirmed | David | Canonical URL, all internal links, redirect plan |
| Package tier names (Gold/Silver/Bronze) | Pending confirmation | David | Package card labels, CTAs, nav labels |
| Testimonials (2–3 anonymized) | David to collect | David | Testimonial section vs. stats fallback |
| Phone number confirmation | Needed | David | Header, CTAs, trust signals, footer, sticky mobile bar |
| Crypto payment gateway details | Needed | David | Payment badge accuracy, checkout flow |
| Trustpilot account setup | Pre-launch | David / BIT Studios | Post-launch review collection |

---

## Component Reuse Map

Components built for the homepage that are reused across other page types:

| Component | Homepage Use | Reused On |
|-----------|-------------|-----------|
| `SiteHeader` (+ `MegaMenu` + `MobileNav`) | Global header | Every page |
| `SiteFooter` | Global footer | Every page |
| `Button` (all variants: amber primary, outline secondary, ghost, text link) | CTAs throughout | Every page |
| `TrustSignalsBar` | Section 7 | Package pages, checkout |
| `TestimonialCarousel` | Section 6 | Package pages, about page |
| `CTABlock` | Sections 4, 9, 10 | Pillar pages, cluster pages |
| `PillarCard` | Section 3 | State hub pages |
| `PackagePreviewCard` | Section 4 | Comparison page, state hubs |
| `StepIndicator` | Section 8 | Checkout flow |
| `Badge` | Trust strip, package tiers | Everywhere |
| `StickyMobileCTA` | Mobile bottom bar | Every page (mobile) |

---

## Quick Reference: Brand Voice Checklist for Homepage Copy

Before any homepage copy is finalized, verify against this checklist:

- [ ] Does the copy cite specific numbers? ($1,275, 25 years, $525/yr, since 2012)
- [ ] Does it avoid "affordable," "competitive pricing," "cheap," "discount," "budget"?
- [ ] Does it avoid fear-based language? ("Before it's too late," "Don't risk," "Protect yourself before...")
- [ ] Is the tone authoritative and educational, not salesy?
- [ ] Does every self-service CTA have a "talk to us" safety net nearby?
- [ ] Is Gold positioned first or highlighted? Is Bronze absent or de-emphasized?
- [ ] Are renewal rates shown alongside formation prices?
- [ ] Does it differentiate from competitors without naming them?
- [ ] Is there one primary CTA + one secondary per section (never three competing styles)?
- [ ] Does the copy work for both scanners (80%) and researchers (20%)?

---

*Confidential — BIT Studios × Incorporate123 — March 2026*
