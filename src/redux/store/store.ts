import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import { persistUserConfig, persistAnimeConfig } from './persistInfo';
import userReducer from '@store/slices/user/user';
import animeReducer from '@store/slices/anime/anime';

const store = configureStore({
  reducer: {
    user: persistReducer<ReturnType<typeof userReducer>>(
      persistUserConfig,
      userReducer
    ),
    anime: persistReducer<ReturnType<typeof animeReducer>>(
      persistAnimeConfig,
      animeReducer
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
