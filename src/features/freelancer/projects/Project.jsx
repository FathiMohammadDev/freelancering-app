import { toLocalDate } from "../../../utils/toLocalDate";
import Modal from "../../../ui/Modal";
import CreateProposalForm from "../../proposals/CreateProposalForm";
import { useState } from "react";
import { truncate } from "../../../utils/truncate";

const statusStyle = {
  CLOSED: {
    label: "Close",
    style:
      "bg-error text-error bg-opacity-20 px-2 py-1 rounded-2xl font-medium text-sm text-center",
  },
  OPEN: {
    label: "Open",
    style:
      "bg-accept text-accept bg-opacity-20 px-2 py-1 rounded-2xl font-medium text-sm text-center",
  },
};

const Project = ({ project }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="bg-bg_primary rounded-2xl shadow-sm p-5 border border-border flex items-start justify-between flex-col md:h-64 ">
        <div className="flex items-start justify-between w-full gap-8">
          <div className="flex gap-4 items-start">
            <h1 className="text-lg font-bold text-text_primary">
              {project.title}
            </h1>
            <span className={`${statusStyle[project.status].style}`}>
              {statusStyle[project.status].label}
            </span>
          </div>
          <div className="space-y-2 hidden sm:block">
            <div className="text-text_primary font-bold text-sm capitalize">
              {project.category.title}
            </div>
            <div className="text-xs text-text_secondary text-right">
              {toLocalDate(project.createdAt)}
            </div>
          </div>
        </div>
        <div>
          <p className="text-sm text-text_secondary leading-[25px] md:max-w-xl ">
            {truncate(project.description, 200)}
          </p>
        </div>
        <div className="flex items-start justify-start gap-5 flex-wrap mt-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-bg_active capitalize text-sm text-text_secondary py-1 px-3 border border-border rounded-2xl"
            >
              {tag}
            </span>
          ))}
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="btn bg-primary text-white mt-5 self-end"
        >
          Send proposal
        </button>
      </div>
      <Modal
        title="Create new proposal"
        open={open}
        onClose={() => setOpen(false)}
      >
        <CreateProposalForm
          projectId={project._id}
          onClose={() => setOpen(false)}
        />
      </Modal>
    </>
  );
};

export default Project;
