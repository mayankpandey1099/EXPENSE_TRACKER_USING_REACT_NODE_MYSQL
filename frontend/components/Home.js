import React from "react";
import ExpenseForm from "./expenses/ExpenseForm";
import PaginatedExpense from "./expenses/PaginatedExpenses";
import UpdatedExpenseModal from "./expenses/UpdateExpense";
import {useSelector} from "react-redux";

const Home = () => {

  const showModal = useSelector((state)=> state.modal.showModalUpdate); 

  return (
    <>
      <div className="h-screen flex justify-between items-start bg-gray-200">
        <div
          className="mt-20 ml-20 mr-10 mb-5 bg-slate-100 rounded-lg shadow-lg"
          style={{ height: "40%", width: "25%" }}
        >
          <ExpenseForm />
        </div>
        <div
          className="mt-20 mr-20 mb-5 bg-slate-100 rounded-lg shadow-lg"
          style={{ height: "70%", width: "45%" }}
        >
          <PaginatedExpense />
        </div>
      </div>
      {showModal && (
        <div >
          <UpdatedExpenseModal />
        </div>
      )}
    </>
  );
};
export default Home;
