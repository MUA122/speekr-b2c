import { useState, useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Sparkles, ChevronRight } from "lucide-react";
import { landingCopy } from "../utils/i18n";

const IMG = (id) =>
  `https://cdn.builder.io/api/v1/image/assets%2F7a4e07e52a2c4a8bb3890e0c17931328%2F${id}`;
const VID = (id) =>
  `https://cdn.builder.io/o/assets%2F7a4e07e52a2c4a8bb3890e0c17931328%2F${id}%2Fcompressed?apiKey=7a4e07e52a2c4a8bb3890e0c17931328&token=${id}&alt=media&optimized=true`;

const SCENARIOS = [
  {
    id: 0,
    category: "Sales",
    label: "Win The Sales Call",
    title: "Budget Objection Handling",
    cover: IMG("f7eab9a39403473294738370b4d35535"),
    video: VID("df1e132ba6d44f749a6944b725ece1f2"),
    coach: {
      name: "Sherif",
      avatar: IMG("95f5a6bd88644b1bbc8f801c9abcb4e7"),
      type: "Sales Call",
      lang: "Arabic",
    },
    goalPct: 53,
  },
  {
    id: 1,
    category: "Career Development",
    label: "Land Your Next Job Interview",
    title: "Land Your Next Job Interview",
    cover: IMG("614cafc44e9448128d84001138eeb4fc"),
    video: VID("6ea221d79df943639db72c03f4a83ab0"),
    coach: {
      name: "Iman",
      avatar: IMG("10b2d34e81f945aea586f4b34751f9d7"),
      type: "Interview",
      lang: "English",
    },
    goalPct: 90,
  },
  {
    id: 2,
    category: "Sales",
    label: "Unexpected Cold Call",
    title: "Unexpected Cold Call",
    cover: IMG("1619f156e8e6411b9c78e1bf76d0be6c"),
    video: VID("787b7e773c16491c8be9465d90909bbd"),
    coach: {
      name: "Sherif",
      avatar: IMG("9554ef8a6ceb442380dd0dd162e3413d"),
      type: "Pitch",
      lang: "Arabic",
    },
    goalPct: 65,
  },
];

function ProgressRing({ pct, size = 52 }) {
  const sw = 3;
  const r = (size - sw * 2) / 2;
  const circ = 2 * Math.PI * r;
  const fill = (pct / 100) * circ;
  return (
    <Box
      sx={{ position: "relative", width: size, height: size, flexShrink: 0 }}
    >
      <svg
        width={size}
        height={size}
        style={{ display: "block", transform: "rotate(-90deg)" }}
        aria-hidden
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="rgba(238,243,205,0.1)"
          strokeWidth={sw}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="#F26433"
          strokeWidth={sw}
          strokeLinecap="round"
          strokeDasharray={`${fill} ${circ}`}
          style={{
            transition: "stroke-dasharray 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        />
      </svg>
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 11,
          fontWeight: 800,
          color: "#F26433",
          lineHeight: 1,
        }}
      >
        {pct}%
      </Box>
    </Box>
  );
}

function CoachTag({ children }) {
  return (
    <Box
      sx={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        px: 1.4,
        height: 22,
        borderRadius: "100px",
        border: "1px solid rgba(238,243,205,0.15)",
        bgcolor: "rgba(238,243,205,0.04)",
      }}
    >
      <Typography
        sx={{ fontSize: 11, color: "rgba(238,243,205,0.45)", lineHeight: 1 }}
      >
        {children}
      </Typography>
    </Box>
  );
}

function ExpandedContent({ scenario, copy }) {
  return (
    <Stack spacing={2.5}>
      {/* Cover thumbnail */}
      <Box
        component="a"
        href="https://app.speekr.ai/auth/sign-up/"
        target="_blank"
        rel="noreferrer"
        sx={{
          display: "block",
          position: "relative",
          borderRadius: "12px",
          overflow: "hidden",
          height: 140,
          flexShrink: 0,
          textDecoration: "none",
          "&:hover img": { transform: "scale(1.04)" },
        }}
      >
        <Box
          component="img"
          src={scenario.cover}
          alt={scenario.title}
          title={scenario.title}
          loading="lazy"
          decoding="async"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            transition: "transform 0.4s ease",
          }}
        />
        {/* gradient overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 55%)",
            pointerEvents: "none",
          }}
        />
        {/* category pill */}
        <Box
          sx={{
            position: "absolute",
            top: 10,
            left: 10,
            px: 1.4,
            py: 0.45,
            borderRadius: "100px",
            bgcolor: "rgba(0,34,19,0.88)",
            border: "1px solid rgba(242,100,51,0.25)",
            backdropFilter: "blur(8px)",
          }}
        >
          <Typography
            sx={{
              fontSize: 10,
              fontWeight: 800,
              letterSpacing: 0.6,
              color: "#F26433",
            }}
          >
            {scenario.category}
          </Typography>
        </Box>
        {/* title overlay */}
        <Typography
          sx={{
            position: "absolute",
            bottom: 10,
            left: 12,
            right: 12,
            fontSize: 12.5,
            fontWeight: 800,
            letterSpacing: 0.2,
            color: "#EEF3CD",
            lineHeight: 1.3,
            textTransform: "uppercase",
            textShadow: "0 1px 6px rgba(0,0,0,0.6)",
          }}
        >
          {scenario.title}
        </Typography>
      </Box>

      {/* Coach */}
      <Stack spacing={1}>
        <Typography
          sx={{
            fontSize: 11.5,
            color: "rgba(238,243,205,0.35)",
            fontWeight: 500,
          }}
        >
          {copy.practiceWith}
        </Typography>
        <Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
          <Box
            sx={{
              width: 50,
              height: 50,
              borderRadius: "50%",
              overflow: "hidden",
              flexShrink: 0,
              border: "2px solid rgba(242,100,51,0.22)",
            }}
          >
            <Box
              component="img"
              src={scenario.coach.avatar}
              alt={scenario.coach.name}
              title={`${scenario.coach.name} AI coach avatar`}
              loading="lazy"
              decoding="async"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: 15,
                fontWeight: 700,
                color: "rgba(238,243,205,0.9)",
                mb: 0.7,
                lineHeight: 1,
              }}
            >
              {scenario.coach.name}
            </Typography>
            <Stack direction="row" spacing={0.7}>
              <CoachTag>{scenario.coach.type}</CoachTag>
              <CoachTag>{scenario.coach.lang}</CoachTag>
            </Stack>
          </Box>
        </Stack>
      </Stack>

      {/* Goal + CTA */}
      <Stack
        direction="row"
        sx={{ alignItems: "center", justifyContent: "space-between" }}
      >
        <Stack direction="row" spacing={1.2} sx={{ alignItems: "center" }}>
          <ProgressRing pct={scenario.goalPct} />
          <Typography
            sx={{
              fontSize: 11,
              color: "rgba(238,243,205,0.38)",
              lineHeight: 1.3,
            }}
          >
            {copy.goal}
            <br />
            {copy.achieved}
          </Typography>
        </Stack>
        <Box
          component="a"
          href="https://app.speekr.ai/auth/sign-up/"
          target="_blank"
          rel="noreferrer"
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: 0.5,
            px: 2,
            py: 0.9,
            borderRadius: "100px",
            background: "linear-gradient(135deg, #F26433 0%, #F6845F 100%)",
            color: "#074225",
            fontSize: 12.5,
            fontWeight: 800,
            textDecoration: "none",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
            "&:hover": {
              transform: "translateY(-2px)",
              boxShadow: "0 8px 24px rgba(242,100,51,0.32)",
            },
          }}
        >
          {copy.practiceNow}
          <ChevronRight size={13} aria-hidden />
        </Box>
      </Stack>
    </Stack>
  );
}

function TabCard({ scenario, isActive, onClick, copy }) {
  return (
    <Box
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onClick()}
      aria-pressed={isActive}
      sx={{
        position: "relative",
        p: "16px 20px",
        borderRadius: "18px",
        border: "1px solid",
        borderColor: isActive
          ? "rgba(242,100,51,0.22)"
          : "rgba(238,243,205,0.07)",
        bgcolor: isActive ? "rgba(242,100,51,0.04)" : "rgba(238,243,205,0.025)",
        backdropFilter: "blur(24px)",
        cursor: "pointer",
        outline: "none",
        transition:
          "border-color 0.25s ease, background 0.25s ease, box-shadow 0.25s ease",
        boxShadow: isActive
          ? "0 0 36px rgba(242,100,51,0.07), inset 0 1px 0 rgba(238,243,205,0.06)"
          : "inset 0 1px 0 rgba(238,243,205,0.04)",
        "&:hover": !isActive
          ? {
              borderColor: "rgba(238,243,205,0.13)",
              bgcolor: "rgba(238,243,205,0.04)",
            }
          : {},
        "&:focus-visible": {
          outline: "2px solid rgba(242,100,51,0.5)",
          outlineOffset: 2,
        },
        /* lime left accent bar */
        "&::before": {
          content: '""',
          position: "absolute",
          left: 0,
          top: "50%",
          transform: "translateY(-50%)",
          width: 3,
          height: isActive ? "55%" : "0%",
          borderRadius: "0 3px 3px 0",
          bgcolor: "#F26433",
          transition: "height 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
        },
      }}
    >
      {isActive ? (
        <ExpandedContent scenario={scenario} copy={copy} />
      ) : (
        <Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
          <Box
            sx={{
              width: 44,
              height: 44,
              borderRadius: "50%",
              overflow: "hidden",
              flexShrink: 0,
              bgcolor: "rgba(238,243,205,0.06)",
            }}
          >
            <Box
              component="img"
              src={scenario.coach.avatar}
              alt={scenario.coach.name}
              title={`${scenario.coach.name} AI coach avatar`}
              loading="lazy"
              decoding="async"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </Box>
          <Typography
            sx={{
              fontSize: 13.5,
              fontWeight: 600,
              color: "rgba(238,243,205,0.6)",
              flex: 1,
              lineHeight: 1.35,
            }}
          >
            {scenario.label}
          </Typography>
          <ChevronRight size={15} color="rgba(238,243,205,0.25)" aria-hidden />
        </Stack>
      )}
    </Box>
  );
}

function ScenariosShowcase({ locale = "en" }) {
  const [active, setActive] = useState(0);
  const videoRef = useRef(null);
  const copy = landingCopy[locale].scenarios;
  const scenarios = SCENARIOS.map((scenario, index) => ({
    ...scenario,
    ...copy.items[index],
    coach: { ...scenario.coach, ...copy.items[index].coach },
  }));

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.load();
    v.play().catch(() => {});
  }, [active]);

  return (
    <Box
      component="section"
      id="product"
      aria-labelledby="scenarios-title"
      sx={{
        position: "relative",
        bgcolor: "#074225",
        py: { xs: 10, md: 14 },
        overflow: "hidden",
      }}
    >
      {/* Ambient orb — lime top-right */}
      <Box
        component="img"
        src="/images/brand-patterns/line-pattern-wide.png"
        alt="Speekr scenario background pattern"
        title="Speekr decorative scenario background pattern"
        aria-hidden
        loading="lazy"
        decoding="async"
        sx={{
          position: "absolute",
          top: { xs: 22, md: 40 },
          left: { xs: "-42%", md: "-10%" },
          width: { xs: 620, md: 900 },
          maxWidth: "none",
          opacity: 0.1,
          pointerEvents: "none",
        }}
      />
      <Box
        aria-hidden
        sx={{
          display: { xs: "none", md: "block" },
          position: "absolute",
          top: "5%",
          right: "-10%",
          width: "55vw",
          height: "55vw",
          maxWidth: 750,
          maxHeight: 750,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(242,100,51,0.13) 0%, transparent 65%)",
          filter: "blur(90px)",
          pointerEvents: "none",
        }}
      />
      {/* Ambient orb — orange bottom-left */}
      <Box
        aria-hidden
        sx={{
          display: { xs: "none", md: "block" },
          position: "absolute",
          bottom: "-8%",
          left: "-6%",
          width: "48vw",
          height: "48vw",
          maxWidth: 640,
          maxHeight: 640,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(242,100,51,0.1) 0%, transparent 65%)",
          filter: "blur(80px)",
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
          opacity: 0.022,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px",
        }}
      />

      <Container
        maxWidth="xl"
        sx={{ position: "relative", zIndex: 1, px: { xs: 2.5, sm: 4, lg: 5 } }}
      >
        {/* Section header */}
        <Box sx={{ mb: { xs: 7, md: 9 }, maxWidth: 680 }}>
            <Box
              sx={{
                display: "inline-flex",
              alignItems: "center",
              gap: 1,
              px: 1.6,
              py: 0.8,
              mb: 3,
                borderRadius: "100px",
                border: "1px solid rgba(242,100,51,0.22)",
                bgcolor: "rgba(242,100,51,0.06)",
                backdropFilter: { xs: "none", md: "blur(12px)" },
              }}
            >
            <Sparkles size={12} color="#F26433" aria-hidden />
            <Typography
              sx={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: 0.6,
                color: "rgba(242,100,51,0.88)",
              }}
            >
              {copy.badge}
            </Typography>
          </Box>

          <Typography
            id="scenarios-title"
            component="h2"
            sx={{
              m: 0,
              fontSize: { xs: 38, sm: 50, md: 58, lg: 66 },
              fontFamily: (theme) => theme.palette.brand.fontHeadline,
              fontWeight: 900,
              lineHeight: 1.06,
              letterSpacing: { xs: -1, md: -2 },
              color: "#EEF3CD",
              mb: 2.5,
            }}
          >
            {copy.title}{" "}
            <Box
              component="span"
              sx={{
                background: "#F26433",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {copy.accent}
            </Box>
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: 16, md: 17.5 },
              color: "rgba(238,243,205,0.68)",
              lineHeight: 1.78,
              fontWeight: 400,
            }}
          >
            {copy.subtitle}
          </Typography>
        </Box>

        {/* ── Desktop layout ── */}
        <Box
          sx={{
            display: { xs: "none", md: "grid" },
            gridTemplateColumns: { md: "1fr 350px", lg: "1fr 380px" },
            gap: { md: 3, lg: 4 },
            alignItems: "start",
          }}
        >
          {/* Video panel */}
          <Box
            sx={{
              position: "relative",
              borderRadius: "24px",
              overflow: "hidden",
              border: "1px solid rgba(238,243,205,0.14)",
              boxShadow:
                "0 40px 100px rgba(0,0,0,0.48), 0 0 0 1px rgba(242,100,51,0.08)",
            }}
          >
            {/* "PLAYING" badge */}
            <Box
              sx={{
                position: "absolute",
                top: 16,
                right: 16,
                zIndex: 2,
                display: "flex",
                alignItems: "center",
                gap: 0.8,
                px: 1.4,
                py: 0.6,
                borderRadius: "100px",
                bgcolor: "rgba(0,34,19,0.88)",
                border: "1px solid rgba(242,100,51,0.22)",
                backdropFilter: "blur(12px)",
              }}
            >
              <Box
                sx={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  bgcolor: "#F26433",
                  flexShrink: 0,
                  boxShadow: "0 0 8px rgba(242,100,51,0.9)",
                  "@keyframes scenarioPulse": {
                    "0%, 100%": { opacity: 1, transform: "scale(1)" },
                    "50%": { opacity: 0.5, transform: "scale(0.75)" },
                  },
                  animation: "scenarioPulse 2.2s ease-in-out infinite",
                }}
              />
              <Typography
                sx={{
                  fontSize: 10.5,
                  fontWeight: 800,
                  letterSpacing: 0.8,
                  color: "#F26433",
                }}
              >
                {copy.playing}
              </Typography>
            </Box>

            {/* Corner accents */}
            {[
              {
                top: 0,
                left: 0,
                borderTop: "2px solid rgba(242,100,51,0.35)",
                borderLeft: "2px solid rgba(242,100,51,0.35)",
                borderRadius: "24px 0 0 0",
              },
              {
                top: 0,
                right: 0,
                borderTop: "2px solid rgba(242,100,51,0.35)",
                borderRight: "2px solid rgba(242,100,51,0.35)",
                borderRadius: "0 24px 0 0",
              },
              {
                bottom: 0,
                left: 0,
                borderBottom: "2px solid rgba(242,100,51,0.35)",
                borderLeft: "2px solid rgba(242,100,51,0.35)",
                borderRadius: "0 0 0 24px",
              },
              {
                bottom: 0,
                right: 0,
                borderBottom: "2px solid rgba(242,100,51,0.35)",
                borderRight: "2px solid rgba(242,100,51,0.35)",
                borderRadius: "0 0 24px 0",
              },
            ].map((pos, i) => (
              <Box
                key={i}
                aria-hidden
                sx={{
                  position: "absolute",
                  zIndex: 2,
                  width: 28,
                  height: 28,
                  pointerEvents: "none",
                  ...pos,
                }}
              />
            ))}

            <Box
              component="video"
              ref={videoRef}
              muted
              playsInline
              preload="metadata"
              sx={{
                width: "100%",
                aspectRatio: "16/9",
                display: "block",
                objectFit: "cover",
              }}
            >
              <source src={scenarios[active].video} type="video/mp4" />
            </Box>
          </Box>

          {/* Tab list */}
          <Stack spacing={1.5}>
            {scenarios.map((s, i) => (
              <TabCard
                key={s.id}
                scenario={s}
                isActive={active === i}
                onClick={() => setActive(i)}
                copy={copy}
              />
            ))}
          </Stack>
        </Box>

        {/* ── Mobile layout ── */}
        <Stack spacing={4} sx={{ display: { xs: "flex", md: "none" } }}>
          {scenarios.map((s) => (
            <Stack key={s.id} spacing={1.5}>
              {/* Full scenario card */}
              <Box
                sx={{
                  p: "20px",
                  borderRadius: "18px",
                  border: "1px solid rgba(238,243,205,0.09)",
                  bgcolor: "rgba(238,243,205,0.03)",
                  backdropFilter: "none",
                }}
              >
                <ExpandedContent scenario={s} copy={copy} />
              </Box>
            </Stack>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}

export default ScenariosShowcase;
