import { useState, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Send, X, Check } from 'lucide-react'

const NOISE = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`

const fieldInputSx = {
  display: 'block',
  width: '100%',
  background: 'rgba(7,66,37,0.045)',
  border: '1px solid rgba(7,66,37,0.16)',
  borderRadius: '16px',
  padding: '12px 15px',
  color: '#074225',
  fontSize: '14.5px',
  fontWeight: 700,
  fontFamily: 'inherit',
  outline: 'none',
  boxSizing: 'border-box',
  transition: 'border-color 0.22s ease, background 0.22s ease',
  '&::placeholder': { color: 'rgba(7,66,37,0.42)', fontWeight: 600 },
  '&:focus': {
    background: 'rgba(242,100,51,0.055)',
    borderColor: 'rgba(242,100,51,0.52)',
    boxShadow: 'none',
  },
}

function Field({ label, required, multiline, rows = 4, id, ...rest }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.7, flex: '1 1 0', minWidth: 0 }}>
      <Box
        component="label"
        htmlFor={id}
        sx={{
          fontSize: 11.5,
          fontWeight: 900,
          letterSpacing: 1.2,
          textTransform: 'uppercase',
          color: 'rgba(7,66,37,0.68)',
          userSelect: 'none',
        }}
      >
        {label}
        {required && (
          <Box component="span" sx={{ color: '#F26433', ml: 0.4 }}>*</Box>
        )}
      </Box>
      <Box
        id={id}
        component={multiline ? 'textarea' : 'input'}
        rows={multiline ? rows : undefined}
        sx={{
          ...fieldInputSx,
          resize: multiline ? 'vertical' : 'none',
          minHeight: multiline ? 104 : undefined,
        }}
        {...rest}
      />
    </Box>
  )
}

const UI = {
  en: {
    sent: 'Request Sent!',
    sentText: 'We received your details and will be in touch with you shortly.',
    done: 'Done',
    titleA: 'Book a Speekr',
    titleB: 'Demo',
    subtitle: 'Share your details and we will get back to you.',
    fields: {
      name: ['Name', 'Your full name'],
      email: ['Email', 'your@email.com'],
      company: ['Company', 'Company / Organization'],
      phone: ['Phone', '+1 234 567 8900'],
      message: ['Message', 'Tell us about your team and goals...'],
    },
    submit: 'Submit Request',
    cancel: 'Cancel',
  },
  ar: {
    sent: 'تم إرسال الطلب',
    sentText: 'استلمنا بياناتك وسيتواصل معك فريقنا قريبا.',
    done: 'تم',
    titleA: 'احجز عرضا',
    titleB: 'توضيحيا',
    subtitle: 'شاركنا بياناتك وسنعود إليك في أقرب وقت.',
    fields: {
      name: ['الاسم', 'الاسم الكامل'],
      email: ['البريد الإلكتروني', 'name@example.com'],
      company: ['الشركة', 'الشركة / المنظمة'],
      phone: ['رقم الهاتف', '+966 5x xxx xxxx'],
      message: ['الرسالة', 'أخبرنا عن فريقك وأهدافك...'],
    },
    submit: 'إرسال الطلب',
    cancel: 'إلغاء',
  },
}

function SuccessState({ onClose, ui }) {
  return (
    <Box sx={{ textAlign: 'center', py: { xs: 3, sm: 5 } }}>
      <Box
        sx={{
          width: 72,
          height: 72,
          borderRadius: '50%',
          background: '#F26433',
          border: '1px solid rgba(7,66,37,0.18)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mx: 'auto',
          mb: 3,
          boxShadow: 'none',
        }}
      >
        <Check size={32} color="#074225" strokeWidth={2.5} aria-hidden />
      </Box>
      <Typography
        component="h3"
        sx={{
          m: 0,
          fontSize: { xs: 26, sm: 30 },
          fontWeight: 900,
          letterSpacing: -1,
          color: '#074225',
          mb: 1.2,
        }}
      >
        {ui.sent}
      </Typography>
      <Typography
        sx={{
          fontSize: 15,
          lineHeight: 1.72,
          color: 'rgba(7,66,37,0.68)',
          maxWidth: 340,
          mx: 'auto',
          mb: 4.5,
        }}
      >
        {ui.sentText}
      </Typography>
      <Box
        component="button"
        type="button"
        onClick={onClose}
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 1,
          px: 4.5,
          py: '13px',
          borderRadius: '100px',
          bgcolor: '#F26433',
          border: 'none',
          color: '#074225',
          fontSize: 15,
          fontWeight: 800,
          cursor: 'pointer',
          fontFamily: 'inherit',
          boxShadow: 'none',
          transition: 'transform 0.22s ease, background-color 0.22s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            bgcolor: '#F26433',
            boxShadow: 'none',
          },
        }}
      >
        {ui.done}
      </Box>
    </Box>
  )
}

const initialFormState = { name: '', email: '', company: '', phone: '', message: '' }

function ContactModal({ locale = 'en', open, onClose, onSubmit }) {
  const [formData, setFormData] = useState(initialFormState)
  const [submitted, setSubmitted] = useState(false)
  const ui = UI[locale]

  const handleClose = useCallback(() => {
    setSubmitted(false)
    onClose?.()
  }, [onClose])

  /* Body scroll lock + ESC key */
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e) => { if (e.key === 'Escape') handleClose() }
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      document.removeEventListener('keydown', onKey)
    }
  }, [open, handleClose])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((cur) => ({ ...cur, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit?.({
      ...formData,
      source: 'landing_page_contact_modal',
      submittedAt: new Date().toISOString(),
    })
    setSubmitted(true)
    setFormData(initialFormState)
  }

  if (!open) return null

  return createPortal(
    <Box
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      sx={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: { xs: 1.5, sm: 3 },
        py: 3,
        '@keyframes backdropIn': {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        '@keyframes panelIn': {
          from: { opacity: 0, transform: 'scale(0.96) translateY(12px)' },
          to: { opacity: 1, transform: 'scale(1) translateY(0)' },
        },
      }}
    >
      {/* Backdrop */}
      <Box
        aria-hidden
        onClick={handleClose}
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(2,21,13,0.88)',
          backdropFilter: { xs: 'none', md: 'blur(18px)' },
          WebkitBackdropFilter: { xs: 'none', md: 'blur(18px)' },
          animation: { xs: 'none', md: 'backdropIn 0.2s ease' },
        }}
      />

      {/* Panel */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          maxWidth: 680,
          maxHeight: 'calc(100dvh - 32px)',
          overflow: 'hidden',
          overflowX: 'hidden',
          borderRadius: { xs: '22px', sm: '30px' },
          border: '1px solid rgba(242,100,51,0.34)',
          background: '#EEF3CD',
          boxShadow: '0 34px 100px rgba(0,34,19,0.38)',
          animation: { xs: 'none', md: 'panelIn 0.26s cubic-bezier(0.34,1.4,0.64,1)' },
        }}
      >
        {/* Noise grain */}
        <Box
          aria-hidden
          sx={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            opacity: 0.035,
            backgroundImage: NOISE,
            backgroundRepeat: 'repeat',
            backgroundSize: '200px 200px',
            borderRadius: 'inherit',
          }}
        />
        {/* Soft brand wash */}
        <Box
          aria-hidden
          sx={{
            position: 'absolute',
            top: '-36%',
            right: '-24%',
            width: '74%',
            height: '74%',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(242,100,51,0.16) 0%, rgba(242,100,51,0.06) 38%, transparent 70%)',
            filter: { xs: 'none', md: 'blur(46px)' },
            pointerEvents: 'none',
          }}
        />
        {/* Shimmer top line */}
        <Box
          aria-hidden
          sx={{
            position: 'absolute',
            top: 0,
            left: 32,
            right: 32,
            height: '2px',
            background: '#F26433',
            opacity: 0.7,
          }}
        />

        {/* Content */}
        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            p: { xs: '22px 18px', sm: '30px', md: '30px 38px' },
          }}
        >
          {/* Header row */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              mb: { xs: 2.4, sm: 2.8 },
            }}
          >
            <Box
              component="img"
              src="/images/logo.svg"
              alt="Speekr.ai"
              title="Speekr.ai logo"
              loading="lazy"
              decoding="async"
              sx={{
                width: 116,
                filter: 'brightness(0) saturate(100%) invert(17%) sepia(34%) saturate(1031%) hue-rotate(104deg) brightness(92%) contrast(97%)',
              }}
            />

            <Box
              component="button"
              type="button"
              onClick={handleClose}
              aria-label="Close"
              sx={{
                width: 42,
                height: 42,
                flexShrink: 0,
                borderRadius: '50%',
                border: '1px solid rgba(7,66,37,0.14)',
                background: 'rgba(7,66,37,0.04)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                fontFamily: 'inherit',
                transition: 'background 0.2s ease, border-color 0.2s ease',
                '&:hover': {
                  background: 'rgba(7,66,37,0.08)',
                  borderColor: 'rgba(7,66,37,0.24)',
                },
              }}
            >
              <X size={17} color="#074225" aria-hidden />
            </Box>
          </Box>

          {submitted ? (
            <SuccessState onClose={handleClose} ui={ui} />
          ) : (
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{
                maxHeight: { xs: 'calc(100dvh - 132px)', sm: 'none' },
                overflowY: { xs: 'auto', sm: 'visible' },
                overflowX: 'hidden',
                pr: { xs: 0.5, sm: 0 },
                pb: { xs: 0.5, sm: 0 },
                overscrollBehavior: 'contain',
                WebkitOverflowScrolling: 'touch',
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  pl: { xs: 2, sm: 2.5 },
                  mb: { xs: 2.4, sm: 2.8 },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 4,
                    bottom: 4,
                    left: 0,
                    width: 5,
                    borderRadius: '999px',
                    bgcolor: '#F26433',
                  },
                }}
              >
                <Typography
                  id="contact-modal-title"
                  component="h2"
                  sx={{
                    m: 0,
                    fontSize: { xs: 32, sm: 40 },
                    fontWeight: 900,
                    letterSpacing: 0,
                    lineHeight: 1,
                    color: '#074225',
                    mb: 0.8,
                    fontFamily: (theme) => theme.palette.brand.fontHeadline,
                  }}
                >
                  {ui.titleA}{' '}
                  <Box component="span" sx={{ color: '#F26433' }}>
                    {ui.titleB}
                  </Box>
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: 14.5, sm: 15.5 },
                    lineHeight: 1.5,
                    color: 'rgba(7,66,37,0.68)',
                    fontWeight: 650,
                    maxWidth: 520,
                  }}
                >
                  {ui.subtitle}
                </Typography>
              </Box>

              <Box
                sx={{
                  borderRadius: { xs: '18px', sm: '22px' },
                  border: '1px solid rgba(7,66,37,0.14)',
                  bgcolor: 'rgba(7,66,37,0.035)',
                  p: { xs: 1.5, sm: 1.8 },
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.72)',
                }}
              >
                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))' },
                    gap: 1.45,
                  }}
                >
                  <Field
                    id="cm-name"
                    label={ui.fields.name[0]}
                    required
                    name="name"
                    type="text"
                    placeholder={ui.fields.name[1]}
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                  />
                  <Field
                    id="cm-email"
                    label={ui.fields.email[0]}
                    required
                    name="email"
                    type="email"
                    placeholder={ui.fields.email[1]}
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                  />
                  <Field
                    id="cm-company"
                    label={ui.fields.company[0]}
                    name="company"
                    type="text"
                    placeholder={ui.fields.company[1]}
                    value={formData.company}
                    onChange={handleChange}
                    autoComplete="organization"
                  />
                  <Field
                    id="cm-phone"
                    label={ui.fields.phone[0]}
                    name="phone"
                    type="tel"
                    placeholder={ui.fields.phone[1]}
                    value={formData.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                  />
                  <Box sx={{ gridColumn: '1 / -1' }}>
                    <Field
                      id="cm-message"
                      label={ui.fields.message[0]}
                      name="message"
                      multiline
                      placeholder={ui.fields.message[1]}
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </Box>
                </Box>

              </Box>

              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', sm: 'minmax(0, 1fr) auto' },
                  gap: 1.2,
                  mt: 1.5,
                  alignItems: 'stretch',
                }}
              >
                <Box
                  component="button"
                  type="submit"
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 1,
                    px: 3,
                    py: '13px',
                    borderRadius: '14px',
                    bgcolor: '#F26433',
                    border: 'none',
                    color: '#074225',
                    fontSize: 15.5,
                    fontWeight: 900,
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                    boxShadow: 'none',
                    transition: 'transform 0.22s ease, background-color 0.22s ease',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      bgcolor: '#F26433',
                      boxShadow: 'none',
                    },
                  }}
                >
                  <Send size={15} aria-hidden />
                  {ui.submit}
                </Box>
                <Box
                  component="button"
                  type="button"
                  onClick={handleClose}
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    px: 3,
                    py: '13px',
                    borderRadius: '14px',
                    border: '1px solid rgba(7,66,37,0.16)',
                    background: 'transparent',
                    color: 'rgba(7,66,37,0.68)',
                    fontSize: 15,
                    fontWeight: 800,
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                    transition: 'border-color 0.2s ease, color 0.2s ease, background 0.2s ease',
                    '&:hover': {
                      borderColor: 'rgba(7,66,37,0.28)',
                      color: '#074225',
                      background: 'rgba(7,66,37,0.05)',
                    },
                  }}
                >
                  {ui.cancel}
                </Box>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Box>,
    document.body
  )
}

export default ContactModal
