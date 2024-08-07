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
        <div className="flex items-center justify-between px-6 py-3">
          <h2 className="font-bold text-text_primary">Proposals</h2>
          <button
            onClick={() => setOpen(!open)}
            className="bg-[#dcf4f4] py-2 px-4 bg-opacity-80 text-sm font-semibold text-[#4c9fa0] rounded-2xl"
          >
            Add proposals
          </button>
          <Modal open={open} onClose={() => setOpen(false)}>
            {/* <CreateOwnerProjectForm onClose={() => setOpen(false)} /> */}
          </Modal>
        </div>
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
        <th className="px-6 py-3">#</th>
        <th className="px-6 py-3">Description</th>
        <th scope="col" className="px-6 py-3">
          Duration
        </th>
        <th scope="col" className="px-6 py-3">
          Price
        </th>
        <th scope="col" className="px-6 py-3">
          Status
        </th>
      </tr>
    </thead>
  );
};
