const TableSkleton = () => {
  return (
    <table className="w-full  text-left rtl:text-right bg-white">
      <tbody className=" animate-pulse">
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
      </tbody>
    </table>
  );
};

export default TableSkleton;

const TableRow = () => {
  return (
    <tr className="border-b-[1px] border-border ">
      <th scope="row" className="px-6 py-4">
        <div className="bg-slate-300 h-4 w-32 rounded-lg"></div>
      </th>
      <td className="px-6 py-4">
        <div className="bg-slate-200 h-4 w-12 rounded-lg"></div>
      </td>
      <td className="px-6 py-4">
        <div className="bg-slate-200 h-4 w-12 rounded-lg"></div>
      </td>
      <td className="px-6 py-4">
        <div className="bg-slate-200 h-4 w-12 rounded-lg"></div>
      </td>
      <td className="px-6 py-4">
        <div className="bg-slate-200 h-4 w-12 rounded-lg"></div>
      </td>
      <td className="px-6 py-4">
        <div className="bg-slate-200 h-4 w-12 rounded-lg"></div>
      </td>
    </tr>
  );
};
