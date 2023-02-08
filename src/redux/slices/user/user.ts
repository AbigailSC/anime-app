import { IUser, IUserInformation } from '@interfaces/redux/user';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Thunk } from '@store/store/store';
// import axios from '@utils/axios';
// import { AxiosResponse, AxiosError } from 'axios';

const initialState: IUser = {
  user: null,
  isLoading: false
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUserInformation>) => {
      state.user = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    }
  }
});

export const { setUser, setIsLoading } = userSlice.actions;

export default userSlice.reducer;

export const getUserInformation =
  (userInfo: IUserInformation): Thunk =>
  async (dispatch): Promise<void> => {
    dispatch(setIsLoading(true));
    try {
      const response = await userInfo;
      dispatch(setUser(response));
      dispatch(setIsLoading(false));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setIsLoading(false));
    }
  };
