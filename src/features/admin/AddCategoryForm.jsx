import React from "react";
import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";
import { useCreateCategory } from "./useCreateCategory";

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
    <div className="space-y-4 p-5bg-slate-400">
      <p className="text-text_secondary text-center text-sm py-2 pb-5">
        Complete your profile to activat your
        <br /> account app
      </p>
      <form className="space-y-2" onSubmit={handleSubmit(sumbitFormHandler)}>
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
        <button
          type="sumbit"
          disabled={isPending && true}
          className="w-full  bg-[rgb(1,1,1)] opacity-85  text-white  p-3 rounded-[35px] disabled:opacity-30"
        >
          Complete
        </button>
      </form>
    </div>
  );
};

export default AddCategoryForm;
