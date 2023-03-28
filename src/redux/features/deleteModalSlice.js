import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDeleteModalOpen: false,
  delData: {},
};

const deleteModalReducer = createSlice({
  name: "deleteModalReducer",
  initialState,
  reducers: {
    resetDeleteModal: () => initialState,
    setDelData: (state, { payload }) => {
      state.delData = payload;
    },
    toggleDeleteModal: (state, { payload }) => {
      state.isDeleteModalOpen = payload;
    },
  },
});

export const { resetDeleteModal, setDelData, toggleDeleteModal } =
  deleteModalReducer.actions;

export default deleteModalReducer.reducer;
