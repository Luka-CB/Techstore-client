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
    const { data } = await api.post(`/api/users/login`, user);

    localStorage.setItem("techstoreUser", JSON.stringify(data));
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

export const getOauthUser = createAsyncThunk(
  "GET_OAUTH_USER",
  async (undefined, thunkAPI) => {
    try {
      const {
        login: { user },
      } = thunkAPI.getState();

      const { data } = await api.get(`/api/users/oauth/user`, {
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
    const {
      login: { user },
    } = thunkAPI.getState();

    try {
      const { data } = await api.get(`/api/users/user-account`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
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
  async (userInfo, thunkAPI) => {
    const {
      login: { user },
    } = thunkAPI.getState();

    try {
      await api.put(`/api/users/update`, userInfo, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      });
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const deleteUser = createAsyncThunk(
  "DELETE_USER",
  async (undefined, thunkAPI) => {
    const {
      login: { user },
    } = thunkAPI.getState();

    try {
      const { data } = await api.delete(`/api/users/delete`, {
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

export const logout = createAsyncThunk(
  "LOGOUT",
  async (undefined, thunkAPI) => {
    const {
      login: { user },
    } = thunkAPI.getState();

    try {
      await api.post(`/api/users/logout`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      });

      localStorage.removeItem("techstoreUser");
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
