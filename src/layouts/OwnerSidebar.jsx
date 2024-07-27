import { NavLink } from "react-router-dom";
import { LuLayoutDashboard, LuUserCircle } from "react-icons/lu";
import { IoIosCodeWorking, IoIosLogOut } from "react-icons/io";

const options = [
  {
    name: "Dashboard",
    to: "dashboard",
    icon: <LuLayoutDashboard className="w-5 h-5" />,
    id: 1,
  },
  {
    name: "Projects",
    to: "projects",
    icon: <IoIosCodeWorking className="w-5 h-5" />,
    id: 2,
  },
  {
    name: "Profile",
    to: "profile",
    icon: <LuUserCircle className="w-5 h-5" />,
    id: 3,
  },
  {
    name: "Logout",
    to: "logout",
    icon: <IoIosLogOut className="w-5 h-5" />,
    id: 4,
  },
];

const OwnerSidebar = () => {
  return (
    <aside className="w-60 py-5  bg-[#121432] fixed top-0 h-full space-y-16">
      <div className="text-2xl text-white text-center">LOgO</div>
      <ul className="flex flex-col gap-6 items-start">
        {options.map((option) => (
          <SidebarItem
            key={option.id}
            to={option.to}
            name={option.name}
            icon={option.icon}
          />
        ))}
      </ul>
    </aside>
  );
};

export default OwnerSidebar;

function SidebarItem({ name, icon, to }) {
  const activeClass =
    "pl-10 text-[#f3f5fa] flex items-center justify-center gap-4 border-l-4 border-[#f3f5fa]";
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? activeClass
            : "pl-10 text-[#c2c1c8] flex items-center justify-center gap-4"
        }
      >
        {icon}
        <span>{name}</span>
      </NavLink>
    </li>
  );
}
