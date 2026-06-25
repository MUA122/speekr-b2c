import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { ArrowRight } from "lucide-react";

const IMG = (id) =>
  `https://cdn.builder.io/api/v1/image/assets%2F7a4e07e52a2c4a8bb3890e0c17931328%2F${id}`;

const CARDS = [
  {
    num: "01",
    title: "Practice Solo",
    sub: "Record yourself. Get instant feedback and AI coaching.",
    img: IMG("072f8695be514dd683ca21a028e6b656"),
  },
  {
    num: "02",
    title: "Practice with AI",
    sub: "Practice real business scenarios with AI that challenges, objects, and engages you.",
    img: IMG("5ebf70af32a64fd38eb5afe4a9258fdf"),
  },
  {
    num: "03",
    title: "Get Instant Feedback",
    sub: "Science-based insights on your voice, body language, word choice, and conversation.",
    img: IMG("27116df5851b42e1ae478cfe60470973"),
  },
  {
    num: "04",
    title: "Customize Your Conversations",
    sub: "Build scenarios around your industry, clients, and real work challenges.",
    img: IMG("fb920cf9b76c44d68ab90c97210d0a36"),
  },
  {
    num: "05",
    title: "Start a Guided Learning Journey",
    sub: "Learn from international coaches through AI powered structured paths.",
    img: IMG("48cf416b618f41c38c3af16f330e403e"),
  },
];

function FeatureCard({ num, title, sub, img }) {
  return (
    <Box
      className="premium-card"
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: { xs: 4, md: 3 },
        p: { xs: "28px 22px", sm: "36px 32px", md: "44px 48px" },
        borderRadius: { xs: "20px", md: "28px" },
        overflow: "hidden",
        border: "1px solid rgba(7,66,37,0.07)",
        bgcolor: "rgba(238,243,205,0.82)",
        boxShadow: "0 14px 42px rgba(7,66,37,0.045)",
        transition:
          "border-color 0.3s ease, transform 0.35s cubic-bezier(0.4,0,0.2,1), box-shadow 0.3s ease",
        "&:hover": {
          borderColor: "rgba(242,100,51,0.1)",
          transform: "translateY(-4px)",
          boxShadow:
            "0 20px 58px rgba(7,66,37,0.075), 0 0 0 1px rgba(242,100,51,0.08)",
        },
      }}
    >
      {/* Ghost number — decorative background texture */}
      <Typography
        aria-hidden
        sx={{
          position: "absolute",
          top: -28,
          left: -10,
          fontSize: { xs: 130, md: 200 },
          fontWeight: 900,
          lineHeight: 1,
          letterSpacing: -8,
          color: "transparent",
          WebkitTextStroke: "1px rgba(7,66,37,0.045)",
          pointerEvents: "none",
          userSelect: "none",
          zIndex: 0,
        }}
      >
        {num}
      </Typography>

      {/* Left: text */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          flexShrink: 0,
          width: { xs: "100%", md: 440 },
          pb: { xs: 0, md: "64px" },
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
              boxShadow: "0 0 10px rgba(242,100,51,0.32)",
            }}
          />
          <Typography
            sx={{
              fontSize: 26,
              fontWeight: 900,
              letterSpacing: -0.5,
              color: "rgba(7,66,37,0.2)",
              lineHeight: 1,
            }}
          >
            {num}
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
          {title}
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: 15, md: 17.5 },
            lineHeight: 1.75,
            color: "rgba(7,66,37,0.58)",
          }}
        >
          {sub}
        </Typography>
      </Box>

      {/* Right: image */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          flexShrink: 0,
          width: { xs: "100%", md: "auto" },
          flex: { md: "1 1 0" },
          maxWidth: { md: 536 },
          alignSelf: { xs: "auto", md: "stretch" },
          borderRadius: "16px",
          overflow: "hidden",
          minHeight: { xs: 180, sm: 240, md: "auto" },
        }}
      >
        <Box
          component="img"
          src={img}
          alt=""
          loading="lazy"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            opacity: 0.78,
            filter: "saturate(0.86) contrast(0.92)",
          }}
        />
      </Box>
    </Box>
  );
}

function FeatureCards() {
  return (
    /* Outer gutter — matches hero/scenarios dark background */
    <Box
      sx={{
        bgcolor: "#EEF3CD",
        px: { xs: "12px", sm: "18px", md: "24px" },
        py: { xs: 3, md: 4 },
      }}
    >
      <Box
        id="product"
        component="section"
        aria-labelledby="features-title"
        sx={{
          position: "relative",
          bgcolor: "#074225",
          borderRadius: { xs: "24px", md: "32px" },
          overflow: "hidden",
          px: { xs: 2.5, sm: 4, md: 6, lg: 8 },
          py: { xs: 8, md: 12 },
          /* top shimmer line */
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
        {/* Ambient orb — top center */}
        <Box
          component="img"
          src="/images/brand-patterns/line-pattern-wide.png"
          alt=""
          aria-hidden
          sx={{
            position: "absolute",
            top: { xs: 28, md: 42 },
            right: { xs: "-42%", md: "-10%" },
            width: { xs: 620, md: 920 },
            maxWidth: "none",
            opacity: 0.11,
            pointerEvents: "none",
            filter: "saturate(0.85)",
          }}
        />
        <Box
          component="img"
          src="/images/brand-patterns/frame.png"
          alt=""
          aria-hidden
          sx={{
            position: "absolute",
            bottom: { xs: -110, md: -160 },
            left: { xs: -130, md: -170 },
            width: { xs: 300, md: 420 },
            opacity: 0.16,
            transform: "rotate(-12deg)",
            pointerEvents: "none",
          }}
        />
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            top: "-12%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "80vw",
            height: "80vw",
            maxWidth: 1000,
            maxHeight: 1000,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(242,100,51,0.08) 0%, transparent 60%)",
            filter: "blur(80px)",
            pointerEvents: "none",
          }}
        />
        {/* Ambient orb — bottom right orange */}
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
              "radial-gradient(circle, rgba(242,100,51,0.08) 0%, transparent 65%)",
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

        <Box
          sx={{ position: "relative", zIndex: 1, maxWidth: 1320, mx: "auto" }}
        >
          {/* Heading */}
          <Box
            sx={{
              textAlign: "center",
              mb: { xs: 7, md: 10 },
              px: { xs: 1, md: 6 },
            }}
          >
            <Typography
              id="features-title"
              component="h2"
              sx={{
                m: 0,
                fontSize: { xs: 34, sm: 44, md: 54, lg: 60 },
                fontFamily: (theme) => theme.palette.brand.fontHeadline,
                fontWeight: 900,
                letterSpacing: { xs: -1, md: -2 },
                lineHeight: { xs: 1.1, md: 1.06 },
                color: "#EEF3CD",
              }}
            >
              Transform The Way You{" "}
              <Box component="span" sx={{ color: "#F26433" }}>
                Communicate
              </Box>
            </Typography>
          </Box>

          {/* Cards */}
          <Stack spacing={{ xs: 3, md: 4 }}>
            {CARDS.map((c) => (
              <FeatureCard key={c.num} {...c} />
            ))}
          </Stack>

          {/* CTA */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: { xs: 7, md: 10 },
            }}
          >
            <Box
              component="a"
              href="https://app.speekr.ai/auth/sign-up/"
              target="_blank"
              rel="noreferrer"
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                px: 4,
                py: "14px",
                borderRadius: "100px",
                background: "linear-gradient(135deg, #F26433 0%, #F6845F 100%)",
                color: "#074225",
                fontSize: 15.5,
                fontWeight: 800,
                textDecoration: "none",
                boxShadow:
                  "0 0 0 1px rgba(242,100,51,0.3), 0 16px 48px rgba(242,100,51,0.2)",
                transition:
                  "transform 0.22s cubic-bezier(0.4,0,0.2,1), box-shadow 0.22s ease",
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow:
                    "0 0 0 1px rgba(242,100,51,0.48), 0 22px 64px rgba(242,100,51,0.32)",
                },
              }}
            >
              Start Free Trial
              <ArrowRight size={17} aria-hidden />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default FeatureCards;
