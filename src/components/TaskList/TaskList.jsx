import React from "react";
import FailedTask from "./FailedTask";
import CompleteTask from "./CompleteTask";
import NewTask from "./NewTask";
import AcceptTask from "./AcceptTask";

const TaskList = ({ data }) => {
  return (
    <div
      id="tasklist"
      className="flex overflow-x-auto items-center justify-start gap-5 flex-nowrap w-full py-5 h-[50%] mt-10"
    >
      {data.tasks.map((ele) => {
        if (ele.active) {
          return <AcceptTask />;
        }
        if (ele.newTask) {
          return <NewTask />;
        }
      })}
      {/* <AcceptTask />
      <NewTask />
      <CompleteTask />
      <FailedTask /> */}
    </div>
  );
};

export default TaskList;
