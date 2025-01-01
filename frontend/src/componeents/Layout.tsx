import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <>
      <div className="flex md:flex-row flex-col items-center md:items-start bg-[#F8F9FA] p-3">
        <Sidebar />

        <div className="flex flex-col justify-start p-6 max-w-[90rem]">
          <Header /> <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
