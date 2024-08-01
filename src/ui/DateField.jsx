import DatePicker from "react-multi-date-picker";

const DateField = ({ name, date, setDate }) => {
  return (
    <div className="flex flex-col justify-center items-start gap-2">
      <label
        className="pointer-events-none text-right  
             text-[rgb(187,187,187)] "
      >
        {name}
      </label>
      <DatePicker
        value={date}
        onChange={setDate}
        containerClassName="w-full outline-0 text-[rgb(125,125,125)] bg-bg_light font-medium rounded-[35px] pb-2 pt-3 px-4"
      />
    </div>
  );
};

export default DateField;
