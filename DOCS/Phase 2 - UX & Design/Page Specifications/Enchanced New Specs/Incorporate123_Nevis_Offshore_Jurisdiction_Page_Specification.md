# Nevis LLC/Corp — Offshore Jurisdiction Page Specification

**Page:** Nevis LLC and Corporation Formation
**URL:** `/offshore/nevis/`
**Template Type:** Offshore Jurisdiction (shared by all 4 jurisdiction pages)
**Priority:** P1 — Launch
**Content Source:** Existing — preserve and refresh
**Parent Page:** Offshore Hub (`/offshore/`)

---

## 1. Page Purpose & Strategic Role

### 1.1 Primary Goal

Provide comprehensive, honest information about Nevis entity formation for high-net-worth prospects who have already decided they need an offshore structure (or are seriously evaluating one), and route them to a consultation. This is NOT a page that convinces visitors they need offshore — the Offshore Hub handles that filtering. This page assumes the visitor already knows what offshore means and wants jurisdiction-specific detail.

### 1.2 Why Nevis Is the Lead Offshore Jurisdiction

Nevis is Incorporate123's primary offshore offering and the most relevant jurisdiction for the target audience (U.S.-based HNW individuals seeking asset protection). Key reasons:

- **$100,000 plaintiff bond** — Nevis requires anyone filing suit against a Nevis entity to post a $100,000 bond with the court before proceedings begin. This single provision deters the vast majority of speculative lawsuits.
- **1-year statute of limitations** — Fraudulent transfer claims against a Nevis entity must be filed within 1 year. In the U.S., this window is typically 4–6 years.
- **Charging order as sole remedy** — Similar to Wyoming's domestic protection, Nevis limits creditor remedies to charging orders.
- **No recognition of foreign judgments** — A U.S. court judgment cannot be enforced directly in Nevis. The plaintiff must re-litigate the entire case under Nevis law.
- **Nevis LLC Ordinance of 1995** — Purpose-built legislation for LLC formation with asset protection in mind.

This makes Nevis the natural offshore extension of the domestic privacy/AP strategy the rest of the site promotes.

### 1.3 Position in User Journey

The Nevis page serves Journey G (Offshore Inquiry) and a subset of Journey K (HNW Trust Seeker):

```
/asset-protection/ or /privacy/ → mention of "offshore records" →
/offshore/ (hub) → /offshore/nevis/ (THIS PAGE) → consultation → $2,060+ sale
```

Or direct organic search:
```
Search "Nevis LLC formation" → /offshore/nevis/ (THIS PAGE) → consultation
```

### 1.4 Target Personas

| Persona | Arrival Path | What They Need |
|---------|-------------|----------------|
| **HNW Asset Protector** | Cross-link from AP pillar or offshore hub | Nevis-specific advantages, cost, process, and how it works with domestic structures |
| **Attorney/CPA Referral** | Direct search or referral link | Detailed jurisdictional data, statutory references, pricing for client recommendation |
| **International Entrepreneur** | Direct search "Nevis LLC" | Formation process, banking, costs, timeline, compliance obligations |

### 1.5 Success Metrics

- **Primary:** Consultation request (phone or contact form) — NOT self-service checkout
- **Secondary:** Time on page > 4 minutes (deep engagement with jurisdictional content)
- **Tertiary:** Click-through to IRS Compliance page (indicates serious consideration)
- **Conversion is consultation-gated** — No "add to cart" exists for offshore services

---

## 2. Section Order & Narrative Arc

Jurisdiction pages follow a **product-information arc**: identify → advantage → process → cost → compliance → resolve → consult. The tone is authoritative and factual — more legal-informational than the persuasion-oriented domestic pages. The visitor is sophisticated; the content must match.

| # | Section | Role | Visitor Mindset |
|---|---------|------|-----------------|
| 1 | Jurisdiction Hero | **Identify** — Confirm jurisdiction, headline advantage | "Tell me about Nevis specifically." |
| 2 | Why Nevis? | **Advantage** — 5 key jurisdictional benefits | "What makes Nevis better than other jurisdictions?" |
| 3 | Entity Types Available | **Specify** — LLC vs. Corporation in Nevis | "What kind of entity can I form?" |
| 4 | Requirements & Process | **Explain** — KYC, documentation, formation steps, timeline | "What's the process and how long does it take?" |
| 5 | Cost Breakdown | **Price** — Formation, renewal, included services, additional costs | "How much does this cost?" |
| 6 | Nevis + Domestic Structures | **Connect** — How Nevis works alongside WY/NV entities | "How does this fit with my Wyoming LLC?" |
| 7 | IRS Compliance Note | **Warn** — U.S. tax reporting obligations | "What are my tax obligations?" |
| 8 | FAQ Accordion | **Resolve** — 6–8 Nevis-specific questions | "I have more questions..." |
| 9 | Other Jurisdictions | **Navigate** — Links to BVI, Panama, Hong Kong | "Should I consider a different jurisdiction?" |
| 10 | Consultation CTA | **Convert** — Route to phone/contact | "I want to proceed. How do I start?" |

---

## 3. Section-by-Section Specification

---

### Section 1: Jurisdiction Hero

**Layout:** Full-width. Dark background — deep gray/charcoal (matching offshore hub, NOT pillar navy). Subtle Caribbean/island visual element or Nevis flag accent. Clean, authoritative.

**Height:** ~45vh desktop, auto mobile.

**Components:**
- Breadcrumb: `Home > Offshore > Nevis LLC/Corp`
- Jurisdiction name + flag/icon
- H1 headline
- Subheadline (2 sentences — headline advantage)
- Key stat strip (3 stats)
- Single CTA (consultation)

**Content:**

```
Breadcrumb: Home > Offshore > Nevis LLC/Corp

[Nevis flag element or Caribbean map accent]

H1: Nevis LLC & Corporation Formation.
    The Strongest Offshore Asset Protection
    in the World.

Subheadline: Nevis requires a $100,000 plaintiff bond before any
lawsuit can proceed against a Nevis entity. Combined with a 1-year
statute of limitations on fraudulent transfers and no recognition
of foreign judgments, Nevis provides asset protection that no
domestic jurisdiction can match.

Stats:
$100,000 Plaintiff Bond | 1-Year Fraudulent Transfer SOL | 
No Foreign Judgment Recognition

CTA (outline, NOT amber):
Schedule a Consultation About Nevis →
```

**Dev Notes:**
- CTA is outline/ghost — consultation, not transaction (consistent with offshore hub pattern)
- The $100,000 bond is the headline differentiator — it appears in the H1 subhead, the stat strip, and the "Why Nevis" section. Repetition is intentional because it's the single fact that sells this jurisdiction.
- H1 is the page's only H1. Targets "Nevis LLC formation" and "Nevis asset protection."
- No price in the hero — offshore pricing is complex and discussed during consultation. The Cost Breakdown section handles pricing.

---

### Section 2: Why Nevis?

**Layout:** Light background. 5 advantage blocks in a grid (3+2 desktop, 1-column mobile). Each block has an icon, title, and 2–3 sentence description.

**Purpose:** Comprehensive jurisdictional advantages. This section must contain enough detail for an attorney or CPA to evaluate Nevis on behalf of their client. The content is more technical than domestic pages because the audience is more sophisticated.

**Components:**
- Eyebrow: `WHY NEVIS`
- H2 headline
- 5 advantage blocks

**Content:**

```
Eyebrow: WHY NEVIS

H2: Five Reasons Nevis Leads in Offshore Asset Protection

[Gavel icon]
$100,000 Plaintiff Bond Requirement
Before filing suit against a Nevis LLC or corporation, the
plaintiff must post a $100,000 bond with the Nevis court. This
bond is forfeited if the plaintiff loses. This single provision
eliminates the vast majority of speculative and frivolous lawsuits
— a plaintiff must be confident enough in their case to risk
$100,000 before proceedings even begin.

[Clock icon]
1-Year Statute of Limitations on Fraudulent Transfers
In the United States, fraudulent transfer claims can be filed
4–6 years after the transfer. In Nevis, the statute of limitations
is 1 year. If assets are transferred to a Nevis entity and no
fraudulent transfer claim is filed within 12 months, the transfer
is essentially beyond challenge. For asset protection planning,
this dramatically reduces the window of vulnerability.

[Shield icon]
No Recognition of Foreign Judgments
A U.S. court judgment cannot be enforced directly in Nevis.
A plaintiff who wins a judgment in the United States must
re-litigate the entire case from scratch in Nevis courts,
under Nevis law, after posting the $100,000 bond. The cost
and complexity of this process deters all but the most
determined and well-funded litigants.

[Lock icon]
Charging Order as Sole Remedy
Similar to Wyoming's domestic protection, Nevis limits a
creditor's remedy against an LLC member's interest to a
charging order. The creditor cannot seize LLC assets, force
liquidation, or take over management. This protection applies
to both single-member and multi-member Nevis LLCs.

[FileText icon]
Purpose-Built LLC Legislation
The Nevis Limited Liability Company Ordinance of 1995 was
drafted specifically to create a favorable legal framework for
international LLC formation and asset protection. Unlike
jurisdictions that adapted existing corporate law, Nevis
built its LLC statute from the ground up with asset protection
as a primary design objective.
```

**Dev Notes:**
- These blocks are more detailed than domestic advantage blocks (3 sentences vs. 2) because the audience is more sophisticated
- Statutory references (Nevis LLC Ordinance of 1995) add credibility and are expected by attorney/CPA referrals
- No CTA in this section — the advantages build the case; the cost section and consultation CTA close it

---

### Section 3: Entity Types Available

**Layout:** White background. Two-column comparison — Nevis LLC vs. Nevis Corporation.

**Purpose:** Explain the choice between LLC and Corporation in the Nevis context. Most visitors will choose LLC (simpler, same protections), but corporations are available for specific use cases.

**Components:**
- Eyebrow: `ENTITY OPTIONS`
- H2 headline
- Two-column comparison
- Recommendation callout

**Content:**

```
Eyebrow: ENTITY OPTIONS

H2: Nevis LLC vs. Nevis Corporation

LEFT — NEVIS LLC (Recommended)
Formed under the Nevis LLC Ordinance of 1995.
• Flexible management structure — no board required
• Charging order as sole creditor remedy
• No minimum capital requirements
• Privacy: member names not on public record
• Annual maintenance: government fees + registered agent
• Pass-through taxation available for U.S. persons (Form 8832)
Best for: Asset protection, holding structures, privacy

Formation: $2,060 | Renewal: $1,535/yr

RIGHT — NEVIS CORPORATION (IBC)
Formed under the Nevis Business Corporation Ordinance.
• Board of directors required (nominee directors available)
• Bearer shares prohibited (converted to registered shares)
• No minimum capital requirements
• Privacy: shareholder names not on public record
• Annual maintenance: government fees + registered agent
Best for: International trade, multi-shareholder structures,
businesses requiring corporate formality

Formation: $2,290 | Renewal: $1,535/yr

Recommendation:
"For most asset protection and privacy purposes, a Nevis LLC
is the better choice. It provides the same $100,000 bond protection
and fraudulent transfer limitations as a corporation, with simpler
management and pass-through taxation for U.S. persons."
```

**Dev Notes:**
- LLC column highlighted with subtle accent (recommended)
- Prices in JetBrains Mono
- The "bearer shares prohibited" note on Corporation is important — bearer shares were a historical privacy tool that most jurisdictions have now eliminated. Visitors may ask about them.

---

### Section 4: Requirements & Process

**Layout:** Light gray background. Stepped process (5–6 steps) + KYC documentation requirements.

**Purpose:** Show exactly what's required and what happens at each stage. Offshore formation is more complex than domestic — the process section must be thorough to build confidence. The KYC requirements are a gate that domestic formation doesn't have, and visitors need to know about them upfront.

**Components:**
- Eyebrow: `FORMATION PROCESS`
- H2 headline
- KYC documentation requirements (checklist)
- 5-step formation process
- Timeline estimate

**Content:**

```
Eyebrow: FORMATION PROCESS

H2: How Nevis Formation Works

KYC DOCUMENTATION REQUIRED
Before formation begins, you must provide:
□ Certified copy of passport (notarized)
□ Copy of driver's license or government-issued ID
□ Proof of residential address (utility bill or bank statement,
  dated within 3 months)
□ Professional reference letter (from attorney, CPA, or banker)
□ Brief description of intended business activity

"KYC (Know Your Customer) compliance is required by Nevis law
and international anti-money-laundering standards. We guide you
through the documentation process."

FORMATION STEPS

Step 1: Consultation & Engagement
We discuss your goals, recommend LLC or Corporation, and confirm
Nevis is the appropriate jurisdiction for your needs. You provide
KYC documentation.

Step 2: KYC Review & Entity Preparation
Our Nevis registered agent reviews your KYC documentation.
Entity formation documents are prepared, including Articles of
Organization (LLC) or Articles of Incorporation (Corp).

Step 3: Government Filing
Formation documents are filed with the Nevis Registrar of
Companies. Government registration fees are included in your
formation package.

Step 4: Nominee Appointment & Records
Offshore nominee director/manager is appointed. Corporate records
(operating agreement or bylaws, resolutions, certificates) are
prepared and maintained by our offshore custodian.

Step 5: Banking (Optional)
Offshore bank account opening assistance is available ($500
additional). The nominee director facilitates the account opening
process. Bank processing takes an additional 4–8 weeks after entity
formation.

TIMELINE
Entity formation: 2–3 weeks from KYC approval
Bank account (if requested): Additional 4–8 weeks
Total from engagement to fully operational: 6–11 weeks
```

**Dev Notes:**
- The KYC checklist is critical — domestic formation requires no identity verification. Offshore does. Surfacing this early prevents surprises during engagement.
- Steps are numbered and sequential — offshore formation is inherently more complex than domestic, and the process clarity reduces perceived complexity
- Timeline is honest and includes the bank account delay — under-promising and over-delivering is essential for high-value services

---

### Section 5: Cost Breakdown

**Layout:** White background. Structured pricing table showing formation cost, renewal cost, and itemized inclusions.

**Purpose:** Transparent pricing for a service that many competitors leave opaque. Full itemization of what's included in the formation package and what costs extra.

**Components:**
- Eyebrow: `PRICING`
- H2 headline
- Pricing table: LLC vs. Corp, formation vs. renewal
- Inclusions list
- Additional costs
- Value context

**Content:**

```
Eyebrow: PRICING

H2: Nevis Formation — All-Inclusive Pricing

FORMATION COSTS
| Entity Type | Formation | Annual Renewal |
|-------------|-----------|----------------|
| Nevis LLC   | $2,060    | $1,535/yr      |
| Nevis Corp  | $2,290    | $1,535/yr      |

INCLUDED IN FORMATION PACKAGE
✓ Government registration fees
✓ Registered agent and registered office in Nevis
✓ Offshore company secretary
✓ Offshore nominee director/manager
✓ Certificate of Incorporation/Formation
✓ Operating agreement (LLC) or bylaws (Corp)
✓ Membership certificates (LLC) or stock certificates (Corp)
✓ IRS pass-through election assistance (Form 8832, U.S. persons)
✓ KYC administration and compliance review

ADDITIONAL COSTS (NOT INCLUDED)
+ $500 — Offshore bank account opening assistance (optional)
+ $150 — KYC administration fee (per beneficial owner)
+ Annual IRS reporting costs (Form 5471/8865 preparation — 
  handled by your CPA, not Incorporate123)

RENEWAL INCLUDES
✓ Government annual fees
✓ Registered agent and registered office renewal
✓ Nominee director/manager maintenance
✓ Corporate records maintenance
✓ Good standing certificate (upon request)

"All pricing is fixed and disclosed upfront. No hidden fees,
no surprise charges during or after formation."
```

**Dev Notes:**
- All prices in JetBrains Mono
- The $150 KYC fee is "per beneficial owner" — this needs David's verification. If a structure has 3 beneficial owners, is it 3 × $150?
- The "annual IRS reporting costs" callout is important — these are the visitor's obligation to their CPA, not an Incorporate123 charge. Being explicit about this prevents post-sale disputes.
- No "value comparison" section like domestic pages — offshore doesn't compete with $0 providers. The pricing stands on its own merit.

---

### Section 6: Nevis + Domestic Structures

**Layout:** Light background. Two-column or visual diagram showing how Nevis fits with domestic WY/NV entities.

**Purpose:** Connect the Nevis page back to the domestic site architecture. Most Nevis visitors already have (or will get) a domestic entity. This section shows how the two layers work together.

**Components:**
- Eyebrow: `COMBINED STRUCTURES`
- H2 headline
- 2–3 common structure combinations
- Links back to domestic pages

**Content:**

```
Eyebrow: COMBINED STRUCTURES

H2: How Nevis Works Alongside Your Domestic Entity

STRUCTURE 1: Wyoming LLC + Nevis LLC
Most common combination for asset protection.
Your Wyoming LLC handles domestic operations with nominee
services and privacy. The Nevis LLC holds high-value assets
that need the strongest possible protection. A U.S. creditor
must navigate both Wyoming's charging order protection AND
Nevis's $100,000 bond requirement.
→ Wyoming Gold Package (/wyoming-private-incorporation/)

STRUCTURE 2: Domestic Holding LLC + Nevis Asset Entity
The domestic holding LLC (WY or NV) holds operating interests.
The Nevis LLC holds investment assets, intellectual property,
or other high-value assets that benefit from jurisdictional
separation. Creditors targeting the domestic entity cannot
reach assets held in the Nevis entity.
→ Investment Holding LLC (/investment-holding-llc/)

STRUCTURE 3: Nevis LLC + Offshore Trust
For maximum protection and estate planning. A Bahamas Dynasty
Trust (no rule against perpetuities) holds the membership
interest of the Nevis LLC. The trust provides estate planning
benefits; the Nevis LLC provides asset protection. This is the
most sophisticated structure available.
→ Contact us to discuss trust structures

"Not sure which structure fits? That's exactly what the
consultation is for. We help you determine the right combination
of domestic and international entities based on your specific
situation."
```

**Dev Notes:**
- This section is the bridge between offshore and domestic content — critical for internal linking and user experience
- Structure 1 links back to Wyoming Gold (the domestic hero product)
- Structure 2 links to the Investment Holding LLC cluster page (AP pillar)
- Structure 3 references Bahamas trusts — David needs to confirm whether this is an active offering and whether it needs its own page

---

### Section 7: IRS Compliance Note

**Layout:** White background. Warning callout with amber left border. Compact — NOT the full IRS Compliance treatment (that lives on `/offshore/irs-compliance/`). This is a reminder + link.

**Purpose:** Every jurisdiction page must include a compliance reminder. This is the per-page version of the offshore hub's Section 5 — shorter, linking to the full guide for depth.

**Components:**
- Warning callout (amber border)
- 4 key obligations (one-line each)
- CTA to full IRS Compliance page

**Content:**

```
[Amber border callout]

⚠ U.S. TAX OBLIGATIONS

If you are a U.S. citizen, resident, or green card holder,
owning a Nevis entity triggers federal reporting requirements:

• FBAR (FinCEN 114) — Foreign accounts exceeding $10,000 aggregate
• Form 5471 / 8865 — Informational return for foreign entity ownership
• GILTI — Potential tax on controlled foreign corporation income
• FATCA — Global financial institution reporting to IRS

"Failure to comply can result in significant penalties.
We strongly recommend consulting a CPA or international tax
attorney before proceeding."

→ Full IRS Compliance Guide (/offshore/irs-compliance/)
```

**Dev Notes:**
- This is a condensed version of the hub's IRS section — 4 bullet points + link, not full descriptions
- The warning appears on EVERY jurisdiction page (Nevis, BVI, Panama, Hong Kong) — it's a template component
- Positioned after pricing and structural information so the visitor has full context before seeing compliance obligations

---

### Section 8: FAQ Accordion

**Layout:** Light background. Single column. 6–8 Nevis-specific questions.

**Purpose:** Handle jurisdiction-specific questions. These are more technical than domestic FAQs because the audience is more sophisticated. FAQ schema markup for organic search capture.

**Components:**
- Eyebrow: `FREQUENTLY ASKED QUESTIONS`
- H2 headline
- 6–8 accordion items

**Content:**

```
Eyebrow: FREQUENTLY ASKED QUESTIONS

H2: Nevis Formation — Questions Answered

Q: What is the $100,000 plaintiff bond requirement?
A: Under Nevis law, any person or entity wishing to file a
lawsuit against a Nevis LLC or corporation must first post a
$100,000 bond with the Nevis court. This bond is forfeited if
the plaintiff loses the case. The requirement applies to all
civil suits, including those originating from foreign judgments.
The effect is to deter speculative litigation — a plaintiff must
have a high-confidence case to risk $100,000 before proceedings
begin.

Q: Can a U.S. court force me to repatriate assets held in a Nevis entity?
A: U.S. courts can issue orders directing a U.S. person to
repatriate assets. However, the enforceability of such orders
against a Nevis entity depends on whether the entity is structured
with independent management (nominee directors) and whether the
U.S. person retains sufficient control to comply. Proper structuring
with nominee management creates a defensible position. This is a
complex legal area — we recommend discussing specific scenarios with
an asset protection attorney.

Q: How does Nevis compare to other offshore jurisdictions for asset protection?
A: Nevis offers the strongest combination of asset protection features
for U.S.-based clients: the plaintiff bond ($100K, unique to Nevis),
the short fraudulent transfer statute (1 year vs. 2+ years in Cook
Islands, BVI, etc.), and sole-remedy charging order protection. The
Cook Islands have a longer track record and their own strong
protections, but Nevis's plaintiff bond requirement is unmatched.
BVI is better suited for international trade and holding companies.
Panama foundations serve estate planning. Hong Kong serves Asia-Pacific
operations.

Q: Do I need to visit Nevis to form an entity there?
A: No. The entire formation process is handled remotely. KYC
documentation is submitted electronically (with certified/notarized
copies). Our Nevis registered agent handles all filings with the
Registrar of Companies. You do not need to travel to Nevis at
any point.

Q: Can I open a Nevis bank account?
A: Yes. We provide offshore bank account opening assistance ($500)
through banking relationships in the Caribbean region. The nominee
director facilitates the account opening, and account access is
released to authorized signatories upon approval. Processing typically
takes 4–8 weeks due to enhanced compliance requirements for
international accounts. Note: U.S. persons must report foreign
accounts exceeding $10,000 aggregate value (FBAR requirement).

Q: What is the Nevis LLC Ordinance of 1995?
A: The Nevis Limited Liability Company Ordinance of 1995 is the
legislation that governs LLC formation in the Federation of St. Kitts
and Nevis. It was specifically designed to create a favorable legal
framework for international LLC formation and asset protection. Key
provisions include charging order as sole creditor remedy, the
$100,000 plaintiff bond requirement, and the 1-year statute of
limitations on fraudulent transfer claims.

Q: How do I maintain a Nevis entity on an ongoing basis?
A: Annual renewal ($1,535/yr) covers government fees, registered
agent and office maintenance, nominee director continuation, and
corporate records maintenance. You do not need to file annual reports
with the Nevis government in the same way as U.S. entities. However,
U.S. persons must file annual IRS informational returns (Form 5471
or 8865) — your CPA handles these.

Q: Is a Nevis entity subject to Nevis taxes?
A: No. Nevis does not impose income tax, capital gains tax, or
withholding tax on entities formed under the LLC Ordinance or IBC
provisions that do not conduct business within St. Kitts and Nevis.
However, U.S. persons who own Nevis entities are subject to U.S.
federal taxation on worldwide income, including GILTI provisions
for controlled foreign corporations. Nevis tax neutrality does not
eliminate U.S. tax obligations.
```

**Dev Notes:**
- FAQPage schema markup (JSON-LD) on all items
- These FAQs are more technical than domestic FAQs — statutory references, repatriation orders, CFC classification
- The "repatriate assets" FAQ is the most legally sensitive — the answer must be carefully hedged ("complex legal area — consult an attorney") because this touches on contempt of court scenarios
- The "Cook Islands" comparison reference demonstrates Incorporate123's knowledge of the broader offshore landscape

---

### Section 9: Other Jurisdictions

**Layout:** Light background. 3 compact cards linking to BVI, Panama, Hong Kong.

**Purpose:** Allow jurisdiction shopping without returning to the hub. A visitor evaluating Nevis may want to compare with BVI or Panama directly.

**Components:**
- H2 headline
- 3 compact cards

**Content:**

```
H2: Explore Other Jurisdictions

Card 1: British Virgin Islands (BVI)
International Business Company (IBC). World's most popular offshore
jurisdiction. Suited for holding companies and international trade.
From $3,200.
→ Learn About BVI (/offshore/bvi/)

Card 2: Panama
Private Interest Foundation. No owners, no shareholders. Asset
protection through structural separation. From $[TBD].
→ Learn About Panama (/offshore/panama/)

Card 3: Hong Kong
Limited Company. Asia-Pacific market access, favorable tax treatment,
strong banking infrastructure. From $[TBD].
→ Learn About Hong Kong (/offshore/hong-kong/)
```

**Dev Notes:**
- Cards are compact — one sentence + price + link
- These are navigation links, not recommendations — the page doesn't argue that another jurisdiction is better than Nevis

---

### Section 10: Consultation CTA

**Layout:** Dark background (deep gray, matching offshore hub). Centered. Consultation-oriented.

**Components:**
- H2 headline
- Supporting text
- Dual CTA (consultation + phone)
- Domestic redirect for visitors who decide they don't need offshore

**Content:**

```
H2: Ready to Discuss Nevis Formation?

Every offshore engagement begins with a consultation.
We discuss your asset protection goals, confirm Nevis is the
right jurisdiction, and outline the formation process,
documentation requirements, timeline, and costs.

CTA (outline): Schedule a Consultation →
CTA (outline): Call (XXX) XXX-XXXX — Reno, Nevada

Below CTAs:
"Decided offshore isn't necessary? Most clients achieve
strong privacy and asset protection with a domestic
Wyoming Gold package."
→ Wyoming Gold — $1,275 (/wyoming-private-incorporation/)
→ Back to Offshore Hub (/offshore/)
```

**Dev Notes:**
- Same CTA pattern as offshore hub — outline buttons, NOT amber
- The domestic redirect is critical — it catches visitors who explored offshore, decided it's too complex/expensive, and routes them back to the $1,275 Wyoming Gold package instead of losing them entirely

---

## 4. Page-Level Technical Specifications

### 4.1 SEO

| Element | Specification |
|---------|---------------|
| **H1** | "Nevis LLC & Corporation Formation. The Strongest Offshore Asset Protection in the World." |
| **Title tag** | "Nevis LLC Formation — $100K Plaintiff Bond, Offshore Asset Protection \| Incorporate123" |
| **Meta description** | "Form a Nevis LLC or Corporation for offshore asset protection. $100,000 plaintiff bond requirement, 1-year fraudulent transfer statute, charging order sole remedy. Formation from $2,060. 25 years of experience." |
| **Canonical** | `https://incorporate123.com/offshore/nevis/` |
| **Schema** | FAQPage, Product (with offers for LLC and Corp), BreadcrumbList |
| **Target keywords** | No active targeting (per strategy). Natural coverage: Nevis LLC, Nevis LLC formation, Nevis asset protection, Nevis offshore, Nevis company formation, St Kitts Nevis LLC |
| **Internal links out** | `/offshore/` (hub, breadcrumb), `/offshore/bvi/`, `/offshore/panama/`, `/offshore/hong-kong/`, `/offshore/irs-compliance/`, `/wyoming-private-incorporation/` (domestic redirect), `/investment-holding-llc/` (combined structures) |
| **Internal links in** | `/offshore/` (jurisdiction card), `/asset-protection/` (contextual offshore mention), Gold package pages (offshore records tooltip link — if included), `/about/` (international capabilities) |

### 4.2 Responsive Behavior

| Breakpoint | Behavior |
|-----------|----------|
| Desktop (>1024px) | Full layout. Two-column entity comparison, single-column process steps, pricing table. No sidebar — consultation pages don't need running totals. |
| Tablet (768–1024px) | Full-width everything. Entity comparison side-by-side maintained. |
| Mobile (<768px) | Single column throughout. Entity comparison stacks (LLC on top). No sticky bottom CTA bar (consultation-oriented). |

### 4.3 Performance

- Lightweight — primarily text content
- No interactive elements (no toggle, no configurator, no sidebar)
- FAQ accordion lazy-loaded
- Flag/icon SVGs are minimal weight

---

## 5. Offshore Jurisdiction Template — Application to Other Pages

The Nevis spec serves as the **canonical reference** for the other 3 jurisdiction pages. Below are the per-jurisdiction deviations.

### 5.1 BVI Company (`/offshore/bvi/`)

| Dimension | Nevis | BVI |
|-----------|-------|-----|
| Entity type | LLC and Corporation | International Business Company (IBC) only |
| Headline advantage | $100K plaintiff bond | World's most popular offshore jurisdiction |
| Asset protection focus | Primary (Nevis is AP-first) | Secondary (BVI is trade/holding-first) |
| Key advantages | Plaintiff bond, 1-yr SOL, charging order | Flexible corporate law, no local taxation, global recognition, speed of formation |
| Pricing | LLC $2,060 / Corp $2,290 / renewal $1,535 | IBC $3,200 / renewal $1,950 |
| Entity comparison section | LLC vs. Corp (two columns) | Single entity type — NO comparison needed |
| Primary use case | Asset protection, holding | Holding companies, international trade, investment vehicles |
| "Why [Jurisdiction]?" blocks | Plaintiff bond, SOL, no foreign judgments, charging order, LLC Ordinance | Flexibility, no taxation, confidentiality, global recognition, regulatory framework |
| Combined structures | WY LLC + Nevis LLC for AP | WY LLC + BVI IBC for international holding |
| FAQ tone | Asset protection technical | International commerce practical |

**BVI-specific FAQ additions:**
- "What happened to bearer shares?" (Prohibited since 2006 — all shares must be registered)
- "Can a BVI company open a U.S. bank account?" (Yes, with proper documentation)
- "Is BVI subject to EU regulations?" (BVI is a British Overseas Territory — subject to certain UK/EU regulatory frameworks)

### 5.2 Panama Foundation (`/offshore/panama/`)

| Dimension | Nevis | Panama |
|-----------|-------|--------|
| Entity type | LLC and Corporation | Private Interest Foundation (unique entity type) |
| Headline advantage | $100K plaintiff bond | No owners, no shareholders — structural separation |
| Key concept | Asset protection through legal barriers | Asset protection through ownership elimination |
| Key advantages | Plaintiff bond, SOL, charging order | No beneficial ownership disclosure, council-managed, no taxation on foreign income |
| Pricing | LLC $2,060 / Corp $2,290 / renewal $1,535 | $[TBD] / renewal $[TBD] |
| Entity comparison section | LLC vs. Corp | NO comparison — single entity type (foundation) |
| "How It Works" unique | Standard KYC + formation | Must explain foundation concept: founder transfers assets → council manages → beneficiaries receive distributions |
| Primary use case | Asset protection | Estate planning, generational wealth, structural privacy |
| Combined structures | WY LLC + Nevis LLC | Wyoming LLC (operations) + Panama Foundation (holds LLC interest) |

**Panama-specific educational addition:**
Section 3 must explain **what a Private Interest Foundation is** — this entity type doesn't exist in U.S. law and visitors won't recognize it. The explanation: "A foundation has no owners. The founder transfers assets to the foundation, which is managed by a council. The council manages assets for the benefit of named beneficiaries. Because there are no owners, there is nothing for a creditor to seize or attach."

**Panama pricing is TBD — David must provide.**

### 5.3 Hong Kong Company (`/offshore/hong-kong/`)

| Dimension | Nevis | Hong Kong |
|-----------|-------|-----------|
| Entity type | LLC and Corporation | Limited Company |
| Headline advantage | $100K plaintiff bond | Asia-Pacific market access + favorable tax |
| Primary purpose | Asset protection | International trade, Asia operations, banking access |
| Asset protection focus | Primary | Not primary — HK is a business-operations jurisdiction, not an AP jurisdiction |
| Key advantages | Plaintiff bond, SOL, charging order | China market access, 8.25%/16.5% tax rate, strong banking, globally recognized |
| Pricing | LLC $2,060 / Corp $2,290 / renewal $1,535 | $[TBD] / renewal $[TBD] |
| Entity comparison section | LLC vs. Corp | NO comparison — single entity type (Limited Company) |
| Combined structures | WY LLC + Nevis LLC for AP | Wyoming LLC (domestic) + HK Ltd (Asia operations/banking) |
| IRS compliance emphasis | GILTI focus (CFC classification) | Profits Tax regime, DTA with U.S. if applicable |
| "Why [Jurisdiction]?" tone | Asset protection legal | Business opportunity practical |

**Hong Kong-specific considerations:**
- The page must address the political context honestly — Hong Kong's relationship with mainland China has evolved. The content should note that HK remains a separate legal jurisdiction with its own corporate law and tax system, while acknowledging that the regulatory environment is subject to change.
- Tax treatment is more complex than Nevis/BVI/Panama — HK has a territorial tax system (only HK-sourced income is taxed), but the 2-tier profits tax (8.25% on first HKD 2M, 16.5% thereafter) is not "zero tax" like the others.

**Hong Kong pricing is TBD — David must provide.**

---

## 6. Content Notes for David

1. **Nevis LLC Ordinance of 1995** — Verify this is the correct statutory reference and that it hasn't been amended/replaced.
2. **$100,000 plaintiff bond** — Verify this is the current requirement under Nevis law. Has the amount changed?
3. **1-year SOL** — Verify the fraudulent transfer statute of limitations is still 1 year.
4. **No foreign judgment recognition** — Verify this is accurate and hasn't been modified by treaty or legislative change.
5. **KYC requirements** — Verify the documentation list (certified passport, driver's license, proof of address, professional reference, business description). Is anything missing?
6. **$150 KYC fee** — Per beneficial owner? Per entity? Verify.
7. **$500 bank account opening** — Still offered? Still this price?
8. **Formation timeline** — 2–3 weeks from KYC approval. Verify.
9. **Bank account timeline** — 4–8 weeks additional. Verify.
10. **Renewal inclusions** — Verify what's covered in the $1,535 annual renewal.
11. **Bahamas Dynasty Trust** — Referenced in combined structures (Structure 3). Is this an active product? Does it need its own page?
12. **Cook Islands comparison** — The FAQ mentions Cook Islands as a competitor jurisdiction. Is David comfortable with this reference?
13. **Panama and Hong Kong pricing** — Not available in any project source. Provide formation and renewal costs for both.
14. **"Repatriate assets" FAQ** — This is legally sensitive. David should review this answer with his own legal counsel before publishing.
15. **Bearer shares FAQ (BVI)** — Verify BVI bearer share prohibition date (2006 or later).
16. **Hong Kong political context** — How does David want to address HK's evolving regulatory relationship with mainland China? Ignore, acknowledge briefly, or discuss in detail?

---

## 7. Design Tokens Reference

| Token | Value | Usage |
|-------|-------|-------|
| Hero background | Deep gray `#1a1a2e` (matching offshore hub) | Hero section |
| Jurisdiction accent | Neutral — no pillar color | Card borders, icons (offshore is outside pillar system) |
| CTA style | Outline/ghost (NOT amber) | All CTAs — consultation, not transaction |
| Warning accent | Amber `#d97706` | IRS compliance callout border |
| Price font | JetBrains Mono | All prices, government fees, renewal costs |
| Body font | Inter | All body text |
| Heading font | Outfit | H1, H2 |
| Final CTA background | Deep gray (matching hero) | Section 10 |

---

## 8. How Jurisdiction Pages Differ From Other Page Types

| Dimension | Cluster Page | Package Page | State Hub | **Jurisdiction Page** |
|-----------|-------------|-------------|-----------|---------------------|
| Belongs to pillar system | Yes | Yes | Cross-pillar | **No — outside pillars** |
| CTA style | Amber (transactional) | Amber (transactional) | Amber (transactional) | **Outline (consultation)** |
| Self-service purchase | Routes to package | Routes to checkout | Routes to packages | **No — consultation required** |
| Sidebar | Sticky with links | Sticky running total | None | **None** |
| Compliance warnings | None | Guarantee badge | None | **IRS compliance section on every page** |
| KYC/documentation section | None | None | None | **Yes — unique to offshore** |
| Entity comparison | Not applicable | LLC/Corp toggle (dynamic) | Not applicable | **LLC vs. Corp static comparison** |
| Audience sophistication | Mixed | Mixed-to-high | Mixed | **High — attorneys, CPAs, HNW individuals** |
| Content tone | Educational, accessible | Transactional, confirming | Routing, geographic | **Authoritative, factual, technically precise** |
| Domestic redirect | Not needed | Silver fallback | Not needed | **Yes — "domestic is sufficient for most clients"** |
| FAQ technical level | Moderate | Transactional | State-specific | **High — statutory references, repatriation, CFC classification** |
| Price visibility | Cluster grid | Full breakdown + sidebar | Quick-link cards | **Static table — no configurator, no dynamic pricing** |

---

*End of Specification*
*Confidential — BIT Studios × Incorporate123 — April 2026*
