import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const authData = useContext(AuthContext);
  console.log(authData.employees);
  return (
    <div className="bg-[#1c1c1c] p-5 rounded mt-5 h-48 overflow-auto">
      {authData.employees.map((ele, idx) => {
        return (
          <div
            key={idx}
            className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded"
          >
            <h2>{ele.firstName}</h2>
            <h3>Make a UI design</h3>
            <h5>Status</h5>
          </div>
        );
      })}
    </div>
  );
};

export default AllTask;
