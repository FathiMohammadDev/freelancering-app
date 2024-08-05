import { toLocalDate } from "../../utils/toLocalDate";

const ProjectDetails = ({ project }) => {
  console.log(project);
  return (
    <div className="p-5 space-y-4">
      <div className="flex items-start justify-between">
        <h1 className="text-xl font-bold text-text_primary">{project.title}</h1>
        <div className="space-y-2">
          <div className="text-text_primary font-bold text-sm capitalize">
            {project.category.title}
          </div>
          <div className="text-xs text-text_secondary text-right">
            {toLocalDate(project.createdAt)}
          </div>
        </div>
      </div>
      <div>
        <p className="text-sm text-text_secondary leading-[25px] md:max-w-xl ">
          {project.description}
        </p>
      </div>
      <div className="space-x-4">
        {project.tags.map((tag) => (
          <span className="bg-bg_active capitalize text-sm text-text_secondary py-1 px-3 border border-border rounded-2xl">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectDetails;
