import CameraAltIcon from "@mui/icons-material/CameraAlt";
import hero from "../assets/hero.png";
import Divider from "@mui/material/Divider";
import { NavLink } from "react-router-dom";
const PersonalCard = () => {
  return (
    <>
      <div className="flex-col shadow-lg p-4 rounded-[19px] w-[24.375rem] h-[23rem] felx">
        <div className="relative p-4 object-contain">
          <img
            className="rounded-[39px] w-[120px] h-[120px] object-fit"
            src={hero}
            alt=""
          />
          <span className="bottom-[22px] left-[120px] absolute bg-[#F0F0F0] p-1 rounded-full">
            <CameraAltIcon
              sx={{ fontSize: "15px", fill: "none", stroke: "#2D2F30" }}
            />
          </span>
        </div>
        <div className="p-4">
          <h3 className="text-lg bold">John Smith</h3>
          <div className="text-[#737791] text-[16px]">
            Senior Product Manager
          </div>
          <Divider sx={{ height: "15px" }} />
          <div className="bg-[#F4F8FE] mt-4 h-8 text-[#0F6CBD] text-md">
            <NavLink to="/"> Personal Information</NavLink>
          </div>{" "}
          <div className="mt-4 h-8 text-md">
            <NavLink to="/financial-information">
              {" "}
              Financial Information
            </NavLink>
          </div>{" "}
        </div>
      </div>
    </>
  );
};

export default PersonalCard;
