import React from 'react';
import { useNavigate } from 'react-router-dom';

import { ThemeButton } from '../styles/sharedStyles';

const LoadButton = () => {
  // const [showModal, setShowModal] = useState(false);
  // const closeModal = () => setShowModal(false);
  const navigate = useNavigate();

  return (
    <>
      <ThemeButton onClick={() => navigate('./load')}>
        <code>LOAD</code>
      </ThemeButton>
      {/* {showModal && <LoadModal closeModal={closeModal} setMenuIsOpen={setMenuIsOpen} />} */}
    </>
  );
};

export default LoadButton;
