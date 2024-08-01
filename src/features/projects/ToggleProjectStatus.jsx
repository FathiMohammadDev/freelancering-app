import { Switch } from "@headlessui/react";
import { useState } from "react";
import Toggle from "../../ui/Toggle";
import { useToggleOwnerProject } from "./useToggleOwnerProject";

function ToggleProjectStatus({ project }) {
  const { status } = project;
  const { istoggling, toggleProject } = useToggleOwnerProject();

  const toggleHandler = () => {
    const newStatus = status === "OPEN" ? "CLOSED" : "OPEN";
    const values = { id: project._id, values: { status: newStatus } };
    console.log(values);
    toggleProject(values);
  };

  return (
    <div className="w-[5rem]">
      {istoggling ? (
        <p>loading</p>
      ) : (
        <Toggle
          enabled={status === "OPEN" ? true : false}
          label={status === "OPEN" ? "باز" : "بسته"}
          onChange={toggleHandler}
        />
      )}
    </div>
  );
}
export default ToggleProjectStatus;
