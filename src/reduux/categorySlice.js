// categorySlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCategory: "All", // الفئة الافتراضية
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload; // تحديث الفئة المختارة
    },
  },
});

export const { setSelectedCategory } = categorySlice.actions;
export const selectCategory = (state) => state.category.selectedCategory;
export default categorySlice.reducer;
