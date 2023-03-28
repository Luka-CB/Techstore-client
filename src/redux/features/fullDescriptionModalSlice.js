import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isFullDescriptionModalOpen: false,
};

const fullDescriptionModalReducer = createSlice({
  name: "fullDescriptionModalReducer",
  initialState,
  reducers: {
    toggleFullDescriptionModal: (state, { payload }) => {
      state.isFullDescriptionModalOpen = payload;
    },
  },
});

export const { toggleFullDescriptionModal } =
  fullDescriptionModalReducer.actions;

export default fullDescriptionModalReducer.reducer;
