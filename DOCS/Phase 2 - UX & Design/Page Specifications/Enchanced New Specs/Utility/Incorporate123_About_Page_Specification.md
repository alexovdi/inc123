# About Us — Page Specification

**Page:** About Us
**URL:** `/about/`
**Template Type:** Utility
**Priority:** P1 — Launch
**Content Source:** Existing — enhance

---

## 1. Page Purpose & Strategic Role

### 1.1 Primary Goal

Build trust. With zero reviews on any public platform, the About page is Incorporate123's most important trust signal until a review program generates social proof. The page must answer three questions: "Who are these people?" "Are they real?" "Can I trust them with $1,275–$12,000?"

### 1.2 Strategic Role

- **Trust architecture anchor** — The Positioning Framework identifies founder visibility, real office photography, and 25-year track record as the primary trust signals at launch. All three converge on this page.
- **E-E-A-T signal for SEO** — Experience, Expertise, Authoritativeness, Trustworthiness. Google weighs E-E-A-T heavily for financial services content. A strong About page with named expertise, physical location, and operational history directly supports ranking authority across the entire site.
- **Conversion support** — Visitors who are close to purchasing but not quite confident will click "About" as a final trust check. This page must reinforce, not undermine, the conversion intent they arrived with.

### 1.3 Success Metrics

- **Primary:** Visitor returns to previous page (package, pillar) and converts — the About page's job is to confirm confidence, not capture a new conversion
- **Secondary:** Click-through to Contact or packages
- **Bounce target:** < 40%
- **Time on page:** 2–3 minutes

---

## 2. Section Order

| # | Section | Role |
|---|---------|------|
| 1 | About Hero | Headline + positioning statement + 25-year badge |
| 2 | The Story | Company origin, 25-year timeline, "internationalization" after 2001 |
| 3 | Founder / Team | David's professional bio + photo. The face behind the company. |
| 4 | Our Office | Kingsbury Executive Suites, Reno — real address, professional photography, map |
| 5 | What We Believe | 3–4 philosophy blocks: Privacy-first, minimum compliance, transparent pricing, real humans |
| 6 | By the Numbers | Key stats: years in business, states, entities formed, renewal rate, jurisdictions |
| 7 | Differentiators Summary | Compact version of the 6 differentiators from the pillar pages |
| 8 | CTA | "Ready to work with us?" + dual CTA (packages + consultation) |

---

## 3. Section Specifications

### Section 1: About Hero

```
Breadcrumb: Home > About

H1: Privacy, Asset Protection & Business
    Formation Specialists Since 2000.

Subheadline: We're not a $0 filing service. We're not an
attorney-led $2,750 consultation firm. We're the 25-year
specialists who fill the space between — genuine privacy
expertise at transparent, all-inclusive pricing.
```

**Layout:** Light background. No dark hero — this is a content page. Professional but warm.

### Section 2: The Story

**Content direction (David writes final copy):**
- Founded ~2000 as a Nevada incorporation company
- Evolved into privacy and asset protection specialists
- "Internationalized" operations after recognizing the need for offshore records storage (post-2001 privacy landscape changes)
- Parent company Fidelity Solutions Limited (Hong Kong) — provides actual international operational presence
- Focus narrowed to Wyoming and Nevada as the two strongest states for privacy and AP
- Today: 25 years of forming private entities, maintaining corporate records, and protecting client identity

**Format:** Narrative prose, 3–4 paragraphs. Not bullet points — the story format builds human connection. Timeline optional (horizontal milestone strip: 2000 → early years → international expansion → WY addition → present).

### Section 3: Founder / Team

**Components:**
- Professional headshot of David (brand guide specifies: approachable but authoritative)
- Name and title
- 2–3 paragraph professional bio
- Relevant experience and credentials
- Optional: team members if David wants to feature additional staff

**Content direction:**
- David's background in privacy-focused formation
- Years of personal experience in the field
- Philosophy on privacy and minimum compliance
- Why he started/runs Incorporate123

**Dev Notes:**
- Photo must be professional — not a stock photo. Brand guide explicitly prohibits stock people photos.
- Author schema markup (Person) on the founder bio — supports E-E-A-T
- Bio should be reusable on blog posts and press references (author card component)

### Section 4: Our Office

**Components:**
- Professional photography of Kingsbury Executive Suites (2–3 images)
- Full address: 1795 Meadow Wood Lane, Suite 100, Reno, NV 89502 (verify)
- Embedded Google Maps widget
- Phone number with click-to-call
- Business hours (if applicable)

**Content:**

```
"Real Office. Real People."

Kingsbury Executive Suites
1795 Meadow Wood Lane, Suite 100
Reno, Nevada 89502

This is not a PO box. This is not a virtual office. This is where
we work, where your documents are prepared, and where you can
visit if you want to meet us in person.

📞 (XXX) XXX-XXXX
```

**Dev Notes:**
- The "not a PO box, not a virtual office" statement directly counters the competitor landscape where most services are faceless
- Google Maps embed — interactive, not a static image
- LocalBusiness schema markup with address, phone, coordinates
- Office photography: David needs to provide or schedule professional photos

### Section 5: What We Believe

**4 philosophy blocks:**

```
[Lock icon]
Privacy Is a Right, Not a Product Feature
Every person has the right to keep their business ownership
private. We built our company around making that possible —
not as an upsell, but as the default for anyone who wants it.

[ClipboardCheck icon]
Minimum Necessary Compliance
We handle what the state requires — no more. We don't sell
unnecessary filings, fabricate compliance needs, or create
urgency around obligations that don't exist.

[DollarSign icon]
Transparent, All-Inclusive Pricing
The price you see is the price you pay. State fees, registered
agent, EIN, operating agreement — included. No surprise add-ons
at checkout. No auto-renewing subscriptions you didn't authorize.

[Phone icon]
Real Humans, Always
When you call, a person answers. When you email, a person replies.
We are not an automated form processor. We are specialists who
know Wyoming and Nevada entity law.
```

### Section 6: By the Numbers

**Compact stat strip or card grid:**

```
25 Years — Specialized in WY & NV since 2000
4 States — Wyoming, Nevada, California, Florida
[X] Entities Formed — (David to provide verified count)
$525/yr — Gold renewal with year-round nominees
4 Jurisdictions — Offshore: Nevis, BVI, Panama, Hong Kong
```

**Dev Notes:**
- Entity count needs David's confirmation — the stat must be accurate and verifiable
- Numbers rendered in JetBrains Mono, large format
- Animated count-up on scroll (matching homepage pattern) — optional

### Section 7: Differentiators Summary

Compact 6-item version of the differentiators from pillar pages. Single-line each:

- Year-round nominee services (not "nominee for a day")
- Offshore records custodian (since 2012)
- All-inclusive pricing (no hidden fees)
- 25 years of specialized experience
- Real office in Reno, Nevada
- Cryptocurrency accepted (BTC, ETH, XRP, LTC, XMR)

### Section 8: CTA

```
H2: Ready to Work With Us?

CTA Primary (amber): View Packages →
CTA Secondary (outline): Contact Us →

📞 (XXX) XXX-XXXX
```

---

## 4. Technical Specifications

| Element | Value |
|---------|-------|
| **H1** | "Privacy, Asset Protection & Business Formation Specialists Since 2000." |
| **Title tag** | "About Incorporate123 — 25 Years of Privacy & Formation Expertise \| Reno, NV" |
| **Meta description** | "Privacy, asset protection, and business formation specialists since 2000. Real office in Reno, Nevada. Year-round nominee services. All-inclusive pricing. Meet the team behind Incorporate123." |
| **Schema** | Organization, LocalBusiness, Person (founder bio), BreadcrumbList |
| **Target keywords** | Not actively targeted — About pages rank for branded queries naturally |

---

## 5. Content Notes for David

1. **Professional headshot** — Needs scheduling. Brand guide specifies: approachable but authoritative. No stock photos.
2. **Office photography** — Professional photos of Kingsbury Executive Suites. 2–3 shots: exterior, interior workspace, reception area.
3. **Bio content** — David writes or provides biographical information for the founder section.
4. **Entity count** — Verified number of entities formed. Must be accurate — the brand guide explicitly warns against inflated claims (Anderson Advisors claims 157K while investor docs show ~17K).
5. **Office address** — Verify: 1795 Meadow Wood Lane, Suite 100, Reno, NV 89502 (or 235 W Pueblo St — two addresses appear in project data).
6. **Team members** — Does David want to feature additional staff, or just himself?
7. **Parent company** — Should Fidelity Solutions Limited (Hong Kong) be mentioned? Provides international credibility but raises corporate structure questions. David's call.

---

*End of Specification — About Us*
*Confidential — BIT Studios × Incorporate123 — April 2026*
