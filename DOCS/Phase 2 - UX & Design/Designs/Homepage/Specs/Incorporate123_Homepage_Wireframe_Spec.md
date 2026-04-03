# Incorporate123 — Homepage Wireframe Specification

**Document 1 of 5** · Phase 2 Homepage Design Package
**Prepared by:** BIT Studios · **For:** David, Incorporate123
**Date:** March 2026
**Status:** Draft — Pending Client Review

---

## Purpose

This document defines the section-by-section layout of the Incorporate123 homepage. Each section specifies what it contains, how it behaves on desktop and mobile, its interaction states, and which design principles it must satisfy. This is the blueprint the prototype gets built from.

**Governing document:** Homepage Design Principles (12 principles). Every section below references the applicable principles by number.

**URL:** `/` (root)
**Template type:** Homepage (unique — 1 of 1)
**Estimated scroll depth:** 5–7 viewport heights on desktop, 8–10 on mobile

---

## Section Order Overview

| # | Section | Primary Purpose | Principles |
|---|---------|----------------|------------|
| 0 | Site Header | Navigation, trust anchor, login access | P4, P5, P9, P11 |
| 1 | Hero | Intent routing + stage-skip shortcut | P1, P2, P3, P5, P8, P10 |
| 2 | Pillar Navigation | Goal-based routing into content pillars | P1, P4, P8, P9 |
| 3 | Package Quick-Access | Direct conversion for informed buyers | P3, P6, P12 |
| 4 | Differentiators | Competitive positioning + value justification | P8, P10, P12 |
| 5 | Trust Signals Bar | Compensate for zero reviews at launch | P7, P10 |
| 6 | How It Works | Process demystification | P2, P10 |
| 7 | Testimonials / Social Proof | Human validation + credibility | P7 |
| 8 | Final CTA Block | Conversion capture for full-page scrollers | P4, P5 |
| 9 | Site Footer | Sitemap, legal, SEO links | P9, P11 |

---

## Section 0: Site Header

**Purpose:** Persistent navigation, trust anchor (phone number), login access, primary CTA. The header is global — it appears on every page, not just the homepage — but it's built alongside the homepage prototype (Phase A build order).

### Desktop Layout

```
┌──────────────────────────────────────────────────────────────────────┐
│  [Logo]    Privacy ▾   Asset Protection ▾   Formation ▾   Packages  │
│                                          About ▾   [Login]  [📞 Phone]  [Get Started →] │
└──────────────────────────────────────────────────────────────────────┘
```

| Element | Specification |
|---------|--------------|
| **Logo** | Incorporate123 logo, links to `/`. Left-aligned. |
| **Primary Nav** | Four items: Privacy, Asset Protection, Formation, Packages. Each triggers mega menu on hover (except Packages — direct link to `/compare-packages/`). |
| **Secondary Nav** | About (dropdown: About, Contact, Testimonials). |
| **Phone Number** | Clickable `tel:` link. Visible in header at all times. Format: `(XXX) XXX-XXXX`. |
| **Primary CTA** | "Get Started →" button. Secondary blue (`#2563EB`), not amber — amber is reserved for in-page conversion CTAs. Ghost/outline style to avoid competing with page-level CTAs. |

### Mega Menu Behavior

- **Trigger:** Hover on desktop, tap-expand on mobile.
- **Structure:** Each pillar column shows its cluster pages as links, with a "Compare" subsection at the bottom listing relevant comparison pages.
- **Privacy column** appears first (leftmost), reinforcing the lead pillar position.
- **Pillar color accent:** Each column gets a subtle top border or header accent in its pillar color (blue/green/amber).

### Mobile Layout

```
┌──────────────────────────────┐
│  [☰]   [Logo]   [📞]  [Login] │
└──────────────────────────────┘
```

| Element | Specification |
|---------|--------------|
| **Hamburger menu** | Opens full-screen overlay. Maintains pillar structure — NOT an alphabetical page list. |
| **Menu order** | Packages and Login appear above the pillar accordions. Visitor can reach packages in one tap. |
| **Phone icon** | Tap-to-call. Always one tap away, never buried in the menu. |
| **Sticky behavior** | Header collapses to compact height on scroll (logo + hamburger + phone). |

### Interaction States

- **Scroll:** Header becomes sticky with reduced height and subtle background blur/shadow.
- **Active page:** Current pillar highlighted in nav (not applicable on homepage, but define the pattern here).
- **Mega menu open:** Subtle overlay dims page content behind the menu.

---

## Section 1: Hero

**Purpose:** The first thing every visitor sees. Establishes the repositioned identity ("Privacy, Asset Protection & Business Formation Specialists"), routes by intent, and provides a stage-skip shortcut for informed buyers. Must contain a visible CTA without scrolling.

**Principles:** P1 (Intent-first), P2 (80/20), P3 (Stage-skipping), P5 (Above-fold CTA), P8 (Privacy leads), P10 (No fear)

### Desktop Layout

```
┌──────────────────────────────────────────────────────────────────────┐
│                                                                      │
│   [Privacy-themed abstract graphic / shield-lock motif]              │
│                                                                      │
│   HEADLINE (Display XL · Outfit 48px · 8 words max)                 │
│   Subhead with specific trust proof (Inter 18px · 1–2 lines)        │
│                                                                      │
│   [Protect Your Privacy →]  (amber, primary)                        │
│   [View Packages & Pricing →]  (ghost/outline, secondary)           │
│   "or talk to an expert — (XXX) XXX-XXXX"  (text link, subtle)     │
│                                                                      │
│   ┌─────────────┐  ┌─────────────┐  ┌─────────────┐                │
│   │  Trusted     │  │  25 Years   │  │  Real Reno  │                │
│   │  Since 2000  │  │  Specialized│  │  Office     │                │
│   └─────────────┘  └─────────────┘  └─────────────┘                │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

| Element | Specification |
|---------|--------------|
| **Background** | Deep Navy (`#1E3A5F`) full-width section. Creates authority feel. |
| **Visual** | Abstract/conceptual privacy-themed graphic (shield, lock, vault motif). NOT stock people. Right-aligned on desktop, above content on mobile. |
| **Headline** | Display XL (Outfit 48px/800). Privacy-first language. Max 8 words. Direction: something in the territory of protecting identity/privacy, not "Form Your LLC." David writes final copy. |
| **Subhead** | Inter 18px. 1–2 lines max. Must include a specific trust proof: entity count, years in business, or included-value statement. |
| **Primary CTA** | Amber (`#D97706`). Action verb + outcome. Direction: "Protect Your Privacy →" or similar. Links to `/privacy/` pillar. |
| **Secondary CTA** | Ghost/outline style. "View Packages & Pricing →". Links to `/compare-packages/`. Serves the Informed Buyer (Persona D) who skips education. |
| **Consultation safety net** | Subtle text link below CTAs. Phone number + "talk to an expert." Not a button — must not compete with the two CTAs above. |
| **Mini trust strip** | 3 compact proof points below CTAs. Lightweight — just enough to earn a scroll. |

### Mobile Layout

```
┌──────────────────────────────┐
│                              │
│  [Abstract graphic, smaller] │
│                              │
│  HEADLINE (Display LG 36px)  │
│  Subhead (16px, 2 lines)     │
│                              │
│  [Protect Your Privacy →]    │
│  [View Packages →]           │
│  "talk to an expert"         │
│                              │
│  [Trust strip — horizontal]  │
│                              │
└──────────────────────────────┘
│ ══ Sticky CTA Bar ══════════ │
│ [Protect Your Privacy] [📞]  │
└──────────────────────────────┘
```

| Mobile Adaptation | Notes |
|-------------------|-------|
| **Headline** | Drops from 48px to 36px. Same copy, may wrap to 2 lines. |
| **Graphic** | Reduced size, positioned above text (not beside). |
| **CTAs** | Full-width stacked buttons. Primary on top. |
| **Sticky bar** | Appears on scroll. Contains primary CTA + phone icon. Remains for entire page. |

### Content Constraints

- **Headline:** Max 8 words. No jargon. No entity-type language ("LLC," "Corporation") in the headline itself — that belongs in the subhead or pillar cards.
- **Subhead:** Max 25 words. Must contain at least one specific number (years, entities formed, price, or savings figure).
- **No paragraphs.** The hero is headline + subhead + CTAs. Any additional context lives in subsequent sections.

---

## Section 2: Pillar Navigation Block

**Purpose:** The primary routing mechanism for first-time visitors. Three (optionally four) intent-based cards that match the content pillars. This is where the pillar color-coding system gets established for the entire site.

**Principles:** P1 (Intent-first), P4 (One primary + one secondary per section), P8 (Privacy leads), P9 (Color-coding starts here)

### Desktop Layout

```
┌──────────────────────────────────────────────────────────────────────┐
│                                                                      │
│   Section headline: "How Can We Help You?"  (or similar)             │
│                                                                      │
│   ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐  │
│   │ 🔵 PRIVACY        │  │ 🟢 ASSET          │  │ 🟠 FORMATION     │  │
│   │                    │  │    PROTECTION      │  │                  │  │
│   │ Core message       │  │ Core message       │  │ Core message     │  │
│   │ (2–3 lines)        │  │ (2–3 lines)        │  │ (2–3 lines)     │  │
│   │                    │  │                    │  │                  │  │
│   │ Trust element       │  │ Trust element       │  │ Trust element   │  │
│   │ (italic, smaller)  │  │ (italic, smaller)  │  │ (italic, smaller)│  │
│   │                    │  │                    │  │                  │  │
│   │ [Explore →]        │  │ [Explore →]        │  │ [Explore →]     │  │
│   └──────────────────┘  └──────────────────┘  └──────────────────┘  │
│                                                                      │
│   Optional: 4th card for Compliance (purple, smaller/secondary row)  │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

| Element | Specification |
|---------|--------------|
| **Layout** | 3-column grid on desktop, single stack on mobile. |
| **Card order** | Privacy (left/first) → Asset Protection (center) → Formation (right/last). Matches nav order and strategic priority. |
| **Card top border** | 4px solid in pillar color. This is the primary color-coding teaching moment. |
| **Icon** | Simple line icon or abstract symbol per pillar (lock/shield/document). Tinted in pillar color. |
| **Pillar label** | Bold, pillar color. All caps or sentence case — define in design system. |
| **Core message** | 2–3 lines from the Positioning Framework's pillar messaging. Privacy: "Privacy You Can't Get Elsewhere." AP: "Protect What You've Built." Formation: "Expert Formation, All-Inclusive." |
| **Trust element** | Italic, smaller text. Per the Positioning Framework: Privacy: "Year-round nominees included — not 'nominee for a day.'" AP: "For individuals with $500K+ in assets." Formation: "25 years forming Wyoming and Nevada entities." |
| **CTA** | Soft CTA per pillar. "Explore Privacy Options →" / "Explore Asset Protection →" / "Start Your Company →". Links to respective pillar pages. Style: text link with arrow, not a full button. One per card only. |

### Compliance Card (Optional)

Compliance can appear as a fourth card in a secondary row or as a smaller supplementary element below the three primary cards. It should not have equal visual weight to the three primary pillars — Compliance is a supporting service, not a primary intent entry point.

If included: Purple (`#9333EA`) accent, "Stay Compliant →" CTA, links to `/compliance/`.

### Mobile Layout

Cards stack vertically. Privacy first, Formation last. Each card is full-width with the same content structure. Consider a horizontally scrollable card carousel as an alternative if vertical stacking pushes the package strip too far down.

---

## Section 3: Package Quick-Access Strip

**Purpose:** Serves the Informed Buyer (Persona D) and any visitor who's ready to buy after seeing the hero and pillar cards. Shows all three tiers with Gold highlighted. Must display actual prices and renewal rates.

**Principles:** P3 (Stage-skipping), P6 (Gold-first hierarchy), P12 (Premium positioning)

### Desktop Layout

```
┌──────────────────────────────────────────────────────────────────────┐
│                                                                      │
│   Section headline: "Ready to Get Started?"  (or similar)            │
│   Subtext: "All-inclusive packages — state fees, agent, and          │
│   compliance included."                                              │
│                                                                      │
│   ┌─────────────┐  ┌═══════════════════┐  ┌─────────────┐          │
│   │ SILVER       │  ║ ★ GOLD            ║  │ BRONZE       │          │
│   │ Formation    │  ║   Privacy          ║  │ Nevada Only  │          │
│   │              │  ║   MOST POPULAR     ║  │              │          │
│   │ WY from $875 │  ║ WY $1,275          ║  │ NV from $XXX │          │
│   │ NV from      │  ║ NV $1,800          ║  │              │          │
│   │    $1,275    │  ║                    ║  │ Renewal:     │          │
│   │              │  ║ Renewal: $525/yr   ║  │   $XXX/yr    │          │
│   │ Renewal:     │  ║ with nominees      ║  │              │          │
│   │   $325/yr    │  ║                    ║  │ [View →]     │          │
│   │              │  ║ [Get Started →]    ║  │              │          │
│   │ [View →]     │  ║ "Schedule consult" ║  │              │          │
│   │              │  ║                    ║  │              │          │
│   └─────────────┘  └═══════════════════┘  └─────────────┘          │
│                                                                      │
│   "Compare all packages in detail →"  (text link)                    │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

| Element | Specification |
|---------|--------------|
| **Gold card** | Center position. Visually elevated: subtle border highlight, "Most Popular" badge, slightly taller card, or background tint. Double-border or shadow treatment to draw the eye. |
| **Gold CTA** | Amber primary button: "Get Started →" or "Protect Your Privacy →". Links to Gold package page. Consultation safety net text link below. |
| **Silver card** | Left position. Subordinate visual weight. Same structure but without elevated styling. CTA: "View Silver Package →" (outline style). |
| **Bronze card** | Right position. Minimal presence. Smallest card or least visual emphasis. NV-only language. |
| **Pricing display** | JetBrains Mono for all dollar amounts. Formation price AND renewal rate always shown together. "All-inclusive" label on each card. |
| **Renewal visibility** | Renewal rate appears directly below formation price. Never hidden. Gold: "$525/yr with nominees." Silver: "$325/yr." |
| **Compare link** | Below cards. Text link: "Compare all packages in detail →" linking to `/compare-packages/`. |

### Mobile Layout

Cards stack vertically with Gold on top (first visible). Silver second, Bronze third. Gold retains its elevated styling even in stacked view. Each card is full-width.

### Anti-Patterns

- **Never** position Bronze first or give it equal visual weight.
- **Never** show formation price without the renewal rate alongside it.
- **Never** use "starting at" language — always "all-inclusive."
- **Never** show more than one primary amber CTA in this section (Gold only).

---

## Section 4: Differentiators

**Purpose:** Answers "Why Incorporate123?" by surfacing the competitive advantages that justify the premium price. This is where the value-comparison messaging from the Positioning Framework does its work.

**Principles:** P8 (Privacy leads), P10 (No fear), P12 (Premium positioning)

### Desktop Layout

```
┌──────────────────────────────────────────────────────────────────────┐
│  Background: Deep Navy (#1E3A5F) — authority section                 │
│                                                                      │
│   Section headline: "Why Clients Choose Incorporate123"              │
│   (white text on navy)                                               │
│                                                                      │
│   ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐          │
│   │ [icon]   │  │ [icon]   │  │ [icon]   │  │ [icon]   │          │
│   │ Year-    │  │ Offshore │  │ All-     │  │ 25 Years │          │
│   │ Round    │  │ Records  │  │ Inclusive │  │ Speciali-│          │
│   │ Nominees │  │ Storage  │  │ Pricing  │  │ zed Exp. │          │
│   │          │  │          │  │          │  │          │          │
│   │ 2–3 line │  │ 2–3 line │  │ 2–3 line │  │ 2–3 line │          │
│   │ explain  │  │ explain  │  │ explain  │  │ explain  │          │
│   └──────────┘  └──────────┘  └──────────┘  └──────────┘          │
│                                                                      │
│   ┌──────────┐  ┌──────────┐                                        │
│   │ [icon]   │  │ [icon]   │                                        │
│   │ Real     │  │ Crypto   │                                        │
│   │ Reno     │  │ Payments │                                        │
│   │ Office   │  │ Accepted │                                        │
│   │          │  │          │                                        │
│   │ 2–3 line │  │ 2–3 line │                                        │
│   └──────────┘  └──────────┘                                        │
│                                                                      │
│   Optional: Value comparison callout box                             │
│   "Competitors charge $400–$5,000/yr for nominee services alone.    │
│    Ours are included."                                               │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

| Element | Specification |
|---------|--------------|
| **Background** | Deep Navy (`#1E3A5F`) full-width. White/light text. Creates visual contrast and authority. |
| **Layout** | 4-column grid (top row) + 2-column grid (bottom row) on desktop. 2-column grid on tablet. Single stack on mobile. |
| **Differentiator order** | Year-Round Nominees (highest priority per Positioning Framework) → Offshore Records → All-Inclusive Pricing → 25 Years → Real Office → Crypto. |
| **Icon** | Simple line icon, white or light blue. Consistent style across all six. |
| **Title** | Bold, white, 16–18px. Short: 2–4 words. |
| **Description** | 2–3 lines, light text. Must include a specific fact or number where possible. |
| **Value comparison callout** | Optional highlighted box below the grid. Contains the competitive comparison messaging from the Positioning Framework. Specific: "Competitors charge $400–$5,000/yr for nominee services alone — ours are included." |

### Six Differentiators (Content Direction)

1. **Year-Round Nominee Services** — "Your nominees are maintained 365 days a year — not just at formation. Most providers offer 'nominee for a day' and disappear."
2. **Offshore Records Storage** — "Corporate records maintained outside US jurisdiction. Unique to Incorporate123 — no competitor offers this."
3. **All-Inclusive Pricing** — "State fees, registered agent, operating agreement, EIN — all included. No hidden fees, no surprise add-ons."
4. **25 Years Specialized Experience** — "Forming Wyoming and Nevada entities since 2000. Over [X] entities formed."
5. **Real Reno Office** — "Kingsbury Executive Suites, Reno, Nevada. Real people, real office — not a virtual mailbox."
6. **Cryptocurrency Accepted** — "Bitcoin, Ethereum, XRP, Litecoin, Monero. We speak the language of privacy."

### Mobile Layout

2-column grid (icons + titles visible, descriptions expandable) or full-width stack. If stacking, consider showing only the top 4 with a "See all advantages →" expand.

---

## Section 5: Trust Signals Bar

**Purpose:** A concentrated horizontal strip of trust indicators. On the homepage this is the fullest version — lighter versions appear on other conversion pages.

**Principles:** P7 (Trust compensates for zero reviews), P10 (No fear)

### Desktop Layout

```
┌──────────────────────────────────────────────────────────────────────┐
│  Light background (#F8FAFC)                                          │
│                                                                      │
│  [🏛 Trusted    [📞 Call Us     [💰 30-Day Money-   [₿ Crypto    │
│   Since 2000]    (XXX) XXX-XXXX]  Back Guarantee]     Accepted]    │
│                                                                      │
│  [🏢 Real Reno Office — Kingsbury Executive Suites]                 │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

| Element | Specification |
|---------|--------------|
| **Layout** | Horizontal strip, centered. 4–5 signals in a row on desktop, 2×2 or 2×3 grid on mobile. |
| **Style** | Each signal: icon + short text label. Compact — no descriptions. Visual badges, not prose. |
| **Phone number** | Clickable `tel:` link. Reinforces header phone number with a second touchpoint. |
| **Crypto badges** | Individual small icons for BTC, ETH, XRP, LTC, XMR. Signals privacy alignment. |
| **Money-back badge** | "30-Day Money-Back Guarantee" with shield/checkmark icon. |

### Scalability Note

This section is designed to absorb Trustpilot review data post-launch. When reviews accumulate, a Trustpilot widget or star rating + review count can be added to this strip without redesigning the section. Design the initial version with a placeholder slot for future review integration.

---

## Section 6: How It Works

**Purpose:** Demystifies the process for first-time visitors. Reduces the perceived complexity of hiring a formation specialist. Addresses the Formation Researcher (Persona E) and Privacy Researcher (Persona A) who need to understand the steps before committing.

**Principles:** P2 (80/20 progressive disclosure), P10 (No fear)

### Desktop Layout

```
┌──────────────────────────────────────────────────────────────────────┐
│                                                                      │
│   Section headline: "How It Works"                                   │
│   Subtext: "From selection to formation in four steps."              │
│                                                                      │
│   ┌─────┐ ──── ┌─────┐ ──── ┌─────┐ ──── ┌─────┐                  │
│   │  1  │      │  2  │      │  3  │      │  4  │                  │
│   │     │      │     │      │     │      │     │                  │
│   │Choose│      │ We  │      │Nomi-│      │On-  │                  │
│   │Your │      │Form │      │nees │      │going│                  │
│   │Pack-│      │Your │      │Pro- │      │Comp-│                  │
│   │age  │      │Enti-│      │tect │      │lianc│                  │
│   │     │      │ty   │      │You  │      │e    │                  │
│   └─────┘      └─────┘      └─────┘      └─────┘                  │
│   Short desc    Short desc    Short desc    Short desc              │
│   (2 lines)     (2 lines)     (2 lines)     (2 lines)              │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

| Element | Specification |
|---------|--------------|
| **Steps** | 4 steps, connected by a visual progress line or arrows. |
| **Step format** | Numbered circle + short title (3–4 words) + 2-line description. |
| **Connector** | Dashed or solid line between steps, suggesting linear progression. |
| **No CTA in this section.** | This is purely informational. The CTA comes in the next section or the final CTA block. Adding a CTA here would break the P4 rule (this section is educational, not a conversion moment). |

### Four Steps (Content Direction)

1. **Choose Your Package** — "Select Gold, Silver, or Bronze. Compare features and pick what fits your needs."
2. **We Form Your Entity** — "We handle all filings, state fees, and paperwork. Typical turnaround: [X] business days."
3. **Nominees Protect Your Privacy** — "Year-round nominee directors and officers keep your name off public records." (Gold-specific — reinforces the hero product.)
4. **Ongoing Compliance Handled** — "Registered agent, annual reports, corporate minutes — all maintained for you."

### Mobile Layout

Steps stack vertically with the progress line running down the left side. Each step is full-width. Consider collapsing to a more compact format if vertical space is a concern.

---

## Section 7: Testimonials / Social Proof

**Purpose:** Human validation. At launch this section may be thin (2–3 testimonials) but must be designed to scale as David collects client quotes and Trustpilot reviews.

**Principles:** P7 (Trust compensates for zero reviews)

### Desktop Layout

```
┌──────────────────────────────────────────────────────────────────────┐
│                                                                      │
│   Section headline: "What Our Clients Say"                           │
│                                                                      │
│   ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐  │
│   │ "Quote text..."  │  │ "Quote text..."  │  │ "Quote text..."  │  │
│   │                  │  │                  │  │                  │  │
│   │ — First Name,    │  │ — First Name,    │  │ — First Name,    │  │
│   │   State/Industry │  │   State/Industry │  │   State/Industry │  │
│   │   ★★★★★          │  │   ★★★★★          │  │   ★★★★★          │  │
│   └──────────────────┘  └──────────────────┘  └──────────────────┘  │
│                                                                      │
│   [● ○ ○]  (carousel dots, if >3 testimonials)                      │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

| Element | Specification |
|---------|--------------|
| **Minimum viable:** | 2–3 testimonial cards in a static grid. |
| **Scalable version:** | Carousel with auto-advance and manual navigation dots. Activates when >3 testimonials are available. |
| **Card content** | Quote text (2–4 sentences), first name only (privacy alignment — never full names), state or industry descriptor, star rating if sourced from a review platform. |
| **No photos.** | Per the brand guide: never use photos showing identifiable individuals as "clients" — it contradicts the privacy positioning. Use initials, icons, or abstract avatars instead. |
| **Attribution** | "— Sarah M., Wyoming" or "— Real Estate Investor, Nevada." Anonymized enough to align with the privacy brand. |

### Placeholder Strategy

If David has fewer than 3 testimonials at prototype stage, use realistic placeholder quotes that match the brand voice and target audience. Flag them clearly as placeholders. David's testimonial collection is an open action item.

### Post-Launch Integration

Design the section to accept a Trustpilot or Google Reviews widget alongside or replacing the manual testimonial cards. Include a placeholder slot in the wireframe for this future addition.

### Mobile Layout

Single-column cards, swipeable carousel with dots. One card visible at a time.

---

## Section 8: Final CTA Block

**Purpose:** Catches visitors who scrolled the entire page without converting. Repeats the primary conversion offer with a consultation alternative. This is the last chance before the footer.

**Principles:** P4 (One primary + one secondary), P5 (Post-content CTA repeat)

### Desktop Layout

```
┌──────────────────────────────────────────────────────────────────────┐
│  Background: Deep Navy (#1E3A5F) — matches hero, bookends the page   │
│                                                                      │
│   Headline: "Ready to Protect Your Privacy?"                         │
│   Subtext: "25 years of specialized experience.                      │
│   All-inclusive pricing. Real people."                                │
│                                                                      │
│   [Protect Your Privacy →]  (amber, primary)                        │
│   [Schedule a Consultation →]  (ghost/outline, secondary)           │
│   "or call us directly — (XXX) XXX-XXXX"  (text link)              │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

| Element | Specification |
|---------|--------------|
| **Background** | Deep Navy. Mirrors the hero section, creating visual bookends for the page. |
| **Headline** | Privacy-first. Different wording from the hero headline to avoid feeling repetitive, but same strategic message. |
| **Primary CTA** | Amber. Same target as hero primary CTA (`/privacy/` or `/compare-packages/`). |
| **Secondary CTA** | Ghost/outline. "Schedule a Consultation →". Links to `/contact/` or opens a scheduling widget. This is the consultation safety net in full CTA form for visitors who scrolled the whole page but aren't ready to self-serve. |
| **Phone link** | Text link below CTAs. Third phone number touchpoint on the page (header, trust bar, here). |

### Mobile Layout

Full-width section. CTAs stack vertically, full-width buttons. Phone number as tappable link.

---

## Section 9: Site Footer

**Purpose:** Complete sitemap for SEO, legal links, secondary navigation for deep-linkers. The footer is global — it appears on every page.

### Desktop Layout

```
┌──────────────────────────────────────────────────────────────────────┐
│  Background: Footer Dark (#0F172A)                                   │
│                                                                      │
│   ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐          │
│   │ Privacy  │  │ Asset    │  │ Formation│  │ Company  │          │
│   │          │  │ Protect. │  │          │  │          │          │
│   │ Cluster  │  │ Cluster  │  │ Cluster  │  │ About    │          │
│   │ links... │  │ links... │  │ links... │  │ Contact  │          │
│   │          │  │          │  │          │  │ FAQ      │          │
│   │ Compare  │  │ Compare  │  │ Compare  │  │ Blog     │          │
│   │ links    │  │ links    │  │ links    │  │ Testimon.│          │
│   │          │  │          │  │          │  │ Login    │          │
│   └──────────┘  └──────────┘  └──────────┘  └──────────┘          │
│                                                                      │
│   ┌──────────┐  ┌──────────┐                                        │
│   │ Packages │  │ States   │                                        │
│   │ WY Gold  │  │ Wyoming  │                                        │
│   │ NV Gold  │  │ Nevada   │                                        │
│   │ WY Silver│  │ Califor. │                                        │
│   │ NV Silver│  │ Florida  │                                        │
│   │ NV Bronze│  │          │                                        │
│   │ CA/FL    │  │ Offshore │                                        │
│   └──────────┘  └──────────┘                                        │
│                                                                      │
│   ─────────────────────────────────────────────────────────────      │
│   © 2026 Incorporate123  |  Privacy Policy  |  Terms of Service     │
│   Kingsbury Executive Suites, Reno, NV  |  (XXX) XXX-XXXX          │
│                                                                      │
│   [BTC] [ETH] [XRP] [LTC] [XMR]  (crypto icons, small)            │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

| Element | Specification |
|---------|--------------|
| **Pillar columns** | All four pillars with their cluster and comparison page links. Complete sitemap for SEO crawling. |
| **Packages column** | All 8 packages listed by tier. |
| **States column** | WY, NV, CA, FL hub links. Offshore hub link (footer presence for SEO without main nav prominence). |
| **Legal strip** | Copyright, Privacy Policy, Terms of Service links. Physical address. Phone number. |
| **Crypto icons** | Small badge-style icons. Subtle presence — signals privacy alignment without dominance. |

### Mobile Layout

Footer columns collapse to accordion-expand sections. Each pillar/category is a tappable header that expands to show its links. Legal strip and contact info visible without expanding.

---

## Responsive Breakpoints

| Breakpoint | Width | Layout Changes |
|-----------|-------|---------------|
| **Desktop** | ≥1280px | Full multi-column layouts, hover mega menu, side-by-side elements |
| **Tablet** | 768–1279px | 2-column grids, reduced mega menu, adjusted spacing |
| **Mobile** | <768px | Single-column stack, hamburger nav, sticky CTA bar, stacked CTAs |

### Global Mobile Behaviors

- **Sticky bottom CTA bar:** Appears after scrolling past the hero. Contains primary CTA button + phone icon. Persists for the entire page.
- **Tap targets:** Minimum 44×44px for all interactive elements.
- **Font scaling:** Headlines drop one step in the type scale. Body text remains 16px minimum.
- **Images:** Abstract graphics reduce or reposition. Never cropped to illegibility.

---

## Interaction States Summary

| Element | Hover | Focus | Active | Disabled |
|---------|-------|-------|--------|----------|
| Primary CTA (amber) | Darken 10% | Focus ring (2px blue) | Scale 98% | 50% opacity, no pointer |
| Secondary CTA (ghost) | Fill with 10% blue | Focus ring (2px blue) | Scale 98% | 50% opacity |
| Pillar card | Subtle lift (4px shadow) | Focus ring around card | — | — |
| Package card | Subtle lift | Focus ring | — | — |
| Nav link | Underline + pillar color | Focus ring | Bold | — |
| Text link | Underline | Focus ring | — | — |
| Phone number | Underline | Focus ring | — | — |

---

## Accessibility Requirements

- **WCAG 2.1 AA** color contrast on all text/background combinations.
- **Semantic HTML:** One `<h1>` (hero headline), subsequent headings follow hierarchy.
- **Keyboard navigation:** All interactive elements reachable via Tab. Focus order follows visual order.
- **Screen reader:** Alt text for all decorative graphics. ARIA labels on icon-only elements (phone icon, crypto badges). Landmark roles on all major sections.
- **Reduced motion:** Respect `prefers-reduced-motion`. No auto-playing animations that can't be paused.

---

## Open Questions for David

1. **Phone number:** Confirmation needed on which number to display site-wide (flagged in Phase 1 open items).
2. **Entity count:** "Over [X] entities formed" — David to confirm the verified number for hero subhead and differentiators section.
3. **Testimonials:** How many client quotes are available for launch? This determines whether Section 7 launches as a static grid or a carousel.
4. **Office photography:** Professional photos of Kingsbury Executive Suites scheduled? Needed for trust signals and About page.
5. **Compliance card:** Include as a 4th pillar card on the homepage, or keep it to navigation-only presence?

---

*Confidential — BIT Studios × Incorporate123 — March 2026*
