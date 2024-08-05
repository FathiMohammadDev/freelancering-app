import { useState } from "react";
import Modal from "../../ui/Modal";
import { MdEdit, MdDelete } from "react-icons/md";
import { truncate } from "../../utils/truncate";
import { toLocalDate } from "../../utils/toLocalDate";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { useRemoveOwnerProject } from "./useRemoveOwnerProject";
import CreateOwnerProjectForm from "./CreateOwnerProjectForm";
import ToggleProjectStatus from "./ToggleProjectStatus";
import { Link } from "react-router-dom";
import { IoMdEye } from "react-icons/io";

const Project = ({ project, projectNum }) => {
  const [showRemoveProject, setShowRemoveProject] = useState(false);
  const [showEditProject, setShowEditProject] = useState(false);
  const { mutate: removeProject, isPending: disabled } =
    useRemoveOwnerProject();

  return (
    <tr className="bg-white border-b-[1px] border-border ">
      <td className="px-6 py-4">{projectNum}</td>
      <th
        scope="row"
        className="px-6 py-4 font-medium text-text_primary whitespace-nowrap"
      >
        <Link to={`/owner/projects/${project._id}`}>
          {truncate(project.title, 24)}
        </Link>
      </th>
      <td className="px-6 py-4">
        <ToggleProjectStatus project={project} />
      </td>
      <td className="px-6 py-4">{project.category.title}</td>
      <td className="px-6 py-4">{project.budget}$</td>
      <td className="px-6 py-4">{toLocalDate(project.deadline)}</td>
      <td className="px-6 py-4">
        <div className="flex items-center justify-center gap-5">
          <MdDelete
            className="w-5 h-5 cursor-pointer text-error"
            onClick={() => setShowRemoveProject(true)}
          />
          <Modal
            open={showRemoveProject}
            onClose={() => setShowRemoveProject(!showRemoveProject)}
          >
            <ConfirmDelete
              title={project.title}
              onClose={() => setShowRemoveProject(!showRemoveProject)}
              disabled={disabled}
              onConfirm={() =>
                removeProject(project._id, {
                  onSuccess: () => setShowRemoveProject(false),
                })
              }
            />
          </Modal>
          <MdEdit
            className="w-5 h-5 cursor-pointer text-warning"
            onClick={() => setShowEditProject(true)}
          />
          <Modal
            open={showEditProject}
            onClose={() => setShowEditProject(!showEditProject)}
          >
            <CreateOwnerProjectForm
              projectToEdit={project}
              onClose={() => setShowEditProject(false)}
            />
          </Modal>
          <Link to={`/owner/projects/${project._id}`}>
            <IoMdEye className="w-5 h-5 cursor-pointer text-success" />
          </Link>
        </div>
      </td>
    </tr>
  );
};

export default Project;
