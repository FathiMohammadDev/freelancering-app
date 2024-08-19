import { HiMenuAlt2 } from "react-icons/hi";
import DarkMode from "../ui/DarkMode";
import User from "../features/auth/User";

const Header = ({ setOpen }) => {
  return (
    <header className=" border-b border-border bg-bg_primary p-3 flex items-center justify-between sticky top-0">
      <div className="md:hidden" onClick={setOpen}>
        <HiMenuAlt2 className="w-7 h-7 cursor-pointer text-text_secondary" />
      </div>
      <div className="flex items-center justify-center gap-4">
        <DarkMode />
        <User />
      </div>
    </header>
  );
};

export default Header;
