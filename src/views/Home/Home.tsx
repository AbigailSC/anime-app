import { LoginButton } from '@components/LoginButton';
import React from 'react';
import Profile from '@views/Profile';
import { LogOutButton } from '@components/LogOutButton';
import { useAuth0 } from '@auth0/auth0-react';
import './Home.scss';

const Home: React.FC = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="Home">
      {isAuthenticated ? <LogOutButton /> : <LoginButton />}
      <Profile />
    </div>
  );
};

export default Home;
