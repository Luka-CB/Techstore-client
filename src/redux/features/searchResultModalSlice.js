import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSearchResultModalOpen: false,
};

const searchResultModalReducer = createSlice({
  name: "searchResultModalReducer",
  initialState,
  reducers: {
    toggleSearchResultModal: (state, { payload }) => {
      state.isSearchResultModalOpen = payload;
    },
  },
});

export const { toggleSearchResultModal } = searchResultModalReducer.actions;

export default searchResultModalReducer.reducer;
