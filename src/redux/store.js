import { configureStore } from "@reduxjs/toolkit";
import filterCategorySlice from "./slicers/filterCategorySlice";
import { authReducer } from "./slicers/auth";
import { reviewsReducer } from "./slicers/reviews";
import { fullReviewReducer } from "./slicers/fullReview";

export const store = configureStore({
  reducer: {
    filterCategory: filterCategorySlice,
    auth: authReducer,
    reviews: reviewsReducer,
    fullReview: fullReviewReducer,
  },
});
