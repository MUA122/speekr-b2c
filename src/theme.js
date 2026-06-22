import { createTheme } from '@mui/material/styles'

const brand = {
  green: '#00452f',
  greenDeep: '#063323',
  greenSoft: '#e9f7d4',
  lime: '#f7ffe8',
  limeStrong: '#c9f568',
  orange: '#ff6b2f',
  orangeDeep: '#d94f1f',
  ink: '#102019',
  muted: '#5a6a60',
  border: 'rgba(0, 69, 47, 0.14)',
  paper: '#fffef8',
}

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: brand.green,
      dark: brand.greenDeep,
      light: brand.greenSoft,
      contrastText: '#ffffff',
    },
    secondary: {
      main: brand.orange,
      dark: brand.orangeDeep,
      contrastText: '#ffffff',
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
    fontFamily:
      '"Aptos", "Segoe UI", "Inter", -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif',
    h1: {
      fontWeight: 800,
      letterSpacing: 0,
      lineHeight: 0.94,
    },
    button: {
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
          color: brand.ink,
          background: brand.lime,
        },
        'button, a': {
          WebkitTapHighlightColor: 'transparent',
        },
        '::selection': {
          color: '#ffffff',
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
          backgroundColor: 'rgba(255, 255, 255, 0.72)',
        },
      },
    },
  },
})

export { brand }
export default theme
