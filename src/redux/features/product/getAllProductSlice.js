import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../../actions/productActions";

const initialState = {
  isLoading: false,
  isSuccess: false,
  products: [],
  paginationData: {},
  errorMsg: "",
};

const getAllProductReducer = createSlice({
  name: "getAllProductReducer",
  initialState,
  reducers: {
    resetGetAllProduct: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.products = payload.products;
        state.paginationData = payload.paginationData;
      })
      .addCase(getProducts.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.errorMsg = payload;
      });
  },
});

export const { resetGetAllProduct } = getAllProductReducer.actions;

export default getAllProductReducer.reducer;
