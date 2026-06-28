import { createTheme } from '@mui/material/styles'

const brand = {
  green: '#074225',
  greenDeep: '#074225',
  grass: '#8EC640',
  greenSoft: '#EEF3CD',
  lime: '#EEF3CD',
  limeStrong: '#8EC640',
  orange: '#F26433',
  orangeDeep: '#C84D27',
  lavender: '#E8DCEB',
  ink: '#073821',
  muted: '#4f6659',
  border: 'rgba(7, 66, 37, 0.14)',
  paper: '#EEF3CD',
  fontHeadline: 'var(--font-headline, "Belwe Bold", "Belwe", "Cooper Black", Georgia, serif)',
  fontBody: 'var(--font-body, "Rubik", -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif)',
}

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: brand.green,
      dark: brand.greenDeep,
      light: brand.greenSoft,
      contrastText: '#EEF3CD',
    },
    secondary: {
      main: brand.orange,
      dark: brand.orangeDeep,
      contrastText: '#EEF3CD',
    },
    background: {
      default: brand.lime,
      paper: brand.paper,
    },
    text: {
      primary: brand.ink,
      secondary: brand.muted,
    },
    divider: brand.border,
    brand,
  },
  typography: {
    fontFamily: brand.fontBody,
    h1: {
      fontFamily: brand.fontHeadline,
      fontWeight: 800,
      letterSpacing: 0,
      lineHeight: 0.94,
    },
    h2: {
      fontFamily: brand.fontHeadline,
      fontWeight: 800,
      letterSpacing: 0,
      lineHeight: 1,
    },
    h3: {
      fontFamily: brand.fontHeadline,
      fontWeight: 800,
      letterSpacing: 0,
      lineHeight: 1.05,
    },
    h4: {
      fontFamily: brand.fontHeadline,
      fontWeight: 800,
      letterSpacing: 0,
      lineHeight: 1.08,
    },
    h5: {
      fontFamily: brand.fontHeadline,
      fontWeight: 800,
      letterSpacing: 0,
      lineHeight: 1.12,
    },
    h6: {
      fontFamily: brand.fontHeadline,
      fontWeight: 800,
      letterSpacing: 0,
      lineHeight: 1.16,
    },
    body1: {
      fontFamily: brand.fontBody,
    },
    body2: {
      fontFamily: brand.fontBody,
    },
    button: {
      fontFamily: brand.fontBody,
      textTransform: 'none',
      fontWeight: 800,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          boxSizing: 'border-box',
        },
        html: {
          scrollBehavior: 'smooth',
          background: brand.lime,
        },
        body: {
          margin: 0,
          minWidth: 320,
          fontFamily: brand.fontBody,
          color: brand.ink,
          background: brand.lime,
        },
        'button, a': {
          WebkitTapHighlightColor: 'transparent',
        },
        '::selection': {
          color: '#EEF3CD',
          backgroundColor: brand.green,
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 999,
          minHeight: 48,
          paddingInline: 24,
          transition:
            'transform 180ms ease, background-color 180ms ease, border-color 180ms ease, box-shadow 180ms ease',
          '&:hover': {
            transform: 'translateY(-1px)',
          },
          '&:focus-visible': {
            outline: `3px solid ${brand.limeStrong}`,
            outlineOffset: 3,
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          '&:focus-visible': {
            outline: `3px solid ${brand.limeStrong}`,
            outlineOffset: 3,
          },
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          backgroundColor: 'rgba(238,243,205, 0.72)',
        },
      },
    },
  },
})

export { brand }
export default theme
