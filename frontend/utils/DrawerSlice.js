import { createSlice } from "@reduxjs/toolkit";

const drawerSlice = createSlice({
  name: "drawer",
  initialState: {
    isOpen: false,
  },
  reducers: {
    toggleDrawer: (state, action) => {
           state.isOpen = action.payload;    
    },
  },
});

export const {toggleDrawer} = drawerSlice.actions;
export default drawerSlice.reducer;
