import React, { useContext } from "react";
import Home from "./Home";
import About from "./About";
import ContactUs from "./ContactUs";
import { Route, Routes, Navigate } from "react-router-dom";
import {useSelector} from "react-redux";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import AuthParent from "./Auth/AuthParent";
import ForgotPassword from "./Auth/ForgotPassword";
import ResetPassword from "./Auth/ResetPassword";


const App = () => {

  const isAuthenticated = useSelector((state) => state.auth.isAuth);
  return (
    <div>
      <Header />
      <div>
        <div>
          <Routes>
            <Route path="/signin" element={<AuthParent />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/resetpassword/:uuid" element={<ResetPassword />} />
            <Route
              path="/"
              element={isAuthenticated ? <Home /> : <Navigate to="/signin" />}
            />
            <Route
              path="/about"
              element={isAuthenticated ? <About /> : <Navigate to="/signin" />}
            />
            <Route
              path="/contactus"
              element={
                isAuthenticated ? <ContactUs /> : <Navigate to="/signin" />
              }
            />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
