import { TagsInput } from "react-tag-input-component";

const TagsField = ({ name, tags, onChange }) => {
  return (
    <div className="flex flex-col justify-center items-start gap-2">
      <label
        className="pointer-events-none text-right  
           text-[rgb(187,187,187)] "
      >
        {name}
      </label>
      <TagsInput value={tags} onChange={onChange} name={name} />
    </div>
  );
};

export default TagsField;
