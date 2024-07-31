import { useOwnerProjects } from "./useOwnerProjects";
import Project from "./Project";
import Modal from "../../ui/Modal";
import CreateOwnerProjectForm from "./CreateOwnerProjectForm";

const ProjectsList = () => {
  const { isLoading, projects } = useOwnerProjects();
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
      <h1 className="text-xl font-medium">Projects</h1>
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
        <Modal open={true}>
          <CreateOwnerProjectForm />
        </Modal>
      </div>
    </>
  );
};

export default ProjectsList;
