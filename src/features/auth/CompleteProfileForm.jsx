import { useState } from "react";
import { completeProfile } from "../../services/authService";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CompleteProfileForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate()

  const { data, isPending, error, mutateAsync } = useMutation({
    mutationFn: completeProfile,
  });

  const sumbitFormHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await mutateAsync({ name, email, role });
      toast.success(data.data.message);
      console.log(data);
      if (data.data.user.status !== 2) {
        navigate("/");
        toast.error("wait for conformation");
        return
      }
      if (data.data.user.role === "OWNER") return navigate("/owner");
      if (data.data.user.role === "FREELANCER") return navigate("/freelancer");
    } catch (error) {
      toast.error(error?.response?.data?.message);
      console.log(error);
    }
  };

  return (
    <div className="space-y-4 p-5 text-center">
      <h1 className="text-3xl font-medium text-text_bold">
        Welcome to <span className="text-primary font-bold">LOGO</span>
      </h1>
      <p className="text-text_light text-sm py-2 pb-5">
        Complete your profile to activat your
        <br /> account app
      </p>
      <form className="space-y-2" onSubmit={(e) => sumbitFormHandler(e)}>
        <div className="relative">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="peer w-full outline-0 text-[rgb(125,125,125)] font-medium rounded-[35px] pb-2 pt-3 px-4 border-[1px] border-[rgb(125,125,125)] mb-4"
          />
          <label
            className={`pointer-events-none absolute  ${
              name !== "" ? "-top-3 left-4 scale-90" : "top-[10px] left-4"
            } text-[rgb(187,187,187)] transition-all ease-in-out bg-white px-2 peer-focus:-top-3 peer-focus:scale-90 peer-focus:text-[rgb(125,125,125)]`}
          >
            Username
          </label>
        </div>
        <div className="relative">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="peer w-full outline-0 text-[rgb(125,125,125)] font-medium rounded-[35px] pb-2 pt-3 px-4 border-[1px] border-[rgb(125,125,125)] mb-4"
          />
          <label
            className={`pointer-events-none absolute  ${
              email !== "" ? "-top-3 left-4 scale-90" : "top-[10px] left-4"
            } text-[rgb(187,187,187)] transition-all ease-in-out bg-white px-2 peer-focus:-top-3 peer-focus:scale-90 peer-focus:text-[rgb(125,125,125)]`}
          >
            Email
          </label>
        </div>
        <div className="flex items-center justify-evenly ">
          <div className="flex justify-center items-center">
            <label
              htmlFor="FREELANCER"
              className="text-[rgb(122,122,122)] font-medium"
            >
              Freelancer
            </label>
            <input
              className="cursor-pointer ml-2 form-radio text-primary"
              type="radio"
              id="FREELANCER"
              value="FREELANCER"
              name="role"
              checked={role === "FREELANCER"}
              onChange={(e) => setRole(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="OWNER"
              className="text-[rgb(122,122,122)] font-medium"
            >
              Owner
            </label>
            <input
              className="cursor-pointer ml-2 form-radio text-primary"
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
          className="w-full  bg-[rgb(1,1,1)] opacity-85  text-white  p-3 rounded-[35px] disabled:opacity-30"
        >
          Complete
        </button>
      </form>
    </div>
  );
};

export default CompleteProfileForm;
