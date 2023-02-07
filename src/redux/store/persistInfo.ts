import storage from 'redux-persist/lib/storage';

export const persistUserConfig = {
  key: 'user',
  storage,
  whitelist: ['user']
};
