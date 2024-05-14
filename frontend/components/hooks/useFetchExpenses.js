// useFetchExpenses.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {setExpenses, setTotalPages, setCurrentPages } from "../../utils/ExpenseSlice";

const useFetchExpenses = () => {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const currentPages = useSelector((state)=>state.expense.currentPages);

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
      console.log(response.data);
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

  

  useEffect(() => {
    fetchExpenses(currentPages);
  }, [currentPages]);

  return {
    fetchExpenses,
    handlePrevPage,
    handleNextPage
  };
};

export default useFetchExpenses;
