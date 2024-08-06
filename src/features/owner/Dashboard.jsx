import { useOwnerProjects } from "../projects/useOwnerProjects";
import Stats from "./Stats";

const Dashboard = () => {
  const { isLoading, projects } = useOwnerProjects();

  if (isLoading) return <p>lodaing...</p>;

  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-2xl text-text_primary font-bold">
          General Statistics
        </h1>
        <p className="text-sm text-text_secondary">
          See a summary of your stats
        </p>
      </div>
      <Stats projects={projects} />
    </div>
  );
};

export default Dashboard;
