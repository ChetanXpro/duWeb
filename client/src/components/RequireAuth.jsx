import React from "react";
import { Navigate, Outlet, Routes } from "react-router-dom";
import { isLoggedInAtom } from "../atoms/status";

import useAuthentication from "../hooks/useAuthentication";
import { useAtom } from "jotai";

const RequireAuth = () => {
  // const [isLoggedIn, setIsLoggedIn] = useAtom(isLoggedInAtom);
  const { isLoggedIn, isLogin } = useAuthentication();

  // console.log(isLoggedIn);
  return (
    <>
      {isLoggedIn || isLogin ? (
        <Outlet />
      ) : (
        <Navigate to={"/sign_in"} replace state={{ path: location.pathname }} />
      )}
    </>
  );
};

export default RequireAuth;
