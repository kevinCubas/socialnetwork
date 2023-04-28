import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState: AuthUserState = {
  isLoggedIn: false,
  user: null,
}

export const authUserSlice = createSlice({
  name: "authUser",
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export const { login, logout } = authUserSlice.actions;
export const selectAuthUser = (state: RootState) => state.authUser;
export default authUserSlice.reducer;