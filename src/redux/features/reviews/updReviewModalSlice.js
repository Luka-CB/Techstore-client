import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isUpdReviewModalOpen: false,
  updReviewData: {
    id: "",
    post: "",
  },
};

const updReviewModalReducer = createSlice({
  name: "updReviewModalReducer",
  initialState,
  reducers: {
    resetUpdReviewModal: () => initialState,
    toggleUpdReviewModal: (state, { payload }) => {
      state.isUpdReviewModalOpen = payload;
    },
    setUpdReviewData: (state, { payload }) => {
      state.updReviewData = payload;
    },
  },
});

export const { resetUpdReviewModal, toggleUpdReviewModal, setUpdReviewData } =
  updReviewModalReducer.actions;

export default updReviewModalReducer.reducer;
