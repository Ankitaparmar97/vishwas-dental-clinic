// ThemeWrapper.tsx
import { ThemeProvider, CssBaseline } from '@mui/material';
import { useMemo, useState, createContext, use } from 'react';
import { lightTheme, darkTheme } from '.';

const ThemeModeContext = createContext({ toggle: () => {}, mode: 'light' });

// eslint-disable-next-line react-refresh/only-export-components
export const useThemeMode = () => use(ThemeModeContext);

export default function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  const theme = useMemo(() => (mode === 'dark' ? darkTheme : lightTheme), [mode]);

  const toggle = () => setMode((prev) => (prev === 'light' ? 'dark' : 'light'));

  return (
    // eslint-disable-next-line react-x/no-unstable-context-value
    <ThemeModeContext value={{ toggle, mode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeModeContext>
  );
}
