import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Check, ArrowRight, Sparkles } from 'lucide-react'

const NOISE = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`

const lime = (a) => `rgba(201,245,104,${a})`
const orange = (a) => `rgba(255,107,47,${a})`

const INDIVIDUAL_FEATURES = [
  'AI roleplay across 100+ real-world scenarios',
  'Real-time coaching on tone, clarity & confidence',
  'Interview, pitch & presentation practice modes',
  'Skill-growth analytics after every session',
]

const BUSINESS_FEATURES = [
  'Team-wide training dashboards & manager views',
  'Custom AI scenarios built for your industry',
  'Bulk seat management with usage reporting',
  'Enterprise SSO, onboarding & dedicated support',
]

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
  const color = isLime ? '#c9f568' : '#ff6b2f'
  const ca = isLime ? lime : orange

  return (
    <Box
      sx={{
        position: 'relative',
        flex: '1 1 0',
        minWidth: 0,
        borderRadius: { xs: '20px', md: '24px' },
        border: `1px solid ${ca(0.18)}`,
        background: `linear-gradient(145deg, ${ca(0.04)} 0%, rgba(11,30,18,0.85) 60%, rgba(6,15,10,0.9) 100%)`,
        backdropFilter: 'blur(40px)',
        overflow: 'hidden',
        p: { xs: '36px 28px', sm: '44px 38px', md: '52px 46px' },
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Ambient corner glow — top right */}
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          top: '-20%',
          right: '-15%',
          width: '65%',
          height: '65%',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${ca(0.14)} 0%, transparent 70%)`,
          filter: 'blur(50px)',
          pointerEvents: 'none',
        }}
      />
      {/* Ambient glow — bottom left */}
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          bottom: '-15%',
          left: '-10%',
          width: '45%',
          height: '45%',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${ca(0.06)} 0%, transparent 70%)`,
          filter: 'blur(40px)',
          pointerEvents: 'none',
        }}
      />
      {/* Top shimmer line — card level */}
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          top: 0,
          left: '8%',
          right: '8%',
          height: '1px',
          background: `linear-gradient(90deg, transparent, ${ca(0.3)} 50%, transparent)`,
        }}
      />

      {/* Content */}
      <Box sx={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>

        {/* Audience badge */}
        <Box
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 0.8,
            px: 1.5,
            py: 0.6,
            mb: 3,
            borderRadius: '100px',
            border: `1px solid ${ca(0.22)}`,
            bgcolor: ca(0.07),
            alignSelf: 'flex-start',
          }}
        >
          <Typography
            sx={{
              fontSize: 10,
              fontWeight: 800,
              letterSpacing: 1.6,
              textTransform: 'uppercase',
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
            letterSpacing: { xs: -0.8, md: -1.4 },
            lineHeight: 1.0,
            color: 'rgba(247,255,232,0.96)',
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
            color: 'rgba(247,255,232,0.4)',
          }}
        >
          {tagline}
        </Typography>

        {/* Divider */}
        <Box
          sx={{
            height: '1px',
            mb: { xs: 3, md: 3.5 },
            background: `linear-gradient(90deg, ${ca(0.18)} 0%, transparent 70%)`,
          }}
        />

        {/* Quote / sub-headline */}
        <Typography
          sx={{
            m: 0,
            mb: { xs: 2.5, md: 3 },
            fontSize: { xs: 18, md: 22 },
            fontWeight: 800,
            letterSpacing: -0.4,
            lineHeight: 1.2,
            color: 'rgba(247,255,232,0.88)',
          }}
        >
          {quote}
        </Typography>

        {/* Feature list */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1.6,
            mb: { xs: 4, md: 5 },
            flex: 1,
          }}
        >
          {features.map((f) => (
            <Box key={f} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.4 }}>
              <Box
                sx={{
                  flexShrink: 0,
                  width: 18,
                  height: 18,
                  borderRadius: '50%',
                  bgcolor: ca(0.1),
                  border: `1px solid ${ca(0.24)}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mt: '2px',
                }}
              >
                <Check size={10} color={color} strokeWidth={2.5} aria-hidden />
              </Box>
              <Typography
                sx={{
                  fontSize: { xs: 13, md: 14 },
                  fontWeight: 500,
                  lineHeight: 1.55,
                  color: 'rgba(247,255,232,0.52)',
                }}
              >
                {f}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* CTAs */}
        <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap', alignItems: 'center' }}>
          <Box
            component="a"
            href={primaryHref}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
              px: { xs: 2.5, md: 3 },
              py: 1.5,
              borderRadius: '100px',
              bgcolor: color,
              color: '#0b1e12',
              fontSize: { xs: 13.5, md: 14 },
              fontWeight: 800,
              letterSpacing: -0.2,
              textDecoration: 'none',
              fontFamily: 'inherit',
              transition: 'transform 0.22s ease, box-shadow 0.22s ease, filter 0.22s ease',
              boxShadow: `0 0 22px ${ca(0.28)}`,
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: `0 8px 32px ${ca(0.44)}`,
                filter: 'brightness(1.07)',
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
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                px: { xs: 2.5, md: 3 },
                py: 1.5,
                borderRadius: '100px',
                border: `1.5px solid ${ca(0.22)}`,
                bgcolor: 'transparent',
                color: 'rgba(247,255,232,0.62)',
                fontSize: { xs: 13.5, md: 14 },
                fontWeight: 700,
                letterSpacing: -0.2,
                cursor: 'pointer',
                fontFamily: 'inherit',
                transition: 'background 0.22s ease, border-color 0.22s ease, color 0.22s ease',
                '&:hover': {
                  bgcolor: ca(0.07),
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
  )
}

export default function SplitCtaSection({ onDemoClick }) {
  return (
    <Box
      sx={{
        bgcolor: '#060f0a',
        px: { xs: '12px', sm: '18px', md: '24px' },
        py: { xs: 3, md: 4 },
      }}
    >
      <Box
        component="section"
        id="solutions"
        aria-labelledby="solutions-title"
        sx={{
          position: 'relative',
          bgcolor: '#0b1e12',
          borderRadius: { xs: '24px', md: '32px' },
          overflow: 'hidden',
          px: { xs: 2.5, sm: 4, md: 6, lg: 8 },
          pt: { xs: 8, md: 12 },
          pb: { xs: 8, md: 10 },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: '10%',
            right: '10%',
            height: '1px',
            background:
              'linear-gradient(90deg, transparent, rgba(201,245,104,0.3) 50%, transparent)',
          },
        }}
      >
        {/* Ambient orb — lime, center */}
        <Box
          aria-hidden
          sx={{
            position: 'absolute',
            top: '30%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '60vw',
            height: '60vw',
            maxWidth: 700,
            maxHeight: 700,
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(201,245,104,0.045) 0%, transparent 65%)',
            filter: 'blur(70px)',
            pointerEvents: 'none',
          }}
        />
        {/* Ambient orb — orange, top-left */}
        <Box
          aria-hidden
          sx={{
            position: 'absolute',
            top: '-10%',
            left: '-5%',
            width: '45vw',
            height: '45vw',
            maxWidth: 500,
            maxHeight: 500,
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(255,107,47,0.055) 0%, transparent 65%)',
            filter: 'blur(60px)',
            pointerEvents: 'none',
          }}
        />
        {/* Ambient orb — lime, bottom-right */}
        <Box
          aria-hidden
          sx={{
            position: 'absolute',
            bottom: '-8%',
            right: '-4%',
            width: '40vw',
            height: '40vw',
            maxWidth: 440,
            maxHeight: 440,
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(201,245,104,0.03) 0%, transparent 65%)',
            filter: 'blur(60px)',
            pointerEvents: 'none',
          }}
        />
        {/* Noise grain */}
        <Box
          aria-hidden
          sx={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            opacity: 0.018,
            backgroundImage: NOISE,
            backgroundRepeat: 'repeat',
            backgroundSize: '200px 200px',
          }}
        />

        <Box sx={{ position: 'relative', zIndex: 1, maxWidth: 1200, mx: 'auto' }}>

          {/* ── Heading ── */}
          <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 9 } }}>
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                px: 2,
                py: 0.75,
                mb: 3,
                borderRadius: '100px',
                border: '1px solid rgba(201,245,104,0.2)',
                bgcolor: 'rgba(201,245,104,0.06)',
              }}
            >
              <Sparkles size={12} color="#c9f568" aria-hidden />
              <Typography
                sx={{
                  fontSize: 11,
                  fontWeight: 800,
                  letterSpacing: 1.8,
                  textTransform: 'uppercase',
                  color: '#c9f568',
                }}
              >
                Powered by AI
              </Typography>
            </Box>

            <Typography
              id="solutions-title"
              component="h2"
              sx={{
                m: 0,
                fontSize: { xs: 38, sm: 50, md: 58, lg: 64 },
                fontWeight: 900,
                letterSpacing: { xs: -1.5, md: -2.5 },
                lineHeight: 1.0,
                color: 'rgba(247,255,232,0.96)',
              }}
            >
              <Box component="span" sx={{ color: '#c9f568' }}>
                Communication Skills
              </Box>
              <br />
              That Open Doors
            </Typography>

            <Typography
              sx={{
                mt: { xs: 2, md: 2.5 },
                fontSize: { xs: 14.5, md: 16 },
                fontWeight: 500,
                lineHeight: 1.65,
                color: 'rgba(247,255,232,0.38)',
                maxWidth: 520,
                mx: 'auto',
              }}
            >
              The simplest way professionals and organizations can improve soft skills with
              AI-driven communication training.
            </Typography>
          </Box>

          {/* ── Cards ── */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: { xs: 2.5, md: 3 },
            }}
          >
            <CtaCard
              isLime
              badge="For Individuals"
              title="Speekr for Individuals"
              tagline="Master important scenarios before they happen."
              quote="Ready to own the room?"
              features={INDIVIDUAL_FEATURES}
              primaryLabel="Start Free Trial"
              primaryHref="https://app.speekr.ai/auth/sign-up/"
            />
            <CtaCard
              badge="For Business"
              title="Speekr for Business"
              tagline="Communication translates directly into revenue."
              quote="Ready to win every conversation?"
              features={BUSINESS_FEATURES}
              primaryLabel="Start Free Trial"
              primaryHref="https://app.speekr.ai/auth/sign-up/"
              secondaryLabel="Book a Demo"
              onSecondaryClick={onDemoClick}
            />
          </Box>

        </Box>
      </Box>
    </Box>
  )
}
