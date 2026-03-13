# Competitor Analysis Prompt

> **How to use:** Copy everything below the line into Claude (or any AI). Replace the `[BRACKETED]` placeholders with your specifics. The prompt is modular — you can run the full analysis or use individual sections.

---

## The Prompt

You are an expert competitive intelligence analyst specializing in digital strategy, SEO, and SaaS/product positioning. I need you to conduct a comprehensive competitive analysis for my product/business.

### Context

**My product/business:** [YOUR PRODUCT NAME AND ONE-LINE DESCRIPTION]
**My niche/industry:** [e.g., project management SaaS, e-commerce fashion, B2B fintech]
**Target audience:** [e.g., freelance designers, mid-market HR teams, small business owners]
**My current positioning:** [e.g., "affordable alternative to X" or "premium solution for Y"]
**Primary business goal for this analysis:** [e.g., inform site redesign, refine pricing, develop content strategy, prepare for launch]

### Competitors to analyze

[OPTION A — You already know them:]
1. [Competitor 1 — URL]
2. [Competitor 2 — URL]
3. [Competitor 3 — URL]
4. [Competitor 4 — URL]
5. [Competitor 5 — URL]

[OPTION B — You need help identifying them:]
Based on my niche and target audience above, identify 5 competitors: 3 direct competitors (same product category, same audience), 1 indirect competitor (different product solving the same job-to-be-done), and 1 aspirational competitor (market leader I should learn from). For each, explain why they were selected and classify their tier.

---

### PHASE 1: Site Structure Analysis

For each competitor, analyze and document:

**1.1 Information Architecture**
- Map the top-level navigation structure (main menu items and hierarchy)
- Document URL patterns and subfolder strategy (e.g., /blog/, /resources/, /use-cases/, /integrations/)
- Identify content silos — how do they organize topics into clusters?
- Note page depth — how many clicks from homepage to deepest content?
- Assess mobile navigation differences vs desktop

**1.2 Content Strategy Signals**
- What page types exist? (blog, case studies, comparison/vs pages, glossary, documentation, templates, calculators, webinars, podcasts)
- Which content formats dominate — long-form guides, short posts, video, interactive tools?
- Identify their pillar/hub content — the cornerstone pages with the most internal links pointing to them
- Look for "content moats" — proprietary data, original research, user-generated content, or tools competitors would struggle to replicate

**1.3 Conversion Architecture**
- Map the conversion funnel: awareness → consideration → decision → action
- Document CTA types, placement patterns, and language at each funnel stage:
  - Hero/above-the-fold CTAs
  - In-content CTAs (after proof points, mid-article)
  - Sticky/floating CTAs
  - Exit-intent or scroll-triggered elements
- Identify the primary conversion action (free trial, demo, signup, purchase) and secondary actions (newsletter, lead magnet, webinar registration)
- Note trust signals near conversion points (social proof, security badges, testimonials, logos)
- Assess friction in the conversion path — form length, number of steps, required information

**1.4 UX/Design Patterns**
- Visual hierarchy and how they direct attention
- Use of whitespace, typography choices, color psychology
- Page load perception (skeleton screens, progressive loading, perceived speed)
- Accessibility signals (alt text, contrast, keyboard navigation, ARIA labels)
- Personalization or segmentation (different paths for different personas, "I am a..." selectors)

**Deliverable for Phase 1:** A comparison matrix rating each competitor (1–5) on: navigation clarity, content depth, silo organization, conversion path effectiveness, CTA strategy, mobile experience, and unique UX innovations. Include a visual site architecture comparison (describe the hierarchy tree for each).

---

### PHASE 2: SEO Positioning Analysis

**2.1 Domain Authority & Organic Visibility Snapshot**
For each competitor, document (use estimated ranges if exact data unavailable):
- Domain Rating/Authority score
- Estimated monthly organic traffic
- Total ranking keywords (approximate)
- Top 3 organic traffic-driving pages
- Year domain was first registered (indicates age authority)

**2.2 Keyword Strategy Analysis**
- Identify each competitor's top 20 ranking keywords by traffic value
- Classify their keyword strategy: are they targeting head terms (high volume, high competition), long-tail (low volume, low competition), or a mix?
- Identify their keyword themes/clusters — what topical areas are they investing in?
- Find the "keyword gap" — high-value keywords where 2+ competitors rank but I currently don't
- Identify "weak keywords" — terms where competitors rank positions 5–20 (beatable)
- Note any branded vs non-branded traffic split patterns

**2.3 Content Gap Analysis**
- What content types/topics do all competitors cover that I don't?
- What long-tail topics does only one competitor own (potential land-grab opportunities)?
- Identify "content deserts" — topics relevant to the audience that NO competitor covers well
- Assess content freshness — when was their key content last updated?
- Note content length patterns for top-ranking pages

**2.4 Backlink Profile Comparison**
- Referring domains count for each competitor
- Link velocity trend — growing, stable, or declining?
- Top linking domains by authority (who links to them that doesn't link to me?)
- Common link types: guest posts, resource pages, editorial mentions, directories, partnerships
- Identify "link gap" — domains linking to 2+ competitors but not to me (highest-value outreach targets)

**2.5 Technical SEO Benchmark**
Compare across:
- Core Web Vitals (LCP, INP, CLS) — who passes, who fails?
- Structured data implementation (schema types in use: FAQ, HowTo, Product, Review, Organization)
- Mobile-first readiness
- Indexation efficiency (estimated indexed pages vs total crawlable pages)
- International SEO signals (hreflang, ccTLDs, subdirectory approach)

**2.6 SERP Feature Ownership**
For the top 20 target keywords:
- Who owns Featured Snippets? What format (paragraph, list, table)?
- Who appears in People Also Ask?
- Who has video carousels, image packs, or knowledge panels?
- Who is cited in AI Overviews/AI-generated answers?
- What's the overall "SERP real estate" share per competitor?

**Deliverable for Phase 2:** A keyword opportunity matrix (keyword, volume, difficulty, competitor rankings, your ranking, priority score). A backlink target list of domains linking to competitors but not to me. A SERP feature opportunity map. An overall SEO positioning summary showing where each competitor is strongest and most vulnerable.

---

### PHASE 3: Pricing & Package Presentation Analysis

**3.1 Pricing Model Documentation**
For each competitor, document:
- Pricing model type: flat-rate, tiered, per-seat, usage-based, freemium, hybrid
- Number of tiers and their names
- Price points (monthly and annual, note the discount percentage for annual)
- Whether pricing is public or hidden behind "Contact Sales"
- Free tier or free trial availability (duration, credit card required?)
- Money-back guarantee terms

**3.2 Feature Packaging Strategy**
- Build a feature comparison matrix across all competitors and tiers
- Identify "table-stakes features" — included by everyone at every tier (cost of entry, not differentiators)
- Identify "feature fences" — capabilities consistently gated to higher tiers across all competitors
- Identify "feature deserts" — capabilities no competitor offers well (blue ocean opportunity)
- Note usage limits per tier (users, storage, API calls, projects, etc.)
- Identify the "aha feature" — what capability do they lead with as the reason to upgrade?

**3.3 Pricing Page UX & Psychology**
Analyze each competitor's pricing page for these tactics:
- **Anchoring:** Is the most expensive plan shown first? Is there a visual anchor?
- **Decoy effect:** Is there a plan that exists primarily to make another plan look better?
- **Center-stage effect:** Which plan is visually highlighted as "Most Popular" or "Recommended"?
- **Charm pricing:** Do they use $49 vs $50, $9.99 vs $10?
- **Loss aversion framing:** Do they frame features as "included" (positive) or "limited" (negative)?
- **Annual billing push:** How aggressively do they push annual vs monthly? Toggle design?
- **Social proof placement:** Customer logos, testimonials, review badges near pricing
- **FAQ section:** What objections do they preemptively address?
- **Comparison table design:** Feature grouping, checkmarks vs text, expand/collapse sections
- **CTA button language:** "Start Free Trial" vs "Get Started" vs "Buy Now" — what commitment level?

**3.4 Monetization & Value Metric Analysis**
- What is each competitor's core value metric (what do they charge per: user, project, feature, usage)?
- How aligned is the value metric with customer-perceived value?
- Estimate revenue potential per customer segment (SMB, mid-market, enterprise)
- Note any recent pricing changes and direction (increasing, simplifying, adding tiers)
- Identify add-on/upsell opportunities beyond base pricing

**Deliverable for Phase 3:** A complete feature comparison matrix across all competitors. A pricing psychology teardown showing which tactics each competitor uses. A pricing positioning map (X = price level, Y = feature richness). Specific pricing opportunities and recommendations.

---

### PHASE 4: Strategic Synthesis & Frameworks

Using all data gathered in Phases 1–3, produce the following strategic deliverables:

**4.1 SWOT per Competitor**
For each of the 5 competitors, create a focused SWOT:
- Strengths: What do they do objectively better than everyone else?
- Weaknesses: Where are they most vulnerable? (Source from real G2/Capterra reviews where possible)
- Opportunities: What market gaps could they exploit next?
- Threats: What external factors or competitors threaten their position?

**4.2 Strategy Canvas (Blue Ocean)**
- Define 8–12 competing factors most important to buyers in this market
- Rate each competitor (and my product) on each factor (1–10)
- Present as a value curve visualization (describe the chart data)
- Apply the ERRC Grid for my product: what should I Eliminate, Reduce, Raise, or Create?

**4.3 Perceptual Positioning Map**
Create 2–3 perceptual maps plotting competitors on the two axes most relevant to my market. Suggested axis pairs (select the most relevant):
- Price vs Feature Depth
- Ease of Use vs Enterprise Readiness
- Self-Serve vs High-Touch
- Specialist vs Generalist
- Innovation Speed vs Reliability

Identify clusters (crowded positioning) and white space (opportunity).

**4.4 Competitive Battlecard**
Create a one-page battlecard template for each competitor containing:
- Quick overview (positioning, target audience, key differentiation)
- Their strengths and our counter-positioning
- Their weaknesses and our advantage talking points
- Common objections when competing against them + response scripts
- "Landmine" questions to ask prospects that expose their weaknesses
- Win/loss signals — when are we most likely to win or lose against them?

**4.5 Opportunity Roadmap**
Based on the full analysis, create a prioritized action plan:
- **Quick wins** (< 30 days): Low effort, high impact moves
- **Medium-term** (1–3 months): Content gaps to fill, SEO targets, pricing adjustments
- **Strategic initiatives** (3–6 months): Major positioning moves, feature development, partnership opportunities
- **Monitoring triggers**: What competitor actions should trigger an immediate strategic response?

---

### Output Format Requirements

Structure the entire analysis as a professional report with:
1. **Executive Summary** (one page — key findings, biggest opportunities, top 3 recommendations)
2. **Phase 1–4 detailed analysis** as described above
3. **Comparison matrices and tables** for side-by-side evaluation
4. **Specific, actionable recommendations** — not just observations, but "do X because of Y to achieve Z"
5. **Sources and methodology notes** — flag where data is estimated vs verified

Use a scoring system throughout: rate each competitor 1–5 on every evaluated dimension. Calculate weighted composite scores based on strategic importance to my goals.

Tone: Analytical and direct. No filler. Every sentence should either present a finding or recommend an action.

---

*[END OF PROMPT]*
