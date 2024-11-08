import React from "react";
import FailedTask from "./FailedTask";
import CompleteTask from "./CompleteTask";
import NewTask from "./NewTask";
import AcceptTask from "./AcceptTask";

const TaskList = ({ data }) => {
  return (
    <div
      id="tasklist"
      className="flex overflow-x-auto items-center justify-start gap-5 flex-nowrap w-full py-5 h-[55%] mt-10"
    >
      <AcceptTask />
      <NewTask />
      <CompleteTask />
      <FailedTask />
    </div>
  );
};

export default TaskList;
