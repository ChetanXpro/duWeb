import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Dashboard = () => {
  return (
    <>
      <Header />
      <div className="h-[calc(100vh-3rem)]">
        <Outlet />
      </div>

      {/* <Footer /> */}
    </>
  );
};

export default Dashboard;
