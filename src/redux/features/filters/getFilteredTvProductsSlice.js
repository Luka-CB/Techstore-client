import { createSlice } from "@reduxjs/toolkit";
import { getFilteredTvProducts } from "../../actions/filterActions";

const initialState = {
  isLoading: false,
  isSuccess: false,
  filteredTvProducts: [],
  errorMsg: "",
};

const getFilteredTvProductsReducer = createSlice({
  name: "getFilteredTvProductsReducer",
  initialState,
  reducers: {
    resetGetFilteredTvProducts: () => initialState,
  },
  extraReducers: ({ addCase }) => {
    addCase(getFilteredTvProducts.pending, (state) => {
      state.isLoading = true;
    }),
      addCase(getFilteredTvProducts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.filteredTvProducts = payload;
      }),
      addCase(getFilteredTvProducts.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.errorMsg = payload;
      });
  },
});

export const { resetGetFilteredTvProducts } =
  getFilteredTvProductsReducer.actions;

export default getFilteredTvProductsReducer.reducer;
