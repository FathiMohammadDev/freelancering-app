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

  const sendOtpHandler = async () => {
    try {
      const { data } = await mutateAsync({ phoneNumber });
      toast.success(data.data.message);
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
          <SendOTPForm
            phoneNumber={phoneNumber}
            setPhoneNumber={(value) => setPhoneNumber(value)}
            sendOtpHandler={sendOtpHandler}
            isPending={isPending}
          />
        );
      case 2:
        return (
          <CheckOTPForm
            phoneNumber={phoneNumber}
            sendOtpHandler={sendOtpHandler}
          />
        );
      default:
        return null;
    }
  };

  return <div className="w-full sm:max-w-sm mx-auto p-5">{renderForms()}</div>;
};

export default AuthContainer;
