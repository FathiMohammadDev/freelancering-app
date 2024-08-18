import { completeProfile } from "../../services/authService";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import TextField from "../../ui/TextField";
import { useForm } from "react-hook-form";
import Logo from "../../ui/Logo";

const CompleteProfileForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
  } = useForm();
  const navigate = useNavigate();

  const { data, isPending, error, mutateAsync } = useMutation({
    mutationFn: completeProfile,
  });

  const sumbitFormHandler = async (values) => {
    try {
      const { data } = await mutateAsync(values);
      toast.success(data.data.message);
      console.log(data);
      if (data.data.user.status !== 2) {
        navigate("/");
        toast.error("wait for conformation");
        return;
      }
      if (data.data.user.role === "OWNER") return navigate("/owner");
      if (data.data.user.role === "FREELANCER") return navigate("/freelancer");
    } catch (error) {
      toast.error(error?.response?.data?.message);
      console.log(error);
    }
  };

  return (
    <div className="flex w-full md:items-center justify-center h-screen">
      <div className="bg-primary w-full h-full p-20 md:flex justify-center flex-col hidden rounded-e-3xl">
        <h1 className="text-2xl text-white font-bold">
        Complete profile to use app
        </h1>
        <p className="text-sm text-white mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit <br />{" "}
                Aliquid Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eum
              </p>
      </div>
      <div className="space-y-4 p-5 w-full">
        <h1 className="text-2xl font-medium text-text_bold">
          Complete profile 
        </h1>
        <form className="space-y-4" onSubmit={handleSubmit(sumbitFormHandler)}>
          <TextField
            register={register}
            errors={errors}
            validationschema={{
              required: "required",
              minLength: {
                value: 10,
                message: "Min length 10 character",
              },
            }}
            name="name"
            placeholder="john doe"
          />
          <TextField
            register={register}
            errors={errors}
            validationschema={{
              required: "required",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "email format wran",
              },
            }}
            name="email"
            type="email"
            placeholder="johndoe@gmail.com"
          />
          <div className="flex items-center justify-center gap-4">
            <div className="flex justify-center items-center input-field w-auto">
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
                checked={watch("role") === "FREELANCER"}
                {...register("role", { required: "this field requiredz" })}
              />
            </div>
            <div className="flex justify-center items-center input-field w-auto">
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
                checked={watch("role") === "OWNER"}
                {...register("role", { required: "this field required" })}
              />
            </div>
            <span className="text-sm text-rose-600">
              {errors && errors.role?.message}
            </span>
          </div>
          <button
            type="sumbit"
            disabled={isPending && true}
            className="form-btn"
          >
            Complete
          </button>
        </form>
      </div>
    </div>
  );
};

export default CompleteProfileForm;
