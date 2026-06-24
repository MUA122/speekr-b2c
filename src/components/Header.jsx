import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import Box from '@mui/material/Box'
import { ArrowUpRight, Menu, X } from 'lucide-react'

const NAV_ITEMS = [
  { label: 'Blog', href: 'https://speekr.ai/blog', external: true },
  { label: 'Product', href: '#product', sectionId: 'product' },
  { label: 'Pricing', href: '#pricing', sectionId: 'pricing' },
  { label: 'Contact', isContact: true },
]

const WATCH_IDS = NAV_ITEMS.filter((i) => i.sectionId).map((i) => i.sectionId)

/* ── Mobile panel (createPortal — bypasses MUI light theme on Paper) ── */
function MobileMenu({ open, onClose, activeSection, onContactClick }) {
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prev }
  }, [open])

  useEffect(() => {
    if (!open) return
    const fn = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', fn)
    return () => document.removeEventListener('keydown', fn)
  }, [open, onClose])

  if (!open) return null

  return createPortal(
    <Box
      sx={{
        position: 'fixed',
        inset: 0,
        zIndex: 1400,
        '@keyframes mBackdrop': {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        '@keyframes mPanel': {
          from: { transform: 'translateX(100%)', opacity: 0.4 },
          to: { transform: 'translateX(0)', opacity: 1 },
        },
      }}
    >
      {/* Backdrop */}
      <Box
        onClick={onClose}
        aria-hidden
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(2,21,13,0.84)',
          backdropFilter: 'blur(14px)',
          animation: 'mBackdrop 0.25s ease forwards',
        }}
      />

      {/* Panel */}
      <Box
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          width: 'min(84vw, 320px)',
          background: '#062D1B',
          borderLeft: '1px solid rgba(255,118,0,0.12)',
          boxShadow: '-24px 0 72px rgba(0,0,0,0.65)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          animation: 'mPanel 0.3s cubic-bezier(0.4,0,0.2,1) forwards',
        }}
      >
        {/* Ambient glow */}
        <Box
          aria-hidden
          sx={{
            position: 'absolute',
            top: '-20%',
            right: '-20%',
            width: '80%',
            height: '80%',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(255,118,0,0.07) 0%, transparent 70%)',
            filter: 'blur(40px)',
            pointerEvents: 'none',
          }}
        />

        {/* Header row */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            px: 2.5,
            py: 2,
            borderBottom: '1px solid rgba(255,255,255,0.06)',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <Box
            component="img"
            src="/images/logo.svg"
            alt="Speekr.ai"
            sx={{ height: 26, width: 'auto', filter: 'brightness(0) invert(1)' }}
          />
          <Box
            component="button"
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            sx={{
              width: 34,
              height: 34,
              borderRadius: '10px',
              border: '1px solid rgba(255,255,255,0.1)',
              bgcolor: 'rgba(255,255,255,0.04)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'rgba(247,249,232,0.5)',
              transition: 'background 0.2s ease, color 0.2s ease',
              '&:hover': {
                bgcolor: 'rgba(255,255,255,0.09)',
                color: 'rgba(247,249,232,0.95)',
              },
            }}
          >
            <X size={15} aria-hidden />
          </Box>
        </Box>

        {/* Nav links */}
        <Box
          component="nav"
          aria-label="Mobile navigation"
          sx={{
            flex: 1,
            overflowY: 'auto',
            px: 2,
            py: 2.5,
            display: 'flex',
            flexDirection: 'column',
            gap: 0.75,
            position: 'relative',
            zIndex: 1,
          }}
        >
          {NAV_ITEMS.map((item) => {
            const isActive = Boolean(item.sectionId && activeSection === item.sectionId)
            return (
              <Box
                key={item.label}
                component={item.isContact || item.sectionId ? 'button' : 'a'}
                type={item.isContact || item.sectionId ? 'button' : undefined}
                href={item.isContact || item.sectionId ? undefined : item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noreferrer' : undefined}
                onClick={() => {
                  onClose()
                  if (item.isContact) onContactClick?.()
                  if (item.sectionId)
                    document
                      .getElementById(item.sectionId)
                      ?.scrollIntoView({ behavior: 'smooth' })
                }}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  px: 2,
                  py: 1.4,
                  borderRadius: '12px',
                  fontSize: 15,
                  fontWeight: 600,
                  letterSpacing: -0.1,
                  color: isActive ? '#FF7600' : 'rgba(247,249,232,0.68)',
                  bgcolor: isActive ? 'rgba(255,118,0,0.08)' : 'transparent',
                  border: `1px solid ${isActive ? 'rgba(255,118,0,0.18)' : 'transparent'}`,
                  textDecoration: 'none',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  transition: 'background 0.2s ease, color 0.2s ease, border-color 0.2s ease',
                  '&:hover': {
                    bgcolor: isActive ? 'rgba(255,118,0,0.1)' : 'rgba(255,255,255,0.05)',
                    color: isActive ? '#FF7600' : 'rgba(247,249,232,0.96)',
                  },
                }}
              >
                {item.label}
                {item.external && (
                  <ArrowUpRight size={13} aria-hidden style={{ opacity: 0.38 }} />
                )}
              </Box>
            )
          })}
        </Box>

        {/* Footer CTAs */}
        <Box
          sx={{
            px: 2,
            pb: 3,
            pt: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 1.2,
            borderTop: '1px solid rgba(255,255,255,0.06)',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <Box
            component="a"
            href="https://app.speekr.ai/auth/sign-up/"
            target="_blank"
            rel="noreferrer"
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 0.75,
              py: 1.7,
              borderRadius: '12px',
              bgcolor: '#FF7600',
              color: '#062D1B',
              fontSize: 14.5,
              fontWeight: 800,
              letterSpacing: -0.2,
              textDecoration: 'none',
              fontFamily: 'inherit',
              boxShadow: '0 0 18px rgba(255,118,0,0.2)',
              transition: 'filter 0.2s ease, box-shadow 0.2s ease',
              '&:hover': {
                filter: 'brightness(1.08)',
                boxShadow: '0 4px 20px rgba(255,118,0,0.38)',
              },
            }}
          >
            Start Free Trial
            <ArrowUpRight size={14} aria-hidden />
          </Box>

          <Box
            component="a"
            href="https://app.speekr.ai/auth/sign-in/"
            target="_blank"
            rel="noreferrer"
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 0.75,
              py: 1.7,
              borderRadius: '12px',
              border: '1px solid rgba(255,255,255,0.1)',
              bgcolor: 'rgba(255,255,255,0.04)',
              color: 'rgba(247,249,232,0.6)',
              fontSize: 14.5,
              fontWeight: 600,
              textDecoration: 'none',
              fontFamily: 'inherit',
              transition: 'background 0.2s ease, color 0.2s ease, border-color 0.2s ease',
              '&:hover': {
                bgcolor: 'rgba(255,255,255,0.08)',
                color: 'rgba(247,249,232,0.92)',
                borderColor: 'rgba(255,255,255,0.18)',
              },
            }}
          >
            Login
          </Box>
        </Box>
      </Box>
    </Box>,
    document.body
  )
}

/* ── Main header ── */
export default function Header({ onContactClick }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [scrolled, setScrolled] = useState(false)

  /* Scroll detection for header bg */
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    fn()
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  /* IntersectionObserver scroll-spy — clears when section leaves viewport band */
  useEffect(() => {
    const observers = WATCH_IDS.map((id) => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => {
          setActiveSection((prev) => {
            if (entry.isIntersecting) return id
            if (prev === id) return ''
            return prev
          })
        },
        // Detection band: section must be between 15% and 30% from viewport top
        { threshold: 0, rootMargin: '-15% 0px -70% 0px' },
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach((obs) => obs?.disconnect())
  }, [])

  const desktopLinkSx = (isActive) => ({
    display: 'inline-flex',
    alignItems: 'center',
    gap: 0.4,
    px: 1.6,
    py: 0.9,
    borderRadius: '100px',
    fontSize: 13.5,
    fontWeight: 600,
    letterSpacing: 0.1,
    color: isActive ? '#FF7600' : 'rgba(247,249,232,0.62)',
    bgcolor: isActive ? 'rgba(255,118,0,0.1)' : 'transparent',
    textDecoration: 'none',
    border: 'none',
    cursor: 'pointer',
    fontFamily: 'inherit',
    transition: 'color 0.2s ease, background 0.2s ease',
    '&:hover': {
      color: 'rgba(247,249,232,0.96)',
      bgcolor: isActive ? 'rgba(255,118,0,0.14)' : 'rgba(255,255,255,0.07)',
    },
  })

  return (
    <>
      <Box
        component="header"
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1200,
          pt: { xs: 1.5, md: 2 },
          pointerEvents: 'none',
        }}
      >
        <Box sx={{ maxWidth: 1352, mx: 'auto', px: { xs: 2, sm: 3, lg: 5 } }}>
          <Box
            sx={{
              pointerEvents: 'auto',
              display: 'grid',
              gridTemplateColumns: { xs: '1fr auto', md: 'auto 1fr auto' },
              alignItems: 'center',
              gap: 2,
              px: { xs: 1.8, sm: 2.2 },
              height: { xs: 60, md: 64 },
              borderRadius: '100px',
              border: '1px solid',
              borderColor: scrolled ? 'rgba(255,118,0,0.18)' : 'rgba(255,255,255,0.09)',
              bgcolor: scrolled ? 'rgba(0,34,19,0.94)' : 'rgba(0,66,37,0.68)',
              backdropFilter: 'blur(32px) saturate(1.5)',
              boxShadow: scrolled
                ? '0 8px 48px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.04)'
                : '0 4px 28px rgba(0,0,0,0.25)',
              transition:
                'background-color 380ms ease, border-color 380ms ease, box-shadow 380ms ease',
            }}
          >
            {/* Logo */}
            <Box
              component="a"
              href="/"
              aria-label="Speekr.ai home"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                textDecoration: 'none',
                '&:focus-visible': {
                  outline: '2px solid #FF7600',
                  outlineOffset: 4,
                  borderRadius: 2,
                },
              }}
            >
              <Box
                component="img"
                src="/images/logo.svg"
                alt="Speekr.ai"
                sx={{
                  width: { xs: 108, sm: 120 },
                  display: 'block',
                  filter: 'brightness(0) invert(1)',
                }}
              />
            </Box>

            {/* Desktop nav */}
            <Box
              component="nav"
              aria-label="Primary navigation"
              sx={{
                display: { xs: 'none', md: 'flex' },
                justifySelf: 'center',
                alignItems: 'center',
                gap: 0.25,
              }}
            >
              {NAV_ITEMS.map((item) => {
                const isActive = Boolean(item.sectionId && activeSection === item.sectionId)
                if (item.isContact) {
                  return (
                    <Box
                      key={item.label}
                      component="button"
                      type="button"
                      onClick={onContactClick}
                      sx={desktopLinkSx(false)}
                    >
                      {item.label}
                    </Box>
                  )
                }
                if (item.sectionId) {
                  return (
                    <Box
                      key={item.label}
                      component="button"
                      type="button"
                      onClick={() =>
                        document
                          .getElementById(item.sectionId)
                          ?.scrollIntoView({ behavior: 'smooth' })
                      }
                      sx={desktopLinkSx(isActive)}
                    >
                      {item.label}
                    </Box>
                  )
                }
                return (
                  <Box
                    key={item.label}
                    component="a"
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noreferrer' : undefined}
                    sx={desktopLinkSx(isActive)}
                  >
                    {item.label}
                    {item.external && (
                      <ArrowUpRight size={12} aria-hidden style={{ opacity: 0.5 }} />
                    )}
                  </Box>
                )
              })}
            </Box>

            {/* Desktop Login CTA */}
            <Box
              component="a"
              href="https://app.speekr.ai"
              target="_blank"
              rel="noreferrer"
              sx={{
                display: { xs: 'none', md: 'inline-flex' },
                alignItems: 'center',
                gap: 0.6,
                justifySelf: 'end',
                height: 40,
                px: 2.5,
                borderRadius: '100px',
                fontSize: 13.5,
                fontWeight: 700,
                bgcolor: '#FF7600',
                color: '#00331d',
                textDecoration: 'none',
                fontFamily: 'inherit',
                boxShadow: '0 0 16px rgba(255,118,0,0.15)',
                transition:
                  'transform 0.2s ease, box-shadow 0.2s ease, filter 0.2s ease',
                '&:hover': {
                  filter: 'brightness(1.08)',
                  transform: 'translateY(-1px)',
                  boxShadow: '0 8px 28px rgba(255,118,0,0.38)',
                },
              }}
            >
              Login
              <ArrowUpRight size={14} strokeWidth={2.6} aria-hidden />
            </Box>

            {/* Mobile hamburger */}
            <Box
              component="button"
              type="button"
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(true)}
              sx={{
                display: { xs: 'inline-flex', md: 'none' },
                justifySelf: 'end',
                width: 40,
                height: 40,
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FF7600',
                border: '1px solid rgba(255,118,0,0.22)',
                borderRadius: '12px',
                bgcolor: 'transparent',
                cursor: 'pointer',
                transition: 'background 0.2s ease',
                '&:hover': { bgcolor: 'rgba(255,118,0,0.1)' },
              }}
            >
              <Menu size={20} strokeWidth={2} aria-hidden />
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Mobile menu */}
      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        activeSection={activeSection}
        onContactClick={onContactClick}
      />
    </>
  )
}
