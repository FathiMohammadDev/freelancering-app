import React from "react";

const SendOTPForm = () => {
  return (
    <div className="w-full sm:max-w-sm mx-auto p-5">
      <form className="space-y-4">
        <div>
          <label className="block text-text_light mb-1">Phone number:</label>
          <input type="text" className="w-full bg-bg_light p-2 outline-0 rounded-lg text-text_light" />
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

export default SendOTPForm;
