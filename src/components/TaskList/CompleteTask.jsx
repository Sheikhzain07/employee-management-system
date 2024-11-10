import React from "react";

const CompleteTask = ({ taskData }) => {
  return (
    <div className="flex-shrink-0 bg-yellow-400 p-5 w-[300px] h-full rounded-xl">
      <div className="flex items-center justify-between">
        <h3 className="bg-red-600 px-3 py-1 text-sm rounded">
          {taskData.category}
        </h3>
        <h4 className="text-sm">{taskData.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{taskData.taskTitle}</h2>
      <p className="text-sm mt-2">{taskData.taskDescription}</p>
      <div className="mt-2">
        <button className="w-full">Complete</button>
      </div>
    </div>
  );
};

export default CompleteTask;
