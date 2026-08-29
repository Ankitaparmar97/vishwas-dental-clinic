import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.tsx';
import ThemeWrapper from './theme/ThemeWrapper.tsx';
import { AppThemeProvider } from './components/ThemeContext.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ThemeWrapper>
      <AppThemeProvider>
        <App />
      </AppThemeProvider>
    </ThemeWrapper>
  </BrowserRouter>,
);
