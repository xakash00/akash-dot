import React from "react";
import { Route, Navigate, Outlet } from "react-router-dom";
import { authEmail } from "../redux/config";
const ProtectedRoute = () => {
  return !authEmail ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
