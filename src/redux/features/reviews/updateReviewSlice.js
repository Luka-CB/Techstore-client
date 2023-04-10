import { createSlice } from "@reduxjs/toolkit";
import { updateReview } from "../../actions/reviewActions";

const initialState = {
  isLoading: false,
  isSuccess: false,
  successMsg: "",
  errorMsg: "",
};

const updateReviewReducer = createSlice({
  name: "updateReviewReducer",
  initialState,
  reducers: {
    resetUpdateReview: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateReview.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateReview.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.successMsg = payload.msg;
      })
      .addCase(updateReview.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.errorMsg = payload;
      });
  },
});

export const { resetUpdateReview } = updateReviewReducer.actions;

export default updateReviewReducer.reducer;
