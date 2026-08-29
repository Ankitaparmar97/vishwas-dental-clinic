import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0d487c',
      light: '#06a3da',
      dark: '#091e3e',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#FDFBFF',
      light: '#ffa15b',
      dark: '#b26023',
      contrastText: '#ffffff',
    },
    error: {
      main: '#d32f2f',
    },
    warning: {
      main: '#f57c00',
    },
    info: {
      main: '#0288d1',
    },
    success: {
      main: '#2e7d32',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
    text: {
      primary: '#222222',
      secondary: '#6a6c72',
    },
    divider: '#e0e0e0',
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    h1: { fontSize: '2.2rem', fontWeight: 600, lineHeight: 1.3 },
    h2: { fontSize: '1.8rem', fontWeight: 600, lineHeight: 1.35 },
    h3: { fontSize: '1.6rem', fontWeight: 500, lineHeight: 1.4 },
    h4: { fontSize: '1.4rem', fontWeight: 500, lineHeight: 1.45 },
    body1: { fontSize: '1rem', fontWeight: 400, lineHeight: 1.6 },
    body2: { fontSize: '0.875rem', fontWeight: 400, lineHeight: 1.6 },
    button: { fontSize: '0.95rem', fontWeight: 500, textTransform: 'none' },
  },

  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
    },
  },
});

export default lightTheme;
