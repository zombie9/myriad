import React from 'react';
import { useNavigate } from 'react-router-dom';

import { ThemeButton } from '../styles/sharedStyles';

const NavButton = ({ text, path, setMenuIsOpen }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    setMenuIsOpen(false);
    navigate(path);
  };

  return (
    <>
      <ThemeButton onClick={handleClick}>
        <code>{text}</code>
      </ThemeButton>
    </>
  );
};

export default NavButton;
