import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6200ea',
    },
    secondary: {
      main: '#03dac6',
    },
    background: {
      default: '#f5f5f5',
    },
    text: {
      primary: '#000000',
    },
  },
  typography: {
    h1: {
      fontSize: '5rem',
      fontWeight: 700,
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
      '@media (min-width:600px) and (max-width:960px)': {
        fontSize: '3rem',
      },
      '@media (min-width:960px) and (max-width:1280px)': {
        fontSize: '4rem',
      },
    },
    h2: {
      fontSize: '2.125rem',
      fontWeight: 700,
      '@media (max-width:600px)': {
        fontSize: '1.5rem',
      },
      '@media (min-width:600px) and (max-width:960px)': {
        fontSize: '2rem',
      },
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 600,
      '@media (max-width:600px)': {
        fontSize: '1.25rem',
      },
      '@media (min-width:600px) and (max-width:960px)': {
        fontSize: '1.5rem',
      },
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
    },
  },
});

export default theme;