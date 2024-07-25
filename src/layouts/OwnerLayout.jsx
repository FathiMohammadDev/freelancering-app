import { Outlet } from "react-router-dom";
import OwnerSidebar from "./OwnerSidebar";

const OwnerLayout = () => {
  return (
    <div>
      <div>header</div>
      <OwnerSidebar />
      <Outlet />
    </div>
  );
};

export default OwnerLayout;
