import React from "react";
import bestBurger from "../assets/bestBurger.jpg";
import tick from "../assets/icons8-tick-mark-50.png";

function BestFood() {
  return (
    <div className="grid grid-rows-1 md:grid-cols-2 py-2 sm:py-20  px-4 sm:px-10  md:px-20   ">
      <div>
        <img
          src={bestBurger}
          className=" h-30 sm:h-56 md:h-96 rounded shadow-xl shadow-gray-300 card "
          alt="not found"
        />
      </div>
      <div className="flex flex-col py-4">
        <div>
          <p className=" text-start  sm: text-3xl md:text-4xl font-extrabold text-amber-500  ">
            FIND YOUR BEST TASTED FOOD & DRINK JUST IN ONE PLACE
          </p>
          <p className=" text-start  text-xl sm:text-2xl md:text-3xl text-yellow-700  mt-5 py-4">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-x-8 py-8 text-amber-500 justify-between">
          <div className="flex flex-row justify-center items-center  ">
            <img src={tick} className="mr-2 h-8 md:h-16" alt="Best Price" />
            <span className="w-32 sm:w-72 " >Best Price</span>
          </div>
          <div className="flex flex-row justify-center items-center ">
            <img src={tick} className="mr-2 h-8 md:h-16" alt="Fresh Ingredient" />
            <span className="w-32 sm:w-72 ">Fresh Ingredient</span>
          </div>
          <div className="flex flex-row justify-center items-center ">
            <img src={tick} className="mr-2  h-8 md:h-16" alt="Best Service" />
            <span className="w-32 sm:w-72 ">Best Service</span>
          </div>
          <div className="flex flex-row justify-center items-center">
            <img src={tick} className="mr-2 h-8  md:h-16" alt="Health Protocol" />
            <span className="w-32 sm:w-72 ">Health Protocol</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestFood;
