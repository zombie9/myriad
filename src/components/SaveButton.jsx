import React, { useContext } from 'react';
import styled from 'styled-components';

import { Context } from '../context/context';
import { ThemeButton, TextLabel } from '../styles/sharedStyles';

const Button = styled(ThemeButton)`
  position: fixed;
  top: 1.3rem;
  left: 1.3rem;
  z-index: 9999;
`;

const SaveForm = styled(ThemeButton)`
  position: fixed;
  top: 6rem;
  left: 1.3rem;
  z-index: 9999;
  max-width: 300px;
  text-align: left;
  display: flex;
  align-items: center;
`;

export const SaveButton = () => {
  const { character } = useContext(Context);
  const saveCharacter = () => {
    console.log(character);
    localStorage.setItem('myriad', JSON.stringify(character));
  };
  const handleChange = (event) => console.log(event.target);
  return (
    <>
      <Button onClick={() => saveCharacter()}>Save</Button>
      <SaveForm>
        <TextLabel>Name:</TextLabel>
        <input type="text" onChange={(event) => handleChange(event)} />
      </SaveForm>
    </>
  );
};
