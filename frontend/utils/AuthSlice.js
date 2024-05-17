import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: localStorage.getItem("token") ? true : false,
    isToken: localStorage.getItem("token") || null,
    isPremium: localStorage.getItem("isPremium") === "true",
  },
  reducers: {
    setAuthenticated: (state, action) => {
      state.isAuth = action.payload; 
    },
    setToken: (state, action) => {
      state.isToken = action.payload;
      localStorage.setItem("token", action.payload);
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

export const { setAuthenticated, setPremium, clearAuthState, setToken } = authSlice.actions;

export default authSlice.reducer;
