import TableSkleton from "../../../ui/skeletons/TableSkeleton";
import User from "./User";
import { useUsers } from "../useUsers";

const UsersList = () => {
  const { isLoading, users } = useUsers();

  if (isLoading) return <TableSkleton />;

  if (!users?.length)
    return (
      <p className="text-base text-slate-500 text-center">
        ther is no user
      </p>
    );

    
    return (
      <>
      <div className="relative overflow-x-auto bg-bg_primary rounded-2xl">
        <div className="flex items-center justify-between px-6 py-3">
          <h2 className="font-bold text-text_primary">Users</h2>
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-text_secondary">
          <Thead />
          <tbody>
            {users.map((user, index) => (
              <User key={user._id} userNum={index + 1} user={user} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UsersList;

const Thead = () => {
  return (
    <thead className="text-xs text-text_secondary font-bold">
      <tr>
        <th className="px-6 py-3 hidden md:table-cell">#</th>
        <th className="px-6 py-3">Name</th>
        <th scope="col" className="px-6 py-3 hidden md:table-cell">
          Email
        </th>
        <th scope="col" className="px-6 py-3 hidden md:table-cell">
          Phone number
        </th>
        <th scope="col" className="px-6 py-3 hidden md:table-cell">
          Role
        </th>
        <th scope="col" className="px-6 py-3">
          Status
        </th>
        <th scope="col" className="px-6 py-3">
          Processes
        </th>
      </tr>
    </thead>
  );
};
