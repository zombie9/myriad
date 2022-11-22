import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../context/authContext';
import { ThemeButton } from '../styles/sharedStyles';

const LogoutButton = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut()
      .then(() => {
        navigate('/login');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <ThemeButton onClick={() => handleLogout()}>
        <code>LOGOUT</code>
      </ThemeButton>
    </>
  );
};

export default LogoutButton;
