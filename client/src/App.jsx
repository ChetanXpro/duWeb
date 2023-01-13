import "./App.css";

import { Navigate, Route, Routes } from "react-router-dom";

import Login from "./components/Signin/Login";
import Signup from "./components/Signup/Signup";
import Home from "./components/Dashboard/Home";
import Setting from "./components/Setting/Setting";
import Profile from "./components/Profile/Profile";
import Dashboard from "./components/Dashboard/Dashboard";
import RequireAuth from "./components/RequireAuth";
import Layout from "./components/Layout";
import UploadFile from "./components/Upload/Upload";
import NotesPage from "./components/NotesPage/NotesPage";

function App() {
  return (
    <Routes>
      //{" "}
      <Route path="/" element={<Layout />}>
        <Route path="/sign_in" element={<Login />} />
        <Route path="/sign_up" element={<Signup />} />
        <Route element={<RequireAuth />}>
          <Route path="/" element={<Dashboard />}>
            <Route index element={<Home />} />
            <Route path="setting" element={<Setting />} />
            <Route path="profile" element={<Profile />} />
            <Route path="profile/:id" element={<NotesPage />} />
            {/* <Route path="profile/:id" element={<NotesPage />} /> */}
            <Route path="upload" element={<UploadFile />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate replace to="/sign_in" />} />
        //{" "}
      </Route>
    </Routes>
  );
}
export default App;

{
}
