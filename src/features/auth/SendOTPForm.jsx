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
        <div>
          <label className="text-left block text-text_light mb-1">
            Phone number:
          </label>
          <input
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            type="text"
            className="w-full bg-bg_light p-2 outline-0 rounded-lg text-text_light"
          />
        </div>
        <button
          type="sumbit"
          className="bg-primary text-white w-full font-bold p-2 rounded-lg disabled:opacity-30"
          disabled={isPending && true}
        >
          Send Code
        </button>
      </form>
    </div>
  );
};

export default SendOTPForm;
