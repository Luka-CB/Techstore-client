import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://techstore-api-c4r4.onrender.com";

export const updateIncome = createAsyncThunk(
  "UPDATE_INCOME",
  async (amount, thunkAPI) => {
    console.log(amount);
    try {
      const { data } = await axios.put(
        `${url}/api/incomes/update`,
        { amount },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
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
