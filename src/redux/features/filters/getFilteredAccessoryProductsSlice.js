import { createSlice } from "@reduxjs/toolkit";
import { getFilteredAccessoryProducts } from "../../actions/filterActions";

const initialState = {
  isLoading: false,
  isSuccess: false,
  filteredAccessoryProducts: [],
  errorMsg: "",
};

const getFilteredAccessoryProductsReducer = createSlice({
  name: "getFilteredAccessoryProductsReducer",
  initialState,
  reducers: {
    resetGetFilteredAccessoryProducts: () => initialState,
  },
  extraReducers: ({ addCase }) => {
    addCase(getFilteredAccessoryProducts.pending, (state) => {
      state.isLoading = true;
    }),
      addCase(getFilteredAccessoryProducts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.filteredAccessoryProducts = payload;
      }),
      addCase(getFilteredAccessoryProducts.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.errorMsg = payload;
      });
  },
});

export const { resetGetFilteredAccessoryProducts } =
  getFilteredAccessoryProductsReducer.actions;

export default getFilteredAccessoryProductsReducer.reducer;
