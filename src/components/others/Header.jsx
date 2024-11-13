import React from "react";

const Header = (props) => {
  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    // window.location.reload();
    props.changeUser("");
  };
  return (
    // <div className="flex items-end justify-between">
    //   <h1 className="text-2xl font-medium">
    //     Hello 👋
    //     <br />
    //     <span className="text-3xl font-semibold">
    //       Employee Management System
    //     </span>
    //   </h1>
    //   <button
    //     onClick={logOutUser}
    //     className="bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-small"
    //   >
    //     Log Out
    //   </button>
    // </div>
    <div className="flex items-center justify-between w-full px-4 sm:px-6 md:px-8">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-medium text-white-800">
        Hello 👋
        <br />
        <span className="text-2xl sm:text-3xl md:text-4xl font-semibold">
          Employee Management System
        </span>
      </h1>
      <button
        onClick={logOutUser}
        className="bg-red-600 text-base sm:text-lg font-medium text-white px-4 sm:px-5 py-2 rounded-md sm:rounded-lg mt-2 sm:mt-0"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
