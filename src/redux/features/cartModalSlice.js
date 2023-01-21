import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showCartModal: false,
  item: {},
};

const cartModalReducer = createSlice({
  name: "cartModalReducer",
  initialState,
  reducers: {
    cartModalStateHandler: (state, { payload }) => {
      state.showCartModal = payload.state;
      state.item = payload.item;
    },
  },
});

export const { cartModalStateHandler } = cartModalReducer.actions;

export default cartModalReducer.reducer;
