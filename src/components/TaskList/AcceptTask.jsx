import React from "react";

const AcceptTask = ({ taskData }) => {
  //   console.log(taskData, "taskdata");
  return (
    <div className="flex-shrink-0 bg-red-400 p-5 w-[300px] h-full rounded-xl">
      <div className="flex items-center justify-between">
        <h3 className="bg-red-600 px-3 py-1 text-sm rounded">
          {taskData.category}
        </h3>
        <h4 className="text-sm">{taskData.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{taskData.taskTitle}</h2>
      <p className="text-sm mt-2">{taskData.taskDescription}</p>
      <div className="flex justify-between mt-4">
        <button className="bg-green-500 py-1 px-2 text-sm rounded-sm">
          Mark as Completed
        </button>
        <button className="bg-red-500 py-1 px-2 text-sm rounded-sm">
          Mark as Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
