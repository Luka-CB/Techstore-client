import { createSlice } from "@reduxjs/toolkit";

const cartItemsFromStorage = localStorage.getItem("techstoreCartItems")
  ? JSON.parse(localStorage.getItem("techstoreCartItems"))
  : [];

const cartItemCountFromStorage = localStorage.getItem("techstoreCartItemCount")
  ? JSON.parse(localStorage.getItem("techstoreCartItemCount"))
  : 0;

const initialState = {
  cartItems: cartItemsFromStorage,
  cartItemCount: cartItemCountFromStorage,
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
      state.cartItemCount += 1;

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
      console.log(payload);
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
  },
});

export const { addToCart, updateCart, removeCartItem, clearCart } =
  cartReducer.actions;

export default cartReducer.reducer;
