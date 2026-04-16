# Checkout Flow — Complete Specification

**Pages:** 4-step checkout flow
**URL prefix:** `/checkout/`
**Template Type:** Checkout (unique — no other page type shares this template)
**Priority:** P1 — Launch
**Content Source:** Existing — redesign
**Payment Integration:** Stripe and/or PayPal (through FreshBooks)

---

## 1. Flow Purpose & Strategic Role

### 1.1 Primary Goal

Convert a configured package selection into a completed purchase with minimal friction, maximum confidence, and zero surprises. The checkout flow is the single highest-stakes UX in the site — every extra field, every moment of confusion, every missing trust signal costs real revenue.

### 1.2 Strategic Context

The checkout flow is **shared across all packages.** Whether a visitor is purchasing Wyoming Gold at $1,275 or Nevada Bronze at $699, they enter the same 4-step flow. Step 1 dynamically adapts based on the package they selected — everything else is identical. This shared architecture reduces development complexity, ensures consistent UX quality, and allows A/B testing across the entire funnel.

### 1.3 Competitive Checkout Landscape

The checkout design must position Incorporate123 between two extremes:

| Competitor | Checkout Pattern | Problem |
|-----------|-----------------|---------|
| **ZenBusiness** | 8–10 screens, 6–7 upsell pages, aggressive opt-out | "Way too many upselling attempts" — customer complaints |
| **ShieldCorp** | Single long-form page, 30+ fields, PayPal redirect | Overwhelming, unprofessional, no progressive disclosure |
| **Wyoming Corp Services** | 3-step wizard: Company Details → Optional Packages → Billing | Functional but dated. No running total, no trust signals. |
| **Anderson Advisors** | No checkout — consultation required for everything | Eliminates self-service entirely |

**Incorporate123's target:** 4 steps, 5 minutes, fully self-service with optional human support. All-inclusive pricing means NO upsell gauntlet — the package includes everything. Add-ons are optional and honestly positioned.

### 1.4 Entry Points

Visitors enter the checkout flow from:
- Package page "Proceed to Checkout" button (most common — sidebar CTA or hero CTA)
- Homepage wizard "View Full Details & Checkout" result CTA
- Direct URL with pre-selected package query parameter: `/checkout/configure/?package=wyoming-gold`
- Returning visitor who abandoned a previous session (if cart persistence is implemented)

### 1.5 Flow-Level Success Metrics

| Metric | Target | Notes |
|--------|--------|-------|
| **Step 1 → Step 2 progression** | > 85% | If lower, Step 1 has friction or confusion |
| **Step 2 → Step 3 progression** | > 80% | If lower, form fields are too complex or unfamiliar |
| **Step 3 → Step 4 (payment completion)** | > 65% | The critical conversion point — payment anxiety |
| **Overall checkout completion rate** | > 45% | Of visitors who enter Step 1, >45% complete Step 4 |
| **Average time in checkout** | < 8 minutes | Longer indicates confusion; shorter indicates confidence |
| **Cart abandonment recovery** | 10–20% of abandonments | Via email if email captured at Step 2 |

---

## 2. Global Checkout Components

These components appear on ALL 4 steps and create visual continuity throughout the flow.

### 2.1 Step Progress Indicator

A horizontal progress bar at the top of every step. Shows all 4 steps, highlights the current step, and marks completed steps.

```
[1 Configure] ──── [2 Entity Details] ──── [3 Payment] ──── [4 Confirmation]
   ●                    ○                      ○                 ○
 (active)           (upcoming)            (upcoming)         (upcoming)
```

**Behavior:**
- Completed steps show a checkmark (✓) and are clickable — visitors can go back to review/edit
- Current step is highlighted (blue accent, filled circle)
- Upcoming steps are grayed out and NOT clickable
- On mobile: compact version — step numbers only, current step name visible, full names hidden

**Dev Notes:**
- Progress indicator is a shared component, not per-page
- Implemented as a numbered stepper (not a progress bar percentage) — visitors need to know "I'm on step 2 of 4," not "I'm 50% done"
- Clicking a completed step navigates back WITHOUT losing form data (state must persist)

### 2.2 Order Summary Sidebar

A persistent sidebar (desktop) or collapsible panel (mobile) showing the current order state. Visible on Steps 1–3. Step 4 shows a full receipt instead.

**Desktop:** Right sidebar, 30–35% width, sticky scroll.
**Mobile:** Collapsible "Order Summary" bar at the top (tap to expand/collapse). Default: collapsed on Step 1 (nothing to summarize yet), expanded on Steps 2–3.

**Content (dynamically updated):**

```
ORDER SUMMARY

Wyoming Gold — Private LLC             $1,275.00
Entity type: LLC

Add-ons:
  Foreign Registration (CA)             $[price]
                                        ─────────
Subtotal:                               $[total]
                                        
Annual renewal:                         $525/yr
(nominees, agent, compliance, offshore)

[30-Day Money-Back Guarantee badge]
[Secure Checkout badge]

📞 Questions? (XXX) XXX-XXXX
```

**Behavior:**
- Updates in real time as Step 1 selections change (entity type, tier, add-ons)
- Persists across steps — the sidebar on Step 3 shows the same summary as Step 1
- "Edit" link on each line item routes back to Step 1
- Phone number is always visible — some visitors will call with last-minute questions during checkout

### 2.3 Checkout Header

The checkout flow uses a **simplified header** — NOT the full site header with mega menu navigation. This is standard e-commerce practice: reducing navigation options during checkout prevents distraction and reduces abandonment.

**Checkout header contains:**
- Incorporate123 logo (links to homepage — escape hatch)
- Step progress indicator
- Phone number (click-to-call)
- "Secure Checkout" text with lock icon

**Checkout header does NOT contain:**
- Full navigation (Privacy, AP, Formation, Compliance menu items)
- Client Login link
- "Get Started" CTA button

### 2.4 Form Validation Pattern

All form fields across all steps follow the same validation pattern:

| Behavior | Implementation |
|----------|---------------|
| **Validation timing** | On blur (when the visitor leaves a field) — NOT on every keystroke |
| **Error display** | Inline, below the field, in red text. Field border turns red. |
| **Error message format** | Specific and helpful: "Please enter a valid email address" — NOT "Invalid input" |
| **Required field indicator** | Asterisk (*) on the label. "Required" text on the field's first error. |
| **Success indicator** | Green checkmark appears when a field passes validation |
| **Step navigation blocking** | "Continue" button is always clickable, but displays all validation errors at once if fields are incomplete. Does NOT disable the button (disabled buttons confuse visitors). |

### 2.5 Mobile-Specific Adaptations

| Element | Desktop | Mobile |
|---------|---------|--------|
| Order Summary | Sticky sidebar | Collapsible panel at top |
| Form layout | 2-column where appropriate (name fields side by side) | Single column always |
| Step indicator | Full text labels | Step numbers only |
| Continue button | Right-aligned at bottom of form | Full-width, fixed at bottom of viewport |
| Phone number | In sidebar | In simplified header |

---

## 3. Step 1: Package Configuration

**URL:** `/checkout/configure/`

### 3.1 Purpose

Confirm and optionally modify the package selection. The visitor arrives with a package pre-selected (from the package page CTA), but Step 1 lets them adjust state, entity type, tier, and add-ons before proceeding. This is the "shopping cart" equivalent — review your selection before providing personal details.

### 3.2 Sections

| # | Component | Description |
|---|-----------|-------------|
| 1 | Step Progress Indicator | Step 1 active |
| 2 | Formation State Selection | 4 state buttons: Wyoming (default), Nevada, California, Florida. Selecting CA/FL routes to the Private package automatically. |
| 3 | Entity Type Toggle | LLC (default) / Corporation. Switching may update pricing for some packages. |
| 4 | Tier Selection Cards | Bronze / Silver / Gold cards for the selected state. Current tier highlighted. Visitor can switch tiers here. |
| 5 | Optional Add-Ons | Checkboxes with pricing. Running total in sidebar updates. "Your package is complete without add-ons" reassurance. |
| 6 | Order Summary Sidebar | Dynamic — updates with every selection change. Contains "Continue to Entity Details →" button. |

### 3.3 Component Specifications

**State Selection:**

```
WHERE WILL YOUR ENTITY BE FORMED?

[Wyoming]  [Nevada]  [California]  [Florida]
(selected)

Note (appears when CA or FL selected):
"California and Florida packages include Wyoming entity formation
+ foreign state registration. Your privacy is maintained through
Wyoming law."
```

**Dev Notes:**
- Pre-selected based on the package page the visitor came from (query parameter `?package=wyoming-gold`)
- Changing state may change available tiers (WY/NV have Bronze/Silver/Gold; CA/FL are single Private packages)
- If visitor selects CA/FL, the tier cards collapse to a single Private package card

**Entity Type Toggle:**

```
ENTITY TYPE

[LLC]  [Corporation]
(selected)

LLC selected:
"Most popular. Flexible management, pass-through taxation,
charging order protection."

Corporation selected:
"For investor-backed businesses, stock issuance, and
corporate formality."
```

**Tier Selection Cards:**

```
CHOOSE YOUR PACKAGE TIER

[BRONZE]           [SILVER]           [★ GOLD]
$625               $875               $1,275
Formation +        Silver adds:       Gold adds:
Compliance         + Virtual office   + Year-round nominees
                   + Mail forwarding  + Offshore records
                   + Operating agmt   + Corporate minutes

[Select Bronze]    [Select Silver]    [Select Gold ✓]
                                      (currently selected)
```

**Dev Notes:**
- The currently selected tier has a filled/highlighted state
- Gold has a "Recommended" or "Most Popular" badge
- Tier cards are compact — not the full package page treatment. Key differences only.
- Switching tiers updates the sidebar total in real time

**Add-On Configurator:**

```
OPTIONAL ADD-ONS (none required)

□ Foreign State Registration — $[price]
  Register your entity to operate in another state.

□ Corporate DBA Filing — $[price]
  Operate under a different business name.

□ Domestication (Inbound) — $[price]
  Move an existing entity to your selected state.

"Your package is complete as-is. Add-ons are optional
and can be added later."
```

**Dev Notes:**
- Add-ons are checkboxes with real-time sidebar updates
- The "complete as-is" reassurance is critical — prevents the ZenBusiness-style upsell anxiety
- Add-ons available vary by package: Gold doesn't offer "Upgrade to Gold" (already Gold); Bronze offers "Upgrade to Silver" and "Upgrade to Gold" as pseudo-add-ons
- Foreign Registration is the most common add-on for CA/FL buyers — position it first

**Continue Button:**

```
[Continue to Entity Details →]  (amber, full-width on mobile)
```

Located at the bottom of the main content area AND in the sidebar (desktop). Advances to Step 2.

---

## 4. Step 2: Entity Details

**URL:** `/checkout/details/`

### 4.1 Purpose

Collect the information needed to file the entity with the state. This is the most form-heavy step. The challenge is collecting all required data without overwhelming the visitor. Fields must be clearly labeled, logically grouped, and explained where necessary.

### 4.2 Sections

| # | Component | Description |
|---|-----------|-------------|
| 1 | Step Progress Indicator | Step 2 active, Step 1 completed (clickable) |
| 2 | Company Name Fields | 1st, 2nd, 3rd choice names + suffix (LLC / Inc. / Corp.) |
| 3 | Members/Officers Information | Depends on Gold vs. Silver: Gold = nominees pre-filled; Silver/Bronze = visitor provides their own names |
| 4 | Registered Agent | Pre-filled with Incorporate123's agent info — not editable. "Included in your package." |
| 5 | Contact Information | Visitor's personal contact: name, email, phone, mailing address |
| 6 | Special Instructions | Optional textarea for any additional notes |
| 7 | Order Summary Sidebar | Persistent — same state as Step 1 |

### 4.3 Component Specifications

**Company Name Fields:**

```
PROPOSED ENTITY NAME

Your entity name will be checked for availability with the
[State] Secretary of State. Please provide up to 3 choices
in order of preference.

1st Choice: [________________________] [LLC ▾]
2nd Choice: [________________________] [LLC ▾]  (optional)
3rd Choice: [________________________] [LLC ▾]  (optional)

Suffix dropdown: LLC | Inc. | Corp. | Ltd.
(pre-filtered based on entity type selection in Step 1)

Tip: "Name must not be identical or deceptively similar to an
existing entity in [State]. We check availability before filing."
```

**Dev Notes:**
- Only 1st choice is required. 2nd and 3rd are fallbacks if the first is taken.
- Suffix dropdown is filtered: LLC/Ltd. for LLCs, Inc./Corp./Ltd. for corporations
- The availability check happens post-submission — this is NOT a real-time name search (states don't offer instant APIs). Set expectations: "We check availability before filing."

**Members/Officers Information:**

This section changes dramatically based on the selected tier:

**GOLD PACKAGE (nominees):**

```
MEMBERS / OFFICERS

Your Gold package includes year-round nominee services.
Nominee names will appear on all public filings.

Nominee Director: [Pre-filled — Incorporate123 Nominee]  ← Not editable
Nominee Officer:  [Pre-filled — Incorporate123 Nominee]  ← Not editable

Your information (private — NOT filed with the state):
Actual Member/Owner: [Your Name] *
Ownership %: [100] %
Additional Members: [Add Another Member +]

"Your name appears ONLY in the operating agreement — a private
document that is not filed with the state."
```

**SILVER / BRONZE PACKAGE (no nominees):**

```
MEMBERS / OFFICERS

Your name will appear on state filings as the member/manager
(LLC) or officer/director (Corporation).

For LLC:
  Member/Manager Name: [_____________] *
  Address: [_____________] *
  Ownership %: [100] %
  [Add Another Member +]

For Corporation:
  Director Name: [_____________] *
  Officer (President): [_____________] *
  Officer (Secretary): [_____________] *
  Officer (Treasurer): [_____________] *
  [Same person for all roles? ✓]

"Want to keep your name off public filings? Upgrade to Gold
for year-round nominee services."
→ [Upgrade to Gold — +$400 (WY) / +$525 (NV)]
```

**Dev Notes:**
- The Gold version is dramatically simpler — nominees are pre-filled. The visitor only provides their own name for the private operating agreement.
- The Silver/Bronze upgrade prompt is the LAST upsell opportunity in the entire flow. It's positioned contextually at the exact moment the visitor is typing their name into a public filing form — the emotional impact is "do I really want my name here?"
- "Add Another Member" supports multi-member LLCs. Each additional member gets name, address, and ownership %.
- For corporations, a "Same person for all roles" checkbox auto-fills all officer fields with the director name — common for single-person corporations.

**Registered Agent:**

```
REGISTERED AGENT

Your package includes commercial registered agent service
through Incorporate123.

Registered Agent: Nevada Corporation Services Ltd.
Address: [Incorporate123's WY or NV office address]
State: [Wyoming / Nevada — matches formation state]

✓ Included in your package — no additional cost.
  "This is not editable. Your registered agent is Incorporate123."
```

**Dev Notes:**
- This field is display-only — NOT an input. The visitor cannot change the registered agent.
- It's included to show that this service is part of the package and already handled.

**Contact Information:**

```
YOUR CONTACT INFORMATION
(Used for order communication — NOT filed with the state)

Full Name: [_____________] *
Email Address: [_____________] *
Phone Number: [_____________]  (optional but recommended)
Mailing Address:
  Street: [_____________] *
  City: [_____________] *
  State/Province: [______] *
  ZIP/Postal Code: [______] *
  Country: [United States ▾] *

"This information is used for order confirmation, document
delivery, and account management. It is NOT included in any
state filing."
```

**Dev Notes:**
- The "NOT filed with the state" disclaimer is critical for privacy-conscious buyers — they need explicit reassurance that this contact information is for Incorporate123's use only
- Country dropdown with United States as default, international options available (international clients are a documented audience segment)
- Phone is optional — some privacy buyers don't want to provide phone

**Special Instructions:**

```
SPECIAL INSTRUCTIONS (optional)

[Large textarea]

"Any specific requests for your formation? Share structure
preferences, multiple member arrangements, or questions for
our team."
```

**Continue Button:**

```
[Continue to Payment →]  (amber)
```

---

## 5. Step 3: Payment

**URL:** `/checkout/payment/`

### 5.1 Purpose

Collect payment. This is the highest-anxiety step in the entire checkout flow. Trust signals, security indicators, and transparent pricing are concentrated here. The visitor is about to enter credit card information — every element must reinforce confidence.

### 5.2 Sections

| # | Component | Description |
|---|-----------|-------------|
| 1 | Step Progress Indicator | Step 3 active, Steps 1–2 completed (clickable) |
| 2 | Billing Address Form | Billing name and address. "Same as contact info" checkbox. |
| 3 | Payment Method Selector | Credit/Debit Card (Stripe) · PayPal · Cryptocurrency |
| 4 | Card / Payment Form | Stripe Elements embedded form (card number, expiry, CVC) |
| 5 | Trust Signals | Security badges flanking the payment form |
| 6 | Order Review + Terms | Final order summary with "I agree to Terms of Service" checkbox |
| 7 | Order Summary Sidebar | Final state — all items, total, renewal rate |

### 5.3 Component Specifications

**Billing Address:**

```
BILLING ADDRESS

☑ Same as contact information  (pre-checked — auto-fills from Step 2)

If unchecked, show:
  Full Name: [_____________] *
  Street: [_____________] *
  City: [_____________] *
  State: [______] *
  ZIP: [______] *
  Country: [United States ▾] *
```

**Payment Method Selector:**

```
PAYMENT METHOD

[💳 Credit / Debit Card]  [PayPal]  [₿ Cryptocurrency]
    (selected)
```

**Dev Notes:**
- Three payment methods. Credit/debit is default.
- PayPal: redirects to PayPal checkout, then returns to Step 4 on completion
- Cryptocurrency: shows instructions for BTC, ETH, XRP, LTC, XMR payment. This may be a manual process (wallet address + order reference) rather than an automated crypto payment gateway. David must confirm the crypto payment workflow.
- Payment processing note: "Payment processed by [Stripe / PayPal]. Incorporate123 does not store your credit card information."

**Credit Card Form (Stripe Elements):**

```
Card Number:  [____________ ____ ____]
Expiry:       [MM/YY]
CVC:          [___]

[🔒 Secure payment processed by Stripe]
```

**Dev Notes:**
- Use Stripe Elements (pre-built, PCI-compliant card form) — NOT custom card input fields. Stripe Elements handles tokenization, validation, and PCI compliance automatically.
- The card form must be embedded within the page, not a redirect — redirects increase abandonment
- Stripe Elements auto-detects card type and shows the appropriate card brand icon (Visa, Mastercard, Amex)
- Error handling: Stripe provides real-time card validation. Display Stripe's error messages (declined, invalid number, expired) inline below the field.

**Cryptocurrency Payment (if selected):**

```
CRYPTOCURRENCY PAYMENT

We accept Bitcoin (BTC), Ethereum (ETH), XRP, Litecoin (LTC),
and Monero (XMR).

To pay with cryptocurrency:

1. Select your currency:  [Bitcoin ▾]
2. Send exactly $[total] USD equivalent to:
   Wallet address: [address displayed — copyable]
   QR code: [displayed]
3. Include order reference: [auto-generated reference code]
4. Click "I've Sent Payment" after completing the transfer

[I've Sent Payment →]

"Cryptocurrency payments are verified manually. Your order will
be confirmed within 1 business day of payment verification.
Exchange rate is locked at the time of order submission."
```

**Dev Notes:**
- This may be a semi-manual process today. If David uses a crypto payment gateway (BTCPay, Coinbase Commerce, etc.), integrate it. If it's manual wallet addresses, the above flow works.
- The "exchange rate locked at order submission" statement needs David's confirmation — does he lock the rate or does the crypto amount adjust?
- Privacy note: crypto payments create no credit card record — this is a trust signal for the target audience. Consider a subtle note: "Pay with crypto for maximum privacy from your first transaction."

**Trust Signals (flanking the payment form):**

```
[🔒 256-bit SSL Encryption]
[Stripe Secure Badge]
[30-Day Money-Back Guarantee]
[No Hidden Fees — All-Inclusive Pricing]
[PayPal Buyer Protection (if PayPal selected)]
```

**Dev Notes:**
- Trust badges must be NEAR the payment form, not in a separate section below. Studies show trust signals within visual proximity of the card input field reduce abandonment by 10–20%.
- SSL badge and Stripe badge are the minimum. Money-back guarantee badge provides purchase-confidence reinforcement.

**Order Review + Terms:**

```
ORDER REVIEW

Wyoming Gold — Private LLC              $1,275.00
Foreign Registration (CA)                 $[price]
                                         ─────────
TOTAL DUE TODAY:                        $[total]

Annual Renewal: $525/yr
(billed annually, includes nominees, agent, compliance)

☐ I agree to the Terms of Service (/terms/) and Privacy
  Policy (/privacy-policy/). *
  (links open in new tab)

[Complete Purchase — $[total] →]  (amber, prominent, full-width)
```

**Dev Notes:**
- The "Complete Purchase" button includes the dollar amount — price-in-button increases confidence
- Terms checkbox is REQUIRED before submission
- Terms and Privacy Policy links open in new tabs (never navigate away from checkout)
- Annual renewal line is always visible — no surprises after purchase
- The button label says "Complete Purchase" — NOT "Submit" or "Process" or "Place Order." "Complete Purchase" is specific and confident.

---

## 6. Step 4: Confirmation

**URL:** `/checkout/confirmation/`

### 6.1 Purpose

Confirm the purchase, set expectations for next steps, reduce post-purchase anxiety, and capture the opportunity for cross-sell or referral. This page is displayed immediately after successful payment.

### 6.2 Sections

| # | Component | Description |
|---|-----------|-------------|
| 1 | Success Message | Large green checkmark + "Your order is confirmed" |
| 2 | Order Number + Date | Reference number for support inquiries |
| 3 | Full Order Receipt | Complete itemized receipt — printable |
| 4 | "What Happens Next" Timeline | 5-step timeline from order to fully formed entity |
| 5 | Action Buttons | Print Receipt · Return to Homepage · Contact Us |
| 6 | Cross-Sell Suggestion | One contextual suggestion based on what they purchased |

### 6.3 Component Specifications

**Success Message:**

```
[Large green checkmark — animated]

Your Order Is Confirmed.
Welcome to Incorporate123.

A confirmation email has been sent to [email from Step 2].
```

**Order Reference:**

```
Order Number: INC-2026-[XXXXX]
Date: April 15, 2026
Payment Method: Visa ending in XXXX (or "PayPal" or "Bitcoin")
```

**Full Order Receipt:**

```
ORDER RECEIPT

Package: Wyoming Gold — Private LLC
State: Wyoming
Entity Type: LLC

Formation:
  Wyoming Gold Package                  $1,275.00
  Foreign Registration (CA)               $[price]
                                         ─────────
  Total Paid:                           $[total]

Annual Renewal (billed next year):
  Year-round nominees, registered agent,
  compliance, offshore records             $525/yr

Included Services:
  ✓ State filing fees ($100)
  ✓ Registered agent (1 year)
  ✓ Custom operating agreement
  ✓ EIN filing
  ✓ Year-round nominee directors/officers
  ✓ Offshore records storage
  ✓ Banking resolutions + membership certificate
  ✓ Bank account opening assistance
  ✓ Foreign Registration — California (add-on)

30-Day Money-Back Guarantee applies.
```

**"What Happens Next" Timeline:**

```
WHAT HAPPENS NEXT

Step 1: Order Processing (Today)
Your order has been received. Our team begins preparing
your formation documents immediately.

Step 2: Name Availability Check (Days 1–2)
We verify your proposed entity name with the Wyoming
Secretary of State. If your first choice is unavailable,
we move to your second choice.

Step 3: Entity Filing (Days 2–4)
Articles of Organization are filed with the state with
nominee names in place. Your name does not appear.

Step 4: Document Delivery (Days 4–6)
Your complete document package is prepared and delivered:
filed articles, operating agreement, EIN, banking resolutions,
membership certificate, and registered agent confirmation.

Step 5: Records Secured (Days 6–7)
Corporate records are transferred to our offshore custodian.
Your entity is fully formed, privately held, and compliance-ready.

"From order to fully private entity: 5–7 business days.
We'll email you at each stage with updates."
```

**Dev Notes:**
- The timeline matches the "How It Works (Post-Purchase)" section from the package page — consistency builds trust
- Timeline is for Wyoming. If Nevada or CA/FL, the steps and timeline may differ slightly — implement dynamic content based on the package purchased
- Each step has a date range relative to today — makes the timeline tangible

**Action Buttons:**

```
[🖨 Print Receipt]  [🏠 Return to Homepage]  [📞 Contact Us]
```

**Dev Notes:**
- Print Receipt triggers browser print dialog with a print-optimized stylesheet (no navigation, no sidebar, receipt content only)
- Return to Homepage links to `/`
- Contact Us links to `/contact/`
- No "Client Login" button at launch (client portal is deferred to future phase)

**Cross-Sell Suggestion:**

A single, contextual suggestion based on what was purchased. NOT aggressive. One line + one CTA.

| Purchased | Suggestion |
|-----------|-----------|
| Wyoming/Nevada Gold | "Need to operate in California or Florida? Add foreign registration → /contact/" |
| Wyoming/Nevada Silver | "Consider adding privacy — upgrade to Gold anytime → /privacy/" |
| Wyoming/Nevada Bronze | "See what Silver and Gold include → /compare-packages/" |
| CA/FL Private | "Already have entities in other states? Domestication services → /domestication/" |
| Shelf Company | "Add privacy to your shelf entity → /contact/" |

**Dev Notes:**
- ONE suggestion only. NOT a carousel, NOT multiple products, NOT "customers also bought."
- The suggestion is helpful context, not an upsell. It's positioned below the receipt and action buttons — easy to ignore, easy to act on.

---

## 7. Post-Purchase Communications

### 7.1 Confirmation Email

Triggered immediately on successful payment. Contains:
- Order number + date
- Full receipt (same content as Step 4 receipt)
- "What Happens Next" timeline
- David's contact information (phone + email)
- "Reply to this email with any questions"

### 7.2 Status Update Emails

Sent at each milestone:
1. **Order received** — immediate (confirmation email)
2. **Name availability confirmed** — Days 1–2
3. **Entity filed with state** — Days 2–4
4. **Documents ready for delivery** — Days 4–6
5. **Records secured with offshore custodian** — Days 6–7 (Gold only)

### 7.3 Review Solicitation Email

Sent X days post-completion (David to determine timing — recommend 14–21 days):
- Thank you message
- "Would you leave us a review on Trustpilot?"
- Direct link to Incorporate123's Trustpilot review page
- This email is the mechanism for closing the 0-review gap

---

## 8. Technical Specifications

### 8.1 URLs & Routing

| Step | URL | HTTP Method |
|------|-----|-------------|
| 1. Configure | `/checkout/configure/` | GET (with `?package=` query param) |
| 2. Entity Details | `/checkout/details/` | POST (form data from Step 1) |
| 3. Payment | `/checkout/payment/` | POST (form data from Steps 1+2) |
| 4. Confirmation | `/checkout/confirmation/` | GET (after payment success callback) |

### 8.2 State Persistence

Form data must persist across all 4 steps. Options:
- **Server-side session** — form data stored in session, retrieved on each step load
- **Client-side state** — React/Next.js state management (Context, Zustand, or URL-encoded)
- **LocalStorage backup** — save form state to localStorage for cart abandonment recovery

Whichever approach is used: if the visitor clicks "Back" (browser back button OR step indicator back navigation), their previously entered data must be preserved. Losing form data on back-navigation is a checkout-killing bug.

### 8.3 Payment Integration

| Provider | Integration | Notes |
|----------|-------------|-------|
| **Stripe** | Stripe Elements (embedded) | PCI-compliant card form, tokenization, no card data touches Incorporate123's servers |
| **PayPal** | PayPal Checkout SDK | Redirect to PayPal, return to `/checkout/confirmation/` on success |
| **Cryptocurrency** | Manual or BTCPay/Coinbase Commerce | David to confirm which crypto payment workflow is used |

**Payment processing note:** The Section Map mentions "FreshBooks" for payment processing. Clarify with David: is Stripe used directly, or is Stripe routed through FreshBooks? This affects the integration architecture.

### 8.4 Security

| Requirement | Implementation |
|-------------|---------------|
| SSL/TLS | Required (site-wide, enforced via HTTPS redirect) |
| PCI compliance | Stripe Elements handles all card data — Incorporate123 never sees raw card numbers |
| CSRF protection | Token-based CSRF protection on all form submissions |
| Rate limiting | Limit payment submission attempts (prevent brute-force) |
| Bot protection | Invisible reCAPTCHA or honeypot on Step 2 (entity details form) |
| Input sanitization | All text inputs sanitized server-side before processing or storing |

### 8.5 SEO

| Element | Value |
|---------|-------|
| **Robots** | `noindex, nofollow` on ALL checkout pages — checkout should never be indexed |
| **Canonical** | None — noindex pages don't need canonicals |
| **Schema** | None — checkout pages don't get structured data |
| **Analytics** | Enhanced e-commerce tracking in GA4: funnel steps, abandonment points, completion rate, AOV |

### 8.6 Responsive Behavior

| Element | Desktop | Mobile |
|---------|---------|--------|
| Layout | Content (65%) + sidebar (35%) | Single column + collapsible summary |
| Step indicator | Full text labels | Step numbers only |
| Form fields | 2-column where logical | Single column always |
| Continue/Submit button | Right-aligned in content area | Fixed full-width at bottom of viewport |
| Payment form | Inline Stripe Elements | Inline Stripe Elements (same) |
| Trust badges | Flanking payment form | Below payment form |

### 8.7 Error Handling

| Error Type | Handling |
|-----------|----------|
| **Payment declined** | Show Stripe's decline reason. Offer: "Try a different card" or "Pay with PayPal instead." Do NOT clear the form. |
| **Network error** | Show "Something went wrong — your card has not been charged. Please try again." Preserve all form state. |
| **Session expired** | Show "Your session has expired. Your selections have been saved." Offer to restart from Step 1 with data pre-populated. |
| **Name unavailable** | NOT a checkout error — this is discovered post-purchase during processing. Handle via email: "Your first choice was unavailable. We've filed with your second choice [name]." |
| **Duplicate order** | Prevent double-submission with button disable after first click + server-side idempotency key |

---

## 9. Cart Abandonment Strategy

### 9.1 When Abandonment Happens

If a visitor completes Step 2 (email captured) but does not complete Step 3 (payment), trigger a cart abandonment recovery flow.

### 9.2 Recovery Flow

| Timing | Action |
|--------|--------|
| **1 hour after abandonment** | Email: "Your [Package Name] order is waiting. Complete your purchase →" with direct link back to Step 3 (with form data preserved) |
| **24 hours** | Email: "Still thinking about [Package Name]? Here's what's included..." with value summary |
| **72 hours** | Email: "Questions about your order? Call us at (XXX) XXX-XXXX or reply to this email." |

**Dev Notes:**
- Recovery emails require email capture at Step 2 — the email field must be completed before the visitor can proceed to Step 3
- The recovery link must restore the visitor's session state (selected package, entity type, add-ons, entity details from Step 2)
- Cart abandonment recovery is a post-launch optimization — it can be implemented after the core checkout is functional

### 9.3 Privacy Consideration

Abandonment emails must respect the privacy-conscious audience:
- Max 3 emails per abandoned cart — no drip sequence beyond that
- Clear unsubscribe link on every recovery email
- No "Your cart is about to expire!" false urgency
- Tone: helpful, not pressuring. "We saved your progress" — not "Don't miss out!"

---

## 10. Content Notes for David

1. **Payment processing** — Is Stripe used directly, or through FreshBooks? This determines the integration architecture.
2. **Cryptocurrency workflow** — Manual wallet addresses, or an automated gateway (BTCPay, Coinbase Commerce)? If manual, how is payment verification handled? What's the timeline?
3. **Exchange rate locking** — For crypto payments, is the USD equivalent locked at order time, or does the crypto amount float?
4. **Formation timeline** — "5–7 business days" used throughout. Verify this is accurate for WY, NV, CA/FL registrations. Does it differ by state?
5. **Name availability check** — How is this handled today? Is it manual (staff checks with state), or is there an API?
6. **Order reference format** — "INC-2026-XXXXX" is a placeholder. What format does the current system use, or should we define a new one?
7. **Status update emails** — Does the current system send status emails? If not, this needs to be built.
8. **Cart abandonment emails** — Approved? If yes, what's the sending infrastructure (Mailchimp, SendGrid, CMS built-in)?
9. **Review solicitation timing** — How many days post-completion should the Trustpilot review request email be sent?
10. **FreshBooks** — The section map mentions FreshBooks for payment. Is FreshBooks the invoicing/payment system? Does it generate the confirmation email, or does the CMS?
11. **Multiple members** — What's the maximum number of members/officers the form should support? Is there a limit for the operating agreement?
12. **Corp officer roles** — For corporations, is President/Secretary/Treasurer the standard role set? Can one person hold all roles?
13. **Auto-renewal** — Does the checkout set up auto-renewal for the annual renewal ($525/yr)? If so, the Terms must disclose this. If not, how is renewal handled (manual invoice)?

---

## 11. How the Checkout Flow Differs From All Other Page Types

| Dimension | Package Page | Cluster Page | **Checkout Flow** |
|-----------|-------------|-------------|-------------------|
| Primary job | Convince to buy | Educate on topic | **Collect data + process payment** |
| Navigation | Full site header + mega menu | Full site header | **Simplified header (logo + phone only)** |
| CTA style | Amber "Start" buttons | Amber "View package" buttons | **Amber "Continue" / "Complete Purchase" buttons** |
| Sidebar | Running total (static selections) | Links + package shortcuts | **Order summary (dynamic, updates in real time)** |
| Trust signals | Trust strip section | Minimal | **Flanking payment form (maximum proximity)** |
| Form elements | Entity toggle + add-on checkboxes | None | **Full multi-field forms with validation** |
| SEO | Indexed with Product schema | Indexed with Article/FAQ schema | **noindex, nofollow — never indexed** |
| Back navigation | Standard browser back | Standard browser back | **State-preserving back navigation (form data persists)** |
| Error handling | None (no user input) | None | **Comprehensive: declined cards, network errors, session expiry, duplicate prevention** |
| Mobile CTA | Sticky bottom bar | Sticky bottom bar | **Fixed full-width "Continue" at bottom of viewport** |
| Content length | 3,000+ words | 4,000+ words | **Minimal text — forms + instructions + trust signals only** |
| Time on page target | 2–4 minutes | 4–6 minutes | **< 2 minutes per step (< 8 minutes total)** |
| Post-interaction | Visitor navigates to another page | Visitor navigates to package | **Visitor receives confirmation email + status updates** |

---

*End of Specification — Checkout Flow*
*Confidential — BIT Studios × Incorporate123 — April 2026*
