import { Outlet } from "react-router-dom";
import OwnerSidebar from "./OwnerSidebar";
import { useState } from "react";
import DarkMode from "../ui/DarkMode";

const OwnerLayout = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <div className="bg-bg_light">
      <OwnerSidebar open={openSidebar} setOpen={() => setOpenSidebar(false)} />
      <div className="md:ml-[265px] h-screen">
        <div className="bg-bg_primary p-3">
          <DarkMode />
          <div className="md:hidden" onClick={() => setOpenSidebar(true)}>
            show
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default OwnerLayout;
