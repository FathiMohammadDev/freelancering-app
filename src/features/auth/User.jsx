import { HiOutlineUser, HiOutlineUserCircle } from "react-icons/hi";
import useUser from "./useUser";

const User = () => {
  const { isLoading, user } = useUser();

  console.log(isLoading, user);
  return (
    <div
      className={`${isLoading && "opacity-20"} flex items-center justify-center`}
    >
      <HiOutlineUserCircle className="w-7 h-7 cursor-pointer text-text_secondary" />
      <span className="text-text_secondary">{user?.name}</span>
    </div>
  );
};

export default User;
