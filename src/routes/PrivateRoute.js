import React from "react";
import { Route, Navigate, Outlet } from "react-router-dom";
import { authEmail } from "../redux/config";
const PrivateRoute = () => {
  return authEmail ? <Outlet /> : <Navigate to="signup" />;
};

export default PrivateRoute;
