import React, { useState, useMemo } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Container from './components/Container';
import Header from './components/Header';
import LoadModal from './components/LoadModal';
import SaveButton from './components/SaveButton';
import ThemeToggle from './components/ThemeToggle';
import SignUp from './components/auth/SignUp';
import { Context } from './context/context';
import { emptyCharacter } from './data/emptyCharacter';
import { useDarkMode } from './hooks/useDarkMode';
import { GlobalStyles } from './styles/GlobalStyles';
import { lightTheme, darkTheme } from './styles/Themes';
import { AuthProvider } from './context/authContext';

export const App = () => {
  const [character, setCharacter] = useState(emptyCharacter);
  const [showLoadModal, setShowLoadModal] = useState(true);
  const [currentSave, setCurrentSave] = useState(null);

  const value = useMemo(
    () => ({ character, setCharacter, currentSave, setCurrentSave }),
    [character, setCharacter, currentSave, setCurrentSave]
  );

  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'dark' ? lightTheme : darkTheme;

  return (
    <AuthProvider>
      <Context.Provider value={value}>
        <ThemeProvider theme={themeMode}>
          <GlobalStyles />
          {showLoadModal && <LoadModal setShowLoadModal={setShowLoadModal} />}
          <SaveButton />
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <Header />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Container />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </Context.Provider>
    </AuthProvider>
  );
};
