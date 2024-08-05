import { Outlet } from "react-router-dom";
import OwnerSidebar from "./OwnerSidebar";
import { useState } from "react";

const OwnerLayout = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <div className="bg-bg_light">
      <OwnerSidebar open={openSidebar} setOpen={() =>setOpenSidebar(false)} />
      <div className="md:ml-[265px] h-screen">
        <div>
          <div className="md:hidden" onClick={() => setOpenSidebar(true)}>show</div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default OwnerLayout;
