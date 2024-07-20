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
    <div>
      <form className="space-y-4" onSubmit={(e) => sumbitFormHandler(e)}>
        <div>
          <label className="block text-text_light mb-1">Phone number:</label>
          <input
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            type="text"
            className="w-full bg-bg_light p-2 outline-0 rounded-lg text-text_light"
          />
        </div>
        <button
          type="sumbit"
          className="bg-primary text-white font-bold p-2 rounded-lg disabled:opacity-30"
          disabled={isPending && true}
        >
          Send Code
        </button>
      </form>
    </div>
  );
};

export default SendOTPForm;
