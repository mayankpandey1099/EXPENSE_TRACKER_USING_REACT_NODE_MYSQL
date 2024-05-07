import React, { useContext } from "react";
// import { ExpenseContext } from "./ExpenseContext";

const Home = () => {
  // const { showSuccessMessage } = useContext(ExpenseContext);

  return (
    <div className="flex flex-col min-h-screen items-center justify-center m-4">
      <h1 className="text-4xl font-bold mb-6">The Generics</h1>
      <h2 className="text-2xl font-semibold mb-4">Music</h2>
      <div className="flex-grow">
        <div className="p-8">
          <div className="flex flex-wrap justify-center">
          </div>
        </div>
      </div>
      {/* {showSuccessMessage && (
        <div className="fixed top-0 right-0 m-4 bg-green-200 text-green-800 p-2 rounded">
          Product added successfully!
        </div>
      )} */}
    </div>
  );
};
export default Home;
