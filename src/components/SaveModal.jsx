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
  font-family: Arial;
`;

const CloseButton = styled.div`
  position: absolute;
  top: 0.1rem;
  right: 0.1rem;
  cursor: pointer;
  color: ${({ theme }) => theme.secondary};
`;
const ButtonWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: flex-end;
`;

export const SaveModal = ({ closeModal }) => {
  const { character, currentSave } = useContext(Context);
  const [saveName, setSaveName] = useState();
  const saveCharacter = () => {
    console.log(character);
    const currentSaveData = JSON.parse(localStorage.getItem('myriad')) || {};
    const saveData = { ...currentSaveData, [saveName]: character };
    localStorage.setItem('myriad', JSON.stringify(saveData));
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
          <input
            type="text"
            onChange={(event) => handleChange(event)}
            value={saveName || currentSave}
          />
        </SaveForm>
        <ButtonWrapper>
          <SumbmitButton onClick={() => saveCharacter()}>Save</SumbmitButton>
          <SumbmitButton
            as="a"
            href={`data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(character))}`}
            download={`${saveName || currentSave}.json`}
          >
            Export
          </SumbmitButton>
        </ButtonWrapper>
      </Box>
    </ModalBackdrop>
  );
};
