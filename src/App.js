import React, { useState, useMemo } from 'react';
import { ThemeProvider } from 'styled-components';

import { Container } from './components/Container';
import { Header } from './components/Header';
import { LoadModal } from './components/LoadModal';
import { SaveButton } from './components/SaveButton';
import { ThemeToggle } from './components/ThemeToggle';
import { Context } from './context/context';
import { emptyCharacter } from './data/emptyCharacter';
import { useDarkMode } from './hooks/useDarkMode';
import GlobalStyles from './styles/GlobalStyles';
import { lightTheme, darkTheme } from './styles/Themes';

export const App = () => {
  const [character, setCharacter] = useState(emptyCharacter);
  const [showLoadModal, setShowLoadModal] = useState(true);

  const value = useMemo(() => ({ character, setCharacter }), [character, setCharacter]);

  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <Context.Provider value={value}>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        {showLoadModal && <LoadModal setShowLoadModal={setShowLoadModal} />}
        <SaveButton />
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        <Header />
        <Container />
      </ThemeProvider>
    </Context.Provider>
  );
};
