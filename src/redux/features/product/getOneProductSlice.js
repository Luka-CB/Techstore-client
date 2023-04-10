import { createSlice } from "@reduxjs/toolkit";
import { getProduct } from "../../actions/productActions";

const initialState = {
  isLoading: false,
  isSuccess: false,
  product: {},
  errorMsg: "",
};

const getOneProductReducer = createSlice({
  name: "getOneProductReducer",
  initialState,
  reducers: {
    resetGetOneProduct: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProduct.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.product = payload;
      })
      .addCase(getProduct.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.errorMsg = payload;
      });
  },
});

export const { resetGetOneProduct } = getOneProductReducer.actions;

export default getOneProductReducer.reducer;
