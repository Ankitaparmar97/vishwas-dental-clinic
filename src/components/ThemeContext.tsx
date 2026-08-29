// theme/ThemeContext.tsx
import { createContext, useState, useEffect, useMemo, ReactNode } from 'react';
import { ThemeProvider, CssBaseline, Theme } from '@mui/material';
import { lightTheme, darkTheme } from '../theme';

interface ThemeContextType {
  mode: 'light' | 'dark';
  toggleTheme: () => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const AppThemeContext = createContext<ThemeContextType>({
  mode: 'light',
  toggleTheme: () => {},
});

export const AppThemeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  // Load from localStorage if available
  useEffect(() => {
    const saved = localStorage.getItem('themeMode') as 'light' | 'dark' | null;
    if (saved) setMode(saved);
  }, []);

  const toggleTheme = () => {
    setMode((prev) => {
      const next = prev === 'light' ? 'dark' : 'light';
      localStorage.setItem('themeMode', next);
      return next;
    });
  };

  // Select theme based on mode
  const theme: Theme = useMemo(() => (mode === 'light' ? lightTheme : darkTheme), [mode]);

  return (
    // eslint-disable-next-line react-x/no-unstable-context-value
    <AppThemeContext value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppThemeContext>
  );
};
