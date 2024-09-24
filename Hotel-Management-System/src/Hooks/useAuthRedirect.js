// // src/UserContext.js
// import React, { createContext, useContext, useState } from 'react';

// // Create a Context for User
// const UserContext = createContext();

// // UserProvider component
// export const UserProvider = ({ children }) => {
//   const [userRole, setUserRole] = useState(null); // Default: no user role

//   return (
//     <UserContext.Provider value={{ userRole, setUserRole }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// // Custom hook to use the UserContext
// export const useUser = () => {
//   return useContext(UserContext);
// };

// src/hooks/useAuthRedirect.js
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useAuthRedirect = (userRole) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (userRole === 'admin') {
      navigate('/adminDashboard');
    } else if (userRole === 'customer') {
      navigate('/customerDashboard');
    } else if (userRole === 'staff') {
      navigate('/staffDashboard');
    }
  }, [userRole, navigate]);
};

export default useAuthRedirect;
