import { useState } from "react";
import SendOTPForm from "./SendOTPForm";
import CheckOTPForm from "./CheckOTPForm";

const AuthContainer = () => {
  const [step, setStep] = useState(1);

  const renderForms = () => {
    switch (step) {
      case 1:
        return <SendOTPForm />;
      case 2:
        return <CheckOTPForm />;
      default:
        return null;
    }
  };

  return <div className="w-full sm:max-w-sm mx-auto p-5">{renderForms()}</div>;
};

export default AuthContainer;
