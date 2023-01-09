import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Home from "../components/Home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route index element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;
