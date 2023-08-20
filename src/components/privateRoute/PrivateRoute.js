import React from "react";
import { useSelector } from "react-redux";
import { useLocation, Navigate } from "react-router-dom";
export const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user } = useSelector((store) => store.userInfo);

  return user?._id ? children : <Navigate to="/" />;
};
