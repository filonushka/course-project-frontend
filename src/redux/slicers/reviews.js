import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchReviews = createAsyncThunk(
  "reviews/fetchReviews",
  async () => {
    const { data } = await axios.get("/api/reviews/get-all-reviews");
    return data;
  }
);

const initialState = {
  reviews: {
    items: [],
    status: "loading",
  },
};

const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchReviews.pending]: (state) => {
      state.reviews.status = "loading";
      state.reviews.items = [];
    },
    [fetchReviews.fulfilled]: (state, action) => {
      state.reviews.status = "loaded";
      state.reviews.items = action.payload;
    },
    [fetchReviews.rejected]: (state) => {
      state.reviews.status = "error";
      state.reviews.items = [];
    },
  },
});

export const reviewsReducer = reviewsSlice.reducer;
