import { useEffect } from "react";
import { Link } from "react-router-dom";
import { offshoreData } from "@/data/offshore";
import { Accordion, AccordionItem } from "@/design-system/components/Accordion";
import { Breadcrumbs } from "@/design-system/components/Breadcrumbs";
import { Icon } from "@/design-system/primitives/Icon";
import { cn } from "@/design-system/utils/cn";

const JURISDICTION_ICON: Record<string, string> = {
  nevis: "Shield",
  "british-virgin-islands": "TrendingUp",
  panama: "Globe",
  "hong-kong": "Building2",
  belize: "Lock",
  "cook-islands": "Trophy",
};

/* ------------------------------------------------
   Schema
   ------------------------------------------------ */
function OffshoreSchema() {
  const faqs = offshoreData.hub.hubFaqs ?? [];
  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
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
        name: "Offshore Services",
        item: "https://incorporate123.com/offshore",
      },
    ],
  };
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Incorporate123",
    url: "https://incorporate123.com/",
    description:
      "International entity formation in Nevis, BVI, Panama, and Hong Kong. 25 years of experience.",
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
    </>
  );
}

/* ------------------------------------------------
   Jurisdiction Card
   ------------------------------------------------ */
function JurisdictionCard({
  slug,
  name,
  region,
  entityType,
  tagline,
  description,
  startingPrice,
  annualRenewal,
  timeline,
}: {
  slug: string;
  name: string;
  region?: string;
  entityType?: string;
  tagline?: string;
  description: string;
  startingPrice?: string;
  annualRenewal?: string;
  timeline?: string;
}) {
  const isPending = startingPrice === "PENDING DAVID";
  return (
    <Link
      to={`/offshore/${slug}`}
      className="group flex h-full flex-col rounded-card border border-border bg-surface p-6 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-card-hover"
    >
      <div className="flex items-start gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
          <Icon
            name={JURISDICTION_ICON[slug] ?? "Globe"}
            size="lg"
            className="text-primary"
          />
        </div>
        <div className="flex-1">
          <h3 className="font-display text-heading-sm font-bold text-foreground group-hover:text-secondary">
            {name}
          </h3>
          {region && region !== name && (
            <p className="text-caption text-muted">{region}</p>
          )}
          {entityType && (
            <p className="mt-1 text-body-sm text-muted">{entityType}</p>
          )}
        </div>
      </div>

      {tagline && (
        <p className="mt-4 text-body font-medium leading-snug text-foreground">
          {tagline}
        </p>
      )}

      <p className="mt-3 flex-1 text-body-sm leading-relaxed text-muted">
        {description.slice(0, 220)}
        {description.length > 220 && "…"}
      </p>

      <dl className="mt-5 grid grid-cols-2 gap-3 border-t border-border pt-4 text-body-sm">
        <div>
          <dt className="text-caption text-muted">Starting from</dt>
          <dd
            className={cn(
              "font-mono font-semibold",
              isPending ? "text-accent" : "text-foreground",
            )}
          >
            {startingPrice ?? "Contact us"}
          </dd>
        </div>
        <div>
          <dt className="text-caption text-muted">Annual renewal</dt>
          <dd
            className={cn(
              "font-mono font-semibold",
              annualRenewal === "PENDING DAVID"
                ? "text-accent"
                : "text-foreground",
            )}
          >
            {annualRenewal ?? "Contact us"}
          </dd>
        </div>
        {timeline && (
          <div className="col-span-2">
            <dt className="text-caption text-muted">Formation timeline</dt>
            <dd className="font-medium text-foreground">{timeline}</dd>
          </div>
        )}
      </dl>

      <div className="mt-4 inline-flex items-center gap-1 text-body-sm font-medium text-secondary">
        Learn More
        <Icon
          name="ArrowRight"
          size="sm"
          className="transition-transform group-hover:translate-x-0.5"
        />
      </div>
    </Link>
  );
}

/* ------------------------------------------------
   Page
   ------------------------------------------------ */
export default function OffshorePage() {
  const { hub, jurisdictions } = offshoreData;
  const primaryJurisdictions = jurisdictions.filter((j) => j.primary);
  const secondaryJurisdictions = jurisdictions.filter((j) => !j.primary);
  const hubFaqs = hub.hubFaqs ?? [];

  useEffect(() => {
    const previousTitle = document.title;
    document.title =
      "Offshore Formation — Nevis, BVI, Panama, Hong Kong | Incorporate123";
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <main>
      <OffshoreSchema />

      {/* ------------------------------------------------
          Hero — offshore-dark (distinct from pillar navy)
          ------------------------------------------------ */}
      <section className="bg-offshore-dark py-section-y text-white">
        <div className="mx-auto max-w-content px-container-x">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Offshore Services", href: "/offshore" },
            ]}
            className="mb-6 [&_a]:text-white/70 [&_a:hover]:text-white [&_span[aria-current]]:text-white"
          />
          <p className="mb-3 text-body-sm font-semibold uppercase tracking-[0.15em] text-white/70">
            International Services
          </p>
          <h1 className="font-display text-display font-bold">
            {hub.headline}
          </h1>
          <p className="mt-4 max-w-narrow text-heading-sm text-white/80">
            {hub.subheadline}
          </p>
          <p className="mt-4 max-w-narrow text-body text-white/70">
            {hub.description}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/80 bg-transparent px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
            >
              Schedule a Consultation About Offshore Structures
              <Icon name="ArrowRight" size="sm" />
            </Link>
          </div>

          <dl className="mt-10 grid max-w-narrow grid-cols-1 gap-4 text-body-sm sm:grid-cols-3">
            <div>
              <dt className="text-white/70">Jurisdictions</dt>
              <dd className="font-mono text-heading-sm font-bold text-white">
                4 Primary
              </dd>
            </div>
            <div>
              <dt className="text-white/70">Experience</dt>
              <dd className="font-mono text-heading-sm font-bold text-white">
                25 Years
              </dd>
            </div>
            <div>
              <dt className="text-white/70">Offshore Services Since</dt>
              <dd className="font-mono text-heading-sm font-bold text-white">
                2000
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* ------------------------------------------------
          Legitimacy Framing
          ------------------------------------------------ */}
      <section className="bg-surface py-section-y px-container-x">
        <div className="mx-auto max-w-content">
          <div className="mx-auto max-w-narrow">
            <p className="text-body-sm font-semibold uppercase tracking-[0.15em] text-secondary">
              About Offshore Structures
            </p>
            <h2 className="mt-2 font-display text-heading-lg font-bold text-foreground">
              Offshore Is a Business Tool, Not a Loophole.
            </h2>
            <div className="mt-6 space-y-5 text-body leading-relaxed text-muted">
              <p>
                International entity formation is used by legitimate businesses
                worldwide for asset protection, international trade,
                intellectual property management, privacy, and estate planning.
                Nevis LLCs, BVI companies, Panama foundations, and Hong Kong
                companies are standard structures in international commerce —
                used by multinational corporations, investment funds, and
                high-net-worth individuals as part of comprehensive asset
                structuring.
              </p>
              <p>
                U.S. persons who own or control offshore entities have specific
                tax reporting obligations to the IRS &mdash; and we are
                transparent about this from the beginning. Offshore structures
                do not eliminate U.S. tax obligations. They provide structural,
                jurisdictional, and privacy benefits that complement domestic
                entity strategies. We help you build the structure; your CPA
                handles the tax implications.
              </p>
            </div>

            <aside className="mt-8 rounded-lg border border-border bg-background p-6">
              <p className="text-body leading-relaxed text-foreground">
                <strong>We are not attorneys, tax advisors, or CPAs.</strong>{" "}
                International entity formation involves complex legal and tax
                considerations specific to your situation. We strongly recommend
                consulting with qualified legal and tax professionals before
                proceeding with any offshore structure. We form entities &mdash;
                we don&rsquo;t provide legal or tax advice.
              </p>
            </aside>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------
          Jurisdiction Cards — Primary (spec: Nevis, BVI, Panama, HK)
          ------------------------------------------------ */}
      <section className="bg-background py-section-y px-container-x">
        <div className="mx-auto max-w-content">
          <div className="mb-10 max-w-narrow">
            <p className="text-body-sm font-semibold uppercase tracking-[0.15em] text-secondary">
              Available Jurisdictions
            </p>
            <h2 className="mt-2 font-display text-heading-lg font-bold text-foreground">
              Four Jurisdictions. Each With Distinct Advantages.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {primaryJurisdictions.map((j) => (
              <JurisdictionCard
                key={j.slug}
                slug={j.slug}
                name={j.name}
                region={j.region}
                entityType={j.entityType}
                tagline={j.tagline}
                description={j.description}
                startingPrice={j.startingPrice}
                annualRenewal={j.annualRenewal}
                timeline={j.timeline}
              />
            ))}
          </div>

          {/* Secondary jurisdictions — Belize, Cook Islands (PENDING DAVID status) */}
          {secondaryJurisdictions.length > 0 && (
            <div className="mt-12">
              <h3 className="font-display text-heading-sm font-semibold text-foreground">
                Also Available
              </h3>
              <p className="mt-1 text-body-sm text-muted">
                Specialized jurisdictions available on request.
              </p>
              <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
                {secondaryJurisdictions.map((j) => (
                  <JurisdictionCard
                    key={j.slug}
                    slug={j.slug}
                    name={j.name}
                    region={j.region}
                    entityType={j.entityType}
                    tagline={j.tagline}
                    description={j.description}
                    startingPrice={j.startingPrice}
                    annualRenewal={j.annualRenewal}
                    timeline={j.timeline}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ------------------------------------------------
          Domestic + Offshore Connection
          ------------------------------------------------ */}
      <section className="bg-surface py-section-y px-container-x">
        <div className="mx-auto max-w-content">
          <div className="mx-auto max-w-narrow">
            <p className="text-body-sm font-semibold uppercase tracking-[0.15em] text-secondary">
              Domestic + International
            </p>
            <h2 className="mt-2 font-display text-heading-lg font-bold text-foreground">
              How Offshore Structures Complement Your Domestic Entity
            </h2>
            <p className="mt-4 text-body leading-relaxed text-muted">
              Most Incorporate123 clients start with a domestic structure
              &mdash; a Wyoming or Nevada LLC with nominee services and
              year-round privacy. For clients who need additional layers,
              offshore entities provide jurisdictional separation, enhanced
              asset protection, and international operational capability.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            <article className="rounded-card border border-border bg-background p-6">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-secondary/10 font-mono text-caption font-bold text-secondary">
                  1
                </span>
                <h3 className="font-display font-semibold text-foreground">
                  Wyoming LLC + Offshore Records Custodian
                </h3>
              </div>
              <p className="mt-3 text-body-sm leading-relaxed text-muted">
                Your Wyoming entity is formed domestically with nominees.
                Corporate records are stored with our offshore custodian outside
                U.S. jurisdiction. Included in every Gold package.
              </p>
              <Link
                to="/wyoming-gold"
                className="mt-4 inline-flex items-center gap-1 text-body-sm font-medium text-secondary hover:underline"
              >
                View Gold Package
                <Icon name="ArrowRight" size="sm" />
              </Link>
            </article>

            <article className="rounded-card border border-border bg-background p-6">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-secondary/10 font-mono text-caption font-bold text-secondary">
                  2
                </span>
                <h3 className="font-display font-semibold text-foreground">
                  Wyoming LLC + Nevis LLC
                </h3>
              </div>
              <p className="mt-3 text-body-sm leading-relaxed text-muted">
                A Nevis LLC holds assets that need the strongest possible
                protection. $100,000 plaintiff bond, 1-year SOL, and no
                foreign-judgment enforcement.
              </p>
              <Link
                to="/offshore/nevis"
                className="mt-4 inline-flex items-center gap-1 text-body-sm font-medium text-secondary hover:underline"
              >
                Learn about Nevis
                <Icon name="ArrowRight" size="sm" />
              </Link>
            </article>

            <article className="rounded-card border border-border bg-background p-6">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-secondary/10 font-mono text-caption font-bold text-secondary">
                  3
                </span>
                <h3 className="font-display font-semibold text-foreground">
                  Domestic Holding LLC + Offshore Trust
                </h3>
              </div>
              <p className="mt-3 text-body-sm leading-relaxed text-muted">
                For estate planning and generational wealth transfer. Combines
                domestic asset protection with international trust benefits.
                {/* PENDING DAVID: Bahamas Dynasty Trust — offered? If yes, needs standalone page (tracker OFF-17). */}
              </p>
              <Link
                to="/contact"
                className="mt-4 inline-flex items-center gap-1 text-body-sm font-medium text-secondary hover:underline"
              >
                Discuss trust structures
                <Icon name="ArrowRight" size="sm" />
              </Link>
            </article>
          </div>

          <div className="mx-auto mt-10 max-w-narrow">
            <p className="rounded-lg border border-border bg-muted/5 p-5 text-body italic leading-relaxed text-muted">
              Not sure if you need an offshore structure? Most clients
              don&rsquo;t. Our domestic Gold packages include offshore records
              custodian &mdash; that&rsquo;s sufficient for the vast majority of
              privacy and asset protection needs. International entities are for
              clients with specific jurisdictional requirements.
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------
          IRS Compliance Warning
          ------------------------------------------------ */}
      <section className="bg-background py-section-y px-container-x">
        <div className="mx-auto max-w-content">
          <div className="rounded-card border-t-4 border-accent bg-surface p-8 shadow-card md:p-10">
            <p className="text-body-sm font-semibold uppercase tracking-[0.15em] text-accent">
              U.S. Tax Obligations
            </p>
            <h2 className="mt-2 font-display text-heading-lg font-bold text-foreground">
              If You&rsquo;re a U.S. Person, You Have Reporting Obligations.
            </h2>
            <p className="mt-4 max-w-narrow text-body leading-relaxed text-muted">
              U.S. citizens, residents, and green card holders who own or
              control offshore entities must comply with several IRS reporting
              requirements. Failure to comply can result in significant
              penalties. We want you to know this before you proceed.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="flex items-start gap-3">
                <Icon
                  name="FileText"
                  size="md"
                  className="mt-0.5 shrink-0 text-accent"
                />
                <div>
                  <h3 className="font-display font-semibold text-foreground">
                    FBAR (FinCEN 114)
                  </h3>
                  <p className="mt-1 text-body-sm leading-relaxed text-muted">
                    If your offshore accounts exceed $10,000 in aggregate value
                    at any point during the year, you must file an annual Report
                    of Foreign Bank and Financial Accounts.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Icon
                  name="ClipboardCheck"
                  size="md"
                  className="mt-0.5 shrink-0 text-accent"
                />
                <div>
                  <h3 className="font-display font-semibold text-foreground">
                    Form 5471 / 8865
                  </h3>
                  <p className="mt-1 text-body-sm leading-relaxed text-muted">
                    U.S. persons who own 10%+ of a foreign corporation (Form
                    5471) or partnership/LLC (Form 8865) must file annual
                    informational returns with the IRS.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Icon
                  name="Calculator"
                  size="md"
                  className="mt-0.5 shrink-0 text-accent"
                />
                <div>
                  <h3 className="font-display font-semibold text-foreground">
                    GILTI (Global Intangible Low-Taxed Income)
                  </h3>
                  <p className="mt-1 text-body-sm leading-relaxed text-muted">
                    U.S. shareholders of controlled foreign corporations may owe
                    tax on the corporation&rsquo;s income under GILTI rules,
                    even if no distributions are made. This has significantly
                    changed the tax landscape for offshore structures since
                    2017.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Icon
                  name="AlertTriangle"
                  size="md"
                  className="mt-0.5 shrink-0 text-accent"
                />
                <div>
                  <h3 className="font-display font-semibold text-foreground">
                    FATCA
                  </h3>
                  <p className="mt-1 text-body-sm leading-relaxed text-muted">
                    Financial institutions worldwide report accounts held by
                    U.S. persons to the IRS. Offshore bank accounts are not
                    hidden from the U.S. government.
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-8 text-body font-medium text-foreground">
              These are real obligations with real penalties. We strongly
              recommend consulting a CPA or international tax attorney before
              forming any offshore entity.
            </p>

            <Link
              to="/offshore/irs-compliance"
              className="mt-6 inline-flex items-center gap-2 rounded-lg border-2 border-accent bg-transparent px-5 py-3 font-semibold text-accent transition-colors hover:bg-accent/10"
            >
              Full IRS Compliance Guide
              <Icon name="ArrowRight" size="sm" />
            </Link>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------
          FAQ Accordion
          ------------------------------------------------ */}
      {hubFaqs.length > 0 && (
        <section className="bg-surface py-section-y px-container-x">
          <div className="mx-auto max-w-content">
            <div className="mx-auto max-w-narrow">
              <p className="text-body-sm font-semibold uppercase tracking-[0.15em] text-secondary">
                Frequently Asked Questions
              </p>
              <h2 className="mt-2 font-display text-heading-lg font-bold text-foreground">
                Offshore Formation &mdash; Questions Answered
              </h2>
              <div className="mt-8">
                <Accordion type="single" variant="default">
                  {hubFaqs.map((faq) => (
                    <AccordionItem
                      key={faq.id}
                      id={faq.id}
                      title={faq.question}
                    >
                      <p>{faq.answer}</p>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ------------------------------------------------
          Consultation CTA — distinct charcoal, outline buttons
          ------------------------------------------------ */}
      <section className="bg-offshore-dark py-section-y px-container-x text-white">
        <div className="mx-auto max-w-content text-center">
          <h2 className="mx-auto max-w-narrow font-display text-heading-lg font-bold">
            International Structures Require a Conversation.
          </h2>
          <p className="mx-auto mt-4 max-w-narrow text-body text-white/80">
            Every offshore engagement begins with a consultation. We discuss
            your goals, recommend the appropriate jurisdiction and entity type,
            and outline the formation process, timeline, and costs. There is no
            obligation and no pressure.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/80 bg-transparent px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
            >
              Schedule a Consultation
              <Icon name="ArrowRight" size="sm" />
            </Link>
            <a
              href="tel:+18005530615"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/40 bg-transparent px-6 py-3 font-semibold text-white/90 transition-colors hover:border-white/80 hover:text-white"
            >
              <Icon name="Phone" size="sm" />
              Call 1-800-553-0615
            </a>
          </div>

          <div className="mx-auto mt-10 max-w-narrow border-t border-white/10 pt-8">
            <p className="text-body-sm text-white/70">
              Interested in domestic services instead? Most clients start here.
            </p>
            <div className="mt-3 flex flex-wrap items-center justify-center gap-4 text-body-sm">
              <Link
                to="/privacy"
                className="text-white/80 underline underline-offset-4 hover:text-white"
              >
                Business Privacy
              </Link>
              <span className="text-white/30">·</span>
              <Link
                to="/wyoming-gold"
                className="text-white/80 underline underline-offset-4 hover:text-white"
              >
                Wyoming Gold Package
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
