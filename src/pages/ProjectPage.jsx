import { useOwnerProject } from "../features/project/useOwnerProject";
import ProposalList from "../features/project/ProposalList";

const ProjectPage = () => {
  const { isLoading, project, isError } = useOwnerProject();

  if (isLoading) return <p className="text-center">is loading...</p>;

  if (!project)
    return (
      <p className="text-base text-slate-500 text-center">
        ther is no project. create project
      </p>
    );

  return (
    <div className="p-10 md:max-w-5xl ">
      <div>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
      </div>
      <ProposalList proposals={project.proposals} />
    </div>
  );
};

export default ProjectPage;
