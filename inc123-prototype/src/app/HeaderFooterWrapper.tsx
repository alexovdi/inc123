import { useLocation, Outlet } from "react-router-dom";
import { SiteHeader } from "@/design-system/layouts/SiteHeader";
import { SiteFooter } from "@/design-system/layouts/SiteFooter";
import { ThemeToggle } from "./ThemeToggle";
import { siteNavigation, footerNavigation } from "@/data/navigation";

export function HeaderFooterWrapper() {
  const { pathname } = useLocation();
  const isCheckout = pathname?.startsWith("/checkout");
  const isDev = pathname?.startsWith("/dev");

  return (
    <>
      {!isCheckout && !isDev && <SiteHeader navigation={siteNavigation} />}
      {isDev ? (
        <Outlet />
      ) : (
        <main id="main-content">
          <Outlet />
        </main>
      )}
      {!isCheckout && !isDev && (
        <SiteFooter
          columns={footerNavigation.columns}
          legal={footerNavigation.legal}
          company={footerNavigation.company}
          brand={footerNavigation.brand}
          crypto={footerNavigation.crypto}
        />
      )}
      {!isDev && <ThemeToggle />}
    </>
  );
}
