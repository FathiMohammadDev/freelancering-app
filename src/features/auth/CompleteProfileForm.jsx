import { completeProfile } from "../../services/authService";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import TextField from "../../ui/TextField";
import { useForm } from "react-hook-form";

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
    console.log(values);
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
    <div className="space-y-4 p-5 text-center">
      <h1 className="text-3xl font-medium text-text_bold">
        Welcome to <span className="text-primary font-bold">LOGO</span>
      </h1>
      <p className="text-text_light text-sm py-2 pb-5">
        Complete your profile to activat your
        <br /> account app
      </p>
      <form className="space-y-2" onSubmit={handleSubmit(sumbitFormHandler)}>
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
        />
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
              checked={watch("role") === "FREELANCER"}
              {...register("role", { required: "this field requiredz" })}
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
              checked={watch("role") === "OWNER"}
              {...register("role", { required: "this field required" })}
            />
          </div>
          <span className="text-sm text-rose-600 self-start">
        {errors && errors.role?.message}
      </span>
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
