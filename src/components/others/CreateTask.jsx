import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskAssignTo, setTaskAssignTo] = useState("");
  const [category, setCategory] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const [newTask, setNewTask] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    setNewTask({
      taskTitle,
      taskDescription,
      taskDate,
      taskAssignTo,
      category,
      active: false,
      newTask: true,
      completed: false,
      failed: false,
    });

    const data = userData;

    data.forEach((ele) => {
      if (taskAssignTo.toLowerCase() == ele.firstName.toLowerCase()) {
        ele.tasks.push(newTask);
        ele.taskStats.newTask = ele.taskStats.newTask + 1;
        // console.log(ele);
      }
    });
    setUserData(data);

    // console.log(data);

    setTaskTitle("");
    setTaskDescription("");
    setTaskDate("");
    setCategory("");
    setTaskAssignTo("");
  };
  return (
    // <div className="p-5 bg-[#1c1c1c] mt-5 rounded">
    //   <form
    //     onSubmit={(e) => {
    //       submitHandler(e);
    //     }}
    //     className="flex flex-wrap w-full items-start justify-between"
    //   >
    //     <div className="w-1/2">
    //       <div>
    //         <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
    //         <input
    //           value={taskTitle}
    //           onChange={(e) => {
    //             setTaskTitle(e.target.value);
    //           }}
    //           className="w-4/5 py-1 px-2 text-sm rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
    //           type="text"
    //           placeholder="Make a UI design"
    //         />
    //       </div>
    //       <div>
    //         <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
    //         <input
    //           value={taskDate}
    //           onChange={(e) => {
    //             setTaskDate(e.target.value);
    //           }}
    //           className="w-4/5 py-1 px-2 text-sm rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
    //           type="date"
    //         />
    //       </div>
    //       <div>
    //         <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
    //         <input
    //           value={taskAssignTo}
    //           onChange={(e) => {
    //             setTaskAssignTo(e.target.value);
    //           }}
    //           className="w-4/5 py-1 px-2 text-sm rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
    //           type="text"
    //           placeholder="Employee name"
    //         />
    //       </div>
    //       <div>
    //         <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
    //         <input
    //           value={category}
    //           onChange={(e) => {
    //             setCategory(e.target.value);
    //           }}
    //           className="w-4/5 py-1 px-2 text-sm rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
    //           type="text"
    //           placeholder="design, dev etc"
    //         />
    //       </div>
    //     </div>
    //     <div className="w-2/5 flex flex-col items-start">
    //       <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
    //       <textarea
    //         value={taskDescription}
    //         onChange={(e) => {
    //           setTaskDescription(e.target.value);
    //         }}
    //         className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
    //         name=""
    //         id=""
    //         cols="30"
    //         row="10"
    //       ></textarea>
    //       <button className="bg-emerald-500 py-3 px-5 hover:bg-emerald-600 rounded text-sm mt-4 w-full">
    //         Create Task
    //       </button>
    //     </div>
    //   </form>
    // </div>

    <div className="p-5 bg-[#1c1c1c] mt-5 rounded">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-wrap w-full items-start justify-between"
      >
        {/* Left side */}
        <div className="w-full sm:w-1/2 lg:w-1/2 mb-4 sm:mb-0">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => {
                setTaskTitle(e.target.value);
              }}
              className="w-full sm:w-4/5 py-1 px-2 text-sm rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Make a UI design"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              value={taskDate}
              onChange={(e) => {
                setTaskDate(e.target.value);
              }}
              className="w-full sm:w-4/5 py-1 px-2 text-sm rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="date"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
            <input
              value={taskAssignTo}
              onChange={(e) => {
                setTaskAssignTo(e.target.value);
              }}
              className="w-full sm:w-4/5 py-1 px-2 text-sm rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Employee name"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              className="w-full sm:w-4/5 py-1 px-2 text-sm rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="design, dev etc"
            />
          </div>
        </div>

        {/* Right side */}
        <div className="w-full sm:w-2/5 flex flex-col items-start">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => {
              setTaskDescription(e.target.value);
            }}
            className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button className="bg-emerald-500 py-3 px-5 hover:bg-emerald-600 rounded text-sm mt-4 w-full">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
