import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useCustomDispatch } from '@hooks/redux';
import { getUserInformation } from '@store/slices/user/user';

const LoginButton: React.FC = () => {
  const { loginWithRedirect, user } = useAuth0();
  const dispatch = useCustomDispatch();

  const handleLogin = async (): Promise<void> => {
    try {
      await loginWithRedirect().then(async () => {
        if (user !== undefined) {
          await dispatch(
            getUserInformation({
              email: user.email as string,
              name: user.name as string,
              nickname: user.nickname as string,
              picture: user.picture as string
            })
          );
        }
      });
      // navigate to '/home' page.
    } catch (error) {
      console.log(error);
    }
  };

  return <button onClick={async () => await handleLogin()}>Login</button>;
};

export default LoginButton;
