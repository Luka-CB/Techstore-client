import { createSlice } from "@reduxjs/toolkit";
import { deleteReview } from "../../actions/reviewActions";

const initialState = {
  isLoading: false,
  isSuccess: false,
  successMsg: "",
  errorMsg: "",
};

const deleteReviewReducer = createSlice({
  name: "deleteReviewReducer",
  initialState,
  reducers: {
    resetDeleteReviewReview: () => initialState,
  },
  extraReducers: ({ addCase }) => {
    addCase(deleteReview.pending, (state) => {
      state.isLoading = true;
    }),
      addCase(deleteReview.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.successMsg = payload.msg;
      }),
      addCase(deleteReview.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.errorMsg = payload;
      });
  },
});

export const { resetDeleteReviewReview } = deleteReviewReducer.actions;

export default deleteReviewReducer.reducer;
