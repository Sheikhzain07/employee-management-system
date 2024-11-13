import React from "react";
import FailedTask from "./FailedTask";
import CompleteTask from "./CompleteTask";
import NewTask from "./NewTask";
import AcceptTask from "./AcceptTask";

const TaskList = ({ data }) => {
  return (
    // <div
    //   id="tasklist"
    //   className="flex overflow-x-auto items-center justify-start gap-5 flex-nowrap w-full py-5 h-[50%] mt-10"
    // >
    //   {data.tasks.map((ele, idx) => {
    //     if (ele.newTask) {
    //       return <NewTask taskData={ele} key={idx} />;
    //     }
    //     if (ele.active) {
    //       return <AcceptTask taskData={ele} key={idx} />;
    //     }
    //     if (ele.completed) {
    //       return <CompleteTask taskData={ele} key={idx} />;
    //     }
    //     if (ele.failed) {
    //       return <FailedTask taskData={ele} key={idx} />;
    //     }
    //   })}
    //   {/* <AcceptTask />
    //   <NewTask />
    //   <CompleteTask />
    //   <FailedTask /> */}
    // </div>

    <div
      id="tasklist"
      className="flex overflow-x-auto items-center justify-start gap-5 flex-nowrap w-full py-5 mt-10 sm:flex-wrap sm:justify-between sm:h-auto"
    >
      {data.tasks.map((ele, idx) => {
        if (ele.newTask) {
          return <NewTask taskData={ele} key={idx} />;
        }
        if (ele.active) {
          return <AcceptTask taskData={ele} key={idx} />;
        }
        if (ele.completed) {
          return <CompleteTask taskData={ele} key={idx} />;
        }
        if (ele.failed) {
          return <FailedTask taskData={ele} key={idx} />;
        }
      })}
    </div>
  );
};

export default TaskList;
