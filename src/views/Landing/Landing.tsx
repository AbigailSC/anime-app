import { LoginButton } from '@components/LoginButton';
import { LogOutButton } from '@components/LogOutButton';
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Landing: React.FC = () => {
  const { isAuthenticated, isLoading, user } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  console.log(user);
  return (
    <div>
      <nav>
        <h1>Kudasai</h1>
        {isAuthenticated ? <LogOutButton /> : <LoginButton />}
      </nav>
    </div>
  );
};

export default Landing;
