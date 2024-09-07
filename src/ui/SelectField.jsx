const SelectField = ({ name, register, options }) => {
    return (
      <div className="flex flex-col justify-center items-start gap-2">
        <label
          className="label"
        >
          {name}
        </label>
        <select
          {...register(name)}
          className="input-field appearance-none cursor-pointer"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {/* <span className="text-sm text-rose-600 self-start">
            {errors && errors[name]?.message}
          </span> */}
      </div>
    );
  };
  
  export default SelectField;
  