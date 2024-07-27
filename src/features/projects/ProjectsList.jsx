import { MdEdit, MdDelete } from "react-icons/md";
import { useOwnerProjects } from "./useOwnerProjects";
import { truncate } from "../../utils/truncate";

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
        {projects.map((project) => (
          <Project
            key={project._id}
            title={project.title}
            budget={project.budget}
            category={project.category.title}
            deadline={project.deadline}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsList;

const Project = ({ title, budget, category, deadline }) => {
  return (
    <div className="bg-[#f3f5fa] p-5 rounded-2xl flex items-center justify-between gap-20 text-[rgb(93,92,92)] text-sm">
      <h3 className="text-base font-medium flex-1">{truncate(title,24)}</h3>
      <div>{category}</div>
      <div>{budget}$</div>
      <div>{deadline}</div>
      {/* <div>Freelancer</div> */}
      <div className="flex items-center justify-center gap-5">
        <MdEdit className="w-5 h-5" />
        <MdDelete className="w-5 h-5" />
      </div>
    </div>
  );
};
