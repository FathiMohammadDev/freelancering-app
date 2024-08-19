import { useOwnerProject } from "../features/project/useOwnerProject";
import ProposalList from "../features/project/ProposalList";
import ProjectDetails from "../features/project/ProjectDetails";
import TableSkleton from "../ui/skeletons/TableSkeleton";

const ProjectPage = () => {
  const { isLoading, project, isError } = useOwnerProject();

  if (isLoading)
    return (
      <div className="p-10 md:max-w-5xl">
        <div className="p-5 bg-bg_primary rounded-2xl">
          <div className="animate-pulse space-y-8">
            <div className="bg-slate-300 h-4 w-44 rounded-lg"></div>
            <div className="space-y-2">
              <div className="bg-slate-200 h-4 w-[70%] rounded-lg"></div>
              <div className="bg-slate-200 h-4 w-[70%] rounded-lg"></div>
            </div>
            <div className="bg-slate-200 h-4 w-12 rounded-lg"></div>
          </div>
          <TableSkleton />
        </div>
      </div>
    );

  if (!project)
    return (
      <p className="text-base text-text_secondary text-center">
        ther is no project. create project
      </p>
    );

  return (
    <div className="p-4 md:p-10 md:max-w-5xl">
      <div className="bg-bg_primary rounded-2xl overflow-x-auto">
        <ProjectDetails project={project} />
        <ProposalList proposals={project.proposals} />
      </div>
    </div>
  );
};

export default ProjectPage;
