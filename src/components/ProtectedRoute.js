// components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth();
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  if (!currentUser || !isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
