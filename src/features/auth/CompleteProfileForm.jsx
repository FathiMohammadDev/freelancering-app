import { useState } from "react";
import { completeProfile } from "../../services/authService";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

const CompleteProfileForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const { data, isPending, error, mutateAsync } = useMutation({
    mutationFn: completeProfile,
  });

  const sumbitFormHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await mutateAsync({ name, email, role });
      toast.success(data.data.message);
      console.log(data);
    } catch (error) {
      toast.error(error?.response?.data?.message);
      console.log(error);
    }
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
          <label className="text-left block text-text_light mb-1">Name:</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="w-full bg-bg_light p-2 outline-0 rounded-lg text-text_light"
          />
        </div>
        <div>
          <label className="text-left block text-text_light mb-1">Email:</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            className="w-full bg-bg_light p-2 outline-0 rounded-lg text-text_light"
          />
        </div>
        <div className="flex justify-evenly">
          <div className="flex justify-center items-center">
            <label htmlFor="FREELANCER">Freelancer</label>
            <input
              className="cursor-pointer"
              type="radio"
              id="FREELANCER"
              value="FREELANCER"
              name="role"
              checked={role === "FREELANCER"}
              onChange={(e) => setRole(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="OWNER">Owner</label>
            <input
              className="cursor-pointer"
              type="radio"
              id="OWNER"
              value="OWNER"
              name="role"
              checked={role === "OWNER"}
              onChange={(e) => setRole(e.target.value)}
            />
          </div>
        </div>
        <button
          type="sumbit"
          disabled={isPending && true}
          className="bg-primary text-white w-full font-bold p-2 rounded-lg disabled:opacity-30 disabled:opacity-30"
        >
          Send Code
        </button>
      </form>
    </div>
  );
};

export default CompleteProfileForm;
