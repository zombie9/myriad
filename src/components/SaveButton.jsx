import React, { useContext } from 'react';
import styled from 'styled-components';

import { Context } from '../context/context';
import { ThemeButton } from '../styles/sharedStyles';

const Button = styled(ThemeButton)`
  position: fixed;
  top: 1.3rem;
  left: 1.3rem;
  z-index: 9999;
`;

export const SaveButton = () => {
  const { character } = useContext(Context);
  const saveCharacter = () => {
    console.log(character);
    localStorage.setItem('myriad', JSON.stringify(character));
  };
  return <Button onClick={() => saveCharacter()}>Save</Button>;
};
