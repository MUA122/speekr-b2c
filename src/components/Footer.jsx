import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { ArrowRight, Check } from 'lucide-react'

const NOISE = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`

const LOGO =
  'https://cdn.builder.io/api/v1/image/assets%2F7a4e07e52a2c4a8bb3890e0c17931328%2F0af2cfca998e43a8a9c9192d850392f4'

const SOCIAL_ICONS = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/speekr.ai_/',
    vb: '0 0 24 24',
    w: 17,
    h: 17,
    paths: [
      'M15.9962 2H8.00375C4.70169 2 2 4.70169 2 8.00375V15.9962C2 19.2983 4.70169 22 8.00375 22H15.9962C19.2983 22 22 19.2983 22 15.9962V8.00375C22 4.70169 19.3358 2 15.9962 2ZM17.2345 12.0188C17.2345 14.8705 14.9456 17.1595 12.0938 17.1595C9.24203 17.1595 6.9531 14.8705 6.9531 12.0188C6.9531 9.16698 9.24203 6.87805 12.0938 6.87805C14.9081 6.87805 17.2345 9.16698 17.2345 12.0188ZM17.2345 8.0788C16.5591 8.0788 16.0338 7.55347 16.0338 6.87805C16.0338 6.20263 16.5591 5.6773 17.2345 5.6773C17.9099 5.6773 18.4353 6.20263 18.4353 6.87805C18.4353 7.51595 17.8724 8.0788 17.2345 8.0788Z',
      'M12 9C10.3571 9 9 10.3214 9 12C9 13.6786 10.3214 15 12 15C13.6429 15 15 13.6786 15 12C14.9643 10.3214 13.6429 9 12 9Z',
    ],
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/speekr-ai/?viewAsMember=true',
    vb: '0 0 24 24',
    w: 17,
    h: 17,
    paths: [
      'M6.28291 22H2.35363V8.04563H6.28291V22ZM4.31827 6.44867C3.0609 6.44867 2 5.46008 2 4.24335C2 3.02662 3.02161 2 4.27898 2C5.53635 2 6.59725 2.98859 6.59725 4.20532C6.59725 5.42205 5.57564 6.44867 4.31827 6.44867ZM22 22H18.0707V14.8897C18.0707 10.6312 12.8448 10.9354 12.8448 14.8897V22H8.91552V8.04563H12.8448V10.289C14.6916 7.01901 22 6.75285 22 13.4449V22Z',
    ],
  },
  {
    label: 'Email',
    href: 'mailto:hello@speekr.ai',
    vb: '0 0 20 16',
    w: 16,
    h: 13,
    paths: [
      'M2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H18C18.55 0 19.0208 0.195833 19.4125 0.5875C19.8042 0.979167 20 1.45 20 2V14C20 14.55 19.8042 15.0208 19.4125 15.4125C19.0208 15.8042 18.55 16 18 16H2ZM10 9L18 4V2L10 7L2 2V4L10 9Z',
    ],
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61582806519272',
    vb: '0 0 24 24',
    w: 17,
    h: 17,
    paths: [
      'M9.49084 8.66667H7V12H9.49084V22H13.6667V12H16.707L17 8.66667H13.6667V7.27472C13.6667 6.46886 13.8132 6.17582 14.5824 6.17582H17V2H13.8132C10.8095 2 9.49084 3.31868 9.49084 5.84615V8.66667Z',
    ],
  },
]

const NAV_COLS = [
  {
    title: 'Platform',
    links: [
      { label: 'Dashboard', href: 'https://app.speekr.ai/auth/sign-in/?returnTo=%2Fdashboard%2F' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Case Studies', href: '#case-studies' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Contact Us', isContact: true },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
    ],
  },
]

const TAIL_BG = '#111e16'

/* ── Sub-components ── */

function SocialBtn({ label, href, vb, w, h, paths }) {
  return (
    <Box
      component="a"
      href={href}
      target={href.startsWith('mailto:') ? undefined : '_blank'}
      rel="noopener noreferrer"
      aria-label={label}
      sx={{
        width: 36,
        height: 36,
        borderRadius: '50%',
        border: '1px solid rgba(255,255,255,0.09)',
        bgcolor: 'rgba(255,255,255,0.04)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        transition: 'background 0.22s ease, border-color 0.22s ease, transform 0.22s ease',
        '&:hover': {
          bgcolor: 'rgba(201,245,104,0.1)',
          borderColor: 'rgba(201,245,104,0.32)',
          transform: 'translateY(-2px)',
        },
      }}
    >
      <svg viewBox={vb} width={w} height={h} fill="none" aria-hidden="true">
        {paths.map((d, i) => (
          <path key={i} d={d} fill="white" />
        ))}
      </svg>
    </Box>
  )
}

function NavLink({ label, href, onClick }) {
  const isExternal = href?.startsWith('http')
  return (
    <Box
      component={onClick ? 'button' : 'a'}
      type={onClick ? 'button' : undefined}
      href={onClick ? undefined : href}
      onClick={onClick}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      sx={{
        display: 'block',
        fontSize: 14,
        fontWeight: 500,
        color: 'rgba(247,255,232,0.42)',
        textDecoration: 'none',
        bgcolor: 'transparent',
        border: 'none',
        cursor: 'pointer',
        fontFamily: 'inherit',
        p: 0,
        textAlign: 'left',
        transition: 'color 0.2s ease',
        '&:hover': { color: '#c9f568' },
      }}
    >
      {label}
    </Box>
  )
}

function TickTalkCard() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.75 }}>
      <Typography
        sx={{
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: 1.3,
          textTransform: 'uppercase',
          color: 'rgba(247,255,232,0.2)',
          mb: 0.5,
        }}
      >
        Message from tick&talk
      </Typography>

      {/* Chat bubble */}
      <Box
        sx={{
          position: 'relative',
          bgcolor: TAIL_BG,
          border: '1px solid rgba(201,245,104,0.1)',
          borderRadius: '4px 18px 18px 18px',
          p: '20px 22px 16px',
          maxWidth: 300,
          /* Tail: top-left triangle pointing left */
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: '-8px',
            width: 0,
            height: 0,
            borderRight: `8px solid ${TAIL_BG}`,
            borderBottom: '8px solid transparent',
          },
        }}
      >
        <Typography
          sx={{
            fontSize: 13.5,
            lineHeight: 1.72,
            color: 'rgba(247,255,232,0.55)',
            mb: 2.5,
          }}
        >
          Interested in offline public speaking and presentation masterclasses?
          <br />
          <br />
          Explore bootcamps and workshops on{' '}
          <Box component="span" sx={{ color: '#c9f568', fontWeight: 700 }}>
            tickandtalk.com
          </Box>
        </Typography>

        {/* Link */}
        <Box
          component="a"
          href="https://tickandtalk.com/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 0.75,
            fontSize: 13,
            fontWeight: 700,
            color: '#c9f568',
            textDecoration: 'none',
            transition: 'gap 0.2s ease, filter 0.2s ease',
            '&:hover': { gap: 1.4, filter: 'brightness(1.15)' },
          }}
        >
          Visit tick&amp;talk
          <ArrowRight size={12} aria-hidden />
        </Box>

        {/* Timestamp + double-check */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            gap: 0.5,
            mt: 2,
          }}
        >
          <Typography sx={{ fontSize: 10, fontWeight: 500, color: 'rgba(247,255,232,0.22)' }}>
            10:11
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Check size={10} color="#c9f568" strokeWidth={2.5} aria-hidden />
            <Box sx={{ ml: '-5px' }}>
              <Check size={10} color="#c9f568" strokeWidth={2.5} aria-hidden />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

/* ── Main export ── */

export default function Footer({ onContactClick }) {
  return (
    <Box
      component="footer"
      sx={{
        position: 'relative',
        bgcolor: '#060f0a',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        overflow: 'hidden',
      }}
    >
      {/* Noise grain */}
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          opacity: 0.015,
          backgroundImage: NOISE,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px',
          zIndex: 0,
        }}
      />

      {/* SPEEKR watermark */}
      <Typography
        aria-hidden
        sx={{
          position: 'absolute',
          bottom: '6%',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: { xs: 72, sm: 130, md: 196, lg: 256 },
          fontWeight: 900,
          letterSpacing: { xs: -4, md: -12 },
          lineHeight: 1,
          color: 'transparent',
          WebkitTextStroke: '1px rgba(255,255,255,0.028)',
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
          userSelect: 'none',
          zIndex: 0,
        }}
      >
        SPEEKR
      </Typography>

      {/* Ambient orb — lime left */}
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          top: '-8%',
          left: '-5%',
          width: '55vw',
          height: '55vw',
          maxWidth: 620,
          maxHeight: 620,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201,245,104,0.045) 0%, transparent 65%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      {/* Ambient orb — orange right */}
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          top: '0%',
          right: '-4%',
          width: '38vw',
          height: '38vw',
          maxWidth: 440,
          maxHeight: 440,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,107,47,0.042) 0%, transparent 65%)',
          filter: 'blur(70px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Inner content */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          maxWidth: 1200,
          mx: 'auto',
          px: { xs: 2.5, sm: 4, md: 6, lg: 8 },
        }}
      >
        {/* ── Top CTA ── */}
        <Box
          sx={{
            pt: { xs: 8, md: 12 },
            pb: { xs: 6, md: 8 },
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: { xs: 'flex-start', sm: 'center' },
            justifyContent: 'space-between',
            gap: { xs: 4, sm: 6 },
          }}
        >
          <Box>
            <Typography
              component="p"
              sx={{
                m: 0,
                fontSize: { xs: 34, sm: 44, md: 52, lg: 58 },
                fontWeight: 900,
                letterSpacing: { xs: -1.2, md: -2 },
                lineHeight: 1.0,
                color: 'rgba(247,255,232,0.95)',
              }}
            >
              Ready to speak
              <br />
              <Box component="span" sx={{ color: '#c9f568' }}>
                with confidence?
              </Box>
            </Typography>
            <Typography
              sx={{
                mt: 1.5,
                fontSize: { xs: 14, md: 15 },
                fontWeight: 500,
                lineHeight: 1.65,
                color: 'rgba(247,255,232,0.3)',
                maxWidth: 360,
              }}
            >
              Join thousands of professionals already training with Speekr.
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 1.5,
              alignItems: { xs: 'flex-start', sm: 'flex-end' },
              flexShrink: 0,
            }}
          >
            <Box
              component="a"
              href="https://app.speekr.ai/auth/sign-up/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                px: { xs: 3, md: 3.5 },
                py: 1.6,
                borderRadius: '100px',
                bgcolor: '#c9f568',
                color: '#0b1e12',
                fontSize: 14,
                fontWeight: 800,
                letterSpacing: -0.2,
                textDecoration: 'none',
                fontFamily: 'inherit',
                boxShadow: '0 0 24px rgba(201,245,104,0.22)',
                transition: 'transform 0.22s ease, box-shadow 0.22s ease, filter 0.22s ease',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 32px rgba(201,245,104,0.38)',
                  filter: 'brightness(1.07)',
                },
              }}
            >
              Start Free Trial
              <ArrowRight size={14} aria-hidden />
            </Box>

            <Box
              component="button"
              type="button"
              onClick={onContactClick}
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 0.5,
                fontSize: 13,
                fontWeight: 600,
                color: 'rgba(247,255,232,0.32)',
                bgcolor: 'transparent',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'inherit',
                p: 0,
                transition: 'color 0.2s ease',
                '&:hover': { color: 'rgba(247,255,232,0.68)' },
              }}
            >
              or Book a Demo →
            </Box>
          </Box>
        </Box>

        {/* Separator */}
        <Box
          sx={{
            height: '1px',
            background:
              'linear-gradient(90deg, transparent, rgba(255,255,255,0.07) 25%, rgba(255,255,255,0.07) 75%, transparent)',
          }}
        />

        {/* ── Main grid ── */}
        <Box
          sx={{
            pt: { xs: 7, md: 9 },
            pb: { xs: 6, md: 8 },
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: '1.5fr 1fr',
              md: '1.8fr 1fr 1fr 1.5fr',
            },
            gap: { xs: 6, sm: 7, md: 6, lg: 8 },
            alignItems: 'start',
          }}
        >
          {/* ── Col 1: Brand ── */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Box
              component="img"
              src={LOGO}
              alt="Speekr"
              loading="lazy"
              sx={{
                height: 38,
                width: 'auto',
                objectFit: 'contain',
                objectPosition: 'left center',
                filter: 'brightness(0) invert(1)',
              }}
            />
            <Typography
              sx={{
                fontSize: 13,
                lineHeight: 1.72,
                fontWeight: 500,
                color: 'rgba(247,255,232,0.34)',
                maxWidth: 280,
              }}
            >
              Speekr helps individuals and teams master communication skills through
              AI-powered practice and coaching.
            </Typography>

            <Box sx={{ display: 'flex', gap: 1 }}>
              {SOCIAL_ICONS.map((s) => (
                <SocialBtn key={s.label} {...s} />
              ))}
            </Box>
          </Box>

          {/* ── Col 2 & 3: Nav ── */}
          {NAV_COLS.map(({ title, links }) => (
            <Box key={title} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <Typography
                sx={{
                  fontSize: 11,
                  fontWeight: 800,
                  letterSpacing: 1.6,
                  textTransform: 'uppercase',
                  color: 'rgba(247,255,232,0.28)',
                }}
              >
                {title}
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
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
          ))}

          {/* ── Col 4: tick&talk card ── */}
          <TickTalkCard />
        </Box>

        {/* Separator */}
        <Box
          sx={{
            height: '1px',
            background:
              'linear-gradient(90deg, transparent, rgba(255,255,255,0.05) 25%, rgba(255,255,255,0.05) 75%, transparent)',
          }}
        />

        {/* ── Bottom bar ── */}
        <Box
          sx={{
            py: { xs: 3.5, md: 4 },
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: { xs: 'flex-start', sm: 'center' },
            justifyContent: 'space-between',
            gap: { xs: 2, sm: 0 },
          }}
        >
          <Typography sx={{ fontSize: 12, fontWeight: 500, color: 'rgba(247,255,232,0.22)' }}>
            © 2026 Speekr. All rights reserved.
          </Typography>

          <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
            {[
              { label: 'Privacy Policy', href: '/privacy' },
              { label: 'Terms of Service', href: '/terms' },
            ].map(({ label, href }) => (
              <Box
                key={label}
                component="a"
                href={href}
                sx={{
                  fontSize: 12,
                  fontWeight: 500,
                  color: 'rgba(247,255,232,0.22)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                  '&:hover': { color: 'rgba(247,255,232,0.52)' },
                }}
              >
                {label}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
