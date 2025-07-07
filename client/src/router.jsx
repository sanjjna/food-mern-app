
// src/router.jsx
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

// For customer-only pages
export const CustomerRoute = () => {
  const { user } = useContext(AuthContext);
  return user && user.role === "customer" ? <Outlet /> : <Navigate to="/login" />;
};

// For admin-only pages
export const AdminRoute = () => {
  const { user } = useContext(AuthContext);
  return user && user.role === "admin" ? <Outlet /> : <Navigate to="/login" />;
};

