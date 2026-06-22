import { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react'

const NOISE = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`

const FAQS = [
  {
    q: 'What is Speekr?',
    a: "Speekr is an AI-powered communication training platform that helps professionals master real-world conversations through immersive roleplay, instant AI feedback, and personalized coaching — anytime, without needing a human coach or practice partner.",
  },
  {
    q: 'How does Speekr work?',
    a: "You choose a scenario — a job interview, sales pitch, negotiation, or presentation — and practice with a realistic AI conversational partner. After each session, Speekr analyzes your clarity, confidence, tone, and structure, then delivers detailed feedback and a performance score so you can improve with every rep.",
  },
  {
    q: 'Who is Speekr designed for?',
    a: "Speekr is built for anyone whose words impact their career or business: job seekers preparing for interviews, sales reps refining their pitch, managers building executive presence, and HR or L&D teams upskilling entire workforces. Both individuals and organizations use Speekr to turn communication into a competitive edge.",
  },
  {
    q: 'What kinds of scenarios can I practice?',
    a: "Speekr offers 100+ scenario types including job interviews, salary negotiations, client presentations, cold sales calls, investor pitches, performance reviews, team leadership conversations, and more. Enterprise customers can also request fully custom scenarios tailored to their specific industry, products, or internal processes.",
  },
  {
    q: 'Is there a free trial?',
    a: "Yes — you can start a free trial with no credit card required. The trial gives you access to a curated set of practice scenarios so you can experience the full AI coaching loop before choosing a plan.",
  },
  {
    q: 'How is Speekr different from watching tutorials or reading books?',
    a: "Passive learning builds awareness — active practice builds skill. Speekr puts you inside the conversation, not on the sideline. The AI adapts to your responses in real time, creating a unique challenge every session, exactly how real conversations work. Deliberate, context-specific practice is the fastest path to lasting improvement.",
  },
  {
    q: 'Can I use Speekr for my entire team or organization?',
    a: "Absolutely. Speekr for Business includes team-wide training dashboards, manager-level analytics, bulk seat management, and the ability to deploy custom training scenarios at scale. Enterprise customers get dedicated onboarding support, SSO integration, and advanced reporting. Book a demo to explore what's possible for your team.",
  },
  {
    q: 'How is my data protected?',
    a: "Speekr takes privacy seriously. All session data is encrypted in transit and at rest. Enterprise customers benefit from SSO, role-based access controls, and optional data residency configurations. We never sell or share your personal data with third parties.",
  },
]

function FaqItem({ q, a, isOpen, onToggle }) {
  return (
    <Box
      component="article"
      sx={{
        borderRadius: '16px',
        border: `1px solid ${isOpen ? 'rgba(201,245,104,0.2)' : 'rgba(255,255,255,0.055)'}`,
        bgcolor: isOpen ? 'rgba(201,245,104,0.028)' : 'rgba(255,255,255,0.018)',
        boxShadow: isOpen
          ? '0 0 0 1px rgba(201,245,104,0.06) inset, 0 8px 40px rgba(0,0,0,0.28)'
          : 'none',
        transition: 'border-color 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease',
        overflow: 'hidden',
      }}
    >
      {/* ── Question row ── */}
      <Box
        component="button"
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'flex-start',
          gap: { xs: 2, sm: 2, md: 3 },
          p: { xs: '22px 20px', sm: '26px 28px', md: '30px 36px' },
          textAlign: 'left',
          cursor: 'pointer',
          bgcolor: 'transparent',
          border: 'none',
          fontFamily: 'inherit',
        }}
      >
        {/* Orange square accent — hidden on xs */}
        <Box
          aria-hidden
          sx={{
            flexShrink: 0,
            width: 8,
            height: 8,
            borderRadius: '3px',
            bgcolor: '#ff6b2f',
            mt: '8px',
            display: { xs: 'none', sm: 'block' },
            boxShadow: '0 0 8px rgba(255,107,47,0.5)',
          }}
        />

        {/* Question text */}
        <Typography
          sx={{
            flex: 1,
            fontSize: { xs: 16.5, sm: 18, md: 20 },
            fontWeight: 700,
            letterSpacing: -0.3,
            lineHeight: 1.3,
            color: isOpen ? 'rgba(247,255,232,0.97)' : 'rgba(247,255,232,0.78)',
            transition: 'color 0.25s ease',
            textAlign: 'left',
          }}
        >
          {q}
        </Typography>

        {/* Chevron toggle */}
        <Box
          aria-hidden
          sx={{
            flexShrink: 0,
            width: 28,
            height: 28,
            borderRadius: '50%',
            border: `1.5px solid ${isOpen ? 'rgba(201,245,104,0.32)' : 'rgba(255,255,255,0.1)'}`,
            bgcolor: isOpen ? 'rgba(201,245,104,0.09)' : 'rgba(255,255,255,0.04)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'transform 0.35s cubic-bezier(0.4,0,0.2,1), border-color 0.3s ease, background-color 0.3s ease',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            mt: '2px',
          }}
        >
          <ChevronDown
            size={14}
            color={isOpen ? '#c9f568' : 'rgba(247,255,232,0.4)'}
            aria-hidden
          />
        </Box>
      </Box>

      {/* ── Answer ── */}
      <Box
        sx={{
          maxHeight: isOpen ? '500px' : 0,
          overflow: 'hidden',
          transition: 'max-height 0.44s cubic-bezier(0.4,0,0.2,1)',
        }}
      >
        {/*
          Left-align answer with question text:
          button left-pad + dot(8px) + gap → xs:20, sm:52(28+8+16), md:68(36+8+24)
        */}
        <Box
          sx={{
            pl: { xs: '20px', sm: '52px', md: '68px' },
            pr: { xs: '20px', sm: '28px', md: '36px' },
            pb: { xs: '22px', sm: '26px', md: '30px' },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: 14, md: 15 },
              fontWeight: 500,
              lineHeight: 1.8,
              color: 'rgba(247,255,232,0.46)',
            }}
          >
            {a}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default function FaqSection({ onDemoClick }) {
  const [open, setOpen] = useState(null)
  const toggle = (idx) => setOpen(open === idx ? null : idx)

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
        id="faq"
        aria-labelledby="faq-title"
        sx={{
          position: 'relative',
          bgcolor: '#0b1e12',
          borderRadius: { xs: '24px', md: '32px' },
          overflow: 'hidden',
          px: { xs: 2.5, sm: 4, md: 6, lg: 8 },
          pt: { xs: 8, md: 12 },
          pb: { xs: 8, md: 10 },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: '10%',
            right: '10%',
            height: '1px',
            background:
              'linear-gradient(90deg, transparent, rgba(201,245,104,0.28) 50%, transparent)',
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
            width: '70vw',
            height: '70vw',
            maxWidth: 800,
            maxHeight: 800,
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(201,245,104,0.055) 0%, transparent 62%)',
            filter: 'blur(80px)',
            pointerEvents: 'none',
          }}
        />
        {/* Ambient orb — orange bottom right */}
        <Box
          aria-hidden
          sx={{
            position: 'absolute',
            bottom: '-10%',
            right: '-4%',
            width: '45vw',
            height: '45vw',
            maxWidth: 520,
            maxHeight: 520,
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(255,107,47,0.05) 0%, transparent 65%)',
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
            opacity: 0.018,
            backgroundImage: NOISE,
            backgroundRepeat: 'repeat',
            backgroundSize: '200px 200px',
          }}
        />

        <Box sx={{ position: 'relative', zIndex: 1, maxWidth: 1200, mx: 'auto' }}>

          {/* ── Heading ── */}
          <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 9 } }}>
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                px: 2,
                py: 0.75,
                mb: 3,
                borderRadius: '100px',
                border: '1px solid rgba(201,245,104,0.2)',
                bgcolor: 'rgba(201,245,104,0.06)',
              }}
            >
              <HelpCircle size={12} color="#c9f568" aria-hidden />
              <Typography
                sx={{
                  fontSize: 11,
                  fontWeight: 800,
                  letterSpacing: 1.8,
                  textTransform: 'uppercase',
                  color: '#c9f568',
                }}
              >
                Common Questions
              </Typography>
            </Box>

            <Typography
              id="faq-title"
              component="h2"
              sx={{
                m: 0,
                fontSize: { xs: 38, sm: 50, md: 58, lg: 64 },
                fontWeight: 900,
                letterSpacing: { xs: -1.5, md: -2.5 },
                lineHeight: 1.0,
                color: 'rgba(247,255,232,0.96)',
              }}
            >
              Frequently{' '}
              <Box component="span" sx={{ color: '#c9f568' }}>
                Asked
              </Box>
              <br />
              Questions
            </Typography>

            <Typography
              sx={{
                mt: { xs: 2, md: 2.5 },
                fontSize: { xs: 14.5, md: 16 },
                fontWeight: 500,
                lineHeight: 1.65,
                color: 'rgba(247,255,232,0.36)',
                maxWidth: 460,
                mx: 'auto',
              }}
            >
              Everything you need to know about Speekr. Can&apos;t find an answer?{' '}
              <Box
                component="button"
                type="button"
                onClick={onDemoClick}
                sx={{
                  display: 'inline',
                  color: 'rgba(201,245,104,0.7)',
                  bgcolor: 'transparent',
                  border: 'none',
                  p: 0,
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  fontSize: 'inherit',
                  fontWeight: 600,
                  textDecoration: 'underline',
                  textDecorationColor: 'rgba(201,245,104,0.3)',
                  transition: 'color 0.2s ease',
                  '&:hover': { color: '#c9f568' },
                }}
              >
                Talk to our team.
              </Box>
            </Typography>
          </Box>

          {/* ── FAQ accordion ── */}
          <Box
            sx={{
              maxWidth: 880,
              mx: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: 1.5,
            }}
          >
            {FAQS.map((faq, i) => (
              <FaqItem
                key={i}
                q={faq.q}
                a={faq.a}
                isOpen={open === i}
                onToggle={() => toggle(i)}
              />
            ))}
          </Box>

          {/* ── Bottom CTA ── */}
          <Box
            sx={{
              mt: { xs: 7, md: 10 },
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: { xs: 3, sm: 4 },
              maxWidth: 880,
              mx: 'auto',
              p: { xs: '28px 24px', sm: '32px 36px', md: '36px 44px' },
              borderRadius: '20px',
              border: '1px solid rgba(255,107,47,0.14)',
              bgcolor: 'rgba(255,107,47,0.022)',
              backdropFilter: 'blur(20px)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Corner glow */}
            <Box
              aria-hidden
              sx={{
                position: 'absolute',
                top: '-30%',
                right: '-10%',
                width: '55%',
                height: '200%',
                borderRadius: '50%',
                background:
                  'radial-gradient(circle, rgba(255,107,47,0.1) 0%, transparent 70%)',
                filter: 'blur(40px)',
                pointerEvents: 'none',
              }}
            />

            <Box sx={{ position: 'relative', zIndex: 1 }}>
              <Typography
                sx={{
                  fontSize: { xs: 18, md: 22 },
                  fontWeight: 800,
                  letterSpacing: -0.4,
                  lineHeight: 1.2,
                  color: 'rgba(247,255,232,0.92)',
                  mb: 0.5,
                }}
              >
                Still have questions?
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: 13.5, md: 15 },
                  fontWeight: 500,
                  lineHeight: 1.6,
                  color: 'rgba(247,255,232,0.38)',
                }}
              >
                Our team is happy to walk you through everything Speekr can do.
              </Typography>
            </Box>

            <Box
              component="button"
              type="button"
              onClick={onDemoClick}
              sx={{
                flexShrink: 0,
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                px: { xs: 3, md: 3.5 },
                py: 1.5,
                borderRadius: '100px',
                bgcolor: '#ff6b2f',
                color: '#0b1e12',
                fontSize: { xs: 13.5, md: 14 },
                fontWeight: 800,
                letterSpacing: -0.2,
                cursor: 'pointer',
                border: 'none',
                fontFamily: 'inherit',
                transition: 'transform 0.22s ease, box-shadow 0.22s ease, filter 0.22s ease',
                boxShadow: '0 0 22px rgba(255,107,47,0.28)',
                position: 'relative',
                zIndex: 1,
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 32px rgba(255,107,47,0.42)',
                  filter: 'brightness(1.07)',
                },
              }}
            >
              Book a Demo
              <ArrowRight size={14} aria-hidden />
            </Box>
          </Box>

        </Box>
      </Box>
    </Box>
  )
}
