import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";
import Loader from "../../ui/Bars";

const SendOTPForm = ({ sendOtpHandler, isPending }) => {
  const sumbitFormHandler = (data) => {
    sendOtpHandler(data["Phone number"]);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="space-y-10 w-full p-10 md:px-20">
      <h1 className="text-xl font-medium text-text_primary">Create account</h1>
      <form className="space-y-4" onSubmit={handleSubmit(sumbitFormHandler)}>
        <TextField
          placeholder="0918 663 3451"
          register={register}
          errors={errors}
          validationschema={{
            required: "required",
            pattern: {
              value: /[0-9]/,
              message: "please enter number",
            },
            minLength: {
              value: 11,
              message: "should be 11 character",
            },
            maxLength: {
              value: 11,
              message: "should be 11 character",
            },
          }}
          name="Phone number"
        />
        <button type="sumbit" className="form-btn" disabled={isPending}>
          {isPending ? <Loader /> : "Send code"}
        </button>
      </form>
    </div>
  );
};

export default SendOTPForm;
