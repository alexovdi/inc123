import { useEffect } from "react";
import { CTABlock } from "@/design-system/components/CTABlock";
import { Breadcrumbs } from "@/design-system/components/Breadcrumbs";
import { Alert } from "@/design-system/primitives/Alert";

const LAST_UPDATED = "April 16, 2026";
const EFFECTIVE_DATE = "April 16, 2026";

const SECTIONS = [
  { id: "information-we-collect", label: "Information We Collect" },
  { id: "how-we-use", label: "How We Use Your Information" },
  { id: "how-we-protect", label: "How We Protect Your Information" },
  { id: "information-we-share", label: "Information We Share" },
  { id: "cookies", label: "Cookies & Tracking" },
  { id: "your-rights", label: "Your Rights" },
  { id: "data-retention", label: "Data Retention" },
  { id: "childrens-privacy", label: "Children’s Privacy" },
  { id: "crypto-privacy", label: "Cryptocurrency Payment Privacy" },
  { id: "changes", label: "Changes to This Policy" },
  { id: "contact", label: "Contact Information" },
];

function SchemaMarkup() {
  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy Policy",
    url: "https://incorporate123.com/privacy-policy",
    description:
      "Incorporate123's privacy policy. How we collect, use, and protect your information. We do not sell your personal data.",
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
        name: "Privacy Policy",
        item: "https://incorporate123.com/privacy-policy",
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

export default function PrivacyPolicyPage() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Privacy Policy | Incorporate123";
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
              { label: "Privacy Policy", href: "/privacy-policy" },
            ]}
            className="mb-4 [&_a]:text-white/70 [&_a:hover]:text-white [&_span[aria-current]]:text-white"
          />
          <h1 className="font-display text-display font-bold">
            Privacy Policy
          </h1>
          <p className="mt-2 text-lg text-white/80">
            How Incorporate123 collects, uses, and protects your information.
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

            {/* Brand Promise Callout */}
            <aside className="mt-8 rounded-lg border border-secondary/30 bg-secondary/5 p-6">
              <p className="text-body font-semibold text-foreground">
                Our privacy promise
              </p>
              <ul className="mt-3 space-y-2 text-body leading-relaxed">
                <li>
                  We do not sell, rent, or trade your personal information to
                  third parties &mdash; ever.
                </li>
                <li>
                  We do not use advertising cookies or third-party tracking
                  pixels.
                </li>
                <li>
                  We resist informal government requests for client information
                  and respond only to valid legal process.
                </li>
              </ul>
            </aside>

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
              Incorporate123 (&quot;we,&quot; &quot;us,&quot; or
              &quot;our&quot;) is committed to protecting the privacy of our
              clients and website visitors. This Privacy Policy explains how we
              collect, use, disclose, and safeguard your information when you
              visit our website or use our business formation, privacy, asset
              protection, and compliance services. For a company whose entire
              purpose is privacy, we hold ourselves to a higher standard than
              the legal minimum.
            </p>

            {/* 1. Information We Collect */}
            <section id="information-we-collect" className="mt-12 scroll-mt-24">
              <h2 className="font-display text-heading-lg font-semibold text-foreground">
                1. Information We Collect
              </h2>
              <p className="mt-4 leading-relaxed">
                We collect information you provide directly when using our
                services, including:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>
                  Full name, mailing address, phone number, and email address
                </li>
                <li>
                  Business information such as entity type, desired state of
                  formation, and registered agent details
                </li>
                <li>
                  Payment information processed by our payment providers (Stripe
                  and PayPal) &mdash; we do not store full card numbers on our
                  servers
                </li>
                <li>
                  Government-issued identification when required for KYC
                  compliance on offshore formations or cryptocurrency
                  transactions
                </li>
                <li>
                  Communications you send to us, including support requests and
                  feedback
                </li>
              </ul>
              <p className="mt-4 leading-relaxed">
                We also automatically collect limited technical information,
                including IP address, browser type, operating system, referring
                URLs, and pages visited on our site through Google Analytics 4.
                We do not use third-party advertising trackers or remarketing
                pixels.
              </p>
            </section>

            {/* 2. How We Use Your Information */}
            <section id="how-we-use" className="mt-12 scroll-mt-24">
              <h2 className="font-display text-heading-lg font-semibold text-foreground">
                2. How We Use Your Information
              </h2>
              <p className="mt-4 leading-relaxed">
                We use the information we collect to:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>
                  Process and fulfill business formation orders, including state
                  filings, registered agent services, and compliance monitoring
                </li>
                <li>
                  Communicate with you about your orders, account status, and
                  annual compliance deadlines
                </li>
                <li>Provide customer support and respond to inquiries</li>
                <li>
                  Improve our website and services based on aggregate,
                  anonymized usage data
                </li>
                <li>
                  Comply with legal obligations and enforce our Terms of Service
                </li>
                <li>
                  Send occasional educational content about business privacy and
                  asset protection &mdash; only with your explicit opt-in
                  consent
                </li>
              </ul>
            </section>

            {/* 3. How We Protect Your Information */}
            <section id="how-we-protect" className="mt-12 scroll-mt-24">
              <h2 className="font-display text-heading-lg font-semibold text-foreground">
                3. How We Protect Your Information
              </h2>
              <p className="mt-4 leading-relaxed">
                We implement industry-standard security measures to protect your
                personal information:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>
                  SSL/TLS encryption for all data transmitted between your
                  browser and our servers
                </li>
                <li>
                  Encrypted storage for sensitive client records and formation
                  documents
                </li>
                <li>
                  Role-based access controls &mdash; only staff working on your
                  matter can access your records
                </li>
                <li>
                  Client entity formation records maintained through our
                  offshore custodian are subject to the privacy protections
                  described in your service agreement
                </li>
                <li>
                  Regular security reviews of our systems and third-party
                  providers
                </li>
              </ul>
              <p className="mt-4 leading-relaxed">
                No method of electronic transmission or storage is 100% secure,
                and we cannot guarantee absolute security. We take every
                reasonable step to minimize risk.
              </p>
            </section>

            {/* 4. Information We Share */}
            <section id="information-we-share" className="mt-12 scroll-mt-24">
              <h2 className="font-display text-heading-lg font-semibold text-foreground">
                4. Information We Share
              </h2>
              <p className="mt-4 leading-relaxed">
                <strong>
                  We do not sell, rent, or trade your personal information to
                  third parties &mdash; ever.
                </strong>{" "}
                We share information only with trusted parties who need it to
                deliver your service:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>
                  <strong>State filing agencies</strong> &mdash; required to
                  file articles of incorporation, organization, and other
                  formation documents on your behalf
                </li>
                <li>
                  <strong>Payment processors</strong> (Stripe, PayPal) for
                  secure transaction handling
                </li>
                <li>
                  <strong>Registered agent partners</strong> where we use a
                  partner in a state we don&rsquo;t directly cover
                </li>
                <li>
                  <strong>Offshore custodians</strong> for clients who select
                  offshore formations, bound by confidentiality agreements
                </li>
              </ul>
              <p className="mt-4 leading-relaxed">
                We will not disclose client information to any party in response
                to informal inquiries. We respond only to valid legal process
                (subpoena, court order, or equivalent) and, where permitted by
                law, will notify affected clients before responding.
              </p>
            </section>

            {/* 5. Cookies & Tracking */}
            <section id="cookies" className="mt-12 scroll-mt-24">
              <h2 className="font-display text-heading-lg font-semibold text-foreground">
                5. Cookies &amp; Tracking
              </h2>
              <p className="mt-4 leading-relaxed">
                Our website uses only the cookies necessary to run the site and
                understand aggregate usage:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>
                  <strong>Essential cookies</strong> that enable core
                  functionality such as page navigation, secure checkout, and
                  cart persistence
                </li>
                <li>
                  <strong>Analytics cookies</strong> (Google Analytics 4) that
                  help us understand how visitors interact with our site in
                  aggregate
                </li>
              </ul>
              <p className="mt-4 leading-relaxed">
                <strong>
                  We do not use advertising cookies, retargeting pixels, or
                  third-party tracking scripts.
                </strong>{" "}
                You can control cookie preferences through your browser
                settings. Disabling essential cookies may affect site
                functionality.
              </p>
            </section>

            {/* 6. Your Rights */}
            <section id="your-rights" className="mt-12 scroll-mt-24">
              <h2 className="font-display text-heading-lg font-semibold text-foreground">
                6. Your Rights
              </h2>
              <p className="mt-4 leading-relaxed">
                Depending on your jurisdiction, you may have the right to:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>Access the personal information we hold about you</li>
                <li>
                  Request correction of inaccurate or incomplete information
                </li>
                <li>
                  Request deletion of your personal data (subject to legal
                  retention requirements for entity records)
                </li>
                <li>Opt out of any marketing communications at any time</li>
                <li>
                  Request a portable copy of your data in a commonly used format
                </li>
              </ul>
              <p className="mt-4 leading-relaxed">
                <strong>California residents (CCPA):</strong> You have
                additional rights to know what personal information we collect,
                to delete it, and to opt out of any sale of personal information
                &mdash; which we do not engage in regardless.
              </p>
              <p className="mt-4 leading-relaxed">
                {/* PENDING DAVID: GDPR applicability — does Incorporate123 actively serve EU residents? If yes, add DPO contact + right-to-erasure language. */}
                To exercise any of these rights, contact us using the
                information at the bottom of this page. We will respond within
                30 days.
              </p>
            </section>

            {/* 7. Data Retention */}
            <section id="data-retention" className="mt-12 scroll-mt-24">
              <h2 className="font-display text-heading-lg font-semibold text-foreground">
                7. Data Retention
              </h2>
              <p className="mt-4 leading-relaxed">
                We retain personal information only as long as necessary:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>
                  <strong>Active client records</strong> &mdash; for the
                  duration of your service relationship and for as long as your
                  entity remains in good standing through us
                </li>
                <li>
                  <strong>Formation and compliance records</strong> &mdash;
                  retained for a minimum of 7 years after service termination to
                  satisfy state record-keeping obligations and support any
                  future audits
                </li>
                <li>
                  <strong>Financial transaction records</strong> &mdash;
                  retained for 7 years to satisfy tax and accounting
                  requirements
                </li>
                <li>
                  <strong>Marketing preferences</strong> &mdash; retained until
                  you unsubscribe, then deleted within 30 days
                </li>
                <li>
                  <strong>Analytics data</strong> &mdash; retained in
                  aggregated, anonymized form per Google Analytics 4 default
                  retention settings
                </li>
              </ul>
              <p className="mt-4 leading-relaxed">
                After the retention period ends, data is securely deleted or
                anonymized.
              </p>
            </section>

            {/* 8. Children's Privacy */}
            <section id="childrens-privacy" className="mt-12 scroll-mt-24">
              <h2 className="font-display text-heading-lg font-semibold text-foreground">
                8. Children&rsquo;s Privacy
              </h2>
              <p className="mt-4 leading-relaxed">
                Our services are not directed to children under 13. We do not
                knowingly collect personal information from children under 13 in
                compliance with the Children&rsquo;s Online Privacy Protection
                Act (COPPA). If you believe we have collected information from a
                child under 13, contact us immediately and we will delete the
                information.
              </p>
            </section>

            {/* 9. Cryptocurrency Payment Privacy */}
            <section id="crypto-privacy" className="mt-12 scroll-mt-24">
              <h2 className="font-display text-heading-lg font-semibold text-foreground">
                9. Cryptocurrency Payment Privacy
              </h2>
              <p className="mt-4 leading-relaxed">
                {/* PENDING DAVID: Confirm crypto KYC handling — what data collected, how long retained, whether wallet addresses are stored. */}
                When you pay in cryptocurrency, we retain the transaction ID and
                wallet address necessary to verify payment and resolve disputes.
                Where required by law for offshore formations or transactions
                exceeding regulatory thresholds, we collect Know-Your-Customer
                (KYC) identification data. KYC data is handled with the same
                protections as other sensitive records described above.
              </p>
            </section>

            {/* 10. Changes to This Policy */}
            <section id="changes" className="mt-12 scroll-mt-24">
              <h2 className="font-display text-heading-lg font-semibold text-foreground">
                10. Changes to This Policy
              </h2>
              <p className="mt-4 leading-relaxed">
                We may update this Privacy Policy from time to time to reflect
                changes in our practices, services, or legal requirements. When
                we make material changes, we will update the &ldquo;Last
                updated&rdquo; date at the top of this page and, for material
                changes affecting active clients, send an email notification to
                your account email. Continued use of our services after an
                update constitutes acceptance of the revised policy.
              </p>
            </section>

            {/* 11. Contact Information */}
            <section id="contact" className="mt-12 scroll-mt-24">
              <h2 className="font-display text-heading-lg font-semibold text-foreground">
                11. Contact Information
              </h2>
              <p className="mt-4 leading-relaxed">
                If you have questions or concerns about this Privacy Policy or
                our data practices, contact us:
              </p>
              {/* PENDING DAVID: Resolve registered-office requirement. If legal counsel confirms a physical address is required for GDPR/liability compliance, add it here. Default per brand rule: email + phone only. */}
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
                  href="mailto:privacy@incorporate123.com"
                  className="text-secondary hover:underline"
                >
                  privacy@incorporate123.com
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
            heading="Ready to Protect Your Privacy?"
            description="25 years of privacy expertise. All-inclusive packages. Real people who answer the phone."
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
