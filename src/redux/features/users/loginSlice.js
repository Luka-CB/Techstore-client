import { createSlice } from "@reduxjs/toolkit";
import { login } from "../../actions/authActions";

const userFromStorage = localStorage.getItem("techstoreUser")
  ? JSON.parse(localStorage.getItem("techstoreUser"))
  : {};

const initialState = {
  isLoading: false,
  isSuccess: false,
  user: userFromStorage,
  isError: false,
};

const loginReducer = createSlice({
  name: "loginReducer",
  initialState,
  reducers: {
    resetLogin: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
    },
    resetUser: (state) => {
      state.user = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = payload;
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { resetLogin, resetUser } = loginReducer.actions;

export default loginReducer.reducer;
