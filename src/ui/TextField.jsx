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
      <div className="w-full flex items-center justify-between">
        <label className="label">{name}:</label>
        <span className="err">{errors && errors[name]?.message}</span>
      </div>
      <input
        {...register(name, validationschema)}
        type={type}
        className={`${errors && errors[name]?.message && "bounce"} input-field`}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextField;
