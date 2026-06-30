import { useState, useEffect, useCallback } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { landingCopy } from '../utils/i18n'

const NOISE = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`

const SLIDES = [
  {
    id: 0,
    img: 'https://cdn.builder.io/api/v1/image/assets%2F7a4e07e52a2c4a8bb3890e0c17931328%2F8ca59d13297843bc9aaf1c20b69fd1ef',
    category: 'INTERVIEW & CAREER READINESS',
    imageTitle: 'Walk In Like\nYou Belong',
    title: 'Career Readiness Training for BUE Alumni with Speekr',
    stats: [
      { value: '700+', label: 'Interview rehearsal sessions completed' },
      { value: '85%', label: 'Reached interview-ready performance within 1–2 weeks' },
      { value: '9/10', label: 'Active students credit Speekr practice as a factor in landing their job' },
    ],
  },
  {
    id: 1,
    img: 'https://cdn.builder.io/api/v1/image/assets%2F7a4e07e52a2c4a8bb3890e0c17931328%2F728445addede4884b581494639915036',
    category: 'COMMUNICATION & PRESENTATION',
    imageTitle: 'Speak With\nAuthority',
    title: 'Presentation Skills Training, Powered by Speekr AI',
    stats: [
      { value: '95%', label: 'Measurable improvement from first to third practice session' },
      { value: '85%', label: 'Trainee return rate across programs' },
      { value: '8x', label: 'Training value delivered per employee' },
    ],
  },
]

export default function CaseStudiesCarousel({ locale = 'en' }) {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const copy = landingCopy[locale].cases
  const slides = SLIDES.map((slide, index) => ({
    ...slide,
    ...copy.slides[index],
    stats: copy.slides[index].stats.map(([value, label]) => ({ value, label })),
  }))

  const goTo = useCallback((idx) => {
    setActive(((idx % SLIDES.length) + SLIDES.length) % SLIDES.length)
  }, [])

  useEffect(() => {
    if (paused) return
    const t = setInterval(() => setActive((a) => (a + 1) % SLIDES.length), 5000)
    return () => clearInterval(t)
  }, [paused])

  return (
    <Box
      sx={{
        bgcolor: '#074225',
        px: 0,
        py: 0,
      }}
    >
      <Box
        component="section"
        id="case-studies"
        aria-labelledby="cases-title"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        sx={{
          position: 'relative',
          bgcolor: '#074225',
          borderRadius: 0,
          overflow: 'hidden',
          px: { xs: 2.5, sm: 4, md: 6, lg: 8 },
          pt: { xs: 5, md: 7 },
          pb: { xs: 8, md: 10 },
        }}
      >
        {/* Ambient orb — orange top center */}
        <Box
          component="img"
          src="/images/brand-patterns/block.png"
          alt="Speekr case studies background pattern"
          title="Speekr decorative case studies background pattern"
          aria-hidden
          loading="lazy"
          decoding="async"
          sx={{
            position: 'absolute',
            top: { xs: -120, md: -170 },
            left: { xs: -300, md: -260 },
            width: { xs: 760, md: 980 },
            maxWidth: 'none',
            opacity: 0.1,
            pointerEvents: 'none',
          }}
        />
        <Box
          aria-hidden
          sx={{
            position: 'absolute',
            top: '-14%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '80vw',
            height: '80vw',
            maxWidth: 900,
            maxHeight: 900,
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(242,100,51,0.07) 0%, transparent 60%)',
            filter: 'blur(80px)',
            pointerEvents: 'none',
          }}
        />
        {/* Ambient orb — lime bottom left */}
        <Box
          aria-hidden
          sx={{
            position: 'absolute',
            bottom: '-8%',
            left: '-4%',
            width: '50vw',
            height: '50vw',
            maxWidth: 580,
            maxHeight: 580,
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(242,100,51,0.055) 0%, transparent 65%)',
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
            backgroundImage: NOISE,
            backgroundRepeat: 'repeat',
            backgroundSize: '200px 200px',
          }}
        />

        <Box sx={{ position: 'relative', zIndex: 1, maxWidth: 1200, mx: 'auto' }}>

          {/* ── Heading ── */}
          <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 9 } }}>
            <Typography
              id="cases-title"
              component="h2"
              sx={{
                m: 0,
                fontSize: { xs: 38, sm: 50, md: 58, lg: 64 },
                fontFamily: (theme) => theme.palette.brand.fontHeadline,
                fontWeight: 900,
                letterSpacing: { xs: -1.5, md: -2.5 },
                lineHeight: 1,
                color: '#EEF3CD',
              }}
            >
              <Box component="span" sx={{ color: '#F26433' }}>{copy.titleAccent}</Box>{' '}{copy.title}
            </Typography>
            <Typography
              sx={{
                mt: { xs: 2, md: 2.5 },
                fontSize: { xs: 14.5, md: 16 },
                fontWeight: 500,
                lineHeight: 1.65,
                color: 'rgba(238,243,205,0.68)',
                maxWidth: 480,
                mx: 'auto',
              }}
            >
              {copy.subtitle}
            </Typography>
          </Box>

          {/* ── Slides — CSS grid-area overlap trick for natural height ── */}
          <Box sx={{ display: 'grid', mb: { xs: 3.5, md: 5 } }}>
            {slides.map((slide, i) => (
              <Box
                key={slide.id}
                aria-hidden={active !== i}
                sx={{
                  gridArea: '1 / 1',
                  opacity: active === i ? 1 : 0,
                  transform: active === i ? 'translateX(0)' : 'translateX(40px)',
                  transition: 'opacity 0.45s ease, transform 0.45s ease',
                  pointerEvents: active === i ? 'auto' : 'none',
                }}
              >
                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', md: '1.45fr 0.95fr' },
                    gap: { xs: 2, md: 3.5 },
                    alignItems: 'stretch',
                  }}
                >
                  {/* ── Image card ── */}
                  <Box
                    sx={{
                      position: 'relative',
                      minHeight: { xs: 360, md: 510 },
                      borderRadius: { xs: '16px', md: '20px' },
                      overflow: 'hidden',
                      bgcolor: '#111',
                    }}
                  >
                    <Box
                      component="img"
                      src={slide.img}
                      alt={slide.title}
                      title={slide.title}
                      loading="lazy"
                      decoding="async"
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                      }}
                    />
                    {/* Cinematic overlay */}
                    <Box
                      aria-hidden
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        background: [
                          'linear-gradient(90deg, rgba(0,0,0,0.86) 0%, rgba(0,0,0,0.44) 48%, rgba(0,0,0,0.1) 100%)',
                          'linear-gradient(0deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0) 58%)',
                        ].join(', '),
                      }}
                    />
                    {/* Subtle lime shimmer at top of image */}
                    <Box
                      aria-hidden
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '1px',
                        background:
                          'linear-gradient(90deg, transparent, rgba(242,100,51,0.22) 50%, transparent)',
                      }}
                    />

                    {/* Category + title overlay */}
                    <Box
                      sx={{
                        position: 'absolute',
                        left: { xs: 22, md: 34 },
                        bottom: { xs: 26, md: 34 },
                        zIndex: 2,
                      }}
                    >
                      <Typography
                        sx={{
                          m: 0,
                          mb: 1.4,
                          fontSize: 10,
                          fontWeight: 700,
                          letterSpacing: 1.8,
                          textTransform: 'uppercase',
                          color: 'rgba(238,243,205,0.58)',
                          lineHeight: 1,
                        }}
                      >
                        {slide.category}
                      </Typography>
                      <Typography
                        component="h3"
                        sx={{
                          m: 0,
                          fontSize: { xs: 34, md: 44, lg: 50 },
                          fontFamily: (theme) => theme.palette.brand.fontHeadline,
                          fontWeight: 900,
                          letterSpacing: { xs: -1.2, md: -1.8 },
                          lineHeight: 0.92,
                          color: '#EEF3CD',
                          whiteSpace: 'pre-line',
                        }}
                      >
                        {slide.imageTitle}
                      </Typography>
                    </Box>
                  </Box>

                  {/* ── Info card ── */}
                  <Box
                    sx={{
                      position: 'relative',
                      minHeight: { xs: 'auto', md: 510 },
                      borderRadius: { xs: '16px', md: '20px' },
                      p: { xs: '32px 24px', sm: '38px 32px', md: '44px 42px' },
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      border: '1px solid rgba(242,100,51,0.14)',
                      bgcolor: '#EEF3CD',
                      overflow: 'hidden',
                    }}
                  >
                    {/* Ambient corner glow */}
                    <Box
                      aria-hidden
                      sx={{
                        position: 'absolute',
                        top: '-20%',
                        right: '-15%',
                        width: '80%',
                        height: '80%',
                        borderRadius: '50%',
                        background:
                          'radial-gradient(circle, rgba(242,100,51,0.1) 0%, transparent 70%)',
                        filter: 'blur(40px)',
                        pointerEvents: 'none',
                      }}
                    />

                    {/* Title */}
                    <Typography
                      component="p"
                      sx={{
                        m: 0,
                        mb: { xs: 3.5, md: 4.5 },
                        fontSize: { xs: 21, sm: 24, md: 28, lg: 32 },
                        fontWeight: 900,
                        letterSpacing: { xs: -0.5, md: -0.9 },
                        lineHeight: 1.1,
                        color: '#074225',
                        position: 'relative',
                        zIndex: 1,
                      }}
                    >
                      {slide.title}
                    </Typography>

                    {/* Stats */}
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: { xs: 3, md: 3.5 },
                        position: 'relative',
                        zIndex: 1,
                      }}
                    >
                      {slide.stats.map(({ value, label }) => (
                        <Box
                          key={value}
                          sx={{
                            display: 'grid',
                            gridTemplateColumns: { xs: '88px 1fr', md: '108px 1fr' },
                            alignItems: 'center',
                            gap: { xs: 2, md: 3 },
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: { xs: 44, md: 54 },
                              fontFamily: (theme) => theme.palette.brand.fontHeadline,
                              fontWeight: 900,
                              letterSpacing: -2,
                              lineHeight: 0.9,
                              color: '#F26433',
                              whiteSpace: 'nowrap',
                            }}
                          >
                            {value}
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: { xs: 13, md: 14.5 },
                              fontWeight: 600,
                              lineHeight: 1.5,
                              color: 'rgba(7,66,37,0.56)',
                            }}
                          >
                            {label}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>

          {/* ── Navigation ── */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            {/* Arrow buttons */}
            <Box sx={{ display: 'flex', gap: 1.2 }}>
              {[
                { fn: () => goTo(active - 1), Icon: ChevronLeft, label: 'Previous case study' },
                { fn: () => goTo(active + 1), Icon: ChevronRight, label: 'Next case study' },
              ].map(({ fn, Icon, label }) => (
                <Box
                  key={label}
                  component="button"
                  type="button"
                  onClick={fn}
                  aria-label={label}
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    border: '1.5px solid rgba(242,100,51,0.25)',
                    bgcolor: 'rgba(242,100,51,0.07)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                    transition: 'background 0.2s ease, border-color 0.2s ease, transform 0.2s ease',
                    '&:hover': {
                      bgcolor: 'rgba(242,100,51,0.18)',
                      borderColor: 'rgba(242,100,51,0.5)',
                      transform: 'scale(1.08)',
                    },
                  }}
                >
                  <Icon size={17} color="#F26433" aria-hidden />
                </Box>
              ))}
            </Box>

            {/* Expanding pill dots */}
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
              {slides.map((_, i) => (
                <Box
                  key={i}
                  component="button"
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Go to case study ${i + 1}`}
                  sx={{
                    width: i === active ? 28 : 8,
                    height: 8,
                    borderRadius: '100px',
                    bgcolor: i === active ? '#F26433' : 'rgba(7,66,37,0.16)',
                    border: 'none',
                    cursor: 'pointer',
                    p: 0,
                    transition: 'width 0.35s cubic-bezier(0.4,0,0.2,1), background-color 0.3s ease',
                    boxShadow: i === active ? '0 0 8px rgba(242,100,51,0.5)' : 'none',
                  }}
                />
              ))}
            </Box>
          </Box>

        </Box>
      </Box>
    </Box>
  )
}
