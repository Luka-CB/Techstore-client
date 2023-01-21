import { createSlice } from "@reduxjs/toolkit";
import { getUser } from "../../actions/authActions";

const userFromStorage = localStorage.getItem("techstoreUser")
  ? JSON.parse(localStorage.getItem("techstoreUser"))
  : {};

const initialState = {
  isLoading: false,
  isError: false,
  user: userFromStorage,
};

const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    cleanUser: (state) => {
      state.user = {};
    },
  },
  extraReducers: ({ addCase }) => {
    addCase(getUser.pending, (state) => {
      state.isLoading = true;
    }),
      addCase(getUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload;
      }),
      addCase(getUser.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { cleanUser } = userReducer.actions;

export default userReducer.reducer;
