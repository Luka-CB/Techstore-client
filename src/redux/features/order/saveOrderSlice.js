import { createSlice } from "@reduxjs/toolkit";
import { saveOrder } from "../../actions/orderActions";

const initialState = {
  isLoading: false,
  isSuccess: false,
  successMsg: "",
  returnedOrderIds: {},
  errorMsg: "",
};

const saveOrderReducer = createSlice({
  name: "saveOrderReducer",
  initialState,
  reducers: {
    resetSaveOrder: () => initialState,
  },
  extraReducers: ({ addCase }) => {
    addCase(saveOrder.pending, (state) => {
      state.isLoading = true;
    }),
      addCase(saveOrder.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.successMsg = payload.msg;
        state.returnedOrderIds = payload.orderIds;
      }),
      addCase(saveOrder.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.errorMsg = payload;
      });
  },
});

export const { resetSaveOrder } = saveOrderReducer.actions;

export default saveOrderReducer.reducer;
