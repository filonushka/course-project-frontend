import { configureStore } from "@reduxjs/toolkit";
import filterCategorySlice from "./slicers/filterCategorySlice";

export const store = configureStore({
  reducer: {
    filterCategory: filterCategorySlice,
  },
});
