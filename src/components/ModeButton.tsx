import { use } from 'react';
import { Box } from '@mui/material';
// import { ColorModeContext } from './ThemeContext';
import ThemeSwitch from './ThemeSwitch';
import { AppThemeContext } from './ThemeContext';

export default function App() {
  // const { mode, toggleTheme } = use(ColorModeContext);
  const { mode, toggleTheme } = use(AppThemeContext);

  return (
    <>
      <Box>
        <ThemeSwitch checked={mode === 'dark'} onChange={toggleTheme} />
      </Box>
    </>
  );
}
