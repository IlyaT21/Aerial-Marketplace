import React from "react";
import { Navigate } from "react-router-dom";

interface PublicRouteProps {
  children: React.ReactNode;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
  const token = localStorage.getItem("token");

  if (token) {
    // If user is logged in, redirect to homepage or dashboard
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};

export default PublicRoute;
