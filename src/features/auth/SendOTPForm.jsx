import TextField from "../../ui/TextField";
import { Bars } from "react-loader-spinner";

const SendOTPForm = ({
  phoneNumber,
  setPhoneNumber,
  sendOtpHandler,
  isPending,
}) => {
  const sumbitFormHandler = (e) => {
    e.preventDefault();
    sendOtpHandler();
  };

  return (
    <div className="text-center">
      <h1 className="text-xl font-medium text-text_bold">Create account</h1>
      <p className="text-text_light text-sm py-2">
        Please type your mobile number to
        <br /> send OTP code
      </p>
      <form className="space-y-4" onSubmit={(e) => sumbitFormHandler(e)}>
        <TextField
          label="Phone number"
          value={phoneNumber}
          setValue={(e) => setPhoneNumber(e.target.value)}
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
