import React from "react";
import { Navigate } from "react-router-dom";
import { auth_token_key } from "../utils/ApiUrls";

const ProtectedRoute = ({ isLoggedIn, children }) => {
 const isAuth=localStorage.getItem(auth_token_key);
  if (!isLoggedIn && !isAuth) {
    return <Navigate to="/login" replace />;
  }
  return children;
};
export default ProtectedRoute;
