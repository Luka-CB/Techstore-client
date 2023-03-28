import { createSlice } from "@reduxjs/toolkit";
import { getOrder } from "../../actions/orderActions";
import { formatDistanceToNow } from "date-fns";

const initialState = {
  isLoading: false,
  isSuccess: false,
  order: {},
  errorMsg: "",
};

const getOrderReducer = createSlice({
  name: "getOrderReducer",
  initialState,
  reducers: {
    resetGetOrder: () => initialState,
  },
  extraReducers: ({ addCase }) => {
    addCase(getOrder.pending, (state) => {
      state.isLoading = true;
    }),
      addCase(getOrder.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        const modifiedOrder = {
          ...payload,
          payDate:
            payload.payDate !== null &&
            formatDistanceToNow(new Date(payload.payDate)),
          deliverDate:
            payload.deliverDate !== null &&
            formatDistanceToNow(new Date(payload.deliverDate)),
          createdAt: formatDistanceToNow(new Date(payload.createdAt)),
          updatedAt: formatDistanceToNow(new Date(payload.updatedAt)),
        };
        state.order = modifiedOrder;
      }),
      addCase(getOrder.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.errorMsg = payload;
      });
  },
});

export const { resetGetOrder } = getOrderReducer.actions;

export default getOrderReducer.reducer;
