import React, { useState } from 'react';

import { ThemeButton } from '../styles/sharedStyles';

import SaveModal from './SaveModal';

const SaveButton = () => {
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);
  return (
    <>
      <ThemeButton onClick={() => setShowModal(true)}>
        <code>SAVE</code>
      </ThemeButton>
      {showModal && <SaveModal closeModal={closeModal} />}
    </>
  );
};

export default SaveButton;
