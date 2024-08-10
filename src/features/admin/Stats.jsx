import { HiViewGrid, HiUser } from "react-icons/hi";
import { MdViewAgenda } from "react-icons/md";
import Stat from "./State";

const Stats = ({ proposals, users, projects }) => {
  return (
    <div className="flex items-center justify-start flex-wrap gap-10">
      <Stat
        num={users}
        label="All Users"
        color="red"
        icon={<HiUser className="w-20 h-20 text-white" />}
        path="users"
      />
      <Stat
        num={proposals}
        label="All Proposals"
        color="green"
        icon={<HiViewGrid className="w-20 h-20 text-white" />}
        path="proposals"
      />
      <Stat
        num={projects}
        label="All Projects"
        color="yellow"
        icon={<MdViewAgenda className="w-20 h-20 text-white" />}
        path="projects"
      />
    </div>
  );
};

export default Stats;
