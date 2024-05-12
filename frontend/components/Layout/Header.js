import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import useClearToken from "../hooks/useClearTokenOnBack";
import {useDispatch} from "react-redux";
import { setModalStateSignin, setModalStateSignup } from "../../utils/ModalSlice";
import img1 from "../../public/img1.png";
import { toggleDrawer } from "../../utils/DrawerSlice";
import Drawer from "./Drawer";


const Header = () => {
  //useClearToken();

  const isOpen = useSelector((state) => state.drawer.isOpen);
  const isAuthenticated = useSelector((state) => state.auth.isAuth);
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  

  const excludedRoutes = ["/", "/signup", "/forgotpassword"];
  const isExcludedRoute = () => excludedRoutes.includes(pathname);

  const handleSignInClick = () => {
    dispatch(setModalStateSignin(true));
    dispatch(setModalStateSignup(false));
  };

  // Function to handle click on Sign Up button
  const handleSignUpClick = () => {
    dispatch(setModalStateSignup(true));
    dispatch(setModalStateSignin(false));
    // Your logic for Sign Up
  };

  const handleToggleDrawer = () => {
    dispatch(toggleDrawer(!isOpen)); // Dispatch the toggleDrawer action
  };


  return (
    <div className="relative">
      <div
        className="flex justify-between items-center px-8 py-10 text-white"
        style={{ backgroundColor: "#4D869C" }}
      >
        <div className="flex items-center">
          <div className="w-16 h-16 mr-4 overflow-hidden rounded-full shadow-lg">
            <img src={img1} alt="Logo" className="w-full h-auto bg-white" />
          </div>
          <span
            className="font-bold text-xl"
            style={{ fontFamily: "'Poetsen One', sans-serif" }}
          >
            Spend-Wise
          </span>
        </div>
        <div className="pr-4">
          {!isAuthenticated && (
            <>
              <button
                className="mr-5 p-2 font-bold text-white rounded-lg"
                onClick={handleSignInClick}
              >
                Sign In
              </button>
              <button
                className="mr-2 p-2 font-bold text-white rounded-lg"
                onClick={handleSignUpClick}
              >
                Sign Up
              </button>
            </>
          )}
        </div>
        {isAuthenticated && (
          <div className="text-center">
            <button
              className="text-white hover:bg-gray-700 focus:ring-0 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              type="button"
              onClick={handleToggleDrawer}
              data-drawer-target="drawer-right-example"
              data-drawer-show="drawer-right-example"
              data-drawer-placement="right"
              aria-controls="drawer-right-example"
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
      {isOpen && <Drawer />}
    </div>
  );
};

export default Header;
