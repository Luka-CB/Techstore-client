import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const register = createAsyncThunk("REGISTER", async (user, thunkAPI) => {
  try {
    await axios.post(
      `${process.env.REACT_APP_API_URL}/api/users/register`,
      user,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

export const login = createAsyncThunk("LOGIN", async (user, thunkAPI) => {
  try {
    await axios.post(`${process.env.REACT_APP_API_URL}/api/users/login`, user, {
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
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/users/user`,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

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
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/users/user-account`,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

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
      await axios.put(
        `${process.env.REACT_APP_API_URL}/api/users/update`,
        user,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const deleteUser = createAsyncThunk(
  "DELETE_USER",
  async (undefined, thunkAPI) => {
    try {
      const { data } = await axios.delete(
        `${process.env.REACT_APP_API_URL}/api/users/delete`,
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

export const logout = createAsyncThunk(
  "LOGOUT",
  async (undefined, thunkAPI) => {
    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/api/users/logout`,
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
