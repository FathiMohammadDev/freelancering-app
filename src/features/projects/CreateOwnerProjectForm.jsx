import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";
import SelectField from "../../ui/SelectField";
import { useState } from "react";
import TagsField from "../../ui/TagsField";
import DateField from "../../ui/DateField";
import { useCategories } from "../../hooks/useCategories";
import { useCreateOwnerProject } from "./useCreateOwnerProject";
import { useEditOwnerProject } from "./useEditOwnerProject";

const CreateOwnerProjectForm = ({ onClose, projectToEdit = {} }) => {
  const editId = projectToEdit._id;
  const editMode = Boolean(editId);
  const {
    title,
    description,
    budget,
    deadline,
    category,
    tags: prevTags,
  } = projectToEdit;

  let editValues = {};

  if (editMode) {
    editValues = {
      title,
      description,
      budget,
      category: category._id,
    };
  }

  const [tags, setTags] = useState(prevTags || []);
  const [date, setDate] = useState(new Date(deadline || ""));
  const { categories } = useCategories();
  const { isPending, mutate } = useCreateOwnerProject();
  const { isEditing, editProject } = useEditOwnerProject();
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({ defaultValues: editValues });

  const onSubmit = (values) => {
    const newProject = {
      ...values,
      tags,
      deadline: new Date(date).toISOString(),
    };
    if (editMode) {
      editProject(
        { id: editId, values: newProject },
        {
          onSuccess: () => {
            onClose();
            reset();
          },
        }
      );
    } else {
      mutate(newProject, {
        onSuccess: () => {
          onClose();
          reset();
        },
      });
    }
  };

  return (
    <form
      className="block md:grid grid-cols-2 grid-rows-3 gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextField
        register={register}
        errors={errors}
        validationschema={{
          required: "this field required",
          minLength: {
            value: 11,
            message: "should be 11 character",
          },
          maxLength: {
            value: 30,
            message: "should be 30 character",
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
