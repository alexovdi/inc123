import type { Metadata } from "next";
import { CTABlock } from "@/design-system/components/CTABlock";
import { Alert } from "@/design-system/primitives/Alert";

export const metadata: Metadata = {
  title: "Privacy Policy | Incorporate123",
  description:
    "Incorporate123 privacy policy. How we collect, use, and protect your personal information.",
  alternates: { canonical: "https://incorporate123.co/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="space-y-0">
      {/* Hero */}
      <section className="bg-primary py-section-y text-white">
        <div className="mx-auto max-w-content px-container-x">
          <h1 className="font-display text-display font-bold">
            Privacy Policy
          </h1>
          <p className="mt-2 text-lg text-white/80">
            How Incorporate123 collects, uses, and protects your information.
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="py-section-y">
        <div className="mx-auto max-w-content px-container-x">
          <div className="mx-auto max-w-3xl">
            {/* Prototype banner */}
            <Alert
              variant="warning"
              title="Prototype Notice"
              description="Final legal content will be reviewed by legal counsel before launch."
            />

            <p className="mt-8 text-muted">Effective Date: January 1, 2025</p>

            <p className="mt-4 text-body leading-relaxed">
              Incorporate123 (&quot;we,&quot; &quot;us,&quot; or
              &quot;our&quot;) is committed to protecting the privacy of our
              clients and website visitors. This Privacy Policy explains how we
              collect, use, disclose, and safeguard your information when you
              visit our website or use our business formation and compliance
              services.
            </p>

            {/* 1. Information We Collect */}
            <section className="mt-12">
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
                  Payment information including credit card numbers, billing
                  address, and transaction history
                </li>
                <li>
                  Government-issued identification when required for filing
                  purposes
                </li>
                <li>
                  Communications you send to us, including support requests and
                  feedback
                </li>
              </ul>
              <p className="mt-4 leading-relaxed">
                We also automatically collect certain technical information,
                including your IP address, browser type, operating system,
                referring URLs, and pages visited on our site.
              </p>
            </section>

            {/* 2. How We Use Your Information */}
            <section className="mt-12">
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
                <li>Improve our website, services, and customer experience</li>
                <li>
                  Comply with legal obligations and enforce our terms of service
                </li>
                <li>
                  Send periodic newsletters or educational content about
                  business privacy and asset protection (with your consent)
                </li>
              </ul>
            </section>

            {/* 3. Cookies & Tracking */}
            <section className="mt-12">
              <h2 className="font-display text-heading-lg font-semibold text-foreground">
                3. Cookies &amp; Tracking
              </h2>
              <p className="mt-4 leading-relaxed">
                Our website uses cookies and similar tracking technologies to
                enhance your browsing experience. These include:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>
                  <strong>Essential cookies</strong> that enable core
                  functionality such as page navigation, secure areas access,
                  and shopping cart features
                </li>
                <li>
                  <strong>Analytics cookies</strong> (such as Google Analytics)
                  that help us understand how visitors interact with our site so
                  we can improve content and user experience
                </li>
                <li>
                  <strong>Marketing cookies</strong> that may be used to deliver
                  relevant advertisements and track campaign effectiveness
                </li>
              </ul>
              <p className="mt-4 leading-relaxed">
                You can control cookie preferences through your browser
                settings. Disabling certain cookies may affect site
                functionality.
              </p>
            </section>

            {/* 4. Third-Party Services */}
            <section className="mt-12">
              <h2 className="font-display text-heading-lg font-semibold text-foreground">
                4. Third-Party Services
              </h2>
              <p className="mt-4 leading-relaxed">
                We may share your information with trusted third parties who
                assist in operating our business, including:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>
                  Payment processors (Stripe, PayPal) for secure transaction
                  handling
                </li>
                <li>
                  State agencies for filing articles of incorporation,
                  organization, and other formation documents
                </li>
                <li>
                  Email service providers for transactional and marketing
                  communications
                </li>
                <li>
                  Analytics providers to monitor site performance and usage
                  patterns
                </li>
              </ul>
              <p className="mt-4 leading-relaxed">
                We do not sell, rent, or trade your personal information to
                third parties for their marketing purposes.
              </p>
            </section>

            {/* 5. Data Security */}
            <section className="mt-12">
              <h2 className="font-display text-heading-lg font-semibold text-foreground">
                5. Data Security
              </h2>
              <p className="mt-4 leading-relaxed">
                We implement industry-standard security measures to protect your
                personal information, including SSL/TLS encryption for all data
                transmitted between your browser and our servers, encrypted
                storage for sensitive data, and regular security audits.
                However, no method of electronic transmission or storage is 100%
                secure, and we cannot guarantee absolute security.
              </p>
            </section>

            {/* 6. Your Rights */}
            <section className="mt-12">
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
                  retention requirements)
                </li>
                <li>Opt out of marketing communications at any time</li>
                <li>
                  Request a portable copy of your data in a commonly used format
                </li>
              </ul>
              <p className="mt-4 leading-relaxed">
                To exercise any of these rights, please contact us using the
                information below. We will respond to your request within 30
                days.
              </p>
            </section>

            {/* 7. Contact Us */}
            <section className="mt-12">
              <h2 className="font-display text-heading-lg font-semibold text-foreground">
                7. Contact Us
              </h2>
              <p className="mt-4 leading-relaxed">
                If you have questions or concerns about this Privacy Policy or
                our data practices, please contact us:
              </p>
              <address className="mt-4 not-italic leading-relaxed text-foreground">
                <strong>Incorporate123</strong>
                <br />
                1795 Meadow Wood Lane, Suite 100
                <br />
                Reno, NV 89502
                <br />
                Phone:{" "}
                <a
                  href="tel:+17753134155"
                  className="text-secondary hover:underline"
                >
                  (775) 313-4155
                </a>
                <br />
                Email:{" "}
                <a
                  href="mailto:info@incorporate123.com"
                  className="text-secondary hover:underline"
                >
                  info@incorporate123.com
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
              href: "/gold?state=wyoming",
            }}
            secondaryCTA={{
              label: "Contact Us",
              href: "/contact",
            }}
            trustSignal="(775) 313-4155 — Call anytime"
          />
        </div>
      </section>
    </div>
  );
}
