import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import { persistUserConfig } from './persistInfo';
import userReducer from '@store/slices/user/user';

const store = configureStore({
  reducer: {
    user: persistReducer<ReturnType<typeof userReducer>>(
      persistUserConfig,
      userReducer
    )
  },
  middleware: (defaultMiddleware) =>
    defaultMiddleware({
      serializableCheck: false
    })
});

export type RootState = ReturnType<typeof store.getState>;

export type Dispatch = typeof store.dispatch;

export type Thunk = ThunkAction<
  Promise<unknown>,
  RootState,
  unknown,
  Action<unknown>
>;

export const persistor = persistStore(store);

export default store;
