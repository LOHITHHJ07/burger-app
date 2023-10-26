import React from "react";
import bestBurger from "../assets/bestBurger.jpg";
import tick from "../assets/icons8-tick-mark-50.png"

function BestFood() {
    return (
        <div className="flex justify-center items-center" >
            <img src={bestBurger} className="h-64  rounded m-4 flex flex-row justify-evenly" alt="not found" />
            <div > 
                <p className="w-5/6 text-left text-4xl font-extrabold text-amber-500  ">FIND YOUR BEST TASTED FOOD & DRINK JUST IN ONE PLACE</p>
                <p className="w-5/6 text-left text-xl font-extrabold">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                    ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
                    dis parturient montes.
                </p>
                <ul className="flex flex-row justify-between w-5/6">
                    <li className="flex flex-row justify-center h-8"><img src={tick} alt=" not found" />Best Price</li>
                    <li className="flex flex-row justify-center h-8"><img src={tick} alt=" not found" />Fresh Ingredient</li>
                    <li className="flex flex-row justify-center h-8"><img src={tick} alt=" not found" />Best Service</li>
                    <li className="flex flex-row justify-center h-8"><img src={tick} alt=" not found" />Health Protocol</li>
                </ul></div>

        </div>
    );
}

export default BestFood;
