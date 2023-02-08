import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Profile: React.FC = () => {
  const { user, isAuthenticated } = useAuth0();
  return (
    <>
      {isAuthenticated && (
        <div>
          <img src={user?.picture} alt={user?.given_name} />
          <h3>{user?.name}</h3>
        </div>
      )}
      <h3>NAVBAR FUNCAAAA</h3>
    </>
  );
};

export default Profile;
