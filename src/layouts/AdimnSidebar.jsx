import { NavLink } from "react-router-dom";
import {
  MdAccountCircle,
  MdViewAgenda,
  MdViewArray,
  MdViewCarousel,
  MdViewComfy,
} from "react-icons/md";
import { IoMdSettings, IoIosArrowBack } from "react-icons/io";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { MdGroupWork } from "react-icons/md";
import { RiLogoutCircleFill } from "react-icons/ri";
import { IoBackspaceSharp } from "react-icons/io5";
import Logo from "../ui/Logo";
import { AiFillAlert, AiOutlineUser } from "react-icons/ai";
import { HiViewBoards, HiViewGrid } from "react-icons/hi";
import { HiViewColumns } from "react-icons/hi2";
import Logout from "../features/auth/Logout";
const options = [
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
    icon: <AiOutlineUser className="w-6 h-6" />,
    id: 4,
  },
];

const AdminSidebar = ({ open, setOpen }) => {
  return (
    <aside
      className={`z-40 w-[265px] p-8  ${
        open
          ? "-translate-x-0 md:-translate-x-0"
          : "-translate-x-[265px] md:-translate-x-0"
      } bg-bg_primary fixed top-0 h-full space-y-16 border-border border-r-[1px] transition-all `}
    >
      <Logo />
      {open && (
        <IoBackspaceSharp
          className="md:hidden fixed -top-14 left-[235px] w-6 h-6"
          onClick={setOpen}
        />
      )}

      <ul className="flex flex-col items-start gap-3">
        {options.map((option) => (
          <SidebarItem
            key={option.id}
            to={option.to}
            name={option.name}
            icon={option.icon}
          />
        ))}
        <Logout />
      </ul>
    </aside>
  );
};

export default AdminSidebar;

function SidebarItem({ name, icon, to }) {
  const activeClass = "!text-text_primary  !bg-bg_active ";
  return (
    <li className="w-full font-medium">
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? `p-3 py-2 text-sm text-text_secondary flex items-center rounded-lg justify-start gap-4 ${activeClass}`
            : "p-3 py-2 text-sm text-text_secondary flex items-center rounded-lg justify-start gap-4 hover:bg-bg_light transition-all hover:text-text_primary"
        }
      >
        {icon}
        <span>{name}</span>
      </NavLink>
    </li>
  );
}
