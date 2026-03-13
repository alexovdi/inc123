# Incorporate123 — FAQ / Resource Page Content Guide

**URL:** `/faq/` · **Template:** Resource/FAQ (unique)  
**Phase:** 2 — UX & Interactive Prototyping  
**Based on:** FAQ Page Wireframe Spec, Brand Guide v2, Content Migration Map, Discovery Report  

---

## Wireframe Improvement Notes

### 1. Search Bar Is the Right Call — But Needs Empty-State UX

The wireframe specifies real-time filtering with a "No questions match" fallback. Good. But the empty state should do more than show a message and phone number — it should suggest related categories or popular questions.

**Recommendation:** Empty state: "No questions match '[search term].' Try these popular topics:" followed by 3–4 popular question links (What is an anonymous LLC? · How much does formation cost? · Gold vs Silver difference?). Then the phone number.

### 2. 45 Questions Is a Lot — Group Headers Need Visual Weight

With 45 questions across 7 categories, the page can feel overwhelming. The wireframe groups by category with H2 headers, which is correct. But the headers need enough visual weight to serve as clear section breaks — a colored left border using each pillar's identity color would do this elegantly.

**Recommendation:** Each category header gets a 4px left border in its pillar identity color (blue for Privacy, green for AP, amber for Formation, purple for Compliance, neutral for Packages & General). This creates instant visual navigation without adding complexity.

### 3. FAQ Answers Should Link to Deeper Content More Aggressively

The wireframe includes "Learn more →" links in some answers. This should be universal — every FAQ answer that maps to a cluster or pillar page should end with a link. FAQs are entry points; cluster pages are the destination. This also strengthens internal linking for SEO.

**Recommendation:** Make "Read the full guide →" or "Learn more →" links mandatory for any answer that references a topic covered by a cluster page. The FAQ answer gives the summary; the cluster page gives the depth.

### 4. "Related Guides" Per Category Is Strong — Keep It

The wireframe places 2 contextual guide links at the end of each category section. This is one of the best patterns in the spec — it turns the FAQ from a dead-end reference page into a navigation hub. No change needed, just emphasizing this should survive any future simplification.

### 5. Bottom CTA Should Prioritize Phone on This Page

The wireframe's bottom CTA has "Call (775) 555-0123" as primary, "Send Us a Message" as secondary, and "View Packages & Pricing" as tertiary. This is the correct hierarchy for a FAQ page — visitors here have questions, and calling is the natural escalation from "I couldn't find my answer."

**Recommendation:** No change needed. This is correctly prioritized. The sticky mobile bar should also be phone-first (same as Contact page).

---

## Section-by-Section Content Guide

---

## FAQ Hero

| Element | Content | Notes |
|---------|---------|-------|
| **Eyebrow** | "Resources" | |
| **H1** | "Frequently Asked Questions" | Clean, direct. No need for marketing language on a utility page. |
| **Subheadline** | "Answers to common questions about business privacy, asset protection, LLC formation, compliance, and our services. Can't find what you're looking for? Call us at (775) xxx-xxxx." | Lists all four pillars + phone number. The phone CTA in the subheadline catches visitors who'd rather call than search. |

---

## Search Bar

The single most important interaction on this page.

| Element | Content |
|---------|---------|
| **Input** | Large, prominent. Placeholder: "Search questions... e.g., 'nominee officer' or 'Wyoming annual report'" |
| **Behavior** | Real-time filtering (debounced ~200ms). Matches question text AND answer text. |
| **Result count** | "Showing 8 of 45 questions" — updates in real time |
| **Clear button** | "✕" inside input when text is present |
| **Empty state** | "No questions match '[term].' Try these popular topics:" + 3–4 popular question links + phone number |

---

## Category Filter Pills

| Category | Pillar Color | Question Count |
|----------|-------------|----------------|
| All (default) | Neutral | 45 |
| Privacy | Blue `#2563eb` | ~12 |
| Asset Protection | Green `#16a34a` | ~8 |
| Formation | Amber `#d97706` | ~10 |
| Compliance | Purple `#9333ea` | ~6 |
| Packages & Pricing | Neutral/brand | ~5 |
| General | Muted | ~4 |

**Behavior:** Click to filter. Combines with search. "All" is default. Active pill highlighted. Desktop: horizontal pill row. Mobile: horizontal scroll.

---

## FAQ Content — Category by Category

### Default View (Category Grouping)

Questions grouped under H2 category headers. Each header has a 4px left border in pillar identity color and a question count label.

### Search/Filter View (Flat List)

When search is active, switch to a flat filtered list. Category shown as a small pill badge on each question row.

---

### Privacy Questions (12)

| # | Question | Answer Direction | "Learn More" Link |
|---|----------|-----------------|-------------------|
| 1 | "What is an anonymous LLC?" | Standard LLC formed in privacy-friendly state with nominees replacing your name on filings. | `/anonymous-llc/` |
| 2 | "What states allow anonymous LLCs?" | Wyoming (strongest), Nevada, New Mexico (limited advantages). | `/best-state-for-privacy/` |
| 3 | "What is a nominee officer?" | Person or entity appearing on public records in place of actual owner. Year-round vs. formation-day distinction. | `/nominee-services/` |
| 4 | "What's the difference between year-round nominees and 'nominee for a day'?" | Year-round: every filing, every year. "Nominee for a day": only at formation, then your name appears on subsequent filings. Most competitors offer the latter. | `/nominee-services/` |
| 5 | "Do I still need a nominee with BOI reporting?" | Yes — BOI goes to FinCEN (not public). Nominees protect against public state records searches, which are separate from BOI. | `/boi-reporting/` |
| 6 | "What is an offshore records custodian?" | Corporate records maintained offshore, outside U.S. subpoena jurisdiction. Unique to Incorporate123, free in Gold. | `/privacy/` |
| 7 | "Can someone find out who owns my anonymous LLC?" | With proper nominee services, your name doesn't appear in any publicly searchable state database. IRS records and BOI filings are not public. | `/anonymous-llc/` |
| 8 | "Is forming an anonymous LLC legal?" | Yes, completely legal. Privacy is not secrecy — you still file taxes and comply with federal reporting. | `/anonymous-llc/` |
| 9 | "What is the Corporate Transparency Act?" | Federal law requiring beneficial ownership reporting to FinCEN. Doesn't eliminate the value of nominees for state-level privacy. | `/boi-reporting/` |
| 10 | "How do offshore nominee directors work?" | Based outside U.S. jurisdiction, providing an additional privacy layer beyond domestic nominees. Included free since 2012. | `/privacy/` |
| 11 | "Can I use an anonymous LLC for real estate?" | Yes — common strategy. Anonymous ownership prevents public property records from linking assets to you. | `/anonymous-llc/` |
| 12 | "What's the difference between privacy and asset protection?" | Privacy hides your name. AP shields assets from lawsuits. Complementary — most clients need both. | `/asset-protection/` |

### Asset Protection Questions (8)

| # | Question | Answer Direction | Link |
|---|----------|-----------------|------|
| 1 | "What is charging order protection?" | Legal mechanism limiting creditors to economic distributions only — they can't seize LLC assets or force a sale. | `/charging-order-protection/` |
| 2 | "Does Wyoming protect single-member LLCs?" | Yes — Wyoming extends charging order protection to single-member LLCs. Most states don't. | `/wyoming-asset-protection/` |
| 3 | "LLC vs living trust for asset protection?" | Different tools for different purposes. LLCs protect business assets; trusts handle estate planning and personal assets. | `/llc-vs-living-trust/` |
| 4 | "How much in assets before AP makes sense?" | Generally $500K+ in total assets. At this level, the cost of AP structures is justified by litigation risk reduction. | `/asset-protection/` |
| 5 | "Can creditors pierce the veil?" | Possible if the LLC is improperly maintained (commingled funds, no records). Proper compliance prevents this. | `/asset-protection/` |
| 6 | "What is a holding LLC?" | An LLC that owns other LLCs or assets. Creates separation between operating businesses and valuable assets. | `/investment-holding-llc/` |
| 7 | "Wyoming or Nevada for asset protection?" | Both strong. WY protects single-member LLCs. NV offers additional director protections for Corps. | `/wyoming-vs-nevada-asset-protection/` |
| 8 | "Do I need both privacy AND asset protection?" | Usually yes. Privacy prevents targeting; AP prevents recovery. Together they provide comprehensive protection. | `/privacy/` |

### Formation Questions (10)

| # | Question | Answer Direction | Link |
|---|----------|-----------------|------|
| 1 | "LLC or Corporation?" | LLCs: simpler, pass-through tax, flexible management. Corps: for raising investment or planning an IPO. Most small businesses choose LLC. | `/llc-vs-corporation/` |
| 2 | "How long does formation take?" | Standard: 5–10 business days. Expedited: 24 hours (+$150). | — |
| 3 | "Wyoming vs Nevada for LLC formation?" | WY: lower cost ($900 Silver), strongest privacy. NV: no state income tax, larger shelf inventory. | `/wyoming-vs-nevada-llc/` |
| 4 | "What's included in Incorporate123's packages?" | Silver: RA, EIN, operating agreement, state fees. Gold: all Silver features + nominees + offshore records. | `/compare-packages/` |
| 5 | "Do I need to live in Wyoming to form there?" | No. No residency requirement. Everything handled remotely. | `/wyoming-llc/` |
| 6 | "What is a shelf company?" | A pre-formed, aged entity. Provides instant business history. Available from year 2000+. | `/shelf-companies/` |
| 7 | "What is foreign state registration?" | Registering your WY/NV entity to operate in another state. Required if you have physical operations elsewhere. | — |
| 8 | "What is domestication?" | Moving an existing entity from one state to another without dissolving and re-forming. Preserves history. | — |
| 9 | "Can I form in Wyoming and operate in California?" | Yes. Form in WY for privacy, register in CA for operations. CA/FL Private Packages handle this. | `/california-private-llc/` |
| 10 | "What is an EIN?" | Employer Identification Number from the IRS. Required for banking, taxes, and hiring. Included in all packages. | — |

### Compliance Questions (6)

| # | Question | Answer Direction | Link |
|---|----------|-----------------|------|
| 1 | "What is a registered agent?" | Entity or person designated to receive legal documents on your behalf. Required by law. Included in all packages. | `/registered-agent/` |
| 2 | "Wyoming annual filing requirements?" | Annual report to Secretary of State. $62 fee. Simple online filing. | `/annual-reports/` |
| 3 | "Nevada annual filing requirements?" | Initial List + Annual List of Officers. $350 combined annual fee. More complex than WY. | `/annual-reports/` |
| 4 | "What if I miss my annual report deadline?" | Late fees and potential administrative dissolution. Incorporate123 handles filings for renewal clients — you never have to think about it. | `/annual-reports/` |
| 5 | "What is corporate minute maintenance?" | Formal records of business decisions and meetings. Required for liability protection. Included in compliance services. | `/compliance/` |
| 6 | "Can I change my registered agent to Incorporate123?" | Yes. We handle the transfer filing. Contact us for details. | `/contact/` |

### Packages & Pricing Questions (5)

| # | Question | Answer Direction | Link |
|---|----------|-----------------|------|
| 1 | "Gold vs Silver — what's the difference?" | Silver: expert formation, all fees included. Gold: Silver + year-round nominees + offshore records + mail forwarding. | `/compare-packages/` |
| 2 | "How much is the annual renewal?" | Gold: $525/yr (includes nominees). Silver: $325/yr. Both include RA and compliance support. | — |
| 3 | "Do you accept cryptocurrency?" | Yes. Bitcoin, Ethereum, XRP, Litecoin, Monero. Crypto payments align with our privacy commitment. | — |
| 4 | "Is there a money-back guarantee?" | Yes. 30-day money-back guarantee. No questions asked. | — |
| 5 | "What payment methods do you accept?" | Visa, Mastercard, AMEX, PayPal, Bitcoin, Ethereum, XRP, Litecoin, Monero. | — |

### General Questions (4)

| # | Question | Answer Direction | Link |
|---|----------|-----------------|------|
| 1 | "How long has Incorporate123 been in business?" | Since approximately 2000 — over 25 years of specialized experience. | `/about/` |
| 2 | "Where is your office?" | Kingsbury Executive Suites, Reno, Nevada. Minutes from the Nevada Secretary of State. | `/about/` |
| 3 | "Can I call and speak to someone?" | Yes. Call (775) xxx-xxxx. A real person answers — no phone tree, no chatbot. | `/contact/` |
| 4 | "Do you offer consultations?" | Yes, free of charge. Call us or use the contact form. No obligation, no sales pressure. | `/contact/` |

---

## FAQ Answer Writing Rules

1. **2–5 sentences maximum.** FAQs are reference answers, not essays.
2. **Lead with the direct answer.** "Yes," "No," or the key fact — then explain.
3. **Include specific numbers.** "$1,275," "$525/yr," "25 years." Never vague.
4. **End with a "Learn more" link** when a cluster page covers the topic in depth.
5. **Never say "it depends" without then giving guidance.** Visitors hate non-answers.
6. **Use the brand voice.** Authoritative, educational, precise. Not legal jargon.

---

## Related Guides (Per Category)

| Category | Suggestion 1 | Suggestion 2 |
|----------|-------------|-------------|
| Privacy | "Anonymous LLC Guide →" `/anonymous-llc/` | "Compare States for Privacy →" `/best-state-for-privacy/` |
| Asset Protection | "Asset Protection Guide →" `/asset-protection/` | "Charging Order Protection →" `/charging-order-protection/` |
| Formation | "LLC vs Corporation →" `/llc-vs-corporation/` | "Wyoming vs Nevada →" `/wyoming-vs-nevada-llc/` |
| Compliance | "Registered Agent Services →" `/registered-agent/` | "Annual Report Guide →" `/annual-reports/` |
| Packages & Pricing | "Compare All Packages →" `/compare-packages/` | "Wyoming Gold — $1,275 →" `/wyoming-private-incorporation/` |
| General | "About Incorporate123 →" `/about/` | "Contact Us →" `/contact/` |

---

## Bottom CTA

| Element | Content |
|---------|---------|
| **Headline** | "Still Have Questions?" |
| **Description** | "Our team has 25 years of experience. Call us — no chatbots, no phone trees." |
| **Primary CTA** | "Call (775) xxx-xxxx" — tap-to-call |
| **Secondary CTA** | "Send Us a Message →" → `/contact/` |
| **Tertiary** | "View Packages & Pricing →" → `/compare-packages/` |

---

## SEO Notes

- **FAQPage schema** on every question/answer pair — this is the highest-value structured data opportunity on the site
- This page is the **redirect target** for ~230+ old Learning Center URLs
- Category-level questions also appear on their respective pillar and cluster pages (with FAQ schema there too) — this is intentional duplication for SEO coverage
- The H1 "Frequently Asked Questions" is clean but lacks keyword targeting. Consider: "Frequently Asked Questions — Privacy, Formation & Compliance" for the title tag, keeping the H1 simple.

---

*Confidential — BIT Studios × Incorporate123 — March 2026*
