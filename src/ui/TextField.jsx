const TextField = ({ value, setValue, type = "text", label }) => {
  return (
    <div className="relative">
      <input
        value={value}
        onChange={setValue}
        type={type}
        className="peer w-full outline-0 text-[rgb(125,125,125)] font-medium rounded-[35px] pb-2 pt-3 px-4 border-[1px] border-[rgb(125,125,125)] mb-4"
      />
      <label
        className={`pointer-events-none absolute  ${
          value !== "" ? "-top-3 left-4 scale-90" : "top-[10px] left-4"
        } text-[rgb(187,187,187)] transition-all ease-in-out bg-white px-2 peer-focus:-top-3 peer-focus:scale-90 peer-focus:text-[rgb(125,125,125)]`}
      >
        {label}
      </label>
    </div>
  );
};

export default TextField;
