import { TagsInput } from "react-tag-input-component";

const TagsField = ({ name, tags, onChange }) => {
  return (
    <div className="flex flex-col justify-center items-start gap-2">
      <label className="label">{name}</label>
      <TagsInput
        classNames={{
          tag: "text-sm p-2 bg-active rounded-lg text-text_primary font-medium",
          input: "input-field",
        }}
        value={tags}
        onChange={onChange}
        name={name}
      />
    </div>
  );
};

export default TagsField;
