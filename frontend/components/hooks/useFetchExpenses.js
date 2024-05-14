// useFetchExpenses.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {setExpenses, setTotalPages, setCurrentPages } from "../../utils/ExpenseSlice";

const useFetchExpenses = () => {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const currentPages = useSelector((state)=>state.expense.currentPages);
  const expenses = useSelector((state)=>state.expense.expenses);

  const fetchExpenses = async (page) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/expense/expenses?page=${page}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      const { totalPages, currentPage, expenses } = response.data;
      const parsedCurrentPage = parseInt(currentPage);
      dispatch(setExpenses(expenses));
      dispatch(setCurrentPages(parsedCurrentPage));
      dispatch(setTotalPages(totalPages));
    } catch (error) {
      console.error("Error fetching expenses:", error);
    }
  };

  const handlePrevPage = () => {
    dispatch(setCurrentPages(currentPages - 1));
  };

  const handleNextPage = () => {
    dispatch(setCurrentPages(currentPages + 1));
  };

  const handleDeleteExpense = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/expense/${id}`, {
        headers: {
          Authorization: token,
        },
      });
      // Refetch expenses after deletion
      fetchExpenses(currentPages);
    } catch (error) {
      console.error("Error deleting expense:", error);
    }
  };
  
  if (expenses.length === 0 && currentPages > 1) {
    // Move to previous page if it exists
    dispatch(setCurrentPages(currentPages - 1));
  }
  
  useEffect(() => {
    fetchExpenses(currentPages);
  }, [currentPages]);

  return {
    fetchExpenses,
    handlePrevPage,
    handleNextPage,
    handleDeleteExpense
  };
};

export default useFetchExpenses;
