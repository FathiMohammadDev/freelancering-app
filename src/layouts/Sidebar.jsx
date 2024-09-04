import { NavLink } from "react-router-dom";
import { IoBackspaceSharp,IoCloseSharp } from "react-icons/io5";
import Logo from "../ui/Logo";
import Logout from "../features/auth/Logout";
import { useOutsideClick } from "../hooks/useOutsideClick";

const Sidebar = ({ open, setOpen, options }) => {
  const ref = useOutsideClick(setOpen);

  return (
    <aside
      ref={ref}
      className={`z-40 w-[265px] p-8  ${
        open
          ? "-translate-x-0 md:-translate-x-0"
          : "-translate-x-[265px] md:-translate-x-0"
      } bg-bg_primary fixed top-0 h-full space-y-16 border-border border-r-[1px] transition-all`}
    >
      <Logo />
      {open && (
        <IoCloseSharp
          className="md:hidden fixed text-text_primary -top-14 left-[234px] cursor-pointer w-8 h-8"
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
            setOpen={setOpen}
          />
        ))}
        <Logout />
      </ul>
    </aside>
  );
};

export default Sidebar;

function SidebarItem({ name, icon, to, setOpen }) {
  const activeClass = "!text-text_primary  !bg-bg_active ";
  return (
    <li className="w-full font-medium">
      <NavLink
        onClick={setOpen}
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
