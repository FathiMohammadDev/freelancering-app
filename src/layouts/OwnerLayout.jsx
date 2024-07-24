import { Outlet } from "react-router-dom";

const OwnerLayout = () => {
  return (
    <div>
      <div>header</div>
      <div>sidbar</div>
      <Outlet />
    </div>
  );
};

export default OwnerLayout;
