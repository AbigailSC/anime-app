import storage from 'redux-persist/lib/storage';

export const persistUserConfig = {
  key: 'user',
  storage,
  whitelist: ['user']
};

export const persistAnimeConfig = {
  key: 'anime',
  storage,
  whitelist: [
    'recentEpisodes',
    'topAnime',
    'animeByGenre',
    'searchAnime',
    'animeDetails',
    'watchAnime'
  ]
};
