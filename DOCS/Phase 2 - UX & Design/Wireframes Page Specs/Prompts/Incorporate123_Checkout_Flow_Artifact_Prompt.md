# Checkout Flow Artifact Prompt

Copy everything below the line and paste it into Claude along with the uploaded `Incorporate123_Checkout_Flow_Wireframe_Spec.md` file.

---

Build the Incorporate123 4-step checkout flow as a single React artifact (.jsx) based on the attached wireframe specification. All 4 steps live in one component — use React state to switch between steps rather than separate pages. This is a prototype for client review, not a production checkout. No real payment processing — mock everything.

**Important: The attached spec contains no color tokens, spacing values, or design definitions.** Use your own judgment to create a polished, trust-inspiring checkout experience. This should feel like a premium e-commerce checkout — think Stripe Checkout or Shopify's cart, not a government form. Clean, minimal, trustworthy. The buyer is spending $1,275+ and needs to feel confident.

## Technical Constraints

- Single React component, default export, no required props
- Tailwind utility classes only (core pre-defined classes)
- Lucide React for icons (Check, ChevronRight, ChevronLeft, Lock, Shield, CreditCard, Phone, Bitcoin, AlertCircle, CheckCircle, Loader2, Package, Building2, User, Mail, MapPin, FileText)
- React hooks: useState for current step, form data object, selected add-ons, payment method, validation errors, loading state
- No localStorage, no external APIs
- Responsive: mobile-first
- Semantic HTML — use `<form>` elements with proper labels and field types

## State Architecture

Manage all checkout state in one top-level object so it persists across steps:

```
checkoutState = {
  currentStep: 1,
  state: 'wyoming',           // 'wyoming' | 'nevada'
  entityType: 'llc',          // 'llc' | 'corporation'
  tier: 'gold',               // 'bronze' | 'silver' | 'gold'
  addOns: {},                 // { expedited: true, virtualOffice: false, ... }
  companyNames: ['', '', ''],
  businessPurpose: '',
  members: [{ name: '', address: '', ownership: 100, role: 'member-manager' }],
  contact: { name: '', email: '', phone: '' },
  billing: { sameAsContact: true, street: '', city: '', state: '', zip: '', country: 'US' },
  paymentMethod: 'card',      // 'card' | 'paypal' | 'crypto'
  termsAccepted: false,
  errors: {},
  isProcessing: false
}
```

Compute the total dynamically from state + entity type + tier + add-ons.

## Price Data

Build the pricing into the component:

```
Wyoming: Silver LLC $900, Silver Corp $1,200, Gold LLC $1,275, Gold Corp $1,575
Nevada:  Bronze LLC $1,000, Bronze Corp $1,300, Silver LLC $1,275, Silver Corp $1,575, Gold LLC $1,800, Gold Corp $2,100

Add-ons: Expedited +$150, Virtual Office +$400, Record Book +$75, Foreign Registration +$400
Renewals: Gold $525/year, Silver $325/year, Bronze $275/year
```

## Page Structure — Build All 4 Steps

### Persistent Elements (all steps)

**Step Indicator** — horizontal bar at top showing all 4 steps:

- Steps: ① Configure → ② Details → ③ Payment → ④ Confirmation
- Current step: filled circle, bold label
- Completed steps: checkmark, clickable (allows going back)
- Upcoming steps: muted, not clickable
- Mobile: compact "Step 2 of 4 — Entity Details" with progress bar fill

**Order Summary Sidebar** (Steps 1–3):

- Desktop: sticky right sidebar (30% width)
- Shows: package name, entity type, base price, each add-on with price, divider, total (large), renewal note, trust badges, phone number
- Updates in real time as Step 1 selections change
- Mobile: collapsed bar at top showing "Wyoming Gold LLC — $1,275 ▼" with expand toggle. On Step 3, expanded by default.

**Simplified Header** — minimal checkout header: logo left, phone number right, "Secure Checkout" with lock icon. No mega menu, no full navigation — reduce distractions during checkout.

### Step 1: Configure Your Package

Left column (70% desktop, full width mobile):

1. **State Selection** — Two large selectable cards: "Wyoming" / "Nevada". Default: Wyoming.
2. **Entity Type** — Segmented control: LLC / Corporation. Default: LLC.
3. **Package Tier** — Selectable cards for each available tier. Show for the selected state:
   - Wyoming: Silver card + Gold card (Gold highlighted "Recommended")
   - Nevada: Bronze + Silver + Gold cards (Gold highlighted)
   - Each card: tier name, subtitle, price, 3–4 key features, radio selection
4. **Optional Add-Ons** — Checkboxes: Expedited Filing (+$150), Virtual Office (+$400), Corporate Record Book (+$75), Foreign State Registration (+$400). Each with one-line description.
5. **CTA**: "Continue to Entity Details →" — disabled until state + entity + tier selected

Every selection immediately updates the sidebar total.

### Step 2: Entity Details

Left column form with grouped sections:

1. **Company Information**
   - Company Name (1st choice) — required text input
   - Company Name (2nd/3rd choice) — optional text inputs
   - Business Purpose — optional textarea, help text: "Leave blank for 'any lawful purpose'"
   - Help note: "We check name availability. If your first choice is taken, we use backups."

2. **Members / Officers**
   - Dynamic field group — starts with 1 member, "Add Another" button
   - Per member: Full Name, Address (street/city/state/zip/country), Ownership %, Role select
   - For Gold packages: callout box with privacy note: "Your nominee officer will appear on all public filings instead of the information above."

3. **Registered Agent** — informational only, pre-filled: "Incorporate123 — Reno, Nevada" with "Included in your package" note

4. **Contact Information** — Name, Email, Phone, Preferred Contact Method (radio: Email/Phone/Either)

5. **Special Instructions** — optional textarea

6. **CTA**: "Continue to Payment →" — validates required fields on click

Validation: inline on blur. Red border + error message below field. On submit, scroll to first error.

### Step 3: Payment

This step is the trust gauntlet — trust signals EVERYWHERE near the payment fields.

Left column:

1. **Billing Address**
   - "Same as contact address" checkbox (pre-checked, auto-fills from Step 2)
   - If unchecked: street, city, state, zip, country fields appear

2. **Payment Method** — large tabbed selector or radio cards:
   - **Credit/Debit Card** (default) — mock Stripe Elements-style fields:
     - Card number (formatted xxxx xxxx xxxx xxxx with card brand icon)
     - Expiry (MM/YY) + CVC side by side
     - Name on card
     - Lock icon + "256-bit SSL Encrypted" adjacent to card fields
   - **PayPal** — "You'll be redirected to PayPal to complete payment" + yellow PayPal-style button
   - **Cryptocurrency** — crypto icon pills (BTC, ETH, XRP, LTC, XMR), "Payment instructions sent by email after order"

3. **Trust Signals** — positioned flanking the payment form, NOT buried at bottom:
   - Lock icon: "Secure, encrypted payment"
   - Shield: "30-Day Money-Back Guarantee"
   - Badge: "Trusted Since 2000 · 25 Years"
   - Card icons: Visa, Mastercard, AMEX + crypto icons
   - Phone: "(775) 555-0123 · Questions before paying?"

4. **Order Review** (mobile: show expanded; desktop: sidebar covers this)
   - Final line-item review of package + add-ons + total

5. **Terms Checkbox** — "I agree to the Terms of Service and Privacy Policy" (required, with links)

6. **CTA**: "Place Order — $[total] →" — shows loading spinner + "Processing..." on click. After 2-second mock delay, transitions to Step 4.

### Step 4: Confirmation

Full-width layout (no sidebar — becomes the receipt):

1. **Success State** — large animated checkmark icon + "Your Order is Confirmed!" headline + "Thank you for choosing Incorporate123" subheadline

2. **Order Details Card**
   - Order number: "#INC-2026-00142" (mock)
   - Date: today's date
   - "Confirmation email sent to [email from Step 2]"

3. **Receipt** — full order summary: package, entity name, state, add-ons, total, payment method, renewal note

4. **What Happens Next** — numbered timeline with 5 steps from the spec:
   - Now: name availability check
   - 1–2 days: articles filed
   - 3–5 days: EIN obtained
   - 5–10 days: complete formation package delivered
   - Ongoing: compliance support active

5. **Action Buttons**: "Print Receipt" + "Return to Homepage →"

6. **Subtle Cross-Sell** — small card at bottom: "Protect Your Other Assets Too" with link to Asset Protection pillar. NOT an aggressive upsell.

## Interaction Details

- **Step transitions**: smooth fade or slide between steps. No page reload.
- **Back navigation**: clicking a completed step number returns to that step with ALL data preserved.
- **"Place Order" button**: disabled until all Step 3 validation passes. Shows `<Loader2 className="animate-spin" />` + "Processing..." during mock delay.
- **Confirmation checkmark**: animate on mount (scale-in or draw-in effect).
- **Form fields**: large (min 48px height), clear labels above inputs, generous spacing. Touch-friendly.
- **Error handling**: gentle inline errors on blur. On submit, scroll to first error. Never use alert() dialogs.

## Content Rules

- Use exact labels, help text, and descriptions from the spec
- Mock data defaults: Wyoming, LLC, Gold tier pre-selected (simulates arriving from Wyoming Gold package page)
- Pre-fill contact fields with realistic placeholder data for the prototype demo
- All prices must compute dynamically from the state/entity/tier/add-on selections
- Phone: (775) 555-0123

## What Matters Most

This is where money changes hands. The buyer has been educated, has chosen a package, and is now committing $1,275+. Every pixel needs to say "this is safe, legitimate, and worth it."

1. **Trust at payment** — lock icons, guarantee badge, trust signals flanking card fields. ~20% of shoppers abandon due to trust concerns here.
2. **Real-time total** — sidebar updates instantly. No surprises. Ever.
3. **Step navigation** — indicator works, back navigation preserves data, the flow feels controlled and predictable.
4. **Form usability** — large fields, clear labels, gentle validation, mobile-optimized. Minimize typing.
5. **Confirmation delight** — the success screen should feel rewarding. Animated checkmark, clear next steps, receipt they can reference.
6. **Premium feel** — clean, spacious, unhurried. Not a cluttered form dump. This checkout should feel like buying from a company you trust.
