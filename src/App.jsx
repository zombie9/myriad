import React, { useState, useMemo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Container from './components/Container';
import Header from './components/Header';
import LoadModal from './components/LoadModal';
import SaveButton from './components/SaveButton';
import ThemeToggle from './components/ThemeToggle';
import Login from './components/auth/Login';
import PrivateRoute from './components/auth/PrivateRoute';
import SignUp from './components/auth/SignUp';
import { AuthProvider } from './context/authContext';
import { Context } from './context/context';
import { emptyCharacter } from './data/emptyCharacter';
import { useDarkMode } from './hooks/useDarkMode';
import { GlobalStyles } from './styles/GlobalStyles';
import { lightTheme, darkTheme } from './styles/Themes';

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
              <Route
                path="/"
                element={
                  <PrivateRoute>
                    <Container />
                  </PrivateRoute>
                }
              />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </Context.Provider>
    </AuthProvider>
  );
};
