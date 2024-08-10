import { Outlet } from "react-router-dom";
import { useState } from "react";
import DarkMode from "../ui/DarkMode";
import User from "../features/auth/User";
import AdminSidebar from "./AdimnSidebar";

const AdminLayout = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <div className="bg-bg_light">
      <AdminSidebar
        open={openSidebar}
        setOpen={() => setOpenSidebar(false)}
      />
      <div className="md:ml-[265px] min-h-screen">
        <div className="bg-bg_primary p-3 flex items-center gap-4 sticky top-0">
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

export default AdminLayout;
