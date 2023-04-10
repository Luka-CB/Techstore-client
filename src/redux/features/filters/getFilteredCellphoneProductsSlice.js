import { createSlice } from "@reduxjs/toolkit";
import { getFilteredCellphoneProducts } from "../../actions/filterActions";

const initialState = {
  isLoading: false,
  isSuccess: false,
  filteredCellphoneProducts: [],
  errorMsg: "",
};

const getFilteredCellphoneProductsReducer = createSlice({
  name: "getFilteredCellphoneProductsReducer",
  initialState,
  reducers: {
    resetGetFilteredCellphoneProducts: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFilteredCellphoneProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFilteredCellphoneProducts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.filteredCellphoneProducts = payload;
      })
      .addCase(getFilteredCellphoneProducts.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.errorMsg = payload;
      });
  },
});

export const { resetGetFilteredCellphoneProducts } =
  getFilteredCellphoneProductsReducer.actions;

export default getFilteredCellphoneProductsReducer.reducer;
