import React from "react";
import homeImg from "../assets/burger-3.png";
import fork from "../assets/icons8-fork-64.png";
import fresh from "../assets/icons8-fresh-50.png";
import water from "../assets/icons8-water-drop-50.png";
function Home() {
  return (
    <div className="flex flex-col items-center mt-24 md:mt-18 justify-center  md:flex md:flex-row   ">
      <img
        className=" h-48 w-48 sm:h-72 sm:w-72 shake md:h-96 md:w-96"
        src={homeImg}
        alt="not found"
      />
      <div className=" flex-col   text-yellow-700  justify-center items-center  ">
        <p className="heading  text-center mt-4 text-2xl  w-80  uppercase md:mt-20 font-extrabold text-amber-500 sm:text-3xl sm:w-auto md:text-6xl">
        Enjoy Burghar, Make Your Tummy Happy
        </p>
        <p className=" text-center mt-2 text-xl sm:text-2xl md:text-3xl text-yellow-700  md:mt-5 py-4">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes.
        </p>
        <ul className="flex flex-row justify-between md:justify-evenly py-4 font-semibold ">
          <li className="p-2 text-center">
            <img src={fork} alt="fork" className=" h-10 md:h-16 mb-2" /> Delicious
          </li>
          <li className="text-center p-2">
            <img src={water} alt="fork" className=" h-10 md:h-16  mb-2" />
            Fresh
          </li>
          <li className="p-2 text-center">
            <img src={fresh} alt="fork" className=" h-10 md:h-16  mb-2" />
            Organic
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
