import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);
  // console.log(authData.employees);
  return (
    <div className="bg-[#1c1c1c] p-5 rounded mt-5">
      {/* <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded text-center">
        <h2 className="text-lg sm:text-sm font-medium w-1/5">Employee Name</h2>
        <h3 className="text-lg sm:text-sm font-medium w-1/5">New Task</h3>
        <h5 className="text-lg sm:text-sm font-medium w-1/5">Active Task</h5>
        <h5 className="text-lg sm:text-sm font-medium w-1/5">Completed</h5>
        <h5 className="text-lg sm:text-sm font-medium w-1/5">Failed</h5>
      </div> */}
      <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded text-center">
        <h2 className="text-sm sm:text-lg font-medium w-1/8">Employee Name</h2>
        <h3 className="text-sm sm:text-lg font-medium w-1/8">New Task</h3>
        <h5 className="text-sm sm:text-lg font-medium w-1/8">Active Task</h5>
        <h5 className="text-sm sm:text-lg font-medium w-1/8">Completed</h5>
        <h5 className="text-sm sm:text-lg font-medium w-1/8">Failed</h5>
      </div>
      <div>
        {userData.map((ele, idx) => {
          return (
            <div
              key={idx}
              className="bg-gray-300 mb-2 py-2 px-4 flex justify-between rounded text-center"
            >
              <h2 className="text-lg font-medium w-1/5 text-black">
                {ele.firstName}
              </h2>
              <h3 className="text-lg font-medium w-1/5 text-[#1c1c1c]">
                {ele.taskStats.newTask}
              </h3>
              <h5 className="text-lg font-medium w-1/5 text-[#1c1c1c]">
                {ele.taskStats.active}
              </h5>
              <h5 className="text-lg font-medium w-1/5 text-green-800">
                {ele.taskStats.completed}
              </h5>
              <h5 className="text-lg font-medium w-1/5 text-red-600">
                {ele.taskStats.failed}
              </h5>
            </div>
          );
        })}
      </div>
    </div>

    // <div className="bg-[#1c1c1c] p-5 rounded mt-5">
    //   {/* Header row with titles */}
    //   <div className="bg-red-400 mb-3 py-3 px-4 flex flex-wrap justify-between rounded text-center">
    //     <h2 className="text-sm sm:text-lg font-medium w-full sm:w-1/5 mb-3 sm:mb-0">
    //       Employee Name
    //     </h2>
    //     <h3 className="text-sm sm:text-lg font-medium w-full sm:w-1/5 mb-3 sm:mb-0">
    //       New Task
    //     </h3>
    //     <h5 className="text-sm sm:text-lg font-medium w-full sm:w-1/5 mb-3 sm:mb-0">
    //       Active Task
    //     </h5>
    //     <h5 className="text-sm sm:text-lg font-medium w-full sm:w-1/5 mb-3 sm:mb-0">
    //       Completed
    //     </h5>
    //     <h5 className="text-sm sm:text-lg font-medium w-full sm:w-1/5 mb-3 sm:mb-0">
    //       Failed
    //     </h5>
    //   </div>

    //   {/* Data rows */}
    //   <div>
    //     {userData.map((ele, idx) => {
    //       return (
    //         <div
    //           key={idx}
    //           className="bg-gray-300 mb-3 py-3 px-4 flex flex-wrap justify-between rounded text-center"
    //         >
    //           <h2 className="text-sm sm:text-lg font-medium w-full sm:w-1/5 text-black mb-3 sm:mb-0">
    //             {ele.firstName}
    //           </h2>
    //           <h3 className="text-sm sm:text-lg font-medium w-full sm:w-1/5 text-[#1c1c1c] mb-3 sm:mb-0">
    //             {ele.taskStats.newTask}
    //           </h3>
    //           <h5 className="text-sm sm:text-lg font-medium w-full sm:w-1/5 text-[#1c1c1c] mb-3 sm:mb-0">
    //             {ele.taskStats.active}
    //           </h5>
    //           <h5 className="text-sm sm:text-lg font-medium w-full sm:w-1/5 text-green-800 mb-3 sm:mb-0">
    //             {ele.taskStats.completed}
    //           </h5>
    //           <h5 className="text-sm sm:text-lg font-medium w-full sm:w-1/5 text-red-600 mb-3 sm:mb-0">
    //             {ele.taskStats.failed}
    //           </h5>
    //         </div>
    //       );
    //     })}
    //   </div>
    // </div>
  );
};

export default AllTask;
