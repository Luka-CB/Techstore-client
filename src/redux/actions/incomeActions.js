import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../utils";

export const updateIncome = createAsyncThunk(
  "UPDATE_INCOME",
  async (amount, thunkAPI) => {
    try {
      const {
        login: { user },
      } = thunkAPI.getState();

      const { data } = await api.put(
        `/api/incomes/update`,
        { amount },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(
        error.message && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);
