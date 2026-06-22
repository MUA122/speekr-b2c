import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { TrendingUp, Briefcase, Users, Headphones, MessageSquare } from 'lucide-react'

const NOISE = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`

const SCENARIOS = [
  {
    cat: 'Sales',
    Icon: TrendingUp,
    accent: '#ff6b2f',
    rgb: '255,107,47',
    title: 'Turn Cold Calls Into Closed Deals',
    sub: 'Handle objections, close with confidence, and navigate pricing conversations without hesitation. Practice the call before you are on the call.',
  },
  {
    cat: 'Career Development',
    Icon: Briefcase,
    accent: '#c9f568',
    rgb: '201,245,104',
    title: 'Ace The Interview. Land The Job.',
    sub: 'Walk into every interview already knowing how to handle the hard questions. Own the negotiation before it begins.',
  },
  {
    cat: 'Leadership',
    Icon: Users,
    accent: '#7eb8f7',
    rgb: '126,184,247',
    title: 'Be The Manager Your Team Needs',
    sub: 'Deliver feedback, align your team, and present to the board with the kind of presence that earns trust instantly.',
  },
  {
    cat: 'Customer Care',
    Icon: Headphones,
    accent: '#e8a0f8',
    rgb: '232,160,248',
    title: 'Handle Angry Customers. Build Loyal Ones.',
    sub: 'Train your team to de-escalate, empathize, and retain customers even in the most challenging service situations.',
  },
]

const STATS = [
  { value: '96%',   label: 'User Satisfaction',  accent: '#c9f568', rgb: '201,245,104' },
  { value: '10+',   label: 'Arabic Dialects',     accent: '#ff6b2f', rgb: '255,107,47'  },
  { value: '100K+', label: 'Possible Scenarios',  accent: '#7eb8f7', rgb: '126,184,247' },
]

function ScenarioCard({ cat, Icon, accent, rgb, title, sub }) {
  return (
    <Box
      sx={{
        position: 'relative',
        p: { xs: '28px', sm: '32px', md: '38px' },
        borderRadius: { xs: '18px', md: '22px' },
        border: '1px solid rgba(255,255,255,0.06)',
        bgcolor: 'rgba(255,255,255,0.028)',
        backdropFilter: 'blur(40px)',
        overflow: 'hidden',
        height: '100%',
        transition:
          'border-color 0.3s ease, box-shadow 0.3s ease, transform 0.32s cubic-bezier(0.4,0,0.2,1)',
        '&:hover': {
          borderColor: `rgba(${rgb},0.24)`,
          transform: 'translateY(-3px)',
          boxShadow: `0 28px 72px rgba(0,0,0,0.32), 0 0 40px rgba(${rgb},0.08)`,
        },
      }}
    >
      {/* Ambient corner glow */}
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          bottom: '-18%',
          right: '-8%',
          width: '55%',
          height: '55%',
          borderRadius: '50%',
          background: `radial-gradient(circle, rgba(${rgb},0.16) 0%, transparent 70%)`,
          filter: 'blur(26px)',
          pointerEvents: 'none',
        }}
      />
      {/* Ghost icon */}
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          top: -14,
          right: -14,
          opacity: 0.042,
          lineHeight: 0,
          pointerEvents: 'none',
        }}
      >
        <Icon size={155} color={accent} />
      </Box>

      {/* Category pill */}
      <Box
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 0.9,
          px: 1.6,
          py: 0.55,
          borderRadius: '100px',
          bgcolor: `rgba(${rgb},0.09)`,
          border: `1px solid rgba(${rgb},0.2)`,
          mb: 3,
        }}
      >
        <Box
          sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: accent, flexShrink: 0 }}
        />
        <Typography
          sx={{
            fontSize: 11,
            fontWeight: 700,
            color: accent,
            letterSpacing: 0.5,
            lineHeight: 1,
          }}
        >
          {cat}
        </Typography>
      </Box>

      {/* Icon box */}
      <Box
        sx={{
          width: 50,
          height: 50,
          borderRadius: '13px',
          bgcolor: `rgba(${rgb},0.09)`,
          border: `1px solid rgba(${rgb},0.14)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: { xs: 2.5, md: 3 },
          boxShadow: `0 0 18px rgba(${rgb},0.12)`,
        }}
      >
        <Icon size={22} color={accent} aria-hidden />
      </Box>

      <Typography
        component="h3"
        sx={{
          m: 0,
          fontSize: { xs: 22, sm: 25, md: 27, lg: 30 },
          fontWeight: 900,
          letterSpacing: { xs: -0.6, md: -1 },
          lineHeight: 1.17,
          color: 'rgba(247,255,232,0.94)',
          mb: { xs: 1.8, md: 2.2 },
        }}
      >
        {title}
      </Typography>

      <Typography
        sx={{
          fontSize: { xs: 13.5, md: 14.5 },
          lineHeight: 1.72,
          color: 'rgba(247,255,232,0.36)',
        }}
      >
        {sub}
      </Typography>
    </Box>
  )
}

export default function ConversationsCovered() {
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
        aria-labelledby="conv-title"
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
              'linear-gradient(90deg, transparent, rgba(201,245,104,0.25) 50%, transparent)',
          },
        }}
      >
        {/* Ambient orb — lime top left */}
        <Box
          aria-hidden
          sx={{
            position: 'absolute',
            top: '-8%',
            left: '25%',
            width: '70vw',
            height: '70vw',
            maxWidth: 800,
            maxHeight: 800,
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(201,245,104,0.06) 0%, transparent 60%)',
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
            maxWidth: 600,
            maxHeight: 600,
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(255,107,47,0.07) 0%, transparent 65%)',
            filter: 'blur(70px)',
            pointerEvents: 'none',
          }}
        />
        {/* Blue orb — bottom left for variety */}
        <Box
          aria-hidden
          sx={{
            position: 'absolute',
            bottom: '30%',
            left: '-6%',
            width: '35vw',
            height: '35vw',
            maxWidth: 400,
            maxHeight: 400,
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(126,184,247,0.055) 0%, transparent 65%)',
            filter: 'blur(60px)',
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

        <Box sx={{ position: 'relative', zIndex: 1, maxWidth: 1320, mx: 'auto' }}>

          {/* ── Part 1: Scenario bento grid ── */}

          {/* Heading */}
          <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 9 } }}>
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                px: 2,
                py: 0.75,
                borderRadius: '100px',
                border: '1px solid rgba(255,107,47,0.22)',
                bgcolor: 'rgba(255,107,47,0.07)',
                mb: 3,
              }}
            >
              <MessageSquare size={12} color="#ff6b2f" aria-hidden />
              <Typography
                sx={{
                  fontSize: 11,
                  fontWeight: 800,
                  letterSpacing: 1.8,
                  textTransform: 'uppercase',
                  color: '#ff6b2f',
                }}
              >
                50+ Real-World Scenarios
              </Typography>
            </Box>

            <Typography
              id="conv-title"
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
              Every Important Conversation{' '}
              <Box component="span" sx={{ color: '#ff6b2f' }}>
                Covered
              </Box>
            </Typography>
          </Box>

          {/* Bento: 3-col grid — Sales spans 2 cols, Customer Care spans 2 cols */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
              gap: { xs: 2, md: 2.5 },
              mb: { xs: 10, md: 14 },
            }}
          >
            {/* Row 1: Sales (wide) | Leadership */}
            <Box sx={{ gridColumn: { xs: '1', md: '1 / 3' } }}>
              <ScenarioCard {...SCENARIOS[0]} />
            </Box>
            <Box>
              <ScenarioCard {...SCENARIOS[2]} />
            </Box>
            {/* Row 2: Career Dev | Customer Care (wide) */}
            <Box>
              <ScenarioCard {...SCENARIOS[1]} />
            </Box>
            <Box sx={{ gridColumn: { xs: '1', md: '2 / 4' } }}>
              <ScenarioCard {...SCENARIOS[3]} />
            </Box>
          </Box>

          {/* Divider */}
          <Box
            aria-hidden
            sx={{
              height: '1px',
              background:
                'linear-gradient(90deg, transparent, rgba(255,255,255,0.07) 30%, rgba(255,255,255,0.07) 70%, transparent)',
              mb: { xs: 10, md: 14 },
            }}
          />

          {/* ── Part 2: Arabic platform stats ── */}
          <Box sx={{ position: 'relative', overflow: 'hidden' }}>
            {/* Ghost Arabic letter watermark */}
            <Typography
              aria-hidden
              sx={{
                position: 'absolute',
                right: { xs: -40, md: -100 },
                top: '50%',
                transform: 'translateY(-50%)',
                fontSize: { xs: 240, md: 460 },
                fontWeight: 900,
                lineHeight: 1,
                color: 'transparent',
                WebkitTextStroke: '1px rgba(255,255,255,0.022)',
                pointerEvents: 'none',
                userSelect: 'none',
                zIndex: 0,
              }}
            >
              ع
            </Typography>

            {/* Heading */}
            <Box
              sx={{
                position: 'relative',
                zIndex: 1,
                textAlign: 'center',
                mb: { xs: 8, md: 11 },
              }}
            >
              <Typography
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
                A Training Platform
              </Typography>
              <Typography
                component="p"
                sx={{
                  m: 0,
                  fontSize: { xs: 34, sm: 46, md: 56, lg: 64 },
                  fontWeight: 900,
                  letterSpacing: { xs: -1.5, md: -2.5 },
                  lineHeight: 1.04,
                  color: '#ff6b2f',
                }}
              >
                Optimized For Arabic
              </Typography>
            </Box>

            {/* Stats row */}
            <Box
              sx={{
                position: 'relative',
                zIndex: 1,
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
                borderRadius: { xs: '20px', md: '24px' },
                border: '1px solid rgba(255,255,255,0.06)',
                overflow: 'hidden',
                bgcolor: 'rgba(255,255,255,0.015)',
              }}
            >
              {STATS.map(({ value, label, accent, rgb }, i) => (
                <Box
                  key={label}
                  sx={{
                    position: 'relative',
                    py: { xs: 6, md: 8 },
                    px: { xs: 4, md: 6 },
                    textAlign: 'center',
                    borderRight: i < 2
                      ? { xs: 'none', sm: '1px solid rgba(255,255,255,0.06)' }
                      : 'none',
                    borderBottom: i < 2
                      ? { xs: '1px solid rgba(255,255,255,0.06)', sm: 'none' }
                      : 'none',
                  }}
                >
                  {/* Per-stat ambient glow */}
                  <Box
                    aria-hidden
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%,-50%)',
                      width: '80%',
                      height: '80%',
                      borderRadius: '50%',
                      background: `radial-gradient(circle, rgba(${rgb},0.1) 0%, transparent 70%)`,
                      filter: 'blur(22px)',
                      pointerEvents: 'none',
                    }}
                  />
                  <Typography
                    sx={{
                      position: 'relative',
                      fontSize: { xs: 52, sm: 64, md: 76, lg: 88 },
                      fontWeight: 900,
                      letterSpacing: { xs: -2, md: -3 },
                      lineHeight: 0.9,
                      color: accent,
                      mb: 2.5,
                      textShadow: `0 0 44px rgba(${rgb},0.35)`,
                    }}
                  >
                    {value}
                  </Typography>
                  <Typography
                    sx={{
                      position: 'relative',
                      fontSize: { xs: 13, md: 14.5 },
                      fontWeight: 600,
                      color: 'rgba(247,255,232,0.36)',
                      letterSpacing: 0.3,
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
    </Box>
  )
}
