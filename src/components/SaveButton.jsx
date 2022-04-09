import React, { useState } from 'react';
import styled from 'styled-components';

import { ThemeButton } from '../styles/sharedStyles';

import { SaveModal } from './SaveModal';

const Button = styled(ThemeButton)`
  position: fixed;
  top: 1.3rem;
  left: 1.3rem;
  z-index: 9998;
`;

export const SaveButton = () => {
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);
  return (
    <>
      <Button onClick={() => setShowModal(true)}>Save</Button>
      {showModal && <SaveModal closeModal={closeModal} />}
    </>
  );
};
