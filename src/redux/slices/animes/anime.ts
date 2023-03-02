import {
  IAnime,
  IRecentEpisodes,
  ITopAnimes
} from '@interfaces/redux/animes.interface';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Thunk } from '@store/store/store';
import axios from '@utils/axios';
import { AxiosResponse, AxiosError } from 'axios';

const initialState: IAnime = {
  recentEpisodes: null,
  topAnimes: null,
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
    setTopAnimes: (state, action: PayloadAction<ITopAnimes>) => {
      state.topAnimes = action.payload;
    }
  }
});

export const { setIsLoading, setRecentEpisodes, setTopAnimes } =
  animeSlice.actions;

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
      dispatch(setTopAnimes(response.data));
      return response;
    } catch (error) {
      return error as AxiosError;
    } finally {
      dispatch(setIsLoading(false));
    }
  };
