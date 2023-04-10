import { createSlice } from "@reduxjs/toolkit";
import { updatePaidState } from "../../actions/orderActions";

const initialState = {
  isLoading: false,
  isSuccess: false,
  successMsg: "",
  errorMsg: "",
};

const updatePaidStateReducer = createSlice({
  name: "updatePaidStateReducer",
  initialState,
  reducers: {
    resetUpdatePaidState: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(updatePaidState.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updatePaidState.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.successMsg = payload.msg;
      })
      .addCase(updatePaidState.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.errorMsg = payload;
      });
  },
});

export const { resetUpdatePaidState } = updatePaidStateReducer.actions;

export default updatePaidStateReducer.reducer;
