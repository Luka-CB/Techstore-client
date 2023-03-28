import { createSlice } from "@reduxjs/toolkit";
import { getLatestComputers } from "../../actions/productActions";

const initialState = {
  isLoading: false,
  isSuccess: false,
  latestComputers: [],
  errorMsg: "",
};

const getLatestComputersReducer = createSlice({
  name: "getLatestComputersReducer",
  initialState,
  reducers: {
    resetGetLatestComputers: () => initialState,
  },
  extraReducers: ({ addCase }) => {
    addCase(getLatestComputers.pending, (state) => {
      state.isLoading = true;
    }),
      addCase(getLatestComputers.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.latestComputers = payload;
      }),
      addCase(getLatestComputers.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.errorMsg = payload;
      });
  },
});

export const { resetGetLatestComputers } = getLatestComputersReducer.actions;

export default getLatestComputersReducer.reducer;
