import React, { useContext } from "react";
import Home from "./Home";
import About from "./About";
import ContactUs from "./ContactUs";
import { Route, Routes } from "react-router-dom";
import { AuthProvider, AuthContext } from "./AuthContext";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import Signin from "./Auth/Signin";
import Signup from "./Auth/Signup";
import ForgotPassword from "./Auth/ForgotPassword";
import ResetPassword from "./Auth/ResetPassword";


const App = () => {
  return (
      <div>
        <Header />
        <div>
          <div>
            <Routes>
              <Route path="/" element={<Signin />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgotpassword" element={<ForgotPassword />} />
              <Route path="/resetpassword/:uuid" element={<ResetPassword />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/ContactUs" element={<ContactUs />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
  );
};

export default App;
