import React, { useState, useEffect } from "react";

const ForgotPassword = () => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");

   useEffect(() => {
     setShowModal(true); // Open the modal when the component mounts
   }, []);


  const handleForgotPassword = () => {
    // Implement forgot password logic here
    // Example: Send email to reset password
    console.log("Forgot password for email:", email);
    // Close the modal after handling forgot password
    setShowModal(false);
    window.location.href = "/";
  };

  return (
    <div className="signin-page flex justify-center items-center h-screen  bg-gray-200">
      <div className="p-8 rounded-lg shadow-xxl">
        {showModal && (
          <div className="fixed inset-0 z-50 overflow-y-auto overflow-x-hidden flex justify-center items-center">
            <div className="relative w-full p-4 max-w-md">
              <div className="relative bg-white rounded-lg shadow">
              <div className="flex items-center justify-between p-4 border-b rounded-t">
                <h3 className="text-xl font-semibold text-gray-900">
                  Forgot Password
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
                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={handleForgotPassword}
                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
                  >
                    Reset Password
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

export default ForgotPassword;
