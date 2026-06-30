import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { TrendingUp, Briefcase, Users, Headphones } from 'lucide-react'
import { landingCopy } from '../utils/i18n'

const NOISE = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`

const SCENARIOS = [
  {
    num: '01',
    cat: 'Sales',
    Icon: TrendingUp,
    accent: '#F26433',
    rgb: '242,100,51',
    secondary: '#8EC640',
    pattern: '/images/orange.png',
    patternPlacement: 'bottomRight',
    title: 'Turn Cold Calls Into Closed Deals',
    sub: 'Handle objections, close with confidence, and navigate pricing conversations without hesitation. Practice the call before you are on the call.',
  },
  {
    num: '02',
    cat: 'Career Development',
    Icon: Briefcase,
    accent: '#074225',
    rgb: '7,66,37',
    secondary: '#8EC640',
    pattern: '/images/green.png',
    title: 'Ace The Interview. Land The Job.',
    sub: 'Walk into every interview already knowing how to handle the hard questions. Own the negotiation before it begins.',
  },
  {
    num: '03',
    cat: 'Leadership',
    Icon: Users,
    accent: '#8EC640',
    rgb: '142,198,64',
    secondary: '#F26433',
    pattern: '/images/light%20green.png',
    title: 'Be The Manager Your Team Needs',
    sub: 'Deliver feedback, align your team, and present to the board with the kind of presence that earns trust instantly.',
  },
  {
    num: '04',
    cat: 'Customer Care',
    Icon: Headphones,
    accent: '#E8DCEB',
    rgb: '232,220,235',
    secondary: '#F26433',
    pattern: '/images/lavender.png',
    patternPlacement: 'bottomRight',
    title: 'Handle Angry Customers. Build Loyal Ones.',
    sub: 'Train your team to de-escalate, empathize, and retain customers even in the most challenging service situations.',
  },
]

const STATS = [
  { value: '96%',   label: 'User Satisfaction',  accent: '#F26433', rgb: '242,100,51' },
  { value: '10+',   label: 'Arabic Dialects',     accent: '#F26433', rgb: '242,100,51'  },
  { value: '100K+', label: 'Possible Scenarios',  accent: '#8EC640', rgb: '142,198,64' },
]

function ScenarioCard({
  num,
  cat,
  Icon,
  accent,
  rgb,
  secondary,
  pattern,
  patternPlacement = 'topRight',
  title,
  sub,
  featured = false,
}) {
  const isPatternBottomRight = patternPlacement === 'bottomRight'

  return (
    <Box
      sx={{
        position: 'relative',
        isolation: 'isolate',
        p: {
          xs: '28px',
          sm: '34px',
          md: featured ? '46px' : '38px',
        },
        minHeight: { xs: 330, md: featured ? 400 : 400 },
        borderRadius: { xs: '24px', md: '30px' },
        border: '1px solid rgba(238,243,205,0.16)',
        background:
          'linear-gradient(145deg, rgba(7,66,37,0.98) 0%, rgba(6,55,31,0.96) 62%, rgba(7,66,37,0.9) 100%)',
        backdropFilter: 'blur(14px) saturate(1.02)',
        overflow: 'hidden',
        height: '100%',
        transition:
          'border-color 0.3s ease, box-shadow 0.3s ease, transform 0.32s cubic-bezier(0.4,0,0.2,1)',
        boxShadow:
          '0 24px 70px rgba(7,66,37,0.22), inset 0 1px 0 rgba(238,243,205,0.12)',
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          borderRadius: 'inherit',
          background:
            'linear-gradient(135deg, rgba(238,243,205,0.04), transparent 36%, rgba(242,100,51,0.045) 100%)',
          opacity: 1,
          pointerEvents: 'none',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          left: 22,
          right: 22,
          top: 0,
          height: 1,
          zIndex: 1,
          background:
            'linear-gradient(90deg, transparent, rgba(238,243,205,0.28), rgba(242,100,51,0.24), transparent)',
          pointerEvents: 'none',
        },
        '&:hover': {
          borderColor: 'rgba(238,243,205,0.3)',
          transform: 'translateY(-4px)',
          boxShadow: '0 34px 86px rgba(7,66,37,0.26), inset 0 1px 0 rgba(238,243,205,0.18)',
        },
      }}
    >
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          opacity: 0.022,
          backgroundImage: NOISE,
          backgroundSize: '180px 180px',
          pointerEvents: 'none',
        }}
      />
      <Box
        component="img"
        src={pattern}
        alt="Speekr conversation card pattern"
        title="Speekr decorative conversation card pattern"
        aria-hidden
        loading="lazy"
        decoding="async"
        sx={{
          position: 'absolute',
          top: isPatternBottomRight ? 'auto' : { xs: 16, md: featured ? 24 : 18 },
          right: { xs: -34, md: featured ? -18 : -42 },
          bottom: isPatternBottomRight ? { xs: 26, md: featured ? 32 : 28 } : 'auto',
          zIndex: 1,
          width: { xs: 150, sm: 190, md: featured ? 250 : 170 },
          height: { xs: 150, sm: 190, md: featured ? 250 : 170 },
          objectFit: 'cover',
          borderRadius: '22px',
          opacity: featured ? 0.18 : 0.14,
          mixBlendMode: 'screen',
          filter: 'saturate(1.05) contrast(1.02)',
          pointerEvents: 'none',
        }}
      />
      <Typography
        aria-hidden
        sx={{
          position: 'absolute',
          top: { xs: -24, md: -40 },
          right: { xs: 14, md: 22 },
          zIndex: 1,
          fontSize: { xs: 110, md: featured ? 176 : 144 },
          fontFamily: (theme) => theme.palette.brand.fontHeadline,
          fontWeight: 900,
          lineHeight: 0.8,
          color: 'transparent',
          WebkitTextStroke: '1px rgba(238,243,205,0.07)',
          opacity: 0.95,
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      >
        {num}
      </Typography>
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          bottom: '-22%',
          right: '-10%',
          zIndex: 0,
          width: '58%',
          height: '58%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(238,243,205,0.06) 0%, transparent 70%)',
          filter: 'blur(44px)',
          pointerEvents: 'none',
        }}
      />
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          left: -26,
          bottom: -32,
          zIndex: 0,
          opacity: 0.045,
          lineHeight: 0,
          pointerEvents: 'none',
        }}
      >
        <Icon size={featured ? 210 : 170} color="#EEF3CD" strokeWidth={1.4} />
      </Box>

      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 2,
          mb: { xs: 4, md: featured ? 5.5 : 4.5 },
        }}
      >
        <Box
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 0.9,
            minWidth: 0,
            px: 1.7,
            py: 0.7,
            borderRadius: '100px',
            bgcolor: 'rgba(238,243,205,0.075)',
            border: '1px solid rgba(238,243,205,0.13)',
            boxShadow: '0 12px 28px rgba(0,0,0,0.08)',
          }}
        >
          <Box
            sx={{
              width: 7,
              height: 7,
              borderRadius: '50%',
              bgcolor: accent,
              boxShadow: `0 0 0 4px rgba(${rgb},0.1)`,
              flexShrink: 0,
            }}
          />
          <Typography
            sx={{
              fontSize: 11,
              fontWeight: 900,
              color: '#EEF3CD',
              letterSpacing: 0.9,
              lineHeight: 1,
            }}
          >
            {cat}
          </Typography>
        </Box>

        <Typography
          aria-hidden
          sx={{
            fontSize: 13,
            fontWeight: 900,
            color: 'rgba(238,243,205,0.36)',
            letterSpacing: 1,
          }}
        >
          {num}
        </Typography>
      </Box>

      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          display: { xs: 'block', md: featured ? 'grid' : 'block' },
          gridTemplateColumns: featured ? 'minmax(0, 1fr) 138px' : '1fr',
          alignItems: 'end',
          gap: { md: 4 },
        }}
      >
        <Box>
          <Box
            sx={{
              position: 'relative',
              width: 62,
              height: 62,
              borderRadius: '17px',
              mb: { xs: 2.8, md: 3.5 },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background:
                'linear-gradient(145deg, rgba(238,243,205,0.96), rgba(238,243,205,0.78))',
              border: '1px solid rgba(238,243,205,0.18)',
              boxShadow: '0 18px 38px rgba(0,0,0,0.12), inset 0 1px 0 rgba(238,243,205,0.35)',
            }}
          >
            <Box
              aria-hidden
              sx={{
                position: 'absolute',
                transform: 'translate(7px, 7px)',
                lineHeight: 0,
              opacity: 0.34,
              }}
            >
              <Icon size={30} color={secondary} strokeWidth={2.5} />
            </Box>
            <Box sx={{ position: 'relative', lineHeight: 0 }}>
              <Icon size={30} color="#074225" strokeWidth={2.55} />
            </Box>
          </Box>

          <Typography
            component="h3"
            sx={{
              m: 0,
              maxWidth: featured ? 690 : 390,
              fontSize: { xs: 27, sm: 31, md: featured ? 37 : 31, lg: featured ? 40 : 33 },
              fontWeight: 900,
              letterSpacing: { xs: -0.3, md: -0.5 },
              lineHeight: 1.09,
              color: '#EEF3CD',
              mb: { xs: 2, md: 2.4 },
            }}
          >
            {title}
          </Typography>

          <Typography
            sx={{
              maxWidth: featured ? 790 : 390,
              fontSize: { xs: 14, md: 15.2 },
              lineHeight: 1.74,
              color: 'rgba(238,243,205,0.68)',
            }}
          >
            {sub}
          </Typography>
        </Box>

      </Box>

      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          left: { xs: 28, sm: 34, md: featured ? 46 : 38 },
          right: { xs: 28, sm: 34, md: featured ? 46 : 38 },
          bottom: { xs: 22, md: 26 },
          zIndex: 2,
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          opacity: 0.9,
        }}
      >
        <Box sx={{ width: 7, height: 7, borderRadius: '50%', bgcolor: accent }} />
        <Box sx={{ height: 1, flex: 1, bgcolor: 'rgba(238,243,205,0.16)' }} />
        <Box sx={{ width: 30, height: 5, borderRadius: 99, bgcolor: accent }} />
        <Box sx={{ width: 5, height: 5, borderRadius: '50%', bgcolor: secondary, opacity: 0.8 }} />
      </Box>
    </Box>
  )
}

export default function ConversationsCovered({ locale = 'en' }) {
  const copy = landingCopy[locale].conversations
  const scenarios = SCENARIOS.map((item, index) => ({
    ...item,
    cat: copy.scenarios[index][0],
    title: copy.scenarios[index][1],
    sub: copy.scenarios[index][2],
  }))
  return (
    <Box
      sx={{
        bgcolor: '#EEF3CD',
        px: { xs: '12px', sm: '18px', md: '24px' },
        pt: 0,
        pb: { xs: 3, md: 4 },
      }}
    >
      <Box
        component="section"
        aria-labelledby="conv-title"
        sx={{
          position: 'relative',
          background:
            'radial-gradient(circle at 18% 10%, rgba(142,198,64,0.12), transparent 30%), radial-gradient(circle at 82% 18%, rgba(242,100,51,0.055), transparent 34%), linear-gradient(180deg, #EEF3CD 0%, #EEF3CD 100%)',
          borderRadius: { xs: '24px', md: '32px' },
          overflow: 'hidden',
          px: { xs: 2.5, sm: 4, md: 6, lg: 8 },
          pt: { xs: 9, md: 12 },
          pb: { xs: 9, md: 13 },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: '10%',
            right: '10%',
            height: '1px',
            background:
              'linear-gradient(90deg, transparent, rgba(7,66,37,0.16) 50%, transparent)',
          },
        }}
      >
        {/* Ambient orb — lime top left */}
        <Box
          component="img"
          src="/images/brand-patterns/line-pattern.png"
          alt="Speekr conversations background pattern"
          title="Speekr decorative conversations background pattern"
          aria-hidden
          loading="lazy"
          decoding="async"
          sx={{
            position: 'absolute',
            top: { xs: 20, md: 36 },
            right: { xs: '-35%', md: '-6%' },
            width: { xs: 480, md: 640 },
            opacity: 0.06,
            pointerEvents: 'none',
          }}
        />
        <Box
          component="img"
          src="/images/brand-patterns/frame.png"
          alt="Speekr conversations frame pattern"
          title="Speekr decorative conversations frame pattern"
          aria-hidden
          loading="lazy"
          decoding="async"
          sx={{
            position: 'absolute',
            left: { xs: '-28%', md: '-4%' },
            bottom: { xs: '55%', md: '45%' },
            width: { xs: 280, md: 360 },
            opacity: 0.045,
            transform: 'rotate(-8deg)',
            pointerEvents: 'none',
          }}
        />
        <Box
          component="img"
          src="/images/brand-patterns/block.png"
          alt="Speekr conversations block pattern"
          title="Speekr decorative conversations block pattern"
          aria-hidden
          loading="lazy"
          decoding="async"
          sx={{
            position: 'absolute',
            right: { xs: '-18%', lg: '5%' },
            bottom: { xs: '35%', md: '28%' },
            width: { xs: 120, md: 164 },
            borderRadius: '24px',
            opacity: 0.06,
            transform: 'rotate(4deg)',
            pointerEvents: 'none',
          }}
        />
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
              'radial-gradient(circle, rgba(142,198,64,0.06) 0%, transparent 60%)',
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
              'radial-gradient(circle, rgba(242,100,51,0.045) 0%, transparent 65%)',
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
              'radial-gradient(circle, rgba(142,198,64,0.04) 0%, transparent 65%)',
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
            <Typography
              id="conv-title"
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
              <Box component="span" sx={{ display: 'block' }}>
                {copy.title}
              </Box>
              <Box component="span" sx={{ display: 'block', color: '#F26433' }}>
                {copy.accent}
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
              <ScenarioCard featured {...scenarios[0]} />
            </Box>
            <Box>
              <ScenarioCard {...scenarios[2]} />
            </Box>
            {/* Row 2: Career Dev | Customer Care (wide) */}
            <Box>
              <ScenarioCard {...scenarios[1]} />
            </Box>
            <Box sx={{ gridColumn: { xs: '1', md: '2 / 4' } }}>
              <ScenarioCard featured {...scenarios[3]} />
            </Box>
          </Box>

          {/* Divider */}
          <Box
            aria-hidden
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: { xs: 2.2, md: 3.5 },
              mb: { xs: 10, md: 14 },
            }}
          >
            <Box sx={{ height: '1px', flex: 1, maxWidth: 470, bgcolor: 'rgba(7,66,37,0.22)' }} />
            <Box
              sx={{
                width: { xs: 56, md: 68 },
                height: { xs: 56, md: 68 },
                borderRadius: '50%',
                border: '1px solid rgba(7,66,37,0.14)',
                bgcolor: 'rgba(7,66,37,0.055)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 18px 48px rgba(7,66,37,0.08), inset 0 1px 0 rgba(238,243,205,0.65)',
              }}
            >
              <Box
                sx={{
                  width: { xs: 15, md: 17 },
                  height: { xs: 15, md: 17 },
                  borderRadius: '5px',
                  bgcolor: '#074225',
                  transform: 'rotate(45deg)',
                  boxShadow: '0 0 0 11px rgba(7,66,37,0.075)',
                }}
              />
            </Box>
            <Box sx={{ height: '1px', flex: 1, maxWidth: 470, bgcolor: 'rgba(7,66,37,0.22)' }} />
          </Box>

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
                WebkitTextStroke: '1px rgba(7,66,37,0.045)',
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
                  fontFamily: (theme) => theme.palette.brand.fontHeadline,
                  fontWeight: 900,
                  letterSpacing: { xs: -1.5, md: -2.5 },
                  lineHeight: 1.04,
                  color: '#074225',
                }}
              >
                {copy.platformTitle}
              </Typography>
              <Typography
                component="p"
                sx={{
                  m: 0,
                  fontSize: { xs: 34, sm: 46, md: 56, lg: 64 },
                  fontFamily: (theme) => theme.palette.brand.fontHeadline,
                  fontWeight: 900,
                  letterSpacing: { xs: -1.5, md: -2.5 },
                  lineHeight: 1.04,
                  color: '#F26433',
                }}
              >
                {copy.platformAccent}
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
                border: '1px solid rgba(7,66,37,0.1)',
                overflow: 'hidden',
                bgcolor: 'rgba(7,66,37,0.035)',
                boxShadow: 'inset 0 1px 0 rgba(238,243,205,0.42)',
              }}
            >
              {STATS.map(({ accent, rgb }, i) => {
                const [value, label] = copy.stats[i]
                return (
                <Box
                  key={label}
                  sx={{
                    position: 'relative',
                    py: { xs: 6, md: 8 },
                    px: { xs: 4, md: 6 },
                    textAlign: 'center',
                    borderRight: i < 2
                      ? { xs: 'none', sm: '1px solid rgba(7,66,37,0.08)' }
                      : 'none',
                    borderBottom: i < 2
                      ? { xs: '1px solid rgba(7,66,37,0.08)', sm: 'none' }
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
                      background: `radial-gradient(circle, rgba(${rgb},0.075) 0%, transparent 70%)`,
                      filter: 'blur(22px)',
                      pointerEvents: 'none',
                    }}
                  />
                  <Typography
                    sx={{
                      position: 'relative',
                      fontSize: { xs: 52, sm: 64, md: 76, lg: 88 },
                      fontFamily: (theme) => theme.palette.brand.fontHeadline,
                      fontWeight: 900,
                      letterSpacing: { xs: -2, md: -3 },
                      lineHeight: 0.9,
                      color: accent,
                      mb: 2.5,
                      textShadow: `0 0 34px rgba(${rgb},0.16)`,
                    }}
                  >
                    {value}
                  </Typography>
                  <Typography
                    sx={{
                      position: 'relative',
                      fontSize: { xs: 13, md: 14.5 },
                      fontWeight: 600,
                      color: 'rgba(7,66,37,0.56)',
                      letterSpacing: 0.3,
                    }}
                  >
                    {label}
                  </Typography>
                </Box>
              )})}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
