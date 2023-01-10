import { Routes, Route, Navigate } from "react-router-dom";
// import SignIn from 'pages/SignIn';
// import SignUp from 'pages/SignUp';
// import ForgotPassword from "pages/ForgotPassword";
import Signup from "../components/Signup";
import Login from "../components/Login";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/sign_in" element={<Login />} />
      <Route path="/sign_up" element={<Signup />} />
      <Route path="*" element={<Navigate replace to="/sign_in" />} />
    </Routes>
  );
};

export default AuthRoutes;
