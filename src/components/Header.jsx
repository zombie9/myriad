import React, { useState, useContext } from 'react';
import styled from 'styled-components';

import { useAuth } from '../context/authContext';
import { Context } from '../context/context';
import { useFirebase } from '../hooks/useFirebase';
import { SubmitButtonWrapper, ErrorBox, ThemeButton } from '../styles/sharedStyles';

import LoadButton from './LoadButton';
import LogoutButton from './LogoutButton';
import MenuButton from './MenuButton';
import SaveButton from './SaveButton';
import ThemeToggle from './ThemeToggle';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.5rem;
  padding: 1rem 0;
  padding-right: 1rem;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.25);
  position: fixed;
  top: 0;
  left: 0;
  background: ${({ theme }) => theme.background};
  z-index: 95;
  width: 100vw;

  @media only screen and (min-width: 720px) {
    font-size: 2rem;
  }
`;

const MenuBar = styled.div`
  transition: all 0.2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;
  font-size: 1.5rem;
  padding: 1rem 0;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
  position: fixed;
  top: ${(props) => (props.open ? '58px' : 0)};
  left: 0;
  height: 2.5rem;
  width: 100vw;
  background: ${({ theme }) => theme.background};
  z-index: 90;

  @media only screen and (min-width: 720px) {
    top: ${(props) => (props.open ? '70px' : 0)};
    font-size: 2rem;
  }
`;

const CharacterRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;

const CharacterButton = styled(ThemeButton)`
  width: 100%;
  min-width: 320px;
`;

const Header = ({ theme, toggleTheme }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const { currentUser } = useAuth();
  const { characterList, loading, error } = useFirebase(currentUser);
  const { setCharacter } = useContext(Context);

  const handleLoad = (id) => {
    const characterToLoad = characterList.find((char) => char.id === id);
    setCharacter(characterToLoad);
    setMenuIsOpen(false);
  };

  return (
    <>
      <StyledHeader>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        <code>M Y R I A D</code>
        <MenuButton setMenuIsOpen={setMenuIsOpen} />
      </StyledHeader>
      <MenuBar open={menuIsOpen}>
        <SaveButton setMenuIsOpen={setMenuIsOpen} />
        {/* <LoadButton setMenuIsOpen={setMenuIsOpen} /> */}
        <LogoutButton setMenuIsOpen={setMenuIsOpen} />
        <hr />
        {loading && loading}
        {characterList &&
          characterList.map((char) => {
            return (
              <CharacterRow key={char.id}>
                <CharacterButton onClick={() => handleLoad(char.id)}>
                  <code>{char.id.toUpperCase()}</code>
                </CharacterButton>
              </CharacterRow>
            );
          })}
        <SubmitButtonWrapper>
          <ErrorBox>{error && error}</ErrorBox>
        </SubmitButtonWrapper>
      </MenuBar>
    </>
  );
};

export default Header;
