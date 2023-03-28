import { createSlice } from "@reduxjs/toolkit";

const shippingDataFromStorage = localStorage.getItem("techstoreShippingData")
  ? JSON.parse(localStorage.getItem("techstoreShippingData"))
  : {};

const pickedProductFromStorage = localStorage.getItem("pickedProduct")
  ? JSON.parse(localStorage.getItem("pickedProduct"))
  : {};

const originRouteFromStorage = localStorage.getItem("originRoute")
  ? JSON.parse(localStorage.getItem("originRoute"))
  : "";

const initialState = {
  shippingData: shippingDataFromStorage,
  pickedProduct: pickedProductFromStorage,
  originRoute: originRouteFromStorage,
};

const orderReducer = createSlice({
  name: "orderReducer",
  initialState,
  reducers: {
    setShippingData: (state, { payload }) => {
      state.shippingData = payload;
      localStorage.setItem(
        "techstoreShippingData",
        JSON.stringify(state.shippingData)
      );
    },
    clearShippingData: (state) => {
      state.shippingData = {};
      localStorage.removeItem("techstoreShippingData");
    },
    setPickedProduct: (state, { payload }) => {
      state.pickedProduct = payload;
      localStorage.setItem(
        "pickedProduct",
        JSON.stringify(state.pickedProduct)
      );
    },
    clearPickedProduct: (state) => {
      state.pickedProduct = {};
      localStorage.removeItem("pickedProduct");
    },
    setOriginRoute: (state, { payload }) => {
      state.originRoute = payload;
      localStorage.setItem("originRoute", JSON.stringify(state.originRoute));
    },
    removeOriginRoute: (state) => {
      state.originRoute = "";
      localStorage.removeItem("originRoute");
    },
  },
});

export const {
  setShippingData,
  clearShippingData,
  setPickedProduct,
  clearPickedProduct,
  setOriginRoute,
  removeOriginRoute,
} = orderReducer.actions;

export default orderReducer.reducer;
