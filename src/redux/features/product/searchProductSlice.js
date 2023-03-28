import { createSlice } from "@reduxjs/toolkit";
import { searchProduct } from "../../actions/productActions";

const initialState = {
  isLoading: false,
  isSuccess: false,
  searchResult: [],
  errorMsg: "",
};

const searchProductReducer = createSlice({
  name: "searchProductReducer",
  initialState,
  reducers: {
    resetSearchProduct: () => initialState,
  },
  extraReducers: ({ addCase }) => {
    addCase(searchProduct.pending, (state) => {
      state.isLoading = true;
    }),
      addCase(searchProduct.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.searchResult = payload;
      }),
      addCase(searchProduct.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.errorMsg = payload;
      });
  },
});

export const { resetSearchProduct } = searchProductReducer.actions;

export default searchProductReducer.reducer;
