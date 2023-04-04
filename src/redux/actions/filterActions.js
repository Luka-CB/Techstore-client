import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://techstore-api-c4r4.onrender.com";

export const getFilters = createAsyncThunk(
  "GET_FILTERS",
  async (route, thunkAPI) => {
    try {
      const { data } = await axios.get(`${url}/api/${route}/filters`, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });

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
      const { data } = await axios.get(
        `${url}/api/tvs/filtered?brand=${brand}&type=${type}&size=${size}`,
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

export const getFilteredComputerProducts = createAsyncThunk(
  "GET_FILTERED_COMPUTER_PRODUCTS",
  async (
    { brand = "", type = "", storageType = "", storageSize = "", ram = "" },
    thunkAPI
  ) => {
    try {
      const { data } = await axios.get(
        `${url}/api/computers/filtered?brand=${brand}&type=${type}&storageType=${storageType}&storageSize=${storageSize}&ram=${ram}`,
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

export const getFilteredCellphoneProducts = createAsyncThunk(
  "GET_FILTERED_CELLPHONE_PRODUCTS",
  async ({ brand = "", internalStorage = "", ram = "" }, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `${url}/api/cellphones/filtered?brand=${brand}&internalStorage=${internalStorage}&ram=${ram}`,
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

export const getFilteredAccessoryProducts = createAsyncThunk(
  "GET_FILTERED_ACCESSORY_PRODUCTS",
  async ({ brand = "", category = "" }, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `${url}/api/accessories/filtered?brand=${brand}&category=${category}`,
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
