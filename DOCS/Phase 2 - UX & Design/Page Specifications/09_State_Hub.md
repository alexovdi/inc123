# State Hub

> URL: `/:slug` (e.g., `/wyoming`, `/nevada`, `/california`, `/florida`)
> Layout: Full-width single-column | Template — 4 pages

## Purpose

Geographic intent router. Catches visitors searching "[state] incorporation" or "[state] LLC" and routes them to the right pillar content and packages for that state. Spans all 4 pillars — not nested under any single one.

## Layout

- Full-width, single-column (no sidebar — intent routing needs full width for cards)
- Max-width: 1200px

## Sections

1. **Breadcrumbs** — Home > [State]
2. **State Hero** — Eyebrow: "State Guide", H1: "[State] Business Services", subheadline, State Facts strip (key advantages as badges).
3. **Intent Routing Cards** — 2×2 grid (desktop), stacked (mobile). 4 pillar-colored cards:
   - Privacy (blue): "[State] for Privacy" + 3 key links + Gold quick link
   - Asset Protection (green): "[State] for Asset Protection" + 3 key links + Gold quick link
   - Formation (amber): "[State] LLC & Corporation Formation" + 3 key links + Silver quick link
   - Compliance (purple): "[State] Compliance & Registered Agent" + 3 key links + Contact link
4. **Package Quick Links** — 2 cards: [State] Gold $X + [State] Silver $Y. "Compare All Packages" link below.
5. **"Why [State]?"** — 6 advantage blocks in 3×2 grid. Icon + title + 1-2 sentence description. Content varies by state.
6. **Content Map** — 4-column grid by pillar (desktop), accordion by pillar (mobile). Shows ALL pages related to this state across the entire site.
7. **State-Specific FAQ** — 5-6 questions about forming/operating in this state.
8. **Final CTA** — "Ready to Get Started in [State]?" + package CTAs + phone.

## State-Specific Data

| State          | Facts Strip                                                                      | Package Focus              | Advantage Count         |
| -------------- | -------------------------------------------------------------------------------- | -------------------------- | ----------------------- |
| **Wyoming**    | No Income Tax, $62 Annual Report, Strongest Privacy Statutes, ~$100 Filing Fee   | Gold $1,275, Silver $900   | 6 (strongest set)       |
| **Nevada**     | No Income Tax, $350 Annual Fee, Nominee-Friendly, ~$425 Filing Fee               | Gold $1,800, Silver $1,350 | 6                       |
| **California** | Requires Public Disclosure, No LLC Privacy, 8.84% Corp Tax, Foreign Reg Required | Gold via WY + foreign reg  | 4 (framed as solutions) |
| **Florida**    | Limited Privacy, No Income Tax, Foreign Reg Required for WY Entities             | Gold via WY + foreign reg  | 4 (framed as solutions) |

**CA/FL framing difference:** These are "problem + solution" pages, not "advantages" pages. Hero emphasizes: "California exposes your identity — here's how to protect it."

## Content Status

| State      | Hub Content             | State Facts        | FAQ         | Advantages    |
| ---------- | ----------------------- | ------------------ | ----------- | ------------- |
| Wyoming    | 1,010 words (good)      | Needs verification | Needs David | Needs writing |
| Nevada     | Similar structure       | Needs verification | Needs David | Needs writing |
| California | Minimal (needs writing) | Needs verification | Needs David | Needs writing |
| Florida    | Minimal (needs writing) | Needs verification | Needs David | Needs writing |

## Key Components

`StateHero`, `StateFactsStrip`, `IntentRoutingCard`, `PackageQuickLinks`, `AdvantageGrid`, `ContentMap`, `FAQAccordion`, `CTASection`

## Prototype Status

Rendered via `CatchAllPage` using `StatePageTemplate`. Template functional with hero, intent cards, advantages, FAQ. WY and NV have reasonable content; CA and FL are thin.

## Existing Specs

- Wireframe: `../Wireframes Page Specs/Incorporate123_State_Hub_Wireframe_Spec.md`
- Content Guide: `../v2-post-david-review/06_State_Hub_Content_Guide_v2.md`

## Next Steps

- [ ] Verify state facts with David (fees, tax rates, statutory citations)
- [ ] Write WY and NV advantage blocks (6 each)
- [ ] Write CA and FL content with "problem + solution" framing
- [ ] Build content map for each state (list all related pages across all pillars)
- [ ] Write FAQ answers for each state
- [ ] Design pass: ensure intent routing cards are visually balanced and scannable
- [ ] Priority: WY first (70% of clients), then NV, then CA/FL
