import PersonalCard from "../componeents/PersonalCard";
import { Outlet } from "react-router-dom";

 
const Profile = () => {
  return (
     <div className="flex md:flex-row flex-col gap-10 mt-16">
      <div className="m-auto md:m-0">
        <PersonalCard />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Profile;
