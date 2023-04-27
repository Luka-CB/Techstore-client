import { createSlice } from "@reduxjs/toolkit";

const savedRouteFromStorage = localStorage.getItem("savedRoute")
  ? JSON.parse(localStorage.getItem("savedRoute"))
  : "";

const initialState = {
  route: savedRouteFromStorage,
};

const savedRouteReducer = createSlice({
  name: "savedRouteReducer",
  initialState,
  reducers: {
    setRoute: (state, { payload }) => {
      state.route = payload;
      localStorage.setItem("savedRoute", JSON.stringify(payload));
    },
  },
});

export const { setRoute } = savedRouteReducer.actions;

export default savedRouteReducer.reducer;
