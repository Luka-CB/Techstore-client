import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../utils";

export const getProducts = createAsyncThunk(
  "GET_PRODUCTS",
  async ({ route, searchQ = "", page = "1" }, thunkAPI) => {
    try {
      const { data } = await api.get(
        `/api/${route}/get-all?searchQ=${searchQ}&page=${page}`
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
      const { data } = await api.get(`/api/${route}/get-one/${productId}`);

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
      const { data } = await api.get(`/api/home/get-random`);

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
      const { data } = await api.get(`/api/home/accessories/latest`);

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
      const { data } = await api.get(`/api/home/cellphones/latest`);

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
      const { data } = await api.get(`/api/home/computers/latest`);

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
      const { data } = await api.get(`/api/home/tvs/latest`);

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
      const { data } = await api.get(`/api/home/search?q=${q}`);

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
