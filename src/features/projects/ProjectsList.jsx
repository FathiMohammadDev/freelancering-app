import { MdEdit, MdDelete } from "react-icons/md";
import { useOwnerProjects } from "./useOwnerProjects";

const ProjectsList = () => {
  const { isError, isLoading, projects } = useOwnerProjects();

  console.log(isError, isLoading, projects);

  return (
    <>
      <h1 className="text-xl font-medium">Projects</h1>
      <div className="space-y-5">
        <Project />
      </div>
    </>
  );
};

export default ProjectsList;

const Project = ({}) => {
  return (
    <div className="bg-[#f3f5fa] p-5 rounded-2xl flex items-center justify-between gap-20 text-[rgb(93,92,92)] text-sm">
      <h3 className="text-base font-medium flex-1">
        Title of project by mohammad
      </h3>
      <div>Web Designe</div>
      <div>1000$</div>
      <div>Des 04,2019</div>
      {/* <div>Freelancer</div> */}
      <div className="flex items-center justify-center gap-5">
        <MdEdit className="w-5 h-5" />
        <MdDelete className="w-5 h-5" />
      </div>
    </div>
  );
};
