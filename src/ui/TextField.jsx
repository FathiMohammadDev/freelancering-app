const TextField = ({
  type = "text",
  name,
  register,
  errors,
  validationschema,
  placeholder = "",
}) => {
  return (
    <div className="flex flex-col justify-center items-start gap-2">
      <label
        className="label"
      >
        {name}:
      </label>
      <input
        {...register(name, validationschema)}
        type={type}
        className="input-field"
        placeholder={placeholder}
      />
      <span className="err">
        {errors && errors[name]?.message}
      </span>
    </div>
  );
};

export default TextField;
