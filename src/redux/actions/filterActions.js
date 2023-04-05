import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../utils";

export const getFilters = createAsyncThunk(
  "GET_FILTERS",
  async (route, thunkAPI) => {
    try {
      const { data } = await api.get(`/api/${route}/filters`);

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

export const getFilteredTvProducts = createAsyncThunk(
  "GET_FILTERED_TV_PRODUCTS",
  async ({ brand = "", type = "", size = "" }, thunkAPI) => {
    try {
      const { data } = await api.get(
        `/api/tvs/filtered?brand=${brand}&type=${type}&size=${size}`
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

export const getFilteredComputerProducts = createAsyncThunk(
  "GET_FILTERED_COMPUTER_PRODUCTS",
  async (
    { brand = "", type = "", storageType = "", storageSize = "", ram = "" },
    thunkAPI
  ) => {
    try {
      const { data } = await api.get(
        `/api/computers/filtered?brand=${brand}&type=${type}&storageType=${storageType}&storageSize=${storageSize}&ram=${ram}`
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

export const getFilteredCellphoneProducts = createAsyncThunk(
  "GET_FILTERED_CELLPHONE_PRODUCTS",
  async ({ brand = "", internalStorage = "", ram = "" }, thunkAPI) => {
    try {
      const { data } = await api.get(
        `/api/cellphones/filtered?brand=${brand}&internalStorage=${internalStorage}&ram=${ram}`
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

export const getFilteredAccessoryProducts = createAsyncThunk(
  "GET_FILTERED_ACCESSORY_PRODUCTS",
  async ({ brand = "", category = "" }, thunkAPI) => {
    try {
      const { data } = await api.get(
        `/api/accessories/filtered?brand=${brand}&category=${category}`
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
