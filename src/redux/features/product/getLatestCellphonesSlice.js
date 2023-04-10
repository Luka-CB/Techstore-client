import { createSlice } from "@reduxjs/toolkit";
import { getLatestCellphones } from "../../actions/productActions";

const initialState = {
  isLoading: false,
  isSuccess: false,
  latestCellphones: [],
  errorMsg: "",
};

const getLatestCellphonesReducer = createSlice({
  name: "getLatestCellphonesReducer",
  initialState,
  reducers: {
    resetGetLatestCellphones: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getLatestCellphones.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getLatestCellphones.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.latestCellphones = payload;
      })
      .addCase(getLatestCellphones.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.errorMsg = payload;
      });
  },
});

export const { resetGetLatestCellphones } = getLatestCellphonesReducer.actions;

export default getLatestCellphonesReducer.reducer;
