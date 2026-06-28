import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { ArrowRight, CalendarDays, Star } from "lucide-react";
import { commonCopy, landingCopy } from "../utils/i18n";

const AVATARS = [
  { bg: "#8EC640", initials: "MK" },
  { bg: "#F26433", initials: "SR" },
  { bg: "#EEF3CD", initials: "AL" },
  { bg: "#C84D27", initials: "JP" },
];

function ProductPreview() {
  return (
    <Box
      component="img"
      src="/images/hero.png"
      alt="Speekr AI communication coaching dashboard preview"
      title="Speekr AI communication coaching dashboard preview"
      aria-hidden
      decoding="async"
      fetchPriority="high"
      sx={{
        display: "block",
        width: { lg: 690, xl: 820 },
        maxWidth: "none",
        height: "auto",
        flexShrink: 0,
      }}
    />
  );
}
function Hero({ locale = "en", onBookDemoClick }) {
  const copy = landingCopy[locale].hero;
  const common = commonCopy[locale];
  const isAr = locale === "ar";
  return (
    <Box
      component="section"
      aria-labelledby="hero-title"
      sx={{
        position: "relative",
        minHeight: "100svh",
        overflow: "hidden",
        bgcolor: "#EEF3CD",
        background:
          "radial-gradient(circle at 82% 18%, rgba(242,100,51,0.14) 0%, transparent 28%), radial-gradient(circle at 12% 82%, rgba(7,66,37,0.12) 0%, transparent 34%), linear-gradient(135deg, #EEF3CD 0%, #EEF3CD 56%, rgba(7,66,37,0.08) 100%)",
      }}
    >
      {/* Ambient orb — lime, top-left */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          top: "-24%",
          left: "-14%",
          width: "70vw",
          height: "70vw",
          maxWidth: 900,
          maxHeight: 900,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(242, 100, 51, 0.14) 0%, rgba(7, 66, 37, 0.08) 44%, transparent 70%)",
          filter: "blur(90px)",
          pointerEvents: "none",
          zIndex: 0,
          animation: "premiumFloat 12s ease-in-out infinite",
        }}
      />

      {/* Ambient orb — orange, bottom-right */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          bottom: "-16%",
          right: "-8%",
          width: "58vw",
          height: "58vw",
          maxWidth: 760,
          maxHeight: 760,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(242, 100, 51, 0.16) 0%, rgba(242, 100, 51, 0.05) 42%, transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
          zIndex: 0,
          animation: "premiumFloat 14s ease-in-out infinite reverse",
        }}
      />

      {/* Ambient orb — mid-depth green */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          top: "35%",
          right: "22%",
          width: "32vw",
          height: "32vw",
          maxWidth: 440,
          maxHeight: 440,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(7, 66, 37, 0.18) 0%, transparent 70%)",
          filter: "blur(64px)",
          pointerEvents: "none",
          zIndex: 0,
          animation: "premiumGlow 9s ease-in-out infinite",
        }}
      />

      {/* Subtle grid */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          backgroundImage:
            "linear-gradient(rgba(7, 66, 37, 0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(7, 66, 37, 0.055) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage:
            "radial-gradient(ellipse 75% 75% at 18% 28%, rgba(0,0,0,0.7) 0%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 75% 75% at 18% 28%, rgba(0,0,0,0.7) 0%, transparent 100%)",
          opacity: 0.7,
        }}
      />

      {/* Noise grain */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          opacity: 0.022,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px",
        }}
      />

      <Box
        component="img"
        src="/images/brand-patterns/hero-bg.png"
        alt="Speekr hero background pattern"
        title="Speekr decorative hero background pattern"
        aria-hidden
        loading="lazy"
        decoding="async"
        sx={{
          position: "absolute",
          right: { xs: "-42%", md: "-12%", xl: "-4%" },
          top: { xs: "20%", md: "8%" },
          width: { xs: 760, md: 980, xl: 1120 },
          maxWidth: "none",
          opacity: { xs: 0.16, md: 0.26 },
          mixBlendMode: "multiply",
          pointerEvents: "none",
          zIndex: 0,
          animation: "premiumGlow 10s ease-in-out infinite",
        }}
      />

      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 1,
          minHeight: "100svh",
          display: "flex",
          alignItems: "center",
          px: { xs: 2.5, sm: 4, lg: 5 },
          pt: { xs: 19, md: 22 },
          pb: { xs: 7, md: 9 },
        }}
      >
        <Stack
          direction={{ xs: "column", lg: "row" }}
          sx={{
            width: "100%",
            alignItems: { xs: "flex-start", lg: "center" },
            justifyContent: { lg: "space-between" },
            gap: { xs: 7, lg: 7, xl: 9 },
          }}
        >
          {/* Left: text */}
          <Box
            sx={{
              maxWidth: { xs: "100%", lg: 640, xl: 700 },
              pl: isAr ? 0 : { xs: 1, sm: 2, md: 3, lg: 4 },
              pr: isAr ? { xs: 1, sm: 2, md: 3, lg: 4 } : 0,
              textAlign: isAr ? "right" : "left",
            }}
          >
            {/* Headline */}
            <Typography
              id="hero-title"
              component="h1"
              sx={{
                m: 0,
                fontSize: { xs: 48, sm: 64, md: 76, lg: 82, xl: 90 },
                fontFamily: (theme) => theme.palette.brand.fontHeadline,
                lineHeight: { xs: 1.04, md: 0.98 },
                fontWeight: 900,
                letterSpacing: { xs: -1.4, md: -2.8 },
                color: "#074225",
                maxWidth: 760,
              }}
            >
              <Box component="span" sx={{ display: "block" }}>
                {copy.line1}
              </Box>
              <Box
                component="span"
                sx={{
                  display: "block",
                }}
              >
                {copy.line2}{" "}
                <Box component="span" sx={{ color: "#F26433" }}>
                  {copy.accent}
                </Box>
              </Box>
            </Typography>

            {/* Subtitle */}
            <Typography
              sx={{
                mt: { xs: 3, md: 3.8 },
                maxWidth: 560,
                color: "rgba(7, 66, 37, 0.64)",
                fontSize: { xs: 16, md: 18 },
                lineHeight: 1.72,
                fontWeight: 500,
              }}
            >
              {copy.subtitle}
            </Typography>

            {/* CTAs */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              sx={{
                mt: { xs: 4, md: 5 },
                alignItems: { xs: "stretch", sm: "center" },
                justifyContent: "flex-start",
                gap: isAr ? { xs: 1.6, sm: 2.4 } : 1.5,
                "& .MuiButton-endIcon": {
                  ml: isAr ? 0 : 1,
                  mr: isAr ? 1 : -0.5,
                },
              }}
            >
              <Button
                component="a"
                href="https://app.speekr.ai"
                endIcon={<ArrowRight size={17} aria-hidden />}
                sx={{
                  minHeight: 56,
                  px: 3.5,
                  borderRadius: "14px",
                  fontSize: 15,
                  fontWeight: 700,
                  background:
                    "linear-gradient(135deg, #F26433 0%, #F6845F 100%)",
                  color: "#074225",
                  border: "none",
                  boxShadow:
                    "0 0 0 1px rgba(242, 100, 51, 0.28), 0 20px 55px rgba(242, 100, 51, 0.24)",
                  "&:hover": {
                    background:
                      "linear-gradient(135deg, #F26433 0%, #F26433 100%)",
                    boxShadow:
                      "0 0 0 1px rgba(242, 100, 51, 0.42), 0 24px 64px rgba(242, 100, 51, 0.32)",
                    transform: "translateY(-2px)",
                  },
                  transition: "all 220ms cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                {common.startFreeTrial}
              </Button>

              <Button
                type="button"
                onClick={onBookDemoClick}
                endIcon={<CalendarDays size={16} aria-hidden />}
                sx={{
                  minHeight: 56,
                  px: 3.5,
                  borderRadius: "14px",
                  fontSize: 15,
                  fontWeight: 700,
                  color: "#074225",
                  border: "1px solid rgba(7, 66, 37, 0.18)",
                  bgcolor: "rgba(7, 66, 37, 0.04)",
                  backdropFilter: "blur(14px)",
                  "&:hover": {
                    bgcolor: "rgba(7, 66, 37, 0.08)",
                    borderColor: "rgba(7, 66, 37, 0.32)",
                    color: "#074225",
                    transform: "translateY(-2px)",
                  },
                  transition: "all 220ms cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                {common.bookDemo}
              </Button>
            </Stack>

            {/* Social proof */}
            <Stack
              direction={isAr ? "row-reverse" : "row"}
              spacing={2}
              sx={{
                mt: 4.5,
                alignItems: "center",
                justifyContent: isAr ? "flex-start" : "flex-start",
                width: "fit-content",
                maxWidth: "100%",
              }}
            >
              {/* Avatar stack */}
              <Stack direction={isAr ? "row-reverse" : "row"} sx={{ position: "relative" }}>
                {AVATARS.map((a, i) => (
                  <Box
                    key={i}
                    aria-hidden
                    sx={{
                      width: 34,
                      height: 34,
                      borderRadius: "50%",
                      bgcolor: a.bg,
                      border: "2px solid #EEF3CD",
                      ml: !isAr && i > 0 ? -1.3 : 0,
                      mr: isAr && i > 0 ? -1.3 : 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 10.5,
                      fontWeight: 800,
                      color: "#EEF3CD",
                      zIndex: AVATARS.length - i,
                      flexShrink: 0,
                    }}
                  >
                    {a.initials}
                  </Box>
                ))}
              </Stack>
              <Box sx={{ textAlign: isAr ? "right" : "left" }}>
                <Stack
                  direction={isAr ? "row-reverse" : "row"}
                  spacing={0.3}
                  sx={{ mb: 0.4, justifyContent: isAr ? "flex-end" : "flex-start" }}
                >
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      fill="#F26433"
                      color="#F26433"
                      aria-hidden
                    />
                  ))}
                </Stack>
                <Typography
                  sx={{ fontSize: 12.5, color: "rgba(7, 66, 37, 0.55)" }}
                >
                  {copy.trusted}{" "}
                  <Box
                    component="span"
                    sx={{ color: "#074225", fontWeight: 700 }}
                  >
                    {copy.trustedCount}
                  </Box>
                </Typography>
              </Box>
            </Stack>
          </Box>

          {/* Right: product preview (desktop only) */}
          <Box sx={{ display: { xs: "none", lg: "block" } }}>
            <ProductPreview />
          </Box>
        </Stack>
      </Container>

      {/* Bottom fade */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 140,
          background: "linear-gradient(to top, #EEF3CD, transparent)",
          pointerEvents: "none",
          zIndex: 2,
        }}
      />
    </Box>
  );
}

export default Hero;
