import { createSlice } from "@reduxjs/toolkit";

const cartItemsFromStorage = localStorage.getItem("techstoreCartItems")
  ? JSON.parse(localStorage.getItem("techstoreCartItems"))
  : [];

const cartItemCountFromStorage = localStorage.getItem("techstoreCartItemCount")
  ? JSON.parse(localStorage.getItem("techstoreCartItemCount"))
  : 0;

const cartItemsInfoFromStorage = localStorage.getItem("cartItemsInfo")
  ? JSON.parse(localStorage.getItem("cartItemsInfo"))
  : {};

const initialState = {
  cartItems: cartItemsFromStorage,
  cartItemCount: cartItemCountFromStorage,
  cartItemsInfo: cartItemsInfoFromStorage,
};

const cartReducer = createSlice({
  name: "cartReducer",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const isItemInCart = state.cartItems.some(
        (item) => item.id === payload.id && item.attr._id === payload.attr._id
      );

      if (isItemInCart) return;

      state.cartItems.push(payload);
      state.cartItemCount += payload.inCartQty;

      localStorage.setItem(
        "techstoreCartItems",
        JSON.stringify(state.cartItems)
      );

      localStorage.setItem(
        "techstoreCartItemCount",
        JSON.stringify(state.cartItemCount)
      );
    },

    updateCart: (state, { payload }) => {
      const cartItem = state.cartItems.find(
        (cartItem) => cartItem.attr._id === payload.id
      );

      payload.increase ? (cartItem.inCartQty += 1) : (cartItem.inCartQty -= 1);
      payload.increase
        ? (state.cartItemCount += 1)
        : (state.cartItemCount -= 1);

      localStorage.setItem(
        "techstoreCartItems",
        JSON.stringify(state.cartItems)
      );

      localStorage.setItem(
        "techstoreCartItemCount",
        JSON.stringify(state.cartItemCount)
      );
    },

    removeCartItem: (state, { payload }) => {
      const filteredCartItems = state.cartItems.filter(
        (cartItem) => cartItem.attr._id !== payload
      );

      state.cartItems = filteredCartItems;
      state.cartItemCount -= 1;

      localStorage.setItem(
        "techstoreCartItems",
        JSON.stringify(state.cartItems)
      );

      localStorage.setItem(
        "techstoreCartItemCount",
        JSON.stringify(state.cartItemCount)
      );
    },

    clearCart: (state) => {
      state.cartItems = [];
      state.cartItemCount = 0;

      localStorage.setItem(
        "techstoreCartItems",
        JSON.stringify(state.cartItems)
      );

      localStorage.setItem(
        "techstoreCartItemCount",
        JSON.stringify(state.cartItemCount)
      );
    },

    addCartItemsInfo: (state, { payload }) => {
      state.cartItemsInfo = payload;
      localStorage.setItem(
        "cartItemsInfo",
        JSON.stringify(state.cartItemsInfo)
      );
    },
    clearCartItemsInfo: (state) => {
      state.cartItemsInfo = {};
      localStorage.removeItem("cartItemsInfo");
    },
  },
});

export const {
  addToCart,
  updateCart,
  removeCartItem,
  clearCart,
  addCartItemsInfo,
  clearCartItemsInfo,
} = cartReducer.actions;

export default cartReducer.reducer;
