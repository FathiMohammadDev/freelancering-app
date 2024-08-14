import { Switch } from "@headlessui/react";
import { useState } from "react";
import Toggle from "../../ui/Toggle";
import { useToggleOwnerProject } from "./useToggleOwnerProject";
import { Bars } from "react-loader-spinner";

function ToggleProjectStatus({ project }) {
  const { status } = project;
  const { istoggling, toggleProject } = useToggleOwnerProject();

  const toggleHandler = () => {
    const newStatus = status === "OPEN" ? "CLOSED" : "OPEN";
    const values = { id: project._id, values: { status: newStatus } };
    toggleProject(values);
  };

  return (
    <div className="w-[5rem]">
      {istoggling ? (
        <Bars
          height="25"
          width="25"
          color="#fff"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      ) : (
        <Toggle
          enabled={status === "OPEN" ? true : false}
          label={status === "OPEN" ? "open" : "closed"}
          onChange={toggleHandler}
        />
      )}
    </div>
  );
}
export default ToggleProjectStatus;
