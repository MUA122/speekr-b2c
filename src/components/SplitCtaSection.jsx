import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Check, ArrowRight } from "lucide-react";
import { commonCopy } from "../utils/i18n";

const NOISE = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

const lime = (a) => `rgba(242,100,51,${a})`;
const orange = (a) => `rgba(242,100,51,${a})`;

const INDIVIDUAL_FEATURES = [
  "AI roleplay across 100+ real-world scenarios",
  "Real-time coaching on tone, clarity & confidence",
  "Interview, pitch & presentation practice modes",
  "Skill-growth analytics after every session",
];

const BUSINESS_FEATURES = [
  "Team-wide training dashboards & manager views",
  "Custom AI scenarios built for your industry",
  "Bulk seat management with usage reporting",
  "Enterprise SSO, onboarding & dedicated support",
];

function CtaCard({
  isLime,
  badge,
  title,
  tagline,
  quote,
  features,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  onSecondaryClick,
}) {
  const color = isLime ? "#F26433" : "#F26433";
  const ca = isLime ? lime : orange;

  return (
    <Box
      className="premium-card"
      sx={{
        position: "relative",
        flex: "1 1 0",
        minWidth: 0,
        borderRadius: { xs: "20px", md: "24px" },
        border: "1px solid rgba(238,243,205,0.16)",
        background:
          "linear-gradient(145deg, rgba(7,66,37,0.96) 0%, rgba(0,52,30,0.98) 48%, rgba(2,21,13,1) 100%)",
        overflow: { xs: "visible", md: "hidden" },
        p: { xs: "26px 20px 24px", sm: "36px 28px", md: "52px 46px" },
        display: "flex",
        flexDirection: "column",
        minHeight: { xs: "auto", md: 0 },
        boxShadow:
          "0 30px 90px rgba(7,66,37,0.22), 0 0 0 1px rgba(242,100,51,0.06)",
      }}
    >
      {/* Ambient corner glow — top right */}
      <Box
        aria-hidden
        sx={{
          display: { xs: "none", md: "block" },
          position: "absolute",
          top: "-20%",
          right: "-15%",
          width: "65%",
          height: "65%",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${ca(0.14)} 0%, transparent 70%)`,
          filter: "blur(50px)",
          pointerEvents: "none",
        }}
      />
      {/* Ambient glow — bottom left */}
      <Box
        aria-hidden
        sx={{
          display: { xs: "none", md: "block" },
          position: "absolute",
          bottom: "-15%",
          left: "-10%",
          width: "45%",
          height: "45%",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${ca(0.06)} 0%, transparent 70%)`,
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />
      {/* Top shimmer line — card level */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          top: 0,
          left: "8%",
          right: "8%",
          height: "1px",
          background: `linear-gradient(90deg, transparent, ${ca(0.3)} 50%, transparent)`,
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        {/* Audience badge */}
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: 0.8,
            px: 1.5,
            py: 0.6,
            mb: 3,
            borderRadius: "100px",
            border: `1px solid ${ca(0.34)}`,
            bgcolor: "rgba(242,100,51,0.1)",
            alignSelf: "flex-start",
          }}
        >
          <Typography
            sx={{
              fontSize: 10,
              fontWeight: 800,
              letterSpacing: 1.6,
              textTransform: "uppercase",
              color,
            }}
          >
            {badge}
          </Typography>
        </Box>

        {/* Title */}
        <Typography
          component="h3"
          sx={{
            m: 0,
            mb: 1.5,
            fontSize: { xs: 26, sm: 30, md: 34, lg: 38 },
            fontWeight: 900,
            letterSpacing: 0,
            lineHeight: 1.0,
            color: "#EEF3CD",
          }}
        >
          {title}
        </Typography>

        {/* Tagline */}
        <Typography
          sx={{
            m: 0,
            mb: { xs: 3, md: 3.5 },
            fontSize: { xs: 14.5, md: 16 },
            fontWeight: 500,
            lineHeight: 1.65,
            color: "rgba(238,243,205,0.72)",
          }}
        >
          {tagline}
        </Typography>

        {/* Divider */}
        <Box
          sx={{
            height: "1px",
            mb: { xs: 3, md: 3.5 },
            background: `linear-gradient(90deg, ${ca(0.38)} 0%, rgba(238,243,205,0.12) 45%, transparent 100%)`,
          }}
        />

        {/* Quote / sub-headline */}
        <Typography
          sx={{
            m: 0,
            mb: { xs: 2.5, md: 3 },
            fontSize: { xs: 18, md: 22 },
            fontWeight: 800,
            letterSpacing: 0,
            lineHeight: 1.2,
            color: "#EEF3CD",
          }}
        >
          {quote}
        </Typography>

        {/* Feature list */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1.6,
            mb: { xs: 4, md: 5 },
            flex: 1,
          }}
        >
          {features.map((f) => (
            <Box
              key={f}
              sx={{ display: "flex", alignItems: "flex-start", gap: 1.4 }}
            >
              <Box
                sx={{
                  flexShrink: 0,
                  width: 18,
                  height: 18,
                  borderRadius: "50%",
                  bgcolor: ca(0.16),
                  border: `1px solid ${ca(0.34)}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mt: "2px",
                }}
              >
                <Check size={10} color={color} strokeWidth={2.5} aria-hidden />
              </Box>
              <Typography
                sx={{
                  fontSize: { xs: 13, md: 14 },
                  fontWeight: 500,
                  lineHeight: 1.55,
                  color: "rgba(238,243,205,0.74)",
                }}
              >
                {f}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* CTAs */}
        <Box
          sx={{
            display: "flex",
            gap: 1.5,
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <Box
            component="a"
            href={primaryHref}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              px: { xs: 2.5, md: 3 },
              py: 1.5,
              borderRadius: "100px",
              bgcolor: color,
              color: "#074225",
              fontSize: { xs: 13.5, md: 14 },
              fontWeight: 800,
              letterSpacing: 0,
              textDecoration: "none",
              fontFamily: "inherit",
              transition:
                "transform 0.22s ease, background-color 0.22s ease",
              boxShadow: "none",
              "&:hover": {
                transform: "translateY(-2px)",
                bgcolor: color,
                boxShadow: "none",
              },
            }}
          >
            {primaryLabel}
            <ArrowRight size={14} aria-hidden />
          </Box>

          {secondaryLabel && (
            <Box
              component="button"
              type="button"
              onClick={onSecondaryClick}
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                px: { xs: 2.5, md: 3 },
                py: 1.5,
                borderRadius: "100px",
                border: "1.5px solid rgba(238,243,205,0.18)",
                bgcolor: "rgba(238,243,205,0.04)",
                color: "rgba(238,243,205,0.78)",
                fontSize: { xs: 13.5, md: 14 },
                fontWeight: 700,
                letterSpacing: 0,
                cursor: "pointer",
                fontFamily: "inherit",
                transition:
                  "background 0.22s ease, border-color 0.22s ease, color 0.22s ease",
                "&:hover": {
                  bgcolor: "rgba(242,100,51,0.1)",
                  borderColor: ca(0.42),
                  color,
                },
              }}
            >
              {secondaryLabel}
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}

const UI = {
  en: {
    badge: "Powered by AI",
    titleAccent: "Communication Skills",
    title: "That Open Doors",
    subtitle: "The simplest way professionals and organizations can improve soft skills with AI-driven communication training.",
    individual: {
      badge: "For Individuals",
      title: "Speekr for Individuals",
      tagline: "Master important scenarios before they happen.",
      quote: "Ready to own the room?",
      features: INDIVIDUAL_FEATURES,
    },
    business: {
      badge: "For Business",
      title: "Speekr for Business",
      tagline: "Communication translates directly into revenue.",
      quote: "Ready to win every conversation?",
      features: BUSINESS_FEATURES,
    },
  },
  ar: {
    badge: "مدعوم بالذكاء الاصطناعي",
    titleAccent: "مهارات تواصل",
    title: "تفتح أبواب الفرص",
    subtitle: "أبسط طريقة لتمكين الأفراد والمنظمات من تطوير المهارات الناعمة عبر تدريب تواصلي مدعوم بالذكاء الاصطناعي.",
    individual: {
      badge: "للأفراد",
      title: "Speekr للأفراد",
      tagline: "أتقن المواقف المهمة قبل حدوثها.",
      quote: "هل أنت مستعد لامتلاك حضورك؟",
      features: [
        "محاكاة ذكية لأكثر من 100 سيناريو واقعي",
        "توجيه فوري حول النبرة والوضوح والثقة",
        "أوضاع تدريب للمقابلات والعروض والمحادثات",
        "تحليلات نمو المهارات بعد كل جلسة",
      ],
    },
    business: {
      badge: "للأعمال",
      title: "Speekr للأعمال",
      tagline: "التواصل الجيد ينعكس مباشرة على النتائج والإيرادات.",
      quote: "هل فريقك مستعد للفوز بكل محادثة؟",
      features: [
        "لوحات تدريب للفرق وإطلالات للمديرين",
        "سيناريوهات ذكية مخصصة لمجال عملك",
        "إدارة جماعية للمقاعد وتقارير استخدام",
        "دعم مؤسسي وتسجيل دخول موحد وتهيئة مخصصة",
      ],
    },
  },
};

export default function SplitCtaSection({ locale = "en", onDemoClick }) {
  const ui = UI[locale];
  const common = commonCopy[locale];
  const isRtl = locale === "ar";
  return (
    <Box
      sx={{
        bgcolor: "#EEF3CD",
        px: { xs: "12px", sm: "18px", md: "24px" },
        pt: { xs: 0, md: 0 },
        pb: { xs: 3, md: 4 },
      }}
    >
      <Box
        component="section"
        id="solutions"
        aria-labelledby="solutions-title"
        dir={isRtl ? "rtl" : "ltr"}
        sx={{
          position: "relative",
          bgcolor: "#EEF3CD",
          direction: isRtl ? "rtl" : "ltr",
          borderRadius: { xs: "24px", md: "32px" },
          overflow: "hidden",
          px: { xs: 2.5, sm: 4, md: 6, lg: 8 },
          pt: { xs: 6, md: 8 },
          pb: { xs: 8, md: 10 },
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: "10%",
            right: "10%",
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, rgba(242,100,51,0.3) 50%, transparent)",
          },
        }}
      >
        {/* Ambient orb — lime, center */}
        <Box
          component="img"
          src="/images/brand-patterns/frame.png"
          alt="Speekr solutions background pattern"
          title="Speekr decorative solutions background pattern"
          aria-hidden
          sx={{
            position: "absolute",
            top: { xs: -90, md: -130 },
            right: { xs: -120, md: -80 },
            width: { xs: 280, md: 380 },
            opacity: 0.12,
            transform: "rotate(10deg)",
            pointerEvents: "none",
          }}
        />
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            top: "30%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "60vw",
            height: "60vw",
            maxWidth: 700,
            maxHeight: 700,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(242,100,51,0.045) 0%, transparent 65%)",
            filter: "blur(70px)",
            pointerEvents: "none",
          }}
        />
        {/* Ambient orb — orange, top-left */}
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            top: "-10%",
            left: "-5%",
            width: "45vw",
            height: "45vw",
            maxWidth: 500,
            maxHeight: 500,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(242,100,51,0.055) 0%, transparent 65%)",
            filter: "blur(60px)",
            pointerEvents: "none",
          }}
        />
        {/* Ambient orb — lime, bottom-right */}
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            bottom: "-8%",
            right: "-4%",
            width: "40vw",
            height: "40vw",
            maxWidth: 440,
            maxHeight: 440,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(242,100,51,0.03) 0%, transparent 65%)",
            filter: "blur(60px)",
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
            opacity: 0.018,
            backgroundImage: NOISE,
            backgroundRepeat: "repeat",
            backgroundSize: "200px 200px",
          }}
        />

        <Box
          sx={{ position: "relative", zIndex: 1, maxWidth: 1200, mx: "auto" }}
        >
          {/* ── Heading ── */}
          <Box sx={{ textAlign: "center", mb: { xs: 6, md: 9 } }}>
            <Typography
              id="solutions-title"
              component="h2"
              sx={{
                m: 0,
                fontSize: isRtl
                  ? { xs: 42, sm: 54, md: 62, lg: 68 }
                  : { xs: 38, sm: 50, md: 58, lg: 64 },
                fontFamily: (theme) => theme.palette.brand.fontHeadline,
                fontWeight: 900,
                letterSpacing: isRtl ? 0 : { xs: -1.5, md: -2.5 },
                lineHeight: isRtl ? 1.15 : 1.0,
                color: "#074225",
              }}
            >
              <Box
                component="span"
                sx={{
                  display: "block",
                  color: "#F26433",
                  lineHeight: isRtl ? 1.12 : 1,
                  mb: isRtl ? { xs: 1.4, sm: 1.6, md: 1.8 } : 0,
                }}
              >
                {ui.titleAccent}
              </Box>
              <Box
                component="span"
                sx={{
                  display: "block",
                  lineHeight: isRtl ? 1.12 : 1,
                  mt: isRtl ? 0 : 0.15,
                }}
              >
                {ui.title}
              </Box>
            </Typography>

            <Typography
              sx={{
                mt: { xs: 2, md: 2.5 },
                fontSize: { xs: 14.5, md: 16 },
                fontWeight: 500,
                lineHeight: isRtl ? 1.85 : 1.65,
                color: "rgba(7,66,37,0.5)",
                maxWidth: 520,
                mx: "auto",
              }}
            >
              {ui.subtitle}
            </Typography>
          </Box>

          {/* ── Cards ── */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: 2.5, md: 3 },
            }}
          >
            <CtaCard
              isLime
              badge={ui.individual.badge}
              title={ui.individual.title}
              tagline={ui.individual.tagline}
              quote={ui.individual.quote}
              features={ui.individual.features}
              primaryLabel={common.startFreeTrial}
              primaryHref="https://app.speekr.ai/auth/sign-up/"
            />
            <CtaCard
              badge={ui.business.badge}
              title={ui.business.title}
              tagline={ui.business.tagline}
              quote={ui.business.quote}
              features={ui.business.features}
              primaryLabel={common.startFreeTrial}
              primaryHref="https://app.speekr.ai/auth/sign-up/"
              secondaryLabel={common.bookDemo}
              onSecondaryClick={onDemoClick}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
