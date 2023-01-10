import "./App.css";

import { Navigate, Route, Routes } from "react-router-dom";
import AllRoutes from "./Routes";
import Login from "./components/Login";
import RequireAuth from "./components/RequireAuth";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import PersistLogin from "./components/PersistLogin";
import Layout from "./components/Layout";
import Signup from "./components/Signup";
import RouterSetting from "./Routes/RouterSetting";
import Setting from "./components/Setting";

function App() {
  return (
    // <div className="flex-column justify-center ">
    //   <RouterSetting>
    //     <AllRoutes />
    //   </RouterSetting>
    // </div>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/sign_in" element={<Login />} />
        <Route path="/sign_up" element={<Signup />} />

        <Route element={<RequireAuth />}>
          <Route path="/" element={<Dashboard />}>
            <Route index element={<Home />} />
            <Route path="/setting" element={<Setting />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate replace to="/sign_in" />} />
      </Route>
    </Routes>
  );
}
export default App;

{
}
