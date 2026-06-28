import { useState, useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

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

function SlideCard({ slide }) {
  return (
    <Box
      className="premium-card"
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: { xs: 3, md: 3 },
        p: { xs: "28px 22px", sm: "36px 32px", md: "44px 48px" },
        borderRadius: { xs: "20px", md: "28px" },
        overflow: "hidden",
        border: "1px solid rgba(238,243,205,0.16)",
        bgcolor: "rgba(238,243,205,0.62)",
        boxShadow: "0 14px 42px rgba(0,0,0,0.08)",
        height: "100%",
      }}
    >
      <Box
        component="img"
        src="/images/brand-patterns/line-pattern.png"
        alt=""
        aria-hidden
        sx={{
          position: "absolute",
          top: { xs: 18, md: 24 },
          right: { xs: "-38%", md: "-6%" },
          width: { xs: 520, sm: 700, md: 860 },
          maxWidth: "none",
          opacity: 0.08,
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
            "linear-gradient(90deg, rgba(238,243,205,0.5) 0%, rgba(238,243,205,0.38) 38%, rgba(238,243,205,0.12) 100%)",
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
          left: -10,
          fontSize: { xs: 120, md: 200 },
          fontWeight: 900,
          lineHeight: 1,
          letterSpacing: -8,
          color: "transparent",
          WebkitTextStroke: "1px rgba(7,66,37,0.04)",
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
          width: { xs: "100%", md: 440 },
          pb: { xs: 0, md: "48px" },
          my: "auto",
        }}
      >
        {/* Step indicator */}
        <Stack
          direction="row"
          spacing={1.5}
          sx={{ alignItems: "center", mb: { xs: 4, md: "52px" } }}
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
              color: "rgba(7,66,37,0.18)",
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
            color: "#074225",
            mb: { xs: 2.5, md: 3 },
          }}
        >
          {slide.title}
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: 15, md: 17.5 },
            lineHeight: 1.75,
            color: "rgba(7,66,37,0.58)",
            mb: 4,
          }}
        >
          {slide.sub}
        </Typography>

        <Box
          component="a"
          href="https://app.speekr.ai/auth/sign-up/"
          target="_blank"
          rel="noreferrer"
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: 1,
            px: 3.5,
            py: "13px",
            borderRadius: "100px",
            background: "linear-gradient(135deg, #F26433 0%, #F6845F 100%)",
            color: "#074225",
            fontSize: 15,
            fontWeight: 800,
            textDecoration: "none",
            boxShadow:
              "0 0 0 1px rgba(242,100,51,0.3), 0 12px 36px rgba(242,100,51,0.2)",
            transition: "transform 0.22s ease, box-shadow 0.22s ease",
            "&:hover": {
              transform: "translateY(-2px)",
              boxShadow:
                "0 0 0 1px rgba(242,100,51,0.48), 0 18px 48px rgba(242,100,51,0.32)",
            },
          }}
        >
          Start Free Trial
          <ArrowRight size={17} aria-hidden />
        </Box>
      </Box>

      {/* Right: image */}
      <Box
        sx={{
          position: "relative",
          zIndex: 3,
          flexShrink: 0,
          width: { xs: "100%", md: "auto" },
          flex: { md: "1 1 0" },
          maxWidth: { sm: 420, md: 440, lg: 480 },
          alignSelf: { xs: "auto", sm: "center", md: "center" },
          borderRadius: "16px",
          overflow: "hidden",
          aspectRatio: "16 / 9",
          minHeight: { xs: 160, md: 0 },
        }}
      >
        <Box
          component="img"
          src={slide.img}
          alt={slide.title}
          loading="lazy"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            opacity: 1,
            filter: "none",
          }}
        />
      </Box>
    </Box>
  );
}

export default function ProgramsCarousel() {
  const [active, setActive] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handle = () => {
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
    window.addEventListener("scroll", handle, { passive: true });
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
      sx={{ height: `${(SLIDES.length + 1) * 100}vh`, position: "relative" }}
    >
      <Box
        sx={{
          position: "sticky",
          top: 0,
          height: "calc(100vh / var(--site-scale))",
          bgcolor: "#074225",
          px: { xs: "12px", sm: "18px", md: "24px" },
          py: { xs: "12px", md: "16px" },
          display: "flex",
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
              Transform The Way You{" "}
              <Box component="span" sx={{ color: "#F26433" }}>
                Communicate
              </Box>
            </Typography>
          </Box>

          {/* Slide area */}
          <Box sx={{ flex: 1, position: "relative", zIndex: 1, minHeight: 0 }}>
            {SLIDES.map((slide, i) => (
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
                <SlideCard slide={slide} />
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
                <ChevronLeft
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
                <ChevronRight
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

            <Stack direction="row" spacing={0.9} sx={{ alignItems: "center" }}>
              {SLIDES.map((_, i) => (
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
