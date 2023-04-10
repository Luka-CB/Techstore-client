import { createSlice } from "@reduxjs/toolkit";
import { getOrders } from "../../actions/orderActions";
import { formatDistanceToNow } from "date-fns";

const initialState = {
  isLoading: false,
  isSuccess: false,
  orders: [],
  errorMsg: "",
};

const getOrdersReducer = createSlice({
  name: "getOrdersReducer",
  initialState,
  reducers: {
    resetGetOrders: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getOrders.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOrders.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        const modifiedOrders = payload?.map((order) => {
          const createdAt = formatDistanceToNow(new Date(order.createdAt));
          const updatedAt = formatDistanceToNow(new Date(order.updatedAt));
          const payDate =
            order.payDate !== null &&
            formatDistanceToNow(new Date(order.payDate));
          const deliverDate =
            order.deliverDate !== null &&
            formatDistanceToNow(new Date(order.deliverDate));

          return { ...order, payDate, deliverDate, createdAt, updatedAt };
        });
        state.orders = modifiedOrders;
      })
      .addCase(getOrders.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.errorMsg = payload;
      });
  },
});

export const { resetGetOrders } = getOrdersReducer.actions;

export default getOrdersReducer.reducer;
