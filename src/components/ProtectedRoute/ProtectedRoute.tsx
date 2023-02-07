import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute: React.FC = () => {
  const user = false;
  return user ? <Outlet /> : <Navigate replace to="/" />;
};

export default PrivateRoute;
