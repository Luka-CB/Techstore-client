import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  regSuccessMsg: "",
  authModal: false,
  userOptionModal: false,
  deleteModal: false,
};

const statesReducer = createSlice({
  name: "statesReducer",
  initialState,
  reducers: {
    setRegSuccessMsg: (state, { payload }) => {
      state.regSuccessMsg = payload;
    },
    toggleAuthModal: (state, { payload }) => {
      state.authModal = payload;
    },
    toggleUserOptionModal: (state, { payload }) => {
      state.userOptionModal = payload;
    },
    toggleDeleteModal: (state, { payload }) => {
      state.deleteModal = payload;
    },
  },
});

export const {
  setRegSuccessMsg,
  toggleAuthModal,
  toggleUserOptionModal,
  toggleDeleteModal,
} = statesReducer.actions;

export default statesReducer.reducer;
