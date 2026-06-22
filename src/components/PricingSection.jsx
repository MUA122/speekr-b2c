import { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Check, X, Star, Zap, ArrowRight } from 'lucide-react'

const NOISE = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`

const STARTER_FEATURES = [
  { text: '3 Monthly Rotating Learning Journeys', type: 'check' },
  { text: 'Unlimited Free Form Practice', type: 'check' },
  { text: '3 AI Roleplay Sessions per Week', type: 'check' },
  { text: 'Instant AI Coach Feedback', type: 'check' },
  { text: 'Custom Scenario & Persona Builder', type: 'x' },
  { text: 'Live Community Practice', type: 'x' },
]

const PRO_FEATURES = [
  { text: 'Full Access to Learning Journeys Catalogue', type: 'star' },
  { text: 'Unlimited Free Form Practice', type: 'check' },
  { text: 'Unlimited AI Roleplay Practice Sessions', type: 'check' },
  { text: 'Instant AI Coach Feedback', type: 'check' },
  { text: 'Custom Scenario & Persona Builder', type: 'star' },
  { text: 'Live Community Practice', type: 'star' },
]

const PLANS = {
  monthly: [
    { id: 'starter-m', name: 'Speekr Starter', price: '23', period: 'per month', audience: 'For Individuals', highlight: false, href: 'https://app.speekr.ai/auth/sign-up/', features: STARTER_FEATURES },
    { id: 'pro-m', name: 'Speekr Pro Unlimited', price: '29', period: 'per month', audience: 'For Individuals', highlight: true, badge: 'Most Popular', href: 'https://app.speekr.ai/auth/sign-up/', features: PRO_FEATURES },
  ],
  annual: [
    { id: 'starter-a', name: 'Speekr Starter', price: '240', period: 'per year', audience: 'For Individuals', highlight: false, href: 'https://app.speekr.ai/auth/sign-up/', features: STARTER_FEATURES },
    { id: 'pro-a', name: 'Speekr Pro Unlimited', price: '299', period: 'per year', audience: 'For Individuals', highlight: true, badge: 'Most Popular', href: 'https://app.speekr.ai/auth/sign-up/', features: PRO_FEATURES },
  ],
}

function FeatureIcon({ type }) {
  if (type === 'check') {
    return (
      <Box sx={{ width: 22, height: 22, borderRadius: '50%', bgcolor: 'rgba(201,245,104,0.1)', border: '1px solid rgba(201,245,104,0.22)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <Check size={13} color="#c9f568" strokeWidth={2.5} aria-hidden />
      </Box>
    )
  }
  if (type === 'x') {
    return (
      <Box sx={{ width: 22, height: 22, borderRadius: '50%', bgcolor: 'rgba(255,255,255,0.035)', border: '1px solid rgba(255,255,255,0.07)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <X size={12} color="rgba(247,255,232,0.18)" strokeWidth={2} aria-hidden />
      </Box>
    )
  }
  return (
    <Box sx={{ width: 22, height: 22, borderRadius: '50%', bgcolor: 'rgba(201,245,104,0.14)', border: '1px solid rgba(201,245,104,0.32)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
      <Star size={11} color="#c9f568" fill="#c9f568" aria-hidden />
    </Box>
  )
}

function PricingCard({ plan }) {
  const { name, price, period, audience, highlight, badge, href, features } = plan
  return (
    <Box
      sx={{
        position: 'relative',
        flex: '1 1 0',
        display: 'flex',
        flexDirection: 'column',
        p: { xs: '28px 24px 24px', md: '38px 36px 32px' },
        borderRadius: { xs: '20px', md: '24px' },
        border: highlight ? '1px solid rgba(201,245,104,0.18)' : '1px solid rgba(255,255,255,0.06)',
        bgcolor: highlight ? 'rgba(201,245,104,0.032)' : 'rgba(255,255,255,0.028)',
        backdropFilter: 'blur(40px)',
        overflow: 'hidden',
        boxShadow: highlight
          ? '0 0 0 1px rgba(201,245,104,0.06), 0 40px 100px rgba(0,0,0,0.45), 0 0 80px rgba(201,245,104,0.05)'
          : '0 20px 60px rgba(0,0,0,0.32)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'translateY(-3px)',
          boxShadow: highlight
            ? '0 0 0 1px rgba(201,245,104,0.14), 0 48px 120px rgba(0,0,0,0.5), 0 0 100px rgba(201,245,104,0.08)'
            : '0 28px 80px rgba(0,0,0,0.4)',
        },
      }}
    >
      {/* Lime ambient top glow for Pro */}
      {highlight && (
        <Box
          aria-hidden
          sx={{
            position: 'absolute',
            top: '-30%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '140%',
            height: '70%',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(201,245,104,0.1) 0%, transparent 70%)',
            filter: 'blur(50px)',
            pointerEvents: 'none',
          }}
        />
      )}

      {/* Most Popular badge */}
      {badge && (
        <Box
          sx={{
            position: 'absolute',
            top: 20,
            right: 20,
            px: 1.5,
            py: 0.55,
            borderRadius: '100px',
            bgcolor: '#c9f568',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 0.6,
          }}
        >
          <Zap size={10} color="#063323" fill="#063323" aria-hidden />
          <Typography sx={{ fontSize: 10.5, fontWeight: 800, color: '#063323', letterSpacing: 0.4, lineHeight: 1 }}>
            {badge}
          </Typography>
        </Box>
      )}

      {/* Plan name + audience */}
      <Box sx={{ mb: { xs: 3, md: 3.5 } }}>
        <Typography
          sx={{
            fontSize: { xs: 17, md: 19 },
            fontWeight: 800,
            letterSpacing: -0.3,
            color: highlight ? '#c9f568' : 'rgba(247,255,232,0.82)',
            mb: 0.6,
            lineHeight: 1.2,
          }}
        >
          {name}
        </Typography>
        <Typography sx={{ fontSize: 12, fontWeight: 500, color: 'rgba(247,255,232,0.3)' }}>
          {audience}
        </Typography>
      </Box>

      {/* Price */}
      <Box sx={{ mb: { xs: 3, md: 3.5 } }}>
        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 0.4, lineHeight: 1 }}>
          <Typography sx={{ fontSize: 22, fontWeight: 800, color: 'rgba(247,255,232,0.45)', lineHeight: 1, mt: '10px' }}>
            $
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 64, md: 76 },
              fontWeight: 900,
              letterSpacing: { xs: -3, md: -4 },
              lineHeight: 0.9,
              color: 'rgba(247,255,232,0.96)',
            }}
          >
            {price}
          </Typography>
        </Box>
        <Typography sx={{ fontSize: 12.5, fontWeight: 500, color: 'rgba(247,255,232,0.28)', mt: 1 }}>
          {period}
        </Typography>
      </Box>

      {/* Divider */}
      <Box
        sx={{
          height: '1px',
          background: highlight
            ? 'linear-gradient(90deg, rgba(201,245,104,0.12), rgba(201,245,104,0.04))'
            : 'rgba(255,255,255,0.055)',
          mb: { xs: 3, md: 3.5 },
        }}
      />

      {/* Feature list */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, flex: 1, mb: { xs: 4, md: 4.5 } }}>
        {features.map(({ text, type }) => (
          <Box key={text} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <FeatureIcon type={type} />
            <Typography
              sx={{
                fontSize: { xs: 13.5, md: 14 },
                fontWeight: type === 'x' ? 400 : 600,
                color: type === 'x' ? 'rgba(247,255,232,0.22)' : 'rgba(247,255,232,0.8)',
                lineHeight: 1.4,
              }}
            >
              {text}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* CTA */}
      <Box
        component="a"
        href={href}
        target="_blank"
        rel="noreferrer"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 1,
          px: 3,
          py: '14px',
          borderRadius: '100px',
          background: highlight
            ? 'linear-gradient(135deg, #c9f568 0%, #a5e02a 100%)'
            : 'rgba(255,255,255,0.055)',
          border: highlight ? 'none' : '1px solid rgba(255,255,255,0.09)',
          color: highlight ? '#063323' : 'rgba(247,255,232,0.75)',
          fontSize: { xs: 14.5, md: 15 },
          fontWeight: 800,
          textDecoration: 'none',
          boxShadow: highlight ? '0 0 0 1px rgba(201,245,104,0.3), 0 14px 44px rgba(201,245,104,0.2)' : 'none',
          transition: 'transform 0.22s ease, box-shadow 0.22s ease, background 0.22s ease',
          '&:hover': highlight
            ? { transform: 'translateY(-2px)', boxShadow: '0 0 0 1px rgba(201,245,104,0.5), 0 20px 60px rgba(201,245,104,0.3)' }
            : { background: 'rgba(255,255,255,0.09)', transform: 'translateY(-1px)' },
        }}
      >
        Start Free Trial
        <ArrowRight size={16} aria-hidden />
      </Box>
    </Box>
  )
}

export default function PricingSection() {
  const [billing, setBilling] = useState('monthly')

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
        id="pricing"
        aria-labelledby="pricing-title"
        sx={{
          position: 'relative',
          bgcolor: '#0b1e12',
          borderRadius: { xs: '24px', md: '32px' },
          overflow: 'hidden',
          px: { xs: 2.5, sm: 4, md: 6, lg: 8 },
          pt: { xs: 8, md: 12 },
          pb: { xs: 8, md: 12 },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: '10%',
            right: '10%',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(201,245,104,0.25) 50%, transparent)',
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
            width: '80vw',
            height: '80vw',
            maxWidth: 900,
            maxHeight: 900,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(201,245,104,0.06) 0%, transparent 60%)',
            filter: 'blur(80px)',
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
            width: '50vw',
            height: '50vw',
            maxWidth: 580,
            maxHeight: 580,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,107,47,0.07) 0%, transparent 65%)',
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

        <Box sx={{ position: 'relative', zIndex: 1, maxWidth: 960, mx: 'auto' }}>

          {/* ── Heading ── */}
          <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
            {/* Badge */}
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                px: 2,
                py: 0.75,
                borderRadius: '100px',
                border: '1px solid rgba(201,245,104,0.18)',
                bgcolor: 'rgba(201,245,104,0.06)',
                mb: 3,
              }}
            >
              <Zap size={12} color="#c9f568" fill="#c9f568" aria-hidden />
              <Typography
                sx={{ fontSize: 11, fontWeight: 800, letterSpacing: 1.8, textTransform: 'uppercase', color: '#c9f568' }}
              >
                Simple Pricing
              </Typography>
            </Box>

            <Typography
              id="pricing-title"
              component="h2"
              sx={{
                m: 0,
                fontSize: { xs: 34, sm: 46, md: 56, lg: 64 },
                fontWeight: 900,
                letterSpacing: { xs: -1.5, md: -2.5 },
                lineHeight: 1.04,
                color: 'rgba(247,255,232,0.96)',
              }}
            >
              Simple Plans.{' '}
              <Box component="span" sx={{ color: '#c9f568' }}>
                Serious Results.
              </Box>
            </Typography>

            <Typography
              sx={{
                mt: { xs: 2.5, md: 3 },
                fontSize: { xs: 15, md: 16.5 },
                lineHeight: 1.72,
                color: 'rgba(247,255,232,0.36)',
                maxWidth: 500,
                mx: 'auto',
              }}
            >
              Speekr for professional individuals looking to practice communication, presentation, and soft-skills.
            </Typography>
          </Box>

          {/* ── Billing toggle ── */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: { xs: 6, md: 8 } }}>
            <Box
              sx={{
                display: 'inline-flex',
                borderRadius: '100px',
                border: '1px solid rgba(255,255,255,0.08)',
                bgcolor: 'rgba(255,255,255,0.03)',
                p: '4px',
                gap: '4px',
              }}
            >
              {(['monthly', 'annual']).map((b) => (
                <Box
                  key={b}
                  component="button"
                  onClick={() => setBilling(b)}
                  sx={{
                    position: 'relative',
                    px: { xs: 2.5, md: 3.5 },
                    py: '10px',
                    borderRadius: '100px',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: { xs: 13.5, md: 14 },
                    fontWeight: 700,
                    transition: 'background 0.25s ease, color 0.25s ease, box-shadow 0.25s ease',
                    bgcolor: billing === b ? '#c9f568' : 'transparent',
                    color: billing === b ? '#063323' : 'rgba(247,255,232,0.45)',
                    boxShadow: billing === b ? '0 2px 14px rgba(201,245,104,0.28)' : 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 1,
                  }}
                >
                  {b === 'monthly' ? 'Monthly' : 'Annually'}
                  {b === 'annual' && (
                    <Box
                      sx={{
                        px: 1,
                        py: '3px',
                        borderRadius: '100px',
                        bgcolor: billing === 'annual' ? 'rgba(6,51,35,0.28)' : 'rgba(201,245,104,0.12)',
                        border: billing === 'annual' ? 'none' : '1px solid rgba(201,245,104,0.2)',
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: 10,
                          fontWeight: 800,
                          letterSpacing: 0.3,
                          color: billing === 'annual' ? 'rgba(6,51,35,0.8)' : '#c9f568',
                          lineHeight: 1,
                        }}
                      >
                        Save 14%
                      </Typography>
                    </Box>
                  )}
                </Box>
              ))}
            </Box>
          </Box>

          {/* ── Pricing cards ── */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: { xs: 2.5, md: 3 },
              alignItems: 'stretch',
            }}
          >
            {PLANS[billing].map((plan) => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
          </Box>

        </Box>
      </Box>
    </Box>
  )
}
