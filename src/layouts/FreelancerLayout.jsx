import { Outlet } from "react-router-dom";
import { useState } from "react";
import DarkMode from "../ui/DarkMode";
import User from "../features/auth/User";
import FreelancerSidebar from "./FreelancerSidebar";
import { HiMenuAlt2 } from "react-icons/hi";

const FreelancerLayout = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <div className="bg-bg_light">
      <FreelancerSidebar
        open={openSidebar}
        setOpen={() => setOpenSidebar(false)}
      />
      <div className="md:ml-[265px] min-h-screen">
        <div className="bg-bg_primary p-3 flex items-center gap-4 sticky top-0">
          <div className="md:hidden" onClick={() => setOpenSidebar(true)}>
            <HiMenuAlt2 className="w-7 h-7 cursor-pointer text-text_secondary" />
          </div>
          <DarkMode />
          <User />
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default FreelancerLayout;
