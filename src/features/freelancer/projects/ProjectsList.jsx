import { useProjects } from "../../../hooks/useProjects";
import Project from "./Project";

const ProjectsList = () => {
  const { isLoading, projects, isError } = useProjects();
  if (isLoading) return <p>loading...</p>;

  if (!projects?.length)
    return (
      <p className="text-base text-slate-500 text-center">
        ther is no project. create project
      </p>
    );
  return (
    <div>
      <div>
        <h2 className="font-bold text-text_primary">Projects</h2>
      </div>
      <div className="flex flex-col gap-10">
        {projects.map((project) => (
          <Project project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsList;
