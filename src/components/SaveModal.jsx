import React, { useContext, useState } from 'react';
import { X } from 'react-bootstrap-icons';
import styled from 'styled-components';

import { Context } from '../context/context';
import { ModalBackdrop, Box, ThemeButton } from '../styles/sharedStyles';

const SaveForm = styled.div`
  text-align: left;
  display: flex;
  align-items: center;
`;

const SaveLabel = styled.div`
  margin-right: 1rem;
`;

const SumbmitButton = styled(ThemeButton)`
  padding: 0.3rem 0.5rem;
  margin-left: 1rem;
`;

const CloseButton = styled.div`
  position: absolute;
  top: 0.1rem;
  right: 0.1rem;
  cursor: pointer;
  color: ${({ theme }) => theme.secondary};
`;

export const SaveModal = ({ closeModal }) => {
  const { character } = useContext(Context);
  const [saveName, setSaveName] = useState();
  const saveCharacter = () => {
    console.log(character);
    const currentSaveData = JSON.parse(localStorage.getItem('myriad')) || {};
    const saveData = { ...currentSaveData, [saveName]: character };
    localStorage.setItem('myriad', JSON.stringify(saveData));
    closeModal();
  };
  const handleChange = (event) => setSaveName(event.target.value);
  return (
    <ModalBackdrop>
      <Box>
        <CloseButton onClick={() => closeModal()}>
          <X size={20} />
        </CloseButton>
        <SaveForm>
          <SaveLabel>Name:</SaveLabel>
          <input type="text" onChange={(event) => handleChange(event)} />
          <SumbmitButton onClick={() => saveCharacter()}>Submit</SumbmitButton>
        </SaveForm>
      </Box>
    </ModalBackdrop>
  );
};
