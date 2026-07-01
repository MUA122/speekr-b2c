import { lazy, Suspense, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LogosMarquee from "./components/LogosMarquee";
import ScenariosShowcase from "./components/ScenariosShowcase";
import ProgramsCarousel from "./components/ProgramsCarousel";
import VideoShowcase from "./components/VideoShowcase";
import ConversationsCovered from "./components/ConversationsCovered";
// import TestimonialsCarousel from "./components/TestimonialsCarousel";
import PricingSection from "./components/PricingSection";
import CaseStudiesCarousel from "./components/CaseStudiesCarousel";
import SplitCtaSection from "./components/SplitCtaSection";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";
import ContactModal from "./components/ContactModal";
import LoadingScreen from "./components/LoadingScreen";
import { useLocalizedPrices } from "./utils/pricing";
import { splitLocalePath } from "./utils/i18n";
import {
  applySeo,
  organizationSchema,
  setJsonLd,
  websiteSchema,
} from "./utils/seo";

const BlogPage = lazy(() => import("./pages/BlogPage"));
const BlogPostPage = lazy(() => import("./pages/BlogPostPage"));

const HOME_SEO = {
  en: {
    title: "Speekr.ai | AI Communication Coach for Business Conversations",
    description:
      "Practice presentations, interviews, sales calls, and leadership conversations with Speekr's AI communication coach.",
    keywords:
      "AI communication coach, business communication training, presentation practice, sales roleplay, interview practice, Speekr",
  },
  ar: {
    title: "Speekr.ai | مدرب تواصل ذكي لمحادثات الأعمال",
    description:
      "تدرّب على العروض والمقابلات ومكالمات البيع ومحادثات القيادة مع مدرب التواصل الذكي من Speekr.",
    keywords:
      "مدرب تواصل ذكي, تدريب مهارات التواصل, تدريب العروض, محاكاة مبيعات, تدريب مقابلات, Speekr",
  },
};

function getRoute() {
  const { locale, path } = splitLocalePath(window.location.pathname);
  if (path === "/blog") return { name: "blog", locale };
  if (path.startsWith("/blog/")) {
    return {
      name: "blogPost",
      slug: decodeURIComponent(path.replace("/blog/", "")),
      locale,
    };
  }
  return { name: "home", locale };
}

function App() {
  const [isBootLoading, setIsBootLoading] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [route, setRoute] = useState(getRoute);
  const prices = useLocalizedPrices();
  const locale = route.locale || "en";
  const isBlogRoute = route.name === "blog" || route.name === "blogPost";

  const openContactModal = () => setIsContactOpen(true);
  const closeContactModal = () => setIsContactOpen(false);

  useEffect(() => {
    const handleInternalLink = (event) => {
      const link = event.target.closest?.("a[href]");
      if (!link || link.target || event.defaultPrevented) return;

      const url = new URL(link.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      if (url.hash && url.pathname === window.location.pathname) return;
      if (
        url.pathname === window.location.pathname &&
        url.search === window.location.search
      )
        return;

      event.preventDefault();
      setIsBootLoading(true);
      window.setTimeout(() => {
        window.location.href = url.href;
      }, 120);
    };

    document.addEventListener("click", handleInternalLink, true);
    return () =>
      document.removeEventListener("click", handleInternalLink, true);
  }, []);

  useEffect(() => {
    const handleNavigation = () => setRoute(getRoute());
    window.addEventListener("popstate", handleNavigation);
    return () => window.removeEventListener("popstate", handleNavigation);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale === "ar" ? "ar" : "en";
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
  }, [locale]);

  useEffect(() => {
    if (isBlogRoute || !window.location.hash) return undefined;
    const sectionId = window.location.hash.slice(1);
    const timer = window.setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "auto" });
    }, 80);
    return () => window.clearTimeout(timer);
  }, [isBlogRoute, route.name]);

  useEffect(() => {
    if (isBlogRoute) return undefined;
    const seo = HOME_SEO[locale];
    applySeo({
      ...seo,
      path: "/",
      locale,
      image: "/images/hero.png",
      type: "website",
    });
    const removeOrg = setJsonLd("organization", organizationSchema());
    const removeWebsite = setJsonLd("website", websiteSchema(locale));
    const removeApp = setJsonLd("software-application", {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Speekr",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: window.location.origin,
      inLanguage: locale === "ar" ? ["ar", "en"] : ["en", "ar"],
      offers: {
        "@type": "Offer",
        category: "Subscription",
        availability: "https://schema.org/InStock",
      },
      publisher: organizationSchema(),
    });
    return () => {
      removeOrg();
      removeWebsite();
      removeApp();
    };
  }, [isBlogRoute, locale]);

  return (
    <Box
      component="main"
      sx={{ minHeight: "100svh", bgcolor: "background.default" }}
    >
      <Header locale={locale} onContactClick={openContactModal} />
      {route.name === "blog" && (
        <Suspense fallback={<LoadingScreen />}>
          <BlogPage locale={locale} />
        </Suspense>
      )}
      {route.name === "blogPost" && (
        <Suspense fallback={<LoadingScreen />}>
          <BlogPostPage slug={route.slug} locale={locale} />
        </Suspense>
      )}
      {!isBlogRoute && (
        <>
          <Hero locale={locale} onBookDemoClick={openContactModal} />
          <LogosMarquee />
          <ScenariosShowcase locale={locale} />
          <ProgramsCarousel locale={locale} />
          <VideoShowcase locale={locale} />
          <ConversationsCovered locale={locale} />
          {/* <TestimonialsCarousel locale={locale} /> */}
          <CaseStudiesCarousel locale={locale} />

          <PricingSection locale={locale} prices={prices} />
          <Box
            aria-hidden
            sx={{
              bgcolor: "#EEF3CD",
              px: { xs: "12px", sm: "18px", md: "24px" },
              pt: { xs: 5, md: 7 },
              pb: { xs: 1.5, md: 2 },
            }}
          >
            <Box
              sx={{
                maxWidth: 1330,
                mx: "auto",
                display: "grid",
                gridTemplateColumns: "minmax(0, 1fr) auto minmax(0, 1fr)",
                alignItems: "center",
                gap: { xs: 2, md: 4 },
              }}
            >
              <Box
                sx={{
                  height: "1px",
                  background:
                    "linear-gradient(90deg, transparent, rgba(7,66,37,0.28))",
                }}
              />
              <Box
                sx={{
                  width: { xs: 58, md: 84 },
                  height: { xs: 58, md: 84 },
                  borderRadius: "50%",
                  border: "1px solid rgba(7,66,37,0.18)",
                  display: "grid",
                  placeItems: "center",
                  bgcolor: "rgba(7,66,37,0.035)",
                }}
              >
                <Box
                  sx={{
                    width: { xs: 38, md: 54 },
                    height: { xs: 38, md: 54 },
                    borderRadius: "50%",
                    bgcolor: "rgba(7,66,37,0.08)",
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: 17, md: 23 },
                      height: { xs: 17, md: 23 },
                      borderRadius: "6px",
                      bgcolor: "#074225",
                      transform: "rotate(45deg)",
                    }}
                  />
                </Box>
              </Box>
              <Box
                sx={{
                  height: "1px",
                  background:
                    "linear-gradient(90deg, rgba(7,66,37,0.28), transparent)",
                }}
              />
            </Box>
          </Box>
          <SplitCtaSection locale={locale} onDemoClick={openContactModal} />
          <FaqSection locale={locale} onDemoClick={openContactModal} />
        </>
      )}
      <Footer locale={locale} onContactClick={openContactModal} />
      <ContactModal
        locale={locale}
        open={isContactOpen}
        onClose={closeContactModal}
      />
      {isBootLoading && <LoadingScreen fixed />}
    </Box>
  );
}

export default App;
