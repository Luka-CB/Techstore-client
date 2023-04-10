import { createSlice } from "@reduxjs/toolkit";
import { logout } from "../../actions/authActions";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
};

const logoutReducer = createSlice({
  name: "logoutReducer",
  initialState,
  reducers: {
    logoutLocal: () => {
      localStorage.removeItem("techstoreUser");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(logout.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(logout.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { logoutLocal } = logoutReducer.actions;

export default logoutReducer.reducer;
