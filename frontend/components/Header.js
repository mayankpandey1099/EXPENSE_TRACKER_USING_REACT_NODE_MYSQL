import React from "react";
import { Link } from "react-router-dom"; 

const Header = () => {
    const linkStyle = {
      fontWeight: "bold",
      fontFamily: "Montserrat, sans-serif", // Change the font family as per your preference
      fontSize: "1.2rem",
    };
    const ulStyle = {
      listStyleType: "none", // Remove bullets from the list items
    };

  return (
    <div className="flex justify-between items-center px-8 py-8 bg-gray-800 text-white">
      <div className="flex gap-20 mx-auto" style={ulStyle}>
        <li>
          <Link to="/home" style={linkStyle}>
            HOME
          </Link>
        </li>
        <li>
          <Link to="/ContactUs" style={linkStyle}>
            CONTACT US
          </Link>
        </li>
        <li>
          <Link to="/about" style={linkStyle}>
            ABOUT
          </Link>
        </li>
      </div>
    </div>
  );
};

export default Header;
