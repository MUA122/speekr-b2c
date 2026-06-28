import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Send, Sparkles, X, Check } from 'lucide-react'
import { commonCopy } from '../utils/i18n'

const NOISE = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`

const fieldInputSx = {
  display: 'block',
  width: '100%',
  background: 'rgba(238,243,205,0.05)',
  border: '1px solid rgba(238,243,205,0.09)',
  borderRadius: '12px',
  padding: '13px 16px',
  color: 'rgba(238,243,205,0.9)',
  fontSize: '14.5px',
  fontFamily: 'inherit',
  outline: 'none',
  boxSizing: 'border-box',
  transition: 'border-color 0.22s ease, box-shadow 0.22s ease, background 0.22s ease',
  '&::placeholder': { color: 'rgba(238,243,205,0.22)' },
  '&:focus': {
    background: 'rgba(242,100,51,0.04)',
    borderColor: 'rgba(242,100,51,0.38)',
    boxShadow: '0 0 0 3px rgba(242,100,51,0.07)',
  },
}

function Field({ label, required, multiline, rows = 4, id, ...rest }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.85, flex: '1 1 0', minWidth: 0 }}>
      <Box
        component="label"
        htmlFor={id}
        sx={{
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: 0.9,
          textTransform: 'uppercase',
          color: 'rgba(238,243,205,0.35)',
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
          minHeight: multiline ? 100 : undefined,
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
          background: 'rgba(242,100,51,0.1)',
          border: '1px solid rgba(242,100,51,0.25)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mx: 'auto',
          mb: 3,
          boxShadow: '0 0 40px rgba(242,100,51,0.14)',
        }}
      >
        <Check size={32} color="#F26433" strokeWidth={2.5} aria-hidden />
      </Box>
      <Typography
        component="h3"
        sx={{
          m: 0,
          fontSize: { xs: 26, sm: 30 },
          fontWeight: 900,
          letterSpacing: -1,
          color: 'rgba(238,243,205,0.96)',
          mb: 1.2,
        }}
      >
        {ui.sent}
      </Typography>
      <Typography
        sx={{
          fontSize: 15,
          lineHeight: 1.72,
          color: 'rgba(238,243,205,0.38)',
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
          background: 'linear-gradient(135deg, #F26433 0%, #F6845F 100%)',
          border: 'none',
          color: '#074225',
          fontSize: 15,
          fontWeight: 800,
          cursor: 'pointer',
          fontFamily: 'inherit',
          boxShadow: '0 0 0 1px rgba(242,100,51,0.3), 0 12px 36px rgba(242,100,51,0.2)',
          transition: 'transform 0.22s ease, box-shadow 0.22s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 0 0 1px rgba(242,100,51,0.5), 0 16px 48px rgba(242,100,51,0.3)',
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((cur) => ({ ...cur, [name]: value }))
  }

  const handleClose = () => {
    setSubmitted(false)
    onClose?.()
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
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
          animation: 'backdropIn 0.2s ease',
        }}
      />

      {/* Panel */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          maxWidth: 560,
          maxHeight: '90dvh',
          overflowY: 'auto',
          borderRadius: { xs: '20px', sm: '24px' },
          border: '1px solid rgba(238,243,205,0.08)',
          background: '#074225',
          boxShadow: '0 0 0 1px rgba(242,100,51,0.06), 0 60px 140px rgba(0,0,0,0.75)',
          animation: 'panelIn 0.26s cubic-bezier(0.34,1.4,0.64,1)',
        }}
      >
        {/* Noise grain */}
        <Box
          aria-hidden
          sx={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            opacity: 0.022,
            backgroundImage: NOISE,
            backgroundRepeat: 'repeat',
            backgroundSize: '200px 200px',
            borderRadius: 'inherit',
          }}
        />
        {/* Ambient lime orb */}
        <Box
          aria-hidden
          sx={{
            position: 'absolute',
            top: '-50%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '130%',
            height: '100%',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(242,100,51,0.07) 0%, transparent 70%)',
            filter: 'blur(50px)',
            pointerEvents: 'none',
          }}
        />
        {/* Shimmer top line */}
        <Box
          aria-hidden
          sx={{
            position: 'absolute',
            top: 0,
            left: '10%',
            right: '10%',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(242,100,51,0.32) 50%, transparent)',
          }}
        />

        {/* Content */}
        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            p: { xs: '28px 22px', sm: '36px 36px' },
          }}
        >
          {/* Header row */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              mb: { xs: 3, sm: 3.5 },
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.4 }}>
              <Box
                component="img"
                src="/images/logo.svg"
                alt="Speekr.ai"
                loading="lazy"
                decoding="async"
                sx={{ width: 100, filter: 'brightness(0) invert(1)', opacity: 0.88 }}
              />
              <Box
                aria-hidden
                sx={{
                  width: 30,
                  height: 30,
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                  background: 'rgba(242,100,51,0.1)',
                  border: '1px solid rgba(242,100,51,0.2)',
                }}
              >
                <Sparkles size={14} color="#F26433" aria-hidden />
              </Box>
            </Box>

            <Box
              component="button"
              type="button"
              onClick={handleClose}
              aria-label="Close"
              sx={{
                width: 36,
                height: 36,
                flexShrink: 0,
                borderRadius: '50%',
                border: '1px solid rgba(238,243,205,0.08)',
                background: 'rgba(238,243,205,0.04)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                fontFamily: 'inherit',
                transition: 'background 0.2s ease, border-color 0.2s ease',
                '&:hover': {
                  background: 'rgba(238,243,205,0.09)',
                  borderColor: 'rgba(238,243,205,0.15)',
                },
              }}
            >
              <X size={16} color="rgba(238,243,205,0.55)" aria-hidden />
            </Box>
          </Box>

          {submitted ? (
            <SuccessState onClose={handleClose} ui={ui} />
          ) : (
            <Box component="form" onSubmit={handleSubmit} noValidate>
              {/* Title */}
              <Typography
                id="contact-modal-title"
                component="h2"
                sx={{
                  m: 0,
                  fontSize: { xs: 26, sm: 30 },
                  fontWeight: 900,
                  letterSpacing: { xs: -0.8, sm: -1.2 },
                  lineHeight: 1.1,
                  color: 'rgba(238,243,205,0.96)',
                  mb: 0.9,
                }}
              >
                {ui.titleA}{' '}
                <Box component="span" sx={{ color: '#F26433' }}>{ui.titleB}</Box>
              </Typography>
              <Typography
                sx={{
                  fontSize: 14,
                  lineHeight: 1.65,
                  color: 'rgba(238,243,205,0.35)',
                  mb: { xs: 3, sm: 3.5 },
                }}
              >
                {ui.subtitle}
              </Typography>

              {/* Fields */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.2 }}>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2 }}>
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
                </Box>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2 }}>
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
                </Box>
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

              {/* Buttons */}
              <Box
                sx={{
                  display: 'flex',
                  gap: 1.5,
                  mt: { xs: 3, sm: 3.5 },
                  flexDirection: { xs: 'column', sm: 'row' },
                }}
              >
                <Box
                  component="button"
                  type="submit"
                  sx={{
                    flex: { sm: 1 },
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 1,
                    px: 3,
                    py: '14px',
                    borderRadius: '100px',
                    background: 'linear-gradient(135deg, #F26433 0%, #F6845F 100%)',
                    border: 'none',
                    color: '#074225',
                    fontSize: 15,
                    fontWeight: 800,
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                    boxShadow: '0 0 0 1px rgba(242,100,51,0.3), 0 12px 36px rgba(242,100,51,0.2)',
                    transition: 'transform 0.22s ease, box-shadow 0.22s ease',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 0 0 1px rgba(242,100,51,0.5), 0 16px 48px rgba(242,100,51,0.3)',
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
                    py: '14px',
                    borderRadius: '100px',
                    border: '1px solid rgba(238,243,205,0.1)',
                    background: 'transparent',
                    color: 'rgba(238,243,205,0.45)',
                    fontSize: 15,
                    fontWeight: 600,
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                    transition: 'border-color 0.2s ease, color 0.2s ease, background 0.2s ease',
                    '&:hover': {
                      borderColor: 'rgba(238,243,205,0.18)',
                      color: 'rgba(238,243,205,0.75)',
                      background: 'rgba(238,243,205,0.04)',
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
