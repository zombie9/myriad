import React, { useState, useContext } from 'react';

import { Context } from '../context/context';
import { ThemeButton } from '../styles/sharedStyles';

import SaveModal from './SaveModal';

const SaveButton = () => {
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);
  const { character } = useContext(Context);
  console.log(character);
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
