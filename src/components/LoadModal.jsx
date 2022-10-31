import React, { useState, useContext } from 'react';
import { X } from 'react-bootstrap-icons';
import styled from 'styled-components';

import { Context } from '../context/context';
import { ModalBackdrop, Box, ThemeButton, StatField } from '../styles/sharedStyles';

const LoadForm = styled.div`
  text-align: left;
  display: flex;
  align-items: center;
`;

const LoadLabel = styled.div`
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

const LoadSelect = styled(StatField)`
  margin: 0;
  width: 10rem;
`;

export const LoadModal = ({ setShowLoadModal }) => {
  const currentSaveData = JSON.parse(localStorage.getItem('myriad'));
  if (!currentSaveData) return null;
  const { setCharacter, setCurrentSave } = useContext(Context);
  const [selection, setSelection] = useState('new');
  const handleChange = (event) => {
    console.log(event.target.value);
    setSelection(event.target.value);
  };
  const handleLoad = () => {
    if (Object.keys(currentSaveData).includes(selection)) {
      setCharacter(currentSaveData[selection]);
    }
    setCurrentSave(selection);
    setShowLoadModal(false);
  };

  return (
    <ModalBackdrop>
      <Box>
        <CloseButton onClick={() => setShowLoadModal(false)}>
          <X size={20} />
        </CloseButton>
        <LoadForm>
          <LoadLabel>Select character:</LoadLabel>
          <LoadSelect onChange={(event) => handleChange(event)}>
            <option value="new">New Character</option>
            {Object.entries(currentSaveData).map(([name]) => {
              return <option key={name}>{name}</option>;
            })}
          </LoadSelect>
          <SumbmitButton onClick={handleLoad}>Load</SumbmitButton>
        </LoadForm>
      </Box>
    </ModalBackdrop>
  );
};
