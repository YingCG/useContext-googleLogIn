import React from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

function Protected({ children }) {
  const { user } = UserAuth();

  if (!user) {
    return <Navigate to="/" />;
  }
  return <div>{children}</div>;
}

export default Protected;
