import React from 'react';
import styled from 'styled-components';

import { ThemeButton } from '../styles/sharedStyles';

const DarkModeToggle = styled(ThemeButton)`
  position: fixed;
  top: 1.3rem;
  right: 1.3rem;
  z-index: 9998;
`;

const ThemeToggle = ({ theme, toggleTheme }) => {
  console.log('theme', theme);
  return (
    <DarkModeToggle onClick={toggleTheme}>
      <code>{theme === 'light' ? 'DARK' : 'LIGHT'}</code>
    </DarkModeToggle>
  );
};

export default ThemeToggle;
