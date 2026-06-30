import { useState, useEffect, useRef } from 'react'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { ChevronLeft, ChevronRight, Volume2, VolumeX, Play, X, Maximize2 } from 'lucide-react'
import { landingCopy } from '../utils/i18n'

const N = 3

const SLIDES = [
  {
    id: 0,
    src: 'https://player.vimeo.com/video/1161066828?h=f77e9e12f8&badge=0&autopause=0&player_id=0&app_id=58479',
    name: 'Riyadh',
    location: 'KSA',
  },
  {
    id: 1,
    src: 'https://player.vimeo.com/video/1161781544?h=2ebfe1992c&badge=0&autopause=0&player_id=0&app_id=58479',
    name: 'Riyadh',
    location: 'KSA',
  },
  {
    id: 2,
    src: 'https://player.vimeo.com/video/1158406697?badge=0&autopause=0&player_id=0&app_id=58479',
    name: 'Riyadh',
    location: 'KSA',
  },
]

const NOISE = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`

/* ─── Lightbox ─────────────────────────────────────────── */
function Lightbox({ slide, onClose, copy }) {
  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <Box
      onClick={onClose}
      sx={{
        position: 'fixed', inset: 0, zIndex: 9999,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        bgcolor: 'rgba(0,0,0,0.9)',
        backdropFilter: { xs: 'none', md: 'blur(20px)' },
        WebkitBackdropFilter: { xs: 'none', md: 'blur(20px)' },
        '@keyframes lbBack': { from: { opacity: 0 }, to: { opacity: 1 } },
        animation: { xs: 'none', md: 'lbBack 0.22s ease' },
      }}
    >
      <Box
        onClick={e => e.stopPropagation()}
        sx={{
          position: 'relative',
          width: { xs: '95vw', sm: '88vw', md: '76vw', lg: '66vw' },
          maxWidth: 1080,
          borderRadius: { xs: '16px', md: '22px' },
          overflow: 'hidden',
          border: '1px solid rgba(242,100,51,0.14)',
          boxShadow: '0 0 0 1px rgba(242,100,51,0.05), 0 56px 140px rgba(0,0,0,0.95)',
          bgcolor: '#074225',
          '@keyframes lbUp': {
            from: { opacity: 0, transform: 'translateY(28px) scale(0.96)' },
            to: { opacity: 1, transform: 'translateY(0) scale(1)' },
          },
          animation: { xs: 'none', md: 'lbUp 0.32s cubic-bezier(0.4,0,0.2,1)' },
        }}
      >
        {/* Top shimmer */}
        <Box aria-hidden sx={{
          position: 'absolute', top: 0, left: '20%', right: '20%', height: '1px', zIndex: 1,
          background: 'linear-gradient(90deg, transparent, rgba(242,100,51,0.3) 50%, transparent)',
          pointerEvents: 'none',
        }} />

        {/* Video */}
        <Box sx={{ position: 'relative', pt: '56.25%' }}>
          <Box
            component="iframe"
            src={`${slide.src}&autoplay=1`}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            title={`${slide.name} - Speekr testimonial`}
            loading="lazy"
            sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'block' }}
          />
        </Box>

        {/* Footer */}
        <Box sx={{
          px: { xs: 3, md: 4 }, py: { xs: 2, md: 2.5 },
          bgcolor: 'rgba(11,30,18,0.95)',
          borderTop: '1px solid rgba(238,243,205,0.05)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: 1,
        }}>
          <Stack direction="row" spacing={1.5} alignItems="center">
            <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#F26433', flexShrink: 0, boxShadow: '0 0 8px rgba(242,100,51,0.6)' }} />
            <Typography sx={{ fontSize: 14.5, fontWeight: 700, color: '#EEF3CD', letterSpacing: 0.2 }}>
              {slide.name}
            </Typography>
            <Typography sx={{ fontSize: 13, color: 'rgba(238,243,205,0.5)' }}>
              {slide.location}
            </Typography>
          </Stack>
          <Typography sx={{ fontSize: 11, color: 'rgba(238,243,205,0.32)', letterSpacing: 1, textTransform: 'uppercase' }}>
            {copy.closeHint}
          </Typography>
        </Box>

        {/* Close button */}
        <Box
          component="button"
          onClick={onClose}
          aria-label="Close"
          sx={{
            position: 'absolute', top: 12, right: 12, zIndex: 10,
            width: 36, height: 36, borderRadius: '50%',
            bgcolor: 'rgba(0,0,0,0.72)', backdropFilter: { xs: 'none', md: 'blur(8px)' },
            border: '1px solid rgba(238,243,205,0.18)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', p: 0,
            transition: 'background 0.2s ease, border-color 0.2s ease',
            '&:hover': { bgcolor: 'rgba(238,243,205,0.14)', borderColor: 'rgba(238,243,205,0.36)' },
          }}
        >
          <X size={16} color="#EEF3CD" aria-hidden />
        </Box>
      </Box>
    </Box>
  )
}

/* ─── VideoCard ────────────────────────────────────────── */
function VideoCard({ slide, isActive, onOpenLightbox, copy }) {
  const iframeRef = useRef(null)
  const playerRef = useRef(null)
  const [muted, setMuted] = useState(true)
  const [ready, setReady] = useState(false)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    let timer
    const init = () => {
      if (!window.Vimeo || !iframeRef.current) { timer = setTimeout(init, 400); return }
      try {
        playerRef.current = new window.Vimeo.Player(iframeRef.current)
        playerRef.current.ready().then(() => {
          setReady(true)
          playerRef.current.setVolume(0)
        }).catch(() => {})
      } catch {
        setReady(false)
      }
    }
    timer = setTimeout(init, 300)
    return () => clearTimeout(timer)
  }, [])

  const toggleMute = e => {
    e.stopPropagation()
    if (!playerRef.current || !ready) return
    const next = !muted
    playerRef.current.setVolume(next ? 0 : 1)
    setMuted(next)
  }

  return (
    <Box
      sx={{
        position: 'relative',
        borderRadius: { xs: '14px', md: '18px' },
        overflow: 'hidden',
        border: isActive
          ? '1px solid rgba(242,100,51,0.22)'
          : '1px solid rgba(238,243,205,0.06)',
        boxShadow: isActive
          ? '0 0 0 1px rgba(242,100,51,0.08), 0 28px 70px rgba(0,0,0,0.5), 0 0 48px rgba(242,100,51,0.07)'
          : '0 8px 30px rgba(0,0,0,0.3)',
        transition: 'border-color 0.4s ease, box-shadow 0.4s ease, filter 0.3s ease',
        filter: isActive ? 'none' : 'brightness(0.68)',
      }}
    >
      {/* Video area */}
      <Box
        sx={{ position: 'relative', pt: '56.34%', bgcolor: '#074225' }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Box
          component="iframe"
          ref={iframeRef}
          src={slide.src}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          title={`${slide.name} - Speekr testimonial`}
          loading="lazy"
          sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'block', zIndex: 1 }}
        />

        {/* Bottom gradient */}
        <Box aria-hidden sx={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%',
          background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 100%)',
          pointerEvents: 'none', zIndex: 2,
        }} />

        {/* Transparent click cover — sits above iframe to intercept clicks & hover */}
        <Box
          onClick={onOpenLightbox}
          sx={{
            position: 'absolute', inset: 0, zIndex: 3, cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          {/* Hover overlay */}
          <Box sx={{
            position: 'absolute', inset: 0,
            bgcolor: hovered ? 'rgba(2,21,13,0.68)' : 'rgba(2,21,13,0)',
            backdropFilter: hovered ? 'blur(3px)' : 'blur(0px)',
            transition: 'background-color 0.25s ease, backdrop-filter 0.25s ease',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            gap: 2,
          }}>
            {/* Play circle */}
            <Box sx={{
              width: { xs: 52, md: 62 },
              height: { xs: 52, md: 62 },
              borderRadius: '50%',
              bgcolor: 'rgba(242,100,51,0.12)',
              border: '2px solid #F26433',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 0 32px rgba(242,100,51,0.35)',
              opacity: hovered ? 1 : 0,
              transform: hovered ? 'scale(1)' : 'scale(0.82)',
              transition: 'opacity 0.25s ease, transform 0.28s cubic-bezier(0.34,1.56,0.64,1)',
            }}>
              <Play size={22} color="#F26433" fill="#F26433" aria-hidden />
            </Box>

            {/* "Watch Story" label */}
            <Typography sx={{
              fontSize: 12.5,
              fontWeight: 800,
              letterSpacing: 1.6,
              textTransform: 'uppercase',
              color: '#EEF3CD',
              opacity: hovered ? 1 : 0,
              transform: hovered ? 'translateY(0)' : 'translateY(6px)',
              transition: 'opacity 0.22s ease 0.04s, transform 0.22s ease 0.04s',
            }}>
              {copy.watch}
            </Typography>

            {/* "Click to expand" chip */}
            <Box sx={{
              px: 1.8, py: 0.55, borderRadius: '100px',
              bgcolor: 'rgba(238,243,205,0.07)',
              border: '1px solid rgba(238,243,205,0.1)',
              opacity: hovered ? 1 : 0,
              transform: hovered ? 'translateY(0)' : 'translateY(8px)',
              transition: 'opacity 0.22s ease 0.08s, transform 0.22s ease 0.08s',
            }}>
              <Typography sx={{ fontSize: 10.5, color: 'rgba(238,243,205,0.72)', letterSpacing: 0.6, display: 'flex', alignItems: 'center', gap: 0.6 }}>
                <Maximize2 size={10} aria-hidden /> {copy.expand}
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Mute button — above the cover */}
        <Box
          component="button"
          onClick={toggleMute}
          aria-label={muted ? 'Unmute' : 'Mute'}
          sx={{
            position: 'absolute', bottom: 10, right: 10, zIndex: 4,
            width: 34, height: 34, borderRadius: '50%',
            bgcolor: 'rgba(0,0,0,0.62)', backdropFilter: 'blur(8px)',
            border: '1px solid rgba(238,243,205,0.15)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', p: 0,
            transition: 'background 0.2s ease, border-color 0.2s ease',
            '&:hover': { bgcolor: 'rgba(0,0,0,0.85)', borderColor: 'rgba(242,100,51,0.4)' },
          }}
        >
          {muted
            ? <VolumeX size={14} color="rgba(238,243,205,0.82)" />
            : <Volume2 size={14} color="#F26433" />
          }
        </Box>
      </Box>

      {/* Footer */}
      <Box sx={{
        px: 2.5, py: 1.8,
        bgcolor: 'rgba(0,0,0,0.22)',
        borderTop: '1px solid rgba(238,243,205,0.05)',
        display: 'flex', alignItems: 'center', gap: 1.5,
      }}>
        <Box sx={{
          width: 7, height: 7, borderRadius: '50%', flexShrink: 0,
          bgcolor: isActive ? '#F26433' : 'rgba(7,66,37,0.16)',
          boxShadow: isActive ? '0 0 8px rgba(242,100,51,0.6)' : 'none',
          transition: 'background-color 0.4s ease, box-shadow 0.4s ease',
        }} />
        <Typography sx={{ fontSize: 13.5, fontWeight: 700, color: '#EEF3CD', letterSpacing: 0.2 }}>
          {slide.name}
        </Typography>
        <Box sx={{ width: 3, height: 3, borderRadius: '50%', bgcolor: 'rgba(238,243,205,0.18)', flexShrink: 0 }} />
        <Typography sx={{ fontSize: 12.5, color: 'rgba(238,243,205,0.52)', letterSpacing: 0.3 }}>
          {slide.location}
        </Typography>
      </Box>
    </Box>
  )
}

/* ─── Main section ─────────────────────────────────────── */
export default function TestimonialsCarousel({ locale = 'en' }) {
  const [active, setActive] = useState(0)
  const [lightboxSlide, setLightboxSlide] = useState(null)
  const copy = landingCopy[locale].testimonials

  const prev = () => setActive(a => (a - 1 + N) % N)
  const next = () => setActive(a => (a + 1) % N)

  return (
    <>
      <Box sx={{ bgcolor: '#EEF3CD', px: { xs: '12px', sm: '18px', md: '24px' }, py: { xs: 3, md: 4 } }}>
        <Box
          component="section"
          aria-labelledby="test-title"
          sx={{
            position: 'relative',
            bgcolor: '#074225',
            borderRadius: { xs: '24px', md: '32px' },
            overflow: 'hidden',
            pt: { xs: 8, md: 12 },
            pb: { xs: 8, md: 12 },
            '&::before': {
              content: '""',
              position: 'absolute', top: 0, left: '10%', right: '10%', height: '1px',
              background: 'linear-gradient(90deg, transparent, rgba(242,100,51,0.25) 50%, transparent)',
            },
          }}
        >
          {/* Ambient orb — lime top */}
          <Box
            component="img"
            src="/images/brand-patterns/line-pattern-wide.png"
            alt="Speekr testimonials background pattern"
            title="Speekr decorative testimonials background pattern"
            aria-hidden
            loading="lazy"
            decoding="async"
            sx={{
              position: 'absolute',
              top: { xs: 24, md: 40 },
              right: { xs: '-44%', md: '-12%' },
              width: { xs: 620, md: 900 },
              maxWidth: 'none',
              opacity: 0.1,
              pointerEvents: 'none',
            }}
          />
          <Box aria-hidden sx={{
            position: 'absolute', top: '-10%', left: '50%', transform: 'translateX(-50%)',
            width: '80vw', height: '80vw', maxWidth: 900, maxHeight: 900, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(242,100,51,0.06) 0%, transparent 60%)',
            filter: 'blur(80px)', pointerEvents: 'none',
          }} />
          {/* Ambient orb — orange bottom right */}
          <Box aria-hidden sx={{
            position: 'absolute', bottom: '-8%', right: '-4%',
            width: '50vw', height: '50vw', maxWidth: 600, maxHeight: 600, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(242,100,51,0.07) 0%, transparent 65%)',
            filter: 'blur(70px)', pointerEvents: 'none',
          }} />
          {/* Noise grain */}
          <Box aria-hidden sx={{
            position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.02,
            backgroundImage: NOISE, backgroundRepeat: 'repeat', backgroundSize: '200px 200px',
          }} />

          <Box sx={{ position: 'relative', zIndex: 1, maxWidth: 1320, mx: 'auto', px: { xs: 2.5, sm: 4, md: 6, lg: 8 } }}>

            {/* Heading */}
            <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 9 } }}>
              <Typography
                id="test-title"
                component="h2"
                sx={{
                  m: 0,
                  fontSize: { xs: 34, sm: 46, md: 56, lg: 64 },
                  fontFamily: (theme) => theme.palette.brand.fontHeadline,
                  fontWeight: 900,
                  letterSpacing: { xs: -1.5, md: -2.5 },
                  lineHeight: 1.04,
                  color: '#EEF3CD',
                }}
              >
                {copy.title}{' '}
                <Box component="span" sx={{ color: '#F26433' }}>{copy.accent}</Box>
              </Typography>
            </Box>

            {/* Carousel */}
            <Box sx={{ overflow: 'hidden' }}>
              <Box sx={{
                display: 'flex',
                gap: { xs: 0, md: '24px' },
                width: { xs: `${N * 100}%`, md: '100%' },
                transform: { xs: `translateX(calc(-${active * (100 / N)}%))`, md: 'none' },
                transition: { xs: 'transform 0.52s cubic-bezier(0.4,0,0.2,1)', md: 'none' },
              }}>
                {SLIDES.map(slide => (
                  <Box
                    key={slide.id}
                    sx={{
                      flexShrink: 0,
                      width: { xs: `${100 / N}%`, md: 'calc((100% - 48px) / 3)' },
                    }}
                  >
                    <VideoCard
                      slide={slide}
                      isActive={slide.id === active}
                      onOpenLightbox={() => setLightboxSlide(slide)}
                      copy={copy}
                    />
                  </Box>
                ))}
              </Box>
            </Box>

            {/* Navigation */}
            <Stack
              direction="row"
              sx={{ justifyContent: 'center', alignItems: 'center', mt: { xs: 4, md: 5 }, gap: 1.5 }}
            >
              <Box
                component="button" onClick={prev} aria-label="Previous"
                sx={{
                  width: 40, height: 40, borderRadius: '50%',
                  border: '1.5px solid rgba(238,243,205,0.18)', bgcolor: 'transparent',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', p: 0,
                  transition: 'border-color 0.2s ease, background 0.2s ease',
                  '&:hover': { borderColor: '#F26433', bgcolor: 'rgba(242,100,51,0.06)' },
                }}
              >
                <ChevronLeft size={16} color="rgba(238,243,205,0.7)" aria-hidden />
              </Box>

              {SLIDES.map((_, i) => (
                <Box
                  key={i} component="button" onClick={() => setActive(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  sx={{
                    width: i === active ? 28 : 8, height: 8,
                    borderRadius: '100px', border: 'none', p: 0, cursor: 'pointer',
                    bgcolor: i === active ? '#F26433' : 'rgba(238,243,205,0.2)',
                    transition: 'width 0.35s cubic-bezier(0.4,0,0.2,1), background-color 0.3s ease',
                    boxShadow: i === active ? '0 0 8px rgba(242,100,51,0.5)' : 'none',
                  }}
                />
              ))}

              <Box
                component="button" onClick={next} aria-label="Next"
                sx={{
                  width: 40, height: 40, borderRadius: '50%',
                  border: '1.5px solid rgba(238,243,205,0.18)', bgcolor: 'transparent',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', p: 0,
                  transition: 'border-color 0.2s ease, background 0.2s ease',
                  '&:hover': { borderColor: '#F26433', bgcolor: 'rgba(242,100,51,0.06)' },
                }}
              >
                <ChevronRight size={16} color="rgba(238,243,205,0.7)" aria-hidden />
              </Box>
            </Stack>
          </Box>
        </Box>
      </Box>

      {/* Lightbox — rendered outside section so it can escape overflow:hidden */}
      {lightboxSlide && (
        <Lightbox slide={lightboxSlide} onClose={() => setLightboxSlide(null)} copy={copy} />
      )}
    </>
  )
}
