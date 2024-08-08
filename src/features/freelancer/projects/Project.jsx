import { toLocalDate } from "../../../utils/toLocalDate";

const Project = ({ project }) => {
  return (
    <div className="bg-bg_primary rounded-2xl shadow-sm p-5 space-y-5 border border-border">
      <div className="flex items-start justify-between">
        <h1 className="text-lg font-bold text-text_primary">{project.title}</h1>
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
      <button className="btn bg-primary text-white">Send Proposal</button>
    </div>
  );
};

export default Project;
