import { FcHighPriority } from "react-icons/fc";

const ConfirmDelete = ({ title, onClose, disabled, onConfirm }) => {
  return (
    <div className="flex items-center justify-center flex-col gap-6">
      <div className="flex items-center justify-center gap-5 flex-col">
        <FcHighPriority className=" h-16 w-16" />
        <div className="text-xl font-bold text-error">Delete Project</div>
      </div>
      <h3 className="text-base text-text_secondary text-center">
        you're going to delete the "<b>{title}</b>" project.
      </h3>
      <div className="w-full flex items-center justify-between gap-5">
        <button
          disabled={disabled}
          onClick={onClose}
          className="btn bg-bg_light flex-1"
        >
          No, Keep It.
        </button>
        <button
          onClick={onConfirm}
          disabled={disabled}
          className="btn bg-error text-white flex-1"
        >
          Yes, Delete!
        </button>
      </div>
    </div>
  );
};

export default ConfirmDelete;
