import { createSlice } from "@reduxjs/toolkit";
import { updateIncome } from "../../actions/incomeActions";

const initialState = {
  isLoading: false,
  isSuccess: false,
  successMsg: "",
  errorMsg: "",
};

const updateIncomeReducer = createSlice({
  name: "updateIncomeReducer",
  initialState,
  reducers: {
    resetUpdateIcome: () => initialState,
  },
  extraReducers: ({ addCase }) => {
    addCase(updateIncome.pending, (state) => {
      state.isLoading = true;
    }),
      addCase(updateIncome.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.successMsg = payload;
      }),
      addCase(updateIncome.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.errorMsg = payload;
      });
  },
});

export const { resetUpdateIcome } = updateIncomeReducer.actions;

export default updateIncomeReducer.reducer;
