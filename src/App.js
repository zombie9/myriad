import React from 'react';
import { ThemeProvider } from 'styled-components';

import { Container } from './components/Container';
import { Header } from './components/Header';
import { ThemeToggle } from './components/ThemeToggle';
import { useDarkMode } from './hooks/useDarkMode';
import GlobalStyles from './styles/GlobalStyles';
import { lightTheme, darkTheme } from './styles/Themes';

export const App = () => {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <Header />
      <Container />
    </ThemeProvider>
  );
};
