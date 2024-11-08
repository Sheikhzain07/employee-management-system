import React from "react";

const CompleteTask = () => {
  return (
    <div className="flex-shrink-0 bg-yellow-400 p-5 w-[300px] h-full rounded-xl">
      <div className="flex items-center justify-between">
        <h3 className="bg-red-600 px-3 py-1 text-sm rounded">High</h3>
        <h4 className="text-sm">20 feb 2024</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">Make a youtube video</h2>
      <p className="text-sm mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
        perferendis ratione excepturi cupiditate vitae maiores?
      </p>
      <div className="mt-2">
        <button className="w-full">Complete</button>
      </div>
    </div>
  );
};

export default CompleteTask;
