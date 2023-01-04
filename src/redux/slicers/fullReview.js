import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchOneReview = createAsyncThunk(
  "reviews/fetcOnehReview",
  async ({ _id }) => {
    try {
      const { data } = await axios.get("/reviews/", {
        _id,
      });
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

const initialState = {
  fullReview: {
    _id: "",
  },
  isLoading: false,
  status: null,
};

const fullReviewSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchOneReview.pending]: (state) => {
      state.status = "loading";
      state.isLoading = "true";
    },
    [fetchOneReview.fulfilled]: (state, action) => {
      state.status = "loaded";
      state.isLoading = action.payload;
    },
    [fetchOneReview.rejected]: (state) => {
      state.status = "error";
      state.isLoading = null;
    },
  },
});

export const fullReviewReducer = fullReviewSlice.reducer;
