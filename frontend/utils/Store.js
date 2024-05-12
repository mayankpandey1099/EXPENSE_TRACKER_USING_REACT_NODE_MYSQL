import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./AuthSlice";
import modalReducer from "./ModalSlice";
import drawerReducer from "./DrawerSlice";


export const store = configureStore({
  reducer: {
    auth: authReducer,
    modal: modalReducer,
    drawer: drawerReducer,
  },
});
