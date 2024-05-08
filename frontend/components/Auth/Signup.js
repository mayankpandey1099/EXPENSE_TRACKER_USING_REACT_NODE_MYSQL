import React, { useState, useContext, useEffect } from "react";

import axios from "axios";
// import { ExpenseContext } from "./ExpenseContext";// Import the CartContext

const Signup = () => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [loading, setLoading] = useState(false);

  // const { setAuthenticated } = useContext(ExpenseContext); 

  useEffect(() => {
    setShowModal(true); // Open the modal when the component mounts
  }, []);

  const validatePassword = () => {
    return password === repassword;
  };

  const handleSignUp = async () => {
    // Check if passwords match
    if (!validatePassword()) {
      alert("Passwords do not match.");
      return;
    }
    setLoading(true);

    // Proceed with sign-up logic
    const signupData = { name, email, password };
    try {
      const response = await axios.post(
        "http://localhost:3000/sign/signup",
        signupData
      );
      console.log(response.data); // Handle success response here
      setShowModal(false);
      window.location.href = "/home";
    } catch (error) {
      if (error.response && error.response.status === 409) {
        alert("Email is already registered. Please sign in with that email.");
      } else {
        alert("An error occurred while signing up. Please try again later.");
      }// Handle error here
    } finally{
        setLoading(false);
    }
  };

  return (
    <div className="signin-page flex justify-center items-center h-screen bg-gray-200">
      <div className="p-8 rounded-lg shadow-xxl">
        {showModal && (
          <div
            id="authentication-modal"
            className="fixed inset-0 z-50 overflow-y-auto overflow-x-hidden flex justify-center items-center"
          >
            <div className="relative p-4 w-full max-w-md">
              <div className="relative bg-white rounded-lg shadow">
                <div className="flex items-center justify-between p-4 border-b rounded-t">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Sign up for an account
                  </h3>
                </div>
                <div className="p-4">
                  <form className="space-y-4" action="#">
                    <div>
                      <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Your Name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Your Email
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
                        Your Password
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
                    <div>
                      <label
                        htmlFor="passwordConfirm"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Re-enter Password
                      </label>
                      <input
                        type="password"
                        name="passwordConfirm"
                        id="passwordConfirm"
                        placeholder="••••••••"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        required
                        value={repassword}
                        onChange={(e) => setRepassword(e.target.value)}
                      />
                    </div>
                    <button
                      type="button"
                      onClick={handleSignUp}
                      className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
                      disabled={loading}
                    >
                      {loading ? "Signing you up..." : "Signup"}
                    </button>
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

export default Signup;
