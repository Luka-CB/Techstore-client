import { createSlice } from "@reduxjs/toolkit";
import { updateUser } from "../../actions/authActions";

const initialState = {
  isLoading: false,
  isSuccess: false,
  error: false,
};

const updateUserReducer = createSlice({
  name: "updateUserReducer",
  initialState,
  reducers: {
    resetUpdate: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(updateUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const { resetUpdate } = updateUserReducer.actions;

export default updateUserReducer.reducer;
