import { useMutation } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import { checkOTP } from "../../services/authService";
import { toast } from "react-hot-toast";

const CheckOTPForm = ({ phoneNumber, sendOtpHandler }) => {
  const [otp, setOtp] = useState("");
  // const [time, setTime] = useState(60);

  // useEffect(() => {
  //   const timer =
  //     time > 0 && setInterval(() => setTime((time) => time - 1), 1000);

  //   return () => {
  //     if (timer) clearInterval(timer);
  //   };
  // }, [time]);

  const { data, error, isPending, mutateAsync } = useMutation({
    mutationFn: checkOTP,
  });

  const checkOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await mutateAsync({ otp, phoneNumber });
      toast.success(data.data.message);
      console.log(data);
    } catch (error) {
      toast.error(error?.response?.data?.message);
      console.log(error);
    }
  };
  return (
    <div className="text-center">
      <h1 className="text-xl font-medium text-text_bold">OTP Code</h1>
      <p className="text-text_light text-sm py-2">
        Please type a OTP verification code
        <br />
        sent to &ensp;
        <span className="font-semibold text-text_bold">{phoneNumber}</span>
      </p>
      <button
        className="text-primary text-sm font-semibold"
        onClick={sendOtpHandler}
      >
        Resend code?
      </button>
      <form
        className="space-y-6 text-center py-5"
        onSubmit={(e) => checkOtpHandler(e)}
      >
        <div>
          {/* <label className="block text-text_light mb-1">Enter code:</label> */}
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            renderSeparator={<span>&ensp;</span>}
            renderInput={(props) => <input {...props} />}
            inputStyle="flex-1 p-4 rounded-lg text-text_light border border-solid outline-0 focus:border-primary"
            containerStyle="flex justify-center items-cnter"
          />
        </div>
        <button
          type="sumbit"
          className="bg-primary text-white font-bold p-3 rounded-lg w-full "
        >
          Send Code
        </button>
      </form>
      <button
        className="text-primary text-sm font-semibold"
      >
        Change number?
      </button>
    </div>
  );
};

export default CheckOTPForm;
