
import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      setIsAuthenticated(false);
      // If token doesn't exist, remove the Authorization header
      delete axios.defaults.headers.common["Authorization"];
    }
  }, []);

  // Function to add token to local storage
  const setAuthToken = (token) => {
    localStorage.setItem("token", token);
    setIsAuthenticated(true);
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  };

  // Function to remove token from local storage
  const removeAuthToken = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    delete axios.defaults.headers.common["Authorization"];
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        setAuthToken,
        removeAuthToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
