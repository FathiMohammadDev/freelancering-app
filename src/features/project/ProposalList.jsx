import { useState } from "react";
import Modal from "../../ui/Modal";
import { useChangeProjectStatus } from "./useChangeProposalStatus";
import { useForm } from "react-hook-form";
import SelectField from "../../ui/SelectField";

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
  { label: "rejected", style: "bg-rose-400 p-2 rounded-xl" },
  { label: "waiting", style: "p-2 bg-none" },
  { label: "accepted", style: "bg-green-400 p-2 rounded-xl" },
];

const ProposalList = ({ proposals }) => {
  return (
    <div className="space-y-5">
      {proposals.map((proposal, index) => (
        <Proposal key={proposal._id} data={proposal} index={index} />
      ))}
    </div>
  );
};

export default ProposalList;

const Proposal = ({ data, index }) => {
  const { mutate, isPending } = useChangeProjectStatus();
  const [open, setOpen] = useState(false);
  const { register, handleSubmit } = useForm();

  const onSubmit = (values) => {
    console.log(values);
    mutate({ id: data._id, values }, { onSuccess: () => setOpen(false) });
  };
  return (
    <div className="bg-[#f3f5fa] p-5 rounded-2xl flex items-center justify-between gap-10 text-[rgb(93,92,92)] text-sm">
      <div className="bg-purple-400 text-white font-semibold py-3 px-4 rounded-xl">
        {index + 1}
      </div>
      <h3 className="text-base font-medium flex-1">{data.description}</h3>
      <div>{data.user.name}</div>
      <div>{data.price}$</div>
      <div>{data.duration}</div>
      <div className={`${statusStyle[data.status].style}`}>
        {statusStyle[data.status].label}
      </div>
      <button
        onClick={() => setOpen(!open)}
        className="bg-purple-300 p-2 rounded-lg cursor-pointer text-white"
      >
        change statuse
      </button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <SelectField name="status" register={register} options={options} />
          <button className="form-btn">Change status</button>
        </form>
      </Modal>
    </div>
  );
};
