import { AxiosResponse, AxiosError } from 'axios';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  IAnime,
  IRecentEpisodes,
  ITopAnimes,
  IAnimeByGenre,
  ISearchAnime,
  IAnimeDetails,
  IAnimeEpisodes
} from '@interfaces/redux/animes.interface';
import { Thunk } from '@store/store/store';
import axios from '@utils/axios';

const initialState: IAnime = {
  recentEpisodes: null,
  topAnime: null,
  animeByGenre: null,
  searchAnime: null,
  animeDetails: null,
  watchAnime: null,
  isLoading: false
};

const animeSlice = createSlice({
  name: 'anime',
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setRecentEpisodes: (state, action: PayloadAction<IRecentEpisodes>) => {
      state.recentEpisodes = action.payload;
    },
    setTopAnime: (state, action: PayloadAction<ITopAnimes>) => {
      state.topAnime = action.payload;
    },
    setAnimeByGenre: (state, action: PayloadAction<IAnimeByGenre>) => {
      state.animeByGenre = action.payload;
    },
    setSearchAnime: (state, action: PayloadAction<ISearchAnime>) => {
      state.searchAnime = action.payload;
    },
    setAnimeDetails: (state, action: PayloadAction<IAnimeDetails>) => {
      state.animeDetails = action.payload;
    },
    setWatchAnime: (state, action: PayloadAction<IAnimeEpisodes>) => {
      state.watchAnime = action.payload;
    }
  }
});

export const {
  setIsLoading,
  setRecentEpisodes,
  setTopAnime,
  setAnimeByGenre,
  setSearchAnime,
  setAnimeDetails,
  setWatchAnime
} = animeSlice.actions;

export default animeSlice.reducer;

export const getRecentEpisodes =
  (): Thunk =>
  async (dispatch): Promise<AxiosResponse | AxiosError> => {
    dispatch(setIsLoading(true));
    try {
      const response: AxiosResponse = await axios.get('recent-episodes');
      dispatch(setRecentEpisodes(response.data));
      return response;
    } catch (error) {
      return error as AxiosError;
    } finally {
      dispatch(setIsLoading(false));
    }
  };

export const getTopAiringAnimes =
  (): Thunk =>
  async (dispatch): Promise<AxiosResponse | AxiosError> => {
    dispatch(setIsLoading(true));
    try {
      const response: AxiosResponse = await axios.get('top-airing');
      dispatch(setTopAnime(response.data));
      return response;
    } catch (error) {
      return error as AxiosError;
    } finally {
      dispatch(setIsLoading(false));
    }
  };

export const getAnimeByGenre =
  (genre: string): Thunk =>
  async (dispatch): Promise<AxiosResponse | AxiosError> => {
    dispatch(setIsLoading(true));
    try {
      const response: AxiosResponse = await axios.get(`genre/${genre}`);
      dispatch(setAnimeByGenre(response.data));
      return response;
    } catch (error) {
      return error as AxiosError;
    } finally {
      dispatch(setIsLoading(false));
    }
  };

export const searchAnime =
  (query: string, page: number = 1): Thunk =>
  async (dispatch): Promise<AxiosResponse | AxiosError> => {
    dispatch(setIsLoading(true));
    try {
      const response: AxiosResponse = await axios.get(
        `search/${query}/${page}`
      );
      dispatch(setSearchAnime(response.data));
      return response;
    } catch (error) {
      return error as AxiosError;
    } finally {
      dispatch(setIsLoading(false));
    }
  };

export const getAnimeDetails =
  (id: string): Thunk =>
  async (dispatch): Promise<AxiosResponse | AxiosError> => {
    dispatch(setIsLoading(true));
    try {
      const response: AxiosResponse = await axios.get(`info/${id}`);
      dispatch(setAnimeDetails(response.data));
      return response;
    } catch (error) {
      return error as AxiosError;
    } finally {
      dispatch(setIsLoading(false));
    }
  };

export const watchAnime =
  (id: string): Thunk =>
  async (dispatch): Promise<AxiosResponse | AxiosError> => {
    dispatch(setIsLoading(true));
    try {
      const response: AxiosResponse = await axios.get(`watch/${id}`);
      dispatch(setWatchAnime(response.data));
      return response;
    } catch (error) {
      return error as AxiosError;
    } finally {
      dispatch(setIsLoading(false));
    }
  };
