import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  regSuccessMsg: "",
  authModal: false,
  isSignupActive: false,
  userOptionModal: false,
  isModalOpen: false,
  isMobNavOpen: false,
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
    toggleIsModalOpen: (state, { payload }) => {
      state.isModalOpen = payload;
    },
    toggleMobNav: (state, { payload }) => {
      state.isMobNavOpen = payload;
    },
    toggleSignUp: (state, { payload }) => {
      state.isSignupActive = payload;
    },
  },
});

export const {
  setRegSuccessMsg,
  toggleAuthModal,
  toggleUserOptionModal,
  toggleIsModalOpen,
  toggleMobNav,
  toggleSignUp,
} = statesReducer.actions;

export default statesReducer.reducer;
