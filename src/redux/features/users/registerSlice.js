import { createSlice } from "@reduxjs/toolkit";
import { register } from "../../actions/authActions";

const initialState = {
  isLoading: false,
  isSuccess: false,
  error: "",
};

const registerReducer = createSlice({
  name: "registerReducer",
  initialState,
  reducers: {
    resetRegister: () => initialState,
  },
  extraReducers: ({ addCase }) => {
    addCase(register.pending, (state) => {
      state.isLoading = true;
    }),
      addCase(register.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      }),
      addCase(register.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const { resetRegister } = registerReducer.actions;

export default registerReducer.reducer;
