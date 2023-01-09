import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

const initialState = {
  fullReview: {
    _id: "",
  },
  isLoading: false,
  status: null,
};

export const fetchFullReview = createAsyncThunk(
  "reviews/fetcOnehReview",
  async ({ _id }) => {
    try {
      const { data } = await axios.get("/review-details/", {
        _id,
      });
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const fullReviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchFullReview.pending]: (state) => {
      state.reviews.status = "loading";
      state.reviews.items = [];
    },
    [fetchFullReview.fulfilled]: (state, action) => {
      state.reviews.status = "loaded";
      state.reviews.items = action.payload;
    },
    [fetchFullReview.rejected]: (state) => {
      state.reviews.status = "error";
      state.reviews.items = [];
    },
  },
});

export const fullReviewReducer = fullReviewSlice.reducer;
