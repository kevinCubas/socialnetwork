import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState: AuthUserState = {
  isLoggedIn: false,
  username: null,
}

export const authUserSlice = createSlice({
  name: "authUser",
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.username = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.username = null;
    },
  },
});

export const { login, logout } = authUserSlice.actions;
export const selectAuthUser = (state: RootState) => state.authUser;
export default authUserSlice.reducer;