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
      setPhoneNumber(value);
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
          <div className="flex w-full md:items-center justify-center h-screen">
            <div className=" rounded-e-3xl bg-primary w-full h-full p-20 md:flex justify-center flex-col hidden">
              <h1 className="text-2xl text-white font-bold">
                Welcome to freelancering
              </h1>
              <p className="text-sm text-white mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit <br />{" "}
                Aliquid Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eum
              </p>
            </div>
            <SendOTPForm
              sendOtpHandler={sendOtpHandler}
              isPending={isPending}
            />
          </div>
        );
      case 2:
        return (
          <div className="flex w-full md:items-center justify-center h-screen">
            <CheckOTPForm
              phoneNumber={phoneNumber}
              sendOtpHandler={sendOtpHandler}
              onBack={() => setStep(1)}
            />
            <div className=" rounded-s-3xl bg-primary w-full h-full p-20 md:flex justify-center flex-col hidden">
              <h1 className="text-2xl text-white font-bold">OTP Code</h1>
              <p className="text-sm text-white mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit <br />{" "}
                Aliquid Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eum
              </p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return <div className="">{renderForms()}</div>;
};

export default AuthContainer;
