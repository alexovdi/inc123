import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { HeaderFooterWrapper } from "@/app/HeaderFooterWrapper";

/* ------------------------------------------------
   Lazy-loaded pages
   ------------------------------------------------ */

// Main pages
const HomePage = lazy(() => import("@/app/page"));
const AboutPage = lazy(() => import("@/app/about/page"));
const AssetProtectionPage = lazy(() => import("@/app/asset-protection/page"));
const BlogPage = lazy(() => import("@/app/blog/page"));
const BronzePage = lazy(() => import("@/app/bronze/page"));
const ComparePackagesPage = lazy(() => import("@/app/compare-packages/page"));
const CompliancePage = lazy(() => import("@/app/compliance/page"));
const ContactPage = lazy(() => import("@/app/contact/page"));
const FAQPage = lazy(() => import("@/app/faq/page"));
const FormationPage = lazy(() => import("@/app/formation/page"));
const GoldPage = lazy(() => import("@/app/gold/page"));
const OffshorePage = lazy(() => import("@/app/offshore/page"));
const OffshoreSlugPage = lazy(() => import("@/app/offshore/[slug]/page"));
const PackagesPage = lazy(() => import("@/app/packages/page"));
const PrivacyPage = lazy(() => import("@/app/privacy/page"));
const PrivacyPolicyPage = lazy(() => import("@/app/privacy-policy/page"));
const SilverPage = lazy(() => import("@/app/silver/page"));
const TermsPage = lazy(() => import("@/app/terms/page"));
const TestimonialsPage = lazy(() => import("@/app/testimonials/page"));

// Checkout pages
const CheckoutConfigurePage = lazy(
  () => import("@/app/checkout/configure/page"),
);
const CheckoutDetailsPage = lazy(() => import("@/app/checkout/details/page"));
const CheckoutPaymentPage = lazy(() => import("@/app/checkout/payment/page"));
const CheckoutConfirmationPage = lazy(
  () => import("@/app/checkout/confirmation/page"),
);

// Dev / catalog pages
const DevIndexPage = lazy(() => import("@/app/dev/page"));
const DevColorsPage = lazy(() => import("@/app/dev/colors/page"));
const DevTypographyPage = lazy(() => import("@/app/dev/typography/page"));
const DevComponentsPage = lazy(() => import("@/app/dev/components/page"));
const DevComponentSlugPage = lazy(
  () => import("@/app/dev/components/[slug]/page"),
);
const HomepageV1Page = lazy(() => import("@/app/dev/homepage-v1/page"));
const HomepageV2Page = lazy(() => import("@/app/dev/homepage-v2/page"));
const HomepageV3Page = lazy(() => import("@/app/dev/homepage-v3/page"));

// Catch-all (slug registry: clusters, comparisons, states)
const CatchAllPage = lazy(() => import("@/app/[...slug]/page"));

// Not found
const NotFoundPage = lazy(() => import("@/app/not-found"));

/* ------------------------------------------------
   Dev layout wrapper
   ------------------------------------------------ */
const DevLayout = lazy(() => import("@/app/dev/layout"));

/* ------------------------------------------------
   Checkout layout wrapper
   ------------------------------------------------ */
const CheckoutLayoutWrapper = lazy(() =>
  import("@/app/checkout/CheckoutLayoutClient").then((m) => ({
    default: m.CheckoutLayoutClient,
  })),
);

/* ------------------------------------------------
   FAQ layout (JSON-LD schema)
   ------------------------------------------------ */
const FAQLayout = lazy(() => import("@/app/faq/layout"));

/* ------------------------------------------------
   Loading fallback
   ------------------------------------------------ */
function PageLoading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-border border-t-secondary" />
    </div>
  );
}

/* ------------------------------------------------
   Router
   ------------------------------------------------ */
export function AppRouter() {
  return (
    <Suspense fallback={<PageLoading />}>
      <Routes>
        {/* Main site with header/footer */}
        <Route element={<HeaderFooterWrapper />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="asset-protection" element={<AssetProtectionPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="bronze" element={<BronzePage />} />
          <Route path="compare-packages" element={<ComparePackagesPage />} />
          <Route path="compliance" element={<CompliancePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route
            path="faq"
            element={
              <FAQLayout>
                <FAQPage />
              </FAQLayout>
            }
          />
          <Route path="formation" element={<FormationPage />} />
          <Route path="gold" element={<GoldPage />} />
          <Route path="offshore" element={<OffshorePage />} />
          <Route path="offshore/:slug" element={<OffshoreSlugPage />} />
          <Route path="packages" element={<PackagesPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="silver" element={<SilverPage />} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="testimonials" element={<TestimonialsPage />} />

          {/* Checkout (no header/footer — handled by HeaderFooterWrapper) */}
          <Route path="checkout" element={<CheckoutLayoutWrapper />}>
            <Route path="configure" element={<CheckoutConfigurePage />} />
            <Route path="details" element={<CheckoutDetailsPage />} />
            <Route path="payment" element={<CheckoutPaymentPage />} />
            <Route path="confirmation" element={<CheckoutConfirmationPage />} />
          </Route>

          {/* Legacy redirects */}
          <Route
            path="wyoming-private-incorporation"
            element={<Navigate to="/gold?state=wyoming" replace />}
          />
          <Route
            path="wyoming-incorporation"
            element={<Navigate to="/silver?state=wyoming" replace />}
          />
          <Route
            path="nevada-private-incorporation"
            element={<Navigate to="/gold?state=nevada" replace />}
          />
          <Route
            path="nevada-incorporation"
            element={<Navigate to="/silver?state=nevada" replace />}
          />
          <Route
            path="nevada-basic-incorporation"
            element={<Navigate to="/bronze?state=nevada" replace />}
          />
          <Route
            path="california-private-incorporation"
            element={<Navigate to="/gold?state=california" replace />}
          />
          <Route
            path="florida-private-incorporation"
            element={<Navigate to="/gold?state=florida" replace />}
          />
          <Route
            path="shelf-company-packages"
            element={<Navigate to="/shelf-companies" replace />}
          />

          {/* Catch-all — slug registry (clusters, comparisons, states) + 404 */}
          <Route path="*" element={<CatchAllPage />} />
        </Route>

        {/* Dev / catalog (own layout, no site header/footer) */}
        <Route path="dev" element={<DevLayout />}>
          <Route index element={<DevIndexPage />} />
          <Route path="colors" element={<DevColorsPage />} />
          <Route path="typography" element={<DevTypographyPage />} />
          <Route path="components" element={<DevComponentsPage />} />
          <Route path="components/:slug" element={<DevComponentSlugPage />} />
          <Route path="homepage-v1" element={<HomepageV1Page />} />
          <Route path="homepage-v2" element={<HomepageV2Page />} />
          <Route path="homepage-v3" element={<HomepageV3Page />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
