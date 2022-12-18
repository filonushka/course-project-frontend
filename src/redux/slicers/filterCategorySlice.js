import { createSlice } from "@reduxjs/toolkit";
import { filters } from "../../const";

const initialState = {
  selectedCategory: `${filters.books}`,
};

const filterCategorySlice = createSlice({
  name: "filterCategory",
  initialState,
  reducers: {
    changeCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
  extraReducers: {},
});

export default filterCategorySlice.reducer;
export const { changeCategory } = filterCategorySlice.actions;
