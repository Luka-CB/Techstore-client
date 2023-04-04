import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://techstore-api-c4r4.onrender.com";

export const register = createAsyncThunk("REGISTER", async (user, thunkAPI) => {
  try {
    await axios.post(`${url}/api/users/register`, user, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

export const login = createAsyncThunk("LOGIN", async (user, thunkAPI) => {
  try {
    await axios.post(`${url}/api/users/login`, user, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

export const getUser = createAsyncThunk(
  "GET_USER",
  async (undefined, thunkAPI) => {
    try {
      const { data } = await axios.get(`${url}/api/users/user`, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });

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
      const { data } = await axios.get(`${url}/api/users/user-account`, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });

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
      await axios.put(`${url}/api/users/update`, user, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const deleteUser = createAsyncThunk(
  "DELETE_USER",
  async (undefined, thunkAPI) => {
    try {
      const { data } = await axios.delete(`${url}/api/users/delete`, {
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

export const logout = createAsyncThunk(
  "LOGOUT",
  async (undefined, thunkAPI) => {
    try {
      await axios.post(
        `${url}/api/users/logout`,
        {},
        {
          withCredentials: true,
        }
      );

      localStorage.removeItem("techstoreUser");
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
