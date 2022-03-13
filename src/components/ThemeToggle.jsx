import React from 'react';
import styled from 'styled-components';

const ThemeButton = styled.button`
  background: none;
  color: ${({ theme }) => theme.primary};
  border: 1px solid ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0.5rem;
  position: fixed;
  top: 1.3rem;
  right: 1.3rem;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
  z-index: 100;

  &:hover {
    background: ${({ theme }) => theme.panel};
  }
`;

export const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <ThemeButton onClick={toggleTheme}>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</ThemeButton>
  );
};
