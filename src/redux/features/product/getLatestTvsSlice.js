import { createSlice } from "@reduxjs/toolkit";
import { getLatestTvs } from "../../actions/productActions";

const initialState = {
  isLoading: false,
  isSuccess: false,
  latestTvs: [],
  errorMsg: "",
};

const getLatestTvsReducer = createSlice({
  name: "getLatestTvsReducer",
  initialState,
  reducers: {
    resetGetLatestTvs: () => initialState,
  },
  extraReducers: ({ addCase }) => {
    addCase(getLatestTvs.pending, (state) => {
      state.isLoading = true;
    }),
      addCase(getLatestTvs.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.latestTvs = payload;
      }),
      addCase(getLatestTvs.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.errorMsg = payload;
      });
  },
});

export const { resetGetLatestTvs } = getLatestTvsReducer.actions;

export default getLatestTvsReducer.reducer;
