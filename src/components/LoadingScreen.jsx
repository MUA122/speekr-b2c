import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const STEPS = [20, 40, 60, 80, 100];

export default function LoadingScreen({ fixed = false }) {
  const [step, setStep] = useState(20);

  useEffect(() => {
    const timers = STEPS.slice(1).map((value, index) =>
      window.setTimeout(() => setStep(value), 180 * (index + 1)),
    );
    return () => timers.forEach(window.clearTimeout);
  }, []);

  return (
    <Box
      className="site-loader"
      role="status"
      aria-live="polite"
      sx={{
        position: fixed ? "fixed" : "relative",
        inset: fixed ? 0 : "auto",
        zIndex: fixed ? 99999 : "auto",
        minHeight: "100svh",
        bgcolor: "#EEF3CD",
        color: "#074225",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 3,
        overflow: "hidden",
      }}
    >
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 50% 28%, rgba(242,100,51,0.11), transparent 30%), linear-gradient(180deg, #EEF3CD 0%, #F6F8D9 54%, #EEF3CD 100%)",
        }}
      />
      <Box
        sx={{
          position: "relative",
          width: "min(360px, 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Box
          component="img"
          src="/images/logo.svg"
          alt="Speekr.ai"
          decoding="async"
          sx={{
            width: { xs: 132, sm: 148 },
            height: "auto",
            display: "block",
            filter:
              "brightness(0) saturate(100%) invert(17%) sepia(34%) saturate(1031%) hue-rotate(104deg) brightness(92%) contrast(97%)",
          }}
        />
        <Box
          sx={{
            mt: 3,
            width: "100%",
            height: 10,
            borderRadius: 99,
            border: "1px solid rgba(7,66,37,0.16)",
            bgcolor: "rgba(7,66,37,0.08)",
            overflow: "hidden",
          }}
        >
          <Box
            className="site-loader__bar"
            sx={{
              width: `${step}%`,
              height: "100%",
              borderRadius: "inherit",
              bgcolor: "#F26433",
              transition: "width 180ms ease",
            }}
          />
        </Box>
        <Box sx={{ mt: 1.4, width: "100%", display: "flex", justifyContent: "space-between" }}>
          {STEPS.map((value) => (
            <Typography
              key={value}
              component="span"
              sx={{
                fontSize: 11,
                fontWeight: 900,
                color: value <= step ? "#F26433" : "rgba(7,66,37,0.34)",
              }}
            >
              {value}%
            </Typography>
          ))}
        </Box>
        <Typography
          sx={{
            mt: 2.4,
            fontSize: 12,
            fontWeight: 900,
            letterSpacing: 1.6,
            textTransform: "uppercase",
            color: "rgba(7,66,37,0.62)",
          }}
        >
          Preparing your AI coach
        </Typography>
      </Box>
    </Box>
  );
}
