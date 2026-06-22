import { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Check, ArrowRight, Phone, Users, Building2, Zap } from 'lucide-react'

const NOISE = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`

const TEAMS_FEATURES = [
  { text: 'Full Access to Learning Journey Catalog', note: 'for all users' },
  { text: '5 AI Roleplay Sessions per User', note: 'monthly' },
  { text: '1:1 AI Coaching & Feedback' },
  { text: 'Custom Scenario & Persona Builder' },
  { text: 'Custom Dashboards' },
]

const ENTERPRISE_FEATURES = [
  { text: 'Full Access to Learning Journey Catalog', note: 'for all users' },
  { text: 'Unlimited Custom Scenarios' },
  { text: 'Custom Dashboards' },
  { text: 'Custom Coaching and Feedback' },
  { text: 'Dedicated Account Manager' },
  { text: 'Advanced Security & SSO' },
]

function LimeCheck() {
  return (
    <Box
      sx={{
        width: 22,
        height: 22,
        borderRadius: '50%',
        bgcolor: 'rgba(201,245,104,0.1)',
        border: '1px solid rgba(201,245,104,0.22)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        mt: '1px',
      }}
    >
      <Check size={13} color="#c9f568" strokeWidth={2.5} aria-hidden />
    </Box>
  )
}

function OrangeCheck() {
  return (
    <Box
      sx={{
        width: 22,
        height: 22,
        borderRadius: '50%',
        bgcolor: 'rgba(255,107,47,0.1)',
        border: '1px solid rgba(255,107,47,0.22)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        mt: '1px',
      }}
    >
      <Check size={13} color="#ff6b2f" strokeWidth={2.5} aria-hidden />
    </Box>
  )
}

function FeatureRow({ text, note, CheckIcon }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
      <CheckIcon />
      <Typography
        sx={{ fontSize: { xs: 13.5, md: 14 }, fontWeight: 600, color: 'rgba(247,255,232,0.8)', lineHeight: 1.45 }}
      >
        {text}
        {note && (
          <Box
            component="span"
            sx={{ fontStyle: 'italic', fontWeight: 400, color: 'rgba(247,255,232,0.38)' }}
          >
            {' '}({note})
          </Box>
        )}
      </Typography>
    </Box>
  )
}

function TeamsCard({ billing }) {
  return (
    <Box
      sx={{
        position: 'relative',
        flex: '1 1 0',
        display: 'flex',
        flexDirection: 'column',
        p: { xs: '28px 24px 24px', md: '38px 36px 32px' },
        borderRadius: { xs: '20px', md: '24px' },
        border: '1px solid rgba(201,245,104,0.18)',
        bgcolor: 'rgba(201,245,104,0.032)',
        backdropFilter: 'blur(40px)',
        overflow: 'hidden',
        boxShadow:
          '0 0 0 1px rgba(201,245,104,0.06), 0 40px 100px rgba(0,0,0,0.45), 0 0 80px rgba(201,245,104,0.05)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'translateY(-3px)',
          boxShadow:
            '0 0 0 1px rgba(201,245,104,0.15), 0 48px 120px rgba(0,0,0,0.5), 0 0 100px rgba(201,245,104,0.08)',
        },
      }}
    >
      {/* Lime ambient top glow */}
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

      {/* Badge */}
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
        <Users size={10} color="#063323" aria-hidden />
        <Typography sx={{ fontSize: 10.5, fontWeight: 800, color: '#063323', letterSpacing: 0.4, lineHeight: 1 }}>
          Teams
        </Typography>
      </Box>

      {/* Plan name */}
      <Box sx={{ mb: { xs: 3, md: 3.5 } }}>
        <Typography
          sx={{
            fontSize: { xs: 17, md: 19 },
            fontWeight: 800,
            letterSpacing: -0.3,
            color: '#c9f568',
            mb: 0.6,
            lineHeight: 1.2,
          }}
        >
          Speekr Teams
        </Typography>
        <Typography sx={{ fontSize: 12, fontWeight: 500, color: 'rgba(247,255,232,0.3)' }}>
          Teams of 3–15 users
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
            {billing === 'monthly' ? '48' : '480'}
          </Typography>
        </Box>
        <Typography sx={{ fontSize: 12.5, fontWeight: 500, color: 'rgba(247,255,232,0.28)', mt: 1 }}>
          per user / {billing === 'monthly' ? 'month' : 'year'}
          {billing === 'annual' && (
            <Box
              component="span"
              sx={{
                ml: 1.5,
                px: 1,
                py: '3px',
                borderRadius: '100px',
                bgcolor: 'rgba(201,245,104,0.1)',
                border: '1px solid rgba(201,245,104,0.18)',
                fontSize: 10,
                fontWeight: 700,
                color: '#c9f568',
                letterSpacing: 0.3,
              }}
            >
              Save 17%
            </Box>
          )}
        </Typography>
      </Box>

      {/* Divider */}
      <Box
        sx={{
          height: '1px',
          background: 'linear-gradient(90deg, rgba(201,245,104,0.12), rgba(201,245,104,0.04))',
          mb: { xs: 3, md: 3.5 },
        }}
      />

      {/* Features */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, flex: 1, mb: { xs: 4, md: 4.5 } }}>
        {TEAMS_FEATURES.map(({ text, note }) => (
          <FeatureRow key={text} text={text} note={note} CheckIcon={LimeCheck} />
        ))}
      </Box>

      {/* CTA */}
      <Box
        component="a"
        href="https://app.speekr.ai/auth/teams/signup/"
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
          background: 'linear-gradient(135deg, #c9f568 0%, #a5e02a 100%)',
          color: '#063323',
          fontSize: { xs: 14.5, md: 15 },
          fontWeight: 800,
          textDecoration: 'none',
          boxShadow: '0 0 0 1px rgba(201,245,104,0.3), 0 14px 44px rgba(201,245,104,0.2)',
          transition: 'transform 0.22s ease, box-shadow 0.22s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 0 0 1px rgba(201,245,104,0.5), 0 20px 60px rgba(201,245,104,0.3)',
          },
        }}
      >
        Subscribe
        <ArrowRight size={16} aria-hidden />
      </Box>
    </Box>
  )
}

function EnterpriseCard({ onDemoClick }) {
  return (
    <Box
      sx={{
        position: 'relative',
        flex: '1 1 0',
        display: 'flex',
        flexDirection: 'column',
        p: { xs: '28px 24px 24px', md: '38px 36px 32px' },
        borderRadius: { xs: '20px', md: '24px' },
        border: '1px solid rgba(255,107,47,0.14)',
        bgcolor: 'rgba(255,107,47,0.022)',
        backdropFilter: 'blur(40px)',
        overflow: 'hidden',
        boxShadow: '0 0 0 1px rgba(255,107,47,0.04), 0 20px 60px rgba(0,0,0,0.32)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'translateY(-3px)',
          boxShadow: '0 0 0 1px rgba(255,107,47,0.12), 0 28px 80px rgba(0,0,0,0.42)',
        },
      }}
    >
      {/* Orange ambient top glow */}
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          top: '-30%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '140%',
          height: '60%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,107,47,0.08) 0%, transparent 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
        }}
      />

      {/* Badge */}
      <Box
        sx={{
          position: 'absolute',
          top: 20,
          right: 20,
          px: 1.5,
          py: 0.55,
          borderRadius: '100px',
          bgcolor: 'rgba(255,107,47,0.12)',
          border: '1px solid rgba(255,107,47,0.24)',
          display: 'inline-flex',
          alignItems: 'center',
          gap: 0.6,
        }}
      >
        <Building2 size={10} color="#ff6b2f" aria-hidden />
        <Typography sx={{ fontSize: 10.5, fontWeight: 800, color: '#ff6b2f', letterSpacing: 0.4, lineHeight: 1 }}>
          Enterprise
        </Typography>
      </Box>

      {/* Plan name */}
      <Box sx={{ mb: { xs: 3, md: 3.5 } }}>
        <Typography
          sx={{
            fontSize: { xs: 17, md: 19 },
            fontWeight: 800,
            letterSpacing: -0.3,
            color: '#ff6b2f',
            mb: 0.6,
            lineHeight: 1.2,
          }}
        >
          Speekr Enterprise
        </Typography>
        <Typography sx={{ fontSize: 12, fontWeight: 500, color: 'rgba(247,255,232,0.3)' }}>
          Large-scale, corporate deployment
        </Typography>
      </Box>

      {/* Price: Custom */}
      <Box sx={{ mb: { xs: 3, md: 3.5 } }}>
        <Typography
          sx={{
            fontSize: { xs: 64, md: 76 },
            fontWeight: 900,
            letterSpacing: { xs: -3, md: -4 },
            lineHeight: 0.9,
            color: 'rgba(247,255,232,0.96)',
          }}
        >
          Custom
        </Typography>
        <Typography sx={{ fontSize: 12.5, fontWeight: 500, color: 'rgba(247,255,232,0.28)', mt: 1 }}>
          Tailored to your organization
        </Typography>
      </Box>

      {/* Divider */}
      <Box
        sx={{
          height: '1px',
          background: 'linear-gradient(90deg, rgba(255,107,47,0.1), rgba(255,107,47,0.03))',
          mb: { xs: 3, md: 3.5 },
        }}
      />

      {/* Features */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, flex: 1, mb: { xs: 4, md: 4.5 } }}>
        {ENTERPRISE_FEATURES.map(({ text, note }) => (
          <FeatureRow key={text} text={text} note={note} CheckIcon={OrangeCheck} />
        ))}
      </Box>

      {/* CTA */}
      <Box
        component="button"
        onClick={onDemoClick}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 1,
          px: 3,
          py: '14px',
          borderRadius: '100px',
          background: 'rgba(255,107,47,0.1)',
          border: '1px solid rgba(255,107,47,0.24)',
          color: '#ff6b2f',
          fontSize: { xs: 14.5, md: 15 },
          fontWeight: 800,
          cursor: 'pointer',
          transition: 'transform 0.22s ease, background 0.22s ease, box-shadow 0.22s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            background: 'rgba(255,107,47,0.16)',
            boxShadow: '0 8px 30px rgba(255,107,47,0.15)',
          },
        }}
      >
        <Phone size={15} aria-hidden />
        Book a Demo
      </Box>
    </Box>
  )
}

export default function TeamsPricingSection({ onDemoClick }) {
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
        aria-labelledby="teams-title"
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
            background:
              'linear-gradient(90deg, transparent, rgba(255,107,47,0.25) 50%, transparent)',
          },
        }}
      >
        {/* Ambient orb — orange top center */}
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
            background: 'radial-gradient(circle, rgba(255,107,47,0.07) 0%, transparent 60%)',
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
            background: 'radial-gradient(circle, rgba(201,245,104,0.06) 0%, transparent 65%)',
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
                border: '1px solid rgba(255,107,47,0.2)',
                bgcolor: 'rgba(255,107,47,0.07)',
                mb: 3,
              }}
            >
              <Users size={12} color="#ff6b2f" aria-hidden />
              <Typography
                sx={{ fontSize: 11, fontWeight: 800, letterSpacing: 1.8, textTransform: 'uppercase', color: '#ff6b2f' }}
              >
                Team Plans
              </Typography>
            </Box>

            <Typography
              id="teams-title"
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
              The{' '}
              <Box component="span" sx={{ color: '#ff6b2f' }}>
                Whole Team
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
              Equip your people-facing teams with the tools needed to excel in every critical moment.
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
              {['monthly', 'annual'].map((b) => (
                <Box
                  key={b}
                  component="button"
                  onClick={() => setBilling(b)}
                  sx={{
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
                        Save 17%
                      </Typography>
                    </Box>
                  )}
                </Box>
              ))}
            </Box>
          </Box>

          {/* ── Cards ── */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: { xs: 2.5, md: 3 },
              alignItems: 'stretch',
            }}
          >
            <TeamsCard billing={billing} />
            <EnterpriseCard onDemoClick={onDemoClick} />
          </Box>

        </Box>
      </Box>
    </Box>
  )
}
