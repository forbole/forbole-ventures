import { createTheme, Theme, ThemeOptions } from "@mui/material/styles";

export type CustomTheme = Theme;

/** Common themes that don't change across light and dark theme */
export const common = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
      mobile: 0,
      tablet: 767,
      desktop: 1080,
      maxWidth: 1280,
    },
  },
  typography: {
    fontFamily:
      'Inter, "Avenir Next", "Segoe UI", Helvetica, Arial, sans-serif',
    h1: {
      fontSize: '2rem',
      letterSpacing: 0.25,
    },
    h2: {
      fontSize: '1.5rem',
      letterSpacing: 0,
    },
    h3: {
      fontSize: '1.25rem',
      letterSpacing: 0.15,
    },
    h4: {
      fontSize: '1rem',
      letterSpacing: 0.15,
    },
    h5: {
      fontSize: '0.875rem',
      letterSpacing: 0.1,
      fontWeight: 500,
    },
    h6: {
      fontSize: '0.75rem',
      letterSpacing: 0.1,
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
      whiteSpace: 'pre-wrap',
      letterSpacing: 0.5,
    },
    body2: {
      fontSize: '0.875rem',
      letterSpacing: 0.25,
    },
    caption: {
      fontSize: '0.75rem',
      letterSpacing: 0.4,
    },
    button: {
      fontSize: '0.875rem',
      letterSpacing: 1.25,
      textTransform: 'none',
    },
  },
  palette: {
    custom: {
      basic: {
        black: 'rgba(0, 0, 0, 1)',
        white: 'rgba(255, 255, 255, 1)'
      },
      general: {
        main: 'rgba(204, 255, 0, 1)',
        icon: 'rgba(237, 108, 83, 1)',
      },
    },
  },
};

/** Custom theme overrides for light mode */
const lightThemeOverride: ThemeOptions = {
  ...common,
  palette: {
    ...common.palette,
    mode: "light",
  },
};

/** Custom theme overrides for dark mode */
const darkThemeOverride: ThemeOptions = {
  ...common,
  palette: {
    ...common.palette,
    mode: "dark",
  },
};

export const lightTheme = createTheme(lightThemeOverride);
export const darkTheme = createTheme(darkThemeOverride);
