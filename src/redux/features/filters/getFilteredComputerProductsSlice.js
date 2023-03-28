import { createSlice } from "@reduxjs/toolkit";
import { getFilteredComputerProducts } from "../../actions/filterActions";

const initialState = {
  isLoading: false,
  isSuccess: false,
  filteredComputerProducts: [],
  errorMsg: "",
};

const getFilteredComputerProductsReducer = createSlice({
  name: "getFilteredComputerProductsReducer",
  initialState,
  reducers: {
    resetGetFilteredComputerProducts: () => initialState,
  },
  extraReducers: ({ addCase }) => {
    addCase(getFilteredComputerProducts.pending, (state) => {
      state.isLoading = true;
    }),
      addCase(getFilteredComputerProducts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.filteredComputerProducts = payload;
      }),
      addCase(getFilteredComputerProducts.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.errorMsg = payload;
      });
  },
});

export const { resetGetFilteredComputerProducts } =
  getFilteredComputerProductsReducer.actions;

export default getFilteredComputerProductsReducer.reducer;
