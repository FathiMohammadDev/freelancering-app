import { useOwnerProjects } from "../projects/useOwnerProjects";
import { useProposals } from "../proposals/useProposals";
import Stats from "./Stats";
import { useUsers } from "./useUsers";

const Dashboard = () => {
  const { isLoading: isLoadProp, proposals } = useProposals();
  const { isLoading: isLoadProjects, projects } = useOwnerProjects();
  const { isLoading: isLoadingUsers, users } = useUsers();

  if (isLoadProjects || isLoadProp || isLoadingUsers) return <p>lodaing...</p>;

  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-2xl text-text_primary font-bold">
          General Statistics
        </h1>
        <p className="text-sm text-text_secondary">
          See a summary of users stats
        </p>
      </div>
      <Stats
        users={users.length}
        projects={projects.length}
        proposals={proposals.length}
      />
    </div>
  );
};

export default Dashboard;
