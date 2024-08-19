import { toLocalDate } from "../../utils/toLocalDate";

const statusStyle = {
  CLOSED: {
    label: "Close",
    style:
      "bg-error text-error bg-opacity-20 px-2 py-1 rounded-2xl font-medium text-sm text-center",
  },
  OPEN: {
    label: "Open",
    style:
      "bg-accept text-accept bg-opacity-20 px-2 py-1 rounded-2xl font-medium text-sm text-center",
  },
};

const ProjectDetails = ({ project }) => {
  return (
    <div className="p-5 space-y-4">
      <div className="flex items-start justify-between gap-8">
        <div className="flex gap-4 items-start">
          <div className="space-y-2">
            <h1 className="text-xl font-bold text-text_primary">
              {project.title}
            </h1>
            {project.freelancer && (
              <div className="text-sm text-text_secondary">
                Freelancer: <b>{project.freelancer.name}</b>
              </div>
            )}
          </div>
          <span className={`${statusStyle[project.status].style}`}>
            {statusStyle[project.status].label}
          </span>
        </div>
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
          <span
            key={tag}
            className="bg-bg_active capitalize text-sm text-text_secondary py-1 px-3 border border-border rounded-2xl"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectDetails;
