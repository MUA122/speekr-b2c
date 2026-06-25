import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Sparkles } from "lucide-react";

const LOGOS = [
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F7a4e07e52a2c4a8bb3890e0c17931328%2F57f00c83d6ea4a8b88a73188e2bbcb4f",
    alt: "Partner logo",
  },
  {
    src: "https://api.builder.io/api/v1/image/assets/TEMP/435575a66fd595ee751ed1187cf0ed110eddf2f8?width=86",
    alt: "Partner logo",
  },
  {
    src: "https://api.builder.io/api/v1/image/assets/TEMP/108884ab4d0bee4faf9f2e3c9e236c7165d28275?width=89",
    alt: "Partner logo",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F7a4e07e52a2c4a8bb3890e0c17931328%2Fa6f84b0cd74c4daa9f2d91c9d7b3d9fd",
    alt: "Partner logo",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F7a4e07e52a2c4a8bb3890e0c17931328%2F448a166125a548d09c82b57c06e8462c",
    alt: "Partner logo",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F7a4e07e52a2c4a8bb3890e0c17931328%2F84027d4e55f040208be03b025caea8ef",
    alt: "Partner logo",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F7a4e07e52a2c4a8bb3890e0c17931328%2F6df64eefefae4f319d6f36b9d495f60a",
    alt: "Partner logo",
  },
];

function LogosMarquee() {
  return (
    <Box
      component="section"
      aria-label="Trusted by leading teams"
      sx={{
        position: "relative",
        bgcolor: "#EEF3CD",
        py: { xs: "50px", md: "78px" },
        overflow: "hidden",
        background:
          "radial-gradient(circle at 50% 18%, rgba(242,100,51,0.08) 0%, transparent 28%), linear-gradient(180deg, #EEF3CD 0%, #EEF3CD 100%)",
        /* top shimmer line */
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(90deg, transparent 0%, rgba(7,66,37,0.12) 18%, rgba(7,66,37,0.22) 50%, rgba(7,66,37,0.12) 82%, transparent 100%)",
        },
        /* bottom shimmer line */
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(90deg, transparent 0%, rgba(7,66,37,0.12) 18%, rgba(7,66,37,0.22) 50%, rgba(7,66,37,0.12) 82%, transparent 100%)",
        },
      }}
    >
      {/* Ambient center glow */}
      {/* <Box
        aria-hidden
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '65%',
          height: '220%',
          background:
            'radial-gradient(ellipse at center, rgba(242,100,51,0.08) 0%, transparent 62%)',
          pointerEvents: 'none',
        }}
      /> */}

      {/* Noise grain overlay */}
      {/* <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          opacity: 0.018,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px",
        }}
      /> */}

      {/* Label */}
      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        <Stack sx={{ alignItems: "center", mb: { xs: 4, md: 5.5 }, gap: 1 }}>
          <Stack
            direction="row"
            spacing={1}
            sx={{
              alignItems: "center",
              px: 1.8,
              py: 0.7,
              borderRadius: "100px",
              border: "1px solid rgba(7,66,37,0.16)",
              bgcolor: "rgba(242,100,51,0.08)",
            }}
          >
            <Sparkles size={12} color="#074225" aria-hidden />
            <Typography
              sx={{
                fontSize: 11,
                fontWeight: 800,
                letterSpacing: 1.8,
                textTransform: "uppercase",
                color: "#074225",
              }}
            >
              Trusted by leading teams
            </Typography>
          </Stack>

          <Typography
            sx={{
              fontSize: { xs: 13.5, md: 14.5 },
              color: "rgba(7,56,33,0.38)",
              fontWeight: 400,
              textAlign: "center",
            }}
          >
            World-class professionals use Speekr to communicate with confidence.
          </Typography>
        </Stack>
      </Container>

      {/* Marquee */}
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          /* left edge fade */
          "&::before": {
            content: '""',
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: { xs: 60, md: 140 },
            background: "linear-gradient(90deg, #EEF3CD 0%, transparent 100%)",
            zIndex: 2,
            pointerEvents: "none",
          },
          /* right edge fade */
          "&::after": {
            content: '""',
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: { xs: 60, md: 140 },
            background: "linear-gradient(270deg, #EEF3CD 0%, transparent 100%)",
            zIndex: 2,
            pointerEvents: "none",
          },
          /* pause on hover */
          "&:hover .lm-track": {
            animationPlayState: "paused",
          },
        }}
      >
        <Box
          className="lm-track"
          sx={{
            display: "flex",
            alignItems: "center",
            width: "max-content",
            "@keyframes lmScroll": {
              from: { transform: "translateX(0)" },
              to: { transform: "translateX(-50%)" },
            },
            animation: "lmScroll 18s linear infinite",
          }}
        >
          {[...LOGOS, ...LOGOS].map((logo, i) => (
            <Box
              key={i}
              sx={{
                flexShrink: 0,
                mx: { xs: "20px", md: "40px" },
                position: "relative",
                /* glow ring on hover */
                "&::after": {
                  content: '""',
                  position: "absolute",
                  inset: "-6px -10px",
                  borderRadius: "10px",
                  background: "rgba(242,100,51,0)",
                  boxShadow: "0 0 0px 0px rgba(242,100,51,0)",
                  transition: "background 0.35s ease, box-shadow 0.35s ease",
                  pointerEvents: "none",
                },
                "&:hover::after": {
                  background: "rgba(242,100,51,0.06)",
                  boxShadow: "0 0 18px 2px rgba(242,100,51,0.18)",
                },
                "& img": {
                  height: { xs: "40px", md: "55px" },
                  width: "auto",
                  objectFit: "contain",
                  filter: "grayscale(100%)",
                  opacity: 0.42,
                  display: "block",
                  transition:
                    "filter 0.35s ease, opacity 0.35s ease, transform 0.35s ease",
                },
                "&:hover img": {
                  filter:
                    "grayscale(0%) drop-shadow(0 0 6px rgba(242,100,51,0.45))",
                  opacity: 1,
                  transform: "scale(1.08)",
                },
              }}
            >
              <img src={logo.src} alt={logo.alt} />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default LogosMarquee;
