import React from "react";
import homeImg from "../assets/home-image.png";
import fork from "../assets/icons8-fork-64.png";
import fresh from "../assets/icons8-fresh-50.png";
import water from "../assets/icons8-water-drop-50.png";
function Home() {
  return (
    <div className="flex flex-column justify-center  p-4 w-auto">
      <img
        className="h-auto w-96 drop-shadow-2xl shake"
        src={homeImg}
        alt="not found"
      />
      <div>
        <p className="text-8xl mt-20 text-amber-500">
          ENJOY BURGHAR MAKE YOUR TUMMY HAPPY
        </p>
        <p className="text-xl mt-4 ">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes.
        </p>
        <ul className="flex flex-row justify-evenly">
          <li className="p-2">
            <img src={fork} alt="fork" className="h-20" /> Delicious
          </li>
          <li className="p-2">
            <img src={water} alt="fork" className="h-20" /> Fresh
          </li>
          <li className="p-2">
            <img src={fresh} alt="fork" className="h-20" />
            Organic
          </li>
        </ul>
        <button className="bg-amber-500 text-white font-bold py-4 px-6 rounded mt-2 ">
          Learn more
        </button>
      </div>
    </div>
  );
}

export default Home;
