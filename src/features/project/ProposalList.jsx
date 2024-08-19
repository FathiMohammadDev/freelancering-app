import Proposal from "./Proposal";

const ProposalList = ({ proposals }) => {
  if (proposals.length === 0)
    return (
      <p className="text-sm p-5 text-text_secondary text-center">
        Ther is no proposals. not yet ):
      </p>
    );

  return (
    <table className="w-full text-sm text-left rtl:text-right text-text_secondary overflow-x-auto">
      <Thead />
      <tbody className="">
        {proposals.map((project, index) => (
          <Proposal key={project._id} index={index + 1} data={project} />
        ))}
      </tbody>
    </table>
  );
};

export default ProposalList;

const Thead = () => {
  return (
    <thead className="text-xs text-text_secondary font-bold">
      <tr>
        <th className="px-6 py-3 hidden md:table-cell">#</th>
        <th className="px-6 py-3">Desc</th>
        <th scope="col" className="px-6 py-3 hidden md:table-cell">
          Name
        </th>
        <th scope="col" className="px-6 py-3 hidden md:table-cell">
          Price
        </th>
        <th scope="col" className="px-6 py-3 hidden md:table-cell">
          Duration
        </th>
        <th scope="col" className="px-6 py-3">
          Status
        </th>
        <th scope="col" className="px-6 py-3">
          Processes
        </th>
      </tr>
    </thead>
  );
};
