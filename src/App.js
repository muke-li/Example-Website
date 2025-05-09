import React from 'react';
import Account from './Account';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
      light: '#42a5f5',
      dark: '#1565c0'
    },
    secondary: {
      main: '#dc004e',
      light: 'ff4081',
      dark: '#c51162'
    },
    text: {
      primary: '#333333',
      secondary: '#666666'
    },
    background: {
      default: '#f8f9fa',
      paper: '#ffffff'
    },
  },
  spacing: 8,
  typography: {
    h1:{
      fontSize: '2.5rem',
      fontWeight: 600,
      marginBottom: '1rem',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
      marginBottom: '0.75rem',
      color: '#555555'
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 500,
      color: '#1976d2'
    },
    h4: {
      fontSize: '1.25rem',
      fontWeight: 500,
      marginBottom: '0.5rem'
    },
    body1: {
      fontSize: '1rem',
      color: '#555555'
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        h1: {
          lineHeight: 1.2,
        },
        h4: {
          color: '#dc004e',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderColor: '#e0e0e0',
          borderWidth: '2px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        }
      }
    }
  },
  shape: {
    borderRadius: 8,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Account />
      </div>
    </ThemeProvider>
  );
}

export default App;
