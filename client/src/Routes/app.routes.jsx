import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Home from "../components/Home";

const AppRoutes = () => {
  return (
    <Dashboard>
      <Routes>
        <Route index element={<Home />} />
        <div>hiiii</div>
      </Routes>
    </Dashboard>
  );
};

export default AppRoutes;
