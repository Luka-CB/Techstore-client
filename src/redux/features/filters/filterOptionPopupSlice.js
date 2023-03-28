import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isFilterOptionPopupOpen: false,
};

const filterOptionPopupReducer = createSlice({
  name: "filterOptionPopupReducer",
  initialState,
  reducers: {
    toggleFilterOptionPopup: (state, { payload }) => {
      state.isFilterOptionPopupOpen = payload;
    },
  },
});

export const { toggleFilterOptionPopup } = filterOptionPopupReducer.actions;

export default filterOptionPopupReducer.reducer;
