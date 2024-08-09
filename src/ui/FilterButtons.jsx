import { useSearchParams } from "react-router-dom";

const FilterButtons = ({ options, filterValue }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterValue) || options.at(0).value;

  const handleChange = (value) => {
    searchParams.set(filterValue, value);
    setSearchParams(searchParams);
  };

  return (
    <div className="flex items-center justify-center bg-bg_primary">
      {options.map((opt) => {
        const isActive = currentFilter === opt.value;
        return (
          <button
            onClick={() => handleChange(opt.value)}
            key={opt.value}
            className={`py-1 px-4 ${isActive && "bg-primary"}`}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
};

export default FilterButtons;
