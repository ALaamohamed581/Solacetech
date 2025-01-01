import NotificationsSharpIcon from "@mui/icons-material/NotificationsSharp";
import MailIcon from "@mui/icons-material/Mail";
import SettingsSharpIcon from "@mui/icons-material/SettingsSharp";

import hero from "../assets/hero.png";
import { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [meun, setMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setMenu(window.innerWidth < 650);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex justify-between items-center p-4 w-[100%]">
      <div>
        <h1 className="font-bold text-[#151D48] text-2xl">John Doe</h1>
        <span className="text-[#959FB0] text-xs">Profile</span> {">"}
        <span className="text-[#959FB0] text-xs"> HR Manager</span>
        {">"}
        <span className="text-[#959FB0] text-xs"> Employees</span>
        {">"}
        <span className="text-[#003FAD] text-xs"> John Smith</span>
      </div>

      {meun ? (
        <MenuIcon className="cursor-pointer" sx={{ fontSize: "32px" }} />
      ) : (
        <div className="flex justify-between items-center gap-6">
          <div className="relative">
            <NotificationsSharpIcon
              sx={{ fill: "none", stroke: "#151D48", fontSize: "28px" }}
            />
            <span className="top-0 right-0 absolute border-white bg-red-500 border rounded-full w-3 h-3"></span>
          </div>

          <div>
            <MailIcon
              sx={{ fill: "none", stroke: "#151D48", fontSize: "28px" }}
            />
          </div>

          <div>
            <SettingsSharpIcon
              sx={{ fill: "none", stroke: "#151D48", fontSize: "28px" }}
            />
          </div>

          <div className="bg-gray-300 rounded-full w-10 h-10 overflow-hidden">
            <img
              className="w-full h-full object-cover"
              alt="Profile"
              src={hero}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
