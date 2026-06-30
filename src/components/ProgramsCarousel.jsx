import { useState, useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { landingCopy } from "../utils/i18n";

const SLIDES = [
  {
    id: 0,
    num: "01",
    title: "Practice Solo",
    sub: "Record yourself. Get instant feedback and AI coaching.",
    img: "/images/card1.png",
  },
  {
    id: 1,
    num: "02",
    title: "Practice with AI",
    sub: "Practice real business scenarios with AI that challenges, objects, and engages you.",
    img: "/images/card2.png",
  },
  {
    id: 2,
    num: "03",
    title: "Get Instant Feedback",
    sub: "Science-based insights on your voice, body language, word choice, and conversation.",
    img: "/images/card-3.png",
  },
  {
    id: 3,
    num: "04",
    title: "Customize Your Conversations",
    sub: "Build scenarios around your industry, clients, and real work challenges.",
    img: "/images/card4.png",
  },
  {
    id: 4,
    num: "05",
    title: "Start a Guided Learning Journey",
    sub: "Learn from international coaches through AI powered structured paths.",
    img: "/images/card5.png",
  },
];

function SlideCard({ slide, locale = "en" }) {
  const isAr = locale === "ar";
  return (
    <Box
      className="premium-card"
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: { xs: "column", md: isAr ? "row-reverse" : "row" },
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: { xs: 3.5, md: 3 },
        p: { xs: "30px 24px", sm: "38px 36px", md: "48px 50px" },
        borderRadius: { xs: "20px", md: "28px" },
        overflow: "hidden",
        border: "1px solid rgba(238,243,205,0.72)",
        bgcolor: "rgba(93,132,109,0.86)",
        backdropFilter: "blur(14px) saturate(1.08)",
        boxShadow:
          "0 24px 70px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.22)",
        height: "100%",
      }}
    >
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          top: "50%",
          left: isAr ? "auto" : { xs: "-42%", md: "-10%" },
          right: isAr ? { xs: "-42%", md: "-10%" } : "auto",
          transform: "translateY(-50%) rotate(45deg)",
          width: { xs: 560, sm: 720, md: 820, lg: 920 },
          height: { xs: 560, sm: 720, md: 820, lg: 920 },
          backgroundImage: "url('/images/card-pattern.svg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
          opacity: 0.12,
          mixBlendMode: "multiply",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(7,66,37,0.12) 0%, rgba(238,243,205,0.08) 46%, rgba(7,66,37,0.1) 100%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 82% 32%, rgba(238,243,205,0.12) 0%, transparent 28%), radial-gradient(circle at 12% 88%, rgba(7,66,37,0.14) 0%, transparent 30%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      {/* Ghost number */}
      <Typography
        aria-hidden
        sx={{
          position: "absolute",
          top: -28,
          left: isAr ? "auto" : -10,
          right: isAr ? -10 : "auto",
          fontSize: { xs: 120, md: 200 },
          fontWeight: 900,
          lineHeight: 1,
          letterSpacing: -8,
          color: "transparent",
          WebkitTextStroke: "1px rgba(238,243,205,0.1)",
          pointerEvents: "none",
          userSelect: "none",
          zIndex: 0,
        }}
      >
        {slide.num}
      </Typography>

      {/* Left: text */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          flexShrink: 0,
          width: { xs: "100%", md: 390, lg: 440 },
          pb: { xs: 0, md: "48px" },
          my: "auto",
          textAlign: isAr ? "right" : "left",
        }}
      >
        {/* Step indicator */}
        <Stack
          direction={isAr ? "row-reverse" : "row"}
          spacing={1.5}
          sx={{
            alignItems: "center",
            justifyContent: isAr ? "flex-start" : "flex-start",
            mb: { xs: 4, md: "52px" },
          }}
        >
          <Box
            sx={{
              width: 22,
              height: 22,
              borderRadius: "5px",
              background: "linear-gradient(135deg, #F26433 0%, #C84D27 100%)",
              flexShrink: 0,
              boxShadow: "0 0 10px rgba(242,100,51,0.28)",
            }}
          />
          <Typography
            sx={{
              fontSize: 26,
              fontWeight: 900,
              letterSpacing: -0.5,
              color: "rgba(238,243,205,0.96)",
              lineHeight: 1,
            }}
          >
            {slide.num}
          </Typography>
        </Stack>

        <Typography
          component="h3"
          sx={{
            m: 0,
            fontSize: { xs: 30, sm: 38, md: 44, lg: 50 },
            fontFamily: (theme) => theme.palette.brand.fontHeadline,
            fontWeight: 900,
            letterSpacing: { xs: -0.8, md: -1.5 },
            lineHeight: 1.05,
            color: "#EEF3CD",
            mb: { xs: 2.5, md: 3 },
          }}
        >
          {slide.title}
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: 15, md: 17.5 },
            lineHeight: 1.75,
            color: "rgba(238,243,205,0.92)",
            fontWeight: 600,
          }}
        >
          {slide.sub}
        </Typography>
      </Box>

      {/* Right: image */}
      <Box
        sx={{
          position: "relative",
          zIndex: 4,
          flexShrink: 0,
          width: { xs: "100%", md: "auto" },
          flex: { md: "1 1 0" },
          maxWidth: { sm: 520, md: 660, lg: 760 },
          alignSelf: { xs: "auto", sm: "center", md: "center" },
          borderRadius: 0,
          overflow: "visible",
          aspectRatio: { xs: "16 / 9", md: "1.72 / 1" },
          minHeight: { xs: 180, md: 330, lg: 380 },
          transform: { md: "translateY(-8px)" },
          boxShadow: "none",
        }}
      >
        <Box
          component="img"
          src={slide.img}
          alt={slide.title}
          title={slide.title}
          loading="lazy"
          decoding="async"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            display: "block",
            opacity: 1,
            filter: "none",
          }}
        />
      </Box>
    </Box>
  );
}

export default function ProgramsCarousel({ locale = "en" }) {
  const [active, setActive] = useState(0);
  const containerRef = useRef(null);
  const copy = landingCopy[locale].programs;
  const isAr = locale === "ar";
  const PrevIcon = isAr ? ChevronRight : ChevronLeft;
  const NextIcon = isAr ? ChevronLeft : ChevronRight;
  const slides = SLIDES.map((slide, index) => ({
    ...slide,
    title: copy.slides[index][0],
    sub: copy.slides[index][1],
  }));

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 900px)");
    const handle = () => {
      if (!desktopQuery.matches) return;
      if (!containerRef.current) return;
      const { top, height } = containerRef.current.getBoundingClientRect();
      const wh = window.innerHeight;
      const scrolled = Math.max(0, -top);
      const scrollable = height - wh;
      if (scrollable <= 0) return;
      const progress = Math.min(1, scrolled / scrollable);
      setActive(
        Math.min(SLIDES.length - 1, Math.floor(progress * SLIDES.length)),
      );
    };
    if (!desktopQuery.matches) return undefined;
    window.addEventListener("scroll", handle, { passive: true });
    handle();
    return () => window.removeEventListener("scroll", handle);
  }, []);

  const goTo = (idx) => {
    const el = containerRef.current;
    if (!el) return;
    const sectionTop = el.getBoundingClientRect().top + window.scrollY;
    const scrollable = el.offsetHeight - window.innerHeight;
    window.scrollTo({
      top: sectionTop + (idx / SLIDES.length) * scrollable + 2,
      behavior: "smooth",
    });
  };

  return (
    <Box
      id="product-communication"
      ref={containerRef}
      sx={{ height: { xs: "auto", md: `${(SLIDES.length + 1) * 100}svh` }, position: "relative" }}
    >
      <Box
        component="section"
        aria-labelledby="features-title-mobile"
        sx={{
          display: { xs: "block", md: "none" },
          bgcolor: "#074225",
          px: { xs: "14px", sm: "22px" },
          py: { xs: 8, sm: 9 },
        }}
      >
        <Box sx={{ maxWidth: 560, mx: "auto" }}>
          <Typography
            id="features-title-mobile"
            component="h2"
            sx={{
              m: 0,
              mb: 3,
              fontSize: { xs: 32, sm: 38 },
              fontWeight: 900,
              letterSpacing: 0,
              lineHeight: 1.08,
              color: "#EEF3CD",
              textAlign: "center",
            }}
          >
            {copy.title}{" "}
            <Box component="span" sx={{ color: "#F26433" }}>
              {copy.accent}
            </Box>
          </Typography>
          <Stack spacing={2.4}>
            {slides.map((slide) => (
              <SlideCard key={slide.id} slide={slide} locale={locale} />
            ))}
          </Stack>
        </Box>
      </Box>
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          position: "sticky",
          top: 0,
          height: "100svh",
          bgcolor: "#074225",
          px: { xs: "12px", sm: "18px", md: "24px" },
          py: { xs: "12px", md: "16px" },
          flexDirection: "column",
        }}
      >
        <Box
          component="section"
          aria-labelledby="features-title"
          sx={{
            flex: 1,
            position: "relative",
            bgcolor: "#074225",
            borderRadius: { xs: "24px", md: "32px" },
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            px: { xs: 2.5, sm: 4, md: 6, lg: 8 },
            pt: { xs: 3.5, md: 4.5 },
            pb: { xs: 2.5, md: 3.5 },
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: "10%",
              right: "10%",
              height: "1px",
              background:
                "linear-gradient(90deg, transparent, rgba(242,100,51,0.25) 50%, transparent)",
            },
          }}
        >
          {/* Ambient orb — lime top center */}
          <Box
            aria-hidden
            sx={{
              position: "absolute",
              top: "-10%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "80vw",
              height: "80vw",
              maxWidth: 900,
              maxHeight: 900,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(242,100,51,0.07) 0%, transparent 60%)",
              filter: "blur(80px)",
              pointerEvents: "none",
            }}
          />
          {/* Ambient orb — orange bottom right */}
          <Box
            aria-hidden
            sx={{
              position: "absolute",
              bottom: "-8%",
              right: "-5%",
              width: "50vw",
              height: "50vw",
              maxWidth: 600,
              maxHeight: 600,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(242,100,51,0.07) 0%, transparent 65%)",
              filter: "blur(70px)",
              pointerEvents: "none",
            }}
          />
          {/* Noise grain */}
          <Box
            aria-hidden
            sx={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              opacity: 0.02,
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
              backgroundRepeat: "repeat",
              backgroundSize: "200px 200px",
            }}
          />

          {/* Heading */}
          <Box
            sx={{
              flexShrink: 0,
              mb: { xs: 2, md: 3 },
              position: "relative",
              zIndex: 1,
            }}
          >
            <Typography
              id="features-title"
              component="h2"
              sx={{
                m: 0,
                fontSize: { xs: 26, sm: 34, md: 40, lg: 46 },
                fontWeight: 900,
                letterSpacing: { xs: -0.8, md: -1.5 },
                lineHeight: 1.06,
                color: "#EEF3CD",
                textAlign: "center",
              }}
            >
              {copy.title}{" "}
              <Box component="span" sx={{ color: "#F26433" }}>
                {copy.accent}
              </Box>
            </Typography>
          </Box>

          {/* Slide area */}
          <Box sx={{ flex: 1, position: "relative", zIndex: 1, minHeight: 0 }}>
            {slides.map((slide, i) => (
              <Box
                key={slide.id}
                aria-hidden={active !== i}
                sx={{
                  position: "absolute",
                  inset: 0,
                  opacity: active === i ? 1 : 0,
                  transform:
                    active === i
                      ? "translateY(0) scale(1)"
                      : active > i
                        ? "translateY(-24px) scale(0.985)"
                        : "translateY(24px) scale(0.985)",
                  transition:
                    "opacity 0.5s cubic-bezier(0.4,0,0.2,1), transform 0.5s cubic-bezier(0.4,0,0.2,1)",
                  pointerEvents: active === i ? "auto" : "none",
                }}
              >
                <SlideCard slide={slide} locale={locale} />
              </Box>
            ))}
          </Box>

          {/* Navigation */}
          <Box
            sx={{
              flexShrink: 0,
              pt: { xs: 2, md: 2.5 },
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              position: "relative",
              zIndex: 1,
              direction: "ltr",
            }}
          >
            <Stack direction="row" spacing={1.2}>
              <Box
                component="button"
                onClick={() => goTo(Math.max(0, active - 1))}
                disabled={active === 0}
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  border: "1.5px solid",
                  borderColor:
                    active === 0 ? "rgba(238,243,205,0.1)" : "rgba(238,243,205,0.22)",
                  bgcolor: "transparent",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: active === 0 ? "default" : "pointer",
                  transition: "border-color 0.2s ease, background 0.2s ease",
                  "&:hover":
                    active === 0
                      ? {}
                      : {
                          borderColor: "#F26433",
                          bgcolor: "rgba(242,100,51,0.06)",
                        },
                }}
              >
                <PrevIcon
                  size={16}
                  color={active === 0 ? "rgba(238,243,205,0.18)" : "rgba(238,243,205,0.78)"}
                  aria-hidden
                />
              </Box>
              <Box
                component="button"
                onClick={() => goTo(Math.min(SLIDES.length - 1, active + 1))}
                disabled={active === SLIDES.length - 1}
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  border: "1.5px solid",
                  borderColor:
                    active === SLIDES.length - 1
                      ? "rgba(238,243,205,0.1)"
                      : "rgba(238,243,205,0.22)",
                  bgcolor: "transparent",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: active === SLIDES.length - 1 ? "default" : "pointer",
                  transition: "border-color 0.2s ease, background 0.2s ease",
                  "&:hover":
                    active === SLIDES.length - 1
                      ? {}
                      : {
                          borderColor: "#F26433",
                          bgcolor: "rgba(242,100,51,0.06)",
                        },
                }}
              >
                <NextIcon
                  size={16}
                  color={
                    active === SLIDES.length - 1
                      ? "rgba(238,243,205,0.18)"
                      : "rgba(238,243,205,0.78)"
                  }
                  aria-hidden
                />
              </Box>
            </Stack>

            <Stack
              direction={isAr ? "row-reverse" : "row"}
              spacing={0.9}
              sx={{ alignItems: "center" }}
            >
              {slides.map((_, i) => (
                <Box
                  key={i}
                  component="button"
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  sx={{
                    width: i === active ? 28 : 8,
                    height: 8,
                    borderRadius: "100px",
                    bgcolor: i === active ? "#F26433" : "rgba(238,243,205,0.2)",
                    border: "none",
                    cursor: "pointer",
                    p: 0,
                    transition:
                      "width 0.35s cubic-bezier(0.4,0,0.2,1), background-color 0.3s ease",
                    boxShadow:
                      i === active ? "0 0 8px rgba(242,100,51,0.5)" : "none",
                  }}
                />
              ))}
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
