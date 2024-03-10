import React, { useState } from "react";
import { NavLink } from "react-router-dom";
const Login = () => {
  const [num,setNum] = useState(0);
  const handleSubmit = ()=>{
    
  }
  return (
    <div className=" w-1/3 h-96 mx-auto my-auto mt-24 bg-slate-900 rounded-2xl p-4">
      <div className=" h-full w-full flex flex-col pt-12 items-center gap-8 border-2 rounded-lg border-gray-400">
        <h1 className=" text-zinc-300 text-4xl">Login via OTP</h1>
        <input
          type="text"
          onChange={(e)=>setNum(e.target.value)}
          placeholder="Enter your mobile number"
          className="p-4 w-8/12 bg-slate-900 border-2 text-zinc-300 border--gray-400 rounded-lg"
        />
        <NavLink to="/otp" ><button className="text-zinc-300 text-lg border-2 p-1 pl-8 pr-8 border--gray-400 rounded-lg hover:scale-105">Send OTP</button></NavLink>
      </div>
    </div>
  );
};

export default Login;
