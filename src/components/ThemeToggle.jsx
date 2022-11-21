import React from 'react';

import { ThemeButton } from '../styles/sharedStyles';

const ThemeToggle = ({ theme, toggleTheme }) => {
  console.log('theme', theme);
  return (
    <ThemeButton style={{ marginLeft: '1rem' }} onClick={toggleTheme}>
      <code>{theme === 'light' ? 'DARK' : 'LIGHT'}</code>
    </ThemeButton>
  );
};

export default ThemeToggle;
