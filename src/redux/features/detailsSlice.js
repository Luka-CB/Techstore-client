import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pickedAttr: {},
  productImages: [],
};

const detailsReducer = createSlice({
  name: "detailsReducer",
  initialState,
  reducers: {
    setPickedAttr: (state, { payload }) => {
      state.pickedAttr = payload;
    },
    setProductImages: (state, { payload }) => {
      state.productImages = payload;
    },
  },
});

export const { setPickedAttr, setProductImages } = detailsReducer.actions;

export default detailsReducer.reducer;
