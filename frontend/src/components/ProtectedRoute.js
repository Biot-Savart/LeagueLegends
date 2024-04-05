import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  // Check if there is a token
  if (!token) {
    // Redirect to login page if there is no token
    return <Navigate to="/login" replace />;
  }

  // If there is a token, return the child components (protected route's content)
  return children;
};

export default ProtectedRoute;
