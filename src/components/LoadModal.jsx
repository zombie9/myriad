import { doc, setDoc } from 'firebase/firestore';
import React, { useContext, useState, useRef } from 'react';
import { X } from 'react-bootstrap-icons';
import styled from 'styled-components';

import { useAuth } from '../context/authContext';
import { Context } from '../context/context';
import { db } from '../firebase';
import {
  ModalBackdrop,
  AuthBox,
  ThemeButton,
  AuthField,
  Heading,
  Field,
  TextLabel,
  SubmitButtonWrapper,
  ErrorBox
} from '../styles/sharedStyles';

const CloseButton = styled.div`
  position: absolute;
  top: 0.1rem;
  right: 0.1rem;
  cursor: pointer;
  color: ${({ theme }) => theme.secondary};
`;

const LoadModal = ({ closeModal }) => {
  const { currentUser } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log('success!');
      closeModal();
    } catch (error) {
      console.error(error);
      setError('Failed to save character');
    }
    setLoading(false);
  };

  return (
    <ModalBackdrop>
      <AuthBox>
        <CloseButton onClick={() => closeModal()}>
          <X size={20} />
        </CloseButton>
        <Heading>L O A D</Heading>
        <Field>
          <TextLabel>Name:</TextLabel>
          <AuthField ref={nameRef} type="text" />
        </Field>
        <SubmitButtonWrapper>
          <ErrorBox>{error && error}</ErrorBox>
          <ThemeButton disabled={loading} type="submit" onClick={handleSubmit}>
            <code>S U B M I T</code>
          </ThemeButton>
        </SubmitButtonWrapper>
      </AuthBox>
    </ModalBackdrop>
  );
};

export default LoadModal;
