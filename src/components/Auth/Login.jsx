import React, { useState } from "react";

export const Login = ({ handleLogin }) => {
  // Check what is logged here

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password); // Ensure this is being called correctly
    setEmail("");
    setPassword("");
  };
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-400 rounded-xl ">
        {/* <h1 className='text-white '>Login</h1> */}
        <form
          onSubmit={(e) => {
            submitHandler(e);
            console.log("emai:",email);
            console.log("password",password);
            
            
          }}
          className="flex flex-col items-center justify-center p-16 "
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="mt-10 text-white bg-transparent border-2 border-emerald-400 rounded-full py-4 px-5 text-xl placeholder:text-white"
            type="email"
            placeholder="Enter Your Email"
          />

          <input
          value={password}
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
            className="mt-5 text-white bg-transparent border-2 border-emerald-400 rounded-full py-4 px-5 text-xl placeholder:text-white"
            type="password"
            placeholder="Enter Your Password"
          />
          <button className=" mt-10 text-white bg-emerald-600 border-2 border-emerald-400 rounded-full py-4 px-5 text-xl placeholder:text-white">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
