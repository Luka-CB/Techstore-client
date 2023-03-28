import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isWarningPopupOpen: false,
  warningPopupIndex: null,
  popupResponse: false,
};

const warningPopupReducer = createSlice({
  name: "warningPopupReducer",
  initialState,
  reducers: {
    resetWarningPopup: () => initialState,
    toggleWarningPopup: (state, { payload }) => {
      state.isWarningPopupOpen = payload;
    },
    setWarningPopupIndex: (state, { payload }) => {
      state.warningPopupIndex = payload;
    },
    setPopupResponse: (state, { payload }) => {
      state.popupResponse = payload;
    },
  },
});

export const {
  resetWarningPopup,
  toggleWarningPopup,
  setWarningPopupIndex,
  setPopupResponse,
} = warningPopupReducer.actions;

export default warningPopupReducer.reducer;
