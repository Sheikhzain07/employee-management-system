import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("email is", email);
    console.log("password is", password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-600 p-20 rounded-xl">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className="outline-none bg-transparent py-3 px-5 border-2 border-emerald-600 rounded-full text-xl placeholder:text-gray-400"
            input="email"
            placeholder="Enter your email"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className="outline-none bg-transparent py-3 px-5 border-2 border-emerald-600 mt-3 rounded-full text-xl placeholder:text-gray-400"
            type="password"
            placeholder="Enter password"
          />
          <button className="text-white outline-none bg-emerald hover:bg-emerald-700 font-semibold py-2 px-8 w-full border-none bg-emerald-600 mt-5 rounded-full text-lg placeholder:text-white">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
