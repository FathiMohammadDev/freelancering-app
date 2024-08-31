import React from "react";
import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";
import { useCreateCategory } from "./useCreateCategory";
import Loader from "../../ui/Bars";

const AddCategoryForm = ({ onClose }) => {
  const { isPending, mutate } = useCreateCategory();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const sumbitFormHandler = (data) => {
    const newData = { ...data, englishTitle: data.title, type: "project" };
    mutate(newData, { onSuccess: () => onClose() });
  };
  return (
    <form className="space-y-4" onSubmit={handleSubmit(sumbitFormHandler)}>
      <TextField
        register={register}
        errors={errors}
        validationschema={{
          required: "required",
          minLength: {
            value: 4,
            message: "Min length 4 character",
          },
        }}
        name="title"
        placeholder="design"
      />
      <TextField
        register={register}
        errors={errors}
        validationschema={{
          required: "required",
          minLength: {
            value: 10,
            message: "Min length 10 character",
          },
        }}
        name="description"
        placeholder="description for yours"
      />
      <button type="sumbit" disabled={isPending} className="form-btn">
        {isPending ? <Loader /> : "Add"}
      </button>
    </form>
  );
};

export default AddCategoryForm;
