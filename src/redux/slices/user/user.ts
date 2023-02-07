import { createSlice } from '@reduxjs/toolkit';

export interface IUser {
  email: string | null;
  name: string | null;
  nickname: string | null;
  picture: string | null;
}

const initialState: IUser = {
  email: null,
  name: null,
  nickname: null,
  picture: null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {}
});

export default userSlice.reducer;
