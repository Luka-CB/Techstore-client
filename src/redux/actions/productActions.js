import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "http://localhost:5000";

export const getProducts = createAsyncThunk(
  "GET_PRODUCTS",
  async ({ route, searchQ = "", page = "1" }, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `/api/${route}/get-all?searchQ=${searchQ}&page=${page}`,
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

export const getProduct = createAsyncThunk(
  "GET_PRODUCT",
  async ({ route, productId }, thunkAPI) => {
    try {
      const { data } = await axios.get(`/api/${route}/get-one/${productId}`, {
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

export const getRandomProducts = createAsyncThunk(
  "GET_RANDOM_PRODUCTS",
  async (undefined, thunkAPI) => {
    try {
      const { data } = await axios.get(`/api/home/get-random`, {
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

export const getLatestAccessories = createAsyncThunk(
  "GET_LATEST_ACCESSORIES",
  async (undefined, thunkAPI) => {
    try {
      const { data } = await axios.get(`/api/home/accessories/latest`, {
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

export const getLatestCellphones = createAsyncThunk(
  "GET_LATEST_CELLPHONES",
  async (undefined, thunkAPI) => {
    try {
      const { data } = await axios.get(`/api/home/cellphones/latest`, {
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

export const getLatestComputers = createAsyncThunk(
  "GET_LATEST_COMPUTERS",
  async (undefined, thunkAPI) => {
    try {
      const { data } = await axios.get(`/api/home/computers/latest`, {
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

export const getLatestTvs = createAsyncThunk(
  "GET_LATEST_TVS",
  async (undefined, thunkAPI) => {
    try {
      const { data } = await axios.get(`/api/home/tvs/latest`, {
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

export const searchProduct = createAsyncThunk(
  "SEARCH_PRODUCT",
  async (q, thunkAPI) => {
    try {
      const { data } = await axios.get(`/api/home/search?q=${q}`, {
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
