import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#06a3da', // lighter blue for contrast
      light: '#33bfff', // brighter accent blue
      dark: '#0d487c', // deep navy for emphasis
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#b388ff', // softer purple accent
      light: '#d1a9ff',
      dark: '#7c4dff',
      contrastText: '#ffffff',
    },
    error: {
      main: '#ef5350', // softened red for dark bg
    },
    warning: {
      main: '#ffb74d', // amber shade
    },
    info: {
      main: '#4fc3f7', // sky blue
    },
    success: {
      main: '#81c784', // green that pops on dark
    },
    background: {
      default: '#121212', // MUI standard dark bg
      paper: '#1e1e1e', // card/dialog background
    },
    text: {
      primary: '#ffffff', // strong contrast
      secondary: '#b0b0b0', // muted grey
    },
    divider: '#333333',
  },
  typography: {
    fontFamily: "'Poppins' sans-serif",
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

export default darkTheme;
