import { createSlice } from "@reduxjs/toolkit";
import { getOauthUser } from "../../actions/authActions";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
};

const oauthUserReducer = createSlice({
  name: "oauthUserReducer",
  initialState,
  reducers: {
    resetOauthUser: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getOauthUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOauthUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(getOauthUser.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { resetOauthUser } = oauthUserReducer.actions;

export default oauthUserReducer.reducer;
