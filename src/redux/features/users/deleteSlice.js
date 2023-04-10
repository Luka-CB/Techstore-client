import { createSlice } from "@reduxjs/toolkit";
import { deleteUser } from "../../actions/authActions";

const initialState = {
  isLoading: false,
  isSuccess: false,
  successMsg: "",
  errorMsg: "",
};

const deleteUserReducer = createSlice({
  name: "deleteUserReducer",
  initialState,
  reducers: {
    resetDeleteUser: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(deleteUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.successMsg = payload.msg;
      })
      .addCase(deleteUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.errorMsg = payload;
      });
  },
});

export const { resetDeleteUser } = deleteUserReducer.actions;

export default deleteUserReducer.reducer;
