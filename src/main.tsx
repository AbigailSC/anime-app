import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '@styles/main.scss';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter } from 'react-router-dom';

const domain: string = import.meta.env.VITE_APP_AUTH0_DOMAIN;
const clientId: string = import.meta.env.VITE_APP_AUTH0_CLIENT_ID;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>
);
