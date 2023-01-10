import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Home from "../components/Home";

const AppRoutes = () => {
  return (
    // <Dashboard>
    <Routes>
      <Route path="/home" element={<Dashboard />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="*" element={<Navigate replace to="/home" />} />
    </Routes>
    // </Dashboard>
  );
};

export default AppRoutes;
