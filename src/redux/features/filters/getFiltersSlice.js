import { createSlice } from "@reduxjs/toolkit";
import { getFilters } from "../../actions/filterActions";

const initialState = {
  isLoading: false,
  isSuccess: false,
  filters: [],
  errorMsg: "",
};

const getFiltersReducer = createSlice({
  name: "getFiltersReducer",
  initialState,
  reducers: {
    resetGetFilters: () => initialState,
  },
  extraReducers: ({ addCase }) => {
    addCase(getFilters.pending, (state) => {
      state.isLoading = true;
    }),
      addCase(getFilters.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.filters = payload;
      }),
      addCase(getFilters.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.errorMsg = payload;
      });
  },
});

export const { resetGetFilters } = getFiltersReducer.actions;

export default getFiltersReducer.reducer;
