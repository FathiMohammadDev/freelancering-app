import { useState } from "react";
import SendOTPForm from "./SendOTPForm";
import CheckOTPForm from "./CheckOTPForm";
import { useMutation } from "@tanstack/react-query";
import { getOTP } from "../../services/authService";
import { toast } from "react-hot-toast";

const AuthContainer = () => {
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");

  const { data, error, isPending, mutateAsync } = useMutation({
    mutationFn: getOTP,
  });

  const sendOtpHandler = async (value) => {
    try {
      const { data } = await mutateAsync({ phoneNumber: value });
      toast.success(data.data.message);
      setPhoneNumber(value)
      setStep(2);
      console.log(data);
    } catch (error) {
      toast.error(error?.response?.data?.message);
      console.log(error);
    }
  };

  const renderForms = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPForm sendOtpHandler={sendOtpHandler} isPending={isPending} />
        );
      case 2:
        return (
          <CheckOTPForm
            phoneNumber={phoneNumber}
            sendOtpHandler={sendOtpHandler}
            onBack={() => setStep(1)}
          />
        );
      default:
        return null;
    }
  };

  return <div className="w-full sm:max-w-sm mx-auto p-5">{renderForms()}</div>;
};

export default AuthContainer;
