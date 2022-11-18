import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../context/authContext';

const PrivateRoute = ({ children }) => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate('./login');
    }
  }, []);
  return <>{children}</>;
};

export default PrivateRoute;
