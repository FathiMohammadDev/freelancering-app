import { truncate } from "../../utils/truncate";
const statusStyle = [
  {
    label: "Rejected",
    style:
      "bg-error text-error bg-opacity-20 px-2 py-1 rounded-2xl font-medium text-center",
  },
  {
    label: "Waiting",
    style:
      "px-2 py-1  bg-pending text-pending bg-opacity-20 rounded-2xl font-medium text-center",
  },
  {
    label: "Accepted",
    style:
      "bg-accept text-accept bg-opacity-20 px-2 py-1  rounded-2xl font-medium text-center",
  },
];

const Proposal = ({ proposal, projectNum }) => {
  return (
    <tr className="bg-bg_primary border-b-[1px] border-border ">
      <td className="px-6 py-4 hidden md:table-cell">{projectNum}</td>
      <th
        scope="row"
        className="px-6 py-4 font-medium text-text_primary whitespace-nowrap"
      >
        {truncate(proposal.description, 25)}
      </th>
      <td className="px-6 py-4 hidden md:table-cell">{proposal.price}$</td>
      <td className="px-6 py-4 hidden md:table-cell">{proposal.duration} day</td>
      <td className="px-6 py-4">
        <div className={`${statusStyle[proposal.status].style}`}>
          {statusStyle[proposal.status].label}
        </div>
      </td>
    </tr>
  );
};

export default Proposal;
