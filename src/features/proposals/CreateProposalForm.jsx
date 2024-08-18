import { useForm } from "react-hook-form";
import { useCreateProposal } from "./useCreateProposal";
import TextField from "../../ui/TextField"

const CreateProposalForm = ({ projectId,onClose }) => {
  const { isPending, mutate } = useCreateProposal();
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const newPropValue = { ...data, projectId };
    mutate(newPropValue, {
      onSuccess: () => {
        onClose();
        reset();
      },
    });
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
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
        name="duration"
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
        name="price"
      />
      <button className="form-btn">Create Proposal</button>
    </form>
  );
};

export default CreateProposalForm;
