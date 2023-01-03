import { configureStore } from "@reduxjs/toolkit";
import filterCategorySlice from "./slicers/filterCategorySlice";
import { authReducer } from "./slicers/auth";

export const store = configureStore({
  reducer: {
    filterCategory: filterCategorySlice,
    auth: authReducer,
  },
});
