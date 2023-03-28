import { createSlice } from "@reduxjs/toolkit";
import { getReviews } from "../../actions/reviewActions";
import { formatDistanceToNow } from "date-fns";

const initialState = {
  isLoading: false,
  isSuccess: false,
  reviews: [],
  errorMsg: "",
};

const getReviewsReducer = createSlice({
  name: "getReviewsReducer",
  initialState,
  reducers: {
    resetGetReviews: () => initialState,
    addNewReview: (state, { payload }) => {
      const review = {
        ...payload,
        createdAt: formatDistanceToNow(new Date(payload.createdAt)) + " ago",
      };
      state.reviews.unshift(review);
    },
    removeReview: (state, { payload }) => {
      const filteredReviews = state.reviews.filter(
        (review) => review._id !== payload
      );
      state.reviews = filteredReviews;
    },
    updateReviewText: (state, { payload }) => {
      state.reviews.map((review) => {
        if (review._id === payload.reviewId) {
          review.post = payload.post;
        }

        return { ...review };
      });
    },
  },
  extraReducers: ({ addCase }) => {
    addCase(getReviews.pending, (state) => {
      state.isLoading = true;
    }),
      addCase(getReviews.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        const modifiedReviews = payload.map((review) => {
          const date = formatDistanceToNow(new Date(review.createdAt));
          return { ...review, createdAt: date + " ago" };
        });
        state.reviews = modifiedReviews;
      }),
      addCase(getReviews.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.errorMsg = payload;
      });
  },
});

export const { resetGetReviews, addNewReview, removeReview, updateReviewText } =
  getReviewsReducer.actions;

export default getReviewsReducer.reducer;
