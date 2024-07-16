import React, { useState } from "react";
import OtpInput from "react-otp-input";

const CheckOTPForm = () => {
  const [otp, setOtp] = useState("");
  return (
    <div className="w-full sm:max-w-sm mx-auto p-5">
      <form className="space-y-4">
        <div>
          <label className="block text-text_light mb-1">Enter code:</label>
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            renderSeparator={<span>&bull;</span>}
            renderInput={(props) => <input {...props} />}
            inputStyle="flex-1 p-4 rounded-lg bg-bg_light text-text_light outline-0"
            containerStyle="flex justify-center items-cnter"
          />
        </div>
        <button
          type="sumbit"
          className="bg-primary text-white font-bold p-2 rounded-lg"
        >
          Send Code
        </button>
      </form>
    </div>
  );
};

export default CheckOTPForm;
