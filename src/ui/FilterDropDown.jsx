import { useSearchParams } from "react-router-dom";

const FilterDropDown = ({ options, filterValue }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterValue) || "";

  const handleChange = (e) => {
    console.log(e.target.value);
    searchParams.set(filterValue, e.target.value);
    setSearchParams(searchParams);
  };

  return (
    <select
      value={currentFilter}
      onChange={(e) => handleChange(e)}
      className="input-field"
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.label}>
          {opt.label}
        </option>
      ))}
    </select>
  );
};

export default FilterDropDown;
