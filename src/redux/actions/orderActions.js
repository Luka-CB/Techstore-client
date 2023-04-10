import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../utils";

export const saveOrder = createAsyncThunk(
  "SAVE_ORDER",
  async (order, thunkAPI) => {
    const {
      login: { user },
    } = thunkAPI.getState();

    try {
      const { data } = await api.post(`/api/orders/save`, order, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
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
      const {
        login: { user },
      } = thunkAPI.getState();

      const { data } = await api.get(`/api/orders/get-many`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
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
      const {
        login: { user },
      } = thunkAPI.getState();

      const { data } = await api.get(`/api/orders/get-one/${orderId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
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
    const {
      login: { user },
    } = thunkAPI.getState();

    try {
      const { data } = await api.put(`/api/orders/update`, updData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
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
    const {
      login: { user },
    } = thunkAPI.getState();

    try {
      const { data } = await api.delete(`/api/orders/delete/${orderId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
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
