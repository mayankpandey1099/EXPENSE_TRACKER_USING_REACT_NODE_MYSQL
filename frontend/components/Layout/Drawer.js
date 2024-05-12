
import React from "react";
import {Link} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleDrawer } from "../../utils/DrawerSlice";
import { clearAuthState } from "../../utils/AuthSlice"; 

const Drawer = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.drawer.isOpen); // Get the drawer state


  const linkStyle = {
    fontWeight: "bold",
    fontFamily: "Montserrat, sans-serif", // Change the font family as per your preference
    fontSize: "1.2rem",
  };
  const ulStyle = {
    listStyleType: "none", // Remove bullets from the list items
  };

  const liStyle = {
    borderBottom: "2px solid #31363F", // Add border below each li // Add border above each li
    padding: "4px 0", // Add padding for spacing
  };

  const handleCloseButton = ()=>{
    dispatch(toggleDrawer(!isOpen));
  }

  const handleLogout = ()=>{
    dispatch(clearAuthState());
    window.location.href = "/";
  }

  return (
    <div
      id="drawer-right-example"
      className={`fixed top-2 right-0  z-40 h-3/4 p-5 overflow-y-auto transition-transform ${
        isOpen ? "" : "translate-x-full"
      } w-80 dark:bg-gray-800`}
      style={{ backgroundColor: "#CDE8E5" }}
      tabIndex="-1"
      aria-labelledby="drawer-right-label"
    >
      <h5
        id="drawer-right-label"
        className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
      ></h5>
      <div className="flex flex-col space-y-2" style={ulStyle}>
        <li style={liStyle}>
          <Link to="/home" style={linkStyle}>
            HOME
          </Link>
        </li>
        <li style={liStyle}>
          <Link to="/about" style={linkStyle}>
            ABOUT
          </Link>
        </li>
        <li style={liStyle}>
          <Link to="/contactus" style={linkStyle}>
            CONTACT US
          </Link>
        </li>
        <li style={liStyle}>
          <button onClick={handleLogout} style={linkStyle}>
            LOGOUT
          </button>
        </li>
      </div>
      <button
        type="button"
        data-drawer-hide="drawer-right-example"
        aria-controls="drawer-right-example"
        onClick={handleCloseButton}
        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
      >
        <svg
          className="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
        <span className="sr-only">Close menu</span>
      </button>
    </div>
  );
};

export default Drawer;


{/* <div className="flex gap-20 mx-auto" style={ulStyle}>
      <li>
        <Link to="/home" style={linkStyle}>
          HOME
        </Link>
      </li>
      <li>
        <Link to="/contactus" style={linkStyle}>
          CONTACT US
        </Link>
      </li>
      <li>
        <Link to="/about" style={linkStyle}>
          ABOUT
        </Link>
      </li>
</div>; */}
