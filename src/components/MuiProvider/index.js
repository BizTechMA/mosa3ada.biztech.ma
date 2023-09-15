"use client";

import { ThemeProvider, CacheProvider } from "@emotion/react";
import { createTheme, responsiveFontSizes } from "@mui/material";
import rtlPlugin from 'stylis-plugin-rtl';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';

export const muiTheme = createTheme({
  typography: {
    fontFamily: "Alexandria, sans-serif",
  },
  shape: {
    borderRadius: 10,
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#000",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          color: "#000",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: "unset",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          boxShadow: "0px 8px 30px 0px rgba(0, 0, 0, 0.06)",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#0E6146",
      red: "#BB0914",
    },
    error: {
      main: "#BB0914",
    },
    secondary: {
      main: "#022C1E",
    },
  },
});
// Create rtl cache
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

// MaterialUI Theme Provider only runs on the client side, so we need to wrap it in a component that only runs on the client side
export const MuiProvider = ({ children }) => {
  return (
    <CacheProvider  value={cacheRtl}>
      <ThemeProvider theme={responsiveFontSizes(muiTheme)}>
        {children} 
      </ThemeProvider>
    </CacheProvider>
  );
};
