import React, { useState } from 'react';
import Account from './pages/Account';
import Accounting from './pages/Accounting';
import Projects from './pages/Projects';
import Sidebar from './components/Sidebar';
import { createTheme, ThemeProvider, Typography, Box } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
      light: '#42a5f5',
      dark: '#1565c0'
    },
    secondary: {
      main: '#dc004e',
      light: '#ff4081',
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
    h1: {
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

const Inventory = () => (
  <Box sx={{ p: 3 }}>
    <Typography variant='h4' gutterBottom>
      Inventory
    </Typography>
    <Typography paragraph>
      This is the Inventory page. Content will be added in the future.
    </Typography>
  </Box>
);

// const Projects = () => (
//   <Box sx={{ p: 3 }}>
//     <Typography variant='h4' gutterBottom>
//       Projects
//     </Typography>
//     <Typography paragraph>
//       This is the Projects page. Content will be added in the future.
//     </Typography>
//   </Box>
// );

function App() {
  const [selectedPage, setSelectedPage] = useState(0);

  const handlePageChange = (pageIndex) => {
    setSelectedPage(pageIndex);
  };

  const renderContent = () => {
    switch(selectedPage) {
      case 0:
        return <Account />
      case 1:
        return <Accounting />;
      case 2:
        return <Inventory />;
      case 3:
        return <Projects />;
      default:
        return <Account />;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Sidebar onPageChange={handlePageChange} selectedPage={selectedPage}>
          {renderContent()}
        </Sidebar>
      </div>
    </ThemeProvider>
  );
}

export default App;