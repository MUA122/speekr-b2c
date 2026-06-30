import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import { localizedPath } from "../utils/i18n";

const NOISE = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

const LOGO = "/images/logo.svg";

const SOCIAL_ICONS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/speekr.ai_/",
    vb: "0 0 24 24",
    paths: [
      "M15.9962 2H8.00375C4.70169 2 2 4.70169 2 8.00375V15.9962C2 19.2983 4.70169 22 8.00375 22H15.9962C19.2983 22 22 19.2983 22 15.9962V8.00375C22 4.70169 19.3358 2 15.9962 2ZM17.2345 12.0188C17.2345 14.8705 14.9456 17.1595 12.0938 17.1595C9.24203 17.1595 6.9531 14.8705 6.9531 12.0188C6.9531 9.16698 9.24203 6.87805 12.0938 6.87805C14.9081 6.87805 17.2345 9.16698 17.2345 12.0188ZM17.2345 8.0788C16.5591 8.0788 16.0338 7.55347 16.0338 6.87805C16.0338 6.20263 16.5591 5.6773 17.2345 5.6773C17.9099 5.6773 18.4353 6.20263 18.4353 6.87805C18.4353 7.51595 17.8724 8.0788 17.2345 8.0788Z",
      "M12 9C10.3571 9 9 10.3214 9 12C9 13.6786 10.3214 15 12 15C13.6429 15 15 13.6786 15 12C14.9643 10.3214 13.6429 9 12 9Z",
    ],
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/speekr-ai/",
    vb: "0 0 24 24",
    paths: [
      "M6.28291 22H2.35363V8.04563H6.28291V22ZM4.31827 6.44867C3.0609 6.44867 2 5.46008 2 4.24335C2 3.02662 3.02161 2 4.27898 2C5.53635 2 6.59725 2.98859 6.59725 4.20532C6.59725 5.42205 5.57564 6.44867 4.31827 6.44867ZM22 22H18.0707V14.8897C18.0707 10.6312 12.8448 10.9354 12.8448 14.8897V22H8.91552V8.04563H12.8448V10.289C14.6916 7.01901 22 6.75285 22 13.4449V22Z",
    ],
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61582806519272",
    vb: "0 0 24 24",
    paths: [
      "M9.49084 8.66667H7V12H9.49084V22H13.6667V12H16.707L17 8.66667H13.6667V7.27472C13.6667 6.46886 13.8132 6.17582 14.5824 6.17582H17V2H13.8132C10.8095 2 9.49084 3.31868 9.49084 5.84615V8.66667Z",
    ],
  },
  {
    label: "Email",
    href: "mailto:hello@speekr.ai",
    icon: Mail,
  },
];

const UI = {
  en: {
    eyebrow: "AI communication training",
    headline: "Speak sharper. Lead better.",
    brand:
      "Premium practice for individuals and teams building confident communication.",
    platform: "Platform",
    company: "Company",
    links1: ["Dashboard", "Blog", "Pricing", "Case Studies", "FAQ"],
    links2: ["Contact Us", "Privacy Policy", "Terms of Service"],
    tickTitle: "tick&talk",
    tickLead: "Offline public speaking and presentation masterclasses.",
    tickMeta: "Workshops, bootcamps, and live coaching experiences.",
    tickVisit: "Visit tick&talk",
    copyright: "2026 Speekr. All rights reserved.",
  },
  ar: {
    eyebrow: "تدريب تواصل بالذكاء الاصطناعي",
    headline: "تحدث بوضوح. قد بثقة.",
    brand: "تدريب متقدم للأفراد والفرق لبناء مهارات تواصل واثقة ومؤثرة.",
    platform: "المنصة",
    company: "الشركة",
    links1: [
      "لوحة التحكم",
      "المدونة",
      "الأسعار",
      "دراسات الحالة",
      "الأسئلة الشائعة",
    ],
    links2: ["تواصل معنا", "سياسة الخصوصية", "شروط الخدمة"],
    tickTitle: "tick&talk",
    tickLead: "دروس حضورية متقدمة في التحدث أمام الجمهور والعروض التقديمية.",
    tickMeta: "ورش عمل ومعسكرات وتجارب تدريب مباشرة.",
    tickVisit: "زيارة tick&talk",
    copyright: "2026 Speekr. جميع الحقوق محفوظة.",
  },
};

function SocialBtn({ label, href, vb, paths, icon: Icon }) {
  const isExternal = href.startsWith("http");

  return (
    <Box
      component="a"
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      aria-label={label}
      title={label}
      sx={{
        width: 42,
        height: 42,
        borderRadius: "50%",
        border: "1px solid rgba(238,243,205,0.13)",
        bgcolor: "rgba(238,243,205,0.055)",
        color: "#EEF3CD",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        textDecoration: "none",
        transition:
          "transform 0.22s ease, background-color 0.22s ease, border-color 0.22s ease, color 0.22s ease",
        "&:hover": {
          transform: "translateY(-2px)",
          bgcolor: "#F26433",
          borderColor: "#F26433",
          color: "#074225",
        },
        "&:hover path": {
          fill: "#074225",
        },
      }}
    >
      {Icon ? (
        <Icon size={17} strokeWidth={2.4} aria-hidden />
      ) : (
        <svg viewBox={vb} width="17" height="17" fill="none" aria-hidden="true">
          {paths.map((d, i) => (
            <path key={i} d={d} fill="currentColor" />
          ))}
        </svg>
      )}
    </Box>
  );
}

function NavLink({ label, href, onClick }) {
  const isExternal = href?.startsWith("http");

  return (
    <Box
      component={onClick ? "button" : "a"}
      type={onClick ? "button" : undefined}
      href={onClick ? undefined : href}
      onClick={onClick}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      sx={{
        display: "inline-flex",
        width: "fit-content",
        fontSize: 14,
        fontWeight: 650,
        lineHeight: 1.35,
        color: "rgba(238,243,205,0.56)",
        textDecoration: "none",
        bgcolor: "transparent",
        border: "none",
        cursor: "pointer",
        fontFamily: "inherit",
        p: 0,
        textAlign: "left",
        transition: "color 0.2s ease, transform 0.2s ease",
        "&:hover": {
          color: "#F26433",
          transform: "translateX(2px)",
        },
      }}
    >
      {label}
    </Box>
  );
}

function LinkColumn({ title, links, onContactClick }) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2.4 }}>
      <Typography
        sx={{
          fontSize: 10.5,
          fontWeight: 850,
          letterSpacing: 1.8,
          textTransform: "uppercase",
          color: "rgba(238,243,205,0.34)",
        }}
      >
        {title}
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1.45 }}>
        {links.map((link) => (
          <NavLink
            key={link.label}
            label={link.label}
            href={link.href}
            onClick={link.isContact ? onContactClick : undefined}
          />
        ))}
      </Box>
    </Box>
  );
}

function TickTalkPanel({ ui }) {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        borderRadius: { xs: "22px", md: "26px" },
        border: "1px solid rgba(242,100,51,0.24)",
        bgcolor: "rgba(238,243,205,0.055)",
        p: { xs: 2.8, sm: 3.2, md: 3.6 },
        minHeight: 260,
        boxShadow: "0 28px 90px rgba(0,0,0,0.22)",
        isolation: "isolate",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, rgba(242,100,51,0.16), rgba(238,243,205,0.045) 44%, rgba(7,66,37,0.42))",
          pointerEvents: "none",
          zIndex: -2,
        },
        "&::after": {
          content: '""',
          position: "absolute",
          inset: 0,
          backgroundImage: 'url("/images/brand-patterns/block.png")',
          backgroundPosition: "right -120px bottom -150px",
          backgroundRepeat: "no-repeat",
          backgroundSize: { xs: "420px auto", md: "520px auto" },
          opacity: 0.34,
          pointerEvents: "none",
          zIndex: -1,
        },
      }}
    >
      <Box
        component="img"
        src="/images/tt2.png"
        alt={ui.tickTitle}
        title={ui.tickTitle}
        loading="lazy"
        decoding="async"
        sx={{
          display: "block",
          width: { xs: 188, sm: 208, md: 230 },
          maxWidth: "82%",
          height: "auto",
          objectFit: "contain",
          objectPosition: "left center",
          filter: "drop-shadow(0 14px 26px rgba(0,0,0,0.28))",
        }}
      />
      <Typography
        sx={{
          mt: 2,
          maxWidth: 330,
          fontSize: { xs: 15, md: 16 },
          fontWeight: 700,
          lineHeight: 1.58,
          color: "rgba(238,243,205,0.76)",
        }}
      >
        {ui.tickLead}
      </Typography>

      <Box
        sx={{
          mt: 3,
          display: "flex",
          alignItems: "flex-start",
          gap: 1,
          color: "rgba(238,243,205,0.5)",
        }}
      >
        <MapPin size={15} strokeWidth={2.3} aria-hidden />
        <Typography sx={{ fontSize: 13, fontWeight: 600, lineHeight: 1.55 }}>
          {ui.tickMeta}
        </Typography>
      </Box>

      <Box
        component="a"
        href="https://tickandtalk.com/"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          mt: 4,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 1,
          px: 2.4,
          py: 1.35,
          borderRadius: "100px",
          bgcolor: "#F26433",
          color: "#ffffff",
          fontSize: 13.5,
          fontWeight: 850,
          textDecoration: "none",
          transition: "transform 0.22s ease, filter 0.22s ease",
          "&:hover": {
            transform: "translateY(-2px)",
            filter: "brightness(1.04)",
          },
        }}
      >
        {ui.tickVisit}
        <ArrowRight size={15} aria-hidden />
      </Box>
    </Box>
  );
}

export default function Footer({ locale = "en", onContactClick }) {
  const ui = UI[locale] || UI.en;
  const navCols = [
    {
      title: ui.platform,
      links: [
        {
          label: ui.links1[0],
          href: "https://app.speekr.ai/auth/sign-in/?returnTo=%2Fdashboard%2F",
        },
        { label: ui.links1[1], href: localizedPath("/blog", locale) },
        { label: ui.links1[2], href: "#pricing" },
        { label: ui.links1[3], href: "#case-studies" },
        { label: ui.links1[4], href: "#faq" },
      ],
    },
    {
      title: ui.company,
      links: [
        { label: ui.links2[0], isContact: true },
        { label: ui.links2[1], href: localizedPath("/privacy", locale) },
        { label: ui.links2[2], href: localizedPath("/terms", locale) },
      ],
    },
  ];

  return (
    <Box
      component="footer"
      id="site-footer"
      sx={{
        position: "relative",
        bgcolor: "#074225",
        color: "#EEF3CD",
        overflow: "hidden",
        borderTop: "1px solid rgba(238,243,205,0.08)",
      }}
    >
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "linear-gradient(180deg, rgba(7,66,37,0.2) 0%, rgba(3,32,18,0.86) 100%)",
          zIndex: 0,
        }}
      />
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          opacity: 0.03,
          backgroundImage: NOISE,
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px",
          zIndex: 0,
        }}
      />
      <Box
        component="img"
        src="/images/brand-patterns/line-pattern-wide.png"
        alt=""
        aria-hidden
        loading="lazy"
        decoding="async"
        sx={{
          position: "absolute",
          top: { xs: 18, md: -12 },
          right: { xs: "-52%", md: "-12%" },
          width: { xs: 680, md: 980 },
          maxWidth: "none",
          opacity: 0.42,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <Box
        component="img"
        src="/images/brand-patterns/block.png"
        alt=""
        aria-hidden
        loading="lazy"
        decoding="async"
        sx={{
          position: "absolute",
          left: { xs: "-66%", md: "-16%" },
          bottom: { xs: -220, md: -300 },
          width: { xs: 780, md: 1120 },
          maxWidth: "none",
          opacity: 0.26,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1240,
          mx: "auto",
          px: { xs: 2.5, sm: 4, md: 6, lg: 8 },
          pt: { xs: 8, md: 10 },
          pb: { xs: 3.5, md: 4 },
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "0.95fr 0.72fr 1fr" },
            gap: { xs: 5.5, md: 7, lg: 8 },
            alignItems: "start",
          }}
        >
          <Box sx={{ maxWidth: 460 }}>
            <Box
              component="img"
              src={LOGO}
              alt="Speekr"
              title="Speekr"
              loading="lazy"
              decoding="async"
              sx={{
                height: { xs: 56, sm: 64, md: 72 },
                width: "auto",
                objectFit: "contain",
                objectPosition: "left center",
                filter: "brightness(0) invert(1)",
              }}
            />
            <Typography
              sx={{
                mt: 4,
                fontSize: 10.5,
                fontWeight: 850,
                letterSpacing: 1.8,
                textTransform: "uppercase",
                color: "rgba(242,100,51,0.88)",
              }}
            >
              {ui.eyebrow}
            </Typography>
            <Typography
              component="p"
              sx={{
                mt: 1.2,
                mb: 0,
                maxWidth: 440,
                fontSize: { xs: 34, sm: 42, md: 48 },
                fontFamily: (theme) => theme.palette.brand.fontHeadline,
                fontWeight: 900,
                letterSpacing: 0,
                lineHeight: 0.98,
                color: "#EEF3CD",
              }}
            >
              {ui.headline}
            </Typography>
            <Typography
              sx={{
                mt: 2.2,
                maxWidth: 350,
                fontSize: 14.5,
                fontWeight: 550,
                lineHeight: 1.7,
                color: "rgba(238,243,205,0.52)",
              }}
            >
              {ui.brand}
            </Typography>

            <Box sx={{ mt: 3.5, display: "flex", gap: 1.1, flexWrap: "wrap" }}>
              {SOCIAL_ICONS.map((social) => (
                <SocialBtn key={social.label} {...social} />
              ))}
            </Box>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr 1fr",
                sm: "repeat(2, minmax(140px, 1fr))",
              },
              gap: { xs: 4, sm: 5 },
            }}
          >
            {navCols.map((col) => (
              <LinkColumn
                key={col.title}
                title={col.title}
                links={col.links}
                onContactClick={onContactClick}
              />
            ))}
          </Box>

          <TickTalkPanel ui={ui} />
        </Box>

        <Box
          sx={{
            mt: { xs: 6, md: 8 },
            pt: { xs: 3, md: 3.5 },
            borderTop: "1px solid rgba(238,243,205,0.09)",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "flex-start", sm: "center" },
            justifyContent: "space-between",
            gap: 2.2,
          }}
        >
          <Typography
            sx={{
              fontSize: 12,
              fontWeight: 650,
              color: "rgba(238,243,205,0.36)",
            }}
          >
            {ui.copyright}
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: 1.2, sm: 2.2 },
              flexWrap: "wrap",
            }}
          >
            {[
              { label: ui.links2[1], href: localizedPath("/privacy", locale) },
              { label: ui.links2[2], href: localizedPath("/terms", locale) },
            ].map(({ label, href }) => (
              <Box
                key={label}
                component="a"
                href={href}
                sx={{
                  fontSize: 12,
                  fontWeight: 650,
                  color: "rgba(238,243,205,0.36)",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                  "&:hover": { color: "#EEF3CD" },
                }}
              >
                {label}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
