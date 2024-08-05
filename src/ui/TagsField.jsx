import { TagsInput } from "react-tag-input-component";

const TagsField = ({ name, tags, onChange }) => {
  return (
    <div className="flex flex-col justify-center items-start gap-2">
      <label className="label">{name}</label>
      <TagsInput value={tags} onChange={onChange} name={name} />
    </div>
  );
};

export default TagsField;
