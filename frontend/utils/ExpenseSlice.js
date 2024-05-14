import { createSlice } from "@reduxjs/toolkit";

const expenseSlice = createSlice({
  name: "expense",
  initialState: {
    expenses: [],
    currentPages: 1,
    totalPages: 1,
    expenseId: null
  },
  reducers: {
    setExpenses: (state, action) => {
      state.expenses = action.payload;
    },
    setCurrentPages: (state, action) => {
      state.currentPages = action.payload;
    },
    setTotalPages: (state, action) => {
      state.totalPages = action.payload;
    },
    setExpenseId: (state, action) => {
      state.expenseId = action.payload;
    }
  },
});

export const { setExpenses, setCurrentPages, setTotalPages, setExpenseId } = expenseSlice.actions;
export default expenseSlice.reducer;
