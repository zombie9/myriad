import React, { useState, useContext } from 'react';

import { Context } from '../context/context';
import { ThemeButton } from '../styles/sharedStyles';

import SaveModal from './SaveModal';

const LoadButton = () => {
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);
  const { character } = useContext(Context);
  console.log(character);
  return (
    <>
      <ThemeButton onClick={() => setShowModal(true)}>
        <code>LOAD</code>
      </ThemeButton>
      {showModal && <SaveModal closeModal={closeModal} />}
    </>
  );
};

export default LoadButton;
