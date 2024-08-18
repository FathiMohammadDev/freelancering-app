import DatePicker from "react-multi-date-picker";

const DateField = ({ name, date, setDate }) => {
  return (
    <div className="flex flex-col justify-center items-start gap-2">
      <label className="label">{name}</label>
      <DatePicker
        value={date}
        onChange={setDate}
        containerClassName="input-field"
        className=""
      />
    </div>
  );
};

export default DateField;
