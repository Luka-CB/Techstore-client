import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const saveOrder = createAsyncThunk(
  "SAVE_ORDER",
  async (order, thunkAPI) => {
    try {
      const { data } = await axios.post(`/api/orders/save`, order, {
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

export const getOrders = createAsyncThunk(
  "GET_ORDERS",
  async (undefined, thunkAPI) => {
    try {
      const { data } = await axios.get(`/api/orders/get-many`, {
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

export const getOrder = createAsyncThunk(
  "GET_ORDER",
  async (orderId, thunkAPI) => {
    try {
      const { data } = await axios.get(`/api/orders/get-one/${orderId}`, {
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

export const updatePaidState = createAsyncThunk(
  "UPDATE_PAID_STATE",
  async (updData, thunkAPI) => {
    try {
      const { data } = await axios.put(`/api/orders/update`, updData, {
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

export const deleteOrder = createAsyncThunk(
  "DELETE_ORDER",
  async (orderId, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/api/orders/delete/${orderId}`, {
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
