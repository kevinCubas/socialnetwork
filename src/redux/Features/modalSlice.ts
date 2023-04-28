import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState: IModalState = {
  isEditOpen: false,
  isDeleteOpen: false,
  postId: null
}

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openEditModal: (state, action) => {
      state.isEditOpen = true;
      state.postId = action.payload
    },
    closeEditModal: (state) => {
      state.isEditOpen = false;
      state.postId = null
    },
    openDeleteModal: (state, action) => {
      state.isDeleteOpen = true;
      state.postId = action.payload
    },
    closeDeleteModal: (state) => {
      state.isDeleteOpen = false;
      state.postId = null
    }
  }
})

export const { openEditModal, closeEditModal, closeDeleteModal, openDeleteModal } = modalSlice.actions;

export const selectEditModal = (state: RootState) => state.modal;
export default modalSlice.reducer;