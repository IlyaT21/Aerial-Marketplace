import React from "react";
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

interface AuthGuardProps {
  children: React.ReactNode;
  roles: string[]; // Allowed roles
}

const AuthGuard: React.FC<AuthGuardProps> = ({ children, roles }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" />;
  }

  try {
    const decoded: any = jwtDecode(token);
    const userRole = decoded.role;

    if (!roles.includes(userRole)) {
      return <Navigate to="/" />;
    }

    return <>{children}</>;
  } catch (error) {
    console.error("Invalid token:", error);
    return <Navigate to="/login" />;
  }
};

export default AuthGuard;
