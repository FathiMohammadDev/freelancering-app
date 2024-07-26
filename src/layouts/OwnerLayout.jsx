import { Outlet } from "react-router-dom";
import OwnerSidebar from "./OwnerSidebar";

const OwnerLayout = () => {
  return (
    <div className="bg-[#121432]">
      <OwnerSidebar />
      <div className="bg-white rounded-l-[40px] ml-60 h-screen">
        <div>header</div>
        <Outlet />
      </div>
    </div>
  );
};

export default OwnerLayout;
