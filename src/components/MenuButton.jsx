import React from 'react';

import { ThemeButton } from '../styles/sharedStyles';

const MenuButton = ({ setMenuIsOpen }) => {
  return (
    <>
      <ThemeButton
        style={{ marginRight: '1rem' }}
        onClick={() => setMenuIsOpen((menuIsOpen) => !menuIsOpen)}
      >
        <code>MENU</code>
      </ThemeButton>
    </>
  );
};

export default MenuButton;
