import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: localStorage.getItem("token") ? true : false,
    isPremium: false,
  },
  reducers: {
    setAuthenticated: (state, action) => {
      state.isAuth = true;
      localStorage.setItem("token", action.payload); // Assuming action.token contains the token
    },
    setPremium: (state, action) => {
      state.isPremium = action.payload;
      localStorage.setItem("isPremium", action.payload);
    },
    clearAuthState: (state) => {
      state.isAuth = false;
      state.isPremium = false;
      localStorage.removeItem("isPremium");
      localStorage.removeItem("token");
    },
  },
});

export const { setAuthenticated, setPremium, clearAuthState } = authSlice.actions;

export default authSlice.reducer;
