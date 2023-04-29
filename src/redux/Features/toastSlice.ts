import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface IToasts {
  toasts: IToast[];
}

const initialState: IToasts = {
  toasts: [],
}

export const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    addToast: (state, action: PayloadAction<IToast>) => {
      // generate random id with math.random times date.now
      state.toasts.push(action.payload);
    },
    removeToast: (state, action) => {
      state.toasts = state.toasts.filter(toast => toast.id !== action.payload);
    }
  }
})

export const { addToast, removeToast } = toastSlice.actions;
export const selectToasts = (state: RootState) => state.toast; 
export default toastSlice.reducer