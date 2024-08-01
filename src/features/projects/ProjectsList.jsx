import { useOwnerProjects } from "./useOwnerProjects";
import Project from "./Project";
import Modal from "../../ui/Modal";
import CreateOwnerProjectForm from "./CreateOwnerProjectForm";
import { useState } from "react";

const ProjectsList = () => {
  const { isLoading, projects } = useOwnerProjects();
  const [open, setOpen] = useState(false);
  console.log(isLoading, projects);

  if (isLoading) return <p className="text-center">is loading...</p>;

  if (!projects?.length)
    return (
      <p className="text-base text-slate-500 text-center">
        ther is no project. create project
      </p>
    );

  return (
    <>
      <div className="flex justify-between items-center mb-3">
        <h1 className="text-xl font-medium">Projects</h1>
        <button
          onClick={() => setOpen(!open)}
          className="bg-primary p-2 bg-opacity-80 text-white rounded-xl"
        >
          Add project
        </button>
      </div>
      <div className="space-y-5">
        {projects.map((project, index) => (
          <Project
            key={project._id}
            id={project._id}
            projectNum={index + 1}
            title={project.title}
            budget={project.budget}
            category={project.category.title}
            deadline={project.deadline}
          />
        ))}
        <Modal open={open} onClose={() => setOpen(false)}>
          <CreateOwnerProjectForm onClose={() => setOpen(false)} />
        </Modal>
      </div>
    </>
  );
};

export default ProjectsList;
