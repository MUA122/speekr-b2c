import { lazy, Suspense, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ScenariosShowcase from "./components/ScenariosShowcase";
import ProgramsCarousel from "./components/ProgramsCarousel";
import VideoShowcase from "./components/VideoShowcase";
import ConversationsCovered from "./components/ConversationsCovered";
import TestimonialsCarousel from "./components/TestimonialsCarousel";
import PricingSection from "./components/PricingSection";
import TeamsPricingSection from "./components/TeamsPricingSection";
import CaseStudiesCarousel from "./components/CaseStudiesCarousel";
import SplitCtaSection from "./components/SplitCtaSection";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";
import ContactModal from "./components/ContactModal";
import { useLocalizedPrices } from "./utils/pricing";
import { splitLocalePath } from "./utils/i18n";
import { applySeo, organizationSchema, setJsonLd, websiteSchema } from "./utils/seo";

const BlogPage = lazy(() => import("./pages/BlogPage"));
const BlogPostPage = lazy(() => import("./pages/BlogPostPage"));

function RouteFallback() {
  return (
    <Box
      sx={{
        minHeight: "100svh",
        bgcolor: "#EEF3CD",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#074225",
        fontSize: 14,
        fontWeight: 800,
      }}
    >
      Loading...
    </Box>
  );
}

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
    return { name: "blogPost", slug: decodeURIComponent(path.replace("/blog/", "")), locale };
  }
  return { name: "home", locale };
}

function GreenSectionDivider() {
  return (
    <Box
      aria-hidden
      sx={{
        position: "relative",
        bgcolor: "#074225",
        px: { xs: 3, md: 6 },
        py: { xs: 5, md: 7 },
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "relative",
          maxWidth: 1216,
          mx: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: 2.4, md: 3.5 },
        }}
      >
        <Box
          sx={{
            height: "1px",
            flex: 1,
            maxWidth: 550,
            bgcolor: "rgba(238,243,205,0.34)",
          }}
        />
        <Box
          sx={{
            width: { xs: 58, md: 72 },
            height: { xs: 58, md: 72 },
            borderRadius: "50%",
            border: "1px solid rgba(238,243,205,0.18)",
            bgcolor: "rgba(238,243,205,0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow:
              "0 24px 70px rgba(0,0,0,0.16), inset 0 1px 0 rgba(238,243,205,0.12)",
          }}
        >
          <Box
            sx={{
              width: { xs: 16, md: 18 },
              height: { xs: 16, md: 18 },
              borderRadius: "5px",
              bgcolor: "#EEF3CD",
              transform: "rotate(45deg)",
              boxShadow: "0 0 0 12px rgba(238,243,205,0.08)",
            }}
          />
        </Box>
        <Box
          sx={{
            height: "1px",
            flex: 1,
            maxWidth: 550,
            bgcolor: "rgba(238,243,205,0.34)",
          }}
        />
      </Box>
    </Box>
  );
}

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [route, setRoute] = useState(getRoute);
  const prices = useLocalizedPrices();
  const locale = route.locale || "en";
  const isBlogRoute = route.name === "blog" || route.name === "blogPost";

  const openContactModal = () => setIsContactOpen(true);
  const closeContactModal = () => setIsContactOpen(false);

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
        <Suspense fallback={<RouteFallback />}>
          <BlogPage locale={locale} />
        </Suspense>
      )}
      {route.name === "blogPost" && (
        <Suspense fallback={<RouteFallback />}>
          <BlogPostPage slug={route.slug} locale={locale} />
        </Suspense>
      )}
      {!isBlogRoute && (
        <>
          <Hero locale={locale} onBookDemoClick={openContactModal} />
          <Box
            aria-hidden
            sx={{
              position: "relative",
              bgcolor: "#EEF3CD",
              py: { xs: 4, md: 5.5 },
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                position: "relative",
                maxWidth: 1220,
                mx: "auto",
                px: { xs: 2.5, md: 5 },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: { xs: 2, md: 3 },
              }}
            >
              <Box sx={{ flex: 1, height: "1px", bgcolor: "rgba(7,66,37,0.34)" }} />
              <Box
                sx={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  border: "1px solid rgba(7,66,37,0.16)",
                  bgcolor: "rgba(7,66,37,0.06)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 18px 50px rgba(7,66,37,0.08)",
                }}
              >
                <Box
                  sx={{
                    width: 18,
                    height: 18,
                    borderRadius: "5px",
                    bgcolor: "#074225",
                    transform: "rotate(45deg)",
                    boxShadow: "0 0 0 10px rgba(7,66,37,0.08)",
                  }}
                />
              </Box>
              <Box sx={{ flex: 1, height: "1px", bgcolor: "rgba(7,66,37,0.34)" }} />
            </Box>
          </Box>
          {/* <LogosMarquee /> */}
          <ScenariosShowcase locale={locale} />
          <ProgramsCarousel locale={locale} />
          <VideoShowcase locale={locale} />
          <ConversationsCovered locale={locale} />
          <TestimonialsCarousel locale={locale} />
          <PricingSection locale={locale} prices={prices} />
          <TeamsPricingSection locale={locale} prices={prices} onDemoClick={openContactModal} />
          <GreenSectionDivider />
          <CaseStudiesCarousel locale={locale} />
          <SplitCtaSection locale={locale} onDemoClick={openContactModal} />
          <FaqSection locale={locale} onDemoClick={openContactModal} />
        </>
      )}
      <Footer locale={locale} onContactClick={openContactModal} />
      <ContactModal locale={locale} open={isContactOpen} onClose={closeContactModal} />
    </Box>
  );
}

export default App;
