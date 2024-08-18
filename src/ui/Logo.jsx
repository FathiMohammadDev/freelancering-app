import { FcOrgUnit } from "react-icons/fc";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div>
      <Link to="/" className="flex items-center justify-center gap-5">
        <h1 className="text-primary text-2xl font-bold">LOGO.</h1>
        <FcOrgUnit className="w-10 h-10" />
      </Link>
    </div>
  );
};

export default Logo;
