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
  reducers: {},
  extraReducers: ({ addCase }) => {
    addCase(logout.pending, (state) => {
      state.isLoading = true;
    }),
      addCase(logout.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      }),
      addCase(logout.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const {} = logoutReducer.actions;

export default logoutReducer.reducer;
