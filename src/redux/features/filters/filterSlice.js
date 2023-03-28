import { createSlice } from "@reduxjs/toolkit";

const pickedFiltersFromStorage = localStorage.getItem("pickedFilters")
  ? JSON.parse(localStorage.getItem("pickedFilters"))
  : [];

const initialState = {
  pickedFilters: pickedFiltersFromStorage,
};

const filterReducer = createSlice({
  name: "filterReducer",
  initialState,
  reducers: {
    resetFilter: () => initialState,
    addFilter: (state, { payload }) => {
      if (state.pickedFilters.length === 0) {
        state.pickedFilters.push(payload);
      } else {
        const index = state.pickedFilters.findIndex(
          (pf) => pf.title === payload.title
        );

        state.pickedFilters.some((pf) => pf.title === payload.title) &&
          state.pickedFilters.splice(index, 1);

        state.pickedFilters.push(payload);
      }

      localStorage.setItem(
        "pickedFilters",
        JSON.stringify(state.pickedFilters)
      );
    },
    removeFilter: (state, { payload }) => {
      state.pickedFilters = state.pickedFilters.filter(
        (pf) => pf.value !== payload
      );
      localStorage.setItem(
        "pickedFilters",
        JSON.stringify(state.pickedFilters)
      );
    },
    clearFilter: (state) => {
      state.pickedFilters = [];
      localStorage.removeItem("pickedFilters");
    },
  },
});

export const { resetFilter, addFilter, removeFilter, clearFilter } =
  filterReducer.actions;

export default filterReducer.reducer;
