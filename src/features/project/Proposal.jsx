import { useState } from "react";
import Modal from "../../ui/Modal";
import { useChangeProjectStatus } from "./useChangeProposalStatus";
import { useForm } from "react-hook-form";
import SelectField from "../../ui/SelectField";
import { truncate } from "../../utils/truncate";
import { useParams } from "react-router-dom";

const options = [
  {
    label: "Rejected",
    value: 0,
  },
  {
    label: "Waiting",
    value: 1,
  },
  {
    label: "accepted",
    value: 2,
  },
];

const statusStyle = [
  {
    label: "Rejected",
    style:
      "bg-error text-error bg-opacity-10 px-2 py-1 rounded-2xl font-medium text-center",
  },
  {
    label: "Waiting",
    style:
      "px-2 py-1  bg-pending text-pending bg-opacity-10 rounded-2xl font-medium text-center",
  },
  {
    label: "Accepted",
    style:
      "bg-accept text-accept bg-opacity-10 px-2 py-1  rounded-2xl font-medium text-center",
  },
];

const Proposal = ({ data, index }) => {
  const { mutate, isPending } = useChangeProjectStatus();
  const [open, setOpen] = useState(false);
  const { register, handleSubmit } = useForm();
  const {id:projectId} = useParams()

  const onSubmit = (values) => {
    console.log(values);
    mutate({ proposalId:data._id, projectId, ...values }, { onSuccess: () => setOpen(false) });
  };
  return (
    <tr className="border-b-[1px] border-border ">
      <td className="px-6 py-4">{index}</td>
      <th
        scope="row"
        className="px-6 py-4 font-medium text-text_primary whitespace-nowrap"
      >
        {truncate(data.description, 24)}
      </th>
      <td className="px-6 py-4">{data.user.name}</td>
      <td className="px-6 py-4">{data.price}$</td>
      <td className="px-6 py-4">{data.duration}</td>
      <td className="px-6 py-4">
        <div className={`${statusStyle[data.status].style}`}>
          {statusStyle[data.status].label}
        </div>
      </td>
      <td className="px-6 py-4">
        <button
          onClick={() => setOpen(!open)}
          className="btn bg-bg_active border border-border"
        >
          Change
        </button>
        <Modal open={open} onClose={() => setOpen(false)}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <SelectField name="status" register={register} options={options} />
            <button className="form-btn">Change status</button>
          </form>
        </Modal>
      </td>
    </tr>
  );
};

export default Proposal;
