import { createSlice } from "@reduxjs/toolkit";
import { getUserAccount } from "../../actions/authActions";
import { formatDistanceToNow } from "date-fns";

const initialState = {
  isLoading: false,
  isError: false,
  account: {},
};

const userAccountReducer = createSlice({
  name: "userAccountReducer",
  initialState,
  reducers: {
    resetAccount: () => initialState,
  },
  extraReducers: ({ addCase }) => {
    addCase(getUserAccount.pending, (state) => {
      state.isLoading = true;
    }),
      addCase(getUserAccount.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.account = {
          ...payload,
          date: formatDistanceToNow(new Date(payload.date)),
        };
      }),
      addCase(getUserAccount.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { resetAccount } = userAccountReducer.actions;

export default userAccountReducer.reducer;
