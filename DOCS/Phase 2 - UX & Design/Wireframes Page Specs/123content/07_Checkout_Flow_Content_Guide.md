# Incorporate123 — Checkout Flow Content Guide

**URLs:** `/checkout/configure/` → `/checkout/details/` → `/checkout/payment/` → `/checkout/confirmation/`  
**Template:** Checkout Flow (4 steps) · **All pages:** `noindex, nofollow`  
**Phase:** 2 — UX & Interactive Prototyping  
**Based on:** Checkout Flow Wireframe Spec, Brand Guide v2, Competitive Analysis

---

## Wireframe Improvement Notes

### 1. Step 2 Entity Details Form Is Long — Needs Visual Chunking

The form collects company name, member/officer info (repeatable), registered agent confirmation, contact info, and special instructions. Without clear visual grouping, this feels like a wall of fields. Competitive analysis found ZenBusiness uses 8–10 upsell screens (bad) but Wyoming Corporate Services uses a clean 3-step wizard with visual sections (good).

**Recommendation:** Group fields into visually distinct cards: "Company Information" card, "Ownership" card, "Contact" card. Each card has a subtle header with step-within-step numbering: "2a. Company Name," "2b. Ownership," "2c. Contact." This reduces cognitive load without adding actual steps.

### 2. Gold Package Privacy Note Could Be Stronger

For Gold packages, a callout appears during member/officer entry: "Your nominee will appear on public filings instead of the information above." This is critical — it's the moment where the visitor realizes they're actually getting privacy. The wireframe treats it as a simple note.

**Recommendation:** Make this a visually prominent callout with the Privacy Blue accent and a shield icon. The copy should reinforce the value: "Your privacy is protected. A year-round nominee officer will appear on all public state filings. The information you enter here is kept strictly confidential — used only for internal records and IRS filings."

### 3. Crypto Payment Flow Needs Post-Order Clarity

The wireframe says crypto payers receive a wallet address by email after placing the order. This means formation doesn't begin until payment confirms — which could take minutes (BTC) or hours. The confirmation page should clearly state this delay.

**Recommendation:** For crypto payments, the Step 4 confirmation page should show a modified "What Happens Next" timeline where Step 1 is "Awaiting payment confirmation" with an estimated time: "Bitcoin: 10–60 minutes. Ethereum: 2–5 minutes." This prevents "why hasn't my filing started?" support inquiries.

### 4. No "Save and Continue Later" Option

Visitors entering complex multi-member structures may need to gather information mid-checkout (EINs, addresses, ownership percentages). If they leave, they lose everything.

**Recommendation:** Add a "Save Progress" option on Steps 1–2 that emails a return link. Requires only an email address. Progress is saved for 7 days. This catches abandoned checkouts and gives visitors permission to take their time — reinforcing the "no pressure" brand voice.

### 5. Terms Checkbox Copy Should Reinforce Trust, Not Just Legal

"I agree to the Terms of Service and Privacy Policy" is standard but sterile. This is the last click before payment — it's a trust moment.

**Recommendation:** Rewrite to: "I agree to the Terms of Service and Privacy Policy. Your information is encrypted and your privacy is our priority." The added trust clause costs nothing but reinforces the brand at the critical conversion moment.

---

## Step-by-Step Content Guide

---

## Step 1: Package Configuration

**URL:** `/checkout/configure/`

| Element        | Content                                                                   | Voice Notes                                         |
| -------------- | ------------------------------------------------------------------------- | --------------------------------------------------- |
| **Step Label** | "Step 1 of 4"                                                             | Visible in step indicator                           |
| **Headline**   | "Configure Your Package"                                                  | Direct, action-oriented                             |
| **Subtext**    | "Confirm your selections below. Your order summary updates in real time." | Sets expectation: this is configuration, not a quiz |

### Form Sections

**State Selection:** Large radio buttons or segmented control. Pre-selected if arriving from a state-specific page.

**Entity Type:** LLC (default) · Corporation. When Corp is selected, show "+$300 for Corporation filing fees" label.

**Package Tier:** Selectable cards (not dropdowns). Gold highlighted as "Recommended." Each card shows name, subtitle, price, 3–4 key features, and radio-style selection indicator.

**Add-Ons:** Checkboxes. Grouped into "Recommended" (Expedited, Virtual Office, Record Book) and "Additional" (Foreign Registration, Shelf Upgrade, Additional Filing). Each checkbox updates the running total immediately. Expedited gets a "Most Popular Add-On" badge.

**Navigation CTA:** "Continue to Entity Details →" — disabled until state + entity + tier are selected.

### Content Direction

This step should feel like building something, not filling out a form. The tier cards should feel like product selection (visual, scannable) not bureaucracy. Prices must use JetBrains Mono. "All-inclusive" appears next to every price.

---

## Step 2: Entity Details

**URL:** `/checkout/details/`

| Element      | Content                                                                 |
| ------------ | ----------------------------------------------------------------------- |
| **Headline** | "Your Entity Details"                                                   |
| **Subtext**  | "We use this information to prepare and file your formation documents." |

### Form Cards

**Card 2a: Company Information**

- Company Name (1st, 2nd, 3rd choice) — help text: "We check availability. Backups are used in order if first choice is taken."
- Business Purpose — optional, defaults to "any lawful purpose"

**Card 2b: Ownership / Officers**

- For LLC: Member name, address, ownership %, role. "Add Another Member" button.
- For Corp: Officer name, title, address. "Add Another Officer" button.
- **Gold Package Privacy Callout:** Shield icon + Privacy Blue accent. "Your privacy is protected. A year-round nominee officer will appear on all public state filings. The information you enter here is kept strictly confidential — used only for internal records and IRS filings."

**Card 2c: Registered Agent (informational)**

- Pre-filled: "Incorporate123 — Reno, Nevada" with address
- "Registered agent service is included. No action needed."

**Card 2d: Contact Information**

- Full name, email, phone, preferred contact method

**Special Instructions:** Optional textarea. "Anything else we should know?"

**Navigation:** "Continue to Payment →" + "← Back to Configuration"

**Save Progress:** "Need to gather information? Save your progress →" (requires email, sends return link, valid 7 days)

---

## Step 3: Payment

**URL:** `/checkout/payment/`

| Element      | Content                                                            |
| ------------ | ------------------------------------------------------------------ |
| **Headline** | "Secure Payment"                                                   |
| **Subtext**  | "Your payment is encrypted and processed securely through Stripe." |

### Trust Signal Placement (Critical)

Trust signals must flank the payment form — not buried below. Research shows ~20% of shoppers abandon at payment due to trust concerns.

| Placement           | Element                                     |
| ------------------- | ------------------------------------------- |
| Next to card fields | Lock icon + "256-bit SSL Encryption"        |
| Below payment form  | "30-Day Money-Back Guarantee" badge         |
| Below guarantee     | "Trusted Since 2000 · 25 Years"             |
| Near card input     | Visa, Mastercard, AMEX, BTC, ETH logos      |
| Below trust signals | "(775) xxx-xxxx · Questions before paying?" |

### Payment Methods

| Method                     | UX                                                                                                                                                                        |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Credit/Debit** (default) | Stripe Elements-style card input. Clean, single-line or split fields.                                                                                                     |
| **PayPal**                 | "You'll be redirected to PayPal to complete payment." Yellow PayPal button.                                                                                               |
| **Crypto**                 | Select cryptocurrency → "After placing your order, you'll receive a wallet address by email. Formation begins upon payment confirmation." BTC/ETH/XRP/LTC/XMR selectable. |

### Order Review

Final summary before submit: Package + add-ons + total + renewal note.

**Terms checkbox:** "I agree to the Terms of Service and Privacy Policy. Your information is encrypted and your privacy is our priority." (Links to TOS and Privacy Policy pages.)

**Submit CTA:** "Place Order — $[total] →" — large amber button. Shows loading spinner + "Processing..." on click. Disabled during processing.

---

## Step 4: Confirmation

**URL:** `/checkout/confirmation/`

| Element         | Content                                                                                |
| --------------- | -------------------------------------------------------------------------------------- |
| **Icon**        | Large green checkmark (success)                                                        |
| **Headline**    | "Your Order is Confirmed!"                                                             |
| **Subheadline** | "Thank you for choosing Incorporate123. We're preparing your formation documents now." |

### Order Receipt

Full-width card showing: order number, date, email confirmation sent, package name, entity name, state, add-ons, total, payment method, annual renewal.

### "What Happens Next" Timeline

| Step | Timeline             | Description                                                                                                                 |
| ---- | -------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| 1    | "Now"                | "We're checking name availability with the [State] Secretary of State."                                                     |
| 2    | "1–2 business days"  | "Your Articles of Organization are filed. (24 hours with expedited.)"                                                       |
| 3    | "3–5 business days"  | "Your EIN is obtained from the IRS."                                                                                        |
| 4    | "5–10 business days" | "Complete formation package delivered: articles, operating agreement, EIN, nominee confirmation, registered agent details." |
| 5    | "Ongoing"            | "Year-round nominee services, registered agent, and compliance support are active immediately."                             |

**Crypto variant:** Step 1 becomes "Awaiting payment confirmation" with estimated times: "Bitcoin: 10–60 minutes. Ethereum: 2–5 minutes. Formation begins upon confirmation."

### Action Buttons

| Button                     | Routes To                     |
| -------------------------- | ----------------------------- |
| "Print / Download Receipt" | Generates PDF receipt         |
| "Return to Homepage →"     | `/`                           |
| Phone                      | "(775) xxx-xxxx · Questions?" |

### Subtle Cross-Sell (Below receipt)

| Element         | Content                                                                                              |
| --------------- | ---------------------------------------------------------------------------------------------------- |
| **Headline**    | "Protect Your Other Assets Too"                                                                      |
| **Description** | "Now that your entity is formed, explore how asset protection structures can safeguard your wealth." |
| **CTA**         | "Learn About Asset Protection →" → `/asset-protection/`                                              |

**Placement rule:** BELOW the receipt and timeline. This must not feel like a checkout upsell — it's a post-purchase educational suggestion. Subtle design, not promotional.

---

## Order Summary Sidebar (Steps 1–3)

| Element      | Detail                                                                                                             |
| ------------ | ------------------------------------------------------------------------------------------------------------------ |
| **Desktop**  | Right sidebar (30%), sticky on scroll                                                                              |
| **Mobile**   | Collapsed by default (Steps 1–2). Expanded on Step 3 (payment).                                                    |
| **Content**  | Package name, entity type, base price, add-on line items, divider, total, renewal note, trust badges, phone number |
| **Behavior** | Updates in real time as selections change on Step 1. Carries forward through Steps 2–3.                            |

---

## Voice & Trust Principles for Checkout

1. **Every step shows where you are.** Step indicator is always visible. No mystery about what comes next.
2. **The total is always visible.** No hidden costs. No surprise fees. The order summary is persistent.
3. **Trust signals are at the payment moment.** SSL badge, money-back guarantee, and phone number flank the payment form — not buried in the footer.
4. **Errors are gentle.** Inline field validation with helpful messages ("Please enter a valid email"). No alert dialogs. No red walls of error text.
5. **There's always an escape.** "Talk to us" phone number on every step. "Save Progress" on Steps 1–2. "← Back" links on every step.
6. **No upsells during checkout.** All add-ons are presented on Step 1 (where the visitor is in configuration mode). Steps 2–3 are clean. Post-purchase cross-sell on Step 4 only.

---

_Confidential — BIT Studios × Incorporate123 — March 2026_
