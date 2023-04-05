import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../utils";

export const register = createAsyncThunk("REGISTER", async (user, thunkAPI) => {
  try {
    await api.post(`/api/users/register`, user);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

export const login = createAsyncThunk("LOGIN", async (user, thunkAPI) => {
  try {
    await api.post(`/api/users/login`, user);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

export const getUser = createAsyncThunk(
  "GET_USER",
  async (undefined, thunkAPI) => {
    try {
      const { data } = await api.get(`/api/users/user`);

      localStorage.setItem("techstoreUser", JSON.stringify(data));
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const getUserAccount = createAsyncThunk(
  "GET_USER_ACCOUNT",
  async (undefined, thunkAPI) => {
    try {
      const { data } = await api.get(`/api/users/user-account`);

      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  "UPDATE_USER",
  async (user, thunkAPI) => {
    try {
      await api.put(`/api/users/update`, user);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const deleteUser = createAsyncThunk(
  "DELETE_USER",
  async (undefined, thunkAPI) => {
    try {
      const { data } = await api.delete(`/api/users/delete`);

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

export const logout = createAsyncThunk(
  "LOGOUT",
  async (undefined, thunkAPI) => {
    try {
      await api.post(`/api/users/logout`, {});

      localStorage.removeItem("techstoreUser");
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
