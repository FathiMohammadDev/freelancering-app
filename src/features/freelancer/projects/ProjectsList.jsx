import { useProjects } from "../../../hooks/useProjects";
import Project from "./Project";
import ProjectListHeader from "./ProjectListHeader";

const ProjectsList = () => {
  const { isLoading, projects, isError } = useProjects();
  if (isLoading) return <p>loading...</p>;

  return (
    <div className="space-y-4">
      <ProjectListHeader />
      {!projects?.length ? (
        <p className="text-base text-slate-500 text-center">
          ther is no project. create project
        </p>
      ) : (
        <div className="flex flex-col gap-5">
          {projects.map((project) => (
            <Project project={project} key={project._id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectsList;
