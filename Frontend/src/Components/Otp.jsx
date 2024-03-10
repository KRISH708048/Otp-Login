import React, { useState, useRef } from "react";

const Otp = () => {
  const [otp, setOtp] = useState([0,0,0,0]);
  const inputs = useRef([]);

  const handleChange = (index, e) => {
    console.log(index);
    const value = e.target.value;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp); 
    if (value !== "" && index < inputs.current.length - 1) {
      inputs.current[index + 1].focus();
    }
  };

  return (
    <div className="w-1/3 h-96 mx-auto my-auto mt-24 bg-slate-900 rounded-2xl p-4">
      <div className="h-full w-full flex flex-col pt-12 items-center gap-8 border-2 rounded-lg border-gray-400">
        <h1 className="text-zinc-300 text-4xl">Enter OTP</h1>

        <div className="w-11/12 flex justify-around">
          {[...Array(4)].map((_, index) => (
            <input
              key={index}
              type="text"
              inputMode="numeric"
              maxLength="1"
              className="p-6 text-2xl w-20 bg-slate-900 border-2 text-zinc-300 border-gray-400 rounded-lg"
              ref={(el) => (inputs.current[index] = el)}
              onChange={(e) => handleChange(index, e)}
              />
              
          ))}
        </div>
        <button className="text-zinc-300 text-lg border-2 p-1 pl-8 pr-8 border-gray-400 rounded-lg hover:scale-105">
          Proceed
        </button>
      </div>
    </div>
  );
};

export default Otp;
