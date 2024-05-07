// import React, { createContext, useState, useMemo } from "react";

// export const ExpenseContext = createContext();

// export const ExpenseProvider = ({ children }) => {
//   //const [cart, setCart] = useState([]);
//   const [showSuccessMessage, setShowSuccessMessage] = useState(false);
//   const [authenticated, setAuthenticated] = useState(false);

//   setShowSuccessMessage(true);
//   setTimeout(() => setShowSuccessMessage(false), 2000);

//   return (
//     <ExpenseContext.Provider
//       value={{
//         showSuccessMessage,
//         authenticated,
//         setAuthenticated
//       }}
//     >
//       {children}
//     </ExpenseContext.Provider>
//   );
// };
