import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { ArrowRight, CalendarDays, Mic, Star, TrendingUp, Users, Zap } from 'lucide-react'

const AVATARS = [
  { bg: '#3d8f62', initials: 'MK' },
  { bg: '#c0762a', initials: 'SR' },
  { bg: '#5461a8', initials: 'AL' },
  { bg: '#9b4db0', initials: 'JP' },
]

const WAVEFORM_HEIGHTS = [18, 30, 24, 42, 36, 48, 28, 44, 22, 40, 46, 20, 36, 26, 44, 32, 18, 38, 48, 22]

function MetricRing({ value, label, color }) {
  return (
    <Stack sx={{ alignItems: 'center', gap: 0.6 }}>
      <Box
        sx={{
          width: 54,
          height: 54,
          borderRadius: '50%',
          border: `2.5px solid ${color}`,
          bgcolor: `${color}14`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color,
          fontWeight: 800,
          fontSize: 14,
          letterSpacing: -0.5,
        }}
      >
        {value}
      </Box>
      <Typography
        sx={{
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: 0.8,
          textTransform: 'uppercase',
          color: 'rgba(0, 66, 37, 0.52)',
        }}
      >
        {label}
      </Typography>
    </Stack>
  )
}

function ProductPreview() {
  return (
    <Box
      sx={{
        position: 'relative',
        width: { md: 420, lg: 470, xl: 520 },
        flexShrink: 0,
      }}
    >
      {/* Glow behind card */}
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '110%',
          height: '110%',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(255, 118, 0, 0.32) 0%, rgba(247,249,232,0.08) 38%, transparent 68%)',
          filter: 'blur(56px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Card */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          background:
            'linear-gradient(145deg, rgba(0,66,37,0.96) 0%, rgba(0,52,30,0.98) 52%, rgba(7,27,17,1) 100%)',
          border: '1px solid rgba(255, 118, 0, 0.18)',
          borderRadius: '28px',
          p: { lg: 3.5, xl: 4 },
          boxShadow:
            '0 44px 120px rgba(0, 66, 37, 0.28), 0 0 0 1px rgba(255,118,0,0.12)',
          transform: 'rotate(-1deg)',
        }}
      >
        {/* Card header */}
        <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center', mb: 3 }}>
          <Box
            sx={{
              width: 40,
              height: 40,
              borderRadius: '50%',
              bgcolor: 'rgba(255, 118, 0, 0.10)',
              border: '1px solid rgba(255, 118, 0, 0.24)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <Mic size={18} color="#FF7600" aria-hidden />
          </Box>
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography
              sx={{
                color: '#F7F9E8',
                fontWeight: 700,
                fontSize: 14,
                lineHeight: 1.3,
              }}
            >
              AI Coach Session
            </Typography>
            <Typography
              sx={{ color: 'rgba(247, 249, 232, 0.5)', fontSize: 12, mt: 0.2 }}
            >
              Sales pitch — 4:23 min
            </Typography>
          </Box>
          <Box
            sx={{
              px: 1.3,
              py: 0.45,
              borderRadius: '100px',
              bgcolor: 'rgba(255, 118, 0, 0.10)',
              border: '1px solid rgba(255, 118, 0, 0.28)',
            }}
          >
            <Typography
              sx={{
                fontSize: 10.5,
                fontWeight: 800,
                letterSpacing: 0.8,
                color: '#FF7600',
              }}
            >
              LIVE
            </Typography>
          </Box>
        </Stack>

        {/* Waveform */}
        <Stack
          direction="row"
          spacing={0.5}
          sx={{ alignItems: 'flex-end', height: 52, justifyContent: 'center', mb: 3 }}
        >
          {WAVEFORM_HEIGHTS.map((h, i) => (
            <Box
              key={i}
              className="audio-bar"
              sx={{
                width: 4,
                borderRadius: '100px',
                height: `${h}px`,
                bgcolor:
                  i < 13
                    ? 'rgba(255, 118, 0, 0.88)'
                    : 'rgba(255, 118, 0, 0.22)',
                animationDelay: `${i * 0.075}s`,
              }}
            />
          ))}
        </Stack>

        {/* Metric rings */}
        <Stack direction="row" spacing={2.5} sx={{ justifyContent: 'center', mb: 3 }}>
          <MetricRing value={92} label="Clarity" color="#FF7600" />
          <MetricRing value={88} label="Pace" color="#FF7600" />
          <MetricRing value={95} label="Confidence" color="#5ba3d9" />
        </Stack>

        {/* AI feedback */}
        <Box
          sx={{
            p: 2,
            borderRadius: '14px',
            bgcolor: 'rgba(247, 249, 232, 0.07)',
            border: '1px solid rgba(247, 249, 232, 0.12)',
          }}
        >
          <Stack direction="row" spacing={1.2} sx={{ alignItems: 'flex-start' }}>
            <Box
              sx={{
                width: 24,
                height: 24,
                borderRadius: '50%',
                bgcolor: 'rgba(255, 118, 0, 0.14)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                mt: 0.15,
              }}
            >
              <Zap size={13} color="#FF7600" aria-hidden />
            </Box>
            <Typography
              sx={{
                fontSize: 13,
                color: 'rgba(247, 249, 232, 0.72)',
                lineHeight: 1.65,
              }}
            >
              Strong opening hook. Try pausing after your value proposition — let it land before you move on.
            </Typography>
          </Stack>
        </Box>
      </Box>

      {/* Floating badge: improvement */}
      <Box
        sx={{
          position: 'absolute',
          bottom: -18,
          right: -18,
          zIndex: 2,
          background: '#071B11',
          border: '1px solid rgba(255, 118, 0, 0.3)',
          borderRadius: '14px',
          backdropFilter: 'blur(20px)',
          px: 2,
          py: 1.2,
          boxShadow: '0 12px 32px rgba(0, 0, 0, 0.5)',
        }}
      >
        <Stack direction="row" spacing={0.9} sx={{ alignItems: 'center' }}>
          <TrendingUp size={16} color="#FF7600" aria-hidden />
          <Typography sx={{ fontSize: 13, fontWeight: 700, color: '#ff8f5f' }}>
            +34% in 2 weeks
          </Typography>
        </Stack>
      </Box>

      {/* Floating badge: users */}
      <Box
        sx={{
          position: 'absolute',
          top: -14,
          left: -14,
          zIndex: 2,
          background: '#071B11',
          border: '1px solid rgba(255, 118, 0, 0.12)',
          borderRadius: '12px',
          backdropFilter: 'blur(20px)',
          px: 1.8,
          py: 1,
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
        }}
      >
        <Stack direction="row" spacing={0.8} sx={{ alignItems: 'center' }}>
          <Users size={14} color="#FF7600" aria-hidden />
          <Typography sx={{ fontSize: 12, fontWeight: 700, color: 'rgba(247, 249, 232, 0.9)' }}>
            12,000+ users
          </Typography>
        </Stack>
      </Box>
    </Box>
  )
}

function Hero({ onBookDemoClick }) {
  return (
    <Box
      component="section"
      aria-labelledby="hero-title"
      sx={{
        position: 'relative',
        minHeight: '100svh',
        overflow: 'hidden',
        bgcolor: '#F7F9E8',
        background:
          'radial-gradient(circle at 82% 18%, rgba(255,118,0,0.14) 0%, transparent 28%), radial-gradient(circle at 12% 82%, rgba(0,66,37,0.12) 0%, transparent 34%), linear-gradient(135deg, #F7F9E8 0%, #F7F9E8 56%, rgba(0,66,37,0.08) 100%)',
      }}
    >
      {/* Ambient orb — lime, top-left */}
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          top: '-24%',
          left: '-14%',
          width: '70vw',
          height: '70vw',
          maxWidth: 900,
          maxHeight: 900,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(255, 118, 0, 0.14) 0%, rgba(0, 66, 37, 0.08) 44%, transparent 70%)',
          filter: 'blur(90px)',
          pointerEvents: 'none',
          zIndex: 0,
          animation: 'premiumFloat 12s ease-in-out infinite',
        }}
      />

      {/* Ambient orb — orange, bottom-right */}
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          bottom: '-16%',
          right: '-8%',
          width: '58vw',
          height: '58vw',
          maxWidth: 760,
          maxHeight: 760,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(255, 118, 0, 0.16) 0%, rgba(255, 118, 0, 0.05) 42%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
          zIndex: 0,
          animation: 'premiumFloat 14s ease-in-out infinite reverse',
        }}
      />

      {/* Ambient orb — mid-depth green */}
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          top: '35%',
          right: '22%',
          width: '32vw',
          height: '32vw',
          maxWidth: 440,
          maxHeight: 440,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(0, 66, 37, 0.18) 0%, transparent 70%)',
          filter: 'blur(64px)',
          pointerEvents: 'none',
          zIndex: 0,
          animation: 'premiumGlow 9s ease-in-out infinite',
        }}
      />

      {/* Subtle grid */}
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
          backgroundImage:
            'linear-gradient(rgba(0, 66, 37, 0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 66, 37, 0.055) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          maskImage:
            'radial-gradient(ellipse 75% 75% at 18% 28%, rgba(0,0,0,0.7) 0%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 75% 75% at 18% 28%, rgba(0,0,0,0.7) 0%, transparent 100%)',
          opacity: 0.7,
        }}
      />

      {/* Noise grain */}
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
          opacity: 0.022,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px',
        }}
      />

      <Box
        component="img"
        src="/images/brand-patterns/hero-bg.png"
        alt=""
        aria-hidden
        sx={{
          position: 'absolute',
          right: { xs: '-42%', md: '-12%', xl: '-4%' },
          top: { xs: '20%', md: '8%' },
          width: { xs: 760, md: 980, xl: 1120 },
          maxWidth: 'none',
          opacity: { xs: 0.16, md: 0.26 },
          mixBlendMode: 'multiply',
          pointerEvents: 'none',
          zIndex: 0,
          animation: 'premiumGlow 10s ease-in-out infinite',
        }}
      />

      <Container
        maxWidth="xl"
        sx={{
          position: 'relative',
          zIndex: 1,
          minHeight: '100svh',
          display: 'flex',
          alignItems: 'center',
          px: { xs: 2.5, sm: 4, lg: 5 },
          pt: { xs: 13, md: 12 },
          pb: { xs: 7, md: 9 },
        }}
      >
        <Stack
          direction={{ xs: 'column', lg: 'row' }}
          sx={{
            width: '100%',
            alignItems: { xs: 'flex-start', lg: 'center' },
            justifyContent: { lg: 'space-between' },
            gap: { xs: 7, lg: 7, xl: 9 },
          }}
        >
          {/* Left: text */}
          <Box sx={{ maxWidth: { xs: '100%', lg: 640, xl: 700 } }}>

            {/* Announcement badge */}
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                px: 1.6,
                py: 0.8,
                mb: 3.5,
                borderRadius: '100px',
                border: '1px solid rgba(255, 118, 0, 0.35)',
                bgcolor: 'rgba(255, 118, 0, 0.12)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <Box
                sx={{
                  width: 7,
                  height: 7,
                  borderRadius: '50%',
                  bgcolor: '#FF7600',
                  flexShrink: 0,
                  boxShadow: '0 0 8px rgba(255, 118, 0, 0.45)',
                  '@keyframes heroPulseDot': {
                    '0%, 100%': { opacity: 1, transform: 'scale(1)' },
                    '50%': { opacity: 0.5, transform: 'scale(0.75)' },
                  },
                  animation: 'heroPulseDot 2.2s ease-in-out infinite',
                }}
              />
              <Typography
                sx={{
                  fontSize: 12.5,
                  fontWeight: 700,
                  letterSpacing: 0.4,
                  color: '#004225',
                }}
              >
                AI-Powered Speech Coaching — 2026
              </Typography>
            </Box>

            {/* Headline */}
            <Typography
              id="hero-title"
              component="h1"
              sx={{
                m: 0,
                fontSize: { xs: 48, sm: 64, md: 76, lg: 82, xl: 90 },
                lineHeight: { xs: 1.04, md: 0.98 },
                fontWeight: 900,
                letterSpacing: { xs: -1.4, md: -2.8 },
                color: '#004225',
                maxWidth: 760,
              }}
            >
              <Box component="span" sx={{ display: 'block' }}>
                Practice hard conversations.
              </Box>
              <Box
                component="span"
                sx={{
                  display: 'block',
                  color: '#FF7600',
                }}
              >
                Speak with authority.
              </Box>
            </Typography>

            {/* Subtitle */}
            <Typography
              sx={{
                mt: { xs: 3, md: 3.8 },
                maxWidth: 560,
                color: 'rgba(0, 66, 37, 0.64)',
                fontSize: { xs: 16, md: 18 },
                lineHeight: 1.72,
                fontWeight: 500,
              }}
            >
              Practice real business scenarios with AI roleplay, get instant feedback, and
              level up with expert coaching built for ambitious professionals.
            </Typography>

            {/* CTAs */}
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={1.5}
              sx={{
                mt: { xs: 4, md: 5 },
                alignItems: { xs: 'stretch', sm: 'center' },
              }}
            >
              <Button
                component="a"
                href="https://app.speekr.ai"
                endIcon={<ArrowRight size={17} aria-hidden />}
                sx={{
                  minHeight: 56,
                  px: 3.5,
                  borderRadius: '14px',
                  fontSize: 15,
                  fontWeight: 700,
                  background: 'linear-gradient(135deg, #FF7600 0%, #FF9A3D 100%)',
                  color: '#00331d',
                  border: 'none',
                  boxShadow:
                    '0 0 0 1px rgba(255, 118, 0, 0.28), 0 20px 55px rgba(255, 118, 0, 0.24)',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #FF8A1F 0%, #FF7600 100%)',
                    boxShadow:
                      '0 0 0 1px rgba(255, 118, 0, 0.42), 0 24px 64px rgba(255, 118, 0, 0.32)',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 220ms cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                Start Free Trial
              </Button>

              <Button
                type="button"
                onClick={onBookDemoClick}
                endIcon={<CalendarDays size={16} aria-hidden />}
                sx={{
                  minHeight: 56,
                  px: 3.5,
                  borderRadius: '14px',
                  fontSize: 15,
                  fontWeight: 700,
                  color: '#004225',
                  border: '1px solid rgba(0, 66, 37, 0.18)',
                  bgcolor: 'rgba(0, 66, 37, 0.04)',
                  backdropFilter: 'blur(14px)',
                  '&:hover': {
                    bgcolor: 'rgba(0, 66, 37, 0.08)',
                    borderColor: 'rgba(0, 66, 37, 0.32)',
                    color: '#004225',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 220ms cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                Book a Demo
              </Button>
            </Stack>

            {/* Social proof */}
            <Stack direction="row" spacing={2} sx={{ mt: 4.5, alignItems: 'center' }}>
              {/* Avatar stack */}
              <Stack direction="row" sx={{ position: 'relative' }}>
                {AVATARS.map((a, i) => (
                  <Box
                    key={i}
                    aria-hidden
                    sx={{
                      width: 34,
                      height: 34,
                      borderRadius: '50%',
                      bgcolor: a.bg,
                      border: '2px solid #F7F9E8',
                      ml: i > 0 ? -1.3 : 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 10.5,
                      fontWeight: 800,
                      color: '#fff',
                      zIndex: AVATARS.length - i,
                      flexShrink: 0,
                    }}
                  >
                    {a.initials}
                  </Box>
                ))}
              </Stack>
              <Box>
                <Stack direction="row" spacing={0.3} sx={{ mb: 0.4 }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} fill="#FF7600" color="#FF7600" aria-hidden />
                  ))}
                </Stack>
                <Typography sx={{ fontSize: 12.5, color: 'rgba(0, 66, 37, 0.55)' }}>
                  Trusted by{' '}
                  <Box
                    component="span"
                    sx={{ color: '#004225', fontWeight: 700 }}
                  >
                    12,000+ professionals
                  </Box>
                </Typography>
              </Box>
            </Stack>
          </Box>

          {/* Right: product preview (desktop only) */}
          <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
            <ProductPreview />
          </Box>
        </Stack>
      </Container>

      {/* Bottom fade */}
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 140,
          background: 'linear-gradient(to top, #F7F9E8, transparent)',
          pointerEvents: 'none',
          zIndex: 2,
        }}
      />
    </Box>
  )
}

export default Hero
