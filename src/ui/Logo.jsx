import { FcWorkflow } from "react-icons/fc";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div>
      <Link to="/">
        <h1 className="text-center text-primary text-xl logo">ProjectMroject</h1>
      </Link>
    </div>
  );
};

export default Logo;
