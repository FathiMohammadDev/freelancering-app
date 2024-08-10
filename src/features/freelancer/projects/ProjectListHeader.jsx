import { useCategories } from "../../../hooks/useCategories";
import FilterButtons from "../../../ui/FilterButtons";
import FilterDropDown from "../../../ui/FilterDropDown";

const statusOption = [
  { label: "All", value: "ALL" },
  { label: "Open", value: "OPEN" },
  { label: "Closed", value: "CLOSED" },
];

const ProjectListHeader = () => {
  const { categories } = useCategories();

  return (
    <div>
      <h2 className="font-bold text-text_primary">Projects</h2>
      <div className="flex gap-x-10 gap-y-5 flex-wrap items-center">
        <FilterDropDown
          options={[
            { label: "latest", value: "latest" },
            { label: "earliest", value: "earliest" },
          ]}
          filterValue="sort"
        />
        <FilterDropDown options={categories} filterValue="category" />
        <FilterButtons options={statusOption} filterValue="status" />
      </div>
    </div>
  );
};

export default ProjectListHeader;
