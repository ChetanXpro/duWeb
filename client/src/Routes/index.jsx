// import useAuthentication from "hooks/useAuthentication";
import useAuthentication from "../hooks/useAuthentication";
import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";
import { Routes } from "react-router-dom";
const AllRoutes = () => {
  const { isLoggedIn, isLogin } = useAuthentication();
  console.log(isLoggedIn);
  return <div>{isLoggedIn ? <AppRoutes /> : <AuthRoutes />}</div>;
};
export default AllRoutes;
