import { useEffect } from "react";
import { CTABlock } from "@/design-system/components/CTABlock";
import { Breadcrumbs } from "@/design-system/components/Breadcrumbs";
import { Alert } from "@/design-system/primitives/Alert";

const LAST_UPDATED = "April 16, 2026";
const EFFECTIVE_DATE = "April 16, 2026";

const SECTIONS = [
  { id: "acceptance", label: "Acceptance of Terms" },
  { id: "services", label: "Description of Services" },
  { id: "not-legal-advice", label: "Not Legal or Tax Advice" },
  { id: "pricing", label: "Pricing & Payment" },
  { id: "refund", label: "Refund Policy" },
  { id: "nominee", label: "Nominee Services Terms" },
  { id: "client-responsibilities", label: "Client Responsibilities" },
  { id: "ip", label: "Intellectual Property" },
  { id: "liability", label: "Limitation of Liability" },
  { id: "dispute", label: "Dispute Resolution" },
  { id: "termination", label: "Termination" },
  { id: "changes", label: "Changes to Terms" },
  { id: "contact", label: "Contact Information" },
];

function SchemaMarkup() {
  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Terms of Service",
    url: "https://incorporate123.com/terms",
    description:
      "Terms of Service for Incorporate123. Governs use of the website and purchase of formation, privacy, and compliance services.",
  };
  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://incorporate123.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Terms of Service",
        item: "https://incorporate123.com/terms",
      },
    ],
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
    </>
  );
}

export default function TermsPage() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Terms of Service | Incorporate123";
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <div className="space-y-0">
      <SchemaMarkup />

      {/* Hero — Legal Header */}
      <section className="bg-primary py-section-y text-white">
        <div className="mx-auto max-w-content px-container-x">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Terms of Service", href: "/terms" },
            ]}
            className="mb-4 [&_a]:text-white/70 [&_a:hover]:text-white [&_span[aria-current]]:text-white"
          />
          <h1 className="font-display text-display font-bold">
            Terms of Service
          </h1>
          <p className="mt-2 text-lg text-white/80">
            The terms and conditions governing your use of Incorporate123
            services.
          </p>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-1 text-body-sm text-white/70">
            <span>
              <strong className="text-white">Effective:</strong>{" "}
              {EFFECTIVE_DATE}
            </span>
            <span>
              <strong className="text-white">Last updated:</strong>{" "}
              {LAST_UPDATED}
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-section-y">
        <div className="mx-auto max-w-content px-container-x">
          <div className="mx-auto max-w-narrow">
            <Alert
              variant="warning"
              title="Prototype Notice"
              description="Final legal content will be reviewed by legal counsel before launch."
            />

            {/* Table of Contents */}
            <nav
              aria-label="Table of contents"
              className="mt-10 rounded-lg border border-border bg-surface p-6"
            >
              <h2 className="font-display text-heading-sm font-semibold text-foreground">
                Contents
              </h2>
              <ol className="mt-4 grid gap-2 text-body-sm sm:grid-cols-2">
                {SECTIONS.map((s, i) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="text-secondary hover:underline"
                    >
                      {i + 1}. {s.label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <p className="mt-10 text-body leading-relaxed">
              Welcome to Incorporate123. By accessing our website or using our
              business formation, privacy, asset protection, and compliance
              services, you agree to be bound by the following Terms of Service.
              Please read them carefully before placing an order or using any of
              our services.
            </p>

            {/* 1. Acceptance of Terms */}
            <section id="acceptance" className="mt-12 scroll-mt-24">
              <h2 className="font-display text-heading-lg font-semibold text-foreground">
                1. Acceptance of Terms
              </h2>
              <p className="mt-4 leading-relaxed">
                By accessing or using the Incorporate123 website and services,
                you acknowledge that you have read, understood, and agree to be
                bound by these Terms of Service and our Privacy Policy. If you
                do not agree, you must discontinue use of our website and
                services immediately.
              </p>
              <p className="mt-4 leading-relaxed">
                These Terms constitute a binding legal agreement between you and
                Incorporate123, operated by Nevada Corporation Services Ltd., a
                Nevada corporation.
              </p>
            </section>

            {/* 2. Description of Services */}
            <section id="services" className="mt-12 scroll-mt-24">
              <h2 className="font-display text-heading-lg font-semibold text-foreground">
                2. Description of Services
              </h2>
              <p className="mt-4 leading-relaxed">
                Incorporate123 provides business formation, registered agent,
                privacy, asset protection, nominee, offshore, and compliance
                services. Our services include but are not limited to:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>
                  LLC and corporation formation in Wyoming, Nevada, California,
                  Florida, and other U.S. states
                </li>
                <li>Registered agent services and mail forwarding</li>
                <li>
                  Privacy-focused business structures including nominee manager
                  and nominee officer services
                </li>
                <li>Annual report filing and compliance monitoring</li>
                <li>EIN (Employer Identification Number) procurement</li>
                <li>Operating agreement and corporate document preparation</li>
                <li>
                  Offshore entity formation through vetted custodian partners
                </li>
              </ul>
            </section>

            {/* 3. Not Legal or Tax Advice */}
            <section id="not-legal-advice" className="mt-12 scroll-mt-24">
              <h2 className="font-display text-heading-lg font-semibold text-foreground">
                3. Not Legal or Tax Advice
              </h2>
              <aside className="mt-4 rounded-lg border border-accent/40 bg-accent/5 p-6">
                <p className="font-semibold text-foreground">
                  Important disclaimer
                </p>
                <p className="mt-3 leading-relaxed">
                  Incorporate123 (operated by Nevada Corporation Services Ltd.)
                  is a business formation and corporate services company. We are{" "}
                  <strong>NOT</strong> a law firm, accounting firm, or tax
                  advisory practice. Our services include entity formation,
                  registered agent, nominee services, corporate records
                  maintenance, and compliance filing. We do not provide legal
                  advice, tax advice, or investment advice.
                </p>
                <p className="mt-3 leading-relaxed">
                  Clients are strongly encouraged to consult qualified legal and
                  tax professionals for their specific situations. Any
                  educational content on our website is provided for general
                  information only and does not constitute legal or tax advice.
                </p>
              </aside>
            </section>

            {/* 4. Pricing & Payment */}
            <section id="pricing" className="mt-12 scroll-mt-24">
              <h2 className="font-display text-heading-lg font-semibold text-foreground">
                4. Pricing &amp; Payment
              </h2>
              <p className="mt-4 leading-relaxed">
                All prices listed on our website are in U.S. dollars. Our
                packages are all-inclusive: state filing fees, registered agent
                service for the first year, and any services described in the
                package are included in the package price with no hidden fees.
              </p>
              <p className="mt-4 leading-relaxed">
                We accept credit card, debit card, PayPal, and cryptocurrency.
                Payment is required at the time of order.
              </p>
              <p className="mt-4 leading-relaxed">
                <strong>Annual renewals.</strong> Registered agent services,
                nominee services, and compliance monitoring are billed annually.
                You will receive a renewal notice at least 30 days before your
                renewal date.{" "}
                {/* PENDING DAVID: Confirm whether annual renewals auto-renew by default or require manual confirmation. Brand promise on About page implies no surprise auto-renewals. */}
                Renewals do not charge automatically without your explicit
                authorization; you must confirm each renewal to continue
                service. Failure to renew registered agent services may result
                in loss of good standing with the state.
              </p>
              <p className="mt-4 leading-relaxed">
                We reserve the right to adjust pricing at any time. Price
                changes will not affect orders already placed and paid for.
              </p>
            </section>

            {/* 5. Refund Policy */}
            <section id="refund" className="mt-12 scroll-mt-24">
              <h2 className="font-display text-heading-lg font-semibold text-foreground">
                5. Refund Policy
              </h2>
              <p className="mt-4 leading-relaxed font-semibold text-foreground">
                30-Day Money-Back Guarantee
              </p>
              <p className="mt-3 leading-relaxed">
                If you are not satisfied with our service within 30 days of your
                order date, we will refund your formation service fee in full.
                Contact us within 30 days of your order date to request a
                refund. Approved refunds are processed within 5 business days to
                your original payment method.
              </p>
              <p className="mt-4 leading-relaxed font-semibold text-foreground">
                Exclusions
              </p>
              <p className="mt-3 leading-relaxed">
                The following fees are non-refundable because they are paid to
                third parties on your behalf and cannot be recovered:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  <strong>State filing fees</strong> already paid to the state
                  &mdash; these fees belong to the state, not Incorporate123
                </li>
                <li>
                  <strong>Government registration fees</strong> for offshore
                  entities once filed with the foreign jurisdiction
                </li>
                <li>
                  <strong>KYC administration fees</strong> once verification
                  processing has begun
                </li>
              </ul>
              <p className="mt-4 leading-relaxed">
                Registered agent and nominee service fees for periods already
                served are not refundable. Unused portions of future service
                periods may be refundable on a pro-rated basis at our
                discretion.
              </p>
              <p className="mt-4 leading-relaxed">
                {/* PENDING DAVID: How are cryptocurrency refunds processed — refund in crypto at current value, or USD equivalent at time of purchase? */}
                For cryptocurrency payments, refunds are issued at our
                discretion either in the original cryptocurrency or in USD
                equivalent.
              </p>
            </section>

            {/* 6. Nominee Services Terms */}
            <section id="nominee" className="mt-12 scroll-mt-24">
              <h2 className="font-display text-heading-lg font-semibold text-foreground">
                6. Nominee Services Terms
              </h2>
              <p className="mt-4 leading-relaxed">
                Nominee services provide a layer of public-record privacy by
                placing a third party on state filings in place of the
                beneficial owner. Nominee services are strictly limited in
                scope:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>
                  Nominees serve only in the capacity described in your service
                  agreement (manager, officer, director, or organizer depending
                  on the package).
                </li>
                <li>
                  Nominees do not control the entity&rsquo;s operations,
                  finances, or decision-making. Beneficial ownership and control
                  remain with the client at all times.
                </li>
                <li>
                  Nominees do not sign contracts, open bank accounts, or act on
                  the client&rsquo;s behalf beyond what is contractually
                  defined.
                </li>
                <li>
                  Nominee services require annual renewal. Failure to renew will
                  result in resignation of the nominee and public disclosure of
                  the beneficial owner in subsequent state filings.
                </li>
                <li>
                  Clients are responsible for providing accurate information and
                  maintaining compliance with all applicable laws. Nominees may
                  resign at any time if the client engages in illegal activity
                  or misrepresents the purpose of the entity.
                </li>
              </ul>
            </section>

            {/* 7. Client Responsibilities */}
            <section
              id="client-responsibilities"
              className="mt-12 scroll-mt-24"
            >
              <h2 className="font-display text-heading-lg font-semibold text-foreground">
                7. Client Responsibilities
              </h2>
              <p className="mt-4 leading-relaxed">
                By using our services, you agree to:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>
                  Provide accurate, complete, and current information for all
                  filings
                </li>
                <li>
                  Comply with all KYC (Know-Your-Customer) and anti-money
                  laundering requirements, including providing government
                  identification when required
                </li>
                <li>
                  File all required federal, state, and local tax returns for
                  your entity &mdash; Incorporate123 does not prepare or file
                  tax returns
                </li>
                <li>
                  Maintain the entity in good standing by renewing services,
                  filing annual reports, and paying applicable fees on time
                </li>
                <li>
                  Use the services only for lawful purposes and not for any
                  illegal, fraudulent, or abusive activity
                </li>
                <li>
                  Notify us promptly of any changes to your contact information
                  or beneficial ownership
                </li>
              </ul>
            </section>

            {/* 8. Intellectual Property */}
            <section id="ip" className="mt-12 scroll-mt-24">
              <h2 className="font-display text-heading-lg font-semibold text-foreground">
                8. Intellectual Property
              </h2>
              <p className="mt-4 leading-relaxed">
                All content on the Incorporate123 website, including text,
                graphics, logos, icons, images, and software, is the property of
                Incorporate123 and is protected by U.S. and international
                copyright, trademark, and intellectual property laws.
              </p>
              <p className="mt-4 leading-relaxed">
                You may not reproduce, distribute, modify, create derivative
                works from, or publicly display any content from our website
                without our prior written consent. Limited personal,
                non-commercial use of our educational content is permitted with
                proper attribution.
              </p>
            </section>

            {/* 9. Limitation of Liability */}
            <section id="liability" className="mt-12 scroll-mt-24">
              <h2 className="font-display text-heading-lg font-semibold text-foreground">
                9. Limitation of Liability
              </h2>
              <p className="mt-4 leading-relaxed">
                To the maximum extent permitted by law, Incorporate123, its
                owners, employees, and affiliates shall not be liable for any
                indirect, incidental, special, consequential, or punitive
                damages arising from your use of our services, including but not
                limited to loss of profits, data, or business opportunities.
              </p>
              <p className="mt-4 leading-relaxed">
                Our total liability for any claim arising from these Terms or
                our services shall not exceed the total amount you paid to
                Incorporate123 in the twelve (12) months preceding the claim.
              </p>
              <p className="mt-4 leading-relaxed">
                We are not responsible for delays caused by state agencies, the
                accuracy of information you provide, or any consequences
                resulting from your business decisions. You agree to indemnify
                and hold Incorporate123 harmless from any claim arising out of
                your use of our services, your violation of these Terms, or your
                violation of any law or the rights of a third party.
              </p>
            </section>

            {/* 10. Dispute Resolution */}
            <section id="dispute" className="mt-12 scroll-mt-24">
              <h2 className="font-display text-heading-lg font-semibold text-foreground">
                10. Dispute Resolution
              </h2>
              <p className="mt-4 leading-relaxed">
                These Terms of Service shall be governed by and construed in
                accordance with the laws of the State of Nevada, without regard
                to its conflict of law provisions. Any disputes arising under
                these Terms shall be resolved exclusively in the state or
                federal courts located in Washoe County, Nevada.
              </p>
              <p className="mt-4 leading-relaxed">
                Before initiating any formal dispute, both parties agree to
                attempt in good faith to resolve the matter through direct
                communication for at least 30 days.
              </p>
            </section>

            {/* 11. Termination */}
            <section id="termination" className="mt-12 scroll-mt-24">
              <h2 className="font-display text-heading-lg font-semibold text-foreground">
                11. Termination
              </h2>
              <p className="mt-4 leading-relaxed">
                Either party may terminate the service relationship at any time.
                Clients may cancel future services by contacting us in writing.
                Cancellation takes effect at the end of the current paid service
                period; refunds for unused portions are handled under Section 5.
              </p>
              <p className="mt-4 leading-relaxed">
                Incorporate123 reserves the right to terminate services
                immediately if a client violates these Terms, engages in illegal
                activity, or provides materially false information. Upon
                termination, the client is responsible for appointing a
                replacement registered agent and transitioning any nominee roles
                through proper filings with the state.
              </p>
            </section>

            {/* 12. Changes to Terms */}
            <section id="changes" className="mt-12 scroll-mt-24">
              <h2 className="font-display text-heading-lg font-semibold text-foreground">
                12. Changes to Terms
              </h2>
              <p className="mt-4 leading-relaxed">
                We may update these Terms of Service from time to time. When we
                make material changes, we will update the &ldquo;Last
                updated&rdquo; date at the top of this page and, for changes
                affecting active clients, send an email notification to your
                account email. Continued use of our services after an update
                constitutes acceptance of the revised Terms.
              </p>
            </section>

            {/* 13. Contact Information */}
            <section id="contact" className="mt-12 scroll-mt-24">
              <h2 className="font-display text-heading-lg font-semibold text-foreground">
                13. Contact Information
              </h2>
              <p className="mt-4 leading-relaxed">
                If you have questions about these Terms of Service, contact us:
              </p>
              {/* PENDING DAVID: Same question as Privacy Policy — does legal counsel require a registered office address on this page? Default: email + phone only per brand rule. */}
              <address className="mt-4 not-italic leading-relaxed text-foreground">
                <strong>Incorporate123</strong>
                <br />
                Phone:{" "}
                <a
                  href="tel:+18005530615"
                  className="text-secondary hover:underline"
                >
                  1-800-553-0615
                </a>
                <br />
                Email:{" "}
                <a
                  href="mailto:legal@incorporate123.com"
                  className="text-secondary hover:underline"
                >
                  legal@incorporate123.com
                </a>
              </address>
            </section>
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="py-section-y">
        <div className="mx-auto max-w-content px-container-x">
          <CTABlock
            variant="dark"
            heading="Ready to Form Your Business?"
            description="All-inclusive packages with no hidden fees. 25 years of formation expertise."
            primaryCTA={{
              label: "View Packages & Pricing",
              href: "/wyoming-gold",
            }}
            secondaryCTA={{
              label: "Contact Us",
              href: "/contact",
            }}
            trustSignal="1-800-553-0615 — Call anytime"
          />
        </div>
      </section>
    </div>
  );
}
