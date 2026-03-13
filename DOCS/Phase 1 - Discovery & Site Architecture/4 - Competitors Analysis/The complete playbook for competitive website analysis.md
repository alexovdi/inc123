# The complete playbook for competitive website analysis

**A systematic competitive analysis across site structure, SEO positioning, and pricing presentation is the foundation of any successful website redesign.** For Incorporate123's repositioning from "Nevada incorporation company" to "Privacy, Asset Protection & Business Formation Specialists," this analysis across NCH Inc, Anderson Advisors, ShieldCorp, Wyoming Corporate Services, and ZenBusiness should take **55–70 hours over 3–4 weeks**, cost as little as $49/month in tools, and produce a dual deliverable: a 30–50 slide presentation deck plus a detailed reference document. The methodology breaks into three parallel research streams (structure, SEO, pricing/UX), followed by synthesis through proven frameworks like SWOT matrices, spider charts, and competitive positioning maps. AI tools like Claude and ChatGPT can cut synthesis and report-writing time by 40–50%, but should never replace primary data collection with dedicated SEO and crawling tools.

---

## How to reverse-engineer any competitor's site architecture

Site structure analysis reveals how competitors organize information, prioritize content, and guide users through conversion pathways. This is the **highest-priority dimension** for a redesign because it directly shapes your new information architecture.

**The three-tool approach works best.** Use Screaming Frog SEO Spider (£199/year, or free for sites under 500 URLs) as the primary crawl engine to extract every URL, page title, heading hierarchy, internal link, and response code. Supplement with Sitebulb Lite ($13.50/month) for its interactive visual crawl maps that instantly reveal content hubs, orphan pages, and hierarchy depth. Then recreate competitor sitemaps visually in Octopus.do (free tier) or Slickplan ($10.79/month) for presentation-ready deliverables. Browser extensions round out the toolkit: SEO META in 1 Click for instant on-page audits, Wappalyzer for technology stack identification, and MozBar for quick authority metrics.

**The crawl process follows five phases.** Start with manual reconnaissance — browse each competitor site for 15–20 minutes as a prospective customer seeking privacy-focused incorporation, screenshot the homepage and main navigation, and run `site:competitor.com` in Google to estimate indexed pages. Then configure Screaming Frog to crawl as Googlebot at 1–2 URLs/second (respectful crawl speed), with JavaScript rendering enabled for modern frameworks. Export the complete dataset: all URLs with status codes, page titles, meta descriptions, H1–H6 headings, internal linking reports, page depth distribution, word counts, and content type breakdowns. From this data, map each site's hierarchy by analyzing URL folder paths, identify content categories (services, state pages, blog, resources), and document internal linking patterns to reveal what each competitor prioritizes.

**For the business formation niche specifically, document these architectural patterns:**

- How competitors categorize services — by state, by entity type (LLC, corporation, trust), or by use case (asset protection, privacy, tax optimization)
- The ratio of transactional service pages to educational content (blog posts, guides, FAQs)
- State-specific page architecture — ZenBusiness likely covers all 50 states while NCH and Wyoming Corporate focus on Nevada and Wyoming respectively
- Navigation structure including mega menus, CTA buttons in the header, and breadcrumb implementation
- Click depth from homepage to "start your formation" — fewer clicks indicates stronger conversion optimization
- Mobile navigation differences, since over 50% of traffic is mobile

**Side-by-side comparison requires a master spreadsheet** with five tabs: an overview dashboard (indexed pages, max page depth, CMS, blog post count per competitor), a navigation structure comparison (rows per nav item, columns per competitor), a content category matrix using ✅/⚠️/❌ ratings, a URL structure patterns tab, and a technical metrics comparison. Complement the spreadsheet with visual sitemaps color-coded by content type (blue for services, green for blog, orange for state pages) and a content coverage heatmap showing where competitors are strong, partial, or absent.

---

## SEO positioning analysis that drives redesign decisions

SEO competitive analysis transforms raw ranking data into concrete redesign recommendations — which pages to build, what content architecture to adopt, and how to protect existing search equity during migration. **The keyword gap analysis is the single most valuable SEO exercise** because it directly reveals which search queries competitors capture that you don't.

**Keyword gap analysis follows a five-step process.** First, identify true SEO competitors by searching target keywords like "anonymous LLC formation," "asset protection LLC," and "privacy business formation" to see who ranks consistently — these may differ from your business competitors. Second, extract each competitor's organic keyword portfolio using SEMrush's Keyword Gap tool (supports up to 5 domains simultaneously) or Ahrefs' Content Gap feature. Third, categorize the gaps: "Missing" keywords (competitors rank, you don't), "Weak" keywords (you rank lower), and "Shared" keywords where you compete directly. Fourth, organize keywords by search intent — informational ("what is an anonymous LLC"), commercial investigation ("best states for anonymous LLC"), and transactional ("form anonymous LLC online"). Fifth, prioritize using an ICE framework: Impact × Confidence × Ease, with special attention to "quick wins" where you rank positions 11–20.

For Incorporate123's specific niche, the **highest-value keyword clusters** include anonymous LLC formation, asset protection LLC structures, state-by-state privacy comparisons (Wyoming vs. Delaware vs. New Mexico), holding company structures, nominee services, and privacy trusts. These clusters should form the backbone of the new site's content architecture.

**Content gap analysis extends beyond keywords to content types and formats.** Audit what each competitor publishes — service pages, long-form guides, comparison tools, FAQ sections, video content, calculators — and score quality on a 1–5 scale for comprehensiveness, E-E-A-T signals (author credentials, expert citations), freshness, and multimedia usage. Identify entire topics no competitor covers well as blue-ocean opportunities.

**Domain authority and backlink analysis establishes the competitive baseline.** Capture Domain Rating/Authority, total referring domains, dofollow/nofollow ratios, and anchor text distribution for all six sites (five competitors plus your own). The most powerful technique is **link intersect analysis** — using Ahrefs Link Intersect to find sites linking to 2+ competitors but not to you, which represents warm outreach targets already predisposed to link in your niche. Calculate the gap: median referring domains of top 3 competitors minus your referring domains equals your target acquisition goal.

**SERP feature ownership is increasingly critical in 2026.** AI Overviews now appear above traditional results for many queries, followed by featured snippets (capturing ~35% of clicks when present) and People Also Ask boxes. Track which competitors own these features for your target keywords and plan content structures to capture them — clear question-and-answer formatting, 40–60 word concise definitions, tables, and FAQ schema markup. Implement Organization, FAQ, HowTo, Service, and BreadcrumbList schema across the redesigned site.

**Technical SEO benchmarking** rounds out the analysis. Compare Core Web Vitals (LCP ≤2.5s, INP responsiveness, CLS ≤0.1) across all competitors using Google PageSpeed Insights, which provides both lab data and real-user Chrome UX Report field data. Sites meeting Core Web Vitals thresholds see approximately **24% higher search visibility**.

**URL migration is the highest-risk element of any redesign.** Create a complete redirect map — every old URL mapped to its new destination via 301 redirects. Identify top-performing pages by traffic, conversions, and backlinks for extra protection. One documented case showed a retailer losing approximately $5 million in the first month post-launch from unredirected URLs. Monitor Google Search Console daily for the first 30 days, watching for the typical "14-day U-Curve" recovery pattern.

---

## Deconstructing competitor pricing pages and conversion funnels

Pricing page analysis is where competitive intelligence directly translates to revenue impact. Research from ConversionXL shows visitors who reach a pricing page demonstrate high purchase intent, with **15–30% making a decision based on what they see**. Nielsen Norman Group's research confirms pricing is the #1 information need for B2B site visitors, and companies that hide pricing are perceived as "evasive and untrustworthy."

**The business formation industry operates with two fundamentally different pricing architectures.** Budget providers (ZenBusiness, LegalZoom, Bizee) use a loss-leader model: free LLC formation plus state fees as the entry point, three tiers (Free / ~$199 / ~$299), with real revenue coming from auto-renewing compliance subscriptions at $199+/year, registered agent fees, and aggressive checkout upsells. Privacy and asset protection providers use an entirely different approach: NCH charges approximately $1,300 for a full-service Nevada LLC package with consultation-first engagement; Anderson Advisors offers a Platinum Membership model with free "strategy sessions" (stated $750 value) as lead generation; Wyoming Corporate Services operates a service-menu model accepting Bitcoin for privacy alignment.

**Apply Monetizely's five-criteria framework** to systematically evaluate each competitor's pricing page: Clarity (how easy is the pricing structure to understand), Value Communication (does it convey the value proposition effectively), User Guidance (does it help users select the right plan), Visual Hierarchy (is information prioritized well), and Trust Elements (does it reduce purchase anxiety). For each competitor, document tier names, price points, features per tier, CTA button copy and placement, "Most Popular" highlighting, annual vs. monthly toggle framing, trust signals, progressive disclosure mechanisms, and mobile responsiveness.

**Pricing psychology research reveals predictable patterns** to document across competitors. When presented with three options, approximately 70% of buyers choose the middle tier. "Most Popular" labels increase selection of that tier by **40–60%**. Bundle pricing increases revenue by 10–30% versus à la carte. The premium tier primarily serves as a price anchor that makes the middle option appear reasonable, not as the expected purchase.

**Map the complete conversion funnel for each competitor** from landing page through checkout. Budget providers follow an SEO content funnel (blog → service page → pricing → multi-step questionnaire → upsell gauntlet → checkout). Consultative providers use an education-first funnel (webinars/workshops → free strategy session → high-touch consultation → custom proposal). Document CTA placement (above fold, sticky header, inline, page bottom), CTA copy ("Start an LLC" vs. "Book a Consultation" vs. "Get Your Free Strategy Session"), and the specific upsell sequence during checkout. Use Loom or OBS for screen-recording the complete purchase journey, and BuiltWith/Wappalyzer to identify the technology powering each checkout.

**Trust signal analysis deserves dedicated attention.** ZenBusiness leads with volume social proof — 4.8/5 stars on Trustpilot from 27,000+ reviews and "850,000+ business owners trusted." NCH emphasizes longevity and expertise — "32+ years," "120,000+ businesses," "Lawyer-reviewed, CPA-approved." Anderson uses outcome-focused testimonials ("saved me millions in taxes"). Wyoming Corporate signals privacy credibility through Bitcoin acceptance. Baymard Institute research across 4,000+ US adults found roughly 1 in 5 shoppers abandon checkout due to not trusting the site with payment information — making trust signal placement at checkout critical.

**For Incorporate123's repositioning, the strategic pricing opportunity sits in the gap between budget ($0–$300) and premium ($1,300+).** A three-tier structure anchored by a comprehensive "Complete Privacy & Protection" package ($2,500–$5,000+), a recommended "Protection" tier ($899–$1,299) combining privacy + asset protection + compliance, and a "Foundation" entry point ($299–$499) for basic privacy-focused LLC formation would differentiate from both camps. The key differentiator: transparent pricing (unlike NCH/Anderson's consultative opacity) combined with premium-provider expertise and modern UX (unlike most privacy companies' dated websites).

---

## Frameworks that turn raw data into strategic clarity

The right frameworks transform hundreds of data points into actionable redesign decisions. Use **four complementary frameworks** for maximum insight.

**Feature comparison matrices serve as the primary analytical backbone.** Build a scored grid with competitors as columns and 10–15 evaluation criteria as rows, organized into categories: UX/Navigation, Content Quality, SEO Performance, Pricing Transparency, Conversion Optimization, Trust/Authority Signals, Mobile Experience, and Technical Performance. Score each dimension 1–5 with explicit rubric descriptions per level. Color-code cells red/yellow/green for instant visual scanning. Keep criteria to 15 maximum to avoid analysis paralysis.

**Individual SWOT analyses per competitor** should be adapted for web redesign context — Strengths focus on superior UX elements, strong SEO rankings, and compelling CTAs; Weaknesses on poor navigation, confusing pricing, and content gaps; Opportunities on content topics competitors haven't filled and UX patterns not yet adopted in the niche; Threats on superior technology stacks and emerging design trends competitors are adopting. Synthesize individual SWOTs into a combined matrix that reveals patterns.

**A competitive positioning map** provides the clearest strategic visualization. For Incorporate123, plot competitors on two axes: "Privacy/Asset Protection Expertise" (low → high) on the X-axis and "Digital Experience Quality" (basic → advanced) on the Y-axis. NCH and Anderson land high on expertise but likely low-to-mid on digital experience; ZenBusiness lands high on digital experience but low on privacy expertise. The upper-right quadrant — high expertise AND high digital quality — represents Incorporate123's target positioning and likely has no current occupant.

**Spider/radar charts work for executive presentations** comparing all competitors across 8–10 dimensions simultaneously. Plot UX/Usability, Content Quality, SEO Performance, Visual Design, Mobile Experience, Pricing Clarity, Trust Signals, Conversion Optimization, and Site Speed. Create these in Google Sheets (built-in chart type), Visme, or Canva. One caveat: radar charts can be visually misleading because filled areas create false size impressions. Use them for high-level stakeholder presentations but rely on the scored matrix for detailed analysis.

**Weight the evaluation dimensions for redesign specifically:** UX & Conversion at 30% (directly drives business results), Content & Messaging at 25% (critical for the repositioning), SEO at 20% (drives organic traffic), Visual Design at 15% (brand perception), and Technical Performance at 10% (table stakes). Skip deep-dives into competitor financials, social media strategy, PPC campaigns, and operational analysis — these don't inform web design decisions.

---

## The 16-day workflow from kickoff to final deliverable

The end-to-end process divides into five phases. Running site structure crawls, SEO tool analysis, and manual UX reviews in parallel across all five competitors is the key efficiency lever.

**Phase 1 — Planning and setup (Days 1–2, 4–6 hours).** Define the repositioning objective, confirm the competitor list, create the evaluation criteria rubric, set up tool accounts (install Screaming Frog, browser extensions, sign up for SEMrush's 7-day free trial), and build data collection templates in Google Sheets with standardized columns for each analysis dimension.

**Phase 2 — Data collection (Days 3–7, 20–25 hours).** This is the most time-intensive phase. Per competitor, allocate approximately 4–5 hours: screenshot key pages (1 hour), run SEO tools for keyword/backlink/content gap extraction (1 hour), crawl with Screaming Frog (30 minutes), run PageSpeed Insights (15 minutes), analyze site structure and navigation (1 hour), review content strategy (1 hour), analyze messaging and value propositions (1 hour), document pricing presentation and conversion funnel (30 minutes), test mobile experience (30 minutes), and catalog trust signals (30 minutes). **Critical efficiency tip:** Run all five competitor crawls overnight, batch SEO tool exports during the free trial period, and use AI to accelerate content/messaging analysis.

**Phase 3 — Analysis and scoring (Days 8–10, 12–15 hours).** Score each competitor on the evaluation criteria, complete individual SWOTs (1 hour per competitor), build the feature comparison matrix (2 hours), identify cross-competitor patterns and themes (3 hours), and use AI to help synthesize findings (2 hours).

**Phase 4 — Synthesis and visualization (Days 11–13, 8–10 hours).** Create the competitive positioning map (2 hours), build spider/radar charts (2 hours), design UX scorecards (2 hours), and write thematic findings organized by navigation, messaging, pricing presentation, trust signals, content strategy, and conversion patterns (3 hours).

**Phase 5 — Recommendations and report (Days 14–16, 10–12 hours).** Develop strategic recommendations with ICE-scored priorities (3 hours), write the executive summary (2 hours), compile the full report and presentation deck (4 hours), and conduct internal review with revisions (2 hours).

**Total: 55–70 hours for a single analyst, or 8–10 business days full-time.** The most common bottleneck is data collection running long — mitigate by batching tool exports, running crawls in parallel, and using AI to accelerate content analysis.

---

## The right tools at every budget level

Three budget tiers cover the spectrum from bootstrapped to comprehensive, with the mid-tier offering the best value for a one-time competitive analysis.

**The $49/month budget toolkit** combines Ubersuggest ($29/month) for keyword research and basic competitor SEO data, Screaming Frog free edition (500 URLs per crawl — sufficient for smaller competitor sites), Google PageSpeed Insights and Google Search Console (free), Miro free tier for collaborative mapping, Wappalyzer and SEO META in 1 Click browser extensions (free), Google Sheets for all matrices and scoring, and Claude or ChatGPT ($20/month) for AI-assisted analysis and report writing.

**The recommended $70/month toolkit** adds Screaming Frog paid (£199/year ≈ $23/month) for unlimited crawling of all five competitors, Sitebulb Lite ($13.50/month) for visual crawl maps, and Octopus.do Pro ($10–12/month) for presentation-ready visual sitemaps. This combination covers site structure analysis comprehensively.

**The power-user approach** leverages SEMrush's 7-day free trial (normally $139.95/month for Pro) to extract maximum SEO data within the trial window. During those seven days, run keyword gap analysis against all five competitors, content gap analysis, backlink gap analysis, site audit of your own site, position tracking setup, and SERP feature analysis — **export everything to spreadsheets before the trial expires.** If budget allows one ongoing subscription, SEMrush Pro provides the most comprehensive competitive analysis capability for this use case. For ongoing monitoring after the analysis phase, downgrade to Ubersuggest ($29/month) or SE Ranking ($44/month).

| Analysis Dimension | Best Free Tool | Best Paid Tool | Price |
|---|---|---|---|
| Site crawling | Screaming Frog (500 URLs) | Screaming Frog Paid | $23/mo |
| Visual sitemaps | Octopus.do free | Sitebulb Lite | $13.50/mo |
| Keyword gap analysis | Google Keyword Planner | SEMrush Pro | $139.95/mo |
| Backlink analysis | Seobility Backlink Checker | Ahrefs Lite | $129/mo |
| Page speed | Google PageSpeed Insights | GTmetrix Pro | $14.50/mo |
| Tech stack detection | Wappalyzer extension | BuiltWith Pro | $295/mo |
| Competitor monitoring | Google Alerts | Visualping | $14/mo |
| Visual mapping | Miro (3 free boards) | Miro Team | $10/mo |
| AI analysis | Claude free tier | Claude Pro | $20/mo |

---

## AI as an analysis accelerator, not a replacement

AI tools cut competitive analysis time by **40–50%**, primarily in the synthesis and report-writing phases. But they have a critical limitation: they hallucinate data. Never use AI to generate competitive metrics, traffic estimates, or keyword data from scratch. Instead, use AI to process and organize data you collect with dedicated tools.

**The optimal AI workflow integrates at four specific points.** First, content and messaging analysis: paste homepage copy from all five competitors into Claude and prompt it to identify primary value propositions, messaging themes, tone, target audience signals, and differentiators, then generate a comparison table. Second, SWOT generation: feed collected data about each competitor (screenshots, pricing structure, SEO metrics, content inventory) into Claude and request a redesign-focused SWOT analysis. Third, pattern identification: share your complete analysis notes and ask AI to surface common design patterns across all competitors, features only 1–2 competitors offer, and gaps no competitor addresses. Fourth, report drafting: provide scored matrices and thematic findings, and have Claude draft the executive summary and strategic recommendations framed around the repositioning objective.

**ChatGPT with image upload handles visual analysis** — upload competitor homepage screenshots and ask it to analyze layout structure, visual hierarchy, CTA placement, and trust signal positioning. Claude excels at long-document analysis and structured report writing thanks to its larger context window. **Use both in combination:** ChatGPT for visual and screenshot analysis, Claude for synthesizing lengthy research and drafting the final deliverable.

**Specific high-value AI prompts for this project include:** "Analyze these 5 business formation company homepage copies and identify how each positions privacy and asset protection — who leads with it, who buries it, and who ignores it entirely." And: "Given this feature comparison matrix for 5 competitors, identify the three strongest pricing page opportunities for a company repositioning as a Privacy, Asset Protection & Business Formation Specialist." And: "Create a comprehensive evaluation rubric with 12–15 criteria for comparing business formation websites, with specific 1–5 scoring descriptions for each criterion."

The key discipline: **collect first, synthesize second.** Every AI-generated insight should be verified against the primary data before inclusion in the final deliverable.

---

## Conclusion: from analysis to competitive advantage

The most important insight from this methodology is that **redesign-focused competitive analysis differs fundamentally from general business competitive analysis**. Every data point should answer one question: "How should this influence our site design, structure, or content?" The three highest-leverage findings will likely be: the content architecture patterns that reveal how competitors organize privacy and asset protection information (informing Incorporate123's new information architecture), the keyword and content gaps that no competitor adequately covers (representing blue-ocean content opportunities), and the pricing presentation gap between budget providers' polished self-serve UX and premium providers' dated consultative approach (Incorporate123's positioning sweet spot).

The competitive positioning map will likely reveal an empty upper-right quadrant — high privacy expertise combined with high digital experience quality — that represents Incorporate123's target destination. The deliverable should make this opportunity visually unmistakable to stakeholders. Start with the SEMrush free trial and Screaming Frog crawls in the first week to capture time-sensitive data, run UX and pricing analysis in parallel during week two, synthesize with AI assistance in week three, and deliver the final report by week four. The entire investment — approximately $49–$70 in tools and 55–70 hours of focused work — produces the strategic foundation for a redesign that doesn't just look better, but systematically outperforms every competitor in the privacy business formation space.