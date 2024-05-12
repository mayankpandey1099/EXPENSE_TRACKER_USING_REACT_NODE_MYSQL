import React, { useState, useEffect } from "react";
import Signin from "./Signin";
import Signup from "./Signup";
import img2 from "../../public/img2.png";
import img3 from "../../public/img3.png";



const AuthParent = () => {
    const [imageIndex, setImageIndex] = useState(0);
    const images = [img2, img3];
    const tagline = "Simplify your expenses, amplify your savings.";

    useEffect(() => {
      const interval = setInterval(() => {
        setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);
      return () => clearInterval(interval);
    }, [images.length]);

  return (
    <div className="signin-page flex flex-col items-center justify-center h-screen">
      <div
        className="text-4xl font-bold mb-4"
        style={{ fontFamily: "'Poetsen One', sans-serif" }}
      >
        {tagline}
      </div>
      <div className="image-container h-85">
        <img
          src={images[imageIndex]}
          alt={`Image ${imageIndex}`}
          className="w-85 h-full object-cover"
        />
      </div>
      <div className="p-8 rounded-lg shadow-xxl">
        <Signin />
        <Signup />
      </div>
    </div>
  );
}
export default AuthParent;
