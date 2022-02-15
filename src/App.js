import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './GlobalStyles';
import { Header } from './components/Header';
import { ThemeToggle } from './components/ThemeToggle';
import { lightTheme, darkTheme } from './components/Themes';
import { useDarkMode } from './hooks/useDarkMode';

export const App = () => {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <Header />
    </ThemeProvider>
  );
};
