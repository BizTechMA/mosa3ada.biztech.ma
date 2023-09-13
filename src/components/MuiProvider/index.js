"use client";

import { ThemeProvider } from "@emotion/react";
import { createTheme, responsiveFontSizes } from "@mui/material";

export const muiTheme = createTheme({
  typography: {
    fontFamily: "Alexandria, sans-serif",
  },
  shape: {
    borderRadius: 10,
  },
  components: {
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

// MaterialUI Theme Provider only runs on the client side, so we need to wrap it in a component that only runs on the client side
export const MuiProvider = ({ children }) => {
  return (
    <ThemeProvider theme={responsiveFontSizes(muiTheme)}>
      {children}
    </ThemeProvider>
  );
};
