import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";
import { Bars } from "react-loader-spinner";

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
    <div className="text-center">
      <h1 className="text-xl font-medium text-text_bold">Create account</h1>
      <p className="text-text_light text-sm py-2">
        Please type your mobile number to
        <br /> send OTP code
      </p>
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
        <button type="sumbit" className="form-btn" disabled={isPending && true}>
          {isPending ? (
            <Bars
              height="25"
              width="25"
              color="#fff"
              ariaLabel="bars-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          ) : (
            "Send code"
          )}
        </button>
      </form>
    </div>
  );
};

export default SendOTPForm;
