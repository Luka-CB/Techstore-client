import { createSlice } from "@reduxjs/toolkit";
import { getLatestAccessories } from "../../actions/productActions";

const initialState = {
  isLoading: false,
  isSuccess: false,
  latestAccessories: [],
  errorMsg: "",
};

const getLatestAccessoriesReducer = createSlice({
  name: "getLatestAccessoriesReducer",
  initialState,
  reducers: {
    resetGetLatestAccessories: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getLatestAccessories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getLatestAccessories.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.latestAccessories = payload;
      })
      .addCase(getLatestAccessories.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.errorMsg = payload;
      });
  },
});

export const { resetGetLatestAccessories } =
  getLatestAccessoriesReducer.actions;

export default getLatestAccessoriesReducer.reducer;
