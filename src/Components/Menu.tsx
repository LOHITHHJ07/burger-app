import React, { useState } from "react";
import "../Styles/Menu.css";
import Food from "../assets/burger-4.png";
import Snack from "../assets/snack-4.png";
import Beverage from "../assets/beverage-3.png";
import Promo from "./Promo";
import BestFood from "./BestFood";
import MenuTypes from "./MenuTypes";
import Eateries from "./Eateries";

function Menu() {
  const [menu, setMenu] = useState(Eateries.Food);



  return (
    <div className=" py-8 sm:py-14 md:py-28">
      <div className=" sm:my-10 md:my-28">
        <ul className="grid  sm:grid-cols-3 gap-4 justify-center items-center text-xl px-20  text-center">
          <li className=" h-36 w-80 card bg-red-600  px-12  shadow-xl rounded flex items-center  justify-betweenflex-column sm:h-56  sm:w-auto ">
            <img src={Food} className=" h-20 w-20 sm:h-40 sm:w-40 mr-6 " alt="food" />
            <div>
              <h3 className="font-extrabold text-xl sm:text-xl md:text-4xl text-white">FOOD</h3>
              <p className=" sm:font-semibold text-xl sm:text-2xl text-red-900 mb-2">
                Lorem ipsum dolor sit.
              </p>{" "}
              <a className=" cursor-pointer underline  text-xl  text-red-900">
                buy online
              </a>
            </div>
          </li>
          <li className="card h-36 w-80 bg-lime-600   px-10  shadow-2xl rounded flex items-center flex-column sm:h-56  sm:w-auto ">
            <img src={Snack} className=" h-20 w-20 sm:h-40 sm:w-40 mr-6" alt="snack" />
            <div>
              {" "}
              <h3 className="font-extrabold text-xl sm:text-2xl md:text-4xl text-white">SNACK</h3>
              <p className="sm:font-semibold text-xl sm:text-2xl text-lime-900 mb-2">
                Lorem ipsum dolor sit.
              </p>{" "}
              <a className=" cursor-pointer underline text-xl  text-lime-900 ">
                buy online
              </a>
            </div>
          </li>
          <li className="card h-36 w-80 bg-amber-500 px-10 shadow-2xl rounded flex  items-center flex-column sm:h-56  sm:w-auto ">
            <img src={Beverage} className=" h-20 w-20 sm:h-40 sm:w-40 mr-6" alt="beverage" />
            <div>
              {" "}
              <h3 className="font-extrabold text-xl sm:text-2xl md:text-4xl text-white">
                BEVERAGE
              </h3>
              <p className="sm:font-semibold text-xl sm:text-2xl text-yellow-700 mb-2">
                Lorem ipsum dolor sit.
              </p>{" "}
              <a className="  cursor-pointer underline text-xl  text-yellow-700">
                buy online
              </a>
            </div>
          </li>
        </ul>
      </div>
      <Promo></Promo>
      <BestFood></BestFood>
      <div
        className=" menu-board flex flex-col my-5 mx-4 items-center  justify-center rounded-xl  md:my-24 md:mx-64 py-12 bg-amber-500 "
        id="menu"
      >
        <p className=" text-xl sm:text-2xl  my-5  md:text-4xl  font-extrabold  text-yellow-700  ">
          MENU
        </p>
        <div className="card bg-white flex flex-cols justify-between items-center md:flex-row text-yellow-700 rounded-full mt-2 mb-5 ">
          <button
            id="Food"
            className="btn1 text-xs font-bold py-4  w-24  sm:w-36 md:w-48   "
            onClick={() => {
              setMenu(Eateries.Food);
              document.getElementById("Food")?.classList.add("Food-btn");
              document.getElementById("Snack")?.classList.remove("Snack-btn");
              document.getElementById("Bev")?.classList.remove("Bev-btn");
            }}
          >
            FOOD
          </button>
          <button
            id="Snack"
            className=" font-bold py-4 w-24 sm:w-36  md:w-48  text-xs   "
            onClick={() => {
              setMenu(Eateries.Snacks);
              document.getElementById("Snack")?.classList.add("Snack-btn");
              document.getElementById("Bev")?.classList.remove("Bev-btn");
              document.getElementById("Food")?.classList.remove("Food-btn");
            }}
          >
            SNACKS
          </button>
          <button
            id="Bev"
            className=" btn3  font-bold text-xs  py-4  w-24 sm:w-36  md:w-48  "
            onClick={() => {
              setMenu(Eateries.Beverage);
              document.getElementById("Bev")?.classList.add("Bev-btn");
              document.getElementById("Food")?.classList.remove("Food-btn");
              document.getElementById("Snack")?.classList.remove("Snack-btn");
            }}
          >
            BEVERAGES
          </button>
        </div>
        <MenuTypes menu={menu} />
      </div>
    </div>
  );
}

export default Menu;
