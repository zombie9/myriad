import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react';
import { X } from 'react-bootstrap-icons';
import styled from 'styled-components';

import { useAuth } from '../context/authContext';
import { Context } from '../context/context';
import { db } from '../firebase';
import {
  ModalBackdrop,
  AuthBox,
  Heading,
  SubmitButtonWrapper,
  ErrorBox,
  ThemeButton
} from '../styles/sharedStyles';

const CloseButton = styled.div`
  position: absolute;
  top: 0.1rem;
  right: 0.1rem;
  cursor: pointer;
  color: ${({ theme }) => theme.secondary};
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

const LoadModal = ({ closeModal }) => {
  const [characterList, setCharacterList] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const { currentUser } = useAuth();
  const { setCharacter } = useContext(Context);
  const currentUserId = currentUser.uid;

  useEffect(() => {
    const unsubscribe = async () => {
      const collectionRef = collection(db, 'characters');
      const q = query(collectionRef, where('userId', '==', currentUserId));
      const snap = await getDocs(q);
      let list = [];
      snap.forEach((doc) => {
        list.push({
          id: doc.id,
          ...doc.data()
        });
      });
      if (list.length < 1) {
        setError('Could not retrieve saved characters.');
        return;
      }
      setCharacterList(list);
      setLoading(false);
    };
    return unsubscribe;
  }, []);

  const handleLoad = (id) => {
    const characterToLoad = characterList.find((char) => char.id === id);
    setCharacter(characterToLoad);
    closeModal();
  };

  console.log('characterList', characterList);

  return (
    <ModalBackdrop>
      <AuthBox>
        <CloseButton onClick={() => closeModal()}>
          <X size={20} />
        </CloseButton>
        <Heading>L O A D</Heading>
        <div style={{ paddingBottom: '0.5rem' }}>Select your character:</div>
        {!loading &&
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
      </AuthBox>
    </ModalBackdrop>
  );
};

export default LoadModal;
