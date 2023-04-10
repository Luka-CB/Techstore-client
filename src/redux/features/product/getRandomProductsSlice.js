import { createSlice } from "@reduxjs/toolkit";
import { getRandomProducts } from "../../actions/productActions";

const initialState = {
  isLoading: false,
  isSuccess: false,
  randomProducts: [],
  errorMsg: "",
};

const getRandomProductsReducer = createSlice({
  name: "getRandomProductsReducer",
  initialState,
  reducers: {
    resetGetRandomProductsProduct: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRandomProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRandomProducts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.randomProducts = payload;
      })
      .addCase(getRandomProducts.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.errorMsg = payload;
      });
  },
});

export const { resetGetRandomProductsProduct } =
  getRandomProductsReducer.actions;

export default getRandomProductsReducer.reducer;
