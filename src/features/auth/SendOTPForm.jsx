import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { getOTP } from "../../services/authService";
import toast from "react-hot-toast";

const SendOTPForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const { data, error, isPending, mutateAsync } = useMutation({
    mutationFn: getOTP,
  });

  const sendOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await mutateAsync({ phoneNumber });
      toast.success(data.data.message);
      console.log(data);
    } catch (error) {
      toast.error(error?.response?.data?.message);
      console.log(error);
    }
  };

  return (
    <div>
      <form className="space-y-4" onSubmit={(e) => sendOtpHandler(e)}>
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
