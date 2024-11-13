import React from "react";

const TaskListNumbers = ({ data }) => {
  return (
    // <div className="flex mt-10 justify-between screen gap-5">
    //   <div className="bg-red-400 w-[45%] rounded-xl py-6 px-9">
    //     <h2 className="text-3xl font-semibold">{data.taskStats.newTask}</h2>
    //     <h3 className="text-xl font-medium">New Task</h3>
    //   </div>
    //   <div className="bg-blue-400 w-[45%] rounded-xl py-6 px-9">
    //     <h2 className="text-3xl font-semibold">{data.taskStats.completed}</h2>
    //     <h3 className="text-xl font-medium">Completed Task</h3>
    //   </div>
    //   <div className="bg-green-400 w-[45%] rounded-xl py-6 px-9">
    //     <h2 className="text-3xl font-semibold">{data.taskStats.active}</h2>
    //     <h3 className="text-xl font-medium">Accepted Task</h3>
    //   </div>
    //   <div className="bg-yellow-400 w-[45%] rounded-xl py-6 px-9">
    //     <h2 className="text-3xl font-semibold">{data.taskStats.failed}</h2>
    //     <h3 className="text-xl font-medium">Failed Task</h3>
    //   </div>
    // </div>

    <div className="flex flex-wrap gap-5 mt-10 justify-between">
      <div className="bg-red-400 w-full sm:w-[45%] rounded-xl py-6 px-9">
        <h2 className="text-3xl font-semibold">{data.taskStats.newTask}</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="bg-blue-400 w-full sm:w-[45%] rounded-xl py-6 px-9">
        <h2 className="text-3xl font-semibold">{data.taskStats.completed}</h2>
        <h3 className="text-xl font-medium">Completed Task</h3>
      </div>
      <div className="bg-green-400 w-full sm:w-[45%] rounded-xl py-6 px-9">
        <h2 className="text-3xl font-semibold">{data.taskStats.active}</h2>
        <h3 className="text-xl font-medium">Accepted Task</h3>
      </div>
      <div className="bg-yellow-400 w-full sm:w-[45%] rounded-xl py-6 px-9">
        <h2 className="text-3xl font-semibold">{data.taskStats.failed}</h2>
        <h3 className="text-xl font-medium">Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumbers;
