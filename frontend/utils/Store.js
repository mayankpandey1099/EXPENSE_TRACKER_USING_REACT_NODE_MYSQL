import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./AuthSlice";
import modalReducer from "./ModalSlice";
import drawerReducer from "./DrawerSlice";
import expenseReducer from "./ExpenseSlice";


export const store = configureStore({
  reducer: {
    auth: authReducer,
    modal: modalReducer,
    drawer: drawerReducer,
    expense: expenseReducer
  },
});
