import React from 'react';
// import { useCookies } from 'react-cookie';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';



const ProtectedRoute = ({ children }) => {
  const user = useSelector((state) => state.user.user);  
  const isAuthenticated = Boolean(user && user.token);  
  console.log(user.token,"token")
  console.log("isAuthenticated", isAuthenticated);

  return isAuthenticated ? children : <Navigate to="/" />; 
};

export default ProtectedRoute;