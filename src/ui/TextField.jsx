const TextField = ({
  type = "text",
  name,
  register,
  errors,
  validationschema,
}) => {
  return (
    <div className="flex flex-col justify-center items-start gap-2">
      <label
        className="pointer-events-none text-right  
         text-[rgb(187,187,187)] "
      >
        {name}
      </label>
      <input
        {...register(name, validationschema)}
        type={type}
        className="peer w-full outline-0 text-[rgb(125,125,125)] bg-bg_light font-medium rounded-[35px] pb-2 pt-3 px-4"
      />
      <span className="text-sm text-rose-600 self-start">
        {errors && errors[name]?.message}
      </span>
    </div>
  );
};

export default TextField;
