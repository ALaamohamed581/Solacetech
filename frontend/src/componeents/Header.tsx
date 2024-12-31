import NotificationsSharpIcon from "@mui/icons-material/NotificationsSharp";
import LocalPostOfficeSharpIcon from "@mui/icons-material/LocalPostOfficeSharp";
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
    <div className="flex justify-between w-[100%]">
      <div>
        {" "}
        <h1 className="text-[#151D48] text-2xl">John doe</h1>
        <span className="text-[#959FB0] text-xs">Profile</span> {">"}
        <span className="text-[#959FB0] text-xs"> HR manage</span>
        {">"}
        <span className="text-[#959FB0] text-xs"> Employees</span>
        {">"}
        <span className="text-[#003FAD] text-xs"> John Smith </span>
      </div>
      {meun ? (
        <MenuIcon className="flex justify-between items-center gap-6" />
      ) : (
        <div className="flex justify-between items-center gap-6">
          {" "}
          <div>
            <NotificationsSharpIcon
              sx={{ fill: "none", stroke: "#151D48", fontSize: "24px" }}
            />
          </div>
          <div>
            <LocalPostOfficeSharpIcon
              sx={{ fill: "none", stroke: "#151D48" }}
            />
          </div>
          <div>
            <SettingsSharpIcon sx={{ fill: "none", stroke: "#151D48" }} />
          </div>
          <div className="bg-slate-400 rounded-2xl">
            <img
              className="rounded-2xl w-10 h-10 object-fill"
              alt="Notification icon"
              src={hero}
            />
          </div>
        </div>
      )}{" "}
    </div>
  );
};

export default Header;
