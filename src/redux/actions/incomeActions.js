import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../utils";

export const updateIncome = createAsyncThunk(
  "UPDATE_INCOME",
  async (amount, thunkAPI) => {
    console.log(amount);
    try {
      const { data } = await api.put(`/api/incomes/update`, { amount });

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
