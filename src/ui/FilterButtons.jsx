import { useSearchParams } from "react-router-dom";

const FilterButtons = ({ options, filterValue }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterValue) || options.at(0).value;

  const handleChange = (value) => {
    searchParams.set(filterValue, value);
    setSearchParams(searchParams);
  };

  return (
    <div className="flex items-center gap-x-3">
      <span className="text-sm text-text_primary">Status:</span>
      <div className="flex items-center justify-center bg-bg_primary rounded-xl overflow-hidden transition-all">
        {options.map((opt) => {
          const isActive = currentFilter === opt.value;
          return (
            <button
              onClick={() => handleChange(opt.value)}
              key={opt.value}
              className={`py-1 px-4 text-text_secondary ${isActive && "bg-primary text-white"}`}
            >
              {opt.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default FilterButtons;
