import React from 'react';
import { useNavigate } from 'react-router-dom';

import { routes } from '../constants';
import { useAuth } from '../context/authContext';
import { ThemeButton } from '../styles/sharedStyles';

const LogoutButton = ({ setMenuIsOpen }) => {
  const { logOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    setMenuIsOpen(false);
    logOut()
      .then(() => {
        navigate(routes.LOGIN);
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
