import { useState } from "react";
import Modal from "../../ui/Modal";
import Proposal from "./Proposal";
import { useProposals } from "./useProposals";

const ProposalsList = () => {
  const [open, setOpen] = useState(false);
  const { isLoading, proposals } = useProposals();
  if (isLoading) return <p>lodaing...</p>;
  if (!proposals?.length)
    return (
      <p className="text-base text-slate-500 text-center">
        ther is no project. create project
      </p>
    );

  return (
    <>
      <div className="relative overflow-x-auto bg-bg_primary rounded-2xl">
        <h2 className="font-bold text-text_primary px-6 py-3">Proposals</h2>
        <table className="w-full text-sm text-left rtl:text-right text-text_secondary">
          <Thead />
          <tbody>
            {proposals.map((proposal, index) => (
              <Proposal
                key={proposal._id}
                projectNum={index + 1}
                proposal={proposal}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProposalsList;

const Thead = () => {
  return (
    <thead className="text-xs text-text_secondary font-bold">
      <tr>
        <th className="px-6 py-3 hidden md:table-cell	">#</th>
        <th className="px-6 py-3">Description</th>
        <th scope="col" className="px-6 py-3 hidden md:table-cell	">
          Duration
        </th>
        <th scope="col" className="px-6 py-3 hidden md:table-cell	">
          Price
        </th>
        <th scope="col" className="px-6 py-3">
          Status
        </th>
      </tr>
    </thead>
  );
};
