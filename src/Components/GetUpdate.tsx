import React from "react";


function GetUpdate() {
  return (
    <div className="  flex flex-col  justify-evenly py-4 px-4 sm:px-10  md:flex-row justify-evenly items-center mt-20 bg-amber-500 h-96 ">
      <div>
        <p className="text-2xl text-center  sm:text-4xl sm:text-start  font-extrabold py-4  text-green-700  ">GET EXCLUSIVE UPDATE</p>
        <p className="  text-xl sm:text-3xl text-center  sm:text-start font-semibold text-yellow-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div>
        <button className="bg-yellow-700 text-amber-500 text-xl py-2 px-4  md:text-2xl font-extrabold sm:py-4 sm:px-6 rounded sm:mt-4  sm:w-64 " >Subscribe Now</button>
      </div>
    </div>
  );
}

export default GetUpdate;
