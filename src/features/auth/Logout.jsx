import { HiOutlineLogout } from "react-icons/hi";
import useLogout from "./useLogout";

const Logout = () => {
  const { logout, isPending } = useLogout();
  return isPending ? (
    <p>loding...</p>
  ) : (
    <li
      onClick={logout}
      className="w-full font-medium cursor-pointer p-3 py-2 text-sm text-error flex items-center rounded-lg justify-start gap-4 hover:bg-bg_light transition-all"
    >
      {<HiOutlineLogout className="w-6 h-6" />}
      <span>Logout</span>
    </li>
  );
};

export default Logout;
