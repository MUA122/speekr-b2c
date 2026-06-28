import { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Check, X, Star, Zap, ArrowRight } from 'lucide-react'
import { splitPrice } from '../utils/pricing'
import { commonCopy, pricingCopy } from '../utils/i18n'

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
    { id: 'starter-m', name: 'Speekr Starter', priceKey: 'starterMonthly', period: 'per month', audience: 'For Individuals', highlight: false, href: 'https://app.speekr.ai/auth/sign-up/', features: STARTER_FEATURES },
    { id: 'pro-m', name: 'Speekr Pro Unlimited', priceKey: 'proMonthly', period: 'per month', audience: 'For Individuals', highlight: true, badge: 'Most Popular', href: 'https://app.speekr.ai/auth/sign-up/', features: PRO_FEATURES },
  ],
  annual: [
    { id: 'starter-a', name: 'Speekr Starter', priceKey: 'starterAnnual', period: 'per year', audience: 'For Individuals', highlight: false, href: 'https://app.speekr.ai/auth/sign-up/', features: STARTER_FEATURES },
    { id: 'pro-a', name: 'Speekr Pro Unlimited', priceKey: 'proAnnual', period: 'per year', audience: 'For Individuals', highlight: true, badge: 'Most Popular', href: 'https://app.speekr.ai/auth/sign-up/', features: PRO_FEATURES },
  ],
}

function FeatureIcon({ type }) {
  if (type === 'check') {
    return (
      <Box sx={{ width: 22, height: 22, borderRadius: '50%', bgcolor: 'rgba(242,100,51,0.1)', border: '1px solid rgba(242,100,51,0.22)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <Check size={13} color="#F26433" strokeWidth={2.5} aria-hidden />
      </Box>
    )
  }
  if (type === 'x') {
    return (
      <Box sx={{ width: 22, height: 22, borderRadius: '50%', bgcolor: 'rgba(7,66,37,0.04)', border: '1px solid rgba(7,66,37,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <X size={12} color="rgba(7,66,37,0.3)" strokeWidth={2} aria-hidden />
      </Box>
    )
  }
  return (
    <Box sx={{ width: 22, height: 22, borderRadius: '50%', bgcolor: 'rgba(242,100,51,0.14)', border: '1px solid rgba(242,100,51,0.32)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
      <Star size={11} color="#F26433" fill="#F26433" aria-hidden />
    </Box>
  )
}

function PricingCard({ plan, prices, copy, common }) {
  const { name, priceKey, period, audience, highlight, badge, href, features } = plan
  const { prefix, amount } = splitPrice(prices[priceKey])
  return (
    <Box
      className="premium-card"
      sx={{
        position: 'relative',
        flex: '1 1 0',
        display: 'flex',
        flexDirection: 'column',
        p: { xs: '28px 24px 24px', md: '38px 36px 32px' },
        borderRadius: { xs: '20px', md: '24px' },
        border: highlight ? '1px solid rgba(242,100,51,0.3)' : '1px solid rgba(7,66,37,0.12)',
        bgcolor: '#EEF3CD',
        overflow: 'hidden',
        boxShadow: highlight
          ? '0 24px 70px rgba(242,100,51,0.16), 0 0 0 1px rgba(242,100,51,0.12)'
          : '0 18px 50px rgba(7,66,37,0.08)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'translateY(-3px)',
          boxShadow: highlight
            ? '0 30px 82px rgba(242,100,51,0.2), 0 0 0 1px rgba(242,100,51,0.18)'
            : '0 26px 70px rgba(7,66,37,0.12)',
        },
      }}
    >
      {/* Lime ambient top glow for Pro */}
      <Box
        component="img"
        src="/images/brand-patterns/pricing-card-bg.png"
        alt=""
        aria-hidden
        loading="lazy"
        decoding="async"
        sx={{
          position: 'absolute',
          top: -36,
          right: -60,
          width: { xs: 260, md: 340 },
          opacity: highlight ? 0.1 : 0.06,
          pointerEvents: 'none',
        }}
      />
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
            background: 'radial-gradient(circle, rgba(242,100,51,0.1) 0%, transparent 70%)',
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
            bgcolor: '#F26433',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 0.6,
          }}
        >
          <Zap size={10} color="#074225" fill="#074225" aria-hidden />
        <Typography sx={{ fontSize: 10.5, fontWeight: 800, color: '#074225', letterSpacing: 0.4, lineHeight: 1 }}>
            {copy.mostPopular}
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
            color: highlight ? '#F26433' : '#074225',
            mb: 0.6,
            lineHeight: 1.2,
          }}
        >
          {name}
        </Typography>
        <Typography sx={{ fontSize: 12, fontWeight: 500, color: 'rgba(7,66,37,0.46)' }}>
          {audience}
        </Typography>
      </Box>

      {/* Price */}
      <Box sx={{ mb: { xs: 3, md: 3.5 } }}>
        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 0.4, lineHeight: 1 }}>
          <Typography sx={{ fontSize: 22, fontWeight: 800, color: 'rgba(7,66,37,0.56)', lineHeight: 1, mt: '10px' }}>
            {prefix}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 64, md: 76 },
              fontFamily: (theme) => theme.palette.brand.fontHeadline,
              fontWeight: 900,
              letterSpacing: { xs: -3, md: -4 },
              lineHeight: 0.9,
              color: '#074225',
            }}
          >
            {amount}
          </Typography>
        </Box>
        <Typography sx={{ fontSize: 12.5, fontWeight: 500, color: 'rgba(7,66,37,0.42)', mt: 1 }}>
          {period}
        </Typography>
      </Box>

      {/* Divider */}
      <Box
        sx={{
          height: '1px',
          background: highlight
            ? 'linear-gradient(90deg, rgba(242,100,51,0.12), rgba(242,100,51,0.04))'
            : 'rgba(7,66,37,0.12)',
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
                color: type === 'x' ? 'rgba(7,66,37,0.32)' : 'rgba(7,66,37,0.78)',
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
            ? 'linear-gradient(135deg, #F26433 0%, #F6845F 100%)'
            : '#EEF3CD',
          border: highlight ? 'none' : '1px solid rgba(7,66,37,0.16)',
          color: highlight ? '#074225' : '#074225',
          fontSize: { xs: 14.5, md: 15 },
          fontWeight: 800,
          textDecoration: 'none',
          boxShadow: highlight ? '0 0 0 1px rgba(242,100,51,0.3), 0 14px 44px rgba(242,100,51,0.2)' : 'none',
          transition: 'transform 0.22s ease, box-shadow 0.22s ease, background 0.22s ease',
          '&:hover': highlight
            ? { transform: 'translateY(-2px)', boxShadow: '0 0 0 1px rgba(242,100,51,0.5), 0 20px 60px rgba(242,100,51,0.3)' }
            : { background: 'rgba(242,100,51,0.08)', transform: 'translateY(-1px)' },
        }}
      >
        {common.startFreeTrial}
        <ArrowRight size={16} aria-hidden />
      </Box>
    </Box>
  )
}

export default function PricingSection({ locale = 'en', prices }) {
  const [billing, setBilling] = useState('monthly')
  const copy = pricingCopy[locale]
  const common = commonCopy[locale]
  const starterFeatures = STARTER_FEATURES.map((item, index) => ({ ...item, text: copy.starterFeatures[index] }))
  const proFeatures = PRO_FEATURES.map((item, index) => ({ ...item, text: copy.proFeatures[index] }))
  const plans = {
    monthly: [
      { id: 'starter-m', name: copy.starter, priceKey: 'starterMonthly', period: copy.perMonth, audience: copy.forIndividuals, highlight: false, href: 'https://app.speekr.ai/auth/sign-up/', features: starterFeatures },
      { id: 'pro-m', name: copy.pro, priceKey: 'proMonthly', period: copy.perMonth, audience: copy.forIndividuals, highlight: true, badge: copy.mostPopular, href: 'https://app.speekr.ai/auth/sign-up/', features: proFeatures },
    ],
    annual: [
      { id: 'starter-a', name: copy.starter, priceKey: 'starterAnnual', period: copy.perYear, audience: copy.forIndividuals, highlight: false, href: 'https://app.speekr.ai/auth/sign-up/', features: starterFeatures },
      { id: 'pro-a', name: copy.pro, priceKey: 'proAnnual', period: copy.perYear, audience: copy.forIndividuals, highlight: true, badge: copy.mostPopular, href: 'https://app.speekr.ai/auth/sign-up/', features: proFeatures },
    ],
  }

  return (
    <Box
      sx={{
        bgcolor: '#EEF3CD',
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
          bgcolor: '#EEF3CD',
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
            background: 'linear-gradient(90deg, transparent, rgba(242,100,51,0.25) 50%, transparent)',
          },
        }}
      >
        {/* Ambient orb — lime top center */}
        <Box
          component="img"
          src="/images/brand-patterns/line-pattern.png"
          alt=""
          aria-hidden
          loading="lazy"
          decoding="async"
          sx={{
            position: 'absolute',
            bottom: { xs: -18, md: 8 },
            left: { xs: '-35%', md: '-8%' },
            width: { xs: 520, md: 700 },
            opacity: 0.08,
            pointerEvents: 'none',
          }}
        />
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
            background: 'radial-gradient(circle, rgba(242,100,51,0.06) 0%, transparent 60%)',
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
            background: 'radial-gradient(circle, rgba(242,100,51,0.07) 0%, transparent 65%)',
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
                border: '1px solid rgba(242,100,51,0.18)',
                bgcolor: 'rgba(242,100,51,0.06)',
                mb: 3,
              }}
            >
              <Zap size={12} color="#F26433" fill="#F26433" aria-hidden />
              <Typography
                sx={{ fontSize: 11, fontWeight: 800, letterSpacing: 1.8, textTransform: 'uppercase', color: '#F26433' }}
              >
                {copy.badge}
              </Typography>
            </Box>

            <Typography
              id="pricing-title"
              component="h2"
              sx={{
                m: 0,
                fontSize: { xs: 34, sm: 46, md: 56, lg: 64 },
                fontFamily: (theme) => theme.palette.brand.fontHeadline,
                fontWeight: 900,
                letterSpacing: { xs: -1.5, md: -2.5 },
                lineHeight: 1.04,
                color: '#074225',
              }}
            >
              {copy.title}{' '}
              <Box component="span" sx={{ color: '#F26433' }}>
                {copy.accent}
              </Box>
            </Typography>

            <Typography
              sx={{
                mt: { xs: 2.5, md: 3 },
                fontSize: { xs: 15, md: 16.5 },
                lineHeight: 1.72,
                color: 'rgba(7,66,37,0.5)',
                maxWidth: 500,
                mx: 'auto',
              }}
            >
              {copy.subtitle}
            </Typography>
          </Box>

          {/* ── Billing toggle ── */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: { xs: 6, md: 8 } }}>
            <Box
              sx={{
                display: 'inline-flex',
                borderRadius: '100px',
                border: '1px solid rgba(7,66,37,0.12)',
                bgcolor: '#EEF3CD',
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
                    bgcolor: billing === b ? '#F26433' : 'transparent',
                    color: billing === b ? '#074225' : 'rgba(7,66,37,0.6)',
                    boxShadow: billing === b ? '0 2px 14px rgba(242,100,51,0.28)' : 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 1,
                  }}
                >
                  {b === 'monthly' ? copy.monthly : copy.annual}
                  {b === 'annual' && (
                    <Box
                      sx={{
                        px: 1,
                        py: '3px',
                        borderRadius: '100px',
                        bgcolor: billing === 'annual' ? 'rgba(7,66,37,0.28)' : 'rgba(242,100,51,0.12)',
                        border: billing === 'annual' ? 'none' : '1px solid rgba(242,100,51,0.2)',
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: 10,
                          fontWeight: 800,
                          letterSpacing: 0.3,
                          color: billing === 'annual' ? 'rgba(7,66,37,0.8)' : '#F26433',
                          lineHeight: 1,
                        }}
                      >
                        {copy.save14}
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
            {plans[billing].map((plan) => (
              <PricingCard key={plan.id} plan={plan} prices={prices} copy={copy} common={common} />
            ))}
          </Box>

        </Box>
      </Box>
    </Box>
  )
}
