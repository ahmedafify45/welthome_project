import { createSlice } from "@reduxjs/toolkit";
const loadFavourites = () => {
  const storedFavourites = localStorage.getItem("favourites");
  return storedFavourites ? JSON.parse(storedFavourites) : [];
};

const initialState = {
  favourites: loadFavourites(), // تخزين المفضلة في مصفوفة
};

const favouriteSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    toggleFavourite: (state, action) => {
      const productId = action.payload; // جلب الـ ID الخاص بالمنتج
      if (state.favourites.includes(productId)) {
        // إزالة المنتج إذا كان موجودًا بالفعل
        state.favourites = state.favourites.filter((id) => id !== productId);
      } else {
        // إضافة المنتج إذا لم يكن موجودًا
        state.favourites.push(productId);
      }
      localStorage.setItem("favourites", JSON.stringify(state.favourites));
    },
  },
});

export const { toggleFavourite } = favouriteSlice.actions;
export default favouriteSlice.reducer;
