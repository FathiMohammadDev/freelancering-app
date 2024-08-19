import { FaCircleUser } from "react-icons/fa6";
import useUser from "./useUser";

const User = () => {
  const { isLoading, user } = useUser();
  return (
    <div
      className={`${isLoading && "opacity-20"} flex gap-2 items-center justify-center`}
    >
      <FaCircleUser className="w-7 h-7 cursor-pointer text-text_secondary" />
      <span className="text-text_secondary">{user?.name}</span>
    </div>
  );
};

export default User;
