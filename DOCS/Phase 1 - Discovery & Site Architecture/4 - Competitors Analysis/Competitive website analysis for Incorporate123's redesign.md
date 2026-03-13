# Competitive website analysis for Incorporate123's redesign

**Five competitors in the privacy incorporation space reveal a massive strategic opening: no single competitor combines modern UX, privacy-first architecture, and educational depth.** NCH and ZenBusiness dominate content volume; Wyoming Corporate Services and Anderson Advisors own premium privacy positioning; ShieldCorp proves the bottom of the market is underserved digitally. For Incorporate123's redesign, the clearest opportunity is building the first site that organizes entirely around privacy and asset protection intent — something none of these five competitors do as a primary architecture.

This analysis covers navigation, content, conversion, and technology across all five competitors, drawn from direct page visits and source inspection conducted in February 2026.

---

## Competitor-by-competitor architecture summaries

**NCH Inc (nchinc.com)** operates a content-heavy site with **~650–750 indexed pages** including ~560 blog posts, organized through 6 top-level mega-menu items by entity type and service category. Their single all-inclusive $1,300 Premier LLC package avoids tiered pricing. The site runs on a custom CMS with a WordPress blog subsystem, uses LiveChat, and pushes both self-service ordering and consultation scheduling. A "Wealthy and Wise Academy" with 4 free courses is unique in the space.

**Anderson Advisors (andersonadvisors.com)** is the largest site analyzed with **~1,000–1,500 indexed pages**, 645 blog posts, and 360+ podcast episodes, all on WordPress. Navigation uses 7 mega-menu items organized by use case and audience segment (real estate investors, business owners, stock traders). There is zero public pricing — every service routes through a "Free Strategy Session" consultation funnel positioned as a "$750 value." The attorney-led, premium positioning is reinforced by event-driven lead gen including workshops, webinars, and Tax Tuesdays.

**ShieldCorp (shieldcorp.net)** is an essentially dormant WordPress site with **~35–40 indexed pages** and only 11 blog posts, all from 2017. Navigation covers 7 items organized primarily by state (Nevada/Wyoming). Pricing is transparent and low ($49 incorporation prep, $300 nominee officers). Self-service ordering via PayPal with no modern conversion tools, no trust signals, and a copyright frozen at 2016. This is a bare-bones operation functioning on minimal digital investment.

**Wyoming Corporate Services (wyomingcompany.com)** is the closest direct competitor with **~30–45 indexed pages** and no blog. A flat 23-item navigation list covers entity types, privacy packages, and competitive comparison pages. Five tiered privacy packages range from **$1,140 to $6,235**, with the unique differentiator being attorney-privilege privacy architecture. Despite a dated 2010s-era design, they maintain a **5.0 Trustpilot rating with 1,268+ reviews** and BBB A+. Bitcoin accepted.

**ZenBusiness (zenbusiness.com)** is the UX benchmark with **~2,000–4,000 indexed pages** on a modern headless architecture (GCP + Cloudinary + NGINX). Three mega-menu items organize services by business lifecycle stage. The **$0 + state fees** Starter plan, 3-tier pricing, and 1-click ordering set the mainstream standard. All 50 states are covered with 5–8 subtopic pages each, forming a textbook pillar/cluster SEO model. No nominee services, no privacy features whatsoever.

---

## Navigation and information architecture compared

| Dimension | NCH Inc | Anderson Advisors | ShieldCorp | Wyoming Corporate Services | ZenBusiness |
|---|---|---|---|---|---|
| **Top-level nav items** | 6 (mega menus) | 7 (mega menus) | 7 (basic dropdowns) | 23 (flat list, no dropdowns) | 3 (mega menus) + utility |
| **Organization model** | Hybrid: entity type + service category | Hybrid: use case + audience segment | By state, then service type | Hybrid: entity type + use case | By business lifecycle stage |
| **Estimated indexed pages** | ~650–750 | ~1,000–1,500 | ~35–40 | ~30–45 | ~2,000–4,000 |
| **States with dedicated pages** | 2 (NV, WY) | ~50 (thin reference pages) | 2 (NV, WY) | 1 (WY-focused, new all-states page) | 50 (deep content per state) |
| **Blog/resource center** | ~560 posts + academy (4 courses) | 645 posts + 360+ podcasts + 5 guides + eBooks | 11 posts (all 2017, dormant) | None (5–8 content pages, no blog) | 500+ posts + tools + webinars |
| **Max click depth** | 4–5 clicks | 3–4 clicks | 3 clicks | 2 clicks | 4–5 clicks |
| **Breadcrumbs** | Present on some pages | Not visible | None | None | Yes, on state/product pages |
| **Footer navigation** | Minimal (About, Contact, Privacy) | Two-row with all sections + social | Address only, no nav links | Sidebar serves as footer, no links | Three-column (Services, Company, Support) |

NCH and Anderson lead in total content volume, but **ZenBusiness is the only competitor with a truly systematic information architecture** — its lifecycle-stage mega menus ("Make it Official → Stay Compliant → Manage Finances → Get Customers") are the most user-centric of any site analyzed. Wyoming Corporate Services sits at the opposite extreme: 23 navigation items in a flat, unsorted list with inconsistent labels like "Regular or Close" and URLs containing typos (`/moveit/email-wyoming-corporatoins/`).

The state-page gap is striking. ZenBusiness has **300–400+ state-specific pages** forming deep content clusters; Anderson has ~50 thin reference pages per state; NCH has only 2 (Nevada, Wyoming); ShieldCorp has 2; and Wyoming Corporate Services has essentially 1 state with a new all-states page that appears disconnected from the main site. For Incorporate123, even building 10–15 state comparison pages (Nevada vs. California, Wyoming vs. Delaware, etc.) would create content that most privacy-focused competitors entirely lack.

---

## Content architecture reveals a pillar/cluster vacuum

Only ZenBusiness implements a recognizable pillar/cluster content model. Their LLC pillar page (`/llc/`) connects to 50 state-specific cluster pages, each with 5–8 subtopic pages (foreign qualification, name reservation, amendments, certificate of formation, DBA, business search). Breadcrumbs, table-of-contents navigation, and FAQ accordions reinforce the structure.

Every other competitor uses essentially flat content architectures:

- **NCH** publishes ~560 blog posts under `/blog/[category]/[slug]/` with category tags but no visible hub-and-spoke linking. Five long-form SEO guides sit at root-level URLs (`/how-to-start-an-llc-in-nevada`) disconnected from related clusters.
- **Anderson** has 645 blog posts filed under `/blog/[slug]/` with filtering by category but no topical hubs. Their 5 "Guides" (`/guide-to-estate-planning/`, `/guide-real-estate-asset-protection/`) could serve as pillar pages but lack systematic interlinking to blog clusters.
- **Wyoming Corporate Services** has no blog, no content clusters, no internal linking strategy. Educational content is scattered across standalone pages with no discoverability framework.
- **ShieldCorp** has 11 dead blog posts categorized as "Uncategorized."

**No competitor organizes content around privacy and asset protection as primary pillars.** NCH buries asset protection under `/entities/asset-protection` and disperses privacy across legal services subpages. Anderson segments by audience (real estate investors, business owners, stock traders) rather than by intent. Wyoming Corporate Services has a `/privacy-2-2/` page (note the slug) but no supporting content cluster. This is the single largest architectural gap in the competitive landscape — and exactly where Incorporate123's proposed 4-pillar model (Business Privacy, Asset Protection, Company Formation, Compliance) would be genuinely differentiated.

### FAQ implementation varies widely

| Competitor | Dedicated FAQ page | Inline FAQs on service pages | FAQ schema markup |
|---|---|---|---|
| NCH Inc | Yes (`/faq`) | Yes (homepage accordion) | Not confirmed |
| Anderson Advisors | No | Partial (expandable sections on some pages) | Not visible |
| ShieldCorp | No | No | No |
| Wyoming Corporate Services | Yes (`/faq/`, 16 questions) | No | Not visible |
| ZenBusiness | Yes (`/support-faqs/` + Help Center) | Yes (accordion on every state/product page) | Likely (structured content) |

ZenBusiness's approach — inline FAQ accordions on every service and state page plus a dedicated Help Center — is the gold standard. For Incorporate123's ~71 pages, implementing inline FAQs on every service page with schema markup would immediately outperform all four niche competitors.

---

## Pricing and package structures diverge sharply

| Competitor | Pricing model | Base price | Pricing visibility | Tiers |
|---|---|---|---|---|
| NCH Inc | All-inclusive single package | $1,300 (Premier LLC) | Not prominently displayed; found in blog content | 1 package |
| Anderson Advisors | Consultation-required | Not public | Zero pricing anywhere on site | N/A |
| ShieldCorp | À la carte with checkboxes | $49 incorporation prep | Fully transparent, on order forms | No tiers — modular add-ons |
| Wyoming Corporate Services | Tiered bundles + à la carte | $515 (Basic LLC) to $6,235 (Ultra Trust) | Single long pricing page | 5 privacy tiers + add-ons |
| ZenBusiness | 3-tier SaaS-style | $0 + state fees | Homepage comparison table | 3 tiers (Starter/Pro/Premium) |

The pricing spectrum ranges from ZenBusiness's **$0 entry point** to Anderson's **total pricing opacity** and Wyoming Corporate Services' **$6,235 Ultra Asset Protection Trust**. This represents a genuine market segmentation: budget self-service at one end, premium consultation-required at the other.

Wyoming Corporate Services' 5-tier privacy package structure is the most relevant model for Incorporate123. Their tiers escalate from Basic Privacy ($1,140) through Attorney Privilege Privacy ($1,765), Attorney Privilege + Federal Number ($2,075), Attorney Privilege + Virtual Office ($2,075), to Full Executive Privacy ($2,700), with the Ultra Trust at $6,235. **This graduated privacy-tier approach maps directly to Incorporate123's positioning** and demonstrates that privacy-conscious buyers will pay $1,100–$2,700 for increasingly robust anonymity structures.

NCH's single-package model ($1,300 all-inclusive) is a deliberate counterpoint to the industry's typical 3-tier approach. It eliminates decision friction but also eliminates upsell potential and may lose price-sensitive buyers who can't access a lower tier.

---

## Conversion architecture and how competitors capture demand

| Dimension | NCH Inc | Anderson Advisors | ShieldCorp | Wyoming Corporate Services | ZenBusiness |
|---|---|---|---|---|---|
| **Clicks to order** | 0–1 (hero name checker or header CTA) | 1–2 (strategy session form) | 2 (hero → state select → order form) | 1 (top bar "Order Here") | 1 (header "Start an LLC") |
| **Primary CTA copy** | "Start Your LLC" | "Request a Free Strategy Session" | "Incorporate Online Now!" | "Order Here" | "Start an LLC" |
| **Self-service ordering?** | Yes (with consultation push) | No — consultation required | Yes | Yes (phone encouraged for complex) | Yes — fully self-service |
| **Live chat** | Yes (LiveChat) | No | No | No | No (on marketing pages) |
| **Phone prominent?** | Yes (1-800-508-1729) | Yes (800-706-4741) | Yes (1-775-577-4822) | Yes (1-307-632-3333) | Yes (844-493-6249) |
| **Lead magnets** | eBook, quiz, academy, consultation | Strategy session, workshops, webinars, eBooks, podcasts | None | None | Quiz, name generator, calculators, webinars |
| **Sticky/floating CTAs** | No visible sticky bar | No | No | Mobile click-to-call button only | No visible sticky bar |

The conversion patterns split into two models. **ZenBusiness and NCH** lead with self-service order flows and name-checker entry points that capture intent immediately — ZenBusiness's homepage name-entry field on state pages and NCH's "What's the name of your new LLC?" hero form are both effective patterns. **Anderson** operates a pure consultation funnel where every service routes through a 45-minute strategy session.

**Anderson's lead generation ecosystem is the most sophisticated** despite having no self-service path. Their funnel layers multiple entry points at different commitment levels: free webinar → free workshop → paid workshop → strategy session → Platinum Membership ($X,XXX/yr). The "Tax Tuesdays" biweekly livestream and podcast (360+ episodes) create recurring audience touchpoints that no other competitor matches.

For Incorporate123, the implication is clear: **the site needs both a self-service order path and a consultation booking path**, since the client's services span from straightforward LLC formation (self-service-friendly) to complex nominee structures and asset protection (consultation-appropriate). NCH's hybrid model — self-service available but consultation heavily encouraged — is the closest template, though it lacks the privacy-tiered packaging that Incorporate123's positioning demands.

### Every competitor underinvests in sticky CTAs

Not a single competitor uses a persistent sticky header CTA bar, floating sidebar CTA, or exit-intent popup for core conversion actions. NCH uses WisePops for eBook download popups, but no one has implemented the kind of persistent, context-aware conversion elements common in SaaS. A sticky "Get a Privacy Assessment" or "Book a Consultation" bar on Incorporate123's site would be a simple differentiator.

---

## Technology reveals a spectrum from WordPress basics to custom builds

| Competitor | CMS | Hosting/CDN | Chat | Payments | Notable tech |
|---|---|---|---|---|---|
| NCH Inc | Custom (main) + WordPress (blog) | Cloudflare | LiveChat | Custom order flow at entity.nchinc.com | WisePops, Facebook Pixel, LinkedIn Pixel |
| Anderson Advisors | WordPress | BigScoots | None | WooCommerce (books only) | Next.js client portal, Formstack, DocuSign |
| ShieldCorp | WordPress | Unknown | None | PayPal only | Formidable Forms, math CAPTCHA |
| Wyoming Corporate Services | WordPress (custom theme 0.3.1) | Cloudflare | None | Custom forms (Bitcoin/PayPal/wire accepted) | Facebook Pixel, Google Ads tracking |
| ZenBusiness | Custom headless (GCP + NGINX) | Cloudinary CDN | Post-purchase only (Velo AI) | Integrated checkout | Native mobile apps, Mixpanel, Wistia, Bugsnag |

**WordPress dominates the niche** — 4 of 5 competitors use it. Only ZenBusiness runs a custom headless architecture, reflecting their $200M+ in venture funding and engineering-first culture. For Incorporate123's redesign, WordPress remains the pragmatic choice given the ecosystem's norms, but adopting modern performance patterns (WebP images, CDN, lazy loading) that NCH and ZenBusiness use would establish technical parity.

ShieldCorp's technology represents the absolute floor: PayPal-only payments, math-based CAPTCHAs, and a copyright frozen at 2016. Wyoming Corporate Services is only marginally better, with inconsistent URLs (`/prices-top/`, `/privacy-2-2/`, `/orders-4/`) suggesting years of ad-hoc WordPress page creation without architectural planning.

---

## Cross-competitor synthesis

### What everyone does (common patterns)

**Phone-forward lead capture** is universal — all five prominently display toll-free numbers in headers, and phone consultation is positioned as the primary or secondary conversion path. This reflects the high-consideration nature of incorporation decisions. **Entity-type categorization** appears on every site (LLC, Corporation, Trust, etc.), though the depth varies. All five offer **Nevada and/or Wyoming** as primary states. All have **1–2 click conversion paths** from homepage to order/consultation form. All except ShieldCorp display **third-party trust signals** (Trustpilot, BBB, Forbes). Every competitor except Anderson offers some form of **self-service ordering**.

### What only 1–2 competitors do (unique approaches)

- **Attorney-privilege privacy architecture**: Only Wyoming Corporate Services positions attorney-client privilege as a structural privacy mechanism (not just a service add-on). This is their most defensible differentiator.
- **Lifecycle-stage navigation**: Only ZenBusiness organizes its primary navigation by business journey stage rather than product category — a significantly more user-centric approach.
- **Free educational academy**: Only NCH offers structured, multi-course free education (Wealthy and Wise Academy with 4 courses and 15+ lectures).
- **Event-driven lead funnels**: Only Anderson uses workshops, summits, and recurring livestreams (Tax Tuesdays) as systematic lead generation.
- **Aged shelf company inventory**: Only Wyoming Corporate Services maintains a large inventory of 6,000+ aged shelf companies across 25+ states.
- **Bitcoin payments**: Only Wyoming Corporate Services explicitly accepts cryptocurrency.
- **AI-powered tools**: Only ZenBusiness has deployed proprietary AI (Velo™) as a customer-facing tool.
- **Audience segmentation in navigation**: Only Anderson segments its "Who We Serve" section by audience type (real estate investors, business owners, stock traders).
- **Interactive assessment tools**: NCH (Risk Assessment Quiz) and ZenBusiness (Entity Type Quiz, S Corp Calculator, Break-Even Calculator) are the only two using interactive tools as lead capture.

### What no competitor does well (universal gaps)

**Privacy-first information architecture does not exist.** No competitor organizes its site primarily around privacy intent. Privacy content is always subordinate — buried under services, scattered across blog posts, or limited to a single pricing page. Incorporate123's proposed 4-pillar model would be the first site in this space to make Business Privacy a top-level architectural pillar.

**Pillar/cluster content for privacy and asset protection topics is absent.** ZenBusiness has excellent pillar/cluster for LLC formation by state, but nobody has built content clusters around privacy strategies, asset protection structures, nominee services education, or compliance requirements. Anderson has the raw content volume (645 posts) but no topical architecture.

**No competitor offers a privacy assessment or recommendation tool.** Despite the complexity of privacy structures (nominee services, anonymous LLCs, trusts, attorney privilege), no one provides an interactive tool that helps prospects self-identify which level of privacy protection they need. NCH's Risk Assessment Quiz comes closest but focuses on general business risk rather than privacy specifically.

**Comparison content between privacy approaches is missing.** No site offers clear "Nevada vs. Wyoming for privacy" comparison pages, "Nominee vs. Anonymous LLC vs. Trust" decision guides, or "Privacy Structure Comparison" tools. Wyoming Corporate Services has a `/nevada-corporation/` comparison page, but it's a general state comparison, not privacy-focused.

**Modern UX patterns are largely absent from niche competitors.** Sticky CTAs, contextual chatbots, progress indicators, interactive pricing configurators, and mobile-first design are standard in SaaS but missing from every privacy-focused competitor. Only ZenBusiness (the budget benchmark) approaches modern UX standards.

**Nobody explains the "why" behind privacy structures well.** All competitors assume prospects already understand why they need privacy. No site has a clear educational journey: "Why business privacy matters → What threatens your privacy → How different structures protect you → Which structure fits your situation → Get started." Building this narrative arc into Incorporate123's architecture would be a powerful differentiator.

---

## Strategic implications for Incorporate123's redesign

**The intent-first pillar/cluster architecture is the right call and would be genuinely unprecedented.** Organizing ~71 pages around Business Privacy, Asset Protection, Company Formation, and Compliance creates a structure no competitor has attempted. The key is ensuring these pillars function as both navigation categories and SEO hub pages with systematic interlinking to cluster content.

**Pricing should be transparent and tiered, following Wyoming Corporate Services' model but with better UX.** Their 5-tier privacy package structure ($1,140–$6,235) proves the market accepts graduated privacy pricing. Incorporate123 should present this in a clean comparison table (ZenBusiness-style) rather than Wyoming Corporate Services' single long scroll page — combining privacy-tier logic with modern presentation.

**Build the privacy assessment tool that nobody has.** An interactive "What level of privacy protection do you need?" quiz that recommends a specific package based on the user's situation would capture intent, qualify leads, and differentiate immediately. NCH's Risk Assessment Quiz and ZenBusiness's Entity Type Quiz demonstrate the pattern works.

**Create the comparison and education content that the entire space lacks.** Priority pages should include: "Nevada vs. Wyoming for Business Privacy," "Nominee Services Explained: What They Are and What They're Not," "Anonymous LLC vs. Trust vs. Nominee: Choosing Your Privacy Structure," and "What Happens When Your Business Privacy Is Compromised." This content doesn't exist anywhere in the competitive landscape.

**Support both self-service and consultation conversion paths from Day 1.** Straightforward LLC formation can follow ZenBusiness's self-service model (name checker → package selection → checkout). Complex privacy structures should route through consultation booking (Anderson's strategy session model). The navigation should clearly signal which path applies: "Form a Company" → self-service, "Protect Your Privacy" → consultation.

**Deploy the modern UX elements competitors neglect.** A sticky header CTA, contextual inline CTAs that change based on page topic (privacy pages show "Get a Privacy Assessment"; formation pages show "Start Your LLC"), live chat, and FAQ accordions with schema markup on every service page would immediately establish UX superiority over all four niche competitors. Only ZenBusiness approaches this standard, and they don't compete on privacy.

**Content volume matters — but architecture matters more.** NCH has 560 blog posts with no discernible content architecture. Anderson has 645 posts with flat categorization. Incorporate123's 71 well-architected pages, organized into 4 clear pillars with systematic interlinking, strategic FAQ implementation, and supporting educational content, will likely outperform these larger but disorganized content libraries for privacy-related queries. Quality and structure beat volume when topical authority is concentrated.

## Conclusion

The competitive landscape reveals two distinct market tiers operating in isolation. Budget players (ZenBusiness) deliver excellent UX and massive SEO footprints but zero privacy capability. Privacy-focused players (Wyoming Corporate Services, ShieldCorp) have strong service offerings trapped inside dated, architecturally weak websites. NCH and Anderson occupy middle ground with large content libraries but no privacy-first organization. **Incorporate123's redesign has a genuine whitespace opportunity: becoming the first site in this space to combine modern UX standards with a privacy-first content architecture.** The proposed pillar/cluster model around Business Privacy, Asset Protection, Company Formation, and Compliance would create a structure that no analyzed competitor currently offers — or could quickly replicate, given their existing architectural debt.