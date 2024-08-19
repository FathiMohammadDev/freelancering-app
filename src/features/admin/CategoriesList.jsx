import Modal from "../../ui/Modal";
import { useState } from "react";
import TableSkleton from "../../ui/skeletons/TableSkeleton";
import { useCategories } from "../../hooks/useCategories";
import AddCategoryForm from "./AddCategoryForm";
import Categori from "./Category";
import Category from "./Category";

const CategoriesList = () => {
  const { isLoading, adminCategory: categories } = useCategories();
  const [open, setOpen] = useState(false);

  if (isLoading) return <TableSkleton />;

  if (!categories?.length)
    return (
      <p className="text-base text-slate-500 text-center">
        ther is no project. create project
      </p>
    );

  return (
    <>
      <div className="relative overflow-x-auto bg-bg_primary rounded-2xl">
        <div className="flex items-center justify-between px-6 py-3">
          <h2 className="font-bold text-text_primary">Categories</h2>
          <button
            onClick={() => setOpen(!open)}
            className="bg-[#dcf4f4] py-2 px-4 bg-opacity-80 text-sm font-semibold text-[#4c9fa0] rounded-2xl"
          >
            Add category
          </button>
          <Modal open={open} onClose={() => setOpen(false)}>
            <AddCategoryForm onClose={() => setOpen(false)} />
          </Modal>
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-text_secondary">
          <Thead />
          <tbody>
            {categories.map((category, index) => (
              <Category
                key={category.title}
                catNum={index + 1}
                category={category}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CategoriesList;

const Thead = () => {
  return (
    <thead className="text-xs text-text_secondary font-bold">
      <tr>
        <th className="px-6 py-3">#</th>
        <th className="px-6 py-3">Categori name</th>
        <th scope="col" className="px-6 py-3 hidden md:table-cell">
          Description
        </th>
        <th scope="col" className="px-6 py-3 hidden md:table-cell">
          Type
        </th>
        <th scope="col" className="px-6 py-3">
          Processes
        </th>
      </tr>
    </thead>
  );
};
