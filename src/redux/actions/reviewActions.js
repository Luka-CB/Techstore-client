import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://techstore-api-c4r4.onrender.com";

export const addReview = createAsyncThunk(
  "ADD_REVIEW",
  async (review, thunkAPI) => {
    try {
      const { data } = await axios.post(`${url}/api/reviews/add`, review, {
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

export const getReviews = createAsyncThunk(
  "GET_REVIEWS",
  async (productId, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `${url}/api/reviews/get-many/${productId}`,
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

export const updateReview = createAsyncThunk(
  "UPDATE_REVIEW",
  async (reviewData, thunkAPI) => {
    try {
      const { data } = await axios.put(
        `${url}/api/reviews/update`,
        reviewData,
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

export const deleteReview = createAsyncThunk(
  "DELETE_REVIEW",
  async (reviewId, thunkAPI) => {
    try {
      const { data } = await axios.delete(
        `${url}/api/reviews/delete-one/${reviewId}`,
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
