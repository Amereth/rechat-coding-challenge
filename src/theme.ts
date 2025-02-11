import { Theme, createTheme } from '@mui/material'

declare module '@mui/material/styles' {
  interface Theme {
    boxShadows: {
      container: string
      menu: string
      input: string
    }
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    boxShadows: {
      container: string
      menu: string
      input: string
    }
  }
}

const white = '#fff'

export const theme: Theme = createTheme({
  breakpoints: {
    values: {
      xs: 576,
      sm: 648,
      md: 1024,
      lg: 1280,
      xl: 1920,
    },
  },
  boxShadows: {
    container: '0px 8px 48px -12px rgba(16, 24, 40, 0.15)',
    menu: '0px 10px 32px -4px rgba(0, 0, 0, 0.10), 0px 6px 14px -6px rgba(0, 0, 0, 0.12)',
    input: '0px 2px 2px 0px rgba(16, 24, 40, 0.05)',
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        input: state => ({
          borderRadius: `${state.theme.spacing(3.5)}`,
          padding: `${state.theme.spacing(1.25)} ${state.theme.spacing(2)}`,
          fontSize: '1rem',
          border: `1px solid`,
          boxShadow: state.theme.boxShadows.input,
          borderColor: state.theme.palette.grey[300],
          background: state.theme.palette.background.paper,
          '::placeholder': {
            color: state.theme.palette.grey[600],
          },
        }),

        error: state => ({
          input: {
            borderColor: state.theme.palette.error.main,
          },
          textarea: {
            borderColor: state.theme.palette.error.main,
          },
        }),
      },
    },

    MuiButton: {
      defaultProps: {
        variant: 'contained',
        color: 'primary',
      },
      styleOverrides: {
        root: state => ({
          textTransform: 'none',
          padding: `${state.theme.spacing(1.25)} ${state.theme.spacing(2.5)}`,
          borderRadius: `${state.theme.spacing(3.5)}`,
          fontSize: '0.875rem',
          fontWeight: 500,
          letterSpacing: '0.45px',
          boxShadow: 'none',
        }),
        containedPrimary: state => ({
          backgroundColor: state.theme.palette.primary.main,
          color: state.theme.palette.primary.contrastText,
        }),
        containedError: state => ({
          backgroundColor: state.theme.palette.error.dark,
        }),
      },
    },

    MuiMenu: {
      styleOverrides: {
        paper: state => ({
          borderRadius: state.theme.spacing(2),
          boxShadow: state.theme.boxShadows.menu,
        }),
      },
    },

    MuiDialog: {
      styleOverrides: {
        root: {
          background: 'rgba(16, 24, 40, 0.15)',
          boxShadow: 'none',
        },

        paper: state => ({
          borderRadius: state.theme.spacing(2),
          background: white,
          'box-shadow': state.theme.boxShadows.container,
          maxWidth: state.theme.spacing(81),

          [state.theme.breakpoints.down('sm')]: {
            margin: state.theme.spacing(2),
          },
        }),
      },
    },

    MuiSelect: {
      styleOverrides: {
        select: state => ({
          borderRadius: `${state.theme.spacing(3.5)}`,
          boxShadow: state.theme.boxShadows.input,
          backgroundColor: state.theme.palette.grey[50],
        }),
      },
    },
  },

  typography: {
    fontFamily: 'Inter',
    h2: {
      fontSize: '1.5rem',
      lineHeight: '1.5rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '1.125rem',
      lineHeight: '1.5rem',
      fontWeight: 600,
    },
    h4: {
      fontSize: '1rem',
      lineHeight: '1.5rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: '1.5rem',
      letterSpacing: '0.15px',
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: '1.5rem',
      fontWeight: 400,
    },
    subtitle1: {
      fontSize: '0.75rem',
      lineHeight: '1rem',
    },
  },

  palette: {
    primary: {
      main: '#000000',
      light: '#3b3b3b',
      dark: '#000000',
      contrastText: white,
    },
    secondary: {
      main: '#0945EB',
      light: '#6971FF',
      dark: '#001EB7',
      contrastText: white,
    },
    error: {
      light: '#E57373',
      main: '#F44336',
      dark: '#D32F2F',
      contrastText: white,
    },
    warning: {
      main: '#FF9900',
      dark: '#F57C00',
      light: '#FFB74D',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    info: {
      light: '#64B5F6',
      main: '#2196F3',
      dark: '#1976D2',
      contrastText: white,
    },
    success: {
      main: '#4CAF50',
      light: '#81C784',
      dark: '#008060',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    grey: {
      '50': '#F9FAFC',
      '100': '#F0F2F5',
      '200': '#E7E9EC',
      '300': '#D7D9DC',
      '400': '#B4B5B8',
      '500': '#949598',
      '600': '#6C6D70',
      '700': '#58595C',
      '800': '#3A3B3E',
      '900': '#1A1B1D',
      A100: '#d5d5d5',
      A200: '#aaaaaa',
      A400: '#303030',
      A700: '#616161',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: '#7F7F7F',
      disabled: 'rgba(0, 0, 0, 0.38)',
    },
    divider: 'rgba(0, 0, 0, 0.12)',
    background: {
      paper: white,
      default: '#F8F8F8',
    },
    action: {
      active: 'rgba(0, 0, 0, 0.54)',
      hover: 'rgba(0, 0, 0, 0.08)',
      hoverOpacity: 0.08,
      selected: 'rgba(0, 0, 0, 0.14)',
      disabled: 'rgba(0, 0, 0, 0.26)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
    },
  },
})
