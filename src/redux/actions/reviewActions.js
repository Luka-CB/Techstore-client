import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../utils";

export const addReview = createAsyncThunk(
  "ADD_REVIEW",
  async (review, thunkAPI) => {
    try {
      const { data } = await api.post(`/api/reviews/add`, review);

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

export const getReviews = createAsyncThunk(
  "GET_REVIEWS",
  async (productId, thunkAPI) => {
    try {
      const { data } = await api.get(`/api/reviews/get-many/${productId}`);

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

export const updateReview = createAsyncThunk(
  "UPDATE_REVIEW",
  async (reviewData, thunkAPI) => {
    try {
      const { data } = await api.put(`/api/reviews/update`, reviewData);

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

export const deleteReview = createAsyncThunk(
  "DELETE_REVIEW",
  async (reviewId, thunkAPI) => {
    try {
      const { data } = await api.delete(`/api/reviews/delete-one/${reviewId}`);

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
