import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";
import SelectField from "../../ui/SelectField";
import { useState } from "react";
import TagsField from "../../ui/TagsField";
import DateField from "../../ui/DateField";
import { useCategories } from "../../hooks/useCategories";

const CreateOwnerProjectForm = () => {
  const [tags, setTags] = useState([]);
  const [date, setDate] = useState(new Date());
  const {categories} = useCategories()
console.log(categories);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        register={register}
        errors={errors}
        validationschema={{
          required: "this field required",
          minLength: {
            value: 11,
            message: "should be 11 character",
          },
        }}
        name="Title"
      />
      <TextField
        register={register}
        errors={errors}
        validationschema={{
          required: "this field required",
          minLength: {
            value: 11,
            message: "should be 11 character",
          },
        }}
        name="Description"
      />
      <TextField
        register={register}
        errors={errors}
        validationschema={{
          required: "this field required",
          pattern: {
            value: /[0-9]/,
            message: "please enter number",
          },
        }}
        name="Budjet"
      />
      <SelectField name="category" options={categories} register={register} />
      <TagsField name="tags" tags={tags} onChange={setTags} />
      <DateField date={date} setDate={setDate} name="Dedline" />
      <button className="form-btn">Edit project</button>
    </form>
  );
};

export default CreateOwnerProjectForm;
