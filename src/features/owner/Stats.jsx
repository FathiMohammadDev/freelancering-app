import { HiViewGrid, HiCurrencyDollar } from "react-icons/hi";
import { FaCodePullRequest } from "react-icons/fa6";
import Stat from "./State";

const Stats = ({ projects }) => {
  const numOfProjects = projects.length;
  const numOfAcceptedProjects = projects.filter((p) => p.status === 2).length;
  const numOfProposals = projects.reduce(
    (acc, curr) => curr.proposals.length + acc,
    0
  );
  return (
    <div className="flex items-center justify-start flex-wrap gap-5">
      <Stat
        num={numOfProjects}
        label="Projects"
        color="red"
        icon={<HiViewGrid className="w-20 h-20 text-white" />}
      />
      <Stat
        num={numOfAcceptedProjects}
        label="Accepted Projects"
        color="green"
        icon={<HiCurrencyDollar className="w-20 h-20 text-white" />}
      />
      <Stat
        num={numOfProposals}
        label="Requests"
        color="yellow"
        icon={<FaCodePullRequest className="w-20 h-20 text-white" />}
      />
    </div>
  );
};

export default Stats;