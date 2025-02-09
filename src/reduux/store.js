import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./categorySlice";
import favouritesReducer from "./favouriteSlice";
// import filterReducer from "./filterSlice";
import searchReducer from "./searchSlice";
import authReducer from "./authSlice";

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    favourites: favouritesReducer,
    // filters: filterReducer,
    search: searchReducer,
    auth: authReducer,
  },
});
