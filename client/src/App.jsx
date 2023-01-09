import "./App.css";

import { Route } from "react-router-dom";
import Routes from "./Routes";
// import Login from "./components/Login";
// import RequireAuth from "./components/RequireAuth";
// import Home from "./components/Home";
// import Dashboard from "./components/Dashboard";
// import PersistLogin from "./components/PersistLogin";
// import Layout from "./components/Layout";
// import Signup from "./components/Signup";

function App() {
  return (
    <div className="flex-column justify-center ">
      <Routes />
    </div>
  );
}

export default App;

{
  /* <Route path="/" element={<Layout />}>
<Route path="sign_in" element={<Login />} />
<Route path="sign_up" element={<Signup />} />
Secure Routes
<Route element={<PersistLogin />}>
<Route element={<RequireAuth />}>
  <Route element={<Dashboard />}>
    <Route path="/" element={<Home />} />

    <Route />
  </Route>
  </Route>
</Route>
Secure Routes End
</Route> */
}
