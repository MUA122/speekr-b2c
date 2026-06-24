import { useEffect, useState } from "react";
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
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";

function getRoute() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  if (path === "/blog") return { name: "blog" };
  if (path.startsWith("/blog/")) {
    return { name: "blogPost", slug: decodeURIComponent(path.replace("/blog/", "")) };
  }
  return { name: "home" };
}

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [route, setRoute] = useState(getRoute);

  const openContactModal = () => setIsContactOpen(true);
  const closeContactModal = () => setIsContactOpen(false);

  useEffect(() => {
    const handleNavigation = () => setRoute(getRoute());
    window.addEventListener("popstate", handleNavigation);
    return () => window.removeEventListener("popstate", handleNavigation);
  }, []);

  const isBlogRoute = route.name === "blog" || route.name === "blogPost";

  return (
    <Box
      component="main"
      sx={{ minHeight: "100svh", bgcolor: "background.default" }}
    >
      <Header onContactClick={openContactModal} />
      {route.name === "blog" && <BlogPage />}
      {route.name === "blogPost" && <BlogPostPage slug={route.slug} />}
      {!isBlogRoute && (
        <>
          <Hero onBookDemoClick={openContactModal} />
          <Box
            aria-hidden
            sx={{
              position: "relative",
              bgcolor: "#F7F9E8",
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
              <Box sx={{ flex: 1, height: "1px", bgcolor: "rgba(0,66,37,0.34)" }} />
              <Box
                sx={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  border: "1px solid rgba(0,66,37,0.16)",
                  bgcolor: "rgba(0,66,37,0.06)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 18px 50px rgba(0,66,37,0.08)",
                }}
              >
                <Box
                  sx={{
                    width: 18,
                    height: 18,
                    borderRadius: "5px",
                    bgcolor: "#004225",
                    transform: "rotate(45deg)",
                    boxShadow: "0 0 0 10px rgba(0,66,37,0.08)",
                  }}
                />
              </Box>
              <Box sx={{ flex: 1, height: "1px", bgcolor: "rgba(0,66,37,0.34)" }} />
            </Box>
          </Box>
          {/* <LogosMarquee /> */}
          <ScenariosShowcase />
          <ProgramsCarousel />
          <VideoShowcase />
          <ConversationsCovered />
          <TestimonialsCarousel />
          <PricingSection />
          <TeamsPricingSection onDemoClick={openContactModal} />
          <CaseStudiesCarousel />
          <SplitCtaSection onDemoClick={openContactModal} />
          <FaqSection onDemoClick={openContactModal} />
        </>
      )}
      <Footer onContactClick={openContactModal} />
      <ContactModal open={isContactOpen} onClose={closeContactModal} />
    </Box>
  );
}

export default App;
