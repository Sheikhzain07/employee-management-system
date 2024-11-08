import "./App.css";
import { useState, useEffect, useContext } from "react";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvider";

function App() {
  const [user, setUser] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const authData = useContext(AuthContext);

  // useEffect(() => {
  //   if (authData) {
  //     const loggedInUser = localStorage.getItem("loggedInUser");
  //     if (loggedInUser) {
  //       setUser(loggedInUser.role);
  //     }
  //   }
  // }, [authData]);

  // console.log(loggedInUser);

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (authData) {
      const employee = authData.employees.find(
        (e) => email == e.email && password == e.password
      );
      if (employee) {
        setUser("employee");
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee" })
        );
      }
    } else {
      alert("invalid");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" && <AdminDashboard />}
      {user == "employee" && <EmployeeDashboard />}
    </>
  );
}

export default App;
