import React, { useState } from 'react';

import { ThemeButton } from '../styles/sharedStyles';

import LoadModal from './LoadModal';

const LoadButton = ({ setMenuIsOpen }) => {
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);

  return (
    <>
      <ThemeButton onClick={() => setShowModal(true)}>
        <code>LOAD</code>
      </ThemeButton>
      {showModal && <LoadModal closeModal={closeModal} setMenuIsOpen={setMenuIsOpen} />}
    </>
  );
};

export default LoadButton;
