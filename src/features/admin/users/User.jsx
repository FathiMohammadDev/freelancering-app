import { useState } from "react";
import Modal from "../../../ui/Modal";
import SelectField from "../../../ui/SelectField";
import { useForm } from "react-hook-form";
import { data } from "autoprefixer";
import { useChangeUserStatus } from "./useChangeUserStatus";

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
    label: "Active",
    style:
      "bg-accept text-accept bg-opacity-10 px-2 py-1  rounded-2xl font-medium text-center",
  },
];

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
    label: "Active",
    value: 2,
  },
];

const User = ({ user, userNum }) => {
  const [open, setOpen] = useState(false);
  const { register, handleSubmit } = useForm();
  const { mutate, isPending } = useChangeUserStatus();

  const onSubmit = (data) => {
    mutate({ id: user._id, data }, { onSuccess: () => setOpen(false) });
  };

  return (
    <tr className="bg-bg_primary border-b-[1px] border-border ">
      <td className="px-6 py-4">{userNum}</td>
      <td className="px-6 py-4">{user.name}</td>
      <th
        scope="row"
        className="px-6 py-4 font-medium text-text_primary whitespace-nowrap"
      >
        {user.email}
      </th>
      <td className="px-6 py-4">{user.phoneNumber}</td>
      <td className="px-6 py-4">{user.role.toLowerCase()}</td>
      <td className="px-6 py-4">
        <div className={`${statusStyle[user.status].style}`}>
          {statusStyle[user.status].label}
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
export default User;
