import { Outlet } from "react-router-dom";
import OwnerSidebar from "./OwnerSidebar";
import { useState } from "react";
import DarkMode from "../ui/DarkMode";
import User from "../features/auth/User";
import FreelancerSidebar from "./FreelancerSidebar";

const FreelancerLayout = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <div className="bg-bg_light">
      <FreelancerSidebar
        open={openSidebar}
        setOpen={() => setOpenSidebar(false)}
      />
      <div className="md:ml-[265px] min-h-screen">
        <div className="bg-bg_primary p-3 flex items-center gap-4">
          <DarkMode />
          <User />
          <div className="md:hidden" onClick={() => setOpenSidebar(true)}>
            show
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default FreelancerLayout;
