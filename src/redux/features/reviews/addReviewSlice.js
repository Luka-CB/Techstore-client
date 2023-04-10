import { createSlice } from "@reduxjs/toolkit";
import { addReview } from "../../actions/reviewActions";

const initialState = {
  isLoading: false,
  isSuccess: false,
  addedReview: {},
  errorMsg: "",
};

const addReviewReducer = createSlice({
  name: "addReviewReducer",
  initialState,
  reducers: {
    resetAddReview: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(addReview.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addReview.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.addedReview = payload;
      })
      .addCase(addReview.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.errorMsg = payload;
      });
  },
});

export const { resetAddReview } = addReviewReducer.actions;

export default addReviewReducer.reducer;
