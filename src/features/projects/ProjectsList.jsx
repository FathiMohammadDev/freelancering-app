import { useOwnerProjects } from "./useOwnerProjects";
import Project from "./Project";
import Modal from "../../ui/Modal";
import CreateOwnerProjectForm from "./CreateOwnerProjectForm";
import { useState } from "react";
import TableSkleton from "../../ui/skeletons/TableSkeleton";

const ProjectsList = () => {
  const { isLoading, projects } = useOwnerProjects();
  const [open, setOpen] = useState(false);

  if (isLoading) return <TableSkleton />;

  if (!projects?.length)
    return (
      <p className="text-base text-slate-500 text-center">
        ther is no project. create project
      </p>
    );

  return (
    <>
      <div className="relative overflow-x-auto bg-bg_primary rounded-2xl">
        <div className="flex items-center justify-between px-6 py-3">
          <h2 className="font-bold text-text_primary">Projects</h2>
          <button
            onClick={() => setOpen(!open)}
            className="bg-[#dcf4f4] py-2 px-4 bg-opacity-80 text-sm font-semibold text-[#4c9fa0] rounded-2xl"
          >
            Add project
          </button>
          <Modal
            createProject={true}
            title="Create new project"
            open={open}
            onClose={() => setOpen(false)}
          >
            <CreateOwnerProjectForm onClose={() => setOpen(false)} />
          </Modal>
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-text_secondary">
          <Thead />
          <tbody>
            {projects.map((project, index) => (
              <Project
                key={project._id}
                projectNum={index + 1}
                project={project}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProjectsList;

const Thead = () => {
  return (
    <thead className="text-xs text-text_secondary font-bold">
      <tr>
        <th className="px-6 py-3">#</th>
        <th className="px-6 py-3">Project name</th>
        <th scope="col" className="px-6 py-3">
          Status
        </th>
        <th scope="col" className="px-6 py-3">
          Category
        </th>
        <th scope="col" className="px-6 py-3">
          Price
        </th>
        <th scope="col" className="px-6 py-3">
          deadline
        </th>
        <th scope="col" className="px-6 py-3">
          Processes
        </th>
      </tr>
    </thead>
  );
};
