import { createSlice } from "@reduxjs/toolkit";
import { login } from "../../actions/authActions";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
};

const loginReducer = createSlice({
  name: "loginReducer",
  initialState,
  reducers: {
    resetLogin: () => initialState,
  },
  extraReducers: ({ addCase }) => {
    addCase(login.pending, (state) => {
      state.isLoading = true;
    }),
      addCase(login.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      }),
      addCase(login.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { resetLogin } = loginReducer.actions;

export default loginReducer.reducer;
