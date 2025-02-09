import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showRecruiterLogin: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    showLoginModal: (state) => {
      state.showRecruiterLogin = true;
    },
    hideLoginModal: (state) => {
      state.showRecruiterLogin = false;
    },
  },
});

export const { showLoginModal, hideLoginModal } = authSlice.actions;
export default authSlice.reducer;
