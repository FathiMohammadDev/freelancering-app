import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";
import SelectField from "../../ui/SelectField";
import { useState } from "react";
import TagsField from "../../ui/TagsField";
import DateField from "../../ui/DateField";
import { useCategories } from "../../hooks/useCategories";
import { useCreateOwnerProject } from "./useCreateOwnerProject";

const CreateOwnerProjectForm = ({ onClose }) => {
  const [tags, setTags] = useState([]);
  const [date, setDate] = useState(new Date());
  const { categories } = useCategories();
  const { isPending, mutate } = useCreateOwnerProject();
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (values) => {
    const newProject = {
      ...values,
      tags,
      deadline: new Date(date).toISOString(),
    };

    console.log(newProject);
    mutate(newProject, { onSuccess: () => {
      onClose()
      reset()
    } });
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
        name="title"
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
        name="description"
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
        name="budget"
      />
      <SelectField name="category" options={categories} register={register} />
      <TagsField name="tags" tags={tags} onChange={setTags} />
      <DateField date={date} setDate={setDate} name="dedline" />
      <button className="form-btn">Edit project</button>
    </form>
  );
};

export default CreateOwnerProjectForm;
