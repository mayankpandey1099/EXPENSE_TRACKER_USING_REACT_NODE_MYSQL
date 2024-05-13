// useFetchExpenses.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const useFetchExpenses = () => {
  const [expenses, setExpenses] = useState([]);
  const [currentPages, setCurrentPages] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const token = localStorage.getItem("token");

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
      setExpenses(expenses);
      setCurrentPages(parsedCurrentPage);
      setTotalPages(totalPages);
    } catch (error) {
      console.error("Error fetching expenses:", error);
    }
  };

  const handlePrevPage = () => {
      setCurrentPages(currentPages - 1);
  };

  const handleNextPage = () => {
    setCurrentPages(currentPages + 1);
  };

  

  useEffect(() => {
    fetchExpenses(currentPages);
  }, [currentPages]);

  return {
    expenses,
    fetchExpenses,
    currentPages,
    totalPages,
    handlePrevPage,
    handleNextPage
  };
};

export default useFetchExpenses;
