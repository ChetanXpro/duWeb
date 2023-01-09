import React from "react";
import {
  Navigate,
  Outlet,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import useAuth from "../hooks/useAuth";
import jwtDecode from "jwt-decode";
import useAuthentication from "../hooks/useAuthentication";

const RequireAuth = () => {
  const { isLoggedIn } = useAuthentication();
  return isLoggedIn ? <Outlet /> : <Navigate to={"/sign_in"} />;
};

export default RequireAuth;
