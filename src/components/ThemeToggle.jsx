import React from 'react';
import styled from 'styled-components';

import { ThemeButton } from '../styles/sharedStyles';

const DarkModeToggle = styled(ThemeButton)`
  position: fixed;
  top: 1.3rem;
  right: 1.3rem;
  z-index: 9999;
`;

export const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <DarkModeToggle onClick={toggleTheme}>
      {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
    </DarkModeToggle>
  );
};
