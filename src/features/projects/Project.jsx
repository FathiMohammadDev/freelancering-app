import { useState } from "react";
import Modal from "../../ui/Modal";
import { MdEdit, MdDelete } from "react-icons/md";
import { truncate } from "../../utils/truncate";
import { toLocalDate } from "../../utils/toLocalDate";
import ConfirmDelete from "../../ui/ConfirmDelete";

const Project = ({ title, budget, category, deadline, projectNum }) => {
  const [showRemoveProject, setShowRemoveProject] = useState(false);
  const [showEditProject, setShowEditProject] = useState(false);
  return (
    <div className="bg-[#f3f5fa] p-5 rounded-2xl flex items-center justify-between gap-10 text-[rgb(93,92,92)] text-sm">
      <div className="bg-purple-400 text-white font-semibold py-3 px-4 rounded-xl">
        {projectNum}
      </div>
      <h3 className="text-base font-medium flex-1">{truncate(title, 24)}</h3>
      <div>{category}</div>
      <div>{budget}$</div>
      <div>{toLocalDate(deadline)}</div>
      <div className="flex items-center justify-center gap-5">
        <MdEdit
          className="w-5 h-5 cursor-pointer"
          onClick={() => setShowEditProject(true)}
        />
        <Modal
          open={showEditProject}
          onClose={() => setShowEditProject(!showEditProject)}
        >
          <p>not completed edit project ):</p>
        </Modal>
        <MdDelete
          className="w-5 h-5 cursor-pointer"
          onClick={() => setShowRemoveProject(true)}
        />
        <Modal
          open={showRemoveProject}
          onClose={() => setShowRemoveProject(!showRemoveProject)}
        >
          <ConfirmDelete
            title={title}
            onClose={() => setShowRemoveProject(!showRemoveProject)}
            disabled={false}
          />
        </Modal>
      </div>
    </div>
  );
};

export default Project;
