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
          bgcolor: `${color}18`,
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
          color: 'rgba(247, 255, 232, 0.4)',
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
        width: { md: 420, lg: 460, xl: 500 },
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
            'radial-gradient(circle, rgba(201, 245, 104, 0.18) 0%, transparent 65%)',
          filter: 'blur(48px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Card */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          background: 'rgba(255, 255, 255, 0.04)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '24px',
          backdropFilter: 'blur(24px)',
          p: 3,
          boxShadow:
            '0 40px 100px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.07)',
        }}
      >
        {/* Card header */}
        <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center', mb: 3 }}>
          <Box
            sx={{
              width: 40,
              height: 40,
              borderRadius: '50%',
              bgcolor: 'rgba(201, 245, 104, 0.12)',
              border: '1px solid rgba(201, 245, 104, 0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <Mic size={18} color="#c9f568" aria-hidden />
          </Box>
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography
              sx={{
                color: 'rgba(247, 255, 232, 0.95)',
                fontWeight: 700,
                fontSize: 14,
                lineHeight: 1.3,
              }}
            >
              AI Coach Session
            </Typography>
            <Typography
              sx={{ color: 'rgba(247, 255, 232, 0.4)', fontSize: 12, mt: 0.2 }}
            >
              Sales pitch — 4:23 min
            </Typography>
          </Box>
          <Box
            sx={{
              px: 1.3,
              py: 0.45,
              borderRadius: '100px',
              bgcolor: 'rgba(201, 245, 104, 0.12)',
              border: '1px solid rgba(201, 245, 104, 0.28)',
            }}
          >
            <Typography
              sx={{
                fontSize: 10.5,
                fontWeight: 800,
                letterSpacing: 0.8,
                color: '#c9f568',
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
                    ? 'rgba(201, 245, 104, 0.85)'
                    : 'rgba(201, 245, 104, 0.22)',
                animationDelay: `${i * 0.075}s`,
              }}
            />
          ))}
        </Stack>

        {/* Metric rings */}
        <Stack direction="row" spacing={2.5} sx={{ justifyContent: 'center', mb: 3 }}>
          <MetricRing value={92} label="Clarity" color="#c9f568" />
          <MetricRing value={88} label="Pace" color="#ff6b2f" />
          <MetricRing value={95} label="Confidence" color="#5ba3d9" />
        </Stack>

        {/* AI feedback */}
        <Box
          sx={{
            p: 2,
            borderRadius: '14px',
            bgcolor: 'rgba(255, 255, 255, 0.035)',
            border: '1px solid rgba(255, 255, 255, 0.07)',
          }}
        >
          <Stack direction="row" spacing={1.2} sx={{ alignItems: 'flex-start' }}>
            <Box
              sx={{
                width: 24,
                height: 24,
                borderRadius: '50%',
                bgcolor: 'rgba(201, 245, 104, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                mt: 0.15,
              }}
            >
              <Zap size={13} color="#c9f568" aria-hidden />
            </Box>
            <Typography
              sx={{
                fontSize: 13,
                color: 'rgba(247, 255, 232, 0.7)',
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
          background: 'rgba(4, 14, 9, 0.88)',
          border: '1px solid rgba(255, 107, 47, 0.3)',
          borderRadius: '14px',
          backdropFilter: 'blur(20px)',
          px: 2,
          py: 1.2,
          boxShadow: '0 12px 32px rgba(0, 0, 0, 0.5)',
        }}
      >
        <Stack direction="row" spacing={0.9} sx={{ alignItems: 'center' }}>
          <TrendingUp size={16} color="#ff6b2f" aria-hidden />
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
          background: 'rgba(4, 14, 9, 0.88)',
          border: '1px solid rgba(201, 245, 104, 0.18)',
          borderRadius: '12px',
          backdropFilter: 'blur(20px)',
          px: 1.8,
          py: 1,
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
        }}
      >
        <Stack direction="row" spacing={0.8} sx={{ alignItems: 'center' }}>
          <Users size={14} color="#c9f568" aria-hidden />
          <Typography sx={{ fontSize: 12, fontWeight: 700, color: 'rgba(247, 255, 232, 0.9)' }}>
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
        bgcolor: '#060f0a',
      }}
    >
      {/* Ambient orb — lime, top-left */}
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          top: '-18%',
          left: '-12%',
          width: '70vw',
          height: '70vw',
          maxWidth: 900,
          maxHeight: 900,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(201, 245, 104, 0.2) 0%, rgba(0, 69, 47, 0.14) 42%, transparent 70%)',
          filter: 'blur(90px)',
          pointerEvents: 'none',
          zIndex: 0,
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
            'radial-gradient(circle, rgba(255, 107, 47, 0.16) 0%, rgba(255, 107, 47, 0.05) 42%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
          zIndex: 0,
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
            'radial-gradient(circle, rgba(0, 69, 47, 0.45) 0%, transparent 70%)',
          filter: 'blur(64px)',
          pointerEvents: 'none',
          zIndex: 0,
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
            'linear-gradient(rgba(201, 245, 104, 0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(201, 245, 104, 0.09) 1px, transparent 1px)',
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

      <Container
        maxWidth="xl"
        sx={{
          position: 'relative',
          zIndex: 1,
          minHeight: '100svh',
          display: 'flex',
          alignItems: 'center',
          px: { xs: 2.5, sm: 4, lg: 5 },
          pt: { xs: 14, md: 12 },
          pb: { xs: 8, md: 10 },
        }}
      >
        <Stack
          direction={{ xs: 'column', lg: 'row' }}
          sx={{
            width: '100%',
            alignItems: { xs: 'flex-start', lg: 'center' },
            justifyContent: { lg: 'space-between' },
            gap: { xs: 8, lg: 6, xl: 8 },
          }}
        >
          {/* Left: text */}
          <Box sx={{ maxWidth: { xs: '100%', lg: 640, xl: 680 } }}>

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
                border: '1px solid rgba(201, 245, 104, 0.22)',
                bgcolor: 'rgba(201, 245, 104, 0.06)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <Box
                sx={{
                  width: 7,
                  height: 7,
                  borderRadius: '50%',
                  bgcolor: '#c9f568',
                  flexShrink: 0,
                  boxShadow: '0 0 8px rgba(201, 245, 104, 0.9)',
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
                  color: 'rgba(201, 245, 104, 0.88)',
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
                fontSize: { xs: 50, sm: 70, md: 86, lg: 94, xl: 104 },
                lineHeight: { xs: 1.06, md: 1.02 },
                fontWeight: 900,
                letterSpacing: { xs: -1.5, md: -2.5 },
                color: 'rgba(247, 255, 232, 0.96)',
              }}
            >
              <Box component="span" sx={{ display: 'block' }}>
                Train With AI.
              </Box>
              <Box
                component="span"
                sx={{
                  display: 'block',
                  background:
                    'linear-gradient(130deg, #c9f568 0%, #8de030 42%, #ff6b2f 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Speak With
              </Box>
              <Box component="span" sx={{ display: 'block' }}>
                Confidence.
              </Box>
            </Typography>

            {/* Subtitle */}
            <Typography
              sx={{
                mt: { xs: 3, md: 3.8 },
                maxWidth: 500,
                color: 'rgba(247, 255, 232, 0.5)',
                fontSize: { xs: 16.5, md: 18.5 },
                lineHeight: 1.78,
                fontWeight: 400,
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
                  background: 'linear-gradient(135deg, #c9f568 0%, #a5e02a 100%)',
                  color: '#063323',
                  border: 'none',
                  boxShadow:
                    '0 0 0 1px rgba(201, 245, 104, 0.28), 0 20px 55px rgba(201, 245, 104, 0.22)',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #d9ff7a 0%, #bdf040 100%)',
                    boxShadow:
                      '0 0 0 1px rgba(201, 245, 104, 0.48), 0 24px 64px rgba(201, 245, 104, 0.34)',
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
                  color: 'rgba(247, 255, 232, 0.82)',
                  border: '1px solid rgba(255, 255, 255, 0.13)',
                  bgcolor: 'rgba(255, 255, 255, 0.045)',
                  backdropFilter: 'blur(14px)',
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.08)',
                    borderColor: 'rgba(255, 255, 255, 0.22)',
                    color: 'rgba(247, 255, 232, 0.96)',
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
                      border: '2px solid #060f0a',
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
                    <Star key={i} size={12} fill="#ff6b2f" color="#ff6b2f" aria-hidden />
                  ))}
                </Stack>
                <Typography sx={{ fontSize: 12.5, color: 'rgba(247, 255, 232, 0.45)' }}>
                  Trusted by{' '}
                  <Box
                    component="span"
                    sx={{ color: 'rgba(247, 255, 232, 0.82)', fontWeight: 700 }}
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
          background: 'linear-gradient(to top, rgba(6, 15, 10, 0.9), transparent)',
          pointerEvents: 'none',
          zIndex: 2,
        }}
      />
    </Box>
  )
}

export default Hero
