import { createSlice } from "@reduxjs/toolkit";


const modalSlice = createSlice({
  name: "modal",
  initialState : {
  showModalSignin: false,
  showModalSignup: false,
  },
  reducers: {
    setModalStateSignin: (state, action) => {
      state.showModalSignin = action.payload;
    },
    setModalStateSignup: (state, action) =>{
        state.showModalSignup = action.payload;
    }
  },
});

export const { setModalStateSignin, setModalStateSignup } = modalSlice.actions;
export default modalSlice.reducer;
