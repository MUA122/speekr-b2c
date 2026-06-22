import { useEffect } from 'react'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { ArrowRight, Play } from 'lucide-react'

const STATS = [
  { value: '10K+', label: 'Active Users' },
  { value: '95%', label: 'Satisfaction Rate' },
  { value: '50+', label: 'AI Scenarios' },
]

export default function VideoShowcase() {
  useEffect(() => {
    const existing = document.querySelector('script[data-vimeo]')
    if (existing) return
    const s = document.createElement('script')
    s.src = 'https://player.vimeo.com/api/player.js'
    s.async = true
    s.setAttribute('data-vimeo', '1')
    document.body.appendChild(s)
  }, [])

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
        aria-labelledby="video-title"
        sx={{
          position: 'relative',
          bgcolor: '#0b1e12',
          borderRadius: { xs: '24px', md: '32px' },
          overflow: 'hidden',
          px: { xs: 2.5, sm: 4, md: 8, lg: 10 },
          py: { xs: 8, md: 12 },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: '10%',
            right: '10%',
            height: '1px',
            background:
              'linear-gradient(90deg, transparent, rgba(201,245,104,0.25) 50%, transparent)',
          },
        }}
      >
        {/* Ambient orb — lime top center */}
        <Box
          aria-hidden
          sx={{
            position: 'absolute',
            top: '-12%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '90vw',
            height: '90vw',
            maxWidth: 1000,
            maxHeight: 1000,
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(201,245,104,0.07) 0%, transparent 60%)',
            filter: 'blur(90px)',
            pointerEvents: 'none',
          }}
        />
        {/* Ambient orb — orange bottom right */}
        <Box
          aria-hidden
          sx={{
            position: 'absolute',
            bottom: '-8%',
            right: '-4%',
            width: '55vw',
            height: '55vw',
            maxWidth: 640,
            maxHeight: 640,
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(255,107,47,0.07) 0%, transparent 65%)',
            filter: 'blur(70px)',
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
            opacity: 0.02,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '200px 200px',
          }}
        />

        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            maxWidth: 1080,
            mx: 'auto',
          }}
        >
          {/* Badge */}
          <Stack direction="row" sx={{ justifyContent: 'center', mb: { xs: 3.5, md: 4.5 } }}>
            <Stack
              direction="row"
              spacing={1}
              sx={{
                alignItems: 'center',
                px: 2,
                py: 0.75,
                borderRadius: '100px',
                border: '1px solid rgba(201,245,104,0.18)',
                bgcolor: 'rgba(201,245,104,0.06)',
              }}
            >
              <Play size={12} color="#c9f568" fill="#c9f568" aria-hidden />
              <Typography
                sx={{
                  fontSize: 11,
                  fontWeight: 800,
                  letterSpacing: 1.8,
                  textTransform: 'uppercase',
                  color: '#c9f568',
                }}
              >
                See How It Works
              </Typography>
            </Stack>
          </Stack>

          {/* Heading */}
          <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 9 } }}>
            <Typography
              id="video-title"
              component="h2"
              sx={{
                m: 0,
                fontSize: { xs: 34, sm: 46, md: 58, lg: 66 },
                fontWeight: 900,
                letterSpacing: { xs: -1.5, md: -2.5 },
                lineHeight: 1.04,
                color: 'rgba(247,255,232,0.96)',
              }}
            >
              From Practice to Performance
            </Typography>
            <Typography
              component="p"
              sx={{
                m: 0,
                fontSize: { xs: 34, sm: 46, md: 58, lg: 66 },
                fontWeight: 900,
                letterSpacing: { xs: -1.5, md: -2.5 },
                lineHeight: 1.04,
                color: '#ff6b2f',
              }}
            >
              AI Practice Partner
            </Typography>
          </Box>

          {/* Video container */}
          <Box
            sx={{
              position: 'relative',
              borderRadius: { xs: '16px', md: '22px' },
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow:
                '0 0 0 1px rgba(201,245,104,0.05), 0 48px 120px rgba(0,0,0,0.55)',
              mb: { xs: 5, md: 7 },
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: '15%',
                right: '15%',
                height: '1px',
                background:
                  'linear-gradient(90deg, transparent, rgba(201,245,104,0.28) 50%, transparent)',
                zIndex: 1,
                pointerEvents: 'none',
              },
              /* Lime glow halo behind the video */
              '&::after': {
                content: '""',
                position: 'absolute',
                inset: -1,
                borderRadius: 'inherit',
                background: 'transparent',
                boxShadow: '0 0 60px 4px rgba(201,245,104,0.06)',
                pointerEvents: 'none',
                zIndex: 0,
              },
            }}
          >
            <Box sx={{ paddingTop: '56.25%', position: 'relative', zIndex: 1 }}>
              <Box
                component="iframe"
                src="https://player.vimeo.com/video/1146534594?h=2d5851ade0&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                title="How Does Speekr Work?"
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  display: 'block',
                }}
              />
            </Box>
          </Box>

          {/* Stat pills */}
          <Stack
            direction="row"
            spacing={{ xs: 1.5, md: 2.5 }}
            sx={{ justifyContent: 'center', flexWrap: 'wrap', gap: { xs: 1.5, md: 0 }, mb: { xs: 5, md: 7 } }}
          >
            {STATS.map(({ value, label }) => (
              <Box
                key={label}
                sx={{
                  px: { xs: 2.5, md: 3.5 },
                  py: { xs: 1.2, md: 1.5 },
                  borderRadius: '100px',
                  border: '1px solid rgba(255,255,255,0.07)',
                  bgcolor: 'rgba(255,255,255,0.03)',
                  backdropFilter: 'blur(24px)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.2,
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: 17, md: 20 },
                    fontWeight: 900,
                    letterSpacing: -0.5,
                    color: '#c9f568',
                    lineHeight: 1,
                  }}
                >
                  {value}
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: 12.5, md: 13.5 },
                    fontWeight: 500,
                    color: 'rgba(247,255,232,0.38)',
                    lineHeight: 1,
                  }}
                >
                  {label}
                </Typography>
              </Box>
            ))}
          </Stack>

          {/* CTA */}
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box
              component="a"
              href="https://app.speekr.ai/auth/sign-up/"
              target="_blank"
              rel="noreferrer"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                px: 4,
                py: '14px',
                borderRadius: '100px',
                background: 'linear-gradient(135deg, #c9f568 0%, #a5e02a 100%)',
                color: '#063323',
                fontSize: 15.5,
                fontWeight: 800,
                textDecoration: 'none',
                boxShadow:
                  '0 0 0 1px rgba(201,245,104,0.3), 0 16px 48px rgba(201,245,104,0.2)',
                transition:
                  'transform 0.22s cubic-bezier(0.4,0,0.2,1), box-shadow 0.22s ease',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow:
                    '0 0 0 1px rgba(201,245,104,0.48), 0 22px 64px rgba(201,245,104,0.32)',
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
  )
}
