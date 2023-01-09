import React from "react";
import { Navigate, Outlet } from "react-router-dom";

import useAuthentication from "../hooks/useAuthentication";

const RequireAuth = () => {
  const { isLoggedIn } = useAuthentication();
  return isLoggedIn ? <Outlet /> : <Navigate to={"/sign_in"} />;
};

export default RequireAuth;
