import { Outlet, useLocation } from "react-router-dom";
import { useState } from "react";
import DarkMode from "../ui/DarkMode";
import User from "../features/auth/User";
import FreelancerSidebar from "./FreelancerSidebar";
import { HiMenuAlt2, HiUser } from "react-icons/hi";
import Sidebar from "./SideBar";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { MdAccountCircle, MdCategory, MdGroupWork, MdViewAgenda } from "react-icons/md";
import { AiFillAlert } from "react-icons/ai";
import { RiLogoutCircleFill } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";

const options = {
  freelancer: [
    {
      name: "Dashboard",
      to: "dashboard",
      icon: <TbLayoutDashboardFilled className="w-6 h-6" />,
      id: 1,
    },
    {
      name: "Projects",
      to: "projects",
      icon: <MdGroupWork className="w-6 h-6" />,
      id: 2,
    },
    {
      name: "Proposals",
      to: "proposals",
      icon: <AiFillAlert className="w-6 h-6" />,
      id: 3,
    },
  ],
  owner: [
    {
      name: "Dashboard",
      to: "dashboard",
      icon: <TbLayoutDashboardFilled className="w-6 h-6" />,
      id: 1,
    },
    {
      name: "Projects",
      to: "projects",
      icon: <MdGroupWork className="w-6 h-6" />,
      id: 2,
    },
    {
      name: "Profile",
      to: "profile",
      icon: <MdAccountCircle className="w-6 h-6" />,
      id: 3,
    },
  ],
  admin: [
    {
      name: "Dashboard",
      to: "dashboard",
      icon: <TbLayoutDashboardFilled className="w-6 h-6" />,
      id: 1,
    },
    {
      name: "Projects",
      to: "projects",
      icon: <MdGroupWork className="w-6 h-6" />,
      id: 2,
    },
    {
      name: "Proposals",
      to: "proposals",
      icon: <MdViewAgenda className="w-6 h-6" />,
      id: 3,
    },
    {
      name: "Users",
      to: "users",
      icon: <HiUser className="w-6 h-6" />,
      id: 4,
    },
    {
      name: "Category",
      to: "category",
      icon: <MdCategory className="w-6 h-6" />,
      id: 5,
    },
  ],
};

const Layout = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const { pathname } = useLocation();
  const desierdRole = pathname.split("/").at(1);
  console.log(options[desierdRole]);
  return (
    <div className="bg-bg_light">
      <Sidebar
        options={options[desierdRole]}
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

export default Layout;
