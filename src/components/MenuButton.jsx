import React, { useState } from 'react';
import styled from 'styled-components';

import { Context } from '../context/context';
import { ThemeButton } from '../styles/sharedStyles';

const Button = styled(ThemeButton)`
  position: fixed;
  top: 1.3rem;
  right: 1.3rem;
  z-index: 9998;
`;

const MenuBar = styled.header`
  transition: all 0.2s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  padding: 1rem 0;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
  position: fixed;
  top: ${(props) => (props.open ? 0 : '65px')};
  left: 0;
  height: 2.5rem;
  width: 100%;
  background: ${({ theme }) => theme.background};
  z-index: 9996;
`;

const MenuButton = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setMenuIsOpen((menuIsOpen) => setMenuIsOpen(!menuIsOpen))}>
        <code>MENU</code>
      </Button>
      {<MenuBar open={menuIsOpen}>hello</MenuBar>}
    </>
  );
};

export default MenuButton;
