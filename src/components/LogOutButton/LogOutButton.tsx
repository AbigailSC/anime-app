import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LogOutButton: React.FC = () => {
  const { logout } = useAuth0();
  return <button onClick={() => logout()}>Log out</button>;
};

export default LogOutButton;
