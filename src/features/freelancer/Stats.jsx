import { HiViewGrid, HiCurrencyDollar } from "react-icons/hi";
import { FaCodePullRequest } from "react-icons/fa6";
import Stat from "./State";

const Stats = ({ proposals }) => {
  const numOfProposals = proposals.length;
  const acceptedProposals = proposals.filter((p) => p.status === 2);
  const balance = acceptedProposals.reduce((acc, curr) => curr.price + acc, 0);
  return (
    <div className="flex items-center justify-start flex-wrap gap-10">
      <Stat
        num={numOfProposals}
        label="Proposals"
        color="red"
        icon={<HiViewGrid className="w-20 h-20 text-white" />}
      />
      <Stat
        num={acceptedProposals.length}
        label="Accepted Proposals"
        color="green"
        icon={<HiCurrencyDollar className="w-20 h-20 text-white" />}
      />
      <Stat
        num={balance}
        label="Wallet"
        color="yellow"
        icon={<FaCodePullRequest className="w-20 h-20 text-white" />}
      />
    </div>
  );
};

export default Stats;
