import React from "react";
import Food from "../assets/burger-1.png";
import Snack from "../assets/snack-1.png";
import Beverage from "../assets/beverage-1.png";
import Promo from "./Promo";
import BestFood from "./BestFood";

function Menu() {
  return (
    <div>
      <ul className="flex flex-row justify-evenly text-xl font-extrabold  text-white">
        <li className="bg-red-600 py-8 px-10 mt-4 mb-8 rounded flex flex-column ">
          <img src={Food} className="h-20 " alt="food" />
          <div> <h3>FOOD</h3>
          <p>Lorem ipsum dolor sit.</p> <button>buy online</button></div>
        </li>
        <li className="bg-lime-600  py-8 px-10 mt-2 mb-8 rounded flex flex-column   ">
          <img src={Snack} className="h-20" alt="snack" />
          <div> <h3>SNACK</h3>
         <p>Lorem ipsum dolor sit.</p> <button>buy online</button></div>
        </li>
        <li className="bg-yellow-600  py-8 px-10 mt-2 mb-8 rounded flex flex-column  ">
          <img src={Beverage} className="h-20" alt="beverage" />
          <div> <h3>BEVERAGE</h3>
          <p>Lorem ipsum dolor sit.</p> <button>buy online</button></div>
        </li>
      </ul>
      <Promo></Promo>
      <BestFood></BestFood>
    </div>
  );
}

export default Menu;
