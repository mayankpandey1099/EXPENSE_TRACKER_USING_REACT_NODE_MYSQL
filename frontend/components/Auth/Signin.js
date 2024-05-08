import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
// import { ExpenseContext } from "./ExpenseContext"; // Import the CartContext
import {Link} from "react-router-dom";

const Signin = () => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); 
  const { setAuthenticated } = useContext(AuthContext); // Access the setAuthenticated function from CartContext

  useEffect(() => {
    setShowModal(true); // Open the modal when the component mounts
  }, []);

  const handleSignIn = async () => {
    // Implement sign-in logic here
    setLoading(true);
    const signInData = { email, password };
    try {
      const response = await axios.post(
        "http://localhost:3000/sign/login",
        signInData
      );
      console.log(response.data); // Handle success response here
      setAuthenticated(true);
      setShowModal(false);
      window.location.href = "/home";
    } catch (error) {
      // Handle error here
      if (error.response && error.response.status === 409) {
        alert("Password does not match. Please try again.");
      } else if(error.response && error.response.status === 404) {
        alert("User not found. Please signin with registered email");
      }else{
        console.error("Error signing in:", error); 
      }
    } finally {
      setLoading(false); // Hide loading spinner regardless of success or failure
    }
  };
  return (
    <div className="signin-page flex justify-center items-center h-screen  bg-gray-200">
      <div className="p-8 rounded-lg shadow-xxl">
        {showModal && (
          <div className="fixed inset-0 z-50 overflow-y-auto overflow-x-hidden flex justify-center items-center">
            <div className="relative p-4 w-full max-w-md">
              <div className="relative bg-white rounded-lg shadow">
                <div className="flex items-center justify-between p-4 border-b rounded-t">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Sign in to our platform
                  </h3>
                </div>
                <div className="p-4">
                  <form className="space-y-4" action="#">
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Your email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="name@company.com"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Your password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="flex justify-between">
                      <Link
                        to="/forgotpassword"
                        className="text-sm text-blue-700 hover:underline"
                      >
                        Forgot Password?
                      </Link>
                    </div>
                    <button
                      type="button"
                      className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
                      onClick={handleSignIn}
                      disabled={loading}
                    >
                      {loading ? "Logging in..." : "Login to your account"}
                    </button>
                    <div className="text-sm font-medium text-gray-500">
                      <button className="text-blue-500 hover:underline">
                        <Link to="/signup">Sign Up</Link>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Signin;
