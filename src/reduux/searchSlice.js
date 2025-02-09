import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  type: "any",
  propertyType: "any",
  location: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    updateSearch: (state, action) => {
      console.log("🔄 Redux Updated with:", action.payload); // ✅ تحقق من تحديث Redux
      return { ...state, ...action.payload };
    },
  },
});

export const { updateSearch } = searchSlice.actions;
export default searchSlice.reducer;
