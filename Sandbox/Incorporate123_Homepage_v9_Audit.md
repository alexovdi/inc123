# Incorporate123 Homepage v9 Design Audit

**Document:** Homepage Design Audit #2 — Post-Implementation Review
**Version:** v9 (current prototype)
**Date:** March 21, 2026
**Prepared by:** BIT Studios (Alex) for Incorporate123 (David)
**Phase:** Phase 2 — UX & Visual Design

---

## What's Working Well

Before diving into issues, these elements are strong and should be preserved:

- **Hero entrance sequence** — word-by-word headline, staggered fade-ins, counter animation. Creates a premium first impression.
- **Canvas particle network** pausing on scroll — performs well, feels alive without being distracting.
- **Wizard manual advance** — the Continue button gives users control. Much better than auto-advance.
- **Section reorder** (Wizard → Process → Packages) — logical funnel. "What do you need → How it works → Compare details."
- **Warm cream background** on Process — breaks the monotony, adds visual texture without being distracting.
- **SVG icon system** — consistent stroke weight, pillar-colored, scales cleanly.
- **Upgrade nudge on wizard result** — smart cross-sell that only appears when relevant.
- **Footer CTA bar** — "View Packages / Contact Us / Phone" gives the footer an action layer.

---

## Issues Found

### STORY & PAGE FLOW

#### #1 · High · The page tells no story — it lists features

**Problem:** The page structure is: hero (value prop) → wizard (pick package) → process (how it works) → packages (detailed comparison) → differentiators (why us) → trust → testimonials → CTA. This is a *feature catalog* organized by function, not a narrative organized by persuasion. The visitor gets asked to "find your package" before they understand *why* they need one. There's no education layer — no section that explains *what* privacy incorporation actually is, *why* nominees matter, or *what problem* this solves. The hero assumes the visitor already knows. The wizard assumes they're ready to decide. For Persona A (Privacy Researcher, 4–7 pages) and Persona E (Formation Researcher, 3–5 pages), this skip is too aggressive.

**Suggested fix:** The page narrative should follow a persuasion arc: **Hook** (hero) → **Problem** (why privacy matters — a brief educational bridge) → **Solution** (wizard/packages) → **Proof** (differentiators + testimonials) → **Action** (final CTA). Consider adding a brief "Why privacy matters" section between the ticker and the wizard — 2–3 short statements with icons, not a wall of text. Something like: "Your name is on public records. Lawsuits can target you personally. Competitors can see your holdings. There's a better way." This creates the *felt need* before presenting the solution.

---

#### #2 · Medium · Differentiators section is buried too deep

**Problem:** "Why clients choose Incorporate123" (the 365-day nominees hero card, the them-vs-us comparison) is the single most powerful selling content on the page — and it sits 5th in the scroll order, after two white/gray sections that many visitors may never reach. The v8 audit recommended moving Process up (good), but the differentiators didn't move. The section that answers "why you and not someone else?" is below the detailed package comparison. Most visitors who need convincing will never scroll that far.

**Suggested fix:** Consider moving the differentiators (or at least the hero nominee card + VS bar) above the package comparison. The persuasion logic is: "Here's what you need" (wizard) → "Here's how it works" (process) → "Here's why we're different" (differentiators) → "Here are the details" (packages). Education before evaluation.

---

#### #3 · Medium · No visual or narrative bridge between hero and wizard

**Problem:** The hero is an immersive dark navy experience with particles, gradient text, orbital animation. Then the ticker scrolls. Then suddenly the page is white with a contained wizard card. There's no visual or conceptual transition. The hero says "Your Business. Your Privacy. Our Expertise." The wizard says "Get a personalized recommendation in 30 seconds." These don't connect — the hero is emotional and brand-level, the wizard is transactional and tool-level. The shift is jarring.

**Suggested fix:** Add a brief bridge section or at minimum a contextual introduction above the wizard that connects the hero promise to the wizard action. Even a single centered line: "Three pillars. Four states. One recommendation built for you." Or make the wizard header reference the hero: "You need privacy. Let's find the right package." The wizard heading should feel like a continuation, not a topic change.

---

### UI / VISUAL DESIGN

#### #4 · Medium · Hero visual (shield constellation) is decorative, not communicative

**Problem:** The right-side orbital shield graphic with three floating glass cards looks premium, but it doesn't communicate anything that the text doesn't already say. The lock icon labeled "Privacy" with "Year-round nominees" doesn't add information — it just repeats. On mobile (<1024px) the entire visual is `display: none`, proving it's not essential. The hero uses a 1.15fr / 0.85fr grid, dedicating 42% of desktop width to a decorative element.

**Suggested fix:** Either make the visual communicate something the text can't (a dynamic comparison chart, an animated timeline of the formation process, a before/after privacy demonstration) or reduce the grid split to give the text column more room (1.3fr / 0.7fr) so the copy has more breathing space and the visual is clearly secondary.

---

#### #5 · Low · Wizard and package section backgrounds are too similar

**Problem:** The wizard is on a white background. Process is warm cream. Packages is `var(--bg)` (#f8fafc — very light gray). Trust is white. There's virtually no visible difference between the wizard's white and the packages' near-white. They merge visually when scrolling. The background rhythm improvement from the v8 audit helped (warm cream was a good addition), but the white ↔ near-white ↔ white sequence around it still blurs together.

**Suggested fix:** Either make the packages section slightly more distinct (a very subtle blue tint, or keep the warm cream and give process a different treatment), or add a stronger visual separator between wizard and process (a full-width visual element, a testimonial pull quote, an eye-catching stat).

---

#### #6 · Low · Header "Get Started" CTA conflicts with hero "Find Your Package" CTA

**Problem:** The header has a persistent "Get Started →" button linking to `/compare-packages/`. The hero secondary CTA says "Find Your Package →" linking to `#wizard`. These are two different actions going to two different places. "Get Started" in the header suggests beginning the purchase process. "Find Your Package" suggests a guided recommendation. A visitor who clicks header "Get Started" lands on a different page than one who clicks hero "Find Your Package" — but they expect the same outcome.

**Suggested fix:** Align the header CTA with the primary conversion path. Either change the header CTA to "Find Your Package" with the same `#wizard` anchor (when on the homepage), or change it to something neutral like "View Packages" that doesn't conflict with the wizard's positioning.

---

#### #7 · Low · Gold package card "Most Popular" badge is the only tier badge

**Problem:** Gold has a prominent floating gradient badge saying "Most Popular." Silver and Bronze have no badge. This creates a visual imbalance where the Gold card has a prominent floating element and the others feel headless. It also makes "Most Popular" feel like marketing rather than earned — there's no social proof establishing that it *is* most popular.

**Suggested fix:** Consider adding subtle badges to all three tiers: Gold = "Most Popular" (keep), Silver = "Best Value" or "Formation Essentials", Bronze = "Budget Entry." Or remove the badge text and use visual hierarchy alone (the gradient border already signals prominence). If keeping "Most Popular," back it with data: "Chosen by 70% of clients" is more convincing than unsubstantiated "Most Popular."

---

### UX / INTERACTION

#### #8 · High · Wizard Step 3 has no clear "what happens when I click Get Started?"

**Problem:** The wizard result page shows a package recommendation with a "Get Started →" amber button. But the user has no idea what clicking it does. Does it go to a checkout page? An information page? A form? A phone call? For a $1,275+ purchase, this ambiguity creates hesitation. The button promises an action but doesn't set expectations.

**Suggested fix:** Either clarify the button label ("Continue to Checkout →" or "View Full Package Details →") or add a micro-copy line below the button: "You'll review your order before payment" or "See full package details and checkout options." Reducing uncertainty at the conversion moment is critical for high-ticket purchases.

---

#### #9 · Medium · Wizard doesn't remember selections if user scrolls away and comes back

**Problem:** If a user completes the wizard (Step 3), then scrolls down to read differentiators or testimonials, then scrolls back up to the wizard — the wizard correctly shows their last state. But if they navigated using the "Learn more about this package →" link and hit the browser back button, the wizard resets (because it's JS state, not URL state). For a multi-session decision ($1,275), visitors may return and lose context.

**Suggested fix:** For the prototype this is acceptable. For production, persist wizard state in `sessionStorage` so returning to the page within the same session preserves selections. Also consider adding URL hash parameters (`#wizard/privacy/WY`) so the result can be bookmarked or shared.

---

#### #10 · Medium · The "Continue" button is too far from the selection cards

**Problem:** On Step 1, the user clicks a goal card in the center of the wizard body. The "Continue →" button is in the wizard nav bar at the bottom, separated by empty space. On larger monitors, this distance is significant. The user makes a selection, then has to visually locate and reach for the Continue button. This breaks the "selection → action" flow.

**Suggested fix:** Either add a second "Continue →" button that appears inline below the selected card (in addition to the nav bar button), or make the goal cards themselves advance on double-click/second-tap while keeping single-click for selection. The nav bar button is still the primary control, but the inline proximity would speed up experienced users.

---

#### #11 · Low · Wizard progress bar steps are not clickable

**Problem:** The progress indicators (1: Your Goal, 2: Your State, 3: Your Package) look like they should be clickable for navigation — they have visual states (active, done, pending) and a horizontal layout that suggests tabs. But clicking a completed step does nothing. Users familiar with multi-step forms expect to click step indicators to navigate backward.

**Suggested fix:** Make completed step indicators clickable — clicking step 1 when on step 2 should go back to step 1 with the selection preserved. Only allow backward navigation (can't click ahead to an uncompleted step).

---

### CONVERSION

#### #12 · High · No pricing visibility before the wizard

**Problem:** A visitor scrolling the page sees: hero ($1,275 in the stat bar — small, easy to miss), then the wizard ("Get a personalized recommendation in 30 seconds"), then process (no pricing), then packages (finally, full pricing). The stat bar numbers in the hero are white-on-dark at 30px and labeled "WY Gold All-Inclusive" — but a visitor who doesn't know what "Gold" means won't anchor to this. There's no clear, simple price message before the wizard asks them to commit to a 3-step flow. The Informed Buyer (Persona D) who just wants to see prices has to either use the wizard or scroll past two sections to reach the package grid.

**Suggested fix:** Add a "Starting from $875" or "All-inclusive from $875 – $1,800" line somewhere visible between the hero and the wizard, or within the wizard's header area. The wizard already promises "transparent pricing" — showing a price range *before* the first click would back up that promise and set anchoring expectations.

---

#### #13 · Medium · Hero primary CTA "Protect Your Privacy" skips the wizard entirely

**Problem:** The amber primary CTA in the hero goes to `/privacy/` — an educational pillar page. The secondary ghost CTA goes to `#wizard`. This means the most visually prominent conversion action on the page *bypasses the interactive element you just built*. Privacy Researchers (Persona A) clicking the primary CTA leave the homepage immediately without ever seeing the wizard, the packages, the differentiators, or the testimonials.

**Suggested fix:** This is a strategic question. If the pillar pages are strong conversion funnels themselves, this is fine — the homepage serves as a routing page. But if the goal is to keep visitors on the homepage through the wizard, consider swapping the CTAs: make "Find Your Package" the primary amber CTA and "Learn About Privacy" the secondary ghost CTA. Or make the primary CTA scroll to the wizard with the Privacy goal pre-selected.

---

#### #14 · Medium · Package comparison section has no anchor link from the wizard result

**Problem:** The wizard result page shows a package recommendation with a "Get Started" CTA and a "Learn more about this package →" link. But there's no "Compare with other packages →" link. A visitor who sees the Silver recommendation at $875 and wants to evaluate Gold alongside it has to scroll manually to find the comparison grid below. The wizard isolation makes comparison harder, not easier.

**Suggested fix:** Add a "Compare all packages →" text link on the wizard result page that smooth-scrolls to the package comparison section. This gives the deliberate evaluator (Persona A, C) a direct path to the comparison without losing the wizard's recommendation context.

---

#### #15 · Low · Final CTA section repeats the same headline as the hero

**Problem:** The hero implied headline is about privacy. The final CTA headline is "Ready to protect your privacy?" This creates a bookend effect, which is intentional. But a visitor who scrolled the entire page — through wizard, process, packages, differentiators, trust, and testimonials — has gathered far more context than they had at the hero. The final CTA should reflect that journey, not echo the opening.

**Suggested fix:** Change the final CTA headline to something that reflects the complete page journey: "You've seen the packages. You've seen the proof. Let's get started." or "Your privacy is one step away." or "Everything included. Nothing hidden. Ready?" The final CTA should feel like a conclusion, not a restart.

---

### CONTENT / COPY

#### #16 · Medium · Hero subhead is now too long and dense

**Problem:** The v8 audit flagged the subhead as "generic." The v9 fix swung the other direction: "Year-round nominee services, offshore records storage, and all-inclusive formation packages — everything competitors charge $2,000+/year for, included from day one. Trusted since 2000." This is 32 words. It mentions 4 specific services, a competitor comparison, a pricing claim, a value prop, and a trust signal — all in one paragraph at 42% opacity white on dark. It's trying to do too much. On mobile, this is 4–5 lines of low-contrast text.

**Suggested fix:** Pick the single strongest hook and cut the rest: "Year-round nominee services and all-inclusive pricing — everything included from day one. Trusted since 2000." (18 words). The competitor pricing comparison ($2,000+/year) is powerful but belongs in the differentiators section where it has visual structure to support it, not buried in a subhead.

---

#### #17 · Low · Wizard Step 2 state cards don't explain why each state matters

**Problem:** The state cards show abbreviation, name, and a "From $X" price. But CA and FL just say "Private Inc." without a price. A visitor picking their state has no context for *why* Wyoming is $875 and California is different. They don't know that CA/FL means "form a WY entity and register it in CA/FL." The cards present choices without the information needed to choose.

**Suggested fix:** Add a one-line explanation below each state: WY = "Most popular for privacy", NV = "Strong asset protection", CA = "Form in WY, operate in CA", FL = "Form in WY, operate in FL." These 4–5 word hints give enough context without overwhelming the card.

---

#### #18 · Low · Differentiator card copy inconsistency

**Problem:** Most diff cards use clean single-sentence descriptions: "Corporate records maintained outside U.S. jurisdiction. Included free in Gold since 2012." But "All-Inclusive Pricing" says "The price you see is the price you pay." which is a marketing slogan, not a benefit statement. And "Crypto Accepted" says "Because our clients value privacy." which is an explanation, not a description.

**Suggested fix:** Normalize all diff cards to the same format: [What it is]. [What it means for you]. Example: "All-Inclusive Pricing" → "State fees, agent, operating agreement, EIN — every cost included upfront." "Crypto Accepted" → "Bitcoin, Ethereum, and three more cryptocurrencies accepted for maximum payment privacy."

---

### TECHNICAL

#### #19 · Medium · No `lang` attribute on dynamic content

**Problem:** The wizard result page dynamically populates text via `innerHTML`. Screen readers announce language based on the `lang` attribute. The dynamic content inherits `lang="en"` from the HTML element, which is correct. But the `innerHTML` assignment uses string concatenation that could introduce malformed HTML if package data contained special characters. For example, if a package name ever included an ampersand or angle bracket, it would break the DOM.

**Suggested fix:** Use `textContent` instead of `innerHTML` for all text-only assignments (title, price label, renewal, value). Only use `innerHTML` for the feature list where HTML structure is needed — and sanitize the feature strings or use DOM creation methods instead of string concatenation.

---

#### #20 · Low · Scroll reveal fires once but never re-fires

**Problem:** Elements with `[data-r]` animate in once via IntersectionObserver and get the `.v` class permanently. If a visitor scrolls past a section quickly and then scrolls back up, the animation is already complete — the element is static. This is standard behavior. But combined with the 120px section padding, sections above the fold that were revealed during fast scroll may not have been visible long enough to register.

**Suggested fix:** This is fine for production — re-triggering animations on scroll-back would be distracting. But consider reducing the `rootMargin` from `-60px` to `-40px` to trigger reveals slightly earlier, giving more buffer for fast scrollers. Also ensure the initial viewport (hero + ticker + wizard header) is all within the first `100dvh` so nothing is "pre-revealed" in a jarring state on page load.

---

#### #21 · Low · No favicon or OG tags

**Problem:** The prototype has no favicon, Open Graph tags, or Twitter Card meta tags. When David shares this prototype URL in Slack or opens it in a browser tab, it shows a generic icon and no preview card.

**Suggested fix:** Add a simple `<link rel="icon">` (even a data URI emoji-based favicon for prototype) and basic OG tags: `og:title`, `og:description`, `og:image`. For prototype purposes, the image can be a placeholder. This makes shared links look intentional rather than unfinished.

---

### MOBILE / RESPONSIVE

#### #22 · High · Wizard is unusable on narrow mobile screens

**Problem:** The wizard body has `padding: 48px 40px`. On a 375px viewport, the content area is 375 - 56px (container padding) = 319px, minus 80px wizard padding = 239px for content. Three goal cards in a single column at 239px are extremely narrow. The state grid (4 columns on desktop) does go to 2 columns on mobile, but the wizard nav buttons (Back / Start over / Continue) in a flex row with 80px total padding will be very cramped.

**Suggested fix:** Reduce wizard body padding to `24px 20px` on mobile. Reduce wizard nav padding similarly. Test on 375px iPhone SE viewport — every interactive element needs at minimum 44×44px tap targets and the wizard cards need to be comfortably tappable.

---

#### #23 · Medium · Hero stat bar wraps poorly on small screens

**Problem:** The hero stats bar shows three stats ("25 yrs", "$1,275", "$525/yr") in a flex row with `max-width: 480px` on mobile. At 375px viewport width minus 56px padding = 319px. Three stats at ~106px each is tight. The 30px font size for numbers plus labels below means the stats will likely wrap or overflow on smaller phones.

**Suggested fix:** On screens below 400px, either stack the stats vertically, reduce font size to 24px, or show only 2 stats (25 yrs + $1,275) and move the renewal stat elsewhere. The stat bar's purpose is to anchor numbers quickly — if it wraps, it loses that snap.

---

#### #24 · Medium · Package grid doesn't adapt well to tablet (768–900px)

**Problem:** The package grid breaks to single column at 900px (`max-width: 440px; margin: 0 auto`). But between 768px–900px, the Gold card is reordered to the top via `order: -1`. This means tablet users see Gold → Silver → Bronze in a single stack. The Gold card at 440px max-width with 56px top padding (for the badge) is reasonable. But the comparison experience (seeing all three side by side) is completely lost. For a $1,275+ decision, comparison is critical.

**Suggested fix:** Consider a 2-column layout at 768px–900px: Gold spans full width on top, Silver and Bronze sit side by side below. This preserves the comparison for Silver vs Bronze while keeping Gold prominent.

---

## Summary

| Category | Issues | High | Medium | Low |
|----------|--------|------|--------|-----|
| Story & Page Flow | 3 | 1 | 2 | 0 |
| UI / Visual Design | 4 | 0 | 2 | 2 |
| UX / Interaction | 4 | 1 | 2 | 1 |
| Conversion | 4 | 1 | 2 | 1 |
| Content / Copy | 3 | 0 | 1 | 2 |
| Technical | 3 | 0 | 1 | 2 |
| Mobile / Responsive | 3 | 1 | 2 | 0 |
| **Total** | **24** | **4** | **11** | **9** |

### Top 5 Priority Fixes

1. **#1 — Add an educational bridge before the wizard** (Story, High) — The page sells before it teaches. A 2–3 line "why privacy matters" bridge creates the felt need.
2. **#8 — Clarify what "Get Started" does** (UX, High) — For $1,275, button ambiguity kills conversions. Set expectations.
3. **#12 — Show pricing before the wizard** (Conversion, High) — Visitors need price anchoring before committing to a 3-step flow.
4. **#22 — Fix wizard mobile padding** (Mobile, High) — The wizard is the primary conversion path and it's cramped on phones.
5. **#2 — Move differentiators above packages** (Story, Medium) — "Why us" should come before "compare the details."

### What Improved from v8 → v9

All 23 original audit issues were addressed. Specific improvements that are working well:

- Manual wizard advance eliminated the disorientation
- Upgrade nudge is a smart, contextual cross-sell
- Keyboard accessibility (tabindex, role, aria-pressed, keydown) is correctly implemented
- Warm background on Process breaks the monotony
- Footer CTA bar and Privacy column hierarchy add professional polish
- Canvas pause on scroll saves battery
- Hero subhead now hooks with unique value (though it needs trimming)
- Consultation touchpoints are now distributed across the page
- Pillar explore links are now visible bordered pills instead of invisible text

The v9 prototype is significantly stronger than v8. The remaining issues are about narrative structure, mobile polish, and conversion refinement — not fundamental design problems.
