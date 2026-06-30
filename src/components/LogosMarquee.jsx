import Box from "@mui/material/Box";
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
      dir="ltr"
      sx={{
        position: "relative",
        bgcolor: "#EEF3CD",
        direction: "ltr",
        py: { xs: "46px", md: "70px" },
        overflow: "hidden",
        background:
          "radial-gradient(circle at 50% 18%, rgba(242,100,51,0.075) 0%, transparent 30%), linear-gradient(180deg, #EEF3CD 0%, #F7F9E8 100%)",
        boxShadow:
          "0 18px 45px rgba(7,66,37,0.055), inset 0 1px 0 rgba(255,255,255,0.55)",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(90deg, transparent 0%, rgba(7,66,37,0.1) 18%, rgba(242,100,51,0.2) 50%, rgba(7,66,37,0.1) 82%, transparent 100%)",
        },
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(90deg, transparent 0%, rgba(7,66,37,0.08) 18%, rgba(242,100,51,0.16) 50%, rgba(7,66,37,0.08) 82%, transparent 100%)",
        },
      }}
    >
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: { xs: 520, md: 920 },
          height: { xs: 150, md: 240 },
          transform: "translate(-50%, -50%)",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse at center, rgba(7,66,37,0.075) 0%, transparent 66%)",
          pointerEvents: "none",
        }}
      />

      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          direction: "ltr",
          /* left edge fade */
          "&::before": {
            content: '""',
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: { xs: 60, md: 140 },
            background:
              "linear-gradient(90deg, #EEF3CD 0%, rgba(238,243,205,0.82) 38%, transparent 100%)",
            zIndex: 2,
            pointerEvents: "none",
          },
          "&::after": {
            content: '""',
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: { xs: 60, md: 140 },
            background:
              "linear-gradient(270deg, #F7F9E8 0%, rgba(247,249,232,0.82) 38%, transparent 100%)",
            zIndex: 2,
            pointerEvents: "none",
          },
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
            direction: "ltr",
            width: "max-content",
            willChange: "transform",
            "@keyframes lmScroll": {
              from: { transform: "translateX(0)" },
              to: { transform: "translateX(-50%)" },
            },
            animation: "lmScroll 16s linear infinite",
          }}
        >
          {[...LOGOS, ...LOGOS].map((logo, i) => (
            <Box
              key={i}
              sx={{
                flexShrink: 0,
                mx: { xs: "22px", md: "44px" },
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  inset: { xs: "-8px -12px", md: "-10px -16px" },
                  borderRadius: "14px",
                  background: "rgba(7,66,37,0)",
                  boxShadow: "0 0 0 0 rgba(242,100,51,0)",
                  transition:
                    "background 0.35s ease, box-shadow 0.35s ease",
                  pointerEvents: "none",
                },
                "&:hover::after": {
                  background: "rgba(242,100,51,0.07)",
                  boxShadow: "0 14px 32px rgba(242,100,51,0.13)",
                },
                "& img": {
                  height: { xs: "40px", sm: "46px", md: "56px" },
                  width: "auto",
                  objectFit: "contain",
                  filter:
                    "brightness(0) saturate(100%) invert(19%) sepia(29%) saturate(1042%) hue-rotate(94deg) brightness(93%) contrast(96%)",
                  opacity: 0.72,
                  display: "block",
                  transition:
                    "filter 0.35s ease, opacity 0.35s ease, transform 0.35s ease",
                },
                "&:hover img": {
                  filter:
                    "brightness(0) saturate(100%) invert(55%) sepia(78%) saturate(2877%) hue-rotate(338deg) brightness(101%) contrast(90%) drop-shadow(0 8px 18px rgba(242,100,51,0.18))",
                  opacity: 1,
                  transform: "scale(1.08)",
                },
              }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                title={logo.alt}
                loading="lazy"
                decoding="async"
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default LogosMarquee;
